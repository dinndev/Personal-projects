const cards = document.querySelector('.list-container');
const items = document.querySelectorAll('.item');


console.log(items)
let startX;
let scrollLeft;
let isDown = false; 

    cards.addEventListener('mousedown' , e => {
        isDown = true;
        cards.classList.add('active');
        // startX = e.pageX -
         startX = e.pageX - cards.offsetLeft;
        scrollLeft = cards.scrollLeft;
    }); 


cards.addEventListener('mouseup' , _=> {
    isDown = false;
    cards.classList.remove('active')

});
cards.addEventListener('mouseleave' , _=> {
    isDown = false;
    cards.classList.remove('active')

});

cards.addEventListener('mousemove' , (e)=> {
    if(!isDown)return ; //stop the functon from running 
    e.preventDefault();
    const x = e.pageX - cards.offsetLeft;
    const walk = x - startX
    cards.scrollLeft = scrollLeft - walk;
});