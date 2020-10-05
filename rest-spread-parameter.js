// rest parameter: đưa các parameter remaining into a array. when use rest parameter is at the end of function.
function sum(a, b, ...rest){
    console.log(rest);
}
// sum(1,2, 4,2,4);

// spread syntax : is unpacking collected element such as array into single elements. dùng trong lúc gọi 1 funcion
let value = [1,2,3,4,5];
sum(...value);


// arguments:  lấy tất cả nhưng arguments có trong function.
//  Nhược điểm : - không hỗ trợ array method.
//               - chúng ko thể kiểm soát được phần tử riêng
//               - arrow function không có arguments
// nên dùng rest parameter thay thế.