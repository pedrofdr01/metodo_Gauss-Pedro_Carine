/*
Algoritmo para resolução de sistemas lineares via eliminação de Gauss
A é a matriz dos coeficientes do sistema
b é a matriz dos coeficientes dos termos independentes
Forma do sistema (matricial): Ax = b
*/

function gauss(mat_a, mat_b) {
    var i, j, k, l, m;
    //ETAPA DE ESCALONAMENTO
    for (k = 0; k < mat_a.length - 1; k++) {
        //procura o maior k-ésimo coeficiente em módulo
        var max = Math.abs(mat_a[k][k]);
        var maxIndex = k;
        for (i = k + 1; i < mat_a.length; i++) {
            if (max < Math.abs(mat_a[i][k])) {
                max = Math.abs(mat_a[i][k]);
                maxIndex = i;
            }
        }
        if (maxIndex != k) {
            /*
             troca a equação k pela equação com o
             maior k-ésimo coeficiente em módulo
             */
            for (j = 0; j < mat_a.length; j++) {
                var temp = mat_a[k][j];
                mat_a[k][j] = mat_a[maxIndex][j];
                mat_a[maxIndex][j] = temp;

                console.table(mat_a);
            }
            var temp = parseFloat(mat_b[k]);
            mat_b[k] = parseFloat(mat_b[maxIndex]);
            mat_b[maxIndex] = temp;

            console.table(mat_b);
        }
        //Se mat_a[k][k] é zero, então a matriz dos coeficiente é singular
        //det mat_a = 0
        if (mat_a[k][k] == 0) {
            return null;
        } else {
            //realiza o escalonamento
            for (m = k + 1; m < mat_a.length; m++) {
                var F = -mat_a[m][k] / mat_a[k][k];
                mat_a[m][k] = 0; //evita uma iteração
                mat_b[m] = parseFloat(mat_b[m] + F * mat_b[k]);
                for (l = k + 1; l < mat_a.length; l++) {
                    mat_a[m][l] = mat_a[m][l] + F * mat_a[k][l];
                    console.table(mat_a);
                }
                console.table(mat_b);
            }
        }
    }
    //ETAPA DE RESOLUÇÃO DO SISTEMA
    var X = [];
    for (i = mat_a.length - 1; i >= 0; i--) {
        X[i] = mat_b[i];
        for (j = i + 1; j < mat_a.length; j++) {
            X[i] = X[i] - X[j] * mat_a[i][j];
            console.log(X)
        }
        X[i] = X[i] / mat_a[i][i];


    }

    return X;
}

function calc() {
    var a00 = $("#a00").val() != "" ? parseFloat($("#a00").val()) : 0; // 0x0
    var a01 = $("#a01").val() != "" ? parseFloat($("#a01").val()) : 0; // 0x2
    var a02 = $("#a02").val() != "" ? parseFloat($("#a02").val()) : 0; // 0x2
    var a10 = $("#a10").val() != "" ? parseFloat($("#a10").val()) : 0; // 1x0
    var a11 = $("#a11").val() != "" ? parseFloat($("#a11").val()) : 0; // 1x1
    var a12 = $("#a12").val() != "" ? parseFloat($("#a12").val()) : 0; // 1x2
    var a20 = $("#a20").val() != "" ? parseFloat($("#a20").val()) : 0; // 2x0
    var a21 = $("#a21").val() != "" ? parseFloat($("#a21").val()) : 0; // 2x1
    var a22 = $("#a22").val() != "" ? parseFloat($("#a22").val()) : 0; // 2x2

    var mat_a = [
        [a00, a01, a02],
        [a10, a11, a12],
        [a20, a21, a22],
    ];

    var b00 = $("#b00").val() != "" ? parseFloat($("#b00").val()) : 0; // 0x0
    var b10 = $("#b10").val() != "" ? parseFloat($("#b10").val()) : 0; // 0x2
    var b20 = $("#b20").val() != "" ? parseFloat($("#b20").val()) : 0; // 0x2

    var mat_b = [
        [b00],
        [b10],
        [b20],
    ];

    gauss(mat_a, mat_b);
}