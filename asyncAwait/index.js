// // async awaitとは？？
// // 非同期処理を簡潔に書くための構文
// // Promiseから学ぶのは疲れる＋実務でもasync await
// // 覚えておけば非同期処理できるようになる。

//実務でどういう風に使う？？
// ・バックエンド側のAPIを叩いてデータ取得する際
// ・データを形成しないと次の処理が進められない時

// #1 async awaitの具体的な利用方法
// const info = () => {
//   const url = 'https://api.adviceslip.com/advice';
//   const info = fetch(url).then((res) => {
//     return res.json();
//   });
//   console.log('info', info);
// };

// info();

// const asyncInfo = async () => {
//   const url = 'https://api.adviceslip.com/advice';
//   const info = await fetch(url).then((res) => {
//     return res.json();
//   });

//   // ここ以降はinfoの処理を待つことになる
//   console.log('info', info);
// };

// asyncInfo();

// #2　順番処理と並行処理

const asyncInfo = async () => {
  const url = 'https://api.adviceslip.com/advice';
  const info = await fetch(url).then((res) => {
    return res.json();
  });

  return info;
};

const threeTimes = async () => {
  const info1 = await asyncInfo();
  const info2 = await asyncInfo();
  const info3 = await asyncInfo();

  console.log('threeTimes', info1, info2, info3);
};

threeTimes();

const parallelThreeTimes = async () => {
  const [info1, info2, info3] = await Promise.all([asyncInfo(), asyncInfo(), asyncInfo()]);

  console.log('asyncThreeTimes', info1, info2, info3);
};

parallelThreeTimes();

// #誤差でしかないけどこれが100リクエストとかになるとかなり変わってくる
// #お疲れ様でした
