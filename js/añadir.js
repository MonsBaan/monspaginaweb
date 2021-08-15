var dir = "http://192.168.0.30:8080";


$(document).ready(function() {
    console.log('Ready');

    $.ajax({
        url: dir + "/bingo/opciones/nombres",
        type: "get",
        success: function(response) {
            console.log(response)
            let html = "<option value='0'>Nuevo</option>";
            let cont = 1;
            response.data.forEach(element => {
                html += "<option value='" + element + "'>" + element + "</option>"
                cont++;
            });
            $('#filtroNombre').html(html)
        }
    });

    $('#filtroNombre').on('change', function() {
        let val = $('#filtroNombre').val();
        if (val == 0) {
            $('#nombreNuevo').show();
        } else {
            $('#nombreNuevo').hide();

        }
    })

    $('#btnEnviar').click(function() {
        let nombre;
        if ($('#filtroNombre').val() == 0) {
            nombre = $('#nombreNuevo').val()
        } else {
            nombre = $('#filtroNombre').val()
        }
        let desc = $('#descripcion').val()



        $.ajax({
            url: dir + "/bingo/anadir",
            type: "post",
            data: {
                "nombre": nombre,
                "descripcion": desc
            },
            success: function(response) {
                window.location.href = "panel.php";

            }
        });
    })
});