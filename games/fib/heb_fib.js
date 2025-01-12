// switched to a template to easily swap out the instructions. 
// template is on the same page as the html 
/*
function loadGame() {
    let gameScr = document.createElement("script");
    gameScr.id = "gameScr";
    gameScr.src = local ? '/languages/heb/heb_fib.js' : '/hablemos_oso/languages/heb/heb_fib.js'
    document.getElementById("app").appendChild(gameScr);
}
*/


let rawText = document.getElementById("text").textContent;
console.log(`here for the q: ${rawText}`)
let phrases = [];
let correctAnswers = [];
let currentAnswers = [];
let wordButtons = [];
let answerHistory = [];
let confetti;
/* TODO modify to enable user to toggle hint visibilty*/

/**
Extracts phrases enclosed in curly braces from the given text.
@param {string} text - The input text containing phrases in curly braces.
@returns {text: string, phrases: string[][]} An object containing the modified text and extracted phrases.
*/
function extractPhrases(text) {
    const regex = /\{(.*?)\}/gs; // Regular expression to match phrases inside curly braces
    const matches = text.match(regex); // Find all matches

    if (!matches) {
            return {text: text, phrases: [] };// No phrases found
    }

    // Extract the content inside the curly braces and split by colons
    const resultArrays = matches.map(match => {
        const content = match.slice(1, -1); // Remove the braces
        return content.split(':').map(entry => entry.trim()); // Split by colon and trim whitespace
    });

    // Replace each match with {i}, where i is the index base 0
    let currentIndex = -1;
    text = text.replace(regex, (match) => {
    currentIndex++;
    return `{${currentIndex}}`
    });

    return {text: text, phrases: resultArrays };
}

/**
Shuffles the elements of an array in place.
    @param {Array} array - The array to be shuffled.
*/
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
Initializes the game by setting up the word bank and necessary variables.
*/
function initializeGame() {
    ({ text, phrases } = extractPhrases(rawText));
    console.log(`text: ${text}`);
    console.log(`phrases: ${phrases}`);
    let tp0 = Array.isArray(phrases[0]);
    console.log(`typeof phrases[0]: ${tp0}`);
    correctAnswers = phrases.map((phrase) => phrase[0]);
    console.log(`correctAnswers: ${correctAnswers}`);
    currentAnswers = new Array(correctAnswers.length).fill('');
    console.log(`currentAnswers: ${currentAnswers}`);
    // Populate word bank. Create and store buttons
    let words = [...correctAnswers];
    let preventInfLoop = 0;
    while (JSON.stringify(words) == JSON.stringify(correctAnswers)) {
        shuffleArray(words);
        if (preventInfLoop++>1001) return
    }
    const wordBank = document.getElementById('wordBank');
    words.forEach(word => {
        const button = document.createElement('button');
        button.classList.add('missingPhrase');
        button.textContent = word; // potentially a slightly different version of the word like the inf
        button.onclick = () => selectWord(word, button);
        wordBank.appendChild(button);
        wordButtons.push(button);
    });

    updateText();
}

/**
Handles the selection of a word from the word bank.
@param {string} word - The selected word.
@param {HTMLButtonElement} button - The button element that was clicked.
*/
function selectWord(word, button) {
    const index = currentAnswers.indexOf('');
    if (index !== -1) {
        currentAnswers[index] = word;
        button.disabled = true;
        answerHistory.push({index, word, button});
        updateText();
        document.getElementById('undoButton').disabled = false;
        // clear the graded choice formatting for this item
        const span = document.getElementsByClassName('blank')[index];
        span.classList.remove('incorrect');
        span.classList.remove('correct');
    }
}

/**
Updates the displayed text with the current answers.
*/
function updateText() {
    let displayText = text;
    for (let i = 0; i < correctAnswers.length; i++) {
        const placeholder = `{${i}}`;
        const noanswerFill = phrases[i][1] ? phrases[i][1] : `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`; // blank or hint
        const replacement = currentAnswers[i]
        ? `<span class="blank filled" onclick="clearAnswer(${i})">${currentAnswers[i]}</span>`
        : `<span class="blank" onclick="clearAnswer(${i})">${noanswerFill}</span>`;
        displayText = displayText.replace(placeholder, replacement);
    }
    function wrapInPTags(text) {
        // Split the input text by newline characters 
        const lines = text.split('\n\n'); // Wrap each line in <p> tags 
        const wrappedLines = lines.map(line => `<p>${line}</p>`);
        // Join the wrapped lines back into a single string
        return wrappedLines.join('');
    }
    // TODO insert function call to 
    document.getElementById('text').innerHTML = wrapInPTags(displayText);
}

/**
Clears the answer at the specified index.
@param {number} index - The index of the answer to clear.
*/
function clearAnswer(index) {
    if (currentAnswers[index]) {
        const wordButton = wordButtons.find(button => button.textContent === currentAnswers[index]);
        if (wordButton) wordButton.disabled = false;
        currentAnswers[index] = '';
        updateText();
        answerHistory = answerHistory.filter(item => item.index !== index);
        document.getElementById('undoButton').disabled = answerHistory.length === 0;
    }
}

