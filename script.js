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
                    { qAr: "من أين تخرج حروف الإظهار؟", qEn: "Where do Izhar letters come from?", options: [{ ar: "الشفتين", en: "Lips" }, { ar: "الحلق", en: "Throat" }, { ar: "اللسان", en: "Tongue" }], aAr: "الحلق" },
                    { qAr: "ما هي أول حرفين من حروف الإظهار؟", qEn: "What are the first two letters of Izhar?", options: [{ ar: "همزة وهاء", en: "Hamzah & Haa" }, { ar: "عين وحاء", en: "Ain & Haa" }, { ar: "غين وخاء", en: "Ghayn & Khaa" }], aAr: "همزة وهاء" },
                    { qAr: "هل الإظهار الحلقي به غنة زائدة؟", qEn: "Does Izhar Halqi have extra Ghunnah?", options: [{ ar: "نعم دائماً", en: "Yes, always" }, { ar: "لا يوجد", en: "No extra Ghunnah" }, { ar: "أحياناً", en: "Sometimes" }], aAr: "لا يوجد" }
                ]
            },
            {
                title: "2. الإدغام (Idgham)",
                lessonAr: "💡 الإدغام: إدخال النون في الحرف الذي بعدها. حروفه (يرملون). ينقسم لـ: إدغام بغنة (ينمو) وبغير غنة (ل، ر).",
                lessonEn: "💡 Idgham: Merging the Noon into the following letter. Its letters are in (Yarmaloun). Divided into: Idgham with Ghunnah (Yanmou) and without Ghunnah (L, R).",
                questions: [
                    { qAr: "ما الكلمة التي تجمع حروف الإدغام؟", qEn: "Which word gathers Idgham letters?", options: [{ ar: "قطب جد", en: "Qutb Jad" }, { ar: "يرملون", en: "Yarmaloun" }, { ar: "ينمو", en: "Yanmou" }], aAr: "يرملون" },
                    { qAr: "ما هي حروف الإدغام بغنة؟", qEn: "Letters of Idgham with Ghunnah?", options: [{ ar: "ينمو", en: "Yanmou" }, { ar: "ل، ر", en: "L & R" }, { ar: "ء، هـ", en: "Hamzah, Haa" }], aAr: "ينمو" },
                    { qAr: "ما حكم (مَن يَقُولُ)؟", qEn: "What is the rule in (May-Yaqool)?", options: [{ ar: "إدغام بغير غنة", en: "Idgham w/o Ghunnah" }, { ar: "إدغام بغنة", en: "Idgham w/ Ghunnah" }, { ar: "إظهار", en: "Izhar" }], aAr: "إدغام بغنة" },
                    { qAr: "ما حكم (مِن رَّبِّهِم)؟", qEn: "What is the rule in (Mir-Rabbihim)?", options: [{ ar: "إدغام بغير غنة", en: "Idgham w/o Ghunnah" }, { ar: "إقلاب", en: "Iqlab" }, { ar: "إخفاء", en: "Ikhfa" }], aAr: "إدغام بغير غنة" },
                    { qAr: "كم عدد حروف الإدغام بغير غنة؟", qEn: "How many letters for Idgham w/o Ghunnah?", options: [{ ar: "حرفان", en: "2 letters" }, { ar: "4 حروف", en: "4 letters" }, { ar: "6 حروف", en: "6 letters" }], aAr: "حرفان" }
                ]
            },
            {
                title: "3. الإقلاب (Iqlab)",
                lessonAr: "💡 الإقلاب: قلب النون الساكنة أو التنوين إلى (ميم) مخفاة بغنة إذا جاء بعدها حرف (الباء).",
                lessonEn: "💡 Iqlab: Changing the Noon Sakinah or Tanween into a hidden (Meem) with Ghunnah when followed by the letter (Baa).",
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
                lessonAr: "💡 الإخفاء: النطق بالنون بحالة بين الإظهار والإدغام مع بقاء الغنة. حروفه 15 حرفاً.",
                lessonEn: "💡 Ikhfa: Pronouncing Noon in a state between Izhar and Idgham while keeping the Ghunnah. It has 15 letters.",
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
                lessonAr: "💡 الغنة: صوت يخرج من الخيشوم. يجب إظهار الغنة بمقدار حركتين في كل ميم ونون مشددتين.",
                lessonEn: "💡 Ghunnah: A nasal sound. It must be pronounced for 2 counts in every stressed (with Shaddah) Meem and Noon.",
                questions: [
                    { qAr: "من أين يخرج صوت الغنة؟", qEn: "Where does Ghunnah sound come from?", options: [{ ar: "الحلق", en: "Throat" }, { ar: "الخيشوم", en: "Nasal passage" }, { ar: "الشفتين", en: "Lips" }], aAr: "الخيشوم" },
                    { qAr: "ما مقدار الغنة؟", qEn: "What is the duration of Ghunnah?", options: [{ ar: "حركة واحدة", en: "1 count" }, { ar: "حركتان", en: "2 counts" }, { ar: "4 حركات", en: "4 counts" }], aAr: "حركتان" },
                    { qAr: "متى نُغَنّي النون والميم بقوة؟", qEn: "When do we apply strong Ghunnah?", options: [{ ar: "إذا كانتا مشددتين", en: "If they have Shaddah" }, { ar: "إذا كانتا مكسورتين", en: "If they have Kasrah" }, { ar: "إذا كانتا ساكنتين", en: "If they have Sukun" }], aAr: "إذا كانتا مشددتين" },
                    { qAr: "ما حكم النون في (إِنَّ)؟", qEn: "What is the rule in (Inna)?", options: [{ ar: "إظهار", en: "Izhar" }, { ar: "غنة حركتين", en: "Ghunnah 2 counts" }, { ar: "قلقلة", en: "Qalqalah" }], aAr: "غنة حركتين" },
                    { qAr: "ماذا يسمى الحرف المشدد المُراد غَنّه؟", qEn: "What is the stressed letter called?", options: [{ ar: "حرف مد", en: "Mad letter" }, { ar: "حرف غنة مشدد", en: "Stressed Ghunnah letter" }, { ar: "حرف لين", en: "Leen letter" }], aAr: "حرف غنة مشدد" }
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
                    { qAr: "ما حكم الميم في (تَرْمِيهِم بِحِجَارَةٍ)؟", qEn: "Rule in (Tarmeehim Bi-hijarah)?", options: [{ ar: "إظهار", en: "Izhar" }, { ar: "إخفاء شفوي", en: "Ikhfa Shafawi" }, { ar: "إدغام", en: "Idgham" }], aAr: "إخفاء شفوي" },
                    { qAr: "لماذا سُمي شفوياً؟", qEn: "Why is it called Shafawi (Labial)?", options: [{ ar: "لخروج الحروف من الشفتين", en: "Letters come from lips" }, { ar: "لخروجها من الحلق", en: "Letters come from throat" }, { ar: "بدون سبب", en: "No reason" }], aAr: "لخروج الحروف من الشفتين" },
                    { qAr: "هل الإخفاء الشفوي يحتاج لغنة؟", qEn: "Does Ikhfa Shafawi need Ghunnah?", options: [{ ar: "لا", en: "No" }, { ar: "نعم، حركتين", en: "Yes, 2 counts" }, { ar: "4 حركات", en: "4 counts" }], aAr: "نعم، حركتين" },
                    { qAr: "ما حكم الميم إذا جاءت قبل الباء؟", qEn: "Rule of Meem before Baa?", options: [{ ar: "إخفاء شفوي", en: "Ikhfa Shafawi" }, { ar: "إظهار", en: "Izhar" }, { ar: "إقلاب", en: "Iqlab" }], aAr: "إخفاء شفوي" }
                ]
            },
            {
                title: "2. الإدغام الشفوي (Idgham Shafawi)",
                lessonAr: "💡 الإدغام الشفوي: إذا جاء بعد الميم الساكنة (ميم) أخرى. ويسمى إدغام متماثلين صغير.",
                lessonEn: "💡 Idgham Shafawi: If Meem Sakinah is followed by another (Meem). It is also called small identical Idgham.",
                questions: [
                    { qAr: "ما هو حرف الإدغام الشفوي؟", qEn: "What is the letter of Idgham Shafawi?", options: [{ ar: "الباء", en: "Baa" }, { ar: "الميم", en: "Meem" }, { ar: "الواو", en: "Waw" }], aAr: "الميم" },
                    { qAr: "ما حكم الميم في (لَهُم مَّا)؟", qEn: "Rule in (Lahum-Ma)?", options: [{ ar: "إخفاء شفوي", en: "Ikhfa Shafawi" }, { ar: "إدغام شفوي", en: "Idgham Shafawi" }, { ar: "إظهار", en: "Izhar" }], aAr: "إدغام شفوي" },
                    { qAr: "ماذا يسمى هذا الإدغام أيضاً؟", qEn: "What else is this Idgham called?", options: [{ ar: "إدغام بغير غنة", en: "Idgham w/o Ghunnah" }, { ar: "إدغام متماثلين صغير", en: "Idgham Mutamathilayn" }, { ar: "إظهار", en: "Izhar" }], aAr: "إدغام متماثلين صغير" },
                    { qAr: "هل الإدغام الشفوي به غنة؟", qEn: "Does Idgham Shafawi have Ghunnah?", options: [{ ar: "نعم، حركتين", en: "Yes, 2 counts" }, { ar: "لا", en: "No" }, { ar: "نصف حركة", en: "Half count" }], aAr: "نعم، حركتين" },
                    { qAr: "كيف تُنطق الميمان المتتاليتان؟", qEn: "How are the two Meems pronounced?", options: [{ ar: "ميماً واحدة مشددة", en: "One stressed Meem" }, { ar: "ميمين منفصلتين", en: "Two separated Meems" }, { ar: "بحذف الميم", en: "By deleting Meem" }], aAr: "ميماً واحدة مشددة" }
                ]
            },
            {
                title: "3. الإظهار الشفوي (Izhar Shafawi)",
                lessonAr: "💡 الإظهار الشفوي: إذا جاء بعد الميم الساكنة باقي الحروف (عدا الميم والباء). ويجب الحذر من إخفائها عند الفاء والواو.",
                lessonEn: "💡 Izhar Shafawi: If Meem Sakinah is followed by any letter other than Meem and Baa. Beware of hiding it before Faa and Waw.",
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
                title: "1. اللام الشمسية والقمرية (Lam Shamsiyyah & Qamariyyah)",
                lessonAr: "💡 اللام القمرية تُظهر عند (ابغ حجك وخف عقيمه). اللام الشمسية تُدغم في باقي الحروف.",
                lessonEn: "💡 Lam Qamariyyah is pronounced clearly before (Ibghi Hajjaka...). Lam Shamsiyyah is merged into the remaining letters.",
                questions: [
                    { qAr: "ما هي حروف اللام القمرية المظهرة؟", qEn: "Letters of visible Lam Qamariyyah?", options: [{ ar: "يرملون", en: "Yarmaloun" }, { ar: "ابغ حجك وخف عقيمه", en: "Ibghi Hajjaka..." }, { ar: "قطب جد", en: "Qutb Jad" }], aAr: "ابغ حجك وخف عقيمه" },
                    { qAr: "ما نوع اللام في كلمة (الْقَمَر)؟", qEn: "What is the Lam type in (Al-Qamar)?", options: [{ ar: "شمسية مدغمة", en: "Shamsiyyah" }, { ar: "لام فعل", en: "Lam Fi'l" }, { ar: "قمرية مظهرة", en: "Qamariyyah" }], aAr: "قمرية مظهرة" },
                    { qAr: "ما نوع اللام في كلمة (الشَّمْس)؟", qEn: "What is the Lam type in (Ash-Shams)?", options: [{ ar: "قمرية", en: "Qamariyyah" }, { ar: "شمسية مدغمة", en: "Shamsiyyah" }, { ar: "لام اسم", en: "Lam Noun" }], aAr: "شمسية مدغمة" },
                    { qAr: "ماذا نفعل للام الشمسية؟", qEn: "What do we do to Lam Shamsiyyah?", options: [{ ar: "نُظهرها", en: "Make it clear (Izhar)" }, { ar: "نُدغمها", en: "Merge it (Idgham)" }, { ar: "نقلبها", en: "Change it (Iqlab)" }], aAr: "نُدغمها" },
                    { qAr: "حرف (الدال) من حروف اللام..؟", qEn: "Letter Daal belongs to which Lam?", options: [{ ar: "الشمسية", en: "Shamsiyyah" }, { ar: "القمرية", en: "Qamariyyah" }, { ar: "الأصلية", en: "Original Lam" }], aAr: "الشمسية" }
                ]
            },
            {
                title: "2. لام الفعل (Lam of the Verb)",
                lessonAr: "💡 لام الفعل الساكنة يجب إظهارها دائماً سواء كانت في المنتصف أو الآخر، مثل (قُلْ، الْتَقَى).",
                lessonEn: "💡 The Sakinah Lam in a verb must always be pronounced clearly, like in (Qul, Iltaqa).",
                questions: [
                    { qAr: "ما حكم لام الفعل الساكنة؟", qEn: "Rule of Lam of the verb?", options: [{ ar: "الإظهار", en: "Izhar" }, { ar: "الإدغام", en: "Idgham" }, { ar: "الإخفاء", en: "Ikhfa" }], aAr: "الإظهار" },
                    { qAr: "أي من هذه الكلمات بها لام فعل؟", qEn: "Which word has a verb Lam?", options: [{ ar: "الشَّمْس", en: "Ash-Shams" }, { ar: "قُلْ", en: "Qul" }, { ar: "الْقَمَر", en: "Al-Qamar" }], aAr: "قُلْ" },
                    { qAr: "هل تُدغم لام الفعل؟", qEn: "Is the verb Lam ever merged?", options: [{ ar: "نعم دائماً", en: "Yes, always" }, { ar: "لا تُدغم", en: "No, never merged" }, { ar: "أحياناً", en: "Sometimes" }], aAr: "لا تُدغم" },
                    { qAr: "ما حكم اللام في (جَعَلْنَا)؟", qEn: "Rule in (Ja'alna)?", options: [{ ar: "إدغام", en: "Idgham" }, { ar: "إخفاء", en: "Ikhfa" }, { ar: "إظهار", en: "Izhar" }], aAr: "إظهار" },
                    { qAr: "هل تأتي لام الفعل الساكنة أول الكلمة؟", qEn: "Can verb Lam come at the beginning?", options: [{ ar: "نعم", en: "Yes" }, { ar: "لا، وسطها أو آخرها", en: "No, middle or end" }, { ar: "دائماً في الأول", en: "Always at the beginning" }], aAr: "لا، وسطها أو آخرها" }
                ]
            }
        ]
    },
    {
        chapter: "المثلان والمتقاربان والمتجانسان",
        branches: [
            {
                title: "1. علاقات الحروف (Letter Relationships)",
                lessonAr: "💡 المتماثلان: اتفقا مخرجاً وصفة. المتقاربان: تقاربا مخرجاً وصفة. المتجانسان: اتفقا مخرجاً واختلفا صفة.",
                lessonEn: "💡 Mutamathilan: Same origin & traits. Mutaqariban: Close origin & traits. Mutajanisan: Same origin, different traits.",
                questions: [
                    { qAr: "الحرفان اللذان اتفقا مخرجاً وصفة هما؟", qEn: "Letters with same origin & traits?", options: [{ ar: "المتماثلان", en: "Mutamathilan" }, { ar: "المتقاربان", en: "Mutaqariban" }, { ar: "المتجانسان", en: "Mutajanisan" }], aAr: "المتماثلان" },
                    { qAr: "الحرفان اللذان اتفقا مخرجاً واختلفا صفة هما؟", qEn: "Letters with same origin, different traits?", options: [{ ar: "المتماثلان", en: "Mutamathilan" }, { ar: "المتقاربان", en: "Mutaqariban" }, { ar: "المتجانسان", en: "Mutajanisan" }], aAr: "المتجانسان" },
                    { qAr: "الحرفان اللذان تقاربا مخرجاً وصفة هما؟", qEn: "Letters with close origin & traits?", options: [{ ar: "المتماثلان", en: "Mutamathilan" }, { ar: "المتقاربان", en: "Mutaqariban" }, { ar: "المتجانسان", en: "Mutajanisan" }], aAr: "المتقاربان" },
                    { qAr: "إذا كان الحرف الأول ساكناً والثاني متحركاً (متماثلان) فما الحكم؟", qEn: "Rule if first letter is Sakin & second has Vowel (Mutamathilan)?", options: [{ ar: "إظهار", en: "Izhar" }, { ar: "إدغام صغير", en: "Small Idgham" }, { ar: "إخفاء", en: "Ikhfa" }], aAr: "إدغام صغير" },
                    { qAr: "حرفا (الباء والميم) في (اركب معنا) مثال على؟", qEn: "(Baa & Meem) in (Irkab Ma'ana) is an example of?", options: [{ ar: "المتجانسين", en: "Mutajanisan" }, { ar: "المتقاربين", en: "Mutaqariban" }, { ar: "المتباعدين", en: "Mutaba'idan" }], aAr: "المتجانسين" }
                ]
            }
        ]
    },
    {
        chapter: "أحكام المدود",
        branches: [
            {
                title: "1. المد الطبيعي (Natural Mad)",
                lessonAr: "💡 حروف المد ثلاثة (واي). يُمد حركتين، ولا يتوقف على سبب (همز أو سكون).",
                lessonEn: "💡 Mad letters are three (Waw, Alif, Yaa). Prolonged for 2 counts, doesn't depend on a reason.",
                questions: [
                    { qAr: "كم عدد حروف المد؟", qEn: "How many Mad letters are there?", options: [{ ar: "2", en: "2" }, { ar: "3", en: "3" }, { ar: "5", en: "5" }], aAr: "3" },
                    { qAr: "ما مقدار المد الطبيعي؟", qEn: "Duration of Natural Mad?", options: [{ ar: "حركتان", en: "2 counts" }, { ar: "4 حركات", en: "4 counts" }, { ar: "6 حركات", en: "6 counts" }], aAr: "حركتان" },
                    { qAr: "ما شرط الألف لتكون حرف مد؟", qEn: "Condition for Alif to be a Mad letter?", options: [{ ar: "مكسور ما قبلها", en: "Preceded by Kasrah" }, { ar: "مفتوح ما قبلها", en: "Preceded by Fathah" }, { ar: "مضموم ما قبلها", en: "Preceded by Dammah" }], aAr: "مفتوح ما قبلها" },
                    { qAr: "أي الكلمات تجمع حروف المد بشروطها؟", qEn: "Which word has all Mad letters?", options: [{ ar: "يَعْلَمُونَ", en: "Ya'lamoon" }, { ar: "نُوحِيهَا", en: "Nooheehaa" }, { ar: "الْحَمْدُ", en: "Al-Hamd" }], aAr: "نُوحِيهَا" },
                    { qAr: "هل المد الطبيعي يحتاج لسبب؟", qEn: "Does Natural Mad need a reason?", options: [{ ar: "نعم", en: "Yes" }, { ar: "لا يحتاج", en: "No reason needed" }, { ar: "فقط السكون", en: "Only Sukun" }], aAr: "لا يحتاج" }
                ]
            },
            {
                title: "2. المد المتصل والمنفصل (Attached & Detached Mad)",
                lessonAr: "💡 المتصل: حرف المد والهمزة في كلمة واحدة (حكمه الوجوب). المنفصل: حرف المد في كلمة والهمزة في الكلمة التي تليها (حكمه الجواز).",
                lessonEn: "💡 Attached: Mad letter and Hamzah in one word (Required). Detached: Mad letter and Hamzah in two separate words (Permissible).",
                questions: [
                    { qAr: "إذا جاء المد والهمزة في كلمة واحدة، يسمى؟", qEn: "Mad & Hamzah in same word is called?", options: [{ ar: "مد متصل", en: "Attached Mad" }, { ar: "مد منفصل", en: "Detached Mad" }, { ar: "مد لازم", en: "Compulsory Mad" }], aAr: "مد متصل" },
                    { qAr: "ما حكم المد المتصل؟", qEn: "Ruling of Attached Mad?", options: [{ ar: "جائز", en: "Permissible" }, { ar: "واجب", en: "Required" }, { ar: "لازم", en: "Compulsory" }], aAr: "واجب" },
                    { qAr: "إذا جاء المد في كلمة والهمزة في التي تليها؟", qEn: "Mad in one word & Hamzah in the next?", options: [{ ar: "مد لازم", en: "Compulsory" }, { ar: "مد متصل", en: "Attached" }, { ar: "مد منفصل", en: "Detached" }], aAr: "مد منفصل" },
                    { qAr: "ما نوع المد في (السَّمَاءَ)؟", qEn: "Mad type in (As-Samaa)?", options: [{ ar: "متصل", en: "Attached" }, { ar: "منفصل", en: "Detached" }, { ar: "طبيعي", en: "Natural" }], aAr: "متصل" },
                    { qAr: "ما حكم المد المنفصل؟", qEn: "Ruling of Detached Mad?", options: [{ ar: "واجب", en: "Required" }, { ar: "جائز", en: "Permissible" }, { ar: "لازم", en: "Compulsory" }], aAr: "جائز" }
                ]
            },
            {
                title: "3. المد اللازم (Compulsory Mad)",
                lessonAr: "💡 المد اللازم: أن يأتي بعد حرف المد حرف ساكن سكوناً أصلياً وصلاً ووقفاً. يُمَد 6 حركات لزوماً.",
                lessonEn: "💡 Compulsory Mad: A Mad letter followed by an original Sukun. Must be prolonged for 6 counts.",
                questions: [
                    { qAr: "ماذا يأتي بعد حرف المد في المد اللازم؟", qEn: "What follows Mad letter in Lazim?", options: [{ ar: "همزة", en: "Hamzah" }, { ar: "سكون أصلي", en: "Original Sukun" }, { ar: "تنوين", en: "Tanween" }], aAr: "سكون أصلي" },
                    { qAr: "كم مقدار المد اللازم؟", qEn: "Duration of Mad Lazim?", options: [{ ar: "حركتان", en: "2 counts" }, { ar: "4 حركات", en: "4 counts" }, { ar: "6 حركات", en: "6 counts" }], aAr: "6 حركات" },
                    { qAr: "هل يجوز قصر المد اللازم إلى حركتين؟", qEn: "Can Lazim be shortened to 2 counts?", options: [{ ar: "نعم", en: "Yes" }, { ar: "لا، يجب إشباعه", en: "No, must be full" }, { ar: "في حالة الوصل فقط", en: "Only when connecting" }], aAr: "لا، يجب إشباعه" },
                    { qAr: "ما نوع المد في (الضَّالِّينَ)؟", qEn: "Mad type in (Ad-Daalleen)?", options: [{ ar: "مد طبيعي", en: "Natural Mad" }, { ar: "مد متصل", en: "Attached Mad" }, { ar: "مد لازم", en: "Mad Lazim" }], aAr: "مد لازم" },
                    { qAr: "لماذا سُمي لازماً؟", qEn: "Why is it called Compulsory?", options: [{ ar: "للزوم مده 6 حركات لكل القراء", en: "Required 6 counts for all" }, { ar: "لأنه يأتي أول السورة", en: "Starts the Surah" }, { ar: "لأنه سهل", en: "Because it's easy" }], aAr: "للزوم مده 6 حركات لكل القراء" }
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
