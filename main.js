// lấy phần tủ Dom
let inputBox = document.getElementById("inputBox");
// lấy tất cả các nút
let buttons = document.querySelectorAll("button");
// lấy chuỗi để thực hiện
let string = "";
// tạo mảng từ nút để dễ dàng thao tác
let arr = Array.from(buttons);
// duyệt qua từng nút và thêm sự kiện click
arr.forEach((button) => {
  // sử dụng arrow function
  button.addEventListener("click", (e) => {
    // kiểm tra xem nút có được click
    if (e.target.innerHTML == "=") {
      // nếu có thì thực hiện phép tính và gán kết quả vào chuỗi
      string = eval(string).toString();
      // hiển thị kết quả lên ô nhập dữ liệu
      inputBox.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      inputBox.value = string;
    }

    // nếu nút được click là "DEL" thì xóa ký tự cuối cùng của chuỗi và hiển thị lên ô nhập dữ liệu
    else if (e.target.innerHTML == "Del") {
      string = string.substring(0, string.length - 1);
      inputBox.value = string;
    } else {
      // nếu không phải là nút "=" thì thêm ký tự của nút vào chuỗi và hiển thị lên ô nhập dữ liệu
      string += e.target.innerHTML;
      inputBox.value = string;
    }
  });
});
