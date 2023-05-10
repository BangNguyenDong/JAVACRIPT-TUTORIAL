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

//Task2. Viết chương trình nhập vào một số, kiểm tra và in ra số đó là số âm hay dương.

//Task3. Dùng switch/case để viết chương trình nhập vào một số, kiểm tra và in ra số đó là số chẵn hay lẻ.

//Task4.Viết một chương trình yêu cầu người dùng nhập vào một số nguyên từ 1 đến 7. 
//Chương trình sẽ trả về ngày tương ứng trong tuần với số được nhập vào. Sử dụng switch case để giải quyết bài tập này.

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

//Task6. Viết chương trình yêu cầu người dùng nhập vào một số nguyên n.
//Sau đó in ra tổng các số từ 1 đến n.

//Task7. Viết chương trình yêu cầu người dùng nhập vào một số nguyên n.
//Sau đó, in ra tổng các số lẻ từ 1 đến n.

//Task8. Viết chương trình yêu cầu người dùng nhập vào một số nguyên n.
//Sau đó, in ra tổng các số chẵn từ 1 đến n.

//Task9. Viết chương trình yêu cầu người dùng nhập vào một số nguyên n.
//Sau đó, in ra tổng các số chia hết cho 3 từ 1 đến n.

/*Vòng for lồng nhau
Vòng lặp for có thể được lồng nhau bên trong vòng lặp khác.
Cú pháp:
for (initialization; condition; increment/decrement) {
  // code to be executed
  for (initialization; condition; increment/decrement) {
    // code to be executed
  }
}
Giải thích:
  initialization: Khởi tạo giá trị đầu tiên cho biến.
  condition: Điều kiện để vòng lặp được thực thi.
  increment/decrement: Tăng hoặc giảm giá trị của biến sau mỗi lần thực hiện vòng lặp.
  code to be executed: Mã để thực thi mỗi lần vòng lặp được thực hiện. */
//Ví dụ:
for (let i = 0; i < 10; i++) {
  console.log("Vòng lặp ngoài: " + i);
  for (let j = 0; j < 10; j++) {
    console.log("Vòng lặp trong: " + j);
  }
}
//Task10. Giải câu đố "vừa gà vừa chó,bó lại cho trong, 36 con, 100 chân"
//Viết chương trình tìm ra số con gà và số con chó.
//Gợi ý: Sử dụng vòng lặp lồng nhau.

//Task11. Viết chương trình yêu cầu người dùng nhập vào một số nguyên n.
//Sau đó, in ra màn hình bảng cửu chương từ 1 đến n.

//Task12. Viết chương trình yêu cầu người dùng nhập vào một số nguyên n.
//Sau đó, in ra màn hình bảng cửu chương của n.

//Task13. Viết chương trình in ra bảng cửu chương từ 1 đến 10.



   
