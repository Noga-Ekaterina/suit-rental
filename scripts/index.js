fetch("scripts/saits.json")
   .then(response => response.json())
   .then(data => {
      const jsonStr = JSON.stringify(data);
      const saits= JSON.parse(jsonStr)
      saits. forEach((sait)=>{
         document.querySelector('.saits').insertAdjacentHTML("beforeend", `
            <div class="saits__item sait">
               <img class="sait__img" src="img/${sait.name}/home.webp" alt="фото костюма ${sait.name}">
               <div class="sait__text">
                  <div class="sait__title">${sait.name}</div>
                  <div class="sait__sizes">Размеры: ${sait.sizes}</div>
                  <div class="sait__price">${sait.price}</div>
                  <button class="btn">Быстрый просмотр</button>
               </div>
            </div>
         `);
      })
   });
