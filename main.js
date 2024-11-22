//Hàm chuyển từ đọ C sang đọ F
function CelsiusToFahrenheit(Celsius){
    return(Celsius*9/5)+32;
}
//chuyển đỏi 
var celsius = 37; // nhiệt độ C
var fahrenheit = CelsiusToFahrenheit(celsius);
console.log(fahrenheit);
//Hàm tính diện tích hình chữ nhật
function calculateRectangleArea(width,length){
    return(length * width);
}
//hàm tính diện tích tam giác
function calculateTriangleArea(wheelbase,height){
    return(wheelbase*height)/2;
}
//hàm tính diện tích hình vuông
function calculateSquareArea (side){
    return(side * side);
}
//Tính diện tích các hình
var RectangleArea = calculateRectangleArea(6,7);
console.log(RectangleArea);
var TriangleArea = calculateRectangleArea(5,6);
console.log(TriangleArea);
var SquareArea = calculateSquareArea(5);
console.log(SquareArea);
