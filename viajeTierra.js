
//Funcion para viajar a la tierra
function viajarPlanetaTierra(planetaInicial) {
    if (planetaInicial <= 10000) {
        console.log("Ingresa un número mayor a 10000 para que puedas iniciar tu viaje a la tierra");
    }
    else {
        let cantidadTerricolas = 5; // numero de terricolasclear
        let planetaDestino = planetaInicial; // planeta destino
        let saltos = 0; //contador de saltos

        //Ciclo for que controla la cantidad de terricolas
        for (let i = 0; i < cantidadTerricolas; i++) {
            //Ciclo While que controla los saltos de cada terricola
            while (planetaDestino !== 1) {
                if (planetaDestino % 2 === 0) {
                    planetaDestino = planetaDestino / 2;
                    saltos++;
                    console.log('Salto numero: ' + saltos + ' el planeta destino es el: ' + planetaDestino)
                } else {
                    planetaDestino = (planetaDestino * 3) + 1;
                    saltos++;
                    console.log('Salto numero: ' + saltos + ' el planeta destino es el: ' + planetaDestino);
                }
            }
            console.log(`Terricola numero ${i + 1} llego a la tierra despues de ${saltos} saltos`);
            planetaDestino = planetaInicial;// Se vuelve a asignar el planeta inicial al planeta destino
            saltos = 0; // Se reinicia el contador de saltos
        }

    }
}


viajarPlanetaTierra(10001);