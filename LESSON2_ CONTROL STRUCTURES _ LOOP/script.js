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

//Task1.1. Viết chương trình nhập vào một số, kiểm tra và in ra số đó là số chẵn hay lẻ.

//Task1.2. Viết chương trình nhập vào một số, kiểm tra và in ra số đó là số âm hay dương.

//Task1.3. Dùng switch/case để viết chương trình nhập vào một số, kiểm tra và in ra số đó là số chẵn hay lẻ.

//Task1.4.Viết một chương trình yêu cầu người dùng nhập vào một số nguyên từ 1 đến 7. 
//Chương trình sẽ trả về ngày tương ứng trong tuần với số được nhập vào. Sử dụng switch case để giải quyết bài tập này.

//Task1.5.Viết một chương trình máy tính đơn giản bao gồm các chức năng cộng, trừ, nhân và chia sử dụng cấu trúc switch case.
//Hỏi người dùng chọn một phép tính, sau đó nhập hai số và trả về kết quả.

//Task1.6. Viết một chương trình đánh giá điểm học tập dựa trên một điểm số nhập vào từ người dùng. Sử dụng cấu trúc switch case để xác định xếp loại điểm theo quy tắc sau:

9-10: Xuất sắc
8-8.9: Giỏi
7-7.9: Khá
5-6.9: Trung bình
0-4.9: Yếu

//Task1.7. Viết chương trình nhận vào số nguyên từ 1 đến 4, mỗi số đại diện cho một loại hình học: 1 - Hình vuông, 2 - Hình chữ nhật, 3 - Hình tam giác, 4 - Hình tròn. 
//Dựa vào lựa chọn của người dùng, yêu cầu họ nhập các thông số liên quan (ví dụ: cạnh, chiều dài, chiều rộng, bán kính) và tính diện tích của hình tương ứng.
	

	
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

//Task2.1. Viết chương trình yêu cầu người dùng nhập vào một số nguyên n.
//Sau đó, in ra màn hình các số từ 1 đến n.

//Task2.2. Viết chương trình yêu cầu người dùng nhập vào một số nguyên n.
//Sau đó in ra tổng các số từ 1 đến n.

//Task2.3. Viết chương trình yêu cầu người dùng nhập vào một số nguyên n.
//Sau đó, in ra tổng các số lẻ từ 1 đến n.

//Task2.4.Tạo một số ngẫu nhiên từ 1 đến 100. Yêu cầu người dùng đoán số đó. 
//Sau mỗi lần đoán, thông báo cho họ biết số đoán của họ cao hơn, thấp hơn hay chính xác. Tiếp tục cho đến khi họ đoán đúng.

//Task2.5. Viết chương trình yêu cầu người dùng nhập vào một số nguyên n.
//Sau đó, in ra tổng các số chia hết cho 3 từ 1 đến n.

//Task2.6.Viết chương trình yêu cầu người dùng nhập mật khẩu đúng (ví dụ: "123456") sử dụng vòng lặp do while. 
//Nếu người dùng nhập sai mật khẩu, yêu cầu họ nhập lại cho đến khi nhập đúng.

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
//Task2.7. Giải câu đố "vừa gà vừa chó,bó lại cho trong, 36 con, 100 chân"
//Viết chương trình tìm ra số con gà và số con chó.
//Gợi ý: Sử dụng vòng lặp lồng nhau.

//Task2.8. Viết chương trình yêu cầu người dùng nhập vào một số nguyên n.
//Sau đó, in ra màn hình bảng cửu chương từ 1 đến n.

//Task2.8. Viết chương trình yêu cầu người dùng nhập vào một số nguyên n.
//Sau đó, in ra màn hình bảng cửu chương của n.

//Task2.9. Viết chương trình in ra bảng cửu chương từ 1 đến 10.



   
