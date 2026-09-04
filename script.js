// المنهج مقسم لأبواب وتفرعات
const syllabus = [
    {
        chapter: "أحكام النون الساكنة والتنوين",
        branches: [
            {
                title: "1. الإظهار الحلقي",
                lesson: "💡 الإظهار الحلقي يعني نطق النون الساكنة بوضوح بدون غنة زائدة إذا جاء بعدها أحد حروف الحلق الستة: (ء، هـ، ع، ح، غ، خ).",
                questions: [
                    { q: "كم عدد حروف الإظهار الحلقي؟", options: ["4 حروف", "5 حروف", "6 حروف"], a: "6 حروف" },
                    { q: "ما هي أول حرفين من حروف الإظهار في التحفة؟", options: ["همز فهاء", "عين فحاء", "غين فخاء"], a: "همز فهاء" },
                    { q: "ما حكم النون في كلمة (مِنْهُمْ)؟", options: ["إخفاء", "إظهار حلقي", "إدغام"], a: "إظهار حلقي" },
                    { q: "ما حكم التنوين في (سَمِيعٌ عَلِيمٌ)؟", options: ["إظهار حلقي", "إقلاب", "إدغام"], a: "إظهار حلقي" },
                    { q: "لماذا سُمي إظهاراً حلقياً؟", options: ["تخرج من الشفتين", "تخرج من الحلق", "تخرج من اللسان"], a: "تخرج من الحلق" }
                ]
            },
            {
                title: "2. الإدغام",
                lesson: "💡 الإدغام هو إدخال النون الساكنة في الحرف الذي بعدها. وحروفه مجموعة في كلمة (يرملون).\nينقسم إلى: إدغام بغنة (ينمو) وإدغام بغير غنة (ل، ر).",
                questions: [
                    { q: "ما هي الكلمة التي تجمع حروف الإدغام؟", options: ["قطب جد", "يرملون", "ينمو"], a: "يرملون" },
                    { q: "ما هي حروف الإدغام بغنة؟", options: ["ينمو", "اللام والراء", "حروف الحلق"], a: "ينمو" },
                    { q: "ما حكم النون في (مَن يَقُولُ)؟", options: ["إدغام بغير غنة", "إدغام بغنة", "إظهار"], a: "إدغام بغنة" },
                    { q: "ما حكم النون في (مِن رَّبِّهِم)؟", options: ["إدغام بغير غنة", "إقلاب", "إخفاء"], a: "إدغام بغير غنة" },
                    { q: "كم عدد حروف الإدغام بغير غنة؟", options: ["حرفان (ل، ر)", "أربعة حروف", "ستة حروف"], a: "حرفان (ل، ر)" }
                ]
            }
        ]
    },
    {
        chapter: "أحكام الميم الساكنة",
        branches: [
            {
                title: "1. الإخفاء الشفوي",
                lesson: "💡 الإخفاء الشفوي: إذا جاء بعد الميم الساكنة حرف (الباء)، تُخفى الميم مع غنة بمقدار حركتين.",
                questions: [
                    { q: "ما هو الحرف الوحيد للإخفاء الشفوي؟", options: ["الميم", "الباء", "النون"], a: "الباء" },
                    { q: "ما حكم الميم في (تَرْمِيهِم بِحِجَارَةٍ)؟", options: ["إظهار شفوي", "إخفاء شفوي", "إدغام"], a: "إخفاء شفوي" },
                    { q: "هل الإخفاء الشفوي يحتاج إلى غنة؟", options: ["نعم، حركتين", "لا يحتاج لغنة", "غنة 4 حركات"], a: "نعم، حركتين" },
                    { q: "لماذا سمي شفوياً؟", options: ["لخروج الميم والباء من الشفتين", "لأنه يقرأ بالشفاه فقط", "لخروجه من الحلق"], a: "لخروج الميم والباء من الشفتين" },
                    { q: "أي من هذه الكلمات بها إخفاء شفوي؟", options: ["يَعْتَصِم بِاللَّهِ", "لَهُم مَّا يَشَاءُونَ", "أَمْ لَمْ تُنذِرْهُمْ"], a: "يَعْتَصِم بِاللَّهِ" }
                ]
            }
        ]
    }
];

