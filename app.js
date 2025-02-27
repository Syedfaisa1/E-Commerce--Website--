//mode=id
let modeBtn = document.querySelector("#modeBtn");  
let body = document.querySelector("body");
let header = document.querySelectorAll(".nav-bar");
let currMode= "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode= "light";
       body.classList.add("light");
       body.classList.remove("dark");
    }
    console.log(currMode);
})

//slider

const slider = document.querySelectorAll(".slidshow");
var counter = 0;

slider.forEach(
    (slidshow,index) => {
        slidshow.style.left =`${index * 100}%`
    }
)

const goPrev = () => {
    counter--
    slideImage()
}


const goNext = () => {
    counter++
    slideImage()
}

const slideImage = () => {
    slider.forEach(
        (slidshow) => {
            slidshow.style.transform =`translateX(-${counter * 100}%)`
        }
    )
}

//login-form 

document.getElementById("button").addEventListener("click", function() {
    document.querySelector(".popup").style.display ="flex";
})


document.getElementById("buttonpop").addEventListener("click", function() {
    document.querySelector(".popup").style.display ="flex";
})

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".popup").style.display ="none";
})


//CARD--LIST

document.getElementById("baskbtn").addEventListener("click", function() {
    document.querySelector(".addC").style.display ="flex";
    
})

document.getElementById("baskbtn2").addEventListener("click", function() {
    document.querySelector(".addC").style.display ="flex";
    
})

document.querySelector(".closeX").addEventListener("click", function() {
    document.querySelector(".addC").style.display ="none";
})


// search //

const search = () => {
    const searchbox = document.getElementById("search-items").value.toUpperCase();
    const storeitems = document.getElementById("allitems")
    const product = document.querySelectorAll(".items")
    const pname = storeitems.getElementsByTagName("h2")

    for(var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
          let textvalue = match.textContent || match.innerHTML;

          if(textvalue.toUpperCase().indexOf(searchbox) > -1){
            product[i].style.display ="";
          } else {
            product[i].style.display ="none";
          }
        }

    }
}
