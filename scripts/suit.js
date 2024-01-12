import { closeModal, changeImg, openForm, checkForm } from "./functions.js";
fetch("scripts/suits.json")
   .then(response => response.json())
   .then(data => {
      const jsonStr = JSON.stringify(data);
      const suits= JSON.parse(jsonStr)
      suits. forEach((suit)=>{
         if (suit.id==new URLSearchParams(window.location.search).get('id')) {
            document.querySelector('title').innerHTML=`${suit.name}. SuperSuit`
            document.querySelector('main .content').insertAdjacentHTML("beforeend", `
               <div class="content suit-content">
                  <div class="suit-content__imgs">
                     <div class="suit-content__min-imgs min-imgs"></div>
                     <div class="suit-content__big-img">
                        <img src="img/${suit.name}/1.webp">
                     </div>
                  </div>
                  <div class="suit-content__text">
                     <h1 class="suit-content__name">${suit.name}</h1>
                     <div class="suit-content__id">${suit.id}</div>
                     <div class="suit-content__price">${suit.price}</div>
                     <div class="suit-content__title">Комплектация:</div>
                     <p>${suit.equipment}</p>
                     <div class="suit-content__title">Размер:</div>
                     <p>${suit.sizes}</p>
                     <button class="btn suit-content__btn">Оставить заявку</button>
                  </div>
               </div>
               <div class="suit-description">
                  <div class="suit-description__title">Описание</div>
                  ${suit.description}
               </div>
            `)
            for (let i = 0; i < suit.numberImg; i++) {
               document.querySelector('.suit-content__min-imgs').insertAdjacentHTML("beforeend", `
                  <div class="min-imgs__item">
                     <img src="img/${suit.name}/${i+1}min.webp">
                  </div>
               `);
            }
            changeImg(suit)
            openForm(suit)
         }
      })
   }) 