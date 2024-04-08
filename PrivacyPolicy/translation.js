//言語変更 英語・日本語
document.getElementById('language-select').addEventListener('change', function() {
  var language = this.value;
  var content = document.querySelectorAll('.content');
  var headers = document.querySelectorAll('h1, h2, p');

  // ここで、各要素のテキストを言語に応じて変更します。
  // 例えば、各ヘッダーと段落のテキストを日本語と英語のバージョンに切り替えることができます。
  // この例では、単純化のために、すべてのテキストを単一の言語に設定しています。
  content.forEach(function(element) {
      element.lang = language;
  });

  headers.forEach(function(element) {
      element.lang = language;
  });
});