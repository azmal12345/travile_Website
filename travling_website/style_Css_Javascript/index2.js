const navbar = document.querySelector("nav");
const toggle = document.getElementById("toggleIcon");

toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
})

// flag container 
const flagBtn = document.getElementById("flag_btn");
const closeBtn = document.getElementById("iconClose");
const flagContainer = document.getElementById("flag_Container");
// my account 
const myAccountBoxIn = document.getElementById("myAccount");
const myAccountBoxOut = document.getElementById("myAccountPop");
const toggleIconClose = document.querySelector(".timesIcon");

flagBtn.addEventListener("click", () => {
    flagContainer.classList.add("flag_box");
    myAccountBoxOut.classList.remove("myForm");
})

closeBtn.addEventListener("click", () => {
    flagContainer.classList.remove("flag_box");
})

// my account 
myAccountBoxIn.addEventListener("click", () => {
    myAccountBoxOut.classList.add("myForm");
    flagContainer.classList.remove("flag_box");
})

toggleIconClose.addEventListener("click", () => {
    myAccountBoxOut.classList.remove("myForm");
})

// pop form 
let submitForm = document.getElementById("submitForm");

const formSubmitPop =  (e) => {
    e.preventDefault();
    swal("Thanks!", "Thanks For Submit!", "success");
}

submitForm.addEventListener("submit", formSubmitPop);

// alert pop box show 
const popAlertBoxBody = document.getElementById("popAlertBoxShow");
const popAlertCloseBtn = document.getElementById("popAlertClose");
// flag img pop
const onePopAlertBox = document.querySelectorAll(".oneAlertPopContainer");
// random img 
const nameCountry = document.getElementById("nameCountry");
const countryImg = document.getElementById("countryImg");
const arrayImg = [
    {
        id : 0,
        textHeading : "India Location",
        nameText : "image/popImg/taj-mahal.jpg.jpg"
    },
    {
        id : 1,
        textHeading : "USA Location",
        nameText : "image/popImg/usa.jpg.jpg"
    },
    {
        id : 2,
        textHeading : "Garamany Location",
        nameText : "image/popImg/garamany.jpg.jpg"
    },
    {
        id : 3,
        textHeading : "Italy Location",
        nameText : "image/popImg/italy.jpg.jpg"
    },
    {
        id : 4,
        textHeading : "Bangaldesh Location",
        nameText : "image/popImg/bangladesh.jpg.jpg"
    },
    {
        id : 5,
        textHeading : "Nepla Location",
        nameText : "image/popImg/nepla.jpg.jpg"
    },
    {
        id : 6,
        textHeading : "Russa Location",
        nameText : "image/popImg/russay.jpg.jpg"
    },
]

let currentList = 0;
// nameCountry.innerHTML = Math.floor(Math.random() * arrayImg.length);

function listData(){
    const dataaccess = arrayImg[currentList];
    nameCountry.textContent = dataaccess.textHeading;
    countryImg.src = dataaccess.nameText;
}

for(let i = 0; i < onePopAlertBox.length; i++){
    onePopAlertBox[i].addEventListener("click", () => {
        popAlertBoxBody.classList.add("addFlag");
        flagContainer.classList.remove("flag_box");
        currentList = Math.floor(Math.random() * arrayImg.length);
        listData();
    })
}

popAlertCloseBtn.addEventListener("click", () => {
    popAlertBoxBody.classList.remove("addFlag");
    flagContainer.classList.remove("flag_box");
})

// form pop alert card and form show 
let popFormCard = document.getElementById("pop_form_card");
let popFormClose = document.getElementById("popAlertForm");
let formLoginBtn = document.getElementById("myAccoundLogin");
// new pop container 1
let popFormCard1 = document.getElementById("pop_form_card1");
let popFormClose1 = document.getElementById("popAlertForm1");
let forgotPassword = document.getElementById("forgotPassword");
let returnButton = document.getElementById("returnButton");
// new pop container 2
let popFormCard2 = document.getElementById("pop_form_card2");
let popFormClose2 = document.getElementById("popAlertForm2");
let newSignUp = document.getElementById("newSignUp");
let logInId1 = document.getElementById("logInId1");
// pop button start
const createItKnow = document.getElementById("createItKnow");

createItKnow.addEventListener("click", () => {
    popFormCard2.classList.add("createAccounnt1");
    myAccountBoxOut.classList.remove("myForm");
})
// pop button end 
// three form 
logInId1.addEventListener("click", () => {
    popFormCard2.classList.add("createAccounnt1");
    popFormCard.classList.remove("formCardDisplay");
})

newSignUp.addEventListener("click", () => {
    popFormCard2.classList.remove("createAccounnt1");
    popFormCard.classList.add("formCardDisplay");
})

popFormClose2.addEventListener("click", () => {
    popFormCard2.classList.remove("createAccounnt1");
})
// secound form 
forgotPassword.addEventListener("click", () => {
    popFormCard1.classList.add("popFormCardDisplay");
    popFormCard.classList.remove("formCardDisplay");
})

popFormClose1.addEventListener("click", () => {
    popFormCard1.classList.remove("popFormCardDisplay");
})

returnButton.addEventListener("click", () => {
    popFormCard.classList.add("formCardDisplay");
    popFormCard1.classList.remove("popFormCardDisplay");
})

// first form 
formLoginBtn.addEventListener("click", () => {
    popFormCard.classList.add("formCardDisplay");
    myAccountBoxOut.classList.remove("myForm");
})

popFormClose.addEventListener("click", () => {
    popFormCard.classList.remove("formCardDisplay");
})

// scroll button

let showLink = document.getElementById("scrollButton");

window.addEventListener("scroll", function(){
    if(window.pageYOffset > 250){
        showLink.classList.add("activeScrollButton");
    }else{
        showLink.classList.remove("activeScrollButton");
    }
})