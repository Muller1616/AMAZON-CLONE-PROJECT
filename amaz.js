const imgs = document.querySelectorAll('.header-slider ul li img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');
let  n = 0;
function changeSlide(){
    for (let i=0; i<imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
changeSlide();
prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n = imgs.length - 1;
    }
    changeSlide();
})
next_btn.addEventListener('click',(e)=>{
    if(n < imgs.length - 1){
        n++;
    }
    else{
        n = 0;
    }
    changeSlide();
})
//this code is for the scrollable element in the 4th div section of the html

const scrollContainer = document.querySelectorAll(".products");
for(const item of scrollContainer){
    item.addEventListener('wheel', (event)=>{
        event.preventDefault();
        item.scrollLeft += event.deltaY;
    });
}
//this is for the other scrollable products
