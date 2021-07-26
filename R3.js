/*declaro variables */
cuadro_video = document.getElementById("boxVideo");
video= document.getElementById("vid")
// definicion de funciones
function mostrar_video () {
    cuadro_video.style.display = "flex";
}
function ocultar_video(){
    cuadro_video.style.display = "none";
    video.src ="";
}
// Creamos el evento del boton para ver el video
document.getElementById("botonVideo").addEventListener('click' , mostrar_video);
document.getElementById("cerrar").addEventListener("click",ocultar_video);