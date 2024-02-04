// if文

問1:条件分岐とは何か、例を挙げて説明せよ


正解1:
「必須事項が入力されていたらフォーム内容を送信し、未入力であればエラーメッセージを表示する」など
、条件によって処理を分けること


問2:if、else if、elseを記述するパターンの構文を示せ


正解2:
------------------------------------------------------------
if (条件式A) {
  条件Aが成り立つときの処理
}
else if (条件式B) {
  条件Bが成り立つときの処理  
}
else {
  どの条件も成り立たないときの処理
}
------------------------------------------------------------


問3:「TRUEを返す」とはどういうことか（戻り値について）を説明せよ






正解3:
返り値とは
・条件式で比較演算子を使って2つの値を比較した場合に発生する値【TRUE（真）or FALSE（偽）】
・算術演算子を使った計算結果（数字）



問4:次の2つのコードの戻り値を予想せよ。
console.log('5' == 5);
console.log('5' === 5);








正解4:
true
false





問題5:条件式に使う主な比較演算子を8ついえ








正解5:
------------------------------------------------------------
比較演算子	処理の内容
==		2つの値が等しい場合はTRUEを返す（等価演算子）。
===		2つの値とデータ型が等しい場合はTRUEを返す（厳密等価演算子）。
!=		2つの値が等しくない場合はTRUEを返す。
!==		2つの値とデータ型が等しくない場合はTRUEを返す。
>		左辺の値が右辺の値よりも大きい場合はTRUEを返す。
>=		左辺の値が右辺の値以上の場合はTRUEを返す。
<		左辺の値が右辺の値よりも小さい場合はTRUEを返す。
<=		左辺の値が右辺の値以下の場合はTRUEを返す。
------------------------------------------------------------


問6:if、else if、elseを使い、次の//コメントに従ってコードを書け。

// 変数numに0～4までのランダムな整数を代入する

// 変数numの値を出力する（確認用）

// 変数numの値が4であれば、「大当たりです」という文字列を出力する

// 変数numの値が3であれば、「当たりです」という文字列を出力する

// それ以外のときは、「はずれです」という文字列を出力する









正解6:
// 変数numに0～4までのランダムな整数を代入する
let num = Math.floor(Math.random() * 5);

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値が4であれば、「大当たりです」という文字列を出力する
if (num === 4) {
  console.log('大当たりです');
}
 // 変数numの値が3であれば、「当たりです」という文字列を出力する
 else if (num === 3) {
   console.log('当たりです');
 }
// それ以外のときは、「はずれです」という文字列を出力する
else {
  console.log('はずれです');
}


問7:$numが10より大きく、30より小さい場合に、「変数$numは10より大きく、
    30より小さいです」と表示されるようコードを書け。










正解7:
------------------------------------------------------------
num = 20;
 
 // &&（かつ）を記述して、すべての条件が成り立つ場合にのみ処理を行う（変数numの値が11～29）
 if (num > 10 && num < 30) {
     console.log('変数numは10より大きく、30より小さいです');
 } else {
     console.log('条件が成り立ちませんでした');
 } 
------------------------------------------------------------




問8:$numが10または30の場合に、「変数$numは10または30です]と表示される
    ようコードを書け












正解8:
------------------------------------------------------------
 num = 30;
 
 // ||（または）を記述して、1つでも条件が成り立てば処理を行う（変数numの値が10または30）
 if (num === 10 || num === 30) {
     console.log('変数numは10または30です');
 } else {
     console.log('条件が成り立ちませんでした');
 }
------------------------------------------------------------


問9:switch文の意味、使用ケース（とその例）を述べろ。






正解9:
意味 switch文＝式（変数など）の値によって処理を切り替える条件分岐。
使用ケース:式（変数など）が3つ以上の値をとり、値によって処理を切り替えたいときによく使われる。
          ※if文でも同じ条件分岐できるが、条件式のパターン数が多い（3・4つ以上）場合
            はswitch文を使うことでより簡潔に記述できる。

            例）映画館において、曜日によって入場料の割引対象を変えたい場合
  ・月曜日であれば、成人男性の入場料を割り引く
  ・金曜日であれば、成人女性の入場料を割り引く
  ・日曜日であれば、子供の入場料を割り引く



問10:switch文を書く際、↓の２パターンの構文をいえ。
・caseのみを記述するパターン
・caseとdefaultを記述するパターン







正解10:
------------------------------------------------------------
switch (式) {
  case 値1:
    式が値1のときの処理
    break;
  case 値2:
    式が値2のときの処理
    break;
  case 値3:
    式が値3のときの処理
    break;

  //↓はcaseのみを記述するパターンなら、不要。
  default:
    式がいずれのcaseにも当てはまらないときの処理
    break;
}
------------------------------------------------------------


問11:switch文を使い、次のコードを書け。
変数numに0～4までのランダムな整数を代入する
変数numの値によって、出力する文字列を切り替える
2のとき:「小吉です」
3のとき:「中吉です」
4のとき:「大吉です」
それ以外のとき:「末吉です」





正解11:
------------------------------------------------------------
// 変数numに0～4までのランダムな整数を代入する
num = Math.floor(Math.random() * 5);

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値によって、出力する文字列を切り替える
switch (num) {
  case 2:
    console.log('小吉です');
    break;
  case 3:
    console.log('中吉です');
    break;
  case 4:
    console.log('大吉です');
    break;
   default:
     console.log('末吉です');
     break;
}
------------------------------------------------------------













//------------------------------------------------------------
// //算術演算子を使った場合の戻り値を出力する
// console.log(45 + 18);

// //比較演算子を使った場合の戻り値を出力する
// console.log(45 > 18);

// //比較演算子を使った場合の戻り値を出力する
// console.log('5'  == 5);

// //厳密等価演算子を使った場合の戻り値を出力する
// console.log('5' === 5);

// // 変数numに0～4までのランダムな整数を代入する
// let num = Math.floor(Math.random() * 5);
 
// // 変数numの値を出力する（確認用）
// console.log(num);

// // 変数numの値が4であれば、「大当たりです」という文字列を出力する
// if (num === 4) {
//   console.log('大当たりです');
// }

// //変数numの値が３であれば、「当たりです」という文字列を出力する
// else if (num === 3) {
//   console.log('当たりです');
// }

// // それ以外のときは、「はずれです」という文字列を出力する
// else {
//   console.log('はずれです');
// }

// //変数numに0～4までのランダムな整数を代入する
// num = Math.floor(Math.random() * 5);

// //変数numの値を出力する（確認用）
// console.log(num);

// //変数numの値によって、出力する文字列を切り替える
// switch(num) {
//   case 2:
//     console.log('小吉です');
//     break;
//   case 3:
//     console.log('中吉です');
//     break;
//   case 4:
//     console.log('大吉です');
//     break;
//   default:
//     console.log('末吉です');
//     break;
// }

