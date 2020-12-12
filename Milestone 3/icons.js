$(document).ready(function () {
    // icone come da milestone 1
    let icons = [];
    class icon{
        constructor(name, prefix, type, family){
            this.name = name;
            this.prefix = prefix;
            this.type = type;
            this.family = family;
        }
    };

    icons[0] = new icon('cat', 'fas', 'fa-', 'animal');
    icons[1] = new icon('crow', 'fas', 'fa-', 'animal');
    icons[2] = new icon('dog', 'fas', 'fa-', 'animal');
    icons[3] = new icon('dove', 'fas', 'fa-', 'animal');
    icons[4] = new icon('user', 'fas', 'fa-', 'person');
    icons[5] = new icon('user-secret', 'fas', 'fa-', 'person');
    icons[6] = new icon('user-tie', 'fas', 'fa-', 'person');
    icons[7] = new icon('archway', 'fas', 'fa-', 'object');
    icons[8] = new icon('atom', 'fas', 'fa-', 'object');
    icons[9] = new icon('bell', 'fas', 'fa-', 'object');
   
     // colori come da milestone 2
    const addColor = objList => {
        objList = objList.map((element) => {
          if(element.family === "animal"){
            return {...element, color : 'green'};
          }
          else if(element.family === "person"){
            return {...element, color : 'purple'};
          }
          else{
            return {...element, color : 'blue'};
          }
        });
        return objList;
    };   
  
     //aggiungiamo dei colori come da milestone 2
     ColoredIcons = addColor(icons);
    
     //inseriamo le icone nel container come da milestone 2
     const container = document.querySelector('.icons');
     
     ColoredIcons.forEach(icon => {
        const {name, prefix, type, x, color} = icon;
        container.insertAdjacentHTML('beforeend', 
        `<div>
          <i class="${prefix} ${type+name}" style="color:${color}"></i>
          <div class="title">${name}</div>
        </div>`
        );
      }); 
     //estrapoliamo i tipi di icone
   
     //aggiungiamo i tipi alla select
   
     //al change mostriamo solo le icone filtrate
     //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo
   
   
   
   /* ---- FUNCTIONS ----*/
   
   });