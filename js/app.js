//second nav
let home = document.querySelector("#frist-link a p");
let product = document.querySelector("#second-link a p");
let popular = document.querySelector("#third-link a p");
let about = document.querySelectorAll("#forth-link a p");
let teamour = document.querySelectorAll("#sixth-link a p");
let FAQ = document.querySelector("#seventh-link a p");
let feedback = document.querySelector("#eightenth-link a p");
let contact = document.querySelector("#nith-link a p");
let heart = document.querySelector("#fdsf54");
let cart = document.querySelector("#ds3r4");

let coloring = () => {
  if (window.location.pathname == "/ourteam.html") {
    teamour[0].style.color = "#d12143";
    teamour[1].style.color = "#d12143";
    teamour[0].style.transform = "scale(1.1)";
    teamour[1].style.transform = "scale(1.1)";
    teamour[0].style.fontWeight= "bold";
  }
  if (window.location.pathname == "/abuot.html") {
    about[0].style.color = "#d12143";
    about[1].style.color = "#d12143";
    about[0].style.transform = "scale(1.1)";
    about[1].style.transform = "scale(1.1)";
    about[0].style.fontWeight= "bold";
    home.style.color = "antiquewhite";

  }
  if (window.location.pathname == "/") {
    home.style.color = "#d12143";
    home.style.transform = "scale(1.1)";
    home.style.fontWeight= "bold";
  }
  if (window.location.pathname == "/cart.html") {
    cart.style.color = "#d12143";
    cart.style.transform = "scale(1.1)";
    cart.style.fontWeight= "bold";
    // heart.style.color = "red";
    // heart.style.transform = "scale(1.1)";
    // heart.style.fontWeight= "bold";
  }

  if (window.location.pathname == "/index.html") {
    home.style.color = "#d12143";
    home.style.transform = "scale(1.1)";
    home.style.fontWeight= "bold";

  }
  if (window.location.pathname == "/product.html" || window.location.pathname == "/product_details.html" ) {
    product.style.color = "#d12143";
    product.style.transform = "scale(1.1)";
    product.style.fontWeight= "bold";

  }
  if (window.location.pathname == "/FAQ.html") {
    FAQ.style.color = "#d12143";
    FAQ.style.transform = "scale(1.1)";
    FAQ.style.fontWeight= "bold";

  }
  if (window.location.pathname == "/feedback.html") {
    feedback.style.color = "#d12143";
    feedback.style.transform = "scale(1.1)";
    feedback.style.fontWeight= "bold";

  }
  if (window.location.pathname == "/contact.html") {
    contact.style.color = "#d12143";
    contact.style.transform = "scale(1.1)";
    contact.style.fontWeight= "bold";

  }
};
coloring(); 

//          Filter opretion
let ele_filter = document.querySelectorAll("#ele_filter div");
let ele_filter232 = document.querySelectorAll("#itrtyq83 h2 ");
let payment_opetion = document.querySelectorAll("#fdjf432w");
let Categories = document.querySelectorAll("#dssa1 li a");
let sorting = document.querySelectorAll("#sorting div");
let button_sure_filter = document.querySelectorAll("#button_sure_filter");
let images = document.querySelectorAll("#dsd443fdf");
let product_img = document.querySelector("#imdsd34 img");




images.forEach((li) => {
  if(window.location.pathname !== "/product.html"){
  li.addEventListener("click", linkedd);
  }
  if(window.location.pathname == "/product.html"){
  li.addEventListener("click", linkedd22);
  }
});


//payment
ele_filter232.forEach((li) => {
  li.addEventListener("click", removeActive33);
  li.addEventListener("click", manegeimg223);
});
function removeActive33() {
  ele_filter232.forEach((li) => {
    li.classList.remove("dsdwe320");
    this.classList.add("dsdwe320");
  });
}
function manegeimg223() {
  payment_opetion.forEach((el) => {
    el.style.display = "none";

    document.querySelectorAll(this.dataset.cat).forEach((ele) => {
      ele.style.display = "";
    });
  });
}
//payment
function linkedd() {
  location.href="../product.html"
}
function linkedd22() {
  location.href="../product-details.html";
}

ele_filter.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manegeimg);
});

Categories.forEach((li) => {
  li.addEventListener("click", manegeimg);
});
function removeActive() {
  ele_filter.forEach((li) => {
    li.classList.remove("active0");
    this.classList.add("active0");
  });
}
function manegeimg() {
  images.forEach((el) => {
    el.style.display = "none";

    document.querySelectorAll(this.dataset.cat).forEach((ele) => {
      ele.style.display = "";
    });
  });
}

sorting.forEach((li) => {
  li.addEventListener("click", manegeimg);
});
button_sure_filter.forEach((li) => {
  li.addEventListener("click", manegeimg);
});

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 50) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

/* <!--          Forth section (Top products )        --> */
// Swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let ele_filter1 = document.querySelectorAll("#ele_filter1 div");
let images1 = document.querySelectorAll("#imge_for_filtreng1 #dsd443fdf");
ele_filter1.forEach((li) => {
  li.addEventListener("click", removeActive1);
  li.addEventListener("click", manegeimg1);
});
function removeActive1() {
  ele_filter1.forEach((li) => {
    li.classList.remove("active0");
    this.classList.add("active0");
  });
}

function manegeimg1() {
  images1.forEach((el) => {
    el.style.display = "none";

    document.querySelectorAll(this.dataset.cat).forEach((ele) => {
      ele.style.display = "";
    });
  });
}

/* <!--         Our team           --> */

function muose_over(id) {
  document.getElementById(id).style.display = "block";
}
function muose_out(id) {
  document.getElementById(id).style.display = "none";
}

//            FAQ           //
let cat212 = document.querySelectorAll("#cat212 h4");
let faq_qestation = document.querySelectorAll("#faq_qestation #wwwewew2");

cat212.forEach((li) => {
  li.addEventListener("click", removeActive1FAQ);
  li.addEventListener("click", manegeimg_faq_qestion);
});
function removeActive1FAQ(){
  cat212.forEach((li) => {
    li.classList.remove("faqactive");
    this.classList.add("faqactive");
  });
}

function manegeimg_faq_qestion() {
  faq_qestation.forEach((el) => {
    el.style.display = "none";

    document.querySelectorAll(this.dataset.cat).forEach((ele) => {
      ele.style.display = "";
    });
  });
}


//               Media Query
let frist_dropdown1 = document.getElementById("left-nav");
let frist_dropdown = document.querySelectorAll("#left-nav p");

frist_dropdown.forEach((li) => {
  li.addEventListener("click", zIndexing);
});
function zIndexing() {
  frist_dropdown1.style.zIndex = "999999999999999999999999999999";
}

let hpeq12 = document.getElementById("hpeq12");
let serchengin = document.getElementById("serchengin1");
hpeq12.addEventListener("click", focusing);
function focusing() {
  serchengin.focus();
}



// Read More function
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
