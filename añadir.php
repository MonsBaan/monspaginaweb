<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
    <link rel='stylesheet' href='css/comun.css'>
    <link rel='stylesheet' href='css/añadir.css'>
    <title>Gran Bingo Bingero</title>
</head>

<body>
    <a id='panel' href="panel.php">Panel de Control</a>

    <h1>Gran Bingo Bingero</h1>

    <form action="" method="post">
        <label for="">Nombre</label>
        <select name="" id="filtroNombre">
            <option value='0'>Nuevo</option>
        </select>
        <input id="nombreNuevo" type="text"><br>
        <label for="">Descripcion</label><br>
        <textarea name="" id="descripcion" cols="70" rows="10"></textarea><br>

        <input id="btnEnviar" type="button" value="Enviar">
    </form>

</body>

<script src="js/jquery.js"></script>
<script src='js/añadir.js'></script>

</html>