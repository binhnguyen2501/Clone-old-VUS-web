const menu_list = document.querySelector('.menu');
const nav_bar = document.querySelector('.toggler_navbar');
nav_bar.addEventListener('click' , function(){
    this.classList.toggle('active');
    menu_list.classList.toggle('active');
});
//////////
const nav_link = document.querySelectorAll('.nav-link');
console.log(nav_link);

var array = [];
for(var i=0, max=nav_link.length; i<max; i++) {
    array.push(nav_link[i]);
}
console.log(array);

var toObject = Object.assign({}, array);
console.log(toObject);

var lengthObject = Object.keys(toObject).length
console.log(lengthObject)

for(let i=0; i<lengthObject; i++){
    toObject[i].addEventListener('click',function(){
        menu_list.classList.remove('active');
        nav_bar.classList.remove('active');
    })
};

// querySelector tức là gọi thẻ thông qua tên id or class như đã đặt
// querySelectorALl tức là gọi hết tất cả các thẻ có trong code cùng tên class và gộp các thẻ có cùng tên lại thành một array có tên là NodeList
// getElementByClassName tức gọi hết tất cả các thẻ có trong code cùng tên class và gộp các thẻ có cùng tên lại thành một array có tên là HTMLCollection
// getElementByID tức là gọi thẻ có trong code với id như đã đặt
// => querySelector và getElement tất cả các giá trị trả về đều là các thẻ(node)
// => về bản chất querySelectorAll và getElementByClassName giống nhau chỉ khác nhau ở tên mảng là NodeList và HTMLCollection
// ==> thực tế thường sử dụng querySelector và querySelectorAll hơn do tính linh hoạt của nó (selector như CSS)


var cursor = document.querySelector('.cursor')
var cursor2 = document.querySelector('.cursor2')
document.addEventListener('mousemove' , function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px;"  + "top: " + e.clientY + "px;"
})

nav_link.forEach(link =>{
    link.addEventListener('mouseover', function(){
        cursor.classList.add('link-grow_cursor');
        cursor2.classList.add('link-grow_cursor2');
    })
    link.addEventListener('mouseleave', function(){
        cursor.classList.remove('link-grow_cursor');
        cursor2.classList.remove('link-grow_cursor2');
    })
});