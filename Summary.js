let a = 10;
let b = 9;
let c = a;
//các phép toán tử
//+,-,*,/,%
console.log(a += b);
console.log(a -= b);
console.log(a *= b);
console.log(a /= b);
console.log(a %= b);

//nối chuỗi
let text1 = "Math is easier";
let text2 = "than you think";

let x = text1 + text2;
console.log(x);

console.log("Chemistry" + " is " + "just " + "as easy")

//hàm so sánh
console.log(a == text1);

console.log(a != b);

console.log(a === c);

console.log(text1 !== text2);

console.log(text1 > text2);

console.log(a < b);

console.log(a <= c);

console.log(a >= text2);

//logic
let hour = 8;

console.log(hour < 10 || hour > 12)
console.log(null || 1)
console.log(null || 0 || 1)
console.log(0 && "no matter what" )
console.log(1 && 2 && null && 3)

//sử dụng typeof và toán tử bậc 3
console.log(typeof null === 'null');
console.log(x ? '$2.00' : '$10.00');
