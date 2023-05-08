/*Trong JavaScript, cấu trúc điều kiện được sử dụng để thực hiện các câu lệnh khác nhau tùy thuộc vào giá trị của một biểu thức logic. 
Các câu lệnh được thực hiện nếu biểu thức logic trả về true hoặc false khác nhau.
Có hai loại cấu trúc điều kiện trong JavaScript: if/else và switch/case.
*/
/*1. Cấu trúc lệnh if:
if (biểu thức logic) {
  // Các câu lệnh được thực hiện nếu biểu thức logic trả về true
}
//2. Cấu trúc if/else:
if (biểu thức logic) {
  // Các câu lệnh được thực hiện nếu biểu thức logic trả về true
} else {
  // Các câu lệnh được thực hiện nếu biểu thức logic trả về false
}
//3. Cấu trúc if/else if/else:
if (biểu thức logic 1) {
  // Các câu lệnh được thực hiện nếu biểu thức logic 1 trả về true
} else if (biểu thức logic 2) {
  // Các câu lệnh được thực hiện nếu biểu thức logic 2 trả về true
} else {
  // Các câu lệnh được thực hiện nếu biểu thức logic 1 và 2 trả về false
}
*/
//Ví dụ:
//1.Ví dụ về if
var x = 5;
if (x > 3) {
  console.log("x lớn hơn 3");
}
//2. Ví dụ về if/else
let x = 5;
if (x > 3) {
  console.log("x lớn hơn 3");
} else {
  console.log("x nhỏ hơn hoặc bằng 3");
}
//3. Ví dụ về if/else if/else
var x = 5;
if (x > 3) {
	  console.log("x lớn hơn 3");
} else if (x < 3) {
	  console.log("x nhỏ hơn 3");
} else {
	  console.log("x bằng 3");
}

//2. Cấu trúc switch/case:
/*
switch (biểu thức) {
  case giá trị 1:
    // Các câu lệnh nếu biểu thức bằng giá trị 1
    break;
  case giá trị 2:
    // Các câu lệnh nếu biểu thức bằng giá trị 2
    break;
  default:
    // Các câu lệnh nếu biểu thức không bằng bất kỳ giá trị nào được xác định trước đó
    break;
}
*/
//Ví dụ:
let day = "Thứ Hai";
switch (day) {
  case "Thứ Hai":
    console.log("Hôm nay là Thứ Hai");
    break;
  case "Thứ Ba":
    console.log("Hôm nay là Thứ Ba");
    break;
  default:
    console.log("Hôm nay không phải là Thứ Hai hoặc Thứ Ba");
    break;
}

//Task1. Viết chương trình nhập vào một số, kiểm tra và in ra số đó là số chẵn hay lẻ.
var number = prompt("Nhập vào một số: ");
if (number % 2 == 0) {
  console.log("Số " + number + " là số chẵn");
} else {
  console.log("Số " + number + " là số lẻ");
}
//Task2. Viết chương trình nhập vào một số, kiểm tra và in ra số đó là số âm hay dương.
var number = prompt("Nhập vào một số: ");
if (number > 0) {
  console.log("Số " + number + " là số dương");
} else if (number < 0) {
	console.log("Số " + number + " là số âm");
} else {
	console.log("Số " + number + " là số 0");
}
//Task3. Dùng switch/case để viết chương trình nhập vào một số, kiểm tra và in ra số đó là số chẵn hay lẻ.
var number = prompt("Nhập vào một số: ");
switch (number % 2) {
	  case 0:
	    console.log("Số " + number + " là số chẵn");
	    break;
	  case 1:
	    console.log("Số " + number + " là số lẻ");
	    break;
	  default:
	    console.log("Số " + number + " không phải là số chẵn hoặc lẻ");
	    break;
}
//Task4.Viết một chương trình yêu cầu người dùng nhập vào một số nguyên từ 1 đến 7. 
//Chương trình sẽ trả về ngày tương ứng trong tuần với số được nhập vào. Sử dụng switch case để giải quyết bài tập này.
let dayOfWeek = parseInt(prompt("Nhập vào một số nguyên từ 1 đến 7 để xem ngày trong tuần: "));
switch (dayOfWeek) {
  case 1:
    console.log("Hôm nay là Chủ Nhật");
    break;
  case 2:
    console.log("Hôm nay là Thứ Hai");
    break;
  case 3:
    console.log("Hôm nay là Thứ Ba");
    break;
  case 4:
    console.log("Hôm nay là Thứ Tư");
    break;
  case 5:
    console.log("Hôm nay là Thứ Năm");
    break;
  case 6:
    console.log("Hôm nay là Thứ Sáu");
    break;
  case 7:
    console.log("Hôm nay là Thứ Bảy");
    break;
  default:
    console.log("Bạn đã nhập số không hợp lệ");
    break;
}

