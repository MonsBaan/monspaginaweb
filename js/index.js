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
        html += "<table id='tabla'>"
        for (let i = 0; i < 5; i++) {
            html += "<tr>"
            for (let z = 0; z < 5; z++) {
                if (i == 2 && z == 2) {
                    html += "<th><img src='source/efs.png' alt='' id='token'></th>"
                } else {
                    if (arrayTexto.length <= cont) {
                        cont = 0;
                    }
                    switch (i) {
                        case 0:
                            switch (z) {
                                case 0:
                                    html += "<th class='opcion' style='border-radius: 20px 0px 0px 0px;'>" + arrayFinal[cont] + "</th>"
                                    cont++
                                    break;
                                case 4:
                                    html += "<th class='opcion' style='border-radius: 0px 20px 0px 0px;'>" + arrayFinal[cont] + "</th>"
                                    cont++
                                    break;

                                default:
                                    html += "<th class='opcion'>" + arrayFinal[cont] + "</th>"
                                    cont++
                                    break;
                            }
                            break;
                        case 4:
                            switch (z) {
                                case 0:
                                    html += "<th class='opcion' style='border-radius: 0px 0px 0px 20px;'>" + arrayFinal[cont] + "</th>"
                                    cont++
                                    break;
                                case 4:
                                    html += "<th class='opcion' style='border-radius: 0px 0px 20px 0px;'>" + arrayFinal[cont] + "</th>"
                                    cont++
                                    break;
                                default:
                                    html += "<th class='opcion'>" + arrayFinal[cont] + "</th>"
                                    cont++
                                    break;
                            }
                            break;
                        default:
                            html += "<th class='opcion'>" + arrayFinal[cont] + "</th>"
                            cont++
                            break;
                    }


                    /* if (i == 0 && z == 0) {
                         html += "<th class='opcion' style='border-radius: 20px 0px 0px;'>" + arrayFinal[cont] + "</th>"
                         cont++
                     } else {
                         html += "<th class='opcion'>" + arrayFinal[cont] + "</th>"
                         cont++
                     }*/



                }


            }
            html += "</tr>"

        }
        html += "</table>"
        $("#Bingo").html(html)

    });


    $(document).on('click', '.opcion', function() {

        if ($(this).css("background-color") == "rgb(0, 83, 5)") {
            $(this).css("background-color", "rgba(0, 0, 0, 0)")
        } else {
            $(this).css("background-color", "rgb(0, 83, 5)")
        }

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