$(document).ready(function() {
    console.log('Ready');

    $("#crearBingo").click(function() {
        let zonaTexto = $("#zonaTexto").val()
        var arrayTexto = []
        let html = ""
        saveText(zonaTexto).forEach(a => {
            arrayTexto.push(a)
        });

        console.log(arrayTexto)


        html += "<table>"
        for (let i = 0; i < 5; i++) {
            html += "<tr></tr>"
            for (let z = 0; z < 5; z++) {
                html += "<th></th>"
            }
            html += "</tr>"

        }
        html += "</table>"
        $("#Bingo").html(html)

    });

});

function saveText(texto) {
    let opcion = ""
    let arrayTemp = []
    for (let i = 0; i <= texto.length; i++) {
        if (texto[i] == "\n" || i == texto.length) {

            if (opcion.trim() != "") {
                arrayTemp.push(opcion)
                opcion = ""
            }

        } else {
            opcion += texto[i]

        }
    }
    return arrayTemp;
}