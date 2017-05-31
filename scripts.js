// scripts.js

function getTriangleArea(a, h) {
    if ((a < 0) || (h < 0)) {
    console.log('Nieprawidłowe dane!');
    }
    else if ((a > 0) && (h > 0)) {
    return a*h/2;
    }
}
console.log('Twój wynik: '+ getTriangleArea(10, 6));

getTriangleArea();


/* Zrób trzy zmienne, które będą posiadały pole trójkąta, za każdym razem przekazując różne liczby w parametrze. Podpowiedź: var triangle1Area = getTriangleArea(10, 15); */