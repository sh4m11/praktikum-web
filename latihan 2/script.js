const questions = [
    { question: "Apa ibu kota Indonesia?", options: ["Jakarta", "Surabaya", "Bandung", "Medan"], correct: 0 },
    { question: "Siapa penemu lampu pijar?", options: ["Nikola Tesla", "Thomas Edison", "Albert Einstein", "Alexander Graham Bell"], correct: 1 },
    { question: "Planet terbesar di tata surya adalah?", options: ["Bumi", "Mars", "Jupiter", "Venus"], correct: 2 },
    { question: "Berapa jumlah warna pada pelangi?", options: ["5", "6", "7", "8"], correct: 2 },
    { question: "Hewan tercepat di darat adalah?", options: ["Cheetah", "Kuda", "Singa", "Macan"], correct: 0 },
    { question: "Lambang kimia untuk air adalah?", options: ["O2", "H2O", "CO2", "NaCl"], correct: 1 },
    { question: "Siapa penulis novel 'Harry Potter'?", options: ["J.K. Rowling", "George Orwell", "Mark Twain", "Jane Austen"], correct: 0 },
    { question: "Ibu kota Jepang adalah?", options: ["Osaka", "Tokyo", "Kyoto", "Hokkaido"], correct: 1 },
    { question: "2+2 x 2 = ?", options: ["6", "8", "4", "2"], correct: 0 },
    { question: "Bulan adalah satelit dari?", options: ["Mars", "Bumi", "Venus", "Jupiter"], correct: 1 }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const feedbackElement = document.getElementById('feedback');

    feedbackElement.textContent = '';

    // Cek apakah semua soal telah selesai
    if (currentQuestionIndex >= questions.length) {
        showScore();
        return;
    }

    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;

    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'btn btn-outline-primary';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selected) {
    const feedbackElement = document.getElementById('feedback');
    const question = questions[currentQuestionIndex];

    if (selected === question.correct) {
        feedbackElement.textContent = 'Jawaban Benar!';
        feedbackElement.className = 'text-success';
        score++;
    } else {
        feedbackElement.textContent = 'Jawaban Salah!';
        feedbackElement.className = 'text-danger';
    }

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion(); // Pindah ke soal berikutnya setelah 1 detik
    }, 1000);
}

function showScore() {
    document.getElementById('quiz-container').style.display = 'none';
    const scoreContainer = document.getElementById('score-container');
    scoreContainer.style.display = 'block';
    document.getElementById('score').textContent = score;
}

loadQuestion();
