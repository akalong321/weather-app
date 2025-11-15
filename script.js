// --- BƯỚC 1: "CHỌN" CÁC ĐỐI TƯỢNG ---
const nutTim = document.querySelector('#search-btn');
const oInput = document.querySelector('#city-input');
const ketQuaDiv = document.querySelector('#weather-result');
// --- BƯỚC 1.5: "CHÌA KHÓA" VÀ "MENU" ---
// Đây là "chìa khóa" (API Key) để vào "nhà bếp" OpenWeatherMap
// (Đây là key demo, bạn có thể đăng ký key miễn phí của riêng mình)
const API_KEY = "4d87e3b25c4834f403e7945b7a29b8bf";
// Đây là "địa chỉ nhà bếp" (URL)
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// --- BƯỚC 2: "LẮNG NGHE" SỰ KIỆN CLICK ---
nutTim.addEventListener('click', function() {
// 1. Lấy tên thành phố người dùng gõ
    const tenThanhPho = oInput.value.trim();
// 2. Chặn gõ rỗng
    if (tenThanhPho === ""){
        alert("Vui lòng nhập tên thành phố!");
        return;
    }
// 3. "Gọi món"!
    goiMonThoiTiet(tenThanhPho);
});


// --- BƯỚC 3: "CỖ MÁY" GỌI API (PHIÊN BẢN XỊN) ---
async function goiMonThoiTiet(city) {

  // 1. Tạo URL (như cũ)
  const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=vi`;

  try {
    // 2. Gửi yêu cầu (như cũ)
    const response = await fetch(url);

    // 3. [NÂNG CẤP "THÔNG MINH" Ở ĐÂY]
    //    Lấy "gói hàng" (data) ra, bất kể là OK hay LỖI
    //    Chúng ta cần "await" (chờ) nó bóc tách xong
    const data = await response.json();

    // 4. KIỂM TRA "GÓI HÀNG"
    if (response.ok === true) {
      // NẾU OK (status 200) -> Vẽ thời tiết
      veThoiTiet(data);
    } else {
      // NẾU KHÔNG OK (status 404, 429, 401...)
      // "Gói hàng" (data) lúc này là "object lỗi"
      // Ném (throw) một lỗi để nhảy xuống "catch"
      throw new Error(data.message || "Lỗi không xác định!");
    }

  } catch (error) {
    // "Bắt" lỗi (cả lỗi mạng và lỗi chúng ta "ném" ra)
    console.error("CHI TIẾT LỖI NÈ:", error);

    // Hiển thị thông báo lỗi "xịn" cho người dùng
    // "error.message" sẽ là "Too many requests" hoặc "city not found"
    alert(error.message);
  }
}

// --- BƯỚC 4: "CỖ MÁY VẼ" (Hàm này giữ nguyên như cũ) ---
function veThoiTiet(data) {

  // "data" là một Đối Tượng (Object) "siêu to"
  // Chúng ta "bóc tách" nó ra dựa theo tài liệu API
  const tenTP = data.name;
  const nhietDo = data.main.temp;
  const moTa = data.weather[0].description;
  const iconCode = data.weather[0].icon;

  // Lấy link icon từ OpenWeatherMap
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // "Vẽ" toàn bộ HTML vào "hộp kết quả"
  ketQuaDiv.innerHTML = `
    <h2 id="city-name">${tenTP}</h2>
    <img id="weather-icon" src="${iconUrl}" alt="${moTa}">
    <p id="temperature">${Math.round(nhietDo)}°C</p>
    <p id="description">${moTa}</p>
  `;
  // (Tôi thêm Math.round() để làm tròn nhiệt độ cho đẹp)
}

