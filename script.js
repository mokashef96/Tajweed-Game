const syllabus = [
    {
        chapter: "أحكام النون الساكنة والتنوين",
        branches: [
            {
                title: "1. الإظهار الحلقي (Izhar Halqi)",
                lessonAr: "💡 الإظهار الحلقي: نطق النون بوضوح بدون غنة زائدة إذا جاء بعدها أحد حروف الحلق الستة: (ء، هـ، ع، ح، غ، خ).",
                lessonEn: "💡 Izhar Halqi: Pronouncing the Noon clearly without extra Ghunnah if it is followed by one of the six throat letters: (Hamzah, Haa, Ain, Haa, Ghayn, Khaa).",
                questions: [
                    { qAr: "كم عدد حروف الإظهار الحلقي؟", qEn: "How many letters in Izhar Halqi?", options: [{ ar: "4 حروف", en: "4 letters" }, { ar: "5 حروف", en: "5 letters" }, { ar: "6 حروف", en: "6 letters" }], aAr: "6 حروف" },
                    { qAr: "ما حكم النون في (مِنْهُمْ)؟", qEn: "What is the rule in (Minhum)?", options: [{ ar: "إخفاء", en: "Ikhfa" }, { ar: "إظهار حلقي", en: "Izhar Halqi" }, { ar: "إدغام", en: "Idgham" }], aAr: "إظهار حلقي" },
                    { qAr: "من أين تخرج حروف الإظهار؟", qEn: "Where do Izhar letters come from?", options: [{ ar: "الشفتين", en: "Lips" }, { ar: "الحلق", en: "Throat" }, { ar: "اللسان", en: "Tongue" }], aAr: "الحلق" }
                ]
            },
            {
                title: "2. الإدغام (Idgham)",
                lessonAr: "💡 الإدغام: إدخال النون في الحرف الذي بعدها. حروفه (يرملون). ينقسم لـ: إدغام بغنة (ينمو) وبغير غنة (ل، ر).",
                lessonEn: "💡 Idgham: Merging the Noon into the following letter. Its letters are in (Yarmaloun). Divided into: Idgham with Ghunnah (Yanmou) and without Ghunnah (L, R).",
                questions: [
                    { qAr: "ما الكلمة التي تجمع حروف الإدغام؟", qEn: "Which word gathers Idgham letters?", options: [{ ar: "قطب جد", en: "Qutb Jad" }, { ar: "يرملون", en: "Yarmaloun" }, { ar: "ينمو", en: "Yanmou" }], aAr: "يرملون" },
                    { qAr: "ما حكم (مَن يَقُولُ)؟", qEn: "What is the rule in (May-Yaqool)?", options: [{ ar: "إدغام بغير غنة", en: "Idgham without Ghunnah" }, { ar: "إدغام بغنة", en: "Idgham with Ghunnah" }, { ar: "إظهار", en: "Izhar" }], aAr: "إدغام بغنة" },
                    { qAr: "ما حكم (مِن رَّبِّهِم)؟", qEn: "What is the rule in (Mir-Rabbihim)?", options: [{ ar: "إدغام بغير غنة", en: "Idgham w/o Ghunnah" }, { ar: "إقلاب", en: "Iqlab" }, { ar: "إخفاء", en: "Ikhfa" }], aAr: "إدغام بغير غنة" }
                ]
            },
            {
                title: "3. الإقلاب (Iqlab)",
                lessonAr: "💡 الإقلاب: قلب النون الساكنة أو التنوين إلى (ميم) مخفاة بغنة إذا جاء بعدها حرف (الباء).",
                lessonEn: "💡 Iqlab: Changing the Noon Sakinah or Tanween into a hidden (Meem) with Ghunnah when followed by the letter (Baa).",
                questions: [
                    { qAr: "ما هو الحرف الوحيد للإقلاب؟", qEn: "What is the only letter for Iqlab?", options: [{ ar: "الميم", en: "Meem" }, { ar: "الباء", en: "Baa" }, { ar: "النون", en: "Noon" }], aAr: "الباء" },
                    { qAr: "إلى ماذا تُقلب النون الساكنة؟", qEn: "What does Noon Sakinah change into?", options: [{ ar: "ميم مخفاة", en: "Hidden Meem" }, { ar: "واو", en: "Waw" }, { ar: "ياء", en: "Yaa" }], aAr: "ميم مخفاة" }
                ]
            },
            {
                title: "4. الإخفاء الحقيقي (Ikhfa Haqiqi)",
                lessonAr: "💡 الإخفاء: النطق بالنون بحالة بين الإظهار والإدغام مع بقاء الغنة. حروفه 15 حرفاً.",
                lessonEn: "💡 Ikhfa: Pronouncing Noon in a state between Izhar and Idgham while keeping the Ghunnah. It has 15 letters.",
                questions: [
                    { qAr: "كم عدد حروف الإخفاء الحقيقي؟", qEn: "How many letters in Ikhfa Haqiqi?", options: [{ ar: "10 حروف", en: "10 letters" }, { ar: "15 حرفاً", en: "15 letters" }, { ar: "6 حروف", en: "6 letters" }], aAr: "15 حرفاً" },
                    { qAr: "كيف يُنطق الإخفاء؟", qEn: "How is Ikhfa pronounced?", options: [{ ar: "بين الإظهار والإدغام", en: "Between Izhar & Idgham" }, { ar: "كالإظهار تماماً", en: "Exactly like Izhar" }, { ar: "كالإدغام تماماً", en: "Exactly like Idgham" }], aAr: "بين الإظهار والإدغام" }
                ]
            }
        ]
    },
    {
        chapter: "أحكام الميم الساكنة",
        branches: [
            {
                title: "1. الإخفاء الشفوي (Ikhfa Shafawi)",
                lessonAr: "💡 الإخفاء الشفوي: إذا جاء بعد الميم الساكنة حرف (الباء)، تُخفى الميم مع غنة بمقدار حركتين.",
                lessonEn: "💡 Ikhfa Shafawi: If Meem Sakinah is followed by (Baa), the Meem is hidden with a 2-count Ghunnah.",
                questions: [
                    { qAr: "ما هو الحرف الوحيد للإخفاء الشفوي؟", qEn: "What is the only letter for Ikhfa Shafawi?", options: [{ ar: "الميم", en: "Meem" }, { ar: "الباء", en: "Baa" }, { ar: "النون", en: "Noon" }], aAr: "الباء" },
                    { qAr: "ما حكم الميم في (تَرْمِيهِم بِحِجَارَةٍ)؟", qEn: "Rule in (Tarmeehim Bi-hijarah)?", options: [{ ar: "إظهار", en: "Izhar" }, { ar: "إخفاء شفوي", en: "Ikhfa Shafawi" }, { ar: "إدغام", en: "Idgham" }], aAr: "إخفاء شفوي" }
                ]
            },
            {
                title: "2. الإدغام الشفوي (Idgham Shafawi)",
                lessonAr: "💡 الإدغام الشفوي: إذا جاء بعد الميم الساكنة (ميم) أخرى. ويسمى إدغام متماثلين صغير.",
                lessonEn: "💡 Idgham Shafawi: If Meem Sakinah is followed by another (Meem). It is also called small identical Idgham.",
                questions: [
                    { qAr: "ما هو حرف الإدغام الشفوي؟", qEn: "What is the letter of Idgham Shafawi?", options: [{ ar: "الباء", en: "Baa" }, { ar: "الميم", en: "Meem" }, { ar: "الواو", en: "Waw" }], aAr: "الميم" },
                    { qAr: "ما حكم الميم في (لَهُم مَّا)؟", qEn: "Rule in (Lahum-Ma)?", options: [{ ar: "إخفاء شفوي", en: "Ikhfa Shafawi" }, { ar: "إدغام شفوي", en: "Idgham Shafawi" }, { ar: "إظهار", en: "Izhar" }], aAr: "إدغام شفوي" }
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
let isMoving = false; 

const snakesAndLadders = {
    4: { to: 14, msg: "🪜 سلم الإتقان!" },
    9: { to: 31, msg: "🪜 صعود ممتاز!" },
    17: { to: 7, msg: "🐍 تراجع للمراجعة!" },
    20: { to: 38, msg: "🪜 تقدم رائع!" },
    45: { to: 22, msg: "🐍 ركز أكثر!" }
};

window.onload = () => {
    createBoard();
    populateIndex();
};

function createBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
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

function setStartPos() {
    if(isMoving) return;
    let target = parseInt(document.getElementById('start-pos').value);
    if (target >= 1 && target <= 99) {
        currentPosition = target;
        const player = document.getElementById('player');
        const targetCell = document.getElementById(`cell-${currentPosition}`);
        if(targetCell) targetCell.appendChild(player);
        document.getElementById('message').innerText = `تم الانتقال مباشرة للمربع ${currentPosition}`;
    }
}

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
    document.getElementById('lesson-index').value = `${cIdx}-${bIdx}`;
    if (needsLesson) showLessonUI(false);
    else showQuestion();
}

function showLessonUI(isRetry) {
    const branchData = syllabus[cIdx].branches[bIdx];
    document.getElementById('lesson-title').innerText = branchData.title;
    
    let textAr = branchData.lessonAr;
    let textEn = branchData.lessonEn;
    
    if (isRetry) {
        textAr = "❌ إجابة خاطئة! راجع الحكم:\n" + textAr;
        textEn = "❌ Wrong answer! Review the rule:\n" + textEn;
        document.getElementById('understand-btn').classList.add('hidden');
        document.getElementById('close-fail-btn').classList.remove('hidden');
    } else {
        document.getElementById('understand-btn').classList.remove('hidden');
        document.getElementById('close-fail-btn').classList.add('hidden');
    }
    
    document.getElementById('lesson-text-ar').innerText = textAr;
    document.getElementById('lesson-text-en').innerText = textEn;
    
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
    
    document.getElementById('question-text-ar').innerText = questionData.qAr;
    document.getElementById('question-text-en').innerText = questionData.qEn;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    questionData.options.forEach(opt => {
        const btn = document.createElement('button');
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
    isMoving = true; 
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
        
        movePlayerStepByStep(currentPosition, targetPosition, () => {
            currentPosition = targetPosition;
            
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

function movePlayerStepByStep(start, end, onComplete) {
    let current = start;
    let step = (end > start) ? 1 : -1; 
    
    let timer = setInterval(() => {
        if (current !== end) {
            current += step;
            const player = document.getElementById('player');
            const targetCell = document.getElementById(`cell-${current}`);
            
            player.classList.add('jumping');
            if(targetCell) targetCell.appendChild(player);
            
            setTimeout(() => {
                player.classList.remove('jumping');
            }, 150); 
            
        } else {
            clearInterval(timer);
            if(onComplete) onComplete();
        }
    }, 400); 
}
