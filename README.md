Ứng Dụng Thời Tiết Mini 🌤️
Một ứng dụng web front-end đơn giản cho phép người dùng xem thông tin thời tiết theo thời gian thực của bất kỳ thành phố nào trên thế giới.

Dự án này được xây dựng như một bài tập để làm chủ JavaScript hiện đại (ES6+), bao gồm:

Gọi API (Fetching data)

Xử lý bất đồng bộ (async/await)

Thao tác với DOM để hiển thị dữ liệu

Tính Năng Chính ✨
Tìm kiếm Thời tiết: Nhập tên thành phố và nhận ngay thông tin.

Dữ liệu Real-time: Sử dụng API của OpenWeatherMap để lấy dữ liệu thời tiết mới nhất.

Hiển thị Trực quan: Hiển thị nhiệt độ (độ C), mô tả (tiếng Việt), và icon thời tiết tương ứng.

Xử lý Lỗi: Thông báo "xịn" cho người dùng khi họ gõ sai tên thành phố, hoặc khi có lỗi API (ví dụ: 401, 404).

Giao Diện Mẫu
<img width="1900" height="908" alt="image" src="https://github.com/user-attachments/assets/922c145b-81b4-4eae-a6b8-d02fe77e9bb0" />



Công Nghệ Sử Dụng 🛠️
HTML5: Cấu trúc trang web.

CSS3: Tạo giao diện (bao gồm Flexbox).

JavaScript (ES6+):

document.querySelector() để thao tác DOM.

addEventListener() để xử lý sự kiện.

fetch() và async/await để "gọi" API bất đồng bộ.

try...catch để xử lý lỗi "pro".

JSON.parse() (thông qua response.json()) để xử lý dữ liệu trả về.

API: OpenWeatherMap API

Cách Chạy Dự Án Này 🚀
Đây là một dự án front-end thuần túy, bạn không cần cài đặt server.

Clone (Sao chép) repo này về máy.

Lấy API Key (Rất quan trọng):

Đăng ký tài khoản miễn phí tại OpenWeatherMap.

Vào tab "API keys" và copy "key" của bạn.

Cập nhật Key:

Mở file script.js.

Tìm dòng const API_KEY = "...";

Dán key của bạn vào bên trong dấu ngoặc kép.

Chạy: Mở file index.html bằng trình duyệt của bạn.

Bản Quyền 📄
Dự án này được cấp phép theo Giấy phép MIT.

Copyright (c) 2025 Đậu Việt Long
