let deskTop = document.getElementsByClassName(`desktop`);
//ウィンドウを用意
let shortCutIcon = [
    {icon:`trash.png`,Name:`trash`, net: false, inner: ''},
    {icon:`IE.png`,Name:`Internet Explorer`,net: true, url:`https://www.bing.com/embed/`},
    //{icon:`mine.png`,Name:`Minecraft`,net: true, url:`https://jonjon565.github.io/Beta/`},
    {icon:'mp4.svg',Name:'駅名記憶.mp4',net: true, url:'https://turbowarp.org/837640198/embed'},
    //{icon:'noimg.png',Name:'Error',net: false, inner: '<img src="image/unnamed.png">'},
    //{icon:'mp4.svg',Name:'().mp4',net: true, url:'https://www.youtube.com/embed/yodR8OwruHA'},
    {icon:'Windows7.svg', Name:'Windows7.svg', net: false, inner: '<img src="image/Windows7.svg" alt>'},
    //{icon:'mp4.svg', Name:'movie.mp4', net: true, url:'https://www.youtube.com/embed/F3qblfRzH_k'},
    {icon:'txt.svg', Name:'Credits.txt', net: true, url: 'iframe/credits.html'},
    {icon:'TET.svg', Name:'TETRIS.exe', net: true, url: 'https://turbowarp.org/778585496/embed'},
    {icon:'txt.svg', Name:'推奨環境.txt', net: false, inner: '<h1 class="midasi">Windows11</h1>'},
    //{icon:'idiot.png', Name:'YouAreAnIdiot.exe', net: true, url: 'https://www.youtube.com/embed/hiRacdl02w4'},
    //{icon:'mp4.svg', Name:'千本桜.mp3', net: false, inner: '<audio src="sound/sennbonn.wav" controls>Unsupported brouser</audio>'},
    //{icon:'mp4.svg', Name:'movie (1).mp4', net: true, url: 'https://www.youtube.com/embed/AauMXO97G2M'},
    //{icon:'mp4.svg', Name:'ナイトオブナイツ.mp3', net: false, inner: '<audio src="sound/nightOfNights.flac" controls>Unsupported brouser</audio>'},
    //{icon:'mp4.svg', Name:'Windows Sparta Remix.mp3', net: false, inner: '<audio src="sound/Windows Sparta Remix.mp3" controls></audio>'},
    //{icon:'mp4.svg', Name:'Windows(3.1~8).mp3', net: false, inner: '<audio src="sound/Windows(3.1~8).mp3" controls></audio>'},
    {icon:'marisa (1).jpg', Name:'marisa (1).png', net: false, inner: '<img src="image/marisa (1).jpg" alt style="height: 100%;">'},
    {icon:'marisa (2).jpg', Name:'marisa (2).png', net: false, inner: '<img src="image/marisa (2).jpg" alt style="height: 100%;">'},
    {icon:'loup.svg', Name:'Windows ZONE.sb3', net: true, url: 'https://turbowarp.org/854429544/embed'},
    {icon:'loup.svg', Name:'マインスイーパ', net: true, url: 'https://scratch.mit.edu/projects/22709176/embed'},
    {icon:'mp4.svg', Name:'Windowsも吹っ切れた', net: false, inner: '<audio src="sound/video-_3_.mp3" controls>Uusupported brouser</audio>'}
];
let WindowOpen;
//ショートカットを作成
function createShortCut(Icon, name, column = 1){
    let shortCut = document.createElement('div');
    shortCut.setAttribute('title', name);
    shortCut.setAttribute('class', 'deskTopIcon');
    shortCut.innerHTML = `<img src="image/${Icon}" alt="icon" class="icon"><pre class="text">${name}</pre>`;
    let shortCutId = document.querySelectorAll('.desktop div.deskTopIcon').length;
    deskTop[column].insertBefore(shortCut, null);
    deskTop[column].addEventListener('contextmenu', (event) => { //
        event.preventDefault();
        let menu = document.getElementById('RClickMenu');
        menu.setAttribute('style', `left: ${PositionX}px; top: ${PositionY}px;`);
        menu.style.display = 'block';
        menu.addEventListener('click', () => {
            menu.style.display = 'none'
        });
        WindowOpen = event.target;
    });
    return shortCutId;
}
for(let i = 0; i < shortCutIcon.length; i++){
    createShortCut(shortCutIcon[i].icon, shortCutIcon[i].Name, Math.floor(i / 10));
}
//時間
let time = document.getElementById(`time`);
function getTime(){
    let now = new Date()
    let hour = (`0` + now.getHours()).slice(-2);
    let min = (`0` + now.getMinutes()).slice(-2);
    let sec = (`0` + now.getSeconds()).slice(-2);
    var nowTime = hour + `:` + min + `:` + sec;
    time.innerHTML = nowTime;
}
function setClock(){
    setInterval(getTime,10);
}
setClock();

