let btn = document.querySelector(".btn")
let links = document.querySelector(".links")
let list = document.querySelectorAll("li")
let lists= document.querySelector("#i")
let li = document.querySelector(".li")
let close = document.querySelector(".close");
console.log(list)
// btn.addEventListener("click",()=>{
//   btn.classList.toggle("active")
//     lists.classList.toggle("active")
// })
btn.addEventListener("click",()=>{
   links.classList.toggle("active")

})

li.addEventListener("click",()=>{
    links.classList.remove("active")
})
let images = document.querySelectorAll(".images img");

images.forEach(image=>{
    image.onclick=()=>{
document.querySelector('.popup-images').style.display = 'block';
document.querySelector('.popup-images img').src=image.getAttribute('src');
    }
})
close.addEventListener("click",()=>{
    document.querySelector('.popup-images').style.display = 'none';
})