/**
Undoes the last answer selection.
*/
function undo() {
    if (answerHistory.length > 0) {
        const lastAnswer = answerHistory.pop();
        currentAnswers[lastAnswer.index] = '';
        lastAnswer.button.disabled = false;
        updateText();
        document.getElementById('undoButton').disabled = answerHistory.length === 0;
    }
}

/**
Checks the user's answers and displays the result.
Trigger celebratory animation when all correct.
*/
function checkAnswers(correct=0) {
    const result = document.getElementById('result');
    result.classList.add('checking');
    result.textContent = 'בודק תשובות...';
    const checkButt = document.getElementById("checkButton");

    correct = correct || 0;
    correct = correct && correctAnswers.length;
    const blanks = document.getElementsByClassName('blank');
    setTimeout(() => {
        result.classList.remove('checking');
        for (let i = 0; i < correctAnswers.length; i++) {
            const span = blanks[i];
            if (currentAnswers[i] === correctAnswers[i]) {
                correct++;
                span.classList.remove('incorrect');
                span.classList.add('correct');
            } else {
                span.classList.add('incorrect');
                span.classList.remove('correct');
            }
        }
        result.textContent = `יש ${correct} תשובות נכונות מתוך ${correctAnswers.length}. נסו שוב!`;

        // Trigger confetti animation if all answers are correct
        if (correct === correctAnswers.length) {
            // const rect = resultElement.getBoundingClientRect();//return here
            result.textContent = 'כל הכבוד! כל התשובות נכונות.'; // update
            const checkButton = document.getElementById("checkButton");
            const canvas = document.getElementById('confettiCanvas');
            const canvasRect = canvas.getBoundingClientRect();
            const buttonRect = checkButton.getBoundingClientRect();

            // Calculate the position of the button relative to the canvas
            //const x = buttonRect.left + buttonRect.width / 2 - canvasRect.left;
            const x = checkButton.offsetLeft;
            //const y = buttonRect.top - canvasRect.top;
            const y = checkButton.offsetTop;
            console.log(`x: ${x}`);
            console.log(`y: ${y}`);
            // confetti.burst(x, y);
            confetti.burst(x, y);
        }
    }, 750);
}
class Confetti {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4',
            '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
        this.start = 0;
        this.lastT = 0;
        this.timeoutId = null;
    }

    burst(x, y) {
        resizeCanvas();
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
        //this.createParticles(x, y, 100);
        this.start = 0;
        this.lastT = 0;

        this.createParticles(x, y, 80);
        const intervalId = setInterval(() =>this.createParticles(x, y, 20), 100);
        setTimeout(() => { clearInterval(intervalId) }, 1050);
        //this.animate();
        requestAnimationFrame(this.animate.bind(this));

        // Stop the animation after 5 seconds
        this.timeoutId = setTimeout(() => {
            console.log(this.particles);
            this.particles = [];
            this.start = 0;
            this.lastT = 0;
        }, 5100);
    }

    createParticles(x, y, amount) {
        for (let i = 0; i < amount; i++) {
            this.particles.push({
                x: x,
                y: y,
                xVel: (Math.random() * - this.canvas.width / 5 - this.canvas.width / 16),
                yVel: (Math.random() * - 300 - 400), // Random upward velocity
                size: Math.random() * 10 + 5,
                color: this.colors[Math.floor(Math.random() * this.colors.length)]
            });
        }
    }

    drawParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles.forEach((p) => {
            this.ctx.beginPath();
            this.ctx.fillStyle = p.color;
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    updateParticles(dt) {
        this.particles.forEach((p) => {
            p.x += p.xVel * dt;
            p.y += p.yVel * dt;
            p.yVel += 400 * dt; // Gravity
            p.size -= 3 * dt; // Shrink particles over time
        });
        this.particles = this.particles.filter(p => p.size > 0);
    }

    animate(timestamp) {
        if (!this.start) this.start = timestamp;
        if (!this.lastT) this.lastT = timestamp;
        const dt = (timestamp - this.lastT) / 1000;//ms
        this.lastT = timestamp;
        this.lastT = timestamp;
        this.drawParticles();
        this.updateParticles(dt);
        if (this.particles.length > 0) {
            requestAnimationFrame(this.animate.bind(this));
        }
    }


}

function initializeConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    confetti = new Confetti(canvas);
}

function resizeCanvas() {
    const canvas = document.getElementById('confettiCanvas');
    const contEle = document.getElementById('fibContainer');
    canvas.width = contEle.offsetWidth;
    canvas.height = contEle.offsetHeight;
}


initializeConfetti();
//resizeCanvas();
//window.addEventListener('resize', resizeCanvas);

initializeGame();