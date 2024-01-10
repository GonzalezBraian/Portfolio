$(document).ready(function() {

    $(".headerLink").click(function (event) {
        event.preventDefault();
        $(".headerLink").removeClass("active");
        $(this).addClass("active")
        var sectionId = $(this).data("section");

        $("#home, #info, #proyects, #contact").removeClass("show");

        $("." + sectionId).addClass("show");
        
    });

    $(".menu").click(function () {
      $(".extends").toggleClass("open");
  });

    
    $("#miFormulario").submit(function(event) {
        event.preventDefault(); 

        var nombre = $("#nombre").val();
        var email = $("#email").val();
        var mensaje = $("#mensaje").val();

        $.ajax({
          type: "POST",
          url: "/procesar_formulario.php", 
          data: { nombre: nombre, email: email, mensaje: mensaje },
          success: function(response) {
            console.log(response);
          }
        });
      });

      $('.proyectsContainer').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });       
    
});