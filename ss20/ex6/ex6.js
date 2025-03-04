let so = +prompt("Nhập số: ");
let kiemTra = true;

if (so <= 1) {
  alert("Không phải số nguyên tố");
} else if ((so = 2)) {
  alert("Là số nguyên tố");
} else if (so % 2 === 0) {
  alert("Không phải số nguyên tố");
} else {
  for (let uocSo = 3; uocSo < so - 1; uocSo = uocSo + 2) {
    if (so % uocSo === 0) {
      alert("Không phải số nguyên tố");
      kiemTra = false;
      break;
    }
  }
  if (kiemTra === true) {
    alert(so + " là số nguyên tố");
  }
}
