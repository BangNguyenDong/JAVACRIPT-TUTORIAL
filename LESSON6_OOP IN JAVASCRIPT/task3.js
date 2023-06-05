/***Đề bài: Quản lý thông tin sách và kiểm tra sách mới và sách cổ điển**

1. Tạo một chương trình để quản lý thông tin sách và kiểm tra xem sách có phải là sách mới hay sách cổ điển dựa trên năm xuất bản.

2. Khai báo lớp `Book` với các thuộc tính sau:
   - `title`: Tiêu đề của sách.
   - `author`: Tác giả của sách.
   - `publicationYear`: Năm xuất bản của sách.
   - `genre`: Thể loại của sách.

3. Lớp `Book` có các phương thức sau:
   - `showInfo()`: Hiển thị thông tin về sách bao gồm tiêu đề, tác giả, năm xuất bản và thể loại.
   - `checkNewBook()`: Kiểm tra xem sách có phải là sách mới không. Nếu sách được xuất bản trong vòng 2 năm gần đây, in ra thông báo là "Sách [tiêu đề sách] là sách mới." Ngược lại, in ra thông báo là "Sách [tiêu đề sách] không phải là sách mới."
   - `checkClassic()`: Kiểm tra xem sách có phải là sách cổ điển không. Nếu năm xuất bản của sách trước năm 1900, in ra thông báo là "Sách [tiêu đề sách] là một sách cổ điển." Ngược lại, in ra thông báo là "Sách [tiêu đề sách] không phải là sách cổ điển."

4. Tạo một danh sách `books` chứa các đối tượng sách đã khởi tạo sẵn:
   - Sách 1: Tiêu đề "To Kill a Mockingbird", Tác giả "Harper Lee", Năm xuất bản 1960, Thể loại "Fiction"
   - Sách 2: Tiêu đề "1984", Tác giả "George Orwell", Năm xuất bản 1949, Thể loại "Dystopian"
   - Sách 3: Tiêu đề "The Great Gatsby", Tác giả "F. Scott Fitzgerald", Năm xuất bản 1925, Thể loại "Classic"
   - Sách 4: Tiêu đề "Pride and Prejudice", Tác giả "Jane Austen", Năm xuất bản 1813, Thể loại "Romance"

5. Hiển thị thông tin của từng sách trong danh sách:
   - Gọi phương thức `showInfo()` để hiển thị thông tin sách.
   - Gọi phương thức `checkNewBook()` để kiểm tra xem sách có phải là sách mới hay không.
   - Gọi phương thức `checkClassic()` để kiểm tra xem sách có phải là sách cổ điển hay không.

6. Yêu cầu kỹ thuật:
   - Sử dụng JavaScript để tạo lớp `Book` và các đối tượng sách.
   - Sử dụng mảng `books` để lưu trữ danh sách sách.
   - Sử dụng vòng lặp để duyệt qua danh sách sách và gọi các phương thức tương ứng.
   - In ra thông tin và kết quả kiểm tra của từng sách trên console hoặc trình duyệt web.

**Chú ý**: Bạn có thể tùy chỉnh giao diện hiển thị thông tin sách và kết quả kiểm tra theo ý muốn.
**Gợi ý:** Bạn có thể sử dụng các phương thức `getFullYear()` và `setFullYear()` của đối tượng `Date` để lấy và thiết lập năm hiện tại.
**Vd: const currentYear = new Date().getFullYear();
*/
