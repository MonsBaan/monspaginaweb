$(document).ready(function() {
    console.log('Ready');

    $("#crearBingo").click(function() {
        let zonaTexto = $("#zonaTexto").val()
        var arrayTexto = []

        saveText(zonaTexto).forEach(a => {
            arrayTexto.push(a)
        });

        console.log(arrayTexto)
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