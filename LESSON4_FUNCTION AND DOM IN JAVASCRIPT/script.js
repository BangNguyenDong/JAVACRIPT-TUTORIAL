/*Trong JavaScript, hàm là một khối mã có thể được gọi để thực thi một tác vụ cụ thể. 
Hàm có thể nhận tham số đầu vào và trả về giá trị đầu ra (hoặc không trả về gì cả).
Để định nghĩa một hàm trong JavaScript, bạn có thể sử dụng cú pháp sau: 
Cú pháp:
function functionName(parameter1, parameter2, ...) {
  // code block
  return returnValue;
}
Trong đó:
	functionName là tên của hàm.
	parameter1, parameter2, ... là các tham số đầu vào mà hàm sẽ nhận. 
	Bạn có thể không có tham số nào hoặc có nhiều tham số tùy ý.
	// code block là mã JavaScript mà hàm sẽ thực thi khi được gọi.
	return returnValue là giá trị đầu ra của hàm. 
	Bạn có thể không có giá trị trả về hoặc trả về một giá trị tùy ý. */
/*Ví dụ:
Trong ví dụ trên, chúng ta đã định nghĩa một hàm addNumbers để tính tổng của hai số và trả về kết quả. 
Sau đó, chúng ta đã gọi hàm và lưu kết quả vào biến result và in ra giá trị của result.*/
function addNumbers(a, b) {
	return a + b;
   } 
let result0 = addNumbers(5, 10);
console.log(result0); // 15
/*Ngoài ra, trong JavaScript, bạn cũng có thể định nghĩa hàm bằng cách sử dụng biểu thức hàm (function expression) 
hoặc hàm mũi tên (arrow function). */ 
//Biểu thức hàm:  
let addNumbers1 = function(a, b) {
  return a + b;
};
let result = addNumbers1(5, 10);
console.log(result); // 15
//Hàm mũi tên:
let addNumbers2 = (a, b) => {
  return a + b;
};
let result1 = addNumbers2(5, 10);
console.log(result1); // 15
//Nếu hàm chỉ có một lệnh trả về, bạn có thể viết nó ngắn gọn hơn như sau:
let addNumbers3 = (a, b) => a + b;
let result2 = addNumbers3(5, 10);
console.log(result2); // 15 
/*Trong JavaScript, bạn có thể sử dụng các hàm bên trong hàm để tạo ra các hàm lồng nhau. 
Các hàm lồng nhau được gọi là "nested function". 
Hàm lồng nhau có thể truy cập các biến được định nghĩa trong hàm bao quanh nó, cũng như các biến toàn cục.*/
//Ví dụ:
function calculateSum(a, b) {
	function add(x, y) {
	  return x + y;
	}
	const sum = add(a, b);
	return sum;
   }
const result3 = calculateSum(2, 3);
console.log(result3); // Output: 5
/*Trong ví dụ này, chúng ta có một hàm lồng nhau tên là add(), được định nghĩa bên trong
 hàm calculateSum(). Hàm add() thực hiện phép cộng giữa hai tham số và trả về kết quả.
Trong hàm calculateSum(), chúng ta gọi hàm add() để tính tổng của hai tham số đầu vào, và trả về kết quả.
Khi chạy đoạn mã, kết quả sẽ được in ra là số 5, vì 2 + 3 = 5.
Lưu ý rằng hàm add() chỉ có thể được truy cập từ bên trong hàm calculateSum(), 
và không thể được gọi từ bên ngoài hàm này. Nếu chúng ta cố gắng gọi hàm add() từ bên ngoài,
một lỗi sẽ xảy ra.
*/
//Task 1: Viết hàm tính tổng, hiệu, tích, thương của hai số.

//Task 2: Viết hàm tính chu vi và diện tích các hình  (chữ nhật, tròn, vuông, tam giác )

//Task 3: Viết hàm tính tổng các số từ 1 đến n.


