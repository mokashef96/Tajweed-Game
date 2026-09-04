// المنهج الثنائي اللغة (عربي / إنجليزي)
const syllabus = [
    {
        chapter: "أحكام النون الساكنة والتنوين",
        branches: [
            {
                title: "1. الإظهار الحلقي (Izhar Halqi)",
                lesson: "💡 الإظهار الحلقي يعني نطق النون الساكنة بوضوح بدون غنة زائدة إذا جاء بعدها أحد حروف الحلق الستة: (ء، هـ، ع، ح، غ، خ).",
                questions: [
                    { 
                        qAr: "كم عدد حروف الإظهار الحلقي؟", 
                        qEn: "How many letters are there in Izhar Halqi?",
                        options: [
                            { ar: "4 حروف", en: "4 letters" },
                            { ar: "5 حروف", en: "5 letters" },
                            { ar: "6 حروف", en: "6 letters" }
                        ], 
                        aAr: "6 حروف" 
                    },
                    { 
                        qAr: "ما حكم النون في كلمة (مِنْهُمْ)؟", 
                        qEn: "What is the Tajweed rule in the word (Minhum)?",
                        options: [
                            { ar: "إخفاء", en: "Ikhfa" },
                            { ar: "إظهار حلقي", en: "Izhar Halqi" },
                            { ar: "إدغام", en: "Idgham" }
                        ], 
                        aAr: "إظهار حلقي" 
                    }
                ]
            },
            {
                title: "2. الإدغام (Idgham)",
                lesson: "💡 الإدغام هو إدخال النون الساكنة في الحرف الذي بعدها. وحروفه مجموعة في كلمة (يرملون).\nينقسم إلى: إدغام بغنة (ينمو) وإدغام بغير غنة (ل، ر).",
                questions: [
                    { 
                        qAr: "ما هي الكلمة التي تجمع حروف الإدغام؟",
                        qEn: "Which word gathers the letters of Idgham?",
                        options: [
                            { ar: "قطب جد", en: "Qutb Jad" },
                            { ar: "يرملون", en: "Yarmaloun" },
                            { ar: "ينمو", en: "Yanmou" }
                        ], 
                        aAr: "يرملون" 
                    },
                    { 
                        qAr: "ما هي حروف الإدغام بغنة؟",
                        qEn: "What are the letters of Idgham with Ghunnah?",
                        options: [
                            { ar: "ينمو", en: "Yanmou" },
                            { ar: "اللام والراء", en: "L & R" },
                            { ar: "حروف الحلق", en: "Throat letters" }
                        ], 
                        aAr: "ينمو" 
                    }
                ]
            }
        ]
    },
    {
        chapter: "أحكام الميم الساكنة",
        branches: [
            {
                title: "1. الإخفاء الشفوي (Ikhfa Shafawi)",
                lesson: "💡 الإخفاء الشفوي: إذا جاء بعد الميم الساكنة حرف (الباء)، تُخفى الميم مع غنة بمقدار حركتين.",
                questions: [
                    { 
                        qAr: "ما هو الحرف الوحيد للإخفاء الشفوي؟",
                        qEn: "What is the only letter for Ikhfa Shafawi?",
                        options: [
                            { ar: "الميم", en: "Meem" },
                            { ar: "الباء", en: "Baa" },
                            { ar: "النون", en: "Noon" }
                        ], 
                        aAr: "الباء" 
                    }
                ]
            }
        ]
    }
];

let cIdx = 0; 
let bIdx = 0; 
let qIdx = 0; 
let needsLesson = true; 
let currentPosition = 1;
let isMoving = false; // لمنع النقر أثناء الحركة

const snakesAndLadders = {
    4: { to: 14, msg: "🪜 سلم الإتقان!" },
    9: { to: 31, msg: "🪜 صعود ممتاز!" },
    17: { to: 7, msg: "🐍 تراجع للمراجعة!" },
    20: { to: 38, msg: "🪜 تقدم رائع!" },
    45: { to: 22, msg: "🐍 ركز أكثر!" }
};

