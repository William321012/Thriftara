import '../styles/Search.css';
import React from 'react';
import { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import MultiLevelDropdown from '../components/Search/MultiLevelDropdown';
import {menswear, womenswear} from '../components/Search/dropdown_search.js';
import {departments} from '../components/Search/dropdown_department.js';
import SearchBody from '../components/Search/SearchBody';
import Brands from '../components/Search/SearchBody';
import { BsCartPlus } from 'react-icons/bs';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

/*
The Search pages primary features are a text search, a filter sidebar, 
and a main body aka listings body which displays search results. Sadly the textpart was saved for 
last and remained uncompleted. Additionally the size filters hooks with two dropdowns did not interact correctly
with the filter in the body even though when i test it itz behavior othewise correctly hooks and updates the state 
so its mystifying*/ 
function Search () {
  /*this is a react hook, it lets my javascript update the state and dom 
  despite React controlling the dom*/
  const [products, setProducts] = useState([]);
  //toasts
  const [showM, setShowM] = useState(false);
  const [showW, setShowW] = useState(false);
  const [showR, setShowR] = useState(false);
  /*another hook but this lets code be run which affects the dom*/
  useEffect(() => {
    loadProducts();
  }, []);

  /*gets all the products using axios. its async bec it takes a uknown 
  amount of time to fetch all products*/
  const loadProducts = async () => {
    const res = await axios.get("http://localhost:8080/products/getAllProduct");
    setProducts(res.data.data);
    //console.log(res.data.data);
  };
  /*meant to grab images but i had trouble with that too*/
  const navigate = useNavigate()

  let ImgURL = React.createRef();

  var createImgURL = (url) => {
    ImgURL = "http://localhost:8080" + url + "_1.png";
    // ImgURL = "http://localhost:8080" + url + "_1.webp";
  };
  /*adds to cart*/
  const addCart = async (id, num) => {
    await axios.post(`http://localhost:8080/carts/insertToCart?pid=${id}&amount=${num}`)
  }
  /*these keep track of all my Filters, including the minimum price, 
  departments, and brands*/
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [checkboxes, setCheckBoxes] = useState(new Map());
  const [womensDepartment, setWomensDepartment] = useState(true);
  const [mensDepartment, setMensDepartment] = useState(true);
  const [isGucci, setIsGucci] = useState(true);
  const [isNike, setIsNike] = useState(true);
  const [isPrada, setIsPrada] = useState(true);
  const [isSupreme, setIsSupreme] = useState(true);

  //console.log(products[8].brand);
  /*meant to handleCheckBoxes which had a mismatch in the backend with numbers 
  instead of letters and also update the state. It needs new map entirely bec it wont recognize the state updating 
  if you just change the existing map*/
  const handleCheckBoxes = (size) => {
    console.log("check worke", size);
    if(size === "S"){
      size = 1;
    } else if (size === "M"){
      size = 2;
    } else if (size === "L"){
      size = 3;
    } else if (size === "XL"){
      size = 4;
    }
    console.log(size, "handle ran");
    if(checkboxes.has(size)){
      setCheckBoxes(new Map(checkboxes.set(size, !checkboxes.get(size))));
    } else {
      setCheckBoxes(new Map(checkboxes.set(size, true)));
    }
    console.log(checkboxes);
  }
  /*checks if the checkboxes for the size filter contains the 
  passed in letter size*/
  const checkBoxContains = (size) => {
    if(size === "S"){
      size = 1;
    } else if (size === "M"){
      size = 2;
    } else if (size === "L"){
      size = 3;
    } else if (size === "XL"){
      size = 4;
    }
    
    return checkboxes.has(size);
  }
  //console.log(menswear);
  //console.log(womenswear);

  /*this is where all the html is created along with accompanying javascript
  and components*/
  return ( 
    
    <div className ="containerSearch">
        {/*left side*/}
        {/*heading for the filter sidebar*/}
        <header className="heading-filter box">
          <h1>Filters</h1>
        </header>
        {/*the sidebar with all the filters*/}
        <section className="sidebar">
          {/*checkboxes for allowed departments, defaulted to true and checked, 
          and which use the hooks upon being checked*/}
          <section className ="department sidebar box">
            <input defaultChecked="true" type="checkbox" autoComplete="off" className = "checkbox" onClick={() => setWomensDepartment(!womensDepartment)}/>
            <a className ="links">Womenswear</a>
            <input defaultChecked="true" type="checkbox" autoComplete="off" className = "checkbox" onClick={() =>setMensDepartment(!mensDepartment)}/>
            <a className ="links">Menswear</a>
          </section>
          {/*set the minimum and maximum price*/}
          <section className ="price-range sidebar box">
              {/*two text boxes with paras, only nums accepted*/}
              <form action="">
                  <label htmlFor="minPrice" className="price-label box">Min price</label><br/>
                  <input 
                      type="number" 
                      id="minPrice" 
                      pattern="/[0-9]*/"
                      value={minPrice}
                      onChange={(e) =>
                          setMinPrice((v) => (e.target.validity.valid ? e.target.value : v))
                      }
                  /><br/>
                  <label htmlFor="maxPrice" className="price-label box">Max price</label><br/>
                  <input 
                      type="number" 
                      id="maxPrice"
                      pattern="/[0-9]*/"
                      value={maxPrice}
                      onChange={(e) =>
                          setMaxPrice((v) => (e.target.validity.valid ? e.target.value : v))
                      }
                  /><br/>
                  <button id="price-button" type="button" onClick="alert">Go!</button>
              </form>
          </section>
          {/*multilevel dropdowns which drop from women and men to show the clothing 
          catgeories (tops, bottoms etc and then drops again when clicked 
          for checkboxes for the sizes*/}
          <section className ="size sidebar box">
              {/*womens dropdown with dropdowns for womens clothes whith dropdowns for sizes each*/}
              <MultiLevelDropdown 
                items={womenswear}
                isOpen= {true}
                handleCheckBoxes={handleCheckBoxes} />
              {/*mens dropdown with dropdowns for mens clothes whith dropdowns for sizes each*/}
              <MultiLevelDropdown 
                items={menswear}
                isOpen= {true}
                handleCheckBoxes={handleCheckBoxes} />
          </section>
          {/*filter for the brands allowed with checkboxes again*/}
          <section className = "brands sidebar box">
              {/*4 checkboxes*/}
            <input defaultChecked="true" type="checkbox" autoComplete="off" className = "checkbox" onClick={() => setIsNike(!isNike)}/>
            <a className ="links">Nike</a>
            <input defaultChecked="true" type="checkbox" autoComplete="off" className = "checkbox" onClick={() =>setIsSupreme(!isSupreme)}/>
            <a className ="links">Supreme</a>
            <input defaultChecked="true" type="checkbox" autoComplete="off" className = "checkbox" onClick={() => setIsPrada(!isPrada)}/>
            <a className ="links">Prada</a>
            <input defaultChecked="true" type="checkbox" autoComplete="off" className = "checkbox" onClick={() =>setIsGucci(!isGucci)}/>
            <a className ="links">Gucci</a>
          </section>
        </section>
        {/*right side*/}
        {/*filter for the listings body (right side)*/}
        <div className="heading-listings box">
            <h1>Listings</h1>
        </div>
        {/*the main body where search results are displayed with filters*/}
        <div className="listings-body box">
            <section>
              <section className='products-section'>
              <ToastContainer className='toast-notif'>
                <Toast onClose={() => setShowW(false)} show={showW} delay={5000} autohide>
                <Toast.Header>
                <strong className="me-auto">Success</strong>
              </Toast.Header>
                  <Toast.Body>Added to Cart</Toast.Body>
                </Toast>
              </ToastContainer>
              {
                //console.log(products[1], "prduct size", checkboxes, checkboxes.has(products[1].size), "testing testing")
              }
              {/*this filters all the products using the hooks I created 
              and which the filters in the sidebar update and then maps 
              through the matching products array creating a div with 
              image etc for each which is added to the dom all togethor 
              at the end*/}
              {products.filter(product => ((minPrice<product.price && maxPrice>product.price) || minPrice === null || maxPrice === null) 
                && (product.gender === 1 &&  mensDepartment || product.gender === 2 && womensDepartment) 
                && (isNike && product.brand === "Nike" || isPrada && product.brand === "Prada" || isSupreme && product.brand === "Supreme" || isGucci && product.brand === "Gucci"))
                .map((product) => (
                  <div className='product-items' key={product.id}>
                    {createImgURL(product.image) }
                    {console.log(ImgURL)}
                    <img src={ImgURL} alt={product.title} onClick={() => navigate(`/product/${product.title}`)} />
                    <h5>{product.title}</h5>
                    {/* <h6>Price: ${product.price.toFixed(2)}</h6> */}
                    <h6>Price: ${product.price}.00</h6>
                    <button className='add-cart-btn' onClick={() => addCart(product.id, 1) && setShowW(true)}>Add To Cart <BsCartPlus size={20} /></button>
                  </div>
                ))}
            </section>
          </section>
        </div>
    </div>
    );
}

 
export default Search;