# 🛒 Website Bán Hàng Trực Tuyến

Dự án xây dựng hệ thống website thương mại điện tử sử dụng **Angular (Front-end)** và **Spring Boot (Back-end)** với các chức năng như: duyệt và tìm kiếm sản phẩm, quản lý giỏ hàng, thanh toán, quản trị đơn hàng... Dự án được phát triển bởi sinh viên trường Đại học Bách khoa Hà Nội.

---

## 📌 Mô Tả Dự Án

- Giao diện mượt mà dựa trên kiến trúc **Single Page Application (SPA)** sử dụng **Angular + Angular Material**
- Phía backend sử dụng **Spring Boot** để xây dựng hệ thống RESTful API, bảo mật bằng JWT và quản lý dữ liệu với **MySQL**
- Triển khai hệ thống theo mô hình **Client-Server tách biệt**, dễ bảo trì và mở rộng

---

## 🎥 Trợ Giúp Trực Quan

| Trang chủ | Đăng nhập | Chi tiết sản phẩm | Đặt hàng |
|----------|-----------|-------------------|----------|
| ![Home](screenshots/home.png) | ![Login](screenshots/login.png) | ![Detail](screenshots/detail.png) | ![Order](screenshots/order.png) |

> (Hình ảnh thực tế từ project — thêm thư mục `screenshots/` nếu cần minh hoạ trên GitHub)

---

## ⚙️ Hướng Dẫn Cài Đặt

### Yêu cầu:
- Node.js >= 16
- Angular CLI >= 15
- JDK 17+
- Maven hoặc Gradle
- MySQL
- XAMPP (tuỳ chọn)

### 1. Cài đặt Backend (Spring Boot)

```bash
# Clone repo
git clone https://github.com/your-org/backend-shop.git
cd backend-shop

# Cấu hình database (application.properties)
spring.datasource.url=jdbc:mysql://localhost:3306/shopdb
spring.datasource.username=root
spring.datasource.password=

# Chạy server
./mvnw spring-boot:run