// 1. التهيئة وبناء الفهرس والرقعة
window.onload = () => {
    createBoard();
    populateIndex();
};

function createBoard() {
    const board = document.getElementById('board');
    for (let row = 9; row >= 0; row--) {
        for (let col = 0; col < 10; col++) {
            let num = (row % 2 === 0) ? (row * 10 + 10 - col) : (row * 10 + col + 1);
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = `cell-${num}`;
            cell.innerText = num;
            if(snakesAndLadders[num]) {
                cell.innerText += snakesAndLadders[num].to > num ? " 🪜" : " 🐍";
            }
            board.appendChild(cell);
        }
    }
    const player = document.createElement('div');
    player.id = 'player';
    document.getElementById('cell-1').appendChild(player);
}

function populateIndex() {
    const select = document.getElementById('lesson-index');
    select.innerHTML = '';
    syllabus.forEach((chap, cIndex) => {
        let optGroup = document.createElement('optgroup');
        optGroup.label = chap.chapter;
        chap.branches.forEach((branch, bIndex) => {
            let opt = document.createElement('option');
            opt.value = `${cIndex}-${bIndex}`;
            opt.innerText = branch.title;
            optGroup.appendChild(opt);
        });
        select.appendChild(optGroup);
    });
}

// التغيير من الفهرس مباشرة
function jumpToLesson() {
    const val = document.getElementById('lesson-index').value;
    const [c, b] = val.split('-');
    cIdx = parseInt(c);
    bIdx = parseInt(b);
    qIdx = 0;
    needsLesson = true;
    document.getElementById('message').innerText = `تم اختيار: ${syllabus[cIdx].branches[bIdx].title}. اسحب بطاقة!`;
}

function drawCard() {
    if(isMoving) return;
    if (cIdx >= syllabus.length) {
        alert("🎉 ختمت جميع الأبواب!");
        return;
    }
    // تحديث الفهرس ليعكس المكان الحالي تلقائياً
    document.getElementById('lesson-index').value = `${cIdx}-${bIdx}`;
    
    if (needsLesson) showLessonUI(false);
    else showQuestion();
}

function showLessonUI(isRetry) {
    const branchData = syllabus[cIdx].branches[bIdx];
    document.getElementById('lesson-title').innerText = branchData.title;
    
    let textToShow = branchData.lesson;
    if (isRetry) {
        textToShow = "❌ إجابة خاطئة! راجع الحكم:\n\n" + textToShow;
        document.getElementById('understand-btn').classList.add('hidden');
        document.getElementById('close-fail-btn').classList.remove('hidden');
    } else {
        document.getElementById('understand-btn').classList.remove('hidden');
        document.getElementById('close-fail-btn').classList.add('hidden');
    }
    
    document.getElementById('lesson-text').innerText = textToShow;
    document.getElementById('lesson-section').classList.remove('hidden');
    document.getElementById('question-section').classList.add('hidden');
    document.getElementById('quiz-modal').classList.remove('hidden');
}

