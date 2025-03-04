let soLuongNguyenTo = +prompt("Nhập n số nguyên tố:");
let chuoiKetQua = "";
let soThuHienTai = 2;
let soNguyenTo = "0";

if (soLuongNguyenTo > 0) {
  for (let dem = 0; dem < soLuongNguyenTo; dem++) {
    for (soThuHienTai; ; soThuHienTai++) {
      let demUocSo = 0;
      for (let uocSo = 2; uocSo < soThuHienTai; uocSo++) {
        if (soThuHienTai % uocSo == 0) {
          demUocSo++;
        }
      }
      if (demUocSo == 0) {
        soNguyenTo = soThuHienTai;
        break;
      }
    }
    soThuHienTai = soNguyenTo + 1;
    chuoiKetQua = chuoiKetQua + " " + soNguyenTo;
  }
  alert(chuoiKetQua);
} else {
  alert("n không hợp lệ");
}
