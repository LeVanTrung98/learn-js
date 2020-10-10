// tham trị là những kiểu dữ liệu primitive(nguyên thuỷ) biến nào giữ giá trị biến đó\

// tham chiếu là kiểu dữ liệu Object, nó sẽ lưu địa chỉ vùng nhớ của giá trị.
    // car 1 =  địa chỉ vùng nhớ của array. sau đó car2 sao chép địa chỉ của vùng ở ở car1. car1 và car2 đều refer đến 1 vùng nhớ. Nếu car1, car2 mà thay đổi property trong cái arr dưới thì, car1, car2 cũng thay đổi theo. Nếu car2 = 1 địa chỉ vùng nhớ khác. khi đó car1 or car2 nếu có thay đổi property thì chỉ thay đổi chính nó, ko ảnh hưởng đến biến còn lại
    // th1 : 2 biến cùng refer đến 1 vùng nhớ và thay đổi property
    let car1 = ["bmw", "mercedes"];
    let car2 = car1;
    car2[0] = "abc";
    console.log(car1, car2);
    //th2: 2 biến 2 vùng nhớ khác nhau và thay đổi property
    let car1 = ["bmw", "mercedes"];
    let car2 = car1;
    car2 = ["toyota", "vinfast"];
    car2[0] = "abc";
    console.log(car1, car2);


    // Shallow copy object
    let person1 = { name: "Du Thanh Duoc", skill: { coding: "Javascript" } };
    let person2 = { ...person1 };
    console.log(person1 === person2 ); // false vì person2 đã refer đến 1 vùng nhớ mới.
    console.log(person1.skill === person2.skill ); // true: person1.skill và person2.skill cùng trỏ đến 1 vùng nhớ.
    person2.skill = { coding: "HTML", abc :'123' }; //person2.skill : ko dùng chung vùng nhớ skill.coding với person1 nữa.
    console.log(person1.skill == person2.skill); // 2 địa chỉ vùng nhớ khác nhau
    console.log(person1.skill); // { coding: "Javascript" } : person 2 đã refer đến 1 vùng nhớ khác
    console.log(person2.skill); // { coding: "HTML" } : person 1 đã refer đến 1 vùng nhớ khác
    console.log(person2, person1); // { coding: "HTML" } : person 1 đã refer đến 1 vùng nhớ khác
    person2.skill.coding = "php" ; // nếu ko dùng person2.skill = { coding: "HTML" }; để tạo vùng nhớ mới cho person2 thì persion1.skill.coding cũng sẽ thay đổi theo persion 2. Vì 2 person.skill dùng chung vùng nhớ coding. ngược lại, nếu ta dùng person2.skill = { coding: "HTML" }; để tạo vùng nhớ mới cho person2 thì persion1.skill.coding sẽ không thay đổi theo persion 2. Vì 2 person.skill.coding  không dùng chung vùng nhớ coding nữa.
    console.log(person1, person2);