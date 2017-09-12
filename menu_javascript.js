/* Alternar entre la adición y eliminación de la clase "responsive" a topnav cuando el usuario hace clic en el icono */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}