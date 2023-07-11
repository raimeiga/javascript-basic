// head要素を取得し、中身を出力する
console.log(document.head);
// body要素を取得し、中身を出力する
console.log(document.body);

// windowオブジェクトの中身を出力する
console.log(window);

console.log(document.getElementById('first-list'));

// HTML要素をclassで取得し、中身を出力する
console.log(document.getElementsByClassName('heading'));

// 複数のHTML要素を取得し、定数に代入する
const headings = document.getElementsByClassName('heading');
 
// 複数のHTML要素を1つずつ取得し、中身を出力する
for (let i = 0; i < headings.length; i++) {
  console.log(headings[i]);
}

// HTML要素をCSSセレクタで取得し、中身を出力する（最初の1つ）
console.log(document.querySelector('h1'));
console.log(document.querySelector('#second-heading'));
console.log(document.querySelector('.list'));

// HTML要素をCSSセレクタで取得し、中身を出力する（すべて）
console.log(document.querySelectorAll('.heading'));
console.log(document.querySelectorAll('li'));

