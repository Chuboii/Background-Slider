let img = document.querySelectorAll(".img")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let body = document.querySelector("body")
let container = document.querySelector(".container")
let box = document.querySelector(".images")
let images = [
    'nature',
    'nature',
    'nature',
    'nature',
    'nature',
    'nature',
    'nature',
    'nature',
    'nature',
    'nature',
    'nature',
]

let count = 0
for (let i = 1; i <= images.length; i++) {
    let a = document.createElement("img")
    box.append(a)
    a.classList.add("img")
    a.src = `${images[i]}${i}.jpg`
    
}



function goNext() {
    
    
    if (count < 11) {
        removePic()
        let imgs = document.querySelectorAll("img")
        imgs[count++].classList.add("active")  
        body.style.backgroundImage = `url('${images[count]}${count}.jpg')`

    }
    else{
        count = -1
    }

   


}


function goBack() {
    let imgs = document.querySelectorAll("img")
    count--
    if (count >= 1) {
        removePic()
        imgs[count].classList.add("active")  
        imgs[count].src = `${images[count]}${count}.jpg`
        body.style.backgroundImage = `url('${images[count]}${count}.jpg')`
    }
    else{
        count = -1
    }

}

function removePic() {
    let imgs = document.querySelectorAll("img")
imgs.forEach(el => {
    el.classList.remove("active")
});
}
window.addEventListener("load", goNext)
next.addEventListener("click", goNext)
prev.addEventListener("click", goBack)