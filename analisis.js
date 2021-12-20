// Helpers
function esPar(numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitadUno = lista[mitad - 1];
        const personaMitadDos = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitadUno, personaMitadDos]);
        return mediana;
        
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// Mediana general
const salariosCiclistas = ciclistas.map(
    function (ciclista) {
        return ciclista.salary
    }
);

const salariosCiclistasSorted = salariosCiclistas.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCiclistas = medianaSalarios(salariosCiclistasSorted);

// Mediana del top 10%
const spliceStart = (salariosCiclistasSorted.length * 90) / 100;
const spliceCount = salariosCiclistasSorted.length - spliceStart;

const salariosTop10 = salariosCiclistasSorted.splice(spliceStart, spliceCount);

const medianaTop10 = medianaSalarios(salariosTop10);

console.log(
    medianaGeneralCiclistas,
    medianaTop10,
);