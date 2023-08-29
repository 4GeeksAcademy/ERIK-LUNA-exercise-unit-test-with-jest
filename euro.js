const fromEuroToDollar = function(valueInEuro){
    let oneEuroIs = {
        "JPY": 127.9, // japan yen
        "USD": 1.2, // us dollar
        "GBP": 0.8, // british pound
    }

   
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;

    // retornamos el valor
    return valueInDollar;

}
module.exports = { fromEuroToDollar }