//スタートメニュー関連
let element = document.getElementById(`start`);
let menu = document.getElementById(`menus`);
element.addEventListener(`click`, () => {
    if (menu.style.display === `block`) {
         menu.style.display = `none`;
    } else {
        menu.style.display = `block`;
    }
});
let head = {}
let timer = 0;
let Attribute = 0;
let inner = '';
let Miniuze = {}
let big = false
//ダブルクリックでwindow
let mouseClicked = false;
function createWindow(i = 0){
    let element = document.createElement(`div`);
        element.setAttribute(`class`, `window`);
        if (!(i === 5)) {
            inner = `<header class="windowHeader"><pre class="title"><img src="image/${shortCutIcon[i].icon}" alt class="appImg">`;
        } else {
            inner = `<header class="windowHeader"><pre class="title"><img src="image/${shortCutIcon[i].icon}" alt class="appImg" style="margin-top: 10px">`;
        }
        inner += `${shortCutIcon[i].Name}</pre><div class="Tool">`;
        inner += '<h3 class="m">_ </h3><h3 class="h"> □ </h3><h3 class="c"> X</h3></div></header>';
        if (shortCutIcon[i].net) {
            inner += `<div class="main"><iframe src="${shortCutIcon[i].url}"></iframe></div>`;
        } else {
            inner += `<div class="main" style="background-color: #000;">${shortCutIcon[i].inner}</div>`;
        }
        element.innerHTML = inner;
        element.addEventListener(`mousedown`, (event) => {
            //ウィンドウを動かす処理
            mouseClicked = true;
            if (event.target.getAttribute('class') === 'windowHeader') {
                head = event.target.parentElement;
            }
            let Windows = document.querySelectorAll('#windows div.window');
            for (let i = 0; i < Windows.length; i++) {
                //ウィンドウの色変更
                const element = Windows[i];
                element.style.backgroundColor = '';
                element.style.borderColor = '';
                element.setAttribute(`style`, `${element.getAttribute('style')} background-color: rgb(200, 200, 200); border-color: rgb(200, 200, 200);`);
            }
            timer = setInterval(() => {
                if (mouseClicked && !big) {
                    head.setAttribute(`style`, `top: ${PositionY}px; left: ${PositionX - 500}px; background-color: rgb(134, 134, 134); border-color: rgb(134, 134, 134);`);
                    kannsuu();
                }
            }, 1);
        });
        setTimeout(() => {
            let miniuze = document.getElementsByClassName('m');
            for(let i = 0; i < miniuze.length; i++){
                Miniuze = document.getElementsByClassName('m')[i];
                Miniuze.addEventListener('mousedown', ()=>{
                    Attribute = setInterval(() => {
                        Miniuze.parentElement.parentElement.parentElement.setAttribute('style', `display: none;`);
                    }, 1);
                    setTimeout(() => {
                        clearInterval(Attribute);
                    }, 1000);
                });
            }
        }, 1);
        element.addEventListener(`mouseup`, () => {
            //ウィンドウを止める
            mouseClicked = false;
            clearInterval(timer);
        });
        let menu = document.getElementById(`windows`);
        menu.insertBefore(element, null);
        setTimeout(() => {
            footer.innerHTML += '<div class="Title">' + windows.childNodes[0].childNodes[0].innerHTML + '</div>';
            let taskWins = document.querySelectorAll('#taskWin div');
            for(let i = 0; i < taskWins.length; i++){
                taskWins[i].addEventListener('click', () => {
                    Miniuze.parentElement.parentElement.parentElement.style.display = 'block';
                });
            }
        }, 1);
        //最大化
        let saidaikas = document.getElementsByClassName('h');
        for(let i = 0; i < saidaikas.length; i++){
            saidaikas[i].addEventListener('mousedown', () => {
                if(!big){
                    big = true;
                    val = setInterval(() => {
                        saidaikas[i].parentElement.parentElement.parentElement.setAttribute('style', `top: 0; left: 0; width: ${innerWidth - 8}px; height: ${innerHeight - 38.5}px;`);
                        saidaikas[i].parentElement.parentElement.parentElement.childNodes[1].setAttribute('style', 'background-color: #000; height: calc(100% - 32px);');
                    }, 1);
                } else {
                    saidaikas[i].parentElement.parentElement.parentElement.setAttribute('style', '');
                    saidaikas[i].parentElement.parentElement.parentElement.childNodes[1].style.height = '';
                    clearInterval(val);
                    big = false;
                }
            });
        }
    return element;
}
let val = 0;
//ダブルクリックでwindow2
let windows;
function setEventForWindow(selector = ''){
    let Element1 = document.querySelectorAll(selector);
    for(let i = 0; i < Element1.length; i++){
        //ウィンドウを作成
        Element1[i].addEventListener(`dblclick`, () => {
            windows = createWindow(i);
        });
    }
}
let PositionX = 0;
let PositionY = 0;
windows = setEventForWindow(`.icon`);
window.addEventListener(`load`, () => {
    window.onmousemove = (position) => {
        PositionX = position.pageX;
        PositionY = position.pageY;
    };
});
let f;
//windowsを起動
let e = document.querySelector('audio#a');
function startUp(){
    let startUpTimes = [
        500,
        2000,
        5000
    ];
    setTimeout(() => {
        let pre = document.querySelector('pre.loadText');
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                pre.innerHTML += `\nlog-${i * Math.floor(Math.random() * 40)}`
            }, i * 10);
        }
        setTimeout(() => {
            pre.innerHTML = '';
            document.body.setAttribute('style', 'background-image: url("image/Boardwalk.svg");');
            setTimeout(() => {
                document.body.setAttribute('style', 'background-color: rgb(0, 109, 109);');
                let a = document.getElementById('loading');
                a.style.display = 'none';
                setTimeout(() => {
                    e.play();
                }, 1)
                setTimeout(()=>{
                    f = document.getElementById('PC');
                    f.style.display = 'block';
                }, 800);
            }, startUpTimes[2]);
        }, startUpTimes[1]);
    }, startUpTimes[0]);
    return;
}
startUp()
//StartMenuの作成
let array = [
    'winUp.png" alt class="startImg"><span>Windows Update</span>',
    'pro.png" alt class="startImg"><span>Program Files (x86)(</span><span class="i">P</span><span>)...</span>',
    'fav.png" alt class="startImg"><span>お気に入り(</span><span class="i">A</span><span>)</span>',
    'doc.png" alt class="startImg"><span>ドキュメント(</span><span class="i">D</span><span>)...</span>',
    'sea.png" alt class="startImg"><span>検索(</span><span class="i">F</span><span>)...</span>',
    'hel.png" alt class="startImg"><span>ヘルプ(</span><span class="i">H</span><span>)...</span>',
    'exe.png" alt class="startImg"><span>ファイル名を指定して実行(</span><span class="i">R</span><span>)...</span><br><br><br>',
    'shut.png" alt class="startImg"><span>Windowsの終了(</span><span class="i">U</span><span>)...</span>',
];
for(let i = 0; i < array.length; i++){
    let menus = document.getElementById('menus');
    menus.innerHTML += '<li class="menu"><img src="image/' + array[i] + '</li>'
}
//ウィンドウを閉じる
function kannsuu(){
    let Close = document.getElementsByClassName('c');
    for (let i = 0; i < Close.length; i++) {
        Close[i].addEventListener('mousedown', () => {
            let windowElement = Close[i].parentElement.parentElement.parentElement;
            let parent = Close[i].parentElement.parentElement.parentElement.parentElement;
            setTimeout(() => {
                clearInterval(timer);
                let removed = false;
                if (!removed) {
                    parent.removeChild(windowElement);
                    removed = true;
                }
            }, 0.1);
            for (let index = 0; index < footer.childNodes.length; index++) {
                const element = footer.childNodes[index];
                if (element.innerText === windowElement.childNodes[0].childNodes[0].innerText) {
                    footer.removeChild(element);
                }
            }
        });
    }
}
//不要なショートカットを削除
function delShortCut(shortCutId = 0){
    let a = document.getElementsByClassName('deskTopIcon')[shortCutId];
    let b = a.parentElement;
    b.removeChild(a);
    return;
}
let footer = document.querySelector('#taskWin');
function setBackImage(path = null){
    document.body.style.backgroundImage = ''
    if (path) {
        if ((path * 1)) {
            document.body.setAttribute('style', `${document.body.getAttribute('style')} background-image: url('image/porn/スクリーンショット (${path}).png')`)
        } else {
            document.body.setAttribute('style', `${document.body.getAttribute('style')} background-image: url('image/${path}')`)
        }
    }
}
let Open = document.querySelector('.clickMenu span');
Open.addEventListener('click', () => {
    const elements = document.querySelectorAll('.desktop div.deskTopIcon');
    for(let i = 0; i < elements.length; i++){
        if(WindowOpen == elements[i].childNodes[0]){
            windows = createWindow(i + Math.floor(i / 9));
        }
    }
});
function Error(){
    createWindow(4);
}
let a2 = [];
let a3 = 0;
let deskIcon = document.getElementById('deskIcon');
deskIcon.addEventListener('mousedown', () => {
    const P = [
        PositionX,
        PositionY
    ];
    let selectBox = document.getElementById('select-box');
    selectBox.setAttribute('style', `top: ${PositionY}px; left: ${PositionX}px;`);
    selectBox.style.display = 'inline';
    a2[a3] = setInterval(() => {
        if (!(P[0] > PositionX || P[1] > PositionY)) {
            selectBox.setAttribute('style', `top: ${P[1]}px; left: ${P[0]}px;`);
            let attribute = selectBox.getAttribute('style');
            selectBox.setAttribute('style', `${attribute} display: inline; width: ${PositionX - P[0]}px; height: ${PositionY - P[1]}px;`);
        } else if (!(P[0] > PositionX)) {
            selectBox.setAttribute('style', `left: ${P[0]}px; top: ${PositionY}px; width: ${Math.abs(PositionX - P[0])}px; height: ${Math.abs(PositionY - P[1])}px; display: inline;`);
        } else if (!(P[1] > PositionY)) {
            selectBox.setAttribute('style', `left: ${PositionX}px; top: ${P[1]}px; width: ${Math.abs(PositionX - P[0])}px; height: ${Math.abs(PositionY - P[1])}px; display: inline;`);
        } else {
            selectBox.setAttribute('style', `left: ${PositionX}px; top: ${PositionY}px; width: ${Math.abs(PositionX - P[0])}px; height: ${Math.abs(PositionY - P[1])}px; display: inline;`);
        }
    }, 1);
    a3++;
});
addEventListener('mouseup', () => {
    let selectBox = document.getElementById('select-box');
    selectBox.setAttribute('style', '');
    for (let i = 0; i < a2.length; i++) {
        clearInterval(a2[i]);
    }
});
