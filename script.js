
// ナビゲーションの移動
// script.js
document.addEventListener("DOMContentLoaded", function () {
  const navigation = document.getElementById("navigation");
  const header = document.querySelector("header");
  const headerHeight = header.offsetHeight;

  
  window.addEventListener("scroll", function () {
    if(this.window.outerWidth < 800) return; //800より幅が狭かったら移動させない。
    if (window.scrollY > headerHeight) { //ヘッダーが見えなくなったら。
        navigation.style.position = "fixed";
        navigation.style.bottom = "auto";
        navigation.style.top = "0";
        }
        else { //ヘッダー見える位置
          navigation.style.position = "absolute";
          navigation.style.top = "120px";
          
        }
      });
    
  //リンクからのスライド移動
  const navigationLinks = navigation.querySelectorAll("a");
  navigationLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const targetSection = document.querySelector(link.getAttribute("href"));
          if (targetSection) {
              const targetOffset = targetSection.offsetTop - headerHeight;
              window.scrollTo({
                  top: targetOffset,
                  behavior: "smooth"
              });
          }
      });
  });

  //ナビゲーションボタン開閉
  const hamImg = document.getElementById("hamImg");
  var flag = false;
  hamImg.addEventListener("click", function() {
    if(flag){navigation.style.display = "none";}
    else{navigation.style.display = "block";}
    flag = !flag;
  })

  //スライドショー
  new Splide( '#image-carousel' ).mount();

});


