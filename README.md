# 🛒 Website Bán Hàng Trực Tuyến ( Hiện đã hoàn thành các chức năng cơ bản)

Đề tài “Xây dựng website bán hàng với Angular (Front-end) và Spring Boot (Back-end)” tập trung vào việc phát triển một ứng dụng thương mại điện tử cơ bản với các chức năng chính như đăng ký/đăng nhập, duyệt và tìm kiếm sản phẩm, quản lý giỏ hàng, đặt đơn và theo dõi trạng thái đơn hàng. 
---

## 📌 Mô Tả Dự Án

- Phần giao diện người dùng (Front-end) được xây dựng trên Angular, Giao diện mượt mà dựa trên kiến trúc **Single Page Application (SPA)** sử dụng TypeScript cùng RxJS và thư viện Angular Material giúp xử lý form, điều hướng và hiển thị danh sách sản phẩm hiệu quả.
- Phía máy chủ (Back-end) sử dụng Spring Boot, cung cấp REST API cho client, bảo mật bằng JWT và Spring Security, đồng thời quản lý dữ liệu qua Spring Data JPA kết nối với MySQL. kiểm thử API bằng Postman
- Triển khai hệ thống theo mô hình **Client-Server tách biệt**, dễ bảo trì và mở rộng

---

## 🛠️ Công nghệ sử dụng

| Thành phần | Công nghệ |
|------------|-----------|
| Frontend   | Angular, Angular CLI, Angular Material |
| Backend    | Spring Boot, Spring MVC, Spring Security, JPA |
| Cơ sở dữ liệu | MySQL (qua XAMPP) |
| Công cụ    | IntelliJ IDEA, VS Code, Postman, Git |
| DevOps     | GitHub/GitLab CI, Docker (tùy chọn) |

---


## ⚙️ Hướng Dẫn Cài Đặt

### Yêu cầu:
- Node.js >= 16
- Angular CLI >= 15
- JDK 17+
- Maven hoặc Gradle
- MySQL
- XAMPP (tuỳ chọn)

### 1. Cài đặt 
*Front-end
- Cài đặt node.js 
https://nodejs.org/en/download Vào link sau và tải xuống

- Mở cmd 
+ Cài yarn : Gõ lệnh npn install -g yarn
+ Cài Angular : Gõ lệnh npm install -g @angular/cli

Video hướng dẫn chi tiết: https://youtu.be/WOgW4emGz2U?si=So0Qc_j33T3gES_u
https://youtu.be/WOgW4emGz2U?si=So0Qc_j33T3gES_u

Link tải bootstrap :https://getbootstrap.com/

*Back-end
1. Cài đặt XAMPP
Link tải:
https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.12/xampp-windows-x64-8.2.12-0-VS16-installer.exe/download
Vào Xampp bấm Start 2 Module (Apache và MySQL) 
Bấm vào Admin của MySQL tại đây lưu trữ dữ liệu sản phẩm, đơn hàng, người dùng cho website bán hàng
<img width="844" height="537" alt="image" src="https://github.com/user-attachments/assets/e3bfdb74-7ce8-4daf-8480-619efadfc7de" />


2. Cài đặt IntelliJ IDEA
   <img width="1412" height="761" alt="image" src="https://github.com/user-attachments/assets/5f4349f0-067a-4d18-ac57-148a49a1909e" />

Link tải: https://www.jetbrains.com/idea/


4. Tạo project Spring Boot
- Spring initializr
Truy cập: https://start.spring.io/
<img width="1868" height="854" alt="image" src="https://github.com/user-attachments/assets/c0060bee-ff77-4af2-aa8e-2bc84eac845e" />


5. Cài đặt Postman để test API

Gửi các request (GET, POST, PUT, DELETE) đến backend để kiểm tra dữ liệu và chức năng

Kiểm tra phản hồi từ server (status code, nội dung lỗi, thông báo) để dễ dàng sửa lỗi

Link tải: https://www.postman.com/

<img width="1244" height="1028" alt="image" src="https://github.com/user-attachments/assets/ab571e29-203d-47b2-8784-c53e767bac55" />


## Cách chạy chương trình 
B1: Mở cmd chạy đến đường dẫn có chứa file "shopapp-angular"
<img width="703" height="182" alt="image" src="https://github.com/user-attachments/assets/714bfcd4-82aa-4cad-94a4-87f54a63e1f7" />
B2: Nhập "yarn start" để chạy chương trình
<img width="806" height="397" alt="image" src="https://github.com/user-attachments/assets/08dd148e-4184-40f8-9f22-da5fdd5ca350" />
B3: Mở các giao diện 
Tại 2 file app.module.ts và index.html 
Khi mở giao diện nào thì bỏ comment dòng đó (ví dụ như mở giao diện trang home như trong hình)
<img width="653" height="354" alt="image" src="https://github.com/user-attachments/assets/eeeff3d6-65a6-4f00-914b-ef84b26f04e0" />
<img width="610" height="289" alt="image" src="https://github.com/user-attachments/assets/0f8a0dc6-b252-43f4-8f83-cb8993fc09cc" />

***Giao diện trang 
1.Trang chủ

<img width="1405" height="884" alt="image" src="https://github.com/user-attachments/assets/b49cb5f2-9a61-4c4c-b0d2-a883ce6a58c9" />

2.Đăng nhập

<img width="601" height="254" alt="image" src="https://github.com/user-attachments/assets/5589e666-d2f4-41f5-8042-b8a612614110" />

3.Chi tiết sản phẩm

<img width="599" height="278" alt="image" src="https://github.com/user-attachments/assets/2ba13704-ff0b-420f-9262-67605e1e3ef2" />

4.Trang Order

<img width="615" height="282" alt="image" src="https://github.com/user-attachments/assets/fb9972eb-8760-4d82-a7bd-afdc2d6ad8cb" />

5.Trang order-confirm

<img width="605" height="279" alt="image" src="https://github.com/user-attachments/assets/f3be86be-6998-4411-94d7-fda58bb5b0cf" />

6.Trang đăng ký

<img width="602" height="272" alt="image" src="https://github.com/user-attachments/assets/369d0059-83bf-4174-bb61-670b85ddafaa" />


***  Thiết lập & Quản lý Cơ sở dữ liệu (MySQL qua XAMPP)

<img width="775" height="336" alt="image" src="https://github.com/user-attachments/assets/25849178-b46a-4052-8695-18ce520f869c" />

















