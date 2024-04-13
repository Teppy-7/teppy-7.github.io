
// =========================================================
//      画面が開かれたときの初期設定
// =========================================================
window.onload = function() {
 
  // --- ブラウザのデフォルト言語を取得して初回の表示 ----- 
  var wDef = (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
  
  //セレクターの取得
  var languageSelect = document.getElementById('language-select');
  
  // 英語・日本語以外なら英語に設定
  if(wDef !== "en" && wDef !== "ja") {
    wDef = "en";
  }
  languageSelect.value = wDef; // デフォルトの値を設定
  langSet(wDef);
  
}
// =========================================================
//  セレクトの処理を入れる
// =========================================================
document.addEventListener('DOMContentLoaded', function() {
  var languageSelect = document.getElementById('language-select');
 
  languageSelect.addEventListener('change', function() {
     var selectedLanguage = this.value;
     langSet(selectedLanguage);
  });

});

 // =========================================================
 //      選択された言語のみ表示
 // =========================================================
function langSet(argLang){
 
  // --- 切り替え対象のclass一覧を取得 ----------------------
  var elm = document.getElementsByClassName("langCng");
 
  for (var i = 0; i < elm.length; i++) {
 
    // --- 選択された言語と一致は表示、その他は非表示 -------
    if(elm[i].getAttribute("lang") == argLang){
      elm[i].style.display = '';
    }
    else{
      elm[i].style.display = 'none';
    }
  }
}
