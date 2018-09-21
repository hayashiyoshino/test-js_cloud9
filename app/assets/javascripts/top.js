$(window).on("load", function() {
  $("li").on("click", function() {
    $("li.selected").removeClass("selected");
    $(this).addClass("selected");
    $(".contents div").hide();
    $("."+this.id).show();
  });
});



// window.addEventListener("load", function() {
//     windowオブジェクトにloadイベントが起きたら関数実行
//   $("li").on("click", function() {
//     liタグがclickされたら関数実行
//     $("li.selected").removeClass("selected");
//     liタグのselectedクラスからselectedクラスを除く
//     $(this).addClass("selected");
//     イベントが発生した要素にselectedクラス付け足す
//     $(".contents div").hide();
//     contentsクラス配下のdivタグを消す
//     $("." + this.id).show();
//     イベント発生した要素のidと同じ名前のクラスのタグを表示
//   });
// });


// window.addEventListener("load", function() {
  // windowオブジェクトにloadイベントが起きたら関数実行
  // $("li").on("click", function() {
    // liタグがclickされたら関数実行
    // $("li.selected").removeClass("selected");
    // liタグのselectedクラスからselectedクラスを除く
    // $(this).addClass("selected");
    // イベントが発生した要素にselectedクラス付け足す
//   });
// });


// window.addEventListener("load", function() {
//   windowオブジェクトがloadされたら関数実行
//   $("li").on("click", function() {
//     liタグがクリックされたら関数実行
//     console.log(this.id);
//     consolelogにクリックされたタグのid表示
//   });
// });

// window.addEventListener("load", function() {
  // windowオブジェクトにloadイベントが起きたらfunction実行
  // var btn = document.querySelector("input");
  // 変数定義。documentオブジェクトのinputタグを取得しbtnに代入
  
  // btn.addEventListener("click", function() {
    // btnにclickイベントが起きたらfunction実行
    // var p = document.querySelector("p");
    // 変数定義。documentオブジェクトのpタグを取得しpに代入
    // p.innerText = "クリックされた！";
    // pのinnerTextを”くりっくされた！”に書き換える
//   });
// });


// window.addEventListener("load", function() {
//   var btn = document.querySelector("input");
  
//   btn.addEventListener("click", function() {
//     console.log("Hello world");
//   });
// });


// window.addEventListener("load", function() {
//   var btn = document.querySelector("input");
  
//   function printHello() {
//     console.log("Hello world");
//   }
//   btn.addEventListener("click", printHello);
// });




// function printHelloWithButton() {
//   var btn = document.querySelector("input");
  // ボタンをDOMオブジェクトとして取得し、変数btnに代入
  
  // function printHello() {
  //   console.log("Hello world");
  // }
  // printHello関数を定義
  
  // btn.addEventListener("click", printHello);
  // ボタンのDOMオブジェクトであるbtnに対して、
  // clickイベントとprintHello関数を紐付ける仕組みであるイベントリスナを追加する
// }
// 一連の処理をまとめた関数を作る

// window.addEventListener("load", printHelloWithButton);
// windowオブジェクトのloadイベントが起きたらprintHelloWithButton関数実行