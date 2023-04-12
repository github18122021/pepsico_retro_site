// Create header element
let header = document.createElement("header");  // create a <header> element
header.classList.add("header");  // add "header" class to the element
header.innerHTML = "<h1>Pepsico</h1>";  // set the inner HTML of the element
document.body.insertBefore(header, document.body.firstChild);  // insert the header element as the first child of <body>

// Creating a nav element 
let nav = document.createElement("nav");  // create a <nav> element

// creating a menu element 
let menu = document.createElement("menu");  // create a <menu> element
menu.classList.add("menu");  // add "menu" class to the element

// creating li elements
let home = document.createElement("li");  // create a <li> element for the "Home" link
let about = document.createElement("li");  // create a <li> element for the "About us" link
let product = document.createElement("li");  // create a <li> element for the "Product" link
let contact = document.createElement("li");  // create a <li> element for the "Contact" link

home.innerHTML = "Home";  // set the inner HTML of the "Home" link
about.innerHTML = "About us";  // set the inner HTML of the "About us" link
product.innerHTML = "Product";  // set the inner HTML of the "Product" link
contact.innerHTML = "Contact";  // set the inner HTML of the "Contact" link

home.classList.add("home");  // add "home" class to the "Home" link element
about.classList.add("about");  // add "about" class to the "About us" link element
product.classList.add("product");  // add "product" class to the "Product" link element
contact.classList.add("contact");  // add "contact" class to the "Contact" link element

menu.appendChild(home);  // append the "Home" link element to the menu
menu.appendChild(product);  // append the "Product" link element to the menu
menu.appendChild(contact);  // append the "Contact" link element to the menu
menu.appendChild(about);  // append the "About us" link element to the menu

nav.appendChild(menu);  // append the menu to the nav element
// Add nav element to header
header.appendChild(nav);  // append the nav element to the header element

// Click event handlers for each link
// Define a function to be called when the "about" link is clicked
let clickedAbout = function() {
    // If the current page is index.html, navigate to about/about.html
    // Otherwise, navigate to ../about/about.html
    if (window.location.href === "./index.html") {
        window.location.assign("./about/about.html");
    } else {
        window.location.assign("../about/about.html");
    }
}

// Define a function to be called when the "product" link is clicked
let clickedProduct = function() {
    // If the current page is index.html, navigate to product/product.html
    // Otherwise, navigate to ../product/product.html
    if (window.location.href === "./index.html") {
        window.location.assign("./product/product.html");
    } else {
        window.location.assign("../product/product.html");
    }
}

// Define a function to be called when the "contact" link is clicked
let clickedContact = function() {
    // If the current page is index.html, navigate to contact/contact.html
    // Otherwise, navigate to ../contact/contact.html
    if (window.location.href === "./index.html") {
        window.location.assign("./contact/contact.html");
    } else {
        window.location.assign("../contact/contact.html");
    }
}

// Define a function to be called when the "home" link is clicked
let clickedHome = function() {
    // If the current page is not index.html, navigate to ../index.html
    if (window.location.href !== "./index.html") {
        window.location.assign("../index.html");
    }
}

// Add event listeners to the links
about.addEventListener("click", clickedAbout);
product.addEventListener("click", clickedProduct);
contact.addEventListener("click", clickedContact);
home.addEventListener("click", clickedHome);

// Create footer element
let footer = document.createElement("footer");

// Create "Follow us on social media" section
let socialMediaParagraph = document.createElement("p");
socialMediaParagraph.textContent = "Follow us on social media:";
footer.appendChild(socialMediaParagraph);

let socialMediaMenu = document.createElement("menu");
socialMediaMenu.classList.add("socialMediaMenu");

// Create Facebook link
let facebookLink = document.createElement("a");
facebookLink.textContent = "Facebook";
facebookLink.href = "#";
let facebookListItem = document.createElement("li");
facebookListItem.appendChild(facebookLink);

// Create Twitter link
let twitterLink = document.createElement("a");
twitterLink.textContent = "Twitter";
twitterLink.href = "#";
let twitterListItem = document.createElement("li");
twitterListItem.appendChild(twitterLink);

// Create Instagram link
let instagramLink = document.createElement("a");
instagramLink.textContent = "Instagram";
instagramLink.href = "#";
let instagramListItem = document.createElement("li");
instagramListItem.appendChild(instagramLink);

// Add social media links to menu
socialMediaMenu.appendChild(facebookListItem);
socialMediaMenu.appendChild(twitterListItem);
socialMediaMenu.appendChild(instagramListItem);

// Add social media menu to footer
footer.appendChild(socialMediaMenu);

// Create "Contact us" section
let contactParagraph = document.createElement("p");
contactParagraph.textContent = "Contact us:";
footer.appendChild(contactParagraph);

let contactMenu = document.createElement("menu");
contactMenu.classList.add("contactMenu");

// Create phone number list item
let phoneListItem = document.createElement("li");
phoneListItem.textContent = "Phone: 123-456-7890";

// Create email list item
let emailListItem = document.createElement("li");
emailListItem.textContent = "Email: info@pepsico.com";

// Create address list item
let addressListItem = document.createElement("li");
addressListItem.textContent = "Address: 123 Main St, Anytown USA";

// Add contact

contactMenu.appendChild(phoneListItem);
contactMenu.appendChild(emailListItem);
contactMenu.appendChild(addressListItem);

footer.appendChild(contactMenu);

// Create copyright section
let copyrightParagraph = document.createElement("p");
copyrightParagraph.innerHTML = "&copy; 2023 Pepsico. All rights reserved.";
footer.appendChild(copyrightParagraph);

// Append footer to the document body
document.body.appendChild(footer);


