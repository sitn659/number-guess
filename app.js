let min = 1;
let max = 0;

//関数の中と外をつなぐ変数
let correct;
let score = 0 ;

function random(){
    const randomInt =Math.floor(Math.random()*(max - min +1)) + min;
    correct =randomInt;
};

const easyBtn = document.getElementById('easy');
const normalBtn = document.getElementById('normal');
const hardBtn = document.getElementById('hard');

const $difficultyover=document.getElementById('difficultyover');
const $select = document.getElementById('select');

easyBtn.addEventListener('click',()=>{
    $select.textContent='１～５０の数字を入力して答えの数字を当てよう！';
    max=50;
    random();
    $difficultyover.style.display='none';
    score = 0;
})
normalBtn.addEventListener('click',()=>{
    $select.textContent='１～１００の数字を入力して答えの数字を当てよう！';
    max=100;
    random();
    $difficultyover.style.display='none';
    score = 0;
})
hardBtn.addEventListener('click',()=>{
    $select.textContent='１～２００の数字を入力して答えの数字を当てよう！';
    max=200;
    random();
    $difficultyover.style.display='none';
    score = 0;
})

//空文字を入れておくと「文字列型である」ことが保証され、意図せぬ挙動を防ぐことができる
let message = '';

const $numbe = document.getElementById('numberBox');
const $decision = document.getElementById('decision');

const resetBtn = document.getElementById('resetModal');
const okBtn = document.getElementById('okModal');

const overlry = document.getElementById('modalover');
const overlry2 = document.getElementById('modalover2');

$decision.addEventListener ('click',() => {
    //valueでinputの中の要素を取り出してparseIntで文字列を数値に変換し、correctと比べている
    //parseIntの後ろについている数字は基数を指定している2なら2進数、10なら10進数、16なら16進数、これをつけておくことで基数を誤って認識することがなくなり安全である
    const numbe = parseInt($numbe.value,10);
    if (correct === numbe){
        score++;
        document.getElementById('modalText').textContent='正解！正解までにかかった回数は'+score+'です';
        overlry.style.display='flex';
        overlry2.style.display='none';    
    } else if (Math.abs(numbe - correct)<=10){
        message='惜しい！±10以内だよ';
        overlry2.style.display='flex';
        overlry.style.display='none';
        score++;
    } else if(correct < numbe) {
        message='不正解！入力した数字より小さいよ';
        overlry2.style.display='flex';
        overlry.style.display='none';
        score++; 
    } else {
        message='不正解！入力した数字より大きいよ';
        overlry2.style.display='flex';
        overlry.style.display='none';
        score++; 
    }
    document.getElementById('modalText2').textContent=message;   
});


okBtn.addEventListener('click',()=>{
    overlry2.style.display='none';
});

resetBtn.addEventListener('click',()=>{
    overlry.style.display='none';
    random();
    score = 0;
});
