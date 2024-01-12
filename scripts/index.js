import { closeModal, changeImg, openForm, checkForm} from "./functions.js";
fetch("scripts/suits.json")
   .then(response => response.json())
   .then(data => {
      const jsonStr = JSON.stringify(data);
      const suits= JSON.parse(jsonStr)
      suits. forEach((suit)=>{
         document.querySelector('.suits').insertAdjacentHTML("beforeend", `
            <div class="suits__item suit" id="${suit.id}">
               <img class="suit__img" src="img/${suit.name}/home.webp" alt="фото костюма ${suit.name}">
               <div class="suit__text">
                  <div class="suit__title">${suit.name}</div>
                  <div class="suit__sizes">Размеры: ${suit.sizes}</div>
                  <div class="suit__price">${suit.price}</div>
                  <button class="btn suit__btn">Быстрый просмотр</button>
               </div>
            </div>
         `);
      })
      document.querySelectorAll('.suit'). forEach((block, index)=>{
         block.onclick=()=>{
            if (event.target!= block.querySelector('.suit__btn')) {
               window.location.href=`suit.html?id=${suits[index].id}`
            }
         }
      })
      document.querySelectorAll('.suit__btn'). forEach((btn, index)=>{
         btn.onclick=()=>{
            let suit= suits[index]
            document.body.style.overflow= "hidden"
            document.body.insertAdjacentHTML("afterbegin", `
               <div class="modal">
                  <div class="modal__wrapper">
                     <div class="modal__close"><img src="img/close.png"></div>
                     <div class="content suit-content">
                        <div class="suit-content__imgs">
                           <div class="suit-content__min-imgs min-imgs"></div>
                           <div class="suit-content__big-img">
                              <img src="img/${suit.name}/1.webp">
                           </div>
                        </div>
                        <div class="suit-content__text">
                           <div class="suit-content__name">${suit.name}</div>
                           <div class="suit-content__id">${suit.id}</div>
                           <p>${suit.descriptionSmall}</p>
                           <div class="suit-content__price">${suit.price}</div>
                           <div class="suit-content__title">Комплектация:</div>
                           <p>${suit.equipment}</p>
                           <div class="suit-content__title">Размер:</div>
                           <p>${suit.sizes}</p>
                           <button class="btn suit-content__btn">Оставить заявку</button>
                        </div>
                     </div>
                  </div>
               </div>
            `)
            for (let i = 0; i < suit.numberImg; i++) {
               document.querySelector('.suit-content__min-imgs').insertAdjacentHTML("beforeend", `
                  <div class="min-imgs__item">
                     <img src="img/${suit.name}/${i+1}min.webp">
                  </div>
               `);
            }
            openForm(suit)
            document.querySelector('.modal__close').onclick= closeModal
            changeImg(suit)
         }
      })
   });