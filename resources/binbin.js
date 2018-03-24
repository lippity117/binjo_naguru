var audio={};
var volume = 1;
audio["punch1"] = (new Audio("resources/sound/punch.mp3"));

var hitCount=0;


// ------------------------------------------------------------
// カウントをインクリメントしつつ画像を差し替え
// ------------------------------------------------------------
function punch() {
    hitCount++;
    document.getElementById("binjo").src="resources/img/naguru_s.png"
    playSE('punch1');
    document.getElementById("counter").innerHTML=hitCount;
}

// ------------------------------------------------------------
// 例の顔に戻す
// ------------------------------------------------------------
function magao() {
    document.getElementById("binjo").src="resources/img/magao_s.png"
}

// ------------------------------------------------------------
// SE再生
// ------------------------------------------------------------
function playSE(file){
    audio[file].volume = volume;
    if( audio[file].currentTime != 'undefined'){
        audio[file].currentTime=0;
    }
    audio[file].play();
}