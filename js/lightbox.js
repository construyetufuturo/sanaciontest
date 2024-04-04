// lightbox galeria start
const imagenes  = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const icon_menu1 = document.querySelector('.icon-menu');
const swipercardperfil = document.querySelectorAll('#contenedor-swiper')
const tiempoLimitadoSection = document.querySelectorAll('.tiempo-limitado-section');


const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    icon_menu1.style.opacity = '0';
    tiempoLimitadoSection.style.visibility = 'hidden';
}
imagenes.forEach(imagen =>{
   imagen.addEventListener('click', ()=>{
    aparecerImagen(imagen.getAttribute('src'));
    swipercardperfil.forEach(element => {
        element.style.opacity = '.6'
    });
   })
}

);
contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        icon_menu1.style.opacity = '1';
        swipercardperfil.forEach(element => {
            element.style.opacity = '1'
        });
        tiempoLimitadoSection.style.display = 'block';
        // tiempoLimitadoSection.style.z-index=8;
    }
})

// lighbox galeria end
// 

function contarSlider(){
    let perfil = document.getElementsByClassName("slide-cards");
    let logro = document.getElementsByClassName("slide-logro");
    console.log(perfil);
    console.log("logros=",logro);
    for(let i=0 ; i<perfil.length;i++){
        let elementohtml = `<div class="numberslider"> <p> ${i+1}/${perfil.length} </p> </div>`;
        perfil[i].innerHTML += elementohtml;
    }
    for(let i=0 ; i<perfil.length;i++){
        let elementohtml = `<div class="numberslider"> <p> ${i+1}/${logro.length} </p> </div>`;
        logro[i].innerHTML += elementohtml;
    }
    
}
contarSlider();

// VIDEO CONTROL
// Obtener el elemento del video



