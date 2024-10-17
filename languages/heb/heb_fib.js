let text = document.getElementById("text").textContent;
console.log(`here for the q: ${text}`)
let phrases = [];
let correctAnswers = [];
let currentAnswers = [];
let wordButtons = [];
let answerHistory = [];
let confetti;


/**
Extracts phrases enclosed in curly braces from the given text.
@param {string} text - The input text containing phrases in curly braces.
@returns {text: string, phrases: string[][]} An object containing the modified text and extracted phrases.
*/
function extractPhrases(text) {
    const regex = /\{(.*?)\}/g; // Regular expression to match phrases inside curly braces
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
    ({ text, phrases } = extractPhrases(text));
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
    while (words == correctAnswers) {
        shuffleArray(words);
    }
    const wordBank = document.getElementById('wordBank');
    words.forEach(word => {
        const button = document.createElement('button');
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
    document.getElementById('text').innerHTML = displayText;
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
function checkAnswers() {
    const result = document.getElementById('result');
    result.classList.add('checking');
    result.textContent = 'בודק תשובות...';
    const checkButt = document.getElementById("checkButton");

    let correct = 0;
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
        const x = buttonRect.left + buttonRect.width / 2 - canvasRect.left;
        const y = buttonRect.top - canvasRect.top;
        confetti.burst(x, y);
        }
    }, 750);
}
class Confetti {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
    }

    createParticles(x, y, amount) {
        this.particles = [];
        for (let i = 0; i < amount; i++) {
            this.particles.push({
                x: x,
                y: y,
                xVel: Math.random() * 10 - 5,
                yVel: Math.random() * -15 - 5,
                size: Math.random() * 5 + 5,
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

    updateParticles() {
        this.particles.forEach((p) => {
            p.x += p.xVel;
            p.y += p.yVel;
            p.yVel += 0.1;
            p.size -= 0.05;
        });
        this.particles = this.particles.filter(p => p.size > 0);
    }

    animate() {
        this.drawParticles();
        this.updateParticles();
        if (this.particles.length > 0) {
            requestAnimationFrame(this.animate.bind(this));
        }
    }

    burst(x, y) {
        clearTimeout(this.timeoutId);
        this.createParticles(x, y, 100);
        this.animate();
        // Stop the animation after 1.5 seconds
        this.timeoutId = setTimeout(() => {
            this.particles = [];
        }, 1500);
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
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}


initializeConfetti();
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

initializeGame();