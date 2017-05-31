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

var getTriangle1Area = getTriangleArea(-2, 3);
console.log('Twój wynik: ' + getTriangle1Area);

var getTriangle2Area = getTriangleArea(5, 5);
console.log('Twój wynik: ' + getTriangle2Area);

var getTriangle3Area = getTriangleArea(5.8, 10.9);
console.log('Twój wynik: ' + getTriangle3Area);