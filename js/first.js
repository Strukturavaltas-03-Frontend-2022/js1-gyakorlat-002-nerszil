/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/

'use trickt'

const numbers = [12, 5, 98, 54];
const brutto = numbers.map(brutto);

document.getElementById("demo").innerHTML = brutto.map(Math.round);

function brutto(num) {
  return num * 1.27;
}