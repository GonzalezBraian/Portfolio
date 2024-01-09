                <form class="form" id="#miFormulario" >
                    <input id="nombre" type="text" placeholder="Nombre">
                    <input id="email" type="email" placeholder="Email">
                    <div class="msgContainer">
                        <textarea id="mensaje" name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                        <button type="submit" class="btnMsg">></button>
                    </div>
                </form>

                $("#miFormulario").submit(function(event) {
                    event.preventDefault(); 
            
                    var nombre = $("#nombre").val();
                    var email = $("#email").val();
                    var mensaje = $("#mensaje").val();
            
                    $.ajax({
                      type: "POST",
                      url: "./procesar_formulario.php", 
                      data: { nombre: nombre, email: email, mensaje: mensaje },
                      success: function(response) {
                        console.log(response);
                      }
                    });
                  });