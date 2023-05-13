package com.example.store.controller;

import com.example.store.controller.exception.*;
import com.example.store.pojo.Address;
import com.example.store.pojo.Product;
import com.example.store.service.IProductService;
import com.example.store.util.JsonResult;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/products")
public class ProductController extends BaseController {

    @Resource
    IProductService productService;

    public static final int AVATAR_MAX_SIZE = 10 * 1024 * 1024;

    public static final List<String> AVATAR_TYPE = new ArrayList<>();

    static {
        AVATAR_TYPE.add("image/png");
        AVATAR_TYPE.add("image/jpeg");
        AVATAR_TYPE.add("image/gif");
        AVATAR_TYPE.add("image/webp");
    }

    @RequestMapping("/toplist")
    public JsonResult<List<Product>> topList() {
        JsonResult<List<Product>> result = new JsonResult<>();

        List<Product> topList = productService.getTopList();

        result.setState(200);
        result.setMessage("success");
        result.setData(topList);
        return result;
    }

    @RequestMapping("/getProduct")
    public JsonResult<Product> getProduct(Integer id) {
        JsonResult<Product> result = new JsonResult<>();

        Product product = productService.getProductById(id);

        result.setState(200);
        result.setMessage("success");
        result.setData(product);
        return result;
    }

    @RequestMapping("/getAllProduct")
    public JsonResult<List<Product>> getAllProduct() {
        JsonResult<List<Product>> result = new JsonResult<>();

        List<Product> products = productService.getAllProduct();

        result.setState(200);
        result.setMessage("success");
        result.setData(products);
        return result;
    }

    @RequestMapping("/uploadProduct")
    public JsonResult<Void> uploadProduct(@RequestParam("file") MultipartFile[] files, String title, String description,
            String price, String category,
            String number, String status, String brand, String size, String color, String gender,
            HttpServletRequest request) {
        JsonResult<Void> result = new JsonResult<>();
        // List<String> images = new ArrayList<>();
        int count = 1;

        System.out.println(price);

        Integer cid = (Integer) request.getSession().getAttribute("cid");

        String newFileName = UUID.randomUUID().toString().toUpperCase();

        for (MultipartFile f : files) {
            if (f.isEmpty()) {
                throw new FileEmptyException("file is empty");
            }

            if (f.getSize() > AVATAR_MAX_SIZE) {
                throw new FileSizeException("the size of file does not meet the requirement");
            }

            String contentType = f.getContentType();

            if (!AVATAR_TYPE.contains(contentType)) {
                throw new FileTypeException("the type of file does not meet the requirement");
            }

            // String upload = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\images";

            //for macOS
            String upload = System.getProperty("user.dir") + "/src/main/resources/static/images";

            System.out.println(upload);

            File dir = new File(upload);

            // create this directory if it does not exist
            if (!dir.exists()) {
                dir.mkdirs();
            }

            // get the name of the file first, then using UUID to create a new name for this
            // file
            // xxx.jpg
            String originalFilename = f.getOriginalFilename();
            System.out.println(originalFilename);

            // storing the suffix of the file
            int index = originalFilename.lastIndexOf(".");
            String suffix = originalFilename.substring(index);
            // get the suffix
            System.out.println(suffix);

            // encrypt this filename
            // String newFileName = UUID.randomUUID().toString().toUpperCase();

            // complete whole file name with encryption filename + suffix ex: xxx +.jpg
            String newFile = newFileName + "_" + count + suffix;

            // create a empty file that is under the "dir" directory(/upload) with the file
            // name "newFile"
            File dest = new File(dir, newFile);

            // transfer the data from the input file to that empty file "dest"
            try {
                f.transferTo(dest);
            } catch (FileStateException e) {
                throw new FileStateException("the state of file is abnormal");
            } catch (IOException e) {
                throw new FileIOException("IO Exception");
            }

            // return the path of the file for displaying
            // storing the path of the avatar to the db
            count++;
        }
        //for macOs
        String productImg = "//images//" + newFileName;
        
        // String productImg = "/images/" + newFileName;
        
        System.out.println(productImg);
        Product product = new Product();
        switch (category) {
            case "1":
                product.setItemType("Tops");
                break;
            case "2":
                product.setItemType("Bottoms");
                break;
            case "3":
                product.setItemType("Outerwear");
                break;
            case "4":
                product.setItemType("Footwear");
                break;
            case "5":
                product.setItemType("Accessories");
                break;

            default:
                result.setState(6666);
                result.setMessage("case failed");
                return result;
        }

        product.setCid(cid);
        product.setItemDescription(description);
        product.setTitle(title);
        product.setPrice(Long.parseLong(price));
        product.setNum(Integer.parseInt(number));
        product.setImage(productImg);
        product.setItemStatus(1);
        product.setPriority(8);
        product.setBrand(brand);
        product.setSize(size);
        product.setItemCondition(status);
        product.setColor(color);
        product.setGender(Integer.parseInt(gender));

        String username = (String) request.getSession().getAttribute("username");
        product.setCreatedUser(username);
        product.setCreateTime(new Date());
        product.setModifiedUser(username);
        product.setModifiedTime(new Date());

        System.out.println(product);

        productService.uploadProduct(product);

        result.setState(200);
        result.setMessage("success");
        return result;
    }

    @RequestMapping("/getProductByCategory")
    public JsonResult<List<Product>> getProductByCategory(String category) {
        JsonResult<List<Product>> result = new JsonResult<>();

        List<Product> productByCategory = productService.getProductByCategory(category);
        result.setState(200);
        result.setMessage("success");
        result.setData(productByCategory);

        return result;
    }

    // category="+id+"&brands="+brand+"&sizes="+size+"&conditions="+condition+"&genders="+gender,
    @RequestMapping("/getProductByFilter")
    public JsonResult<List<Product>> getProductByFilter(String category, String[] brands, String[] sizes,
            String[] conditions, Integer[] genders, Integer priceOrder, Integer priceRange) {
        JsonResult<List<Product>> result = new JsonResult<>();
        String pcategory = category;
        String[] pbrands = brands;
        String[] psizes = sizes;
        String[] pconditions = conditions;
        Integer[] pgenders = genders;

        Integer order = priceOrder;
        Integer ppriceRange = priceRange;

        List<Product> productByFilter = productService.getProductByFilter(pcategory, pbrands, psizes, pconditions,
                pgenders, priceOrder, ppriceRange);

        result.setState(200);
        result.setMessage("success");
        result.setData(productByFilter);

        return result;
    }

}
