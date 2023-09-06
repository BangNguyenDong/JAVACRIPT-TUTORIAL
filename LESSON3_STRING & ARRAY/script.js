// XỮ LÝ CHUỔI TRONG JAVASCRIPT
/*Trong JavaScript, chuỗi (string) là một loại dữ liệu để lưu trữ và xử lý các ký tự. 
Chuỗi có thể được tạo ra bằng cách sử dụng cặp dấu ngoặc đơn hoặc kép để bao quanh các ký tự. Ví dụ:*/
var str1 = "Hello World!"; // sử dụng dấu ngoặc kép
var str2 = 'Welcome to JavaScript'; // sử dụng dấu ngoặc đơn
/*Trong JavaScript, chuỗi cũng có thể được xử lý như một mảng các ký tự, 
bằng cách sử dụng chỉ mục (index) của từng ký tự trong chuỗi. Ví dụ:*/
var str = "Hello World!";
console.log(str[0]); // "H"
console.log(str[6]); // "W"
//Các phương thức xử lý chuỗi trong JavaScript
//1. length: Trả về độ dài của chuỗi.
var str = "Hello World!";
console.log(str.length); // 12
//2. indexOf(): Trả về vị trí đầu tiên của một chuỗi con trong chuỗi.
var str = "Hello World!";
console.log(str.indexOf("World")); // 6
//3. lastIndexOf(): Trả về vị trí cuối cùng của một chuỗi con trong chuỗi.
var str = "Hello World!";
console.log(str.lastIndexOf("o")); // 7
//4. search(): Tìm kiếm một chuỗi con trong chuỗi và trả về vị trí của chuỗi con đó.
var str = "Hello World!";
console.log(str.search("World")); // 6
//5. slice(): Trích xuất một phần của chuỗi và trả về một chuỗi mới.
var str = "Hello World!";
console.log(str.slice(0, 5)); // "Hello"
console.log(str.slice(6)); // "World!"
//6. substring(): Trích xuất một phần của chuỗi và trả về một chuỗi mới.
var str = "Hello World!";
console.log(str.substring(0, 5)); // "Hello"
console.log(str.substring(6)); // "World!"
//7. substr(): Trích xuất một phần của chuỗi và trả về một chuỗi mới.
var str = "Hello World!";
console.log(str.substr(0, 5)); // "Hello"
console.log(str.substr(6)); // "World!"
//8. replace(): Thay thế một chuỗi con trong chuỗi bằng một chuỗi khác.
var str = "Hello World!";
console.log(str.replace("World", "JavaScript")); // "Hello JavaScript!"
//9. toUpperCase(): Chuyển đổi chuỗi sang chữ hoa.
var str = "Hello World!";
console.log(str.toUpperCase()); // "HELLO WORLD!"
//10. toLowerCase(): Chuyển đổi chuỗi sang chữ thường.
var str = "Hello World!";
console.log(str.toLowerCase()); // "hello world!"
//11. concat(): Nối chuỗi.
var str1 = "Hello";
var str2 = "World!";
console.log(str1.concat(" ", str2)); // "Hello World!"
//12. trim(): Xóa khoảng trắng ở đầu và cuối chuỗi.
var str = "   Hello World!   ";
console.log(str.trim()); // "Hello World!"
//13. charAt(): Trả về ký tự tại một vị trí xác định trong chuỗi.
var str = "Hello World!";
console.log(str.charAt(0)); // "H"
console.log(str.charAt(6)); // "W"
//14. charCodeAt(): Trả về mã Unicode của ký tự tại một vị trí xác định trong chuỗi.
var str = "Hello World!";
console.log(str.charCodeAt(0)); // 72
console.log(str.charCodeAt(6)); // 87
//15. split(): Chuyển đổi chuỗi thành một mảng các chuỗi con.
var str = "Hello World!";
console.log(str.split(" ")); // ["Hello", "World!"]
//16. includes(): Kiểm tra xem chuỗi có chứa chuỗi con hay không.
var str = "Hello World!";
console.log(str.includes("World")); // true
console.log(str.includes("world")); // false
//17. startsWith(): Kiểm tra xem chuỗi có bắt đầu bằng chuỗi con hay không.
var str = "Hello World!";
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("world")); // false
//18. endsWith(): Kiểm tra xem chuỗi có kết thúc bằng chuỗi con hay không.
var str = "Hello World!";
console.log(str.endsWith("World!")); // true
console.log(str.endsWith("world!")); // false
//19. repeat(): Lặp lại chuỗi.
var str = "Hello World!";
console.log(str.repeat(2)); // "Hello World!Hello World!"
//20. match(): Tìm kiếm một chuỗi con trong chuỗi và trả về một mảng các chuỗi con.
var str = "Hello World!";
console.log(str.match("World")); // ["World"]
//21. matchAll(): Tìm kiếm tất cả các chuỗi con trong chuỗi và trả về một mảng các chuỗi con.
var str = "Hello World!";
console.log(str.matchAll("o")); // ["o", "o"]
//22. padStart(): Thêm các ký tự vào đầu chuỗi.
var str = "Hello World!";
console.log(str.padStart(15, ".")); // ".....Hello World!"
//23. padEnd(): Thêm các ký tự vào cuối chuỗi.
var str = "Hello World!";
console.log(str.padEnd(15, ".")); // "Hello World!....."
//Task1.  Đảo ngược chuỗi sau: "Hello World!".


