$(document).ready(function() {
    $(".headerLink").click(function (event) {
        event.preventDefault();

        // Obtiene el ID de la sección correspondiente al enlace clicado
        var sectionId = $(this).data("section");

        // Elimina la clase "show" de todas las secciones
        $("#home, #info, #proyects, #contact").removeClass("show");

        // Agrega la clase "show" a la sección correspondiente
        $("." + sectionId).addClass("show");
        console.log(sectionId)
    });
    
    function downloadFile() {
      window.open("https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg")
   }

    $('.proyectsContainer').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
});