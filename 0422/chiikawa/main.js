//エクスポートしたクラスjsをインポートしたい
import { Chiikawa } from './class.js';
//複数なので配列を準備
const chiikawaContents = [];

//挿入するエリア
const container = document.querySelector('.contents');

//インスタンス化
//配列の順番を表す数字を「添字」またの名を「index」
for (let i = 0; i < chiikawas.length; i++) {
  chiikawaContents.push(
    new Chiikawa(
      chiikawas[i].story,
      chiikawas[i].title,
      chiikawas[i].image,
      chiikawas[i].id,
    ),
  );
  //↑↑または、(5,'チャリメラ/チャルメラ','chiikawa-005.webp','cE8wVmwY7VY);
  //メソッドの呼び出し
  console.log(chiikawaContents[i].createMarkup()); //dl...dt...dd

  container.insertAdjacentHTML('beforeend', chiikawaContents[i].createMarkup());
}

console.log(chiikawaContents);
