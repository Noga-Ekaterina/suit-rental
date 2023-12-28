fetch("scripts/suits.json")
   .then(response => response.json())
   .then(data => {
      const jsonStr = JSON.stringify(data);
      const suits= JSON.parse(jsonStr)
      suits. forEach((suit)=>{
         document.querySelector('.suits').insertAdjacentHTML("beforeend", `
            <div class="suits__item suit">
               <img class="suit__img" src="img/${suit.name}/home.webp" alt="фото костюма ${suit.name}">
               <div class="suit__text">
                  <div class="suit__title">${suit.name}</div>
                  <div class="suit__sizes">Размеры: ${suit.sizes}</div>
                  <div class="suit__price">${suit.price}</div>
                  <button class="btn">Быстрый просмотр</button>
               </div>
            </div>
         `);
      })
   });
