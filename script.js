const syllabus = [
    {
        chapter: "أحكام النون الساكنة والتنوين",
        branches: [
            {
                title: "1. الإظهار الحلقي (Izhar Halqi)",
                lesson: "💡 الإظهار الحلقي: نطق النون بوضوح بدون غنة زائدة إذا جاء بعدها أحد حروف الحلق الستة: (ء، هـ، ع، ح، غ، خ).",
                questions: [
                    { qAr: "كم عدد حروف الإظهار الحلقي؟", qEn: "How many letters in Izhar Halqi?", options: [{ ar: "4 حروف", en: "4 letters" }, { ar: "5 حروف", en: "5 letters" }, { ar: "6 حروف", en: "6 letters" }], aAr: "6 حروف" },
                    { qAr: "ما حكم النون في (مِنْهُمْ)؟", qEn: "What is the rule in (Minhum)?", options: [{ ar: "إخفاء", en: "Ikhfa" }, { ar: "إظهار حلقي", en: "Izhar Halqi" }, { ar: "إدغام", en: "Idgham" }], aAr: "إظهار حلقي" },
                    { qAr: "ما هي أول حرفين من حروف الإظهار؟", qEn: "What are the first two letters of Izhar?", options: [{ ar: "همزة وهاء", en: "Hamzah & Haa" }, { ar: "عين وحاء", en: "Ain & Haa" }, { ar: "غين وخاء", en: "Ghayn & Khaa" }], aAr: "همزة وهاء" },
                    { qAr: "من أين تخرج حروف الإظهار؟", qEn: "Where do Izhar letters come from?", options: [{ ar: "الشفتين", en: "Lips" }, { ar: "الحلق", en: "Throat" }, { ar: "اللسان", en: "Tongue" }], aAr: "الحلق" },
                    { qAr: "هل الإظهار الحلقي به غنة زائدة؟", qEn: "Does Izhar Halqi have extra Ghunnah?", options: [{ ar: "نعم دائماً", en: "Yes, always" }, { ar: "لا يوجد", en: "No extra Ghunnah" }, { ar: "أحياناً", en: "Sometimes" }], aAr: "لا يوجد" }
                ]
            },
            {
                title: "2. الإدغام (Idgham)",
                lesson: "💡 الإدغام: إدخال النون في الحرف الذي بعدها. حروفه (يرملون). ينقسم لـ: إدغام بغنة (ينمو) وبغير غنة (ل، ر).",
                questions: [
                    { qAr: "ما الكلمة التي تجمع حروف الإدغام؟", qEn: "Which word gathers Idgham letters?", options: [{ ar: "قطب جد", en: "Qutb Jad" }, { ar: "يرملون", en: "Yarmaloun" }, { ar: "ينمو", en: "Yanmou" }], aAr: "يرملون" },
                    { qAr: "ما هي حروف الإدغام بغنة؟", qEn: "Letters of Idgham with Ghunnah?", options: [{ ar: "ينمو", en: "Yanmou" }, { ar: "ل، ر", en: "L & R" }, { ar: "ء، هـ", en: "Hamzah, Haa" }], aAr: "ينمو" },
                    { qAr: "ما حكم (مَن يَقُولُ)؟", qEn: "What is the rule in (May-Yaqool)?", options: [{ ar: "إدغام بغير غنة", en: "Idgham without Ghunnah" }, { ar: "إدغام بغنة", en: "Idgham with Ghunnah" }, { ar: "إظهار", en: "Izhar" }], aAr: "إدغام بغنة" },
                    { qAr: "ما حكم (مِن رَّبِّهِم)؟", qEn: "What is the rule in (Mir-Rabbihim)?", options: [{ ar: "إدغام بغير غنة", en: "Idgham w/o Ghunnah" }, { ar: "إقلاب", en: "Iqlab" }, { ar: "إخفاء", en: "Ikhfa" }], aAr: "إدغام بغير غنة" },
                    { qAr: "كم عدد حروف الإدغام بغير غنة؟", qEn: "How many letters for Idgham w/o Ghunnah?", options: [{ ar: "حرفان", en: "2 letters" }, { ar: "4 حروف", en: "4 letters" }, { ar: "6 حروف", en: "6 letters" }], aAr: "حرفان" }
                ]
            },
            {
                title: "3. الإقلاب (Iqlab)",
                lesson: "💡 الإقلاب: قلب النون الساكنة أو التنوين إلى (ميم) مخفاة بغنة إذا جاء بعدها حرف (الباء).",
                questions: [
                    { qAr: "ما هو الحرف الوحيد للإقلاب؟", qEn: "What is the only letter for Iqlab?", options: [{ ar: "الميم", en: "Meem" }, { ar: "الباء", en: "Baa" }, { ar: "النون", en: "Noon" }], aAr: "الباء" },
                    { qAr: "إلى ماذا تُقلب النون الساكنة؟", qEn: "What does Noon Sakinah change into?", options: [{ ar: "ميم مخفاة", en: "Hidden Meem" }, { ar: "واو", en: "Waw" }, { ar: "ياء", en: "Yaa" }], aAr: "ميم مخفاة" },
                    { qAr: "ما حكم (أَنبِئْهُم)؟", qEn: "What is the rule in (Ambi'hum)?", options: [{ ar: "إقلاب", en: "Iqlab" }, { ar: "إظهار", en: "Izhar" }, { ar: "إدغام", en: "Idgham" }], aAr: "إقلاب" },
                    { qAr: "هل الإقلاب مصحوب بغنة؟", qEn: "Does Iqlab have Ghunnah?", options: [{ ar: "نعم", en: "Yes" }, { ar: "لا", en: "No" }, { ar: "أحياناً", en: "Sometimes" }], aAr: "نعم" },
                    { qAr: "ما هي علامة الإقلاب في المصحف؟", qEn: "What is the sign of Iqlab in Quran?", options: [{ ar: "سكون", en: "Sukun" }, { ar: "حرف ميم صغير", en: "Small Meem" }, { ar: "شدة", en: "Shaddah" }], aAr: "حرف ميم صغير" }
                ]
            },
            {
                title: "4. الإخفاء الحقيقي (Ikhfa Haqiqi)",
                lesson: "💡 الإخفاء: النطق بالنون بحالة بين الإظهار والإدغام مع بقاء الغنة. حروفه 15 حرفاً.",
                questions: [
                    { qAr: "كم عدد حروف الإخفاء الحقيقي؟", qEn: "How many letters in Ikhfa Haqiqi?", options: [{ ar: "10 حروف", en: "10 letters" }, { ar: "15 حرفاً", en: "15 letters" }, { ar: "6 حروف", en: "6 letters" }], aAr: "15 حرفاً" },
                    { qAr: "كيف يُنطق الإخفاء؟", qEn: "How is Ikhfa pronounced?", options: [{ ar: "بين الإظهار والإدغام", en: "Between Izhar & Idgham" }, { ar: "كالإظهار تماماً", en: "Exactly like Izhar" }, { ar: "كالإدغام تماماً", en: "Exactly like Idgham" }], aAr: "بين الإظهار والإدغام" },
                    { qAr: "ما حكم (مِن قَبْلُ)؟", qEn: "What is the rule in (Min Qablu)?", options: [{ ar: "إقلاب", en: "Iqlab" }, { ar: "إخفاء حقيقي", en: "Ikhfa Haqiqi" }, { ar: "إظهار", en: "Izhar" }], aAr: "إخفاء حقيقي" },
                    { qAr: "أي من هذه الحروف من حروف الإخفاء؟", qEn: "Which of these is an Ikhfa letter?", options: [{ ar: "الصاد", en: "Saad" }, { ar: "الهمزة", en: "Hamzah" }, { ar: "الراء", en: "Raa" }], aAr: "الصاد" },
                    { qAr: "هل تُنطق النون بوضوح في الإخفاء؟", qEn: "Is Noon pronounced clearly in Ikhfa?", options: [{ ar: "نعم", en: "Yes" }, { ar: "تُخفى مع الغنة", en: "Hidden with Ghunnah" }, { ar: "تُحذف تماماً", en: "Deleted completely" }], aAr: "تُخفى مع الغنة" }
                ]
            }
        ]
    },
    {
        chapter: "الميم والنون المشددتين",
        branches: [
            {
                title: "1. حكم الغنة (Ghunnah Rule)",
                lesson: "💡 الغنة: صوت يخرج من الخيشوم. يجب إظهار الغنة بمقدار حركتين في كل ميم ونون مشددتين.",
                questions: [
                    { qAr: "من أين يخرج صوت الغنة؟", qEn: "Where does Ghunnah sound come from?", options: [{ ar: "الحلق", en: "Throat" }, { ar: "الخيشوم", en: "Nasal passage" }, { ar: "الشفتين", en: "Lips" }], aAr: "الخيشوم" },
                    { qAr: "ما مقدار الغنة؟", qEn: "What is the duration of Ghunnah?", options: [{ ar: "حركة واحدة", en: "1 count" }, { ar: "حركتان", en: "2 counts" }, { ar: "4 حركات", en: "4 counts" }], aAr: "حركتان" },
                    { qAr: "متى نُغَنّي النون والميم بقوة؟", qEn: "When do we apply strong Ghunnah to Noon/Meem?", options: [{ ar: "إذا كانتا مشددتين", en: "If they have Shaddah" }, { ar: "إذا كانتا مكسورتين", en: "If they have Kasrah" }, { ar: "إذا كانتا ساكنتين", en: "If they have Sukun" }], aAr: "إذا كانتا مشددتين" },
                    { qAr: "ما حكم النون في (إِنَّ)؟", qEn: "What is the rule in (Inna)?", options: [{ ar: "إظهار", en: "Izhar" }, { ar: "غنة حركتين", en: "Ghunnah 2 counts" }, { ar: "قلقلة", en: "Qalqalah" }], aAr: "غنة حركتين" },
                    { qAr: "ماذا يسمى الحرف المشدد؟", qEn: "What is the letter with Shaddah called?", options: [{ ar: "حرف مد", en: "Mad letter" }, { ar: "حرف غنة مشدد", en: "Stressed Ghunnah letter" }, { ar: "حرف لين", en: "Leen letter" }], aAr: "حرف غنة مشدد" }
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
                    { qAr: "ما هو الحرف الوحيد للإخفاء الشفوي؟", qEn: "What is the only letter for Ikhfa Shafawi?", options: [{ ar: "الميم", en: "Meem" }, { ar: "الباء", en: "Baa" }, { ar: "النون", en: "Noon" }], aAr: "الباء" },
                    { qAr: "لماذا سُمي شفوياً؟", qEn: "Why is it called Shafawi (Labial)?", options: [{ ar: "لخروج الحروف من الشفتين", en: "Letters come from lips" }, { ar: "لخروجها من الحلق", en: "Letters come from throat" }, { ar: "بدون سبب", en: "No reason" }], aAr: "لخروج الحروف من الشفتين" },
                    { qAr: "ما حكم الميم في (تَرْمِيهِم بِحِجَارَةٍ)؟", qEn: "Rule in (Tarmeehim Bi-hijarah)?", options: [{ ar: "إظهار", en: "Izhar" }, { ar: "إخفاء شفوي", en: "Ikhfa Shafawi" }, { ar: "إدغام", en: "Idgham" }], aAr: "إخفاء شفوي" },
                    { qAr: "هل الإخفاء الشفوي يحتاج لغنة؟", qEn: "Does Ikhfa Shafawi need Ghunnah?", options: [{ ar: "لا", en: "No" }, { ar: "نعم، حركتين", en: "Yes, 2 counts" }, { ar: "4 حركات", en: "4 counts" }], aAr: "نعم، حركتين" },
                    { qAr: "ما حكم الميم إذا جاءت قبل الباء؟", qEn: "Rule of Meem before Baa?", options: [{ ar: "إخفاء", en: "Ikhfa" }, { ar: "إظهار", en: "Izhar" }, { ar: "إقلاب", en: "Iqlab" }], aAr: "إخفاء" }
                ]
            },
            {
                title: "2. الإدغام الشفوي (Idgham Shafawi)",
                lesson: "💡 الإدغام الشفوي: إذا جاء بعد الميم الساكنة (ميم) أخرى. ويسمى إدغام متماثلين صغير.",
                questions: [
                    { qAr: "ما هو حرف الإدغام الشفوي؟", qEn: "What is the letter of Idgham Shafawi?", options: [{ ar: "الباء", en: "Baa" }, { ar: "الميم", en: "Meem" }, { ar: "الواو", en: "Waw" }], aAr: "الميم" },
                    { qAr: "ماذا يسمى هذا الإدغام أيضاً؟", qEn: "What else is this Idgham called?", options: [{ ar: "إدغام بغير غنة", en: "Idgham w/o Ghunnah" }, { ar: "إدغام متماثلين صغير", en: "Idgham Mutamathilayn" }, { ar: "إظهار", en: "Izhar" }], aAr: "إدغام متماثلين صغير" },
                    { qAr: "ما حكم الميم في (لَهُم مَّا)؟", qEn: "Rule in (Lahum-Ma)?", options: [{ ar: "إخفاء شفوي", en: "Ikhfa Shafawi" }, { ar: "إدغام شفوي", en: "Idgham Shafawi" }, { ar: "إظهار", en: "Izhar" }], aAr: "إدغام شفوي" },
                    { qAr: "هل الإدغام الشفوي به غنة؟", qEn: "Does Idgham Shafawi have Ghunnah?", options: [{ ar: "نعم، حركتين", en: "Yes, 2 counts" }, { ar: "لا", en: "No" }, { ar: "نصف حركة", en: "Half count" }], aAr: "نعم، حركتين" },
                    { qAr: "كيف تُنطق الميمان المتتاليتان؟", qEn: "How are the two Meems pronounced?", options: [{ ar: "ميماً واحدة مشددة", en: "One stressed Meem" }, { ar: "ميمين منفصلتين", en: "Two separated Meems" }, { ar: "بحذف الميم", en: "By deleting Meem" }], aAr: "ميماً واحدة مشددة" }
                ]
            },
            {
                title: "3. الإظهار الشفوي (Izhar Shafawi)",
                lesson: "💡 الإظهار الشفوي: إذا جاء بعد الميم الساكنة باقي الحروف (عدا الميم والباء). ويجب الحذر من إخفائها عند الفاء والواو.",
                questions: [
                    { qAr: "ما هي حروف الإظهار الشفوي؟", qEn: "Letters of Izhar Shafawi?", options: [{ ar: "كل الحروف عدا الميم والباء", en: "All except Meem & Baa" }, { ar: "حروف الحلق", en: "Throat letters" }, { ar: "يرملون", en: "Yarmaloun" }], aAr: "كل الحروف عدا الميم والباء" },
                    { qAr: "أي حرفين يجب الحذر من الإخفاء عندهما؟", qEn: "Which letters to be careful not to hide Meem at?", options: [{ ar: "السين والشين", en: "Seen & Sheen" }, { ar: "الواو والفاء", en: "Waw & Faa" }, { ar: "الدال والتاء", en: "Daal & Taa" }], aAr: "الواو والفاء" },
                    { qAr: "ما حكم الميم في (هُمْ نَائِمُونَ)؟", qEn: "Rule in (Hum Naa'imoon)?", options: [{ ar: "إدغام", en: "Idgham" }, { ar: "إخفاء", en: "Ikhfa" }, { ar: "إظهار شفوي", en: "Izhar Shafawi" }], aAr: "إظهار شفوي" },
                    { qAr: "هل نُطيل الغنة في الإظهار الشفوي؟", qEn: "Do we prolong Ghunnah in Izhar Shafawi?", options: [{ ar: "لا", en: "No" }, { ar: "نعم حركتين", en: "Yes, 2 counts" }, { ar: "أحياناً", en: "Sometimes" }], aAr: "لا" },
                    { qAr: "لماذا نُظهر الميم عند الواو والفاء؟", qEn: "Why show Meem clearly at Waw & Faa?", options: [{ ar: "لاتحاد المخرج", en: "Due to shared origin" }, { ar: "لأنها حروف مد", en: "Because they are Mad letters" }, { ar: "لأنها من حروف الحلق", en: "Because they are Throat letters" }], aAr: "لاتحاد المخرج" }
                ]
            }
        ]
    },
    {
        chapter: "أحكام اللامات الساكنة",
        branches: [
            {
                title: "1. اللام الشمسية والقمرية (Lam Al)",
                lesson: "💡 اللام القمرية: تُظهر عند حروف (ابغ حجك وخف عقيمه). اللام الشمسية: تُدغم في باقي الحروف.",
                questions: [
                    { qAr: "ما هي حروف اللام القمرية المظهرة؟", qEn: "Letters of visible Lam Qamariyyah?", options: [{ ar: "يرملون", en: "Yarmaloun" }, { ar: "ابغ حجك وخف عقيمه", en: "Ibghi Hajjaka..." }, { type: "text", ar: "قطب جد", en: "Qutb Jad" }], aAr: "ابغ حجك وخف عقيمه" },
                    { qAr: "ما نوع اللام في كلمة (الْقَمَر)؟", qEn: "What is the Lam type in (Al-Qamar)?", options: [{ ar: "شمسية مدغمة", en: "Shamsiyyah" }, { ar: "لام فعل", en: "Lam Fi'l" }, { ar: "قمرية مظهرة", en: "Qamariyyah" }], aAr: "قمرية مظهرة" },
                    { qAr: "ما نوع اللام في كلمة (الشَّمْس)؟", qEn: "What is the Lam type in (Ash-Shams)?", options: [{ ar: "قمرية", en: "Qamariyyah" }, { ar: "شمسية مدغمة", en: "Shamsiyyah" }, { ar: "لام اسم", en: "Lam Noun" }], aAr: "شمسية مدغمة" },
                    { qAr: "ماذا نفعل للام الشمسية؟", qEn: "What do we do to Lam Shamsiyyah?", options: [{ ar: "نُظهرها", en: "Make it clear (Izhar)" }, { ar: "نُدغمها", en: "Merge it (Idgham)" }, { ar: "نقلبها", en: "Change it (Iqlab)" }], aAr: "نُدغمها" },
                    { qAr: "حرف (الدال) من حروف اللام..؟", qEn: "Letter Daal belongs to which Lam?", options: [{ ar: "الشمسية", en: "Shamsiyyah" }, { ar: "القمرية", en: "Qamariyyah" }, { ar: "الأصلية", en: "Original Lam" }], aAr: "الشمسية" }
                ]
            }
        ]
    },
    {
        chapter: "أحكام المدود",
        branches: [
            {
                title: "1. المد الطبيعي (Natural Mad)",
                lesson: "💡 حروف المد ثلاثة (واي): الألف المفتوح ما قبلها، الواو المضموم ما قبلها، الياء المكسور ما قبلها. يُمد حركتين.",
                questions: [
                    { qAr: "كم عدد حروف المد؟", qEn: "How many Mad letters are there?", options: [{ ar: "2", en: "2" }, { ar: "3", en: "3" }, { ar: "5", en: "5" }], aAr: "3" },
                    { qAr: "ما هي كلمة جمع حروف المد؟", qEn: "Word that gathers Mad letters?", options: [{ ar: "واي", en: "Waay" }, { ar: "يرملون", en: "Yarmaloun" }, { ar: "ينمو", en: "Yanmou" }], aAr: "واي" },
                    { qAr: "ما مقدار المد الطبيعي؟", qEn: "Duration of Natural Mad?", options: [{ ar: "حركتان", en: "2 counts" }, { ar: "4 حركات", en: "4 counts" }, { ar: "6 حركات", en: "6 counts" }], aAr: "حركتان" },
                    { qAr: "ما شرط الألف لتكون حرف مد؟", qEn: "Condition for Alif to be a Mad letter?", options: [{ ar: "مكسور ما قبلها", en: "Preceded by Kasrah" }, { ar: "مفتوح ما قبلها", en: "Preceded by Fathah" }, { ar: "مضموم ما قبلها", en: "Preceded by Dammah" }], aAr: "مفتوح ما قبلها" },
                    { qAr: "أي الكلمات تجمع حروف المد بشروطها؟", qEn: "Which word has all Mad letters?", options: [{ ar: "يَعْلَمُونَ", en: "Ya'lamoon" }, { ar: "نُوحِيهَا", en: "Nooheehaa" }, { ar: "الْحَمْدُ", en: "Al-Hamd" }], aAr: "نُوحِيهَا" }
                ]
            }
        ]
    }
];
