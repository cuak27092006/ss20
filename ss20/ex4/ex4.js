let number = prompt("Nhập vào ký tự bất kì:");
let search = prompt("Nhập ký tự cần tìm kiếm:");
for (let i = 0; i < number.length; i++) {
    if (number[i] === search ) {
        check = true;
        break;
    }
}
if (check) {
    console.log(`Ký tự "${search}" tồn tại trong chuỗi.`);
} else {
    console.log(`Ký tự "${search}" không tồn tại trong chuỗi.`);
}
