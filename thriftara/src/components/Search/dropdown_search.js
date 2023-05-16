/*basically a format for the size dropdowns. if id implemented text search 
then this would actually be created to match the matching products possible 
sizes with javascript*/
const menswear = [
    {
      label: "Menswear",
      children: [
        {
          label: "Tops",
          children: [
            {
              label: "S",
              onClick: () => console.log("Small clicked")
            },
            {
              label: "M",
              onClick: () => console.log("Medium clicked")
            },
            {
              label: "L",
              onClick: () => console.log("Large clicked")
            },
            {
              label: "XL",
              onClick: () => console.log("X-Large clicked")
            }
          ]
        },
        {
          label: "Bottoms",
          children: [
            {
              label: "S",
              onClick: () => console.log("Small clicked")
            },
            {
              label: "M",
              onClick: () => console.log("Medium clicked")
            },
            {
              label: "L",
              onClick: () => console.log("Large clicked")
            },
            {
              label: "XL",
              onClick: () => console.log("X-Large clicked")
            }
          ]
        }
      ]
    }
  ];
  const womenswear = [
    {
      label: "Womenswear",
      children: [
        {
          label: "Tops",
          children: [
            {
              label: "S",
              onClick: () => console.log("Small clicked")
            },
            {
              label: "M",
              onClick: () => console.log("Medium clicked")
            },
            {
              label: "L",
              onClick: () => console.log("Large clicked")
            },
            {
              label: "XL",
              onClick: () => console.log("X-Large clicked")
            }
          ]
        },
        {
          label: "Bottoms",
          children: [
            {
              label: "S",
              onClick: () => console.log("Small clicked")
            },
            {
              label: "M",
              onClick: () => console.log("Medium clicked")
            },
            {
              label: "L",
              onClick: () => console.log("Large clicked")
            },
            {
              label: "XL",
              onClick: () => console.log("X-Large clicked")
            }
          ]
        }
      ]
    }
  ];
  
    export {menswear, womenswear};