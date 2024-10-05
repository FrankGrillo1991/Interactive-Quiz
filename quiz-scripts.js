document.addEventListener('DOMContentLoaded', (event) => {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextElement = document.getElementById('next-button');
    let currentIndex = 0;

    const questions = [
        {
            question: "What is the capital of France?",
            options: ["New York", "London", "Paris", "Dubai"],
            answer: "paris"
        },
        // More questions...
    ];

    function loadQuestion(questionIndex) {
        const question = questions[questionIndex];
        questionElement.textContent = question.question;
        optionsElement.innerHTML = '';
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('btn', 'btn-option');
            button.onclick = () => selectOption(option);
            optionsElement.appendChild(button);
        });
    }

    function selectOption(selected) {
        const question = questions[currentQuestionIndex];
        if (selected === question.answer) {
            alert('Correct!');
        } else {
            alert('Wrong!');
        }
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            alert('Quiz completed!');
            currentQuestionIndex = 0;
        }
        loadQuestion(currentQuestionIndex);
    });

    // Load the first question
    loadQuestion(currentQuestionIndex);
});