

    const fromDollarToYen = function(valueInDollar){
        let oneDollarIs = {
            "JPY": 106.58, // japan yen
            "EUR": 0.83, // euro
            "GBP": 0.67, // british pound
        }
    
    
    // convertimos el valor a yenes
    
    let valueInYen = valueInDollar * 106.58;
    // retornamos el valor
    return valueInYen;
}
module.exports = { fromDollarToYen }
