////////// game ////////
let game = document.getElementById('game');

////// login ////////
let login = document.getElementById('login');
let btnLogin = document.getElementById('btn-login');
let inp = document.getElementById('name');
let check = document.getElementById('check');

///// game ///////////

let setting = document.getElementById('setting');
let NavBar = document.getElementById('nav-bar');
let boxGame = document.getElementById('box-game');
let exit = document.getElementById('Exit');
let nvTheme = document.getElementById('nv-theme');
let h1 = document.getElementById('rr');
let gm = document.getElementById('rndom');
////////// audio /////////
let music = document.getElementById('mu');
let loginMusic = document.getElementById('login-music');
let song = document.getElementById('song');
let pop = document.getElementById('pop');
//////////////////////// event login /////////

document.addEventListener('click',function(){
    pop.play()
});

/////////////////// ON click //////////// 

check.onclick = function(){
    btnLogin.style.backgroundColor = '#FD105E';
    
    btnLogin.onclick = function(){
    setTimeout(function(){
        btnLogin.style.scale = '0';
        inp.style.left = '-600px';
        login.classList.add('hide');
        game.style.backgroundImage = 'none';
        boxGame.classList.remove('hide');
    },700)
    localStorage.setItem('dataLogin',JSON.stringify(dataLogin));
}}
/////////////////// Array for Data ////////
let dataLogin = [];
///////////// localStorage ////////
if(localStorage.getItem('dataLogin')!= null){
    dataLogin = JSON.parse(localStorage.getItem('dataLogin'));
}else{
    dataLogin = [];
};

if(localStorage.getItem('dataLogin') != null){
    login.classList.add('hide');
    boxGame.classList.remove('hide');
    setting.classList.remove('hide');
};

btnLogin.onclick = function(){
    let nameValue = inp.value;
    dataLogin.push( nameValue );
};
setting.onclick = function(){
    this.style.transition = '1s'
    this.style.rotate = '90deg';

    setTimeout(()=>{
        NavBar.style.transition = '8s';
    NavBar.classList.remove('hide');
    setting.classList.add('hide');
    exit.classList.remove('hide')
    },1100)
};

exit.onclick = function(){
    NavBar.classList.add('hide');
    this.classList.add('hide');
    setting.classList.remove('hide');
};

let veru = Math.floor(Math.random()*15)+1;
let btnEnd = document.getElementById('btn-end');
let span = document.getElementById('span');
let input = document.getElementById('num');
let H1 = document.getElementById('haaa') ;
let H2 = document.getElementById('h2') ;
let cantent = 2 ;

nvTheme.onclick = function(){
    game.style.backgroundColor = 'wheat';

}
boxGame.onclick = function(){
    this.style.transition = '2s';
    this.style.scale = '0';
    this.style.background = '#333333';
    boxGame.innerText = '';
    setTimeout(()=>{
        this.classList.add('hide')
        gm.classList.remove('hide')
        
    },1300)  
}
btnEnd.onclick = function(){
    span.innerText = cantent -- ;
    
    if(input.value == veru){
        H2.innerText = 'You win';
        setTimeout(()=>{
            alert('you win')
        },900)
    }
    if(input.value > veru){
        H1.innerText = 'less 👇'
    }
    else if(input.value < veru){
        H1.innerText = 'higher ✈👆'
    }
    if( span.innerText == 0){
        span.innerText = '';
        btnEnd.classList.add('hide');
        H2.innerText = ` You Lost , the number is ${veru}`
    };
}
