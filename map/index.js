//mapとは？？
//配列操作メソッドの一つ
//配列とは？？　[1, 2, 3]
//連想配列とは？？　[red: 'apple', yellow 'lemon', pink: 'peach']
// 配列内の値それぞれに対して処理を行うメソッドがmap

//　実務では？？
// フロントエンドでもよく使いますしnode.jsを扱う案件でもゴリゴリ使っていました。

// #1 mapを知る
const array1 = [1, 4, 9, 16];

console.log('array1', array1);

const map1 = array1.map((x) => x + 5);

console.log('map1', map1);

// #2 実務での使われ方
const users = [
  {
    name: 'tanaka',
    age: 20,
  },
  {
    name: 'hujii',
    age: 30,
  },
  {
    name: 'ishida',
    age: 40,
  },
];

users.map((user) => {
  user.age >= 30 ? (user.over30 = true) : (user.over30 = false);
});

console.log('users', users);
// #お疲れ様でした
