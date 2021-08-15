var dir = "http://192.168.0.30:8080";

$(document).ready(function() {
    console.log('Ready');

    getTabla();

    $('#filtroGr input').on('input', function() {
        let val = $('#filtro').val()

    });

    $('#recargar').click(function() {
        $('#tablaCuerpo').html("");
        getTabla();

    })

    $('#filtro').on('change', function() {
        switch ($('#filtro').val()) {
            case '3':
                $('#filtroNombre').show()
                $('#filtroGr input').hide()
                $.ajax({
                    url: dir + "/bingo/opciones/nombres",
                    type: "get",
                    success: function(response) {
                        let html = ""
                        let cont = 0;
                        response.data.forEach(element => {
                            html += "<option value='" + element + "'>" + element + "</option>"
                            cont++;
                        });
                        $('#filtroNombre').html(html)
                        getTablaByName()
                    }
                });
                break;
            default:
                $('#filtroNombre').hide()
                $('#filtroGr input').show()
                break;
        }
    })


    $('#filtroNombre').on('change', function() {
        getTablaByName();
    })


    $(document).on('click', '#borrar', function() {
        let id = $(this).parent().children("#id").text()
        let nombre = $(this).parent().children("#nombre").text()
        $.ajax({
            url: dir + "/bingo/nombre/" + id,
            type: "delete",
            data: {
                "nombre": nombre
            },
            success: function(response) {
                getTablaByName();
            }
        })
    })
});





function getTablaByName() {
    let nombre = $("#filtroNombre").val()
    let parametros = { "nombre": nombre }

    $.ajax({
        url: dir + "/bingo/nombre",
        type: "post",
        data: parametros,
        success: function(response) {
            let data = response.data;
            let html = "";
            $('#tablaCuerpo').html(html);

            data.forEach(element => {
                let id = element._id;
                let descripcion = element.descripcion;
                let nombre = element.nombre;
                html = "<tr><th id='id'>" + id + "</th><th id='nombre'>" + nombre + "</th> <th>" + descripcion + "</th> <th id='editar'> EDITAR </th> <th id='borrar'> BORRAR </th></tr>"
                $('#tablaCuerpo').append(html);

            });


        }
    });
}

function getTabla() {
    $.ajax({
        url: dir + "/bingo/opciones",
        type: "get",
        success: function(response) {
            let data = response.data;
            let html = "";
            data.forEach(dataElement => {
                let id = dataElement._id;
                let descripcion = dataElement.descripcion;
                let nombre = dataElement.nombre;

                html = "<tr><th id='id'>" + id + "</th><th id='nombre'>" + nombre + "</th> <th>" + descripcion + "</th> <th id='editar'> EDITAR </th> <th id='borrar'> BORRAR </th></tr>"
                $('#tablaCuerpo').append(html);

            });

        }
    });
}