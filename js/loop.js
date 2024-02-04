// wihle文・for文

問1:while文について、使用するケース、その例を挙げた上で、構文を書け



正解1:
使用するケース:繰り返す回数があらかじめわからない場合
例）サイコロで6の目が出るまで繰り返す
構文:
------------------------------------------------------------
while (条件式) {
    条件を満たしている間、繰り返す処理
}
------------------------------------------------------------



問2:while文を使い、次のコメントに従ってコードを書け。
// 変数numに0～4までのランダムな整数を代入する
 
// 変数numの最初の値を出力する（確認用）
 
// 変数numの値が0以外である間、変数numの値を出力し続ける

// 変数numに0～4までのランダムな整数を再代入する
 
// 次の条件式で比較される、変数numの現在の値を出力する





正解2:
------------------------------------------------------------
// 変数numに0～4までのランダムな整数を代入する
 let num = Math.floor(Math.random() * 5);
 
 // 変数numの最初の値を出力する（確認用）
 console.log('最初の値は' + num + 'です');
 
 // 変数numの値が0以外である間、変数numの値を出力し続ける
 while (num !== 0) {
   // 変数numに0～4までのランダムな整数を再代入する
   num = Math.floor(Math.random() * 5);
 
   // 次の条件式で比較される、変数numの現在の値を出力する
   console.log('現在の値は' + num + 'です');
 }
------------------------------------------------------------




問3:for文について。
使うケース、例、注意点、構文を書け。






正解3:
<構文>
------------------------------------------------------------
for (カウンタ変数の初期値; 条件式; カウンタ変数の増減値) {
    カウンタ変数が決まった値になるまで繰り返す処理
}	
------------------------------------------------------------

<ケース>繰り返す回数があらかじめわかっている場合	
<例>1～10までの数字を順番に表示する
<注意点>無限ループ。TRUEを返し続ける条件式
      （FALSEを返す可能性がないとき）で発生してしまう可能性。



問4:1～10までの整数を順番に出力するコードを書け






正解4:
------------------------------------------------------------
// 1～10までの数値を順番に出力する
 for (let i = 1; i <= 10; i++) {
   console.log(i);
 }
------------------------------------------------------------


問5:カウンタ変数iに1を加算するときに記述した+=は、代入演算子という。
   +=を含めて6つの代入演算子をいえ。


正解5:
《代入演算子》	《処理の内容》
    =	       :変数に右項の値を代入する（代入）。
   +=        :変数の値に右項の値を足して代入する（加算代入）。
   -=        :変数の値から右項の値を引いて代入する（減算代入）。
   *=        :変数の値に右項の値を掛けて代入する（乗算代入）。
   /=        :変数の値を右項の値で割って代入する（除算代入）。
   %=        :変数の値を右項の値で割った余りを代入する（剰余代入）


問6:インクリメント（増加）演算子とデクリメント（減少）演算子を書け






正解6:
i += 1 → i++
i -= 1 → i--












//-----------------------------------------------------------
// // 変数numに0～4までのランダムな整数を代入する
// let num = Math.floor(Math.random() * 5);
 
// // 変数numの最初の値を出力する（確認用）
// console.log('最初の値は' + num + 'です');

// // 変数numの値が0以外である間、変数numの値を出力し続ける
// while (num !== 0) {
//   // 変数numに0～4までのランダムな整数を再代入する
//   num = Math.floor(Math.random() * 5);

//   // 次の条件式で比較される、変数numの現在の値を出力する
//   console.log('現在の値は' + num + 'です');
// }

// // 1～10までの数値を順番に出力する
// for(let i = 1; i <=10; i++) {
//     console.log(i);
// }