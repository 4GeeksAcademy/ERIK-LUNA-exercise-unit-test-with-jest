
    
    const fromYenToPound = function(valueInYen){
        let oneDollarIs = {
            "USD": 0.0094, // us dollar
            "EUR": 0.0078, //  euro
            "GBP": 0.0063, // british pound
            }

    
    // convertimos el valor a Libras
 
    let valueInPound = valueInYen * 0.0063;
    // retornamos el valor
    return valueInPound;
}

module.exports = { fromYenToPound }