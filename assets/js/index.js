function gauss(mat_a, mat_b) {
    var i, j, k, l, m;

    // Escalonamento
    for (k = 0; k < mat_a.length - 1; k++) {
        // Procura o maior k-ésimo coeficiente em módulo
        var max = Math.abs(mat_a[k][k]);
        var maxIndex = k;
        for (i = k + 1; i < mat_a.length; i++) {
            if (max < Math.abs(mat_a[i][k])) {
                max = Math.abs(mat_a[i][k]);
                maxIndex = i;
            }
        }

        // Troca a equação k pela equação com o maior k-ésimo coeficiente em módulo
        if (maxIndex != k) {
            for (j = 0; j < mat_a.length; j++) {
                var temp = mat_a[k][j];
                mat_a[k][j] = mat_a[maxIndex][j];
                mat_a[maxIndex][j] = temp;
            }
            var temp = parseFloat(mat_b[k]);
            mat_b[k] = parseFloat(mat_b[maxIndex]);
            mat_b[maxIndex] = temp;
        }

        // Se mat_a[k][k] é zero, então a matriz dos coeficiente é singular (det mat_a = 0)
        if (mat_a[k][k] == 0) {
            return null;
        } else {
            // Realiza o escalonamento
            for (m = k + 1; m < mat_a.length; m++) {
                var F = -mat_a[m][k] / mat_a[k][k];
                mat_a[m][k] = 0; //evita uma iteração
                mat_b[m] = parseFloat(mat_b[m] + F * mat_b[k]);
                for (l = k + 1; l < mat_a.length; l++) {
                    mat_a[m][l] = mat_a[m][l] + F * mat_a[k][l];
                }
            }
        }
    }

    // Etapa de resolução do sistema
    var X = [];
    for (i = mat_a.length - 1; i >= 0; i--) {
        X[i] = mat_b[i];
        for (j = i + 1; j < mat_a.length; j++) {
            X[i] = X[i] - X[j] * mat_a[i][j];
            print(j, mat_a, X); // Imprime o resultado
        }
        X[i] = X[i] / mat_a[i][i];
        print(i, mat_a, X); // Imprime o resultado
    }

    return X;
}

function print(pivo, mat_a, mat_x) {
    var html = "";
    html += `<div class="col-12">`;
    html += `   <p>Pivô: ${pivo}</p>`;
    html += `</div>`;
    html += `<div class="col-9">`;
    html += `   <table class="table w-100 table-bordered">`;
    html += `       <tr>`;
    html += `           <td>${mat_a[0][0]}</td>`;
    html += `           <td>${mat_a[0][1]}</td>`;
    html += `           <td>${mat_a[0][2]}</td>`;
    html += `       </tr>`;
    html += `       <tr>`;
    html += `           <td>${mat_a[1][0]}</td>`;
    html += `           <td>${mat_a[1][1]}</td>`;
    html += `           <td>${mat_a[1][2]}</td>`;
    html += `       </tr>`;
    html += `       <tr>`;
    html += `           <td>${mat_a[2][0]}</td>`;
    html += `           <td>${mat_a[2][1]}</td>`;
    html += `           <td>${mat_a[2][2]}</td>`;
    html += `       </tr>`;
    html += `   </table>`;
    html += `</div>`;
    html += `<div class="col-3">`;
    html += `   <table class="table w-100 table-bordered">`;
    html += `       <tr>`;
    html += `           <td>${mat_x[0] != undefined ? mat_x[0] : 0}</td>`;
    html += `       </tr>`;
    html += `       <tr>`;
    html += `           <td>${mat_x[1] != undefined ? mat_x[1] : 0}</td>`;
    html += `       </tr>`;
    html += `       <tr>`;
    html += `           <td>${mat_x[2] != undefined ? mat_x[2] : 0}</td>`;
    html += `       </tr>`;
    html += `   </table>`;
    html += `   <hr>`;
    html += `</div>`;
    $("#result").append(html);
}

function calc() {
    $("#result").html("");

    // 0 x 0
    var a00s = $("#a00s").val();
    var a00 = $("#a00").val() != "" ? parseFloat($("#a00").val()) : 0;
    if (a00s == "-" && a00 != 0)
        a00 = a00 * -1;

    // 0 x 1
    var a01s = $("#a01s").val();
    var a01 = $("#a01").val() != "" ? parseFloat($("#a01").val()) : 0;
    if (a01s == "-" && a01 != 0)
        a01 = a01 * -1;

    // 0 x 2
    var a02s = $("#a02s").val();
    var a02 = $("#a02").val() != "" ? parseFloat($("#a02").val()) : 0;
    if (a02s == "-" && a02 != 0)
        a02 = a02 * -1;

    // 1 x 0
    var a10s = $("#a10s").val();
    var a10 = $("#a10").val() != "" ? parseFloat($("#a10").val()) : 0;
    if (a10s == "-" && a10 != 0)
        a10 = a10 * -1;

    // 1 x 1
    var a11s = $("#a11s").val();
    var a11 = $("#a11").val() != "" ? parseFloat($("#a11").val()) : 0;
    if (a11s == "-" && a11s != 0)
        a11 = a11 * -1;

    // 1 x 2
    var a12s = $("#a12s").val();
    var a12 = $("#a12").val() != "" ? parseFloat($("#a12").val()) : 0;
    if (a12s == "-" && a12 != 0)
        a12 = a12 * -1;

    // 2 x 0
    var a20s = $("#a20s").val();
    var a20 = $("#a20").val() != "" ? parseFloat($("#a20").val()) : 0;
    if (a20s == "-" && a20 != 0)
        a20 = a20 * -1;

    // 2 x 1
    var a21s = $("#a21s").val();
    var a21 = $("#a21").val() != "" ? parseFloat($("#a21").val()) : 0;
    if (a21s == "-" && a21 != 0)
        a21 = a21 * -1;

    // 2 x 2
    var a22s = $("#a22s").val();
    var a22 = $("#a22").val() != "" ? parseFloat($("#a22").val()) : 0;
    if (a22s == "-" && a22 != 0)
        a22 = a22 * -1;

    // Matriz A
    var mat_a = [
        [a00, a01, a02],
        [a10, a11, a12],
        [a20, a21, a22],
    ];

    //  0 x 0
    var b00s = $("#b00s").val();
    var b00 = $("#b00").val() != "" ? parseFloat($("#b00").val()) : 0;
    if (b00s == "-" && b00 != 0)
        b00 = b00 * -1;

    // 1 x 0
    var b10s = $("#b10s").val();
    var b10 = $("#b10").val() != "" ? parseFloat($("#b10").val()) : 0;
    if (b10s == "-" && b10 != 0)
        b10 = b10 * -1;

    // 2 x 0 
    var b20s = $("#b20s").val();
    var b20 = $("#b20").val() != "" ? parseFloat($("#b20").val()) : 0;
    if (b20s == "-" && b20 != 0)
        b20 = b20 * -1;

    // Matriz B
    var mat_b = [
        [b00],
        [b10],
        [b20],
    ];

    gauss(mat_a, mat_b);
}


$(document).ready(function () {
    $('input').mask("#.0000", {
        reverse: true
    });
});