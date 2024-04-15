# 11_JS_practise

2024 前期 JavaScript 演習リポジトリ

## オブジェクトとクラス

- 4 月 15 日（月）

クラスの定義と、コンストラクタと、インスタンス化
forEach

```html
//メソッド createMarkup() { return `
<dl>
  <dt><span>${this.story}</span>${this.title}</dt>
  <dd>
    <a href="https://www.youtube.com/watch?v=${this.id}">
      <img src="./images/${this.image}" alt="${this.title}" />
    </a>
  </dd>
</dl>
` } これで、全部いれることが出来る。
```

```script

//インスタンス化
    //配列の順番を表す数字を「添字」またの名を「index」
    for (let i = 0; i < chiikawas.length; i++) {
      chiikawaContents.push(new Chiikawa(chiikawas[i].story,chiikawas[i].title,chiikawas[i].image,chiikawas[i].id));
      //↑↑または、(5,'チャリメラ/チャルメラ','chiikawa-005.webp','cE8wVmwY7VY);
      //メソッドの呼び出し
      console.log(chiikawaContents[i].createMarkup());//dl...dt...dd

      container.insertAdjacentHTML("beforeend",chiikawaContents[i].createMarkup());
    }
```
