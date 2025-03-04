let number = +prompt("Nhập một số nguyên dương bất kì:");
if (number > 0) {
    console.log(`Các số chia hết cho 5 từ 1 đến ${number} là:`);
    for (let i = 5; i <= number; i += 5) {
        console.log(i);
    }


} else {
    console.log("Dữ liệu nhập vào không hợp lệ.");
}