const closeModal = ()=>{
   document.body.style.overflow= ""
   document.querySelector('.modal').remove()
};
const changeImg = (suit)=>{
   
   document.querySelectorAll('.min-imgs__item'). forEach((el, index)=>{
      el.onclick=()=>{
         document.querySelector('.suit-content__big-img img').setAttribute("src", `img/${suit.name}/${index+1}.webp`);
      }
   });
};

export {closeModal, changeImg}