/*JavaScript cung cấp ba loại vòng lặp khác nhau: for, while, và do...while.
Dưới đây là cú pháp và giải thích về cách sử dụng các loại vòng lặp này: */
/*1. Vòng lặp for
for (initialization; condition; increment/decrement) {
  // code to be executed
}
Giải thích:
	initialization: Khởi tạo giá trị đầu tiên cho biến.
	condition: Điều kiện để vòng lặp được thực thi.
	increment/decrement: Tăng hoặc giảm giá trị của biến sau mỗi lần thực hiện vòng lặp.
	code to be executed: Mã để thực thi mỗi lần vòng lặp được thực hiện. */
//Ví dụ:
for (let i = 0; i < 10; i++) {
	console.log(i);
}
/*2. Vòng lặp while
Cú pháp:
while (condition) {
  // code to be executed
}
Giải thích:
	condition: Điều kiện để vòng lặp được thực thi.
	code to be executed: Mã để thực thi mỗi lần vòng lặp được thực hiện.
*/
//Ví dụ:
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
/*3. Vòng lặp do...while
Cú pháp:
do {
  // code to be executed
} while (condition);
Giải thích:
	code to be executed: Mã để thực thi mỗi lần vòng lặp được thực hiện.
	condition: Điều kiện để vòng lặp được thực thi. 
	Khối mã này sẽ được thực thi ít nhất một lần ngay cả khi điều kiện không đúng.
*/
//Ví dụ:
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

//Task5. Viết chương trình yêu cầu người dùng nhập vào một số nguyên n.
//Sau đó, in ra màn hình các số từ 1 đến n.
let n = parseInt(prompt("Nhập vào một số nguyên n: "));
for (let i = 1; i <= n; i++) {
	console.log(i);
}
//Task6. Viết chương trình yêu cầu người dùng nhập vào một số nguyên n.
//Sau đó in ra tổng các số từ 1 đến n.
let n1 = parseInt(prompt("Nhập vào một số nguyên n: "));
let sum = 0;
for (let i = 1; i <= n1; i++) {
	sum += i;
}

console.log("Tổng các số từ 1 đến " + n1 + " là: " + sum);
//Task7. Viết chương trình yêu cầu người dùng nhập vào một số nguyên n.
//Sau đó, in ra tổng các số lẻ từ 1 đến n.
let n2 = parseInt(prompt("Nhập vào một số nguyên n: "));
let sum1 = 0;
for (let i = 1; i <= n2; i++) {
	if (i % 2 == 1) {
		sum1 += i;
	}
}
console.log("Tổng các số lẻ từ 1 đến " + n2 + " là: " + sum1);
//Task8. Viết chương trình yêu cầu người dùng nhập vào một số nguyên n.
//Sau đó, in ra tổng các số chẵn từ 1 đến n.
let n3 = parseInt(prompt("Nhập vào một số nguyên n: "));
let sum2 = 0;
for (let i = 1; i <= n3; i++) {
	if (i % 2 == 0) {
		sum2 += i;
	}
}
console.log("Tổng các số chẵn từ 1 đến " + n3 + " là: " + sum2);
//Task9. Viết chương trình yêu cầu người dùng nhập vào một số nguyên n.
//Sau đó, in ra tổng các số chia hết cho 3 từ 1 đến n.
let n4 = parseInt(prompt("Nhập vào một số nguyên n: "));
let sum3 = 0;
for (let i = 1; i <= n4; i++) {
	if (i % 3 == 0) {
		sum3 += i;
	}
}
console.log("Tổng các số chia hết cho 3 từ 1 đến " + n4 + " là: " + sum3);




   
