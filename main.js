var data = [{
        sellername: "Rahul Gupta",
        sellernum: "+91 4534567890",
        product: "Gaming Laptop",
        price: "150,000",
        image1: "https://apollo.olx.in/v1/files/rp3iy4cvcdca2-IN/image;s=360x0",
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjg2Zn_sYNPL0Bwg4YnvUm-YtSWJg2r6u-iLJSl0rA5Iowuxlmxe-_QCau3eQAUc8Z5hs&usqp=CAU",
        image3: "https: //encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrLZSgVvHpCfDsuugShrGHGww5JuXEHuTo0S1KmApCsX4Dxk_-OPQSybYyqO4VGLcPh4s&usqp=CAU",
        description: "High-performance gaming laptop with powerful graphics and smooth performance. Comes with a 1-year warranty.",
        postTime: "Janakpuri, New Delhi. 5 mins ago",
    },
    {
        sellername: "Hitesh Chaudhary",
        sellernum: "+91 8887654321",
        product: "Electric Scooter",
        price: "75,000",
        image1: "https://swarajya.gumlet.io/swarajya/2021-08/14420cae-9d7f-4ce3-b6a3-0f3f3fab4c17/ola_s1.jpg?w=610&q=50&compress=true&format=auto",
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFdUB_9mt3cehtp7VFAAHL9Nj4EWzpyQez3W6T1t7uyy8WeqFpWMnG_V1EEvjFwBWv324&usqp=CAU",
        image3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnPnIt4tlXJrjV8NggCqxDYljOc2Hc4n2URXZqAapVSDi9RSyMyPise45jtNRxAz1fl4&usqp=CAU",
        description: "Eco-friendly electric scooter with long battery life. Perfect for city commuting. Lightweight and foldable.",
        postTime: "Shahdara, Delhi. 10 mins ago",
    },
    {
        sellername: "Mohit Kumar",
        sellernum: "+91 87123456789",
        product: "Smartphone",
        price: "45,000",
        image1: "https://cdn.prod.website-files.com/5e83466828f0fa11a39d46ff/639aec3e08d61279e3b8d8d4_iPhone%2012%20main%20image.png",
        image2: "https://media.extra.com/i/aurora/100260270_100_01?fmt=auto&w=720",
        image3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScNHHrZwHFWv2tBkYy49-5qCHxP3-Gae8QE0dYyLcBJFWNF5HrCQuoKRMhUKQaNJ-SqQA&usqp=CAU",
        description: "Latest model smartphone with an AMOLED display, 128GB storage, and a powerful camera system.",
        postTime: "Moti Nagar,Delhi. 30 mins ago",
    },
    {
        sellername: "Vihaan Sachdeva",
        sellernum: "+91 9998765432",
        product: "Smartwatch",
        price: "20,000",
        image1: "https://rukminim2.flixcart.com/image/850/1000/xif0q/smartwatch/q/g/g/44-t55-android-ios-zwero-yes-original-imagmrxg8fznyqkg.jpeg?q=90&crop=false",
        image2: "https://rukminim2.flixcart.com/image/850/1000/xif0q/smartwatch/g/k/v/40-a1-smart-watch-s-n-mod5ksyfnuzckkbeb-android-ios-rgdev-original-imagnhqmzxfg5dgf.jpeg?q=20&crop=false",
        image3: "https://rukminim2.flixcart.com/image/850/1000/xif0q/smartwatch/6/n/y/40-a1-smart-watch-s-n-morcgqth4wadh9asy-android-ios-correngo-yes-original-imaghfdhzp4gd4jv.jpeg?q=20&crop=false",
        description: "Feature-packed smartwatch with heart rate monitor, GPS, and water resistance. Stylish and functional.",
        postTime: "Ahemdabad,Gujarat . 1 hour ago",
    },
];

var onClickFunc = function(item) {
    console.log(item);
    sessionStorage.setItem("products", JSON.stringify(item));
    var getUserMail = sessionStorage.getItem("mail");
    if (getUserMail) {
        location.href = "products.html";
    } else {
        alert("SignIn Required to view the product details");
    }
};

window.onload = function() {
    var getDataFromStorage = localStorage.getItem("DATA");
    if (!getDataFromStorage) {
        localStorage.setItem("DATA", JSON.stringify(data));
    }

    var getData = localStorage.getItem("DATA");
    var Arrangedata = JSON.parse(getData);

    var row = null;
    Arrangedata.forEach(function(item, index) {
        if (index % 4 === 0) {
            row = document.createElement("div");
            row.className = "row mt-1";
        }
        var itemContainer = document.createElement("div");
        itemContainer.className =
            "card mt-3 col col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3";
        itemContainer.onclick = function() {
            onClickFunc(item);
        };
        // itemContainer.onclick = onClickFunc(item);
        var datahtml = `<div class="card-div">
                 <img src="${item.image1}" class="cardimg car" alt="...">
               </div>
               <div id='cardbo' class="card-body">
                 <p class="card-text">${item.product}</p><br>
                 <h5 class="card-title">Rs ${item.price}</h5><br>
                 <p class="card-text"><small class="text-muted">${item.postTime}</small></p>
               </div>
             `;
        itemContainer.innerHTML = datahtml;
        if (row) {
            row.appendChild(itemContainer);
        }

        const productContainer = document.getElementById("product-container");
        if (productContainer) {
            productContainer.appendChild(row);
        }
        // console.log(getData);
    });

    // console.log(data);
    // var logout = (document.getElementById("log").innerText = "Login");
    // var logvalue = sessionStorage.setItem("log", "logout");
};

function post() {
    var sellerName = document.getElementById("sellername").value;
    var sellerNum = document.getElementById("sellernum").value;
    var productTitle = document.getElementById("productName").value;
    var price = document.getElementById("price").value;
    var Location = document.getElementById("Location").value;
    var productDetail = document.getElementById("productDetail").value;
    var Image1 = document.getElementById("img1").value;
    var Image2 = document.getElementById("img2").value;
    var Image3 = document.getElementById("img3").value;
    var obj = {
        sellername: sellerName,
        sellernum: sellerNum,
        product: productTitle,
        price: price,
        image1: Image1,
        image2: Image2,
        image3: Image3,
        description: productDetail,
        postTime: Location,
    };

    var getData = localStorage.getItem("DATA");
    var Arrangedata = JSON.parse(getData);
    Arrangedata.push(obj);
    localStorage.setItem("DATA", JSON.stringify(Arrangedata));
    // console.log(Arrangedata);
    location.href = "index.html";
    // match = false;
    // sessionStorage.setItem("SetData", JSON.stringify(data));
    // console.log(setdata);
}