/*Kết hợp function với onclick:
Trong JavaScript, bạn có thể kết hợp hàm với câu lệnh onclick để thực hiện một hành
động khi người dùng nhấp chuột vào một phần tử trên trang web.
Ví dụ, để tạo một nút khi nhấp vào sẽ hiển thị một thông báo, bạn có thể sử dụng mã sau:*/
function showMessage() {
	alert("Hello, world!");
}
/*Trong đó:
	showMessage() là tên của hàm.
	alert("Hello, world!") là câu lệnh hiển thị thông báo.
Để gọi hàm khi người dùng nhấp vào một phần tử, bạn có thể sử dụng cú pháp sau:*/
//<button onclick="functionName()">Click me</button> bên trong thẻ body của html
/*Trong đó:
	functionName() là tên của hàm.
	Click me là nội dung của phần tử.
Khi người dùng nhấp vào nút, hàm sẽ được gọi và câu lệnh trong hàm sẽ được thực thi.*/
//Bạn cũng có thể truyền tham số vào hàm khi sử dụng onclick. Ví dụ:
function showMessage1(from, text) {
	alert(from + ": " + text);
}
//<button onclick="showMessage1('Ann', 'Hello!')">Click me1</button>
/*Trong đó:
	showMessage1 là tên của hàm.
	Ann và Hello! là các tham số được truyền vào hàm.
	Khi người dùng nhấp vào nút, hàm sẽ được gọi và câu lệnh trong hàm sẽ được thực thi.*/

/*DOM và DOM Event:
DOM (Document Object Model) là một giao diện lập trình ứng dụng (API) cho phép truy cập và thay đổi các phần tử trên trang web.
Nó cung cấp một cấu trúc cây của các phần tử HTML, cho phép bạn thao tác với chúng thông qua JavaScript.
Dưới đây là một số tài liệu về DOM JavaScript:
Trang chủ của W3C về DOM: https://www.w3.org/DOM/
MDN Web Docs về DOM: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
Tài liệu về DOM của JavaScript.info: https://javascript.info/dom-nodes
Tutorial về DOM của W3Schools: https://www.w3schools.com/js/js_htmldom.asp
Bài học về DOM của Codecademy: https://www.codecademy.com/learn/learn-dom
Sách "JavaScript and jQuery: Interactive Front-End Web Development" của Jon Duckett, chương 5 và 6 tập trung vào DOM và sự kiện (events) trong JavaScript.
Các tài liệu trên sẽ giúp bạn hiểu về cách sử dụng DOM để truy cập, thao tác và thay đổi các phần tử trên trang web thông qua JavaScript. */

/*Cú pháp của DOM trong JavaScript được sử dụng để truy cập và thao tác với các phần tử HTML trên trang web.
Để truy cập một phần tử HTML trong DOM, chúng ta sử dụng phương thức getElementById như sau: */
document.getElementById("myElement");
/*Đây là cú pháp để truy cập phần tử HTML có id là "myElement".
Ngoài ra, chúng ta có thể sử dụng các phương thức khác để truy cập các phần tử khác trên trang web, 
ví dụ như getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll,... */
// Truy cập phần tử HTML có class là "myClass"
document.getElementsByClassName("myClass");
// Truy cập tất cả các phần tử HTML có thẻ <p>
document.getElementsByTagName("p");
// Truy cập phần tử HTML đầu tiên có class là "myClass"
document.querySelector(".myClass");
// Truy cập tất cả các phần tử HTML có class là "myClass"
document.querySelectorAll(".myClass");
/*Sau khi truy cập được một phần tử HTML, chúng ta có thể thực hiện các thao tác khác như thay đổi nội dung,
thay đổi thuộc tính, thêm/xóa phần tử,... */
// Thay đổi nội dung của phần tử HTML
document.getElementById("myElement").innerHTML = "Good bye";
// Thay đổi thuộc tính của phần tử HTML
document.getElementById("myElement").style.color = "red";
// Thêm một phần tử HTML mới
var newElement = document.createElement("div");
newElement.innerHTML = "This is a new element.";
document.body.appendChild(newElement);
// Xóa một phần tử HTML
// var elementToRemove = document.getElementById("myElement");
// elementToRemove.parentNode.removeChild(elementToRemove);

//Task 1: Viết chương trình đăng nhập:

//Task 2: Viết chương trình tính tổng 2 số:

//Task 3: Viết chương trình tính chu vi và diện tích hình chữ nhật:

//Task 4: Viết chương trình tính BMI
//BMI = cân nặng (kg) / (chiều cao (m) * chiều cao (m))

//Task 5: Viết chương trình tính tiền điện
//Tiền điện = số điện sử dụng (kWh) * giá tiền (đồng/kWh)




