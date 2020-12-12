$(document).ready(function (){
    // Creiamo array di oggetti per le icone con le seguenti proprieta: 
    // name, prefix, type, family 
    let icons = [];
    class icon{
        constructor(name, prefix, type, family){
            this.name = name;
            this.prefix = prefix;
            this.type = type;
            this.family = family;
        }
    };

    icons[0] = new icon('cat', 'fas', 'fa-', 'cat');
    icons[1] = new icon('crow', 'fas', 'fa-', 'crow');
    icons[2] = new icon('dog', 'fas', 'fa-', 'dog');
    icons[3] = new icon('dove', 'fas', 'fa-', 'dove');
    icons[4] = new icon('dragon', 'fas', 'fa-', 'dragon');
    icons[5] = new icon('horse', 'fas', 'fa-', 'horse');
    icons[6] = new icon('hippo', 'fas', 'fa-', 'hippo');
    icons[7] = new icon('fish', 'fas', 'fa-', 'fish');

    let container = $('.icons');

    // Selezioniamo il container icons
    // Creiamo una funzione per iterare nell'array e che appenda al container le icone.
    const tipoPrint = (objList, htmlElement) => {
        // tip: possiamo usare un ciclo foreach qui e destrutturare le proprieta degli elementi di un array
        objList.forEach(icon => {
            // tip: il template literal ci puo aiutare con il markup
            htmlElement.append(
                `<div>
                   <i class= "${icon.prefix} ${icon.type + icon.family}" style="color:blue"></i>
                <div class="title">${icon.name}</div>`
                ); 
            });
    }

    // inseriamo le icone nel container (possiamo creare una funzione tipo 
    // print() 
    // per inserire gli elementi e richiamarla qui)
    tipoPrint(icons, container);
});

