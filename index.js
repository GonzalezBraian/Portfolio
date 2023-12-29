$(document).ready(function() {

    $(".headerLink").click(function (event) {
        event.preventDefault();
        $(".headerLink").removeClass("active");
        $(this).addClass("active")
        // Obtiene el ID de la sección correspondiente al enlace clicado
        var sectionId = $(this).data("section");

        // Elimina la clase "show" de todas las secciones
        $("#home, #info, #proyects, #contact").removeClass("show");

        // Agrega la clase "show" a la sección correspondiente
        $("." + sectionId).addClass("show");
        console.log(sectionId)
        

    });

    $('.proyectsContainer').slick({
            slidesToShow: 3, // Número de elementos a mostrar en la vista
            slidesToScroll: 1, // Número de elementos a desplazar por cada cambio
            autoplay: true, // Activar el modo de reproducción automática
            autoplaySpeed: 2000 // Velocidad de reproducción automática en milisegundos
            // Puedes agregar más opciones según tus necesidades
        });         
    
    function downloadFile() {
      window.open("https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg")
   }

});