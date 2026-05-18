function rot13(str) {
  let resultado = '';

  
  for (let i = 0; i < str.length; i++) {
  
    let codigo = str.charCodeAt(i);

  
    if (codigo >= 65 && codigo <= 90) {
  
      if (codigo <= 77) {
        resultado += String.fromCharCode(codigo + 13);
      } 
  
      else {
        resultado += String.fromCharCode(codigo - 13);
      }
    } else {
  
      resultado += str[i];
    }
  }

  return resultado;
}