function showQuestion() {
    const chapterData = syllabus[cIdx];
    const branchData = chapterData.branches[bIdx];
    const questionData = branchData.questions[qIdx];
    
    document.getElementById('chapter-branch-label').innerText = `${chapterData.chapter} - ${branchData.title}`;
    document.getElementById('question-counter').innerText = `السؤال ${qIdx + 1} من ${branchData.questions.length}`;
    
    // وضع النصوص باللغتين
    document.getElementById('question-text-ar').innerText = questionData.qAr;
    document.getElementById('question-text-en').innerText = questionData.qEn;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    questionData.options.forEach(opt => {
        const btn = document.createElement('button');
        // زر يحتوي على لغتين
        btn.innerHTML = `<div class="opt-ar">${opt.ar}</div><div class="opt-en" dir="ltr">${opt.en}</div>`;
        btn.onclick = () => checkAnswer(opt.ar, questionData.aAr);
        optionsDiv.appendChild(btn);
    });
    
    document.getElementById('lesson-section').classList.add('hidden');
    document.getElementById('question-section').classList.remove('hidden');
    document.getElementById('quiz-modal').classList.remove('hidden');
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        document.getElementById('quiz-modal').classList.add('hidden');
        document.getElementById('message').innerText = "✅ إجابة صحيحة! ارمي النرد.";
        
        document.getElementById('ask-btn').disabled = true;
        document.getElementById('dice-btn').disabled = false;
        
        qIdx++;
        needsLesson = false;
        
        if (qIdx >= syllabus[cIdx].branches[bIdx].questions.length) {
            qIdx = 0;
            bIdx++;
            needsLesson = true; 
            if (bIdx >= syllabus[cIdx].branches.length) {
                bIdx = 0;
                cIdx++;
            }
        }
    } else {
        needsLesson = true; 
        showLessonUI(true); 
    }
}

function closeModalAndWait() {
    document.getElementById('quiz-modal').classList.add('hidden');
    document.getElementById('message').innerText = "راجعنا الحكم، اسحب بطاقة للإعادة.";
}

function rollDice() {
    const diceDisplay = document.getElementById('dice-display');
    const diceBtn = document.getElementById('dice-btn');
    
    diceBtn.disabled = true;
    isMoving = true; // قفل الأزرار أثناء الحركة
    diceDisplay.classList.add('rolling');
    document.getElementById('message').innerText = "جاري رمي النرد...";
    
    setTimeout(() => {
        diceDisplay.classList.remove('rolling');
        const diceValue = Math.floor(Math.random() * 6) + 1;
        const diceIcons = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
        diceDisplay.innerText = diceIcons[diceValue - 1];
        
        document.getElementById('message').innerText = `🎲 حصلت على ${diceValue}!`;
        
        let targetPosition = currentPosition + diceValue;
        if(targetPosition > 100) targetPosition = 100;
        
        // استدعاء دالة الحركة خطوة بخطوة
        movePlayerStepByStep(currentPosition, targetPosition, () => {
            currentPosition = targetPosition;
            
            // التحقق من السلالم والثعابين بعد وصوله
            setTimeout(() => {
                if (snakesAndLadders[currentPosition]) {
                    const jumpData = snakesAndLadders[currentPosition];
                    document.getElementById('message').innerText = jumpData.msg;
                    
                    movePlayerStepByStep(currentPosition, jumpData.to, () => {
                        currentPosition = jumpData.to;
                        isMoving = false;
                        document.getElementById('ask-btn').disabled = false;
                    });
                } else {
                    if(currentPosition === 100) {
                        document.getElementById('message').innerText = "🎉 مبروووك! لقد وصلت للنهاية!";
                    } else {
                        isMoving = false;
                        document.getElementById('ask-btn').disabled = false;
                    }
                }
            }, 500);
        });
    }, 1000);
}

// دالة الحركة خطوة بخطوة بالأنيميشن
function movePlayerStepByStep(start, end, onComplete) {
    let current = start;
    let step = (end > start) ? 1 : -1; // تحديد اتجاه الحركة صعوداً أو نزولاً (في حال الثعبان)
    
    let timer = setInterval(() => {
        if (current !== end) {
            current += step;
            const player = document.getElementById('player');
            const targetCell = document.getElementById(`cell-${current}`);
            
            // تأثير القفز
            player.classList.add('jumping');
            if(targetCell) targetCell.appendChild(player);
            
            setTimeout(() => {
                player.classList.remove('jumping');
            }, 150); // إزالة تأثير القفز سريعاً
            
        } else {
            clearInterval(timer);
            if(onComplete) onComplete();
        }
    }, 400); // سرعة الحركة بين كل مربع (400 ملي ثانية)
}
