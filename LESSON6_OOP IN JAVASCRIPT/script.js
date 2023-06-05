// OOP in javascript
// 1. Constructor function
// 2. Prototype
// 3. Object.create()
/*Example 1: Sử dụng cú pháp ES6 (Class):
class ClassName {
  constructor() {
    Khởi tạo đối tượng
  }

  method1() {
    Phương thức
  }

  method2() {
    Phương thức
  }
}
*/
// Định nghĩa một lớp 'Car'
class Car {
	constructor(brand, model, color) {
	  this.brand = brand;
	  this.model = model;
	  this.color = color;
	}
   
	startEngine() {
	  console.log(`The ${this.brand} ${this.model}'s engine is started.`);
	}
   
	stopEngine() {
	  console.log(`The ${this.brand} ${this.model}'s engine is stopped.`);
	}
   
	setColor(newColor) {
	  this.color = newColor;
	  console.log(`The color of the ${this.brand} ${this.model} is now ${this.color}.`);
	}
   }
   
   // Tạo một đối tượng từ lớp 'Car'
const Cars=[
	new Car("BMW", "X7", "Black"),
	new Car("Audi", "A8", "White"),
	new Car("Mercedes-Benz", "S-Class", "Silver")
	];
// Hiển thị thông tin của từng xe trong danh sách
for (let car of Cars) {
	console.log(`Car: ${car.brand} ${car.model}`);
	car.startEngine();
	car.stopEngine();
	car.setColor("Red");
	}
	
   

// Bài tập: Quản lý danh sách sinh viên

// Khai báo lớp 'Student'
class Student {
	constructor(name, age, major) {
	  this.name = name;
	  this.age = age;
	  this.major = major;
	}
   
	introduce()  // Phương thức 'introduce' để giới thiệu thông tin sinh viên
	{
	  console.log(`My name is ${this.name}, I am ${this.age} years old, and I am majoring in ${this.major}.`);
	}
   
	changeMajor(newMajor) // Phương thức 'changeMajor' để thay đổi ngành học
	{
	  this.major = newMajor;// Lấy giá trị của tham số 'newMajor' gán cho thuộc tính 'major'
	  console.log(`I have changed my major to ${this.major}.`);// Hiển thị thông báo
	}
   }
   
   // Tạo một danh sách sinh viên
   const students = [
	new Student("John", 20, "Computer Science"),
	new Student("Alice", 19, "Mathematics"),
	new Student("Bob", 21, "Physics")
   ];
   
   // Hiển thị thông tin của từng sinh viên trong danh sách
   students.forEach((student, index) => // Duyệt qua từng phần tử trong mảng 'students'
   {
	console.log(`Student ${index + 1}:`);// Hiển thị thông tin sinh viên thứ 'index + 1'
	student.introduce();// Gọi phương thức 'introduce' của đối tượng 'student'
   });
   
   // Thay đổi ngành học của sinh viên thứ 2
   const secondStudent = students[1];// Lấy ra sinh viên thứ 2 trong mảng 'students'
   secondStudent.changeMajor("Chemistry");// Gọi phương thức 'changeMajor' của đối tượng 'secondStudent'
   console.log("Updated major:");// Hiển thị thông báo
   secondStudent.introduce();// Gọi phương thức 'introduce' của đối tượng 'secondStudent'
   

//Example 3
// Khai báo lớp 'Student'
class Student1 {
	constructor(name, age, major) {
	  this.name = name;
	  this.age = age;
	  this.major = major;
	}
   }
   
   // Lắng nghe sự kiện khi biểu mẫu được gửi đi
   const form = document.getElementById("studentForm");
   form.addEventListener("submit", function(event) {
	event.preventDefault(); // Ngăn chặn việc gửi lại biểu mẫu
   
	// Lấy giá trị từ các trường nhập liệu
	const name = document.getElementById("nameInput").value;
	const age = document.getElementById("ageInput").value;
	const major = document.getElementById("majorInput").value;
   
	// Tạo đối tượng sinh viên từ giá trị nhập vào
	const student = new Student1(name, age, major);
   
	// In thông tin sinh viên
	document.write(`Name: ${student.name}<br>`);
	document.write(`Age: ${student.age}<br>`);
	document.write(`Major: ${student.major}<br>`);

	
	// Xóa nội dung trong biểu mẫu
	form.reset();
   });
   
