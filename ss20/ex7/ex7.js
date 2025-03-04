let soLuong = +prompt("Nhập số:");
let chuoiFibonacci = 1 + " " + 1;
let soTruoc = 1;
let soHienTai = 1;
let tong = 0;

for (let dem = 2; dem < soLuong; dem = dem + 1) {
  tong = soTruoc + soHienTai;
  chuoiFibonacci = chuoiFibonacci + " " + tong;
  soTruoc = soHienTai;
  soHienTai = tong;
}

alert(chuoiFibonacci);
