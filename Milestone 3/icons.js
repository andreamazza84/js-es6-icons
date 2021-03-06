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
     coloredIcons = addColor(icons);
    
     //inseriamo le icone nel container come da milestone 2
     const container = document.querySelector('.icons');

     coloredIcons.forEach(icon => {
        const {name, prefix, type, x, color} = icon;
        container.insertAdjacentHTML('beforeend', 
        `<div>
          <i class="${prefix} ${type+name}" style="color:${color}"></i>
          <div class="title">${name}</div>
        </div>`
        );
      }); 

    //estrapoliamo i tipi di icone
    const filterByFamily = (objList, value) => {
        const filteredList = objList.filter((element) => {
            return element.family === value;
        });
        return filteredList;
    };
       
    //aggiungiamo i tipi alla select
    const selection = $('#type');
    selection.append(
        `<option value="animal">Animal</option>
        <option value ="person">Person</option>
        <option value="object">Object</option>`
    );

    //al change mostriamo solo le icone filtrate
    //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo
    selection.bind('change', function(e){
        //Al change event pulisco il contenuto della selezione "container".        
        container.innerHTML = "";
        //Se il selettore select è su All mostra tutte le icone:
        if(this.value === ""){
            coloredIcons.forEach(icon => {
                const {name, prefix, type, x, color} = icon;
                container.insertAdjacentHTML('beforeend', 
                `<div>
                  <i class="${prefix} ${type+name}" style="color:${color}"></i>
                  <div class="title">${name}</div>
                </div>`
                );
              }); 
        }
        //Se il selettore select è su person, animal o object mostra solo quelle filtrate:
        else{
            filterByFamily(coloredIcons, this.value).forEach(icon =>{
                const {name, prefix, type, x, color} = icon;
                container.insertAdjacentHTML('beforeend', 
                `<div>
                    <i class="${prefix} ${type+name}" style="color:${color}"></i>
                    <div class="title">${name}</div>
                </div>`
            );
          });
        }          
         
    });

}); //function ready