let slides = document.querySelectorAll('.slider');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

let count = 0;
slides.forEach((elm, index)=>{
    elm.style.left = `${index * 100}%`
})

prevBtn.addEventListener('click', ()=>{
    if (count > 0) {
        count--
        imgSlides()  
    }
})
nextBtn.addEventListener('click', ()=>{
    if (count < slides.length-1) {
        count++
        imgSlides()
    }
})

const imgSlides = ()=>{
    slides.forEach((elm, index)=>{
        elm.style.transform = `translateX(-${count * 100}%)`
    })
}

// ================ input work

let input = document.querySelector('#search');
let btn = document.querySelector('.submit');

let inputvalue;
input.addEventListener('input',(ip)=>{
    inputvalue = ip.target.value;
})

btn.addEventListener('click',()=>{
    
    if (inputvalue) {
        console.log(inputvalue);
    }else{
        alert('Please fill the box')
        input.style.border = '1px solid red'
        btn.style.border = '1px solid red'
    }
})