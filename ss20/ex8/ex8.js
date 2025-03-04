let soLuongNguyenTo = +prompt("Nhập số lượng số nguyên tố:");
let chuoiKetQua = "";
let soThuHienTai = 2;
let dem = 0;

function laSoNguyenTo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

if (soLuongNguyenTo > 0) {
  while (dem < soLuongNguyenTo) {
    if (laSoNguyenTo(soThuHienTai)) {
      chuoiKetQua += soThuHienTai + " ";
      dem++;
    }
    soThuHienTai++;
  }
  alert(chuoiKetQua.trim());
} else {
  alert("Số lượng không hợp lệ!");
}
