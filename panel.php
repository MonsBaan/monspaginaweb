<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
    <link rel='stylesheet' href='css/comun.css'>
    <link rel='stylesheet' href='css/tabla.css'>
    <link rel='stylesheet' href='css/panel.css'>


    <title>Gran Bingo Bingero</title>
</head>

<body>
    <a id='panel' href="index.php">Inicio</a>
    <h1>Gran Bingo Bingero</h1>
    <div id="añadir">
        <a href="añadir.php">Añadir</a>
    </div>
    <div id="filtroGr">
        <label for="">Filtro de Busqueda</label>
        <select name="" id="filtro">
            <option value="1">ID</option>
            <option value="2">Descripcion</option>
            <option value="3">Nombre</option>
        </select>
        <select name="" id="filtroNombre"></select>
        <input type="text">
        <label id='recargar' for="">Recargar Tabla</label>

    </div>

    <table class='table table-striped table-class' id='table-id'>
        <thead>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>DESCRIPCION</th>
            <th>EDITAR</th>
            <th>BORRAR</th>
        </thead>
        <tbody id='tablaCuerpo'>
        </tbody>

    </table>
</body>
<script src="js/jquery.js"></script>
<script src='js/panel.js'></script>

</html>