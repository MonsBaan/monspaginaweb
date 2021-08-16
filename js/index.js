$(document).ready(function() {
    console.log('Ready');

    $("#crearBingo").click(function() {
        let zonaTexto = $("#zonaTexto").val()
        var arrayTexto = []
        let html = ""
        let cont = 0
        saveText(zonaTexto).forEach(a => {
            arrayTexto.push(a)
        });

        arrayFinal = shuffle(arrayTexto);
        html += "<table>"
        for (let i = 0; i < 5; i++) {
            html += "<tr></tr>"
            for (let z = 0; z < 5; z++) {
                html += "<th>" + arrayFinal[cont] + "</th>"
                cont++
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

function shuffle(array) {
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

    var currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}