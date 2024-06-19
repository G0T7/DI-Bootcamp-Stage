let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    loadQuestion(currentQuestionIndex);
});

document.getElementById('submit-btn').addEventListener('click', submitAnswer);

async function loadQuestion(index) {
    try {
        const response = await fetch(`/api/question/${index}`);
        const question = await response.json();
        displayQuestion(question);
    } catch (error) {
        console.error('Error loading question:', error);
    }
}

function displayQuestion(question) {
    document.getElementById('question').textContent = question.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('form-check');
        optionElement.innerHTML = `
            <input class="form-check-input" type="radio" name="option" value="${option}">
            <label class="form-check-label">${option}</label>
        `;
        optionsDiv.appendChild(optionElement);
    });
}

async function submitAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        const response = await fetch(`/api/question/${currentQuestionIndex}`);
        const question = await response.json();
        const isCorrect = answer === question.answer;
        if (isCorrect) {
            score++;
            document.getElementById('feedback').textContent = 'Correct!';
            document.getElementById('feedback').style.color = 'green';
        } else {
            document.getElementById('feedback').textContent = 'Incorrect!';
            document.getElementById('feedback').style.color = 'red';
        }
        document.getElementById('score').textContent = `Score: ${score}`;
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(() => {
                loadQuestion(currentQuestionIndex);
                document.getElementById('feedback').textContent = '';
            }, 2000);
        } else {
            document.getElementById('question-container').innerHTML = '<p>Quiz Complete!</p>';
            document.getElementById('submit-btn').style.display = 'none';
        }
    } else {
        alert('Please select an option!');
    }
}
