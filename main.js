const phones = [
  {
    img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1705506653-61s0ZzwzSCL.jpg?crop=0.611xw:0.916xh;0.192xw,0.0409xh&resize=980:*",
    price: 250,
    oldPrice: 300,
    name: "Samasung Galaxy 12",
  },
  {
    img: "https://images.samsung.com/is/image/samsung/p6pim/sa_en/2401/gallery/sa-en-galaxy-s24-s928-490241-sm-s928blbqmea-539386629?$650_519_PNG$",
    price: 850,
    oldPrice: 900,
    name: "Samasung Galaxy 21",
  },
  {
    img: "https://www.verizon.com/is/image/VerizonWireless/iphone-14-yellow-spring2023",
    price: 550,
    oldPrice: 600,
    name: "Samasung Galaxy 69",
  },
  {
    img: "https://www.singtel.com/content/dam/singtel/eshop/Mobile/Handset/Apple/iPhone15/iphone15-promax-natural-titanium-a7a29c-600x600-01.jpg",
    price: 650,
    oldPrice: 700,
    name: "Apple Iphone 15 Pro Max",
  },
  {
    img: "https://auspost.com.au/shop/static/WFS/AusPost-Shop-Site/-/AusPost-Shop-auspost-B2CWebShop/en_AU/feat-cat/mobile-phones/always-on/category-tiles/MP_UnlockedPhones_3.jpg",
    price: 350,
    oldPrice: 400,
    name: "Xiaomi 14 Pro",
  },
  {
    img: "https://img.xfinitymobile.com/image/fetch/e_trim/w_420,h_420,c_fit,f_auto,q_auto,fl_lossy/https%3A%2F%2Fimg.xfinitymobile.com%2Fimage%2Fupload%2Fv1694553714%2Fclient%2Fcatalog%2Fdevices%2Fapple%2FApple_iPhone-15_Green_PRI.png",
    price: 450,
    oldPrice: 500,
    name: "Pixel 12",
  },
  {
    img: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-13-pro-sierra-blue-back.png?v=9166c13e",
    price: 450,
    oldPrice: 500,
    name: "Pixel 12",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/530257-Product-0-I-637672978948824210.jpg?v=1698811901",
    price: 450,
    oldPrice: 500,
    name: "Pixel 12",
  },
  {
    img: "https://images.samsung.com/is/image/samsung/p6pim/latin_en/2307/gallery/latin-en-galaxy-z-fold5-f946-sm-f946blbkgto-thumb-537225296?$344_344_PNG$",
    price: 450,
    oldPrice: 500,
    name: "Pixel 12",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/4/41/Samsung_Galaxy_Young.jpg",
    price: 450,
    oldPrice: 500,
    name: "Pixel 12",
  },
  {
    img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702624129/Croma%20Assets/Communication/Mobiles/Images/303267_zdrizs.png",
    price: 450,
    oldPrice: 500,
    name: "Pixel 12",
  },

  {
    img: "https://images.samsung.com/is/image/samsung/p6pim/latin_en/sm-a042mlbkgto/gallery/latin-en-galaxy-a04e-sm-a042-442430-sm-a042mlbkgto-534434265?$650_519_PNG$",
    price: 450,
    oldPrice: 500,
    name: "Pixel 12",
  },
  {
    img: "https://img.global.news.samsung.com/global/wp-content/uploads/2022/03/Galaxy-A-Unpacked_press-release_main3.jpg",
    price: 450,
    oldPrice: 500,
    name: "Pixel 12",
  },
];

const wrap = document.querySelector(".wrap");
console.log(wrap);

phones.map((item) => {
  wrap.innerHTML += `
    <div class="card">
        <img src=${item.img} alt="">
        <h4>${item.name}</h4>
        <h2>${item.price}$</h2>
        <s>${item.oldPrice}$</s> <br>
        <br>
        <button>
            Buy
        </button>
    </div>
    `;
});