let cIdx = 0; // مؤشر الباب (Chapter)
let bIdx = 0; // مؤشر التفرع (Branch)
let qIdx = 0; // مؤشر السؤال (Question)
let needsLesson = true; // هل يحتاج لعرض الشرح قبل السؤال؟
let currentPosition = 1;

const snakesAndLadders = {
    4: { to: 14, msg: "🪜 سلم الإتقان!" },
    9: { to: 31, msg: "🪜 صعود ممتاز!" },
    17: { to: 7, msg: "🐍 تراجع للمراجعة!" },
    20: { to: 38, msg: "🪜 تقدم رائع!" },
    45: { to: 22, msg: "🐍 ركز أكثر!" }
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

function drawCard() {
    if (cIdx >= syllabus.length) {
        alert("🎉 ختمت جميع أبواب التجويد المتاحة!");
        return;
    }
    
    if (needsLesson) {
        showLessonUI(false);
    } else {
        showQuestion();
    }
}

function showLessonUI(isRetry) {
    const branchData = syllabus[cIdx].branches[bIdx];
    document.getElementById('lesson-title').innerText = branchData.title;
    
    let textToShow = branchData.lesson;
    if (isRetry) {
        textToShow = "❌ إجابة خاطئة! راجع الحكم ثم حاول في الدور القادم:\n\n" + textToShow;
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
    document.getElementById('question-counter').innerText = `السؤال ${qIdx + 1} من 5`;
    document.getElementById('question-text').innerText = questionData.q;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    questionData.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt, questionData.a);
        optionsDiv.appendChild(btn);
    });
    
    document.getElementById('lesson-section').classList.add('hidden');
    document.getElementById('question-section').classList.remove('hidden');
    document.getElementById('quiz-modal').classList.remove('hidden');
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        // إجابة صحيحة
        document.getElementById('quiz-modal').classList.add('hidden');
        document.getElementById('message').innerText = "✅ إجابة صحيحة! ارمي النرد.";
        
        document.getElementById('ask-btn').disabled = true;
        document.getElementById('dice-btn').disabled = false;
        
        // تجهيز السؤال القادم
        qIdx++;
        needsLesson = false;
        
        if (qIdx >= 5) {
            qIdx = 0;
            bIdx++;
            needsLesson = true; // فرع جديد يعني شرح جديد
            
            if (bIdx >= syllabus[cIdx].branches.length) {
                bIdx = 0;
                cIdx++;
            }
        }
    } else {
        // إجابة خاطئة
        needsLesson = true; // إجباره على رؤية الشرح
        showLessonUI(true); // عرض الشرح بنسخة الفشل
    }
}

function closeModalAndWait() {
    document.getElementById('quiz-modal').classList.add('hidden');
    document.getElementById('message').innerText = "لا بأس، حاول مرة أخرى واسحب بطاقة.";
}

function rollDice() {
    const diceDisplay = document.getElementById('dice-display');
    const diceBtn = document.getElementById('dice-btn');
    
    diceBtn.disabled = true;
    diceDisplay.classList.add('rolling');
    document.getElementById('message').innerText = "جاري رمي النرد...";
    
    setTimeout(() => {
        diceDisplay.classList.remove('rolling');
        const diceValue = Math.floor(Math.random() * 6) + 1;
        
        const diceIcons = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
        diceDisplay.innerText = diceIcons[diceValue - 1];
        
        document.getElementById('message').innerText = `🎲 حصلت على ${diceValue}!`;
        
        currentPosition += diceValue;
        if(currentPosition > 100) currentPosition = 100;
        
        movePlayer(currentPosition);
        
        setTimeout(() => {
            if (snakesAndLadders[currentPosition]) {
                const jumpData = snakesAndLadders[currentPosition];
                document.getElementById('message').innerText += ` ${jumpData.msg}`;
                currentPosition = jumpData.to;
                movePlayer(currentPosition);
            }
            
            if(currentPosition === 100) {
                document.getElementById('message').innerText = "🎉 مبروووك! لقد وصلت للنهاية!";
                return; 
            }
            
            document.getElementById('ask-btn').disabled = false;
            
        }, 600);
        
    }, 1000);
}

function movePlayer(position) {
    const player = document.getElementById('player');
    const targetCell = document.getElementById(`cell-${position}`);
    if(targetCell) targetCell.appendChild(player);
}

window.onload = createBoard;
