// 1
const changephoto1 = document.getElementById("photo1");
// console.log(changephoto1);
changephoto1.addEventListener("mouseover", function(){
    // alert("確認A")
    this.src = "13.jpg";
    // changephoto1.style.opacity = 0.5;
})
changephoto1.addEventListener("mouseleave", function(){
    // alert("確認B")
    this.src = "1.jpg";
    // changephoto1.style.opacity = 1;
})

document.getElementById("bgimg")


// 2
const changephoto2 = document.getElementById("photo2");
changephoto2.addEventListener("mouseover", function(){
    this.src = "14.jpg";
})
changephoto2.addEventListener("mouseleave", function(){
    this.src = "2.jpg";
})

// 3
const changephoto3 = document.getElementById("photo3");
changephoto3.addEventListener("mouseover", function(){
    this.src = "15.jpg";
})
changephoto3.addEventListener("mouseleave", function(){
    this.src = "3.jpg";
})

// 4
const changephoto4 = document.getElementById("photo4");
changephoto4.addEventListener("mouseover", function(){
    this.src = "16.jpg";
})
changephoto4.addEventListener("mouseleave", function(){
    this.src = "4.jpg";
})

// 5
const changephoto5 = document.getElementById("photo5");
changephoto5.addEventListener("mouseover", function(){
    this.src = "17.jpg";
})
changephoto5.addEventListener("mouseleave", function(){
    this.src = "5.jpg";
})

// 6
const changephoto6 = document.getElementById("photo6");
changephoto6.addEventListener("mouseover", function(){
    this.src = "18.jpg";
})
changephoto6.addEventListener("mouseleave", function(){
    this.src = "6.jpg";
})

// 7
const changephoto7 = document.getElementById("photo7");
changephoto7.addEventListener("mouseover", function(){
    this.src = "19.jpg";
})
changephoto7.addEventListener("mouseleave", function(){
    this.src = "7.jpg";
})

// 8
const changephoto8 = document.getElementById("photo8");
changephoto8.addEventListener("mouseover", function(){
    this.src = "20.jpg";
})
changephoto8.addEventListener("mouseleave", function(){
    this.src = "8.jpg";
})

// 9
const changephoto9 = document.getElementById("photo9");
changephoto9.addEventListener("mouseover", function(){
    this.src = "22.jpg";
})
changephoto9.addEventListener("mouseleave", function(){
    this.src = "9.jpg";
})

// 10
const changephoto10 = document.getElementById("photo10");
changephoto10.addEventListener("mouseover", function(){
    this.src = "21.jpg";
})
changephoto10.addEventListener("mouseleave", function(){
    this.src = "10.jpg";
})

// 11
const changephoto11 = document.getElementById("photo11");
changephoto11.addEventListener("mouseover", function(){
    this.src = "23.jpg";
})
changephoto11.addEventListener("mouseleave", function(){
    this.src = "11.jpg";

})

// 12
const changephoto12 = document.getElementById("photo12");
changephoto12.addEventListener("mouseover", function(){
    this.src = "24.jpg";
})
changephoto12.addEventListener("mouseleave", function(){
    this.src = "12.jpg";
})

// スクロールアップ
function scroll_effect() {
let element = document.getElementsByClassName('scroll-up');
if(!element) return;
                    
var scrollY = window.pageYOffset;
var windowH = window.innerHeight;
var showTiming = 200; // 要素を表示するタイミング
for(var i = 0; i < element.length; i++) { 
    var elemClientRect = element[i].getBoundingClientRect(); 
    var elemY = scrollY + elemClientRect.top; 
    if(scrollY > elemY - windowH + showTiming) {
    element[i].classList.add('is-show');
    }
}
}
window.addEventListener('scroll', scroll_effect); // スクロール時に実行

// ページが読み込まれたときに実行する関数
window.onload = function() {
  var scrollToTopButton = document.getElementById("scrollToTopButton");

  // ボタンがクリックされたときにトップにスクロール
  scrollToTopButton.addEventListener("click", function() {
    scrollToTop(1000); // 1000ミリ秒（1秒）かけてスクロール
  });

  // スクロール関数
  function scrollToTop(duration) {
    var start = window.pageYOffset;
    var startTime = performance.now();

    function scroll(time) {
      var elapsed = time - startTime;
      var progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + progress * (0 - start));

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    }

    requestAnimationFrame(scroll);
  }
}
