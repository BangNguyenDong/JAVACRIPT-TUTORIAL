//Tạo biến chứa dữ liệu
//var là biến có thể thay đổi giá trị, có thể khai báo lại
//let là biến có thể thay đổi giá trị nhưng không thể khai báo lại
//const là biến không thể thay đổi giá trị, không thể khai báo lại
var ten = "Nguyễn Văn A";
let age = 20;
const address = "Hà Nội";
//Cách khai báo thứ 2
var ten2;
var age2;
var address2;
ten2 = "Nguyễn Văn B";
age2 = 21;
address2 = "Hà Nội";
//Cách khai báo thứ 3
var ten3 = "Nguyễn Văn C", age3 = 22, address3 = "Hà Nội";
//In ra màn hình
console.log(ten);
console.log(age);
console.log(address);
//In ra màn hình với nội dung
console.log("Tên tôi là: " + ten);
console.log("Tuổi tôi là: " + age);
console.log("Địa chỉ tôi là: " + address);
//In ra màn hình với nội dung và kiểu dữ liệu
console.log("Tên tôi là: " + ten + " kiểu dữ liệu: " + typeof ten);
console.log("Tuổi tôi là: " + age + " kiểu dữ liệu: " + typeof age);
console.log("Địa chỉ tôi là: " + address + " kiểu dữ liệu: " + typeof address);
//In ra màn hình trang web với nội dung
document.write("Tên tôi là: " + ten + "<br>");
document.write("Tuổi tôi là: " + age + "<br>");
document.write("Địa chỉ tôi là: " + address + "<br>");

//Câu lệnh alert
alert("Hello World");
//Câu lệnh prompt
var ten = prompt("Nhập tên của bạn");
console.log(ten);
//Câu lệnh confirm
var result = confirm("Bạn có muốn xóa không?");
console.log(result);
//Kiểu dữ liệu số
var number = 10;
console.log(number);
console.log(typeof number);
//Kiểu dữ liệu chuỗi
var str = "Hello World";
console.log(str);
console.log(typeof str);
//Kiểu dữ liệu boolean
var bool = true;
console.log(bool);
console.log(typeof bool);
//Kiểu dữ liệu null
var nullVar = null;
console.log(nullVar);
console.log(typeof nullVar);
//Kiểu dữ liệu undefined
var undefinedVar;
console.log(undefinedVar);
console.log(typeof undefinedVar);
//Kiểu dữ liệu object
var object = {
	    ten: "Nguyễn Văn A",
	    age: 20,
	    address: "Hà Nội"
	};
console.log(object);
console.log(typeof object);
//Kiểu dữ liệu array
var array = ["Nguyễn Văn A", 20, "Hà Nội"];
console.log(array);
console.log(typeof array);
//Kiểu dữ liệu function
var func = function(){
	    console.log("Hello World");
	}
console.log(func);
console.log(typeof func);
// Ép kiểu dữ liệu trong javascript
// Ép kiểu dữ liệu số
var x="10";
//Kiểu dữ liệu của x
console.log(typeof x);
//Ép kiểu dữ liệu của x thành kiểu số
x = Number(x);
//Kiểu dữ liệu của x
console.log(typeof x);
//Ép kiểu dữ liệu của x thành kiểu chuỗi
x = String(x);
//Kiểu dữ liệu của x
console.log(typeof x);
//Ép kiểu dữ liệu của x thành kiểu boolean
x = Boolean(x);
//Kiểu dữ liệu của x
console.log(typeof x);
// Ép kiểu dữ liệu số nguyên
var x = 10.5;
//Kiểu dữ liệu của x
console.log(typeof x);
//Ép kiểu dữ liệu của x thành kiểu số nguyên
x = parseInt(x);
//Kiểu dữ liệu của x
console.log(typeof x);
//Ép kiểu dữ liệu của x thành số thực
x = parseFloat(x);
//Kiểu dữ liệu của x
console.log(typeof x);

//Toán tử trong javascript
//Toán tử số học gồm: + - * / %
var x = 10;
var y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
//Toán tử gán gồm: = += -= *= /= %=
var x = 10;
var y = 5;
console.log(x += y);
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);
console.log(x %= y);
//Toán tử so sánh gồm: == != > < >= <=
var x = 10;
var y = 5;
console.log(x == y);
console.log(x != y);
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
//Toán tử logic gồm: && || !
var x = 10;
var y = 5;
console.log(x == 10 && y == 5);
console.log(x == 10 || y == 5);
console.log(!(x == 10 && y == 5));

//Bài 1: Viết chương trình tính tổng, tích, hiệu, thương của 2 số a và b


//Bài 2: Kiểm tra xem môt số có phải là số chẵn hay không, nếu là số chẵn thì in ra true, nếu không phải là số chẵn thì in ra false


//Bài 3: Tính diện tích và chu vi hình chữ nhật


//Bài 4: Tính diện tích và chu vi hình tròn


//Bài 5: Tính cạnh huyền của tam giác vuông


//Bài 6: Tính diện tích của tam giác theo công thức Heron


















