const MENU = document.getElementById('menu');
const LIENZO = document.getElementById('lienzo');
let TRAZO = '#000';
let FONDO = '#fff'
MENU.addEventListener("click", (e) => {
    switch (e.target.className) {
        //?------------------------color----------------------------
        case 'red':
            TRAZO = 'red'
            break;
        case 'yellow':
            TRAZO = 'yellow'
            break;
        case 'green':
            TRAZO = 'green'
            break;
        case 'blue':
            TRAZO = 'blue'
            break;
        case 'orange':
            TRAZO = 'orange'
            break;
        case 'violet':
            TRAZO = 'blueviolet'
            break;
        case 'black':
            TRAZO = 'black'
            break;
        //?--------------------------Fondo--------------------------
        case 'bg red':
                FONDO = 'red'
                break;
        case 'bg yellow':
                FONDO = 'yellow'
                break;
        case 'bg green':
                FONDO = 'green'
                break;
        case 'bg blue':
                FONDO = 'blue'
                break;
        case 'bg orange':
                FONDO = 'orange'
                break;
        case 'bg violet':
                FONDO = 'blueviolet'
                break;
        case 'bg black':
                FONDO = 'black'
                    break;
        default: 
            break;
    }
    //!---------------------CUBO--------------------------------------
    const CREAR_CUBO = (TRAZO,FONDO) => {
       let trazo = TRAZO
       let fondo = FONDO
        const LIENZO = document.getElementById('lienzo');
        const CUBO = document.createElement('ARTICLE');
        CUBO.classList.add(`elementcube`)
        CUBO.setAttribute('draggable',true)
        CUBO.style.width = '100px'
        CUBO.style.height = 'fit-content'
        CUBO.style.margin = `20px`
        CUBO.setAttribute('contenteditable', true)
        CUBO.style.border = `2px solid ${trazo}`
        CUBO.style.background=fondo;
        LIENZO.appendChild(CUBO)
        
    }
    //!---------------------CIRCULO--------------------------------------
   
    const CREAR_CIRCULO = (TRAZO,FONDO) => {
        let trazo = TRAZO;
        let  fondo = FONDO
        const LIENZO = document.getElementById('lienzo');
        const CIRCULO = document.createElement('ARTICLE');
        CIRCULO.classList.add(`elementcircle`)
        CIRCULO.setAttribute('draggable', true)
        CIRCULO.style.width = '110px'
        CIRCULO.style.height = '150px'
        CIRCULO.style.margin = `20px`
        CIRCULO.style.border = `2px solid ${trazo}`
        CIRCULO.style.background=fondo;
        CIRCULO.style.borderRadius = '50%'
        LIENZO.appendChild(CIRCULO)
    }
    //!---------------------TEXTO--------------------------------------
 
    const CREAR_TEXTO = (TRAZO,FONDO) => {
        let trazo = TRAZO;
        let  fondo = FONDO
        const LIENZO = document.getElementById('lienzo');
        const TEXTO = document.createElement('P');
        TEXTO.classList.add(`elementtext`)
        TEXTO.innerHTML = `Lorem ipsum dolor sit <br> amet consectetur,
         adipisicing elit. Sunt, asperiores. <br>`
        TEXTO.setAttribute('contenteditable', true)
        TEXTO.setAttribute('draggable', true)
        TEXTO.style.width = 'auto'
        TEXTO.style.height = 'fit-content'
        TEXTO.style.margin = `20px`
        TEXTO.style.color = `${trazo}`
        TEXTO.style.background=fondo;
        //TEXTO.style.display = 'inline'
        TEXTO.style.tr

        //*TEXTO.style.border = '1px solid black'
        LIENZO.appendChild(TEXTO)
    }
    switch (e.target.className) {
        case 'elements cube':
            CREAR_CUBO(TRAZO,FONDO)
            break;
        case 'elements circle':
            CREAR_CIRCULO(TRAZO,FONDO)
            break;
        case 'elements texto':
            CREAR_TEXTO(TRAZO,FONDO)
            break;
        default:
            break
    }
})

LIENZO.addEventListener('mousedown',(e)=>{
      if (e.target.id === 'lienzo') return false
      else{
         e.target.style.position='absolute';
         e.target.style.zIndex='1000';
         e.target.style.opacity='0.5';
         console.log('Hagarrado');
      } 
 })
 LIENZO.addEventListener('dragend',(e)=>{
    if (e.target.id === 'lienzo') return false
    else{
       e.target.style.display='block';
       e.target.style.marginLeft=`${e.clientX -120}px`
       e.target.style.marginTop=`${e.clientY}px`
       e.target.style.opacity='1';
       console.log('Soltado');
    } 
})
LIENZO.addEventListener('mouseup',(e)=>{
    if (e.target.id === 'lienzo') return false
    else{
       e.target.style.opacity='1';
    } 
})


