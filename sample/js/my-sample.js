$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: false,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    settings: {
            slidesToShow: 1,//スライドを画面に2枚見せる
            slidesToScroll: 1,//1回のスクロールで2枚の写真を移動して見せる
        }
//         responsive: [

//         {
//         breakpoint: 769,//モニターの横幅が769px以下の見せ方

//     },
//     {
//         breakpoint: 426,//モニターの横幅が426px以下の見せ方
//         settings: {
//             slidesToShow: 1,//スライドを画面に1枚見せる
//             slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
//         }
//     }
// ]
});

7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
$(function(){
    $('#katudon_turn').turn(
        {
                // 自動でページをめくったときの高さ
                elevation: 50,

                // ページめくりのスピード(ms)
                duration: 1000,

                // ページをめくるときの影->有効
                gradients: true,

                // 自動中央揃え->無効
                autoCenter: false,

                // 右開きか左開きかの設定->右開き
                direction: 'rtl',
        }
    );

    $('#prevpage').click(function(){
        $('#katudon_turn').turn('previous');
    });

    $('#nextpage').click(function(){
        $('#katudon_turn').turn('next');
    });

});