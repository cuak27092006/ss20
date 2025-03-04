let number = +prompt("Nhập một số nguyên dương bất kì:");
if ( number > 0) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
 console.log(`Tổng các số từ 1 đến${number}là :${sum}`)
  
} else {
console.log("Dữ liệu nhập vào không hợp lệ.");
}