//Task2. Đếm số lượng ký tự "l" trong chuỗi sau: "Hello World!".


//Mảng trong JavaScript
/*Mảng là một tập hợp các giá trị có cùng kiểu dữ liệu.
Mảng trong JavaScript có thể chứa nhiều kiểu dữ liệu khác nhau,
ví dụ: số nguyên, số thực, chuỗi, đối tượng, hàm, mảng, ...*/
//Vd:
var arr = [1, 2, 3, 4, 5];
var arr = ["JavaScript", "PHP", "Java", "Python"];
var arr = [1, "JavaScript", true, null, undefined];
//Cách khai báo mảng trong JavaScript
//Cách 1: Sử dụng từ khóa new
var arr = new Array();
//Cách 2: Sử dụng dấu ngoặc vuông
var arr = [];
//Cách 3: Sử dụng phương thức Array()
var arr = Array();
//Cách 4: Sử dụng phương thức Array.of()
var arr = Array.of();
//Cách 5: Sử dụng phương thức Array.from()
var arr = Array.from();
/*Các phương thức xử lý mảng trong JavaScript*/
//1. length: Trả về số lượng phần tử trong mảng.
var arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
//2. push(): Thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng.
var arr = [1, 2, 3, 4, 5];
console.log(arr.push(6)); // 6
console.log(arr); // [1, 2, 3, 4, 5, 6]
//3. pop(): Xóa phần tử cuối mảng và trả về phần tử đã xóa.
var arr = [1, 2, 3, 4, 5];
console.log(arr.pop()); // 5
console.log(arr); // [1, 2, 3, 4]
//4. shift(): Xóa phần tử đầu mảng và trả về phần tử đã xóa.
var arr = [1, 2, 3, 4, 5];
console.log(arr.shift()); // 1
console.log(arr); // [2, 3, 4, 5]
//5. unshift(): Thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng.
var arr = [1, 2, 3, 4, 5];
console.log(arr.unshift(0)); // 6
console.log(arr); // [0, 1, 2, 3, 4, 5]
//6. indexOf(): Tìm kiếm một phần tử trong mảng và trả về chỉ số của phần tử đó.
var arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3)); // 2
console.log(arr.indexOf(6)); // -1
//7. lastIndexOf(): Tìm kiếm một phần tử trong mảng và trả về chỉ số của phần tử đó.
var arr = [1, 2, 3, 4, 5, 3];
console.log(arr.lastIndexOf(3)); // 5
console.log(arr.lastIndexOf(6)); // -1
//8. includes(): Kiểm tra xem một phần tử có tồn tại trong mảng hay không.
var arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // true
console.log(arr.includes(6)); // false
//9. slice(): Cắt một mảng con từ mảng ban đầu.
var arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 3)); // [2, 3]
console.log(arr.slice(1)); // [2, 3, 4, 5]
console.log(arr.slice()); // [1, 2, 3, 4, 5]
//10. splice(): Thêm hoặc xóa một phần tử trong mảng.
var arr = [1, 2, 3, 4, 5];
console.log(arr.splice(1, 2)); // [2, 3]
console.log(arr); // [1, 4, 5]
console.log(arr.splice(1, 0, 2, 3)); // []
console.log(arr); // [1, 2, 3, 4, 5]
//11. concat(): Nối một hoặc nhiều mảng với nhau.
var arr1 = [1, 2, 3];
var arr2 = [4, 5];
console.log(arr1.concat(arr2)); // [1, 2, 3, 4, 5]
//12. join(): Chuyển đổi một mảng thành một chuỗi.
var arr = [1, 2, 3, 4, 5];
console.log(arr.join()); // "1,2,3,4,5"
console.log(arr.join("")); // "12345"
console.log(arr.join("-")); // "1-2-3-4-5"
//13. reverse(): Đảo ngược một mảng.
var arr = [1, 2, 3, 4, 5];
console.log(arr.reverse()); // [5, 4, 3, 2, 1]
//14. sort(): Sắp xếp các phần tử trong mảng.
var arr = [1, 2, 3, 4, 5];
console.log(arr.sort()); // [1, 2, 3, 4, 5]

//Task4. Tính tổng các phần tử trong mảng

//Task5. Tìm phần tử lớn nhất và nhỏ nhất trong mảng

//Task6. Tìm các số chẵn và lẻ trong mảng

//Task7. Tính tổng các số lẻ và số chẳn trong mảng
	
//Task8. Tìm số lần xuất hiện của một phần tử trong mảng

//Task9. Tìm số lần xuất hiện của tất cả các phần tử trong mảng

//Task10. Viết một hàm JavaScript nhận một mảng các số nguyên và trả về số lớn thứ hai trong mảng.

