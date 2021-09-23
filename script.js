const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const display1 = document.querySelector('#display1');
const display2 = document.querySelector('#display2');
const resetBtn = document.querySelector('#reset');
const guide = document.querySelector('#guide')
const scoreSlider = document.querySelector('#scoreSlider')
const maxScoreDisplay = document.querySelector('#maxScoreDisplay')

p1Button.disabled = true
p2Button.disabled = true
let winningScore = 0
let p1Score = 0;
let p2Score = 0;
let GameOver = false;


p1Button.addEventListener('click', function (e) {
    if (!GameOver) {
        p1Score += 1
        display1.textContent = p1Score
        if (p1Score === winningScore) {
            GameOver = true;
            display1.classList.add('text-success')
            display2.classList.add('text-danger')
            p1Button.disabled = true
            p2Button.disabled = true

        }
    }
})

p2Button.addEventListener('click', function (e) {
    if (!GameOver) {
        p2Score += 1
        display2.textContent = p2Score
        if (p2Score === winningScore) {
            GameOver = true;
            display2.classList.add('text-success')
            display1.classList.add('text-danger')
            p1Button.disabled = true
            p2Button.disabled = true
        }
    }
})

resetBtn.addEventListener('click', function (e) {
    p1Score = 0
    p2Score = 0
    scoreSlider.value = 8
    winningScore = 0
    guide.textContent = 'set max score'
    maxScoreDisplay.textContent = 'Score'
    display1.textContent = p1Score
    display2.textContent = p2Score
    display2.classList.remove('text-success', 'text-danger')
    display1.classList.remove('text-success', 'text-danger')
    GameOver = false

})

scoreSlider.addEventListener('change', function (e) {
    guide.textContent = ''
    maxScoreDisplay.textContent = scoreSlider.value
    winningScore = parseInt(scoreSlider.value)
    p1Button.disabled = false
    p2Button.disabled = false
})

