let a = +prompt("Nhập số a:");
let b = +prompt("Nhập số b:");
if (b>=0) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a; 
    }
    console.log(`${a}^${b} = ${result}`);
} else {
    console.log("Dữ liệu nhập vào không hợp lệ. Vui lòng nhập lại.");
}
