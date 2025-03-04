let number = +prompt("Nhập một số nguyên dương bất kì:");
if (number >= 0) {
    let str = String(number);  
    let reverse = "";  
    for (let i = str.length - 1; i >= 0; i--) { 
        reverse += str[i]; 
    }
    if (number === Number(reverse)) {
        console.log(`Số ${number} là số đối xứng.`);
    } else {
        console.log(`Số ${number} không là số đối xứng.`);
    }
} else {
    console.log("Dữ liệu nhập vào không hợp lệ.");
}
