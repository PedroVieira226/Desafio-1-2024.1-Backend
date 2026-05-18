function palindrome(str) {
  const stringLimpa = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  const stringInvertida = stringLimpa.split('').reverse().join('');
  
  return stringLimpa === stringInvertida;
}
palindrome("eye");