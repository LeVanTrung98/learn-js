// there are 7 primitive types :  string, number, bigint, boolean, null, underfined, symboy
    
    //number
        // number.toString();  returns a string representation of num in the numeral system with the given base.
        let number1 = 123.5;
        console.log(typeof number1.toString());
        // math.{...} dùng để làm tròn số
        console.log(Math.floor(number1));
        // toFixed(2) chỉ lấy 2 số. typeof is string
        console.log((0.112 + 0.2).toFixed(2));
        // isNaN converts its argument to a number and then test it for being NaN.
        console.log(isNaN(123)); // 
        console.log(isNaN("sss")); // 
        console.log(isNaN("1123")); // 
        // isFinite converts its argument to a number and return true if it's a regular number
        console.log(isFinite("1123")); // true
        console.log(isFinite("ssss")); // false

    // array methods
        let arr = [1,2,4,5];
        // push
        arr.push(6,7,8,9);
        // pop - extracts
        arr.pop();
        // shift 
        arr.shift();
        // unshift
        arr.unshift(1,1,1);
        
        // delete -- the element was removed, but the array no changes length;
        delete arr[2];
        // slice : it can do everything: insert, remove and place element
        let arrSplice = [1,2,3,4,5,5];
            // remove
            arrSplice.splice(5);
            // add items
            arrSplice.splice(-1, 1,'alo', 'ola');
            //replace items
            arrSplice.splice(1, 2,'alo1', 'ola2');
        console.log(arrSplice);

        // slice : it return new array copping to it
        let arrSlice = [1,2,3,4,5];
        let  t = arrSlice.slice(1,3);
        console.log(t);

        //forEach  : lặp qua từng phần tử trong mảng, không ảnh hưởng đến mảng cũ
        let arrFor = [1,2,3,4,5];
        arrFor.forEach(function(item, index, array){
            console.log(item);
        });
        // map() : tạo 1 mảng mới bằng cách thực hiện tính toán trên mỗi phần tử. map() không thay đổi mảng củ
        let arrM = [1,2,3,4,5];
        let m = arrM.map(item => item * 2);
        console.log(m);
        // filter() : tạo 1 mảng mới với phần tử thõa điều kiện
        let arrF = [1,2,3,4,5];
        let fi = arrF.filter(item => item * 2);
        // find() : trả về phần tử đầu tiên thõa điều kiện. Nếu không có sẽ return về undifined
        let arrFind = [1,2,3,4,5,5,2];
        let fin = arrFind.find(item => item == 12);
        console.log(fin);
        // findIndex() : trả về index đầu tiên thõa điều kiện. Nếu không có sẽ return về -1
        let arrFindIndex = [1,2,3,4,5,5,2];
        let findI = arrFindIndex.findIndex(item => item == 2);
        console.log(findI);
        // some() : nếu có 1 phần tử thõa đk sẽ return true, nếu ko thõa đk return false
        let arrS = [1,2,4,5,3];
        let s = arrS.some(item => item > 4 );
        console.log(s);
        // every() :  mọi phần tử thõa đk thì true, ngược lại false.
        let arrE  = [1,2,4,2,3,5];
        let e = arrE.every(item => item < 8);
        console.log(e);
        // reducer : 
        let arrR = [1,2,3,4,5,6,7,8];
        let r = arrR.reduce((sum, item) => sum + item);
        // searching in array
            // indexOf(item, from)
            let valIndexOf = [1,2,4,2,1,3,2,5];
            console.log(valIndexOf.indexOf(2, 2));
            console.log(valIndexOf.indexOf(2));
            // lastIndexOf(item, from)
            console.log(valIndexOf.lastIndexOf(2));
            // includes(item, from) // return true - false (kiểm tra phần tử có ở trong mảng không)
            console.log(valIndexOf.includes(41));
            // find(item, index, arr) return item if true, otherwise underfined
            let valFind = valIndexOf.find((item, index, arr) => item == 2);
            
        // object
        var expObject = {1: '123', "string" : 234, 2 :2};
        // console.log(Object.keys(expObject));
        for(let item in expObject){
          console.log(item)
        }
        // map
        var expMap = new Map();
        expMap.set(1,'123');
        expMap.set('string',234)
        expMap.set({'hello' : 'hole'}, 'triung')
        for(let [item, val] of expMap){
            console.log(item, val);
        }
        console.log(expMap.size);
        
        // set : is collection of unique values
        let expSet = new Set();
        expSet.add('alo1');
        expSet.add('alo');
        expSet.add('alo1');
        console.log( expSet ); // alo1, alo


    // date
    let date = new Date();
    let date1 = Date.now();
    console.log(date1);

    // json : JSON is a data format that has its own independent standard and libraries for most programming languages.
    // JSON supports plain objects, arrays, strings, numbers, booleans, and null.
    // JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.
        //JSON.stringify : convert objects into json(string)
        let student = {
            name: 'John',
            age: 30,
            isAdmin: false,
            courses: ['html', 'css', 'js'],
            wife: null
        };
        let json = JSON.stringify(student);
        console.log(typeof json); // we've got a string
        //The important limitation: there must be no circular references
        let room = {
            number: 23
        };
        let meetup = {
            title: "Conference",
            participants: ["john", "ann"],
            example : [{name : 'trung', age : 12}, {name : 'trung1', age : 11}]
        };
        meetup.place = room;       // meetup references room
        room.occupiedBy = meetup;  // rom references meetup
        // JSON.stringify(meetup);     // Error: Converting circular structure to JSON
        
        //JSON.stringify(value, replacer) : Please note that replacer function gets every key/value pair including nested objects and array items. 
        console.log(JSON.stringify(meetup,['title', 'participants', 'number', 'example', 'name', 'age']));// fixed converting circular structure to json. 
        // formatting : space. JSON.stringify(value, replacer, space); format dễ nhìn dữ liệu hơn.