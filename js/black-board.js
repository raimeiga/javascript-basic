// 関数の中で定数を宣言し、関数の中で定数を使う
const useVariable = () => {
    const userName = '侍太郎'
    console.log(userName);
  }
  
  // 関数を呼び出す
  useVariable();
  
  // 関数の中で宣言した定数を関数の外で使う
  console.log(userName);
  
  