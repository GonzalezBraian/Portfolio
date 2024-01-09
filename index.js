$(document).ready(function() {

    $(".headerLink").click(function (event) {
        event.preventDefault();
        $(".headerLink").removeClass("active");
        $(this).addClass("active")
        var sectionId = $(this).data("section");

        $("#home, #info, #proyects, #contact").removeClass("show");

        $("." + sectionId).addClass("show");
        
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
            autoplaySpeed: 2000 
        });         
    
    function downloadFile() {
      window.open("https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg")
   }

});