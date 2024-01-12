const closeModal = ()=>{
   const suitModal = document.querySelector('.modal .suit-content');
   if (document.querySelector('.block-form')==null) {
      document.body.style.overflow= ""
      document.querySelector('.modal').remove()
   }else{
      document.querySelector('.block-form').remove()
      if (suitModal==null) {
         document.body.style.overflow= ""
         document.querySelector('.modal').remove()
      }else{
         suitModal.style.display=""
      }
   }
};
const changeImg = (suit)=>{
   
   document.querySelectorAll('.min-imgs__item'). forEach((el, index)=>{
      el.onclick=()=>{
         document.querySelector('.suit-content__big-img img').setAttribute("src", `img/${suit.name}/${index+1}.webp`);
      }
   });
};
const openForm = (suit)=>{
   document.querySelectorAll('.suit-content__btn'). forEach((btn)=>{
      btn.onclick=()=>{
         if (document.querySelector('.modal')==null) {
            document.body.style.overflow= "hidden"
            document.body.insertAdjacentHTML("afterbegin", `
               <div class="modal">
                  <div class="modal__wrapper">
                     <div class="modal__close"><img src="img/close.png"></div>
                  </div>
               </div>
            `)
            document.querySelector('.modal__close').onclick= closeModal
            
         }else
            document.querySelector('.modal .suit-content').style.display="none";

         document.querySelector('.modal__wrapper').insertAdjacentHTML("beforeend", `
            <div class="modal__block-form block-form">
               <div class="block-form__title">Аренда костюма “${suit.name}”</div>
               <p>Пожалуйста, укажите ваши контактные данные, чтобы мы забронировали костюм на ваше имя</p>
               <form action="" method="post">
                  <input class="block-form__input" type="text" name="userName" placeholder="Как вас зовут?">
                  <div class="block-form__phone block-phone">
                     <input class="block-form__input block-phone__input" type="tel" name="number" value="+7 ">
                     <div class="block-phone__placeholder">
                     </div>
                  </div>
                  <select class="block-form__input block-form__select" name="rentalDuration">
                     <option disabled selected value>Длительность аренды?</option>
                     <option value="1 день">1 день</option>
                     <option value="3 дня">3 дня</option>
                     <option value="неделя">неделя</option>
                     <option value="месяц">месяц</option>
                  </select>
                  <input type="submit" class="btn" name="btnSubmit" disabled>
               </form>
            </div>
         `)
         const inputPhone = document.querySelector('.block-phone__input');
         const placeholder = document.querySelector('.block-phone__placeholder');

         const phoneMask = new IMask(inputPhone, {
            mask: "+{7} (000) 000-00-00",
         });

         const placeholderArr = Array.from("+7 (977) 325-44-60");
         placeholderArr. forEach((el)=>{
            placeholder.insertAdjacentHTML("beforeend", `<span>${el}</span>`)
         })

         const placeholderSpans = document.querySelectorAll('.block-phone__placeholder span');
         for (let i = 0; i < 2; i++) {
            placeholderSpans[i].style.opacity="0"
         }
         
         inputPhone.oninput=()=>{
            let valueLength= inputPhone.value.length
            for (let i = 0; i < valueLength-1; i++) {
               placeholderSpans[i+1].style.opacity="0";
            }
            if(valueLength>=0){
               for (let i = valueLength; i < placeholderArr.length; i++) {
                  placeholderSpans[i].style.opacity=""
               }
            }
         }
         checkForm(suit)
      }
   })
};
const checkForm = (suit)=>{
   const form = document.querySelector('form')
   form.oninput=()=>{
      if(form.userName.value!="" && form.number.value.length==18 && form.rentalDuration.value!=""){
         form.btnSubmit.removeAttribute("disabled")
      }else{
         form.btnSubmit.setAttribute("disabled", "true")
      }
   }

   form.onsubmit=()=>{
      document.querySelector('.block-form').remove()
      document.querySelector('.modal__wrapper').insertAdjacentHTML("beforeend", `
         <div class="modal__post-form">Костюм “${suit.name}” забронирован, <br>с Вами скоро свяжутся.</div>
      `)
   }
};

export {closeModal, changeImg, openForm, checkForm}