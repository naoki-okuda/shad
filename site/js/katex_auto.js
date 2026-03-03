document.addEventListener("DOMContentLoaded", function() {
  renderMathInElement(document.body, {
    // あなたが使っている区切りを明示
    delimiters: [
      {left: "$$", right: "$$", display: true},
      {left: "\\[", right: "\\]", display: true},
      {left: "\\(", right: "\\)", display: false}
    ],
    throwOnError: false
  });
});
