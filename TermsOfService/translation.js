document.addEventListener('DOMContentLoaded', function() {
  var languageSelect = document.getElementById('language-select');
  languageSelect.value = 'en'; // デフォルトの値を設定
 
  var language = languageSelect.value;
  var elements = document.querySelectorAll('[data-ja], [data-en]');
 
  elements.forEach(function(element) {
     if (language === 'ja' && element.hasAttribute('data-ja')) {
       element.textContent = element.getAttribute('data-ja');
     } else if (language === 'en' && element.hasAttribute('data-en')) {
       element.textContent = element.getAttribute('data-en');
     }
     // 言語が切り替わったときに、data-jaやdata-en属性がない要素に対しては何もしない
  });
 });
 
 // 言語が切り替わったときにも同様の処理を行う
 document.getElementById('language-select').addEventListener('change', function() {
  var language = this.value;
  var elements = document.querySelectorAll('[data-ja], [data-en]');
 
  elements.forEach(function(element) {
     if (language === 'ja' && element.hasAttribute('data-ja')) {
       element.textContent = element.getAttribute('data-ja');
     } else if (language === 'en' && element.hasAttribute('data-en')) {
       element.textContent = element.getAttribute('data-en');
     }
     // 言語が切り替わったときに、data-jaやdata-en属性がない要素に対しては何もしない
  });
 });