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
})