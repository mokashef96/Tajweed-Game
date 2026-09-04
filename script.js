const questionsBank = [
    {
        lesson: "💡 النون الساكنة والتنوين إذا جاء بعدها حرف (م) تُدغم بغنة.",
        question: "ما حكم التجويد في (مِن مَّاءٍ)؟",
        options: ["إظهار", "إدغام بغنة", "إقلاب"],
        answer: "إدغام بغنة"
    },
    {
        lesson: "💡 حروف القلقلة مجموعة في كلمة (قطب جد)، وتُقلقل إذا كانت ساكنة.",
        question: "أي من الحروف التالية يُقلقل إذا جاء ساكناً؟",
        options: ["س", "ق", "ل"],
        answer: "ق"
    },
    {
        lesson: "💡 الإظهار الحلقي يحدث إذا جاء بعد النون الساكنة أحد حروف الحلق (ء، هـ، ع، ح، غ، خ).",
        question: "ما حكم النون في كلمة (مِنْهُمْ)؟",
        options: ["إظهار حلقي", "إخفاء", "إدغام"],
        answer: "إظهار حلقي"
    }
];

// خريطة السلالم والثعابين
const snakesAndLadders = {
    4: { to: 14, msg: "🚀 صعدت السلم!" },
    9: { to: 31, msg: "🚀 صعدت السلم!" },
    17: { to: 7, msg: "🐍 لدغك الثعبان!" },
    20: { to: 38, msg: "🚀 صعدت السلم!" },
    45: { to: 22, msg: "🐍 لدغك الثعبان!" }
};

let currentPosition = 1;

// 1. توليد رقعة اللعبة (100 مربع)
function createBoard() {
    const board = document.getElementById('board');
    // بناء شبكة 10x10 بشكل ثعباني (Boustrophedon)
    for (let row = 9; row >= 0; row--) {
        for (let col = 0; col < 10; col++) {
            let num = (row % 2 === 0) ? (row * 10 + 10 - col) : (row * 10 + col + 1);
            
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = `cell-${num}`;
            cell.innerText = num;
            
            // تمييز السلالم والثعابين بصرياً
            if(snakesAndLadders[num]) {
                cell.innerText += snakesAndLadders[num].to > num ? " 🪜" : " 🐍";
            }
            board.appendChild(cell);
        }
    }
    // إضافة اللاعب للخانة رقم 1
    const player = document.createElement('div');
    player.id = 'player';
    document.getElementById('cell-1').appendChild(player);
}

// 2. عرض السؤال
function showQuestion() {
    const randomQ = questionsBank[Math.floor(Math.random() * questionsBank.length)];
    
    document.getElementById('lesson-text').innerText = "فكر جيداً...";
    document.getElementById('question-text').innerText = randomQ.question;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = ''; 
    
    randomQ.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt, randomQ);
        optionsDiv.appendChild(btn);
    });
    
    document.getElementById('quiz-modal').classList.remove('hidden');
}

// 3. التحقق من الإجابة ومعالجة الخطأ
function checkAnswer(selected, questionData) {
    const optionsDiv = document.getElementById('options');
    
    if(selected === questionData.answer) {
        // إجابة صحيحة
        document.getElementById('quiz-modal').classList.add('hidden');
        document.getElementById('message').innerText = "✅ أحسنت! يمكنك رمي النرد الآن.";
        document.getElementById('dice-btn').disabled = false;
        document.getElementById('ask-btn').disabled = true;
    } else {
        // إجابة خاطئة: عرض الشرح
        document.getElementById('lesson-text').innerText = "❌ إجابة تحتاج مراجعة!";
        document.getElementById('question-text').innerText = questionData.lesson; // إظهار القاعدة التجويدية
        
        // تغيير الأزرار لزر "فهمت" فقط
        optionsDiv.innerHTML = '';
        const understandBtn = document.createElement('button');
        understandBtn.innerText = "فهمت الحكم 💡";
        understandBtn.style.backgroundColor = "#e67e22";
        understandBtn.onclick = () => {
            document.getElementById('quiz-modal').classList.add('hidden');
            document.getElementById('message').innerText = "لا بأس، راجعنا الحكم. حاول مرة أخرى في الدور القادم!";
        };
        optionsDiv.appendChild(understandBtn);
    }
}

// 4. رمي النرد والحركة
function rollDice() {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById('message').innerText = `🎲 حصلت على ${diceValue}!`;
    
    currentPosition += diceValue;
    if(currentPosition > 100) currentPosition = 100; // الحد الأقصى
    
    // تحريك اللاعب
    movePlayer(currentPosition);
    
    // التحقق من السلالم والثعابين بعد تأخير بسيط ليرى اللاعب حركته أولاً
    setTimeout(() => {
        if (snakesAndLadders[currentPosition]) {
            const jumpData = snakesAndLadders[currentPosition];
            document.getElementById('message').innerText += ` ${jumpData.msg}`;
            currentPosition = jumpData.to;
            movePlayer(currentPosition);
        }
        
        if(currentPosition === 100) {
            document.getElementById('message').innerText = "🎉 مبروووك! لقد فزت وختمت اللعبة!";
            return; // إنهاء اللعبة
        }

        // إعادة ضبط الأزرار
        document.getElementById('dice-btn').disabled = true;
        document.getElementById('ask-btn').disabled = false;
    }, 800);
}

// نقل عنصر اللاعب داخل المربع المناسب
function movePlayer(position) {
    const player = document.getElementById('player');
    const targetCell = document.getElementById(`cell-${position}`);
    targetCell.appendChild(player);
}

// تهيئة اللعبة عند تشغيل الصفحة
window.onload = createBoard;
