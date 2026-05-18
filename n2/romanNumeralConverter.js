function convertToRoman(num) {

  const matrizRomana = [
    { decimal: 1000, romano: 'M' },
    { decimal: 900,  romano: 'CM' },
    { decimal: 500,  romano: 'D' },
    { decimal: 400,  romano: 'CD' },
    { decimal: 100,  romano: 'C' },
    { decimal: 90,   romano: 'XC' },
    { decimal: 50,   romano: 'L' },
    { decimal: 40,   romano: 'XL' },
    { decimal: 10,   romano: 'X' },
    { decimal: 9,    romano: 'IX' },
    { decimal: 5,    romano: 'V' },
    { decimal: 4,    romano: 'IV' },
    { decimal: 1,    romano: 'I' }
  ];

  let resultadoRomano = '';

  for (let i = 0; i < matrizRomana.length; i++) {
    
    while (num >= matrizRomana[i].decimal) {
      
      resultadoRomano += matrizRomana[i].romano;
      
      num -= matrizRomana[i].decimal;
    }
  }

  return resultadoRomano;
}