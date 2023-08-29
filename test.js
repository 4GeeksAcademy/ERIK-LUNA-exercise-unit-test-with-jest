test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./euro.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 106.58 yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./usd.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(373.03); //1 dollar son 106.58 yenes, entonces 3.5 euros deberian ser = (3.5 * 106.58)
})

test("One yen should be 0.0063 pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./yen.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.02205); //1 yen son 0,0063 yenes, entonces 3.5 yen deberian ser = (3.5 * 0,0063)
})