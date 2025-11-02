// docs/js/mathjax_config.js の中身

window.MathJax = {
  tex: {
    // 'ams' パッケージを明示的に読み込む
    // ('[+]' は、デフォルトのパッケージリストに 'ams' を追加するという意味)
    packages: {'[+]': ['ams']}
  }
};

// window.MathJax = {
//   tex: {
//     inlineMath: [["\\(", "\\)"], ["$", "$"]],
//     displayMath: [["\\[", "\\]"], ["$$", "$$"]],
//     processEscapes: true,
//     processEnvironments: true,
//     packages: {'[+]': ['bm']}   //追加：bmパッケージを読み込む
//   },
//   loader: {
//     load: ['[tex]/bm']          // 追加：パッケージ本体をロード
//   },
//   options: {
//     ignoreHtmlClass: ".*|",        // 一度全部無視して
//     processHtmlClass: "arithmatex" // arithmatex クラスだけ処理
//   },
//   startup: {
//     typeset: false                 // SPA なので自動 typeset をオフにする
//   }
// };

// // Material for MkDocs の SPA 再描画時にも毎回 typeset
// document$.subscribe(() => {
//   MathJax.typesetPromise();
// });



