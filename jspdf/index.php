<?php

// echo 'oi';

?>

<html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <title>Página Inicial</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>

<body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.2.3/jspdf.plugin.autotable.min.js"></script>
    <button id="generate">Generate PDF</button>

    <table id="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Phone</th>
                <th>City</th>
                <th>State</th>
                <th>Adress</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td align="right">1</td>
                <td>Daniel</td>
                <td>Andrade</td>
                <td>daniel@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">2</td>
                <td>Robson</td>
                <td>Espindula</td>
                <td>robson@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">3</td>
                <td>Tobias</td>
                <td>Carlos</td>
                <td>tobias@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">4</td>
                <td>Gustavo</td>
                <td>Moragas</td>
                <td>gustavo@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">5</td>
                <td>Fabio</td>
                <td>Goularte</td>
                <td>fabio@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">1</td>
                <td>Daniel</td>
                <td>Andrade</td>
                <td>daniel@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">2</td>
                <td>Robson</td>
                <td>Espindula</td>
                <td>robson@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">3</td>
                <td>Tobias</td>
                <td>Carlos</td>
                <td>tobias@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">4</td>
                <td>Gustavo</td>
                <td>Moragas</td>
                <td>gustavo@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">5</td>
                <td>Fabio</td>
                <td>Goularte</td>
                <td>fabio@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">1</td>
                <td>Daniel</td>
                <td>Andrade</td>
                <td>daniel@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">2</td>
                <td>Robson</td>
                <td>Espindula</td>
                <td>robson@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">3</td>
                <td>Tobias</td>
                <td>Carlos</td>
                <td>tobias@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">4</td>
                <td>Gustavo</td>
                <td>Moragas</td>
                <td>gustavo@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">5</td>
                <td>Fabio</td>
                <td>Goularte</td>
                <td>fabio@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">1</td>
                <td>Daniel</td>
                <td>Andrade</td>
                <td>daniel@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">2</td>
                <td>Robson</td>
                <td>Espindula</td>
                <td>robson@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">3</td>
                <td>Tobias</td>
                <td>Carlos</td>
                <td>tobias@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">4</td>
                <td>Gustavo</td>
                <td>Moragas</td>
                <td>gustavo@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">5</td>
                <td>Fabio</td>
                <td>Goularte</td>
                <td>fabio@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">1</td>
                <td>Daniel</td>
                <td>Andrade</td>
                <td>daniel@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">2</td>
                <td>Robson</td>
                <td>Espindula</td>
                <td>robson@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">3</td>
                <td>Tobias</td>
                <td>Carlos</td>
                <td>tobias@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">4</td>
                <td>Gustavo</td>
                <td>Moragas</td>
                <td>gustavo@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">5</td>
                <td>Fabio</td>
                <td>Goularte</td>
                <td>fabio@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">1</td>
                <td>Daniel</td>
                <td>Andrade</td>
                <td>daniel@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">2</td>
                <td>Robson</td>
                <td>Espindula</td>
                <td>robson@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">3</td>
                <td>Tobias</td>
                <td>Carlos</td>
                <td>tobias@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">4</td>
                <td>Gustavo</td>
                <td>Moragas</td>
                <td>gustavo@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">5</td>
                <td>Fabio</td>
                <td>Goularte</td>
                <td>fabio@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">1</td>
                <td>Daniel</td>
                <td>Andrade</td>
                <td>daniel@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">2</td>
                <td>Robson</td>
                <td>Espindula</td>
                <td>robson@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">3</td>
                <td>Tobias</td>
                <td>Carlos</td>
                <td>tobias@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">4</td>
                <td>Gustavo</td>
                <td>Moragas</td>
                <td>gustavo@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">5</td>
                <td>Fabio</td>
                <td>Goularte</td>
                <td>fabio@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">1</td>
                <td>Daniel</td>
                <td>Andrade</td>
                <td>daniel@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">2</td>
                <td>Robson</td>
                <td>Espindula</td>
                <td>robson@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">3</td>
                <td>Tobias</td>
                <td>Carlos</td>
                <td>tobias@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">4</td>
                <td>Gustavo</td>
                <td>Moragas</td>
                <td>gustavo@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">5</td>
                <td>Fabio</td>
                <td>Goularte</td>
                <td>fabio@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">1</td>
                <td>Daniel</td>
                <td>Andrade</td>
                <td>daniel@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">2</td>
                <td>Robson</td>
                <td>Espindula</td>
                <td>robson@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">3</td>
                <td>Tobias</td>
                <td>Carlos</td>
                <td>tobias@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">4</td>
                <td>Gustavo</td>
                <td>Moragas</td>
                <td>gustavo@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">5</td>
                <td>Fabio</td>
                <td>Goularte</td>
                <td>fabio@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">1</td>
                <td>Daniel</td>
                <td>Andrade</td>
                <td>daniel@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">2</td>
                <td>Robson</td>
                <td>Espindula</td>
                <td>robson@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">3</td>
                <td>Tobias</td>
                <td>Carlos</td>
                <td>tobias@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">4</td>
                <td>Gustavo</td>
                <td>Moragas</td>
                <td>gustavo@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">5</td>
                <td>Fabio</td>
                <td>Goularte</td>
                <td>fabio@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">1</td>
                <td>Daniel</td>
                <td>Andrade</td>
                <td>daniel@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">2</td>
                <td>Robson</td>
                <td>Espindula</td>
                <td>robson@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">3</td>
                <td>Tobias</td>
                <td>Carlos</td>
                <td>tobias@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">4</td>
                <td>Gustavo</td>
                <td>Moragas</td>
                <td>gustavo@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">5</td>
                <td>Fabio</td>
                <td>Goularte</td>
                <td>fabio@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">1</td>
                <td>Daniel</td>
                <td>Andrade</td>
                <td>daniel@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">2</td>
                <td>Robson</td>
                <td>Espindula</td>
                <td>robson@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">3</td>
                <td>Tobias</td>
                <td>Carlos</td>
                <td>tobias@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">4</td>
                <td>Gustavo</td>
                <td>Moragas</td>
                <td>gustavo@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
            <tr>
                <td align="right">5</td>
                <td>Fabio</td>
                <td>Goularte</td>
                <td>fabio@gmail.com</td>
                <td>Brasil</td>
                <td>35999999999</td>
                <td>Passos</td>
                <td>Minas Gerais</td>
                <td>Av Jupiter, 168</td>
                <td>5000</td>
            </tr>
        </tbody>
    </table>
    <script>
        var elem = document.getElementById("generate");
        elem.onclick = function() {
            var doc = new jsPDF(1, 'pt', 'a3');
            // doc.addImage()
            doc.text(300, 20, "Relatório de Atraso");
            doc.autoTable({
                html: '#table',
                columnStyles: {

                },
                // bodyStyles: {
                //     minCellHeight: 30
                // },
                tableWidth: 'wrap',
                theme: 'grid',
                styles: {
                    fontSize: 12,
                    cellPadding: 6,
                }
            });
            doc.save('table.pdf');
        }
    </script>
</body>

</html>