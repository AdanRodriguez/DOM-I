const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const mainImg = document.getElementById("cta-img");
mainImg.setAttribute("src", siteContent["cta"]["img-src"]);

const midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);


const Nav = document.querySelectorAll("a");
Nav[0].textContent = siteContent.nav["nav-item-1"];
Nav[1].textContent = siteContent.nav["nav-item-2"];
Nav[2].textContent = siteContent.nav["nav-item-3"];
Nav[3].textContent = siteContent.nav["nav-item-4"];
Nav[4].textContent = siteContent.nav["nav-item-5"];
Nav[5].textContent = siteContent.nav["nav-item-6"];

const navColor = document.querySelectorAll("a");
navColor.forEach(element => {
  element.style.color = "green"
})

const ctaContent = document.getElementsByClassName("cta-text")[0];
// console.log(ctaContent)
ctaContent.getElementsByTagName("h1")[0].textContent = siteContent["cta"]["h1"];
ctaContent.getElementsByTagName("button")[0].textContent = siteContent["cta"]["button"];

// const H1 = document.querySelector("h1");
// H1.setAttribute("h1", siteContent["cta"]["h1"]);

const Headers = document.querySelectorAll(".text-content h4");
Headers[0].textContent = siteContent["main-content"]["features-h4"];
Headers[1].textContent = siteContent["main-content"]["about-h4"];
Headers[2].textContent = siteContent["main-content"]["services-h4"];
Headers[3].textContent = siteContent["main-content"]["product-h4"];
Headers[4].textContent = siteContent["main-content"]["vision-h4"];

const P = document.querySelectorAll(".text-content p");
P[0].textContent = siteContent["main-content"]["features-content"];
P[1].textContent = siteContent["main-content"]["about-content"];
P[2].textContent = siteContent["main-content"]["services-content"];
P[3].textContent = siteContent["main-content"]["product-content"];
P[4].textContent = siteContent["main-content"]["vision-content"];


// const Contact = document.querySelectorAll(".contact h4");
// Contact[0].textContent = siteContent["contact"]["contact-h4"];

// const Contact2 = documents.querySelectorAll(".contact p");
// Contact2[0].textContent = siteContent["contact"]["address"];

const contactSection = document.getElementsByClassName("contact")[0];
contactSection.getElementsByTagName("h4")[0].textContent = siteContent["contact"]["contact-h4"];
contactSection.getElementsByTagName("p")[0].textContent = siteContent["contact"]["address"];
contactSection.getElementsByTagName("p")[1].textContent = siteContent["contact"]["phone"];
contactSection.getElementsByTagName("p")[2].textContent = siteContent["contact"]["email"];

const footerSection = document.querySelector("footer");
footerSection.getElementsByTagName("p")[0].textContent = siteContent["footer"]["copyright"]

