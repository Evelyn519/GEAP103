"use strict";

const ACADEMIC_WORDS = [...new Set(`
analyze approach area assess assume authority available benefit concept consist constitute context contract create data define derive distribute economy environment establish estimate evidence export factor finance formula function identify income indicate individual interpret involve issue labor legal legislate major method occur percent period policy principle proceed process require research respond role section sector significant similar source specific structure theory vary achieve acquire affect appropriate aspect assist category chapter commission community complex compute conclude conduct consequent construct consume credit culture design distinct element equate evaluate feature final focus impact injure institute invest item journal maintain normal obtain participate perceive positive potential previous primary purchase range region regulate relevant reside resource restrict secure seek select site strategy survey text tradition transfer
abstract academy access accurate acknowledge aggregate alternative annual apparent approximate attach attitude attribute civil code commit communicate concentrate confer conflict consent considerable constant constrain contribute convention coordinate core corporate correspond criteria deduce demonstrate document dominate emphasize ensure entity equivalent evolve expand expose external facilitate fundamental generate generation goal grant hence hypothesis implement imply impose initial instance interact internal investigate involve lecture link locate mature migrate minimal motive negate objective occupy option orient outcome partner philosophy physical proportion publish pursue qualitative recover register resolve retain series simulate sole submit subordinate sufficient target task technical valid volume adapt advocate allocate assign brief capable challenge chart classic clarify classic comprehensive confirm consent consult contact decline discrete display diverse domestic emerge emphasize empirical enable enhance estate exceed expert explicit federal fee flexible furthermore gender ignore illustrate immigrate incentive incorporate index inhibit initiate input instruct intelligence interval justify layer margin medical mental monitor network nevertheless objective obvious occupy occurrence offset paragraph plus practitioner precede predict preliminary protocol qualitative quote radical random rational recover reject remove require reveal revenue reverse scheme shift specification substitute sustainable symbol contemporary trend underline uniform unique utility via whereas widespread welfare whereas yield
`.trim().split(/\s+/))].slice(0, 200);

const glossary = {
  analyze: "To examine something carefully by separating it into parts.",
  approach: "A way of dealing with a task, problem, or situation.",
  assess: "To judge or decide the quality, importance, or value of something.",
  assume: "To accept something as true without proof.",
  benefit: "A helpful or useful effect or result.",
  concept: "A general idea used to understand or describe something.",
  context: "The situation or information that helps explain an event or idea.",
  data: "Facts or information collected to study or understand something.",
  define: "To explain the meaning or limits of a word, idea, or thing.",
  derive: "To obtain something from a particular source or starting point.",
  establish: "To start something or show that it is true or real.",
  estimate: "To make a careful guess about an amount, size, or value.",
  evidence: "Information that helps show whether an idea or claim is true.",
  factor: "One of the things that helps cause a result.",
  identify: "To recognize or show what someone or something is.",
  indicate: "To show, suggest, or point out something.",
  interpret: "To explain the meaning of information, words, or actions.",
  method: "A planned way of doing something.",
  policy: "A plan or set of rules used to guide decisions.",
  principle: "A basic rule or belief that guides actions or ideas.",
  process: "A series of actions used to achieve a result.",
  require: "To need something or make it necessary.",
  research: "Careful study to discover facts or reach new understanding.",
  significant: "Important enough to be noticed or have an effect.",
  source: "A place, person, or thing from which information comes.",
  specific: "Clearly identified or exact, rather than general.",
  structure: "The way the parts of something are arranged or organized.",
  theory: "An explanation based on ideas and evidence that can be examined.",
  vary: "To change or be different in size, amount, or form."
};

const glossaryExamples = {
  analyze: "The team analyzed the survey results before making a decision.",
  approach: "Our teacher suggested a new approach to the difficult problem.",
  assess: "The school will assess the program at the end of the year.",
  assume: "We should not assume the bus is late until we check the schedule.",
  benefit: "One benefit of walking to work is getting more exercise.",
  concept: "The concept became easier to understand after the example.",
  context: "In context, the speaker's words sounded less critical.",
  data: "The researchers collected data from hundreds of students.",
  define: "The report defines success as steady improvement.",
  derive: "Scientists derive useful information from careful observation.",
  establish: "The city plans to establish a new recycling program.",
  estimate: "We estimate that the trip will take about two hours.",
  evidence: "The photograph provided evidence of the damage.",
  factor: "Cost was an important factor in our decision.",
  identify: "The technician identified the source of the noise.",
  indicate: "Dark clouds may indicate that rain is coming.",
  interpret: "Different readers may interpret the ending in different ways.",
  method: "This method helps students remember new vocabulary.",
  policy: "The company changed its policy on remote work.",
  principle: "The design follows the principle that less can be more.",
  process: "The application process takes about a week.",
  require: "The job may require experience with customer service.",
  research: "Her research focuses on how children learn languages.",
  significant: "There was a significant improvement in attendance.",
  source: "Please include the source of each statistic.",
  specific: "Could you give a specific example of the problem?",
  structure: "The essay's clear structure makes its argument easy to follow.",
  theory: "The theory explains why the pattern appears in several studies.",
  vary: "Travel costs vary depending on the season."
};

const COMMON_WORDS = [...new Set(`
about above accept account across act action activity add address adult advice after again age ago agree air all allow almost alone along already also always among amount animal answer any appear apple area arrive art ask away baby back bad bag ball bank be beautiful because become bed before begin believe best better between big book both build business call can care carry case change child city class clean close come common community company continue country course day different do early easy education end enough even every example experience family feel find first follow friend get give good great group have help home important keep know learn life little make many more most move new number often old one open people place problem question read right same school see small something take tell thing think time use want way work world write year
`.trim().split(/\s+/))];

const COPY = {
  en: {
    metaDescription: "Build English vocabulary, read level-matched passages, and practice critical reading.",
    brandHome: "Ezy home", yourLevel: "Your level", chooseLevel: "Choose your CEFR level", language: "Language", chooseLanguage: "Choose language",
    mainNavigation: "Main navigation", home: "Home", learn: "Learn", read: "Read", conversationNav: "Conversations", dailyConversations: "Daily Conversations", quiz: "Quiz", myWords: "My words",
    yourEnglishPractice: "YOUR ENGLISH PRACTICE", growYour: "Grow your", wordPower: "word power.",
    homeIntro: "A little practice today can open up a whole new world.", startLearning: "Start learning",
    learningAtAGlance: "Your learning at a glance", wordsMastered: "words mastered", wordsToExplore: "words to explore",
    academicEssentials: "academic essentials", pickPractice: "PICK UP WHERE YOU LIKE", choosePractice: "Choose a practice",
    vocabulary: "Vocabulary", vocabularyDescription: "Search, listen, and grow your word list.", reading: "Reading",
    readingDescription: "Practical passages matched to your level.", criticalReading: "Critical reading",
    criticalReadingDescription: "Make inferences and examine an author's ideas.", vocabularyStudio: "VOCABULARY STUDIO",
    meetNewWord: "Meet a new word", vocabularyIntro: "Academic essentials are ready first. Search the full word library whenever you like.",
    wordLibraryCounts: "7,000 words · 200 academic", chooseWordMeaning: "Choose a word to see its meaning.",
    simpleDefinition: "Simple Definition", exampleSentences: "Example Sentences",
    partOfSpeechUnavailable: "Not available", exampleTranslationUnavailable: "Traditional Chinese translation unavailable.",
    vocabularyDetailsLoading: "Loading word details and example translations…",
    listen: "Listen", previous: "Previous", next: "Next", wordLibrary: "WORD LIBRARY", findWord: "Find a word",
    searchVocabulary: "Search vocabulary", searchWordPlaceholder: "Search a word…", prioritizeAcademic: "Prioritize academic words",
    searchResults: "Vocabulary search results", searchHint: "Listen plays the word in an American English browser voice.",
    exampleLookingUp: "Looking up an example sentence…", exampleUnavailable: "Example sentence unavailable.",
    readingPractice: "READING PRACTICE", momentToRead: "A moment to read",
    readingIntro: "Read closely. The details can help you understand what the writer wants you to notice.",
    checkUnderstanding: "Check your understanding", readingTip: "Reading tip",
    readingTipText: "Notice the facts, then ask what the writer believes about them. Inference is about what the text suggests, not just what it states.",
    thinkBeyondWords: "THINK BEYOND THE WORDS", readingCheck: "Reading check",
    quizIntro: "Use evidence from the passage to make an inference, identify the author's stance, and think critically.",
    roundComplete: "ROUND COMPLETE", lookGrow: "Look at you grow.", tryAgain: "Try again", backHome: "Back to home",
    yourProgress: "YOUR PROGRESS", myWordsIntro: "Words you have mastered and words you want to keep close.",
    masteredWords: "Mastered words", addWord: "Add your own word", wordLabel: "Word", wordPlaceholder: "e.g. curious",
    meaningLabel: "Meaning", meaningPlaceholder: "What does it mean?", exampleLabel: "Example", optional: "(optional)",
    examplePlaceholder: "Use it in a sentence", saveWord: "Save my word", savedWords: "Your saved words",
    footer: "Small steps make strong roots.",
    labelAcademic: "ACADEMIC ESSENTIAL", labelPersonal: "YOUR WORD", labelLibrary: "WORD LIBRARY",
    categoryAcademic: "Academic", categoryPersonal: "Personal", categoryVocabulary: "Vocabulary",
    academicPosition: "{index} / 200 academic words", searchPosition: "Search the 7,000-word library",
    masteredButton: "Mastered ✓", markMastered: "Mark mastered", lookingUp: "Looking up a definition…",
    definitionUnavailable: "Definition unavailable right now. You can still listen and mark this word for practice.",
    lookupRetry: "Check your internet connection and select the word again to retry.",
    speechUnavailable: "Speech playback is not available in this browser.",
    speechError: "Your browser could not play this pronunciation.",
    noSearchResults: "No matching words. Try a shorter search.", academicTag: "ACADEMIC", masteredTag: "MASTERED",
    wordCount: "{count} words", advancedC1: "C2 · advanced C1 passage", cefrLevel: "{level} CEFR level",
    shortPassage: "Level-matched reading", passageCollection: "{count} articles · at least 3 min each", minutesRead: "{minutes} min read", previousPassage: "Previous passage", nextPassage: "Next passage", usefulVocabulary: "Useful vocabulary", questionProgress: "QUESTION {current} OF {total}",
    basedOn: "Based on “{title}” · {level} level", inference: "Inference", authorStance: "Author's stance",
    thinkCritically: "Think critically", correctFeedback: "That's right. {explanation}",
    incorrectFeedback: "Not quite. {explanation}", seeScore: "See your score", nextQuestion: "Next question",
    perfectResults: "Excellent work. You read carefully and supported your thinking with evidence.",
    goodResults: "Nice work. You're building strong reading habits—keep looking for the clues behind each idea.",
    retryResults: "Good effort. Reading the passage again can help you spot the details that support each answer.",
    correct: "Correct", review: "Review", masteredCount: "{count} mastered",
    dailyConversationDescription: "Practice useful phrases for everyday moments.",
    conversationPractice: "EVERYDAY ENGLISH", conversationIntro: "Practice useful English for everyday situations, then explore B2–C1 inspirational quotes.",
    conversationTopics: "Everyday and quote topics", school: "School", office: "Office", shopping: "Shopping", orderingFood: "Ordering food", directions: "Getting around", appointments: "Appointments", inspirationalQuotes: "Inspirational quotes",
    everydayEnglish: "SENTENCE PRACTICE", quotePractice: "INSPIRATIONAL QUOTES", listenLine: "Listen in American English", previousSentence: "Previous", nextSentence: "Next",
    quickQuiz: "Quick quiz", checkYourUnderstanding: "CHECK YOUR UNDERSTANDING", retryConversationQuiz: "Try again",
    conversationCorrect: "That's right!", conversationIncorrect: "Not quite. Try reviewing the sentences above.",
    sentenceProgress: "Sentence {current} of {total}", quoteProgress: "Quote {current} of {total}", conversationHint: "Read the English sentence, check the Traditional Chinese translation, then listen to American English.",
    conversationAudioPlaying: "Playing American English pronunciation…",
    sentenceAudioFinished: "Sentence finished.",
    emptyMastered: "Your mastered words will appear here.", reviewWord: "Review", emptyCustom: "No saved words yet.",
    remove: "Remove", removeWord: "Remove {word}", removeError: "Could not remove this word from browser storage.",
    duplicateWord: "That word is already in your practice list.", saveError: "Could not save on this device. Check your browser storage settings.",
    saveMasteredError: "Could not save your progress on this device. Check your browser storage settings.",
    savedConfirmation: "“{word}” is saved and ready to practice.", definitionPrefix: "English definition",
    definitionChineseUnavailable: "中文釋義暫無提供。", languageEnglish: "English", languageChinese: "繁體中文"
  },
  zh: {
    metaDescription: "累積英語詞彙、閱讀分級短文，並練習批判性閱讀。",
    brandHome: "Ezy 首頁", yourLevel: "你的程度", chooseLevel: "選擇 CEFR 英語程度", language: "語言", chooseLanguage: "選擇語言",
    mainNavigation: "主要導覽", home: "首頁", learn: "學詞彙", read: "閱讀", conversationNav: "會話", dailyConversations: "日常會話", quiz: "測驗", myWords: "我的詞彙",
    yourEnglishPractice: "你的英語練習", growYour: "拓展你的", wordPower: "英語詞彙力。",
    homeIntro: "每天練習一點點，就能開啟更寬廣的世界。", startLearning: "開始學習",
    learningAtAGlance: "學習進度一覽", wordsMastered: "已熟記詞彙", wordsToExplore: "待學習詞彙",
    academicEssentials: "學術核心詞彙", pickPractice: "選擇你喜歡的練習", choosePractice: "選擇練習方式",
    vocabulary: "詞彙學習", vocabularyDescription: "搜尋、聆聽發音，逐步擴充詞彙庫。", reading: "閱讀練習",
    readingDescription: "閱讀符合目前程度的短文。", criticalReading: "批判性閱讀",
    criticalReadingDescription: "推論作者觀點，深入思考文章內容。", vocabularyStudio: "詞彙學習室",
    meetNewWord: "認識一個新單字", vocabularyIntro: "優先練習學術核心詞彙，也可以隨時搜尋完整詞庫。",
    wordLibraryCounts: "7,000 個單字 · 200 個學術詞彙", chooseWordMeaning: "選擇一個單字查看釋義。",
    simpleDefinition: "簡明英語釋義", exampleSentences: "例句",
    partOfSpeechUnavailable: "暫無資料", exampleTranslationUnavailable: "暫無繁體中文翻譯。",
    vocabularyDetailsLoading: "正在載入詞性、釋義與例句翻譯…",
    listen: "聆聽發音", previous: "上一個", next: "下一個", wordLibrary: "詞彙庫", findWord: "查找單字",
    searchVocabulary: "搜尋詞彙", searchWordPlaceholder: "搜尋英文單字…", prioritizeAcademic: "優先顯示學術詞彙",
    searchResults: "詞彙搜尋結果", searchHint: "點選聆聽可使用瀏覽器的美式英語語音。",
    exampleLookingUp: "正在查詢例句…", exampleUnavailable: "目前無例句資料。",
    readingPractice: "分級閱讀", momentToRead: "來讀一篇短文",
    readingIntro: "仔細閱讀文章，留意細節，想想作者希望你注意什麼。",
    checkUnderstanding: "檢查閱讀理解", readingTip: "閱讀提示",
    readingTipText: "先留意事實，再思考作者對這些事實的看法。推論不只是尋找明確寫出的資訊，也要理解文章暗示的內容。",
    thinkBeyondWords: "讀懂字裡行間", readingCheck: "閱讀理解測驗",
    quizIntro: "根據文章證據進行推論、判斷作者立場，並深入思考。",
    roundComplete: "本回合完成", lookGrow: "看，你正在進步。", tryAgain: "再試一次", backHome: "返回首頁",
    yourProgress: "你的學習進度", myWordsIntro: "查看已熟記的單字，也可以收藏想練習的詞彙。",
    masteredWords: "已熟記的單字", addWord: "新增自訂單字", wordLabel: "單字", wordPlaceholder: "例如：curious",
    meaningLabel: "釋義", meaningPlaceholder: "這個單字是什麼意思？", exampleLabel: "例句", optional: "（選填）",
    examplePlaceholder: "用這個單字造句", saveWord: "儲存單字", savedWords: "你收藏的單字",
    footer: "每天進步一點點，終會扎根成長。",
    labelAcademic: "學術核心詞彙", labelPersonal: "自訂詞彙", labelLibrary: "詞彙庫",
    categoryAcademic: "學術詞彙", categoryPersonal: "自訂", categoryVocabulary: "一般詞彙",
    academicPosition: "學術詞彙 {index} / 200", searchPosition: "搜尋 7,000 個英語單字",
    masteredButton: "已熟記 ✓", markMastered: "標記為已熟記", lookingUp: "正在查詢單字釋義…",
    definitionUnavailable: "目前無法取得釋義。你仍然可以聆聽發音並標記此單字以供練習。",
    lookupRetry: "請檢查網路連線，然後重新選擇單字再試一次。",
    speechUnavailable: "此瀏覽器不支援語音播放。", speechError: "瀏覽器無法播放此單字的發音。",
    noSearchResults: "找不到符合的單字，請嘗試縮短搜尋內容。", academicTag: "學術詞彙", masteredTag: "已熟記",
    wordCount: "{count} 個單字", advancedC1: "C2 · C1 進階閱讀文章", cefrLevel: "{level} 程度（CEFR）",
    shortPassage: "分級閱讀文章", passageCollection: "{count} 篇文章 · 每篇至少 3 分鐘", minutesRead: "約需 {minutes} 分鐘", previousPassage: "上一篇", nextPassage: "下一篇", usefulVocabulary: "實用詞彙", questionProgress: "第 {current} 題，共 {total} 題",
    basedOn: "根據《{title}》 · {level} 程度", inference: "推論", authorStance: "作者立場",
    thinkCritically: "批判性思考", correctFeedback: "回答正確！{explanation}",
    incorrectFeedback: "再仔細想想。{explanation}", seeScore: "查看成績", nextQuestion: "下一題",
    perfectResults: "太棒了！你仔細閱讀文章，並能用文中證據支持自己的判斷。",
    goodResults: "做得不錯！繼續培養良好的閱讀習慣，留意支持各個觀點的線索。",
    retryResults: "繼續加油！再讀一次文章，找找支持各個答案的細節。",
    correct: "正確", review: "複習", masteredCount: "已熟記 {count} 個",
    dailyConversationDescription: "練習日常生活中實用的英語表達。",
    conversationPractice: "實用生活英語", conversationIntro: "練習校園、辦公室等日常英語句子，也可閱讀 B2–C1 程度的勵志名言。",
    conversationTopics: "日常與名言主題", school: "校園", office: "辦公室", shopping: "購物", orderingFood: "點餐", directions: "交通與方向", appointments: "預約", inspirationalQuotes: "勵志名言",
    everydayEnglish: "句子練習", quotePractice: "勵志名言", listenLine: "聆聽美式英語發音", previousSentence: "上一句", nextSentence: "下一句",
    quickQuiz: "快速測驗", checkYourUnderstanding: "理解小測驗", retryConversationQuiz: "再試一次",
    conversationCorrect: "答對了！", conversationIncorrect: "再想一想，試著複習上方的句子。",
    sentenceProgress: "第 {current} 句，共 {total} 句", quoteProgress: "第 {current} 則，共 {total} 則", conversationHint: "先閱讀英文句子和繁體中文翻譯，再聆聽美式英語發音。",
    conversationAudioPlaying: "正在播放美式英語發音…",
    sentenceAudioFinished: "句子播放完畢。",
    emptyMastered: "已熟記的單字會顯示在這裡。", reviewWord: "複習", emptyCustom: "還沒有收藏的單字。",
    remove: "刪除", removeWord: "刪除單字 {word}", removeError: "無法從瀏覽器儲存空間刪除此單字。",
    duplicateWord: "這個單字已經在你的詞彙練習清單中。", saveError: "無法儲存至此裝置，請檢查瀏覽器的儲存設定。",
    saveMasteredError: "無法儲存你的學習進度，請檢查瀏覽器的儲存設定。",
    savedConfirmation: "已儲存「{word}」，可以開始練習了。", definitionPrefix: "英文釋義",
    definitionChineseUnavailable: "中文釋義暫無提供。", languageEnglish: "English", languageChinese: "繁體中文"
  }
};

const passages = {
  A1: {
    topic: "At the pharmacy",
    title: "A Question About Cold Medicine",
    text: [
      "After work, Daniel stops at a pharmacy because he has a sore throat and a stuffy nose. He finds the cold medicine, but there are several kinds. One box says it may cause sleepiness. Daniel is driving home, so he wants to choose carefully.",
      "He asks the pharmacist, “Is there a medicine that will not make me sleepy?” The pharmacist asks whether Daniel takes any other medicine. Daniel says no. She points to a different box and explains the directions: take one tablet with water every six hours, but no more than four tablets in one day.",
      "Daniel reads the label before he pays. He also asks whether he should take the medicine with food. The pharmacist says it is fine either way, but he should stop taking it and ask a doctor if he feels worse. Daniel buys the medicine and saves the receipt in his bag.",
      "At home, Daniel puts the box where he can find it easily, but away from children and pets. He checks the clock before taking the first tablet. Reading the label again helps him remember the time and the daily limit. He does not take another tablet just because his throat still hurts.",
      "The pharmacist's questions are important. People can use more than one medicine, and two products may contain the same ingredient. A customer who is not sure can show the pharmacist the other medicine or ask a doctor. Giving clear information helps a health professional offer advice that fits the person.",
      "Daniel also knows that medicine does not replace rest and care. He drinks water and plans to get a good night's sleep. If a new or serious symptom appears, he will ask for medical help instead of guessing. By reading directions and asking questions, he makes a safer choice for the trip home and the days after."
    ],
    vocabulary: [
      { term: "pharmacist", definition: "A health professional who prepares and gives out medicine." },
      { term: "cause sleepiness", definition: "Make someone feel tired and ready to sleep." },
      { term: "directions", definition: "Instructions that explain how to use something." },
      { term: "receipt", definition: "A paper or message showing what you paid for." }
    ],
    questions: [
      { type: "Inference", prompt: "Why does Daniel ask about medicine that will not make him sleepy?", options: ["He needs to drive home.", "He has forgotten how to read the label.", "He wants to give the medicine to the pharmacist."], answer: 0, explanation: "Daniel says he is driving, so a medicine that causes sleepiness could make the trip unsafe." },
      { type: "Author's stance", prompt: "How does the passage present the pharmacist's role?", options: ["As someone who helps the customer make an informed choice.", "As someone who pressures customers to buy the most expensive medicine.", "As someone who tells customers to ignore medicine labels."], answer: 0, explanation: "The pharmacist asks about other medicine and explains the directions before Daniel decides what to buy." },
      { type: "Think critically", prompt: "What is the safest next step if Daniel is unsure how often to take the tablets?", options: ["Read the label and ask the pharmacist to explain it.", "Take several tablets at once to feel better sooner.", "Follow instructions from a friend who uses a different medicine."], answer: 0, explanation: "The label and pharmacist provide directions for this specific medicine; taking extra tablets or relying on another person's instructions could be unsafe." }
    ]
  },
  A2: {
    topic: "Delivery problem",
    title: "A Package That Did Not Arrive",
    text: [
      "On Tuesday evening, Priya checks the delivery app for a set of headphones she ordered. The app says “delivered,” but there is nothing at her door. She checks the building lobby and asks her roommate, who has not seen the package either.",
      "Priya opens the order details and finds a photo of a package beside a different apartment door. She sends a message to the delivery company with her order number and explains what happened. The company replies that it will contact the driver and update her the next day.",
      "The following morning, Priya still has no package, so she contacts the online store as well. A support worker confirms that the delivery photo does not match Priya's address. The store offers to send a replacement without charging her again. Priya checks the new tracking information and asks the store to leave the package with the building manager if she is at work. She saves the messages until the replacement arrives.",
      "Priya's first checks are simple, but they help rule out common possibilities. A package may be left in a lobby, accepted by a neighbor, or placed near another entrance. Asking her roommate and looking around the building are quick steps. The photograph then gives her a stronger clue about what happened.",
      "When she writes to the delivery company, Priya includes the order number and describes the problem clearly. This makes it easier for a worker to find the correct delivery record. She does not need to send unrelated personal information. A short, specific message is enough to begin an investigation.",
      "The store and the delivery company have different jobs. The delivery company can ask the driver about the drop-off, while the store can arrange another item or discuss a refund. Priya contacts both because she wants to understand the delivery and make sure she receives what she ordered.",
      "Priya also plans for the next delivery. By asking for the building manager to receive it, she offers a clear alternative if she is away. Keeping the messages gives her a record of the agreement. Her calm follow-up turns a confusing problem into a set of steps she can check."
    ],
    vocabulary: [
      { term: "order details", definition: "Information about something you bought." },
      { term: "order number", definition: "A number used to identify a purchase." },
      { term: "replacement", definition: "A new item given in place of one that is missing or damaged." },
      { term: "tracking information", definition: "Updates that show where a delivery is." }
    ],
    questions: [
      { type: "Inference", prompt: "Why does Priya save the messages from the store?", options: ["They document what the store promised if another problem occurs.", "She plans to use them as proof that she ordered headphones for someone else.", "The messages contain the driver's home address."], answer: 0, explanation: "Keeping the messages gives Priya a record of the replacement offer and delivery arrangement." },
      { type: "Author's stance", prompt: "How does Priya respond to the delivery problem?", options: ["She checks the evidence and contacts the companies with clear information.", "She immediately orders another pair from a different store.", "She waits several weeks without asking for an update."], answer: 0, explanation: "Priya checks the lobby, roommate, and delivery photo, then shares her order number and follows up." },
      { type: "Think critically", prompt: "Which detail gives the store the clearest reason to send a replacement?", options: ["The delivery photo shows a different apartment door.", "Priya ordered the headphones on Tuesday.", "Her roommate has not seen the package."], answer: 0, explanation: "The photo is direct evidence that the package may have been left at the wrong address." }
    ]
  },
  B1: {
    topic: "Appointments",
    title: "Rescheduling a Dental Visit",
    text: [
      "On Monday morning, Lena realizes that a work meeting has been scheduled for the same time as her dental appointment on Thursday. She checks the clinic's reminder message before calling. It says that patients should give at least 24 hours' notice to avoid a late-cancellation fee.",
      "When Lena reaches the front desk, she explains the conflict and asks whether she can reschedule. The receptionist checks the calendar. The next available appointment is three weeks away, but another patient has asked to be contacted if an earlier time opens up. Lena agrees to join the cancellation list and gives the clinic her preferred days and times.",
      "The receptionist also explains that Lena can keep Thursday's appointment if her meeting changes, but the clinic needs confirmation by Wednesday afternoon. Lena asks for the new appointment details by email and repeats the date and time to make sure she heard correctly. Before hanging up, she adds the appointment to her calendar and sets a reminder for the day before.",
      "Later, Lena tells her manager that she may be able to attend the meeting if the clinic has an opening. She does not assume the appointment is changed until the clinic sends written confirmation. That small step prevents a mix-up and gives her time to plan around either schedule.",
      "Lena has to balance two responsibilities without knowing which schedule will change first. The cancellation list offers a possible earlier visit, but it is not a promise. By giving the clinic a few suitable times, she makes it easier for the receptionist to contact her if a space becomes available.",
      "The written message is useful because people can mishear dates or remember a conversation differently. Lena checks the email against what she wrote in her calendar. If the time is wrong, she can contact the clinic while there is still time to correct it. A reminder also helps her avoid missing the confirmed visit.",
      "The clinic's cancellation rule affects Lena's decision as well. Knowing the notice period helps her avoid an unexpected fee if she must change plans again. It also gives her a clear point at which to make a choice: Wednesday afternoon, when the clinic needs her confirmation.",
      "Lena's approach is careful, not complicated. She shares the conflict, asks about options, repeats the details, and waits for confirmation. These steps give both her and the clinic the same information. They also leave room for the original appointment to remain in place if her work meeting changes.",
      "Before Wednesday afternoon, Lena can compare the clinic's reply with her work calendar. If no earlier visit becomes available, she still has time to discuss the Thursday meeting with her manager. Planning for both possibilities is more reliable than treating the cancellation list as a confirmed appointment."
    ],
    vocabulary: [
      { term: "reschedule", definition: "Arrange for an event to happen at a different time." },
      { term: "late-cancellation fee", definition: "A charge for canceling an appointment too close to its scheduled time." },
      { term: "cancellation list", definition: "A list of people who can take an earlier appointment if one becomes available." },
      { term: "confirmation", definition: "A message or statement that shows an arrangement is final." }
    ],
    questions: [
      { type: "Inference", prompt: "Why does Lena repeat the new appointment details during the call?", options: ["To check that she has understood the date and time correctly.", "To persuade the receptionist to remove the cancellation fee.", "To show that the meeting is more important than her appointment."], answer: 0, explanation: "Repeating the details helps prevent a scheduling mistake." },
      { type: "Author's stance", prompt: "What does the passage suggest about managing appointments?", options: ["Clear confirmation and reminders can prevent avoidable confusion.", "A verbal suggestion is always enough to finalize a new appointment.", "People should avoid asking about cancellation policies."], answer: 0, explanation: "Lena asks for written confirmation, checks the details, and sets a reminder to keep the plan clear." },
      { type: "Think critically", prompt: "When should Lena treat the new appointment as final?", options: ["After the clinic sends confirmation of the new date and time.", "As soon as she asks to join the cancellation list.", "When she tells her manager that she may attend the meeting."], answer: 0, explanation: "The passage says Lena does not assume the appointment has changed until the clinic confirms it in writing." }
    ]
  },
  B2: {
    topic: "Renting a home",
    title: "When a Leak Needs More Than a Quick Fix",
    text: [
      "When Maya notices a damp patch spreading across her kitchen ceiling, she first assumes that a neighbor has spilled water. By the next morning, however, a drop falls onto the counter every few minutes. She moves her small appliances, places a bowl beneath the leak, and takes photographs showing both the stain and the water collecting below it.",
      "Maya checks her lease for the landlord's maintenance procedure and submits a maintenance request through the tenant portal. She describes when the leak began, notes that it is getting worse, and attaches the photographs. Because water is near a ceiling light, she also calls the emergency maintenance number rather than relying only on the online form. The person on duty tells her not to touch the fixture and says a technician will arrive that afternoon.",
      "The technician finds a loose connection in a pipe above the ceiling. The immediate leak is stopped, but the ceiling material is still wet and needs to dry before it can be repaired. Maya asks whether she should contact her renter's insurance company and whether the building will cover the damaged paint. The technician can explain the repair schedule but cannot make a decision about costs, so Maya sends those questions to the property manager in writing.",
      "The next day, the property manager confirms that a contractor will inspect the ceiling and that Maya should keep receipts for any reasonable expenses caused by the leak. She also receives a time window for the visit. By documenting the problem and using the emergency contact, Maya helps prevent further damage while creating a clear record of what still needs to be resolved.",
      "Maya's response has two parts: limiting immediate risk and arranging a lasting repair. Moving appliances and placing a bowl under the drops can reduce damage, but these actions do not fix the pipe. Calling the emergency number matters because water near electricity can create a hazard. She follows the technician's advice and leaves the light fixture alone.",
      "The photographs and maintenance request also help explain how the problem changed. A stain that grows over time may need a different response from a small mark that stays dry. The dates and images allow the property manager to see what Maya reported and when. A clear record can make later conversations more specific.",
      "There are still questions after the leak stops. The pipe has been repaired, but wet ceiling material may need attention, and the responsibility for costs has not yet been decided. Maya sends those questions to the person who can address the property arrangements instead of expecting the technician to decide.",
      "A repair can involve several people, each with a different role. The emergency worker handles immediate safety, the technician checks the equipment, and the property manager coordinates follow-up. Maya's notes help each person understand what has happened so far. The repair is not complete until the remaining work and costs are clarified."
    ],
    vocabulary: [
      { term: "lease", definition: "A legal agreement between a renter and a property owner." },
      { term: "maintenance request", definition: "A formal report asking for a repair or building service." },
      { term: "technician", definition: "A trained worker who installs, checks, or repairs equipment." },
      { term: "receipt", definition: "Proof that a payment was made." }
    ],
    questions: [
      { type: "Inference", prompt: "Why does Maya call emergency maintenance after submitting the online request?", options: ["The leak is worsening and is close to an electrical fixture.", "The tenant portal refuses to accept photographs.", "She wants the technician to decide what her insurance covers."], answer: 0, explanation: "Water near a ceiling light may require a faster response, so she uses the emergency contact as well as documenting the issue online." },
      { type: "Author's stance", prompt: "How does the passage present written records such as photos, requests, and receipts?", options: ["As practical tools for tracking a repair and clarifying later questions.", "As unnecessary paperwork that delays all repairs.", "As a substitute for contacting maintenance about an urgent leak."], answer: 0, explanation: "The records help show the damage, preserve the timeline, and support follow-up about expenses." },
      { type: "Think critically", prompt: "Which issue remains unresolved after the technician stops the leak?", options: ["Who is responsible for the damaged paint and related costs.", "Whether the leak came from a pipe above the ceiling.", "Whether Maya should move her appliances away from the water."], answer: 0, explanation: "The repair source is identified and the leak is stopped, but cost responsibility must still be addressed by the property manager or insurer." }
    ]
  },
  C1: {
    topic: "Healthcare and personal finance",
    title: "Reading a Medical Bill Before Paying It",
    text: [
      "When Elena receives a medical bill for a recent clinic visit, the total is substantially higher than she expected. She had checked that the clinic was in-network with her insurer, and the receptionist had told her the visit would involve a routine co-payment. Rather than assuming the bill is either correct or fraudulent, Elena compares it with the explanation of benefits from her insurer.",
      "The documents describe the same appointment but list different amounts for one laboratory test. The insurer's statement says part of the charge was applied to Elena's deductible, while the clinic's bill appears to include the full amount. She checks the service date, the billing code, and the account number before calling the billing office. This preparation helps her ask a specific question: was the claim processed after the insurer's adjustment, or was the original charge sent by mistake?",
      "The billing representative says the claim is still being reviewed and advises Elena not to pay the disputed portion until the review is complete. Elena asks for that instruction in writing, notes the representative's name and the call date, and requests an itemized statement. She also contacts her insurer to confirm whether the test is covered and whether any preauthorization was required. The insurer confirms the adjustment but cannot correct the clinic's account directly.",
      "A week later, the clinic sends a revised bill that matches the insurer's explanation. The correction does not mean every unexpected charge is an error; deductibles, out-of-network services, and non-covered procedures can all affect a patient's share. But comparing documents, checking codes, and keeping a record of conversations gives Elena a clearer basis for deciding what to pay and what to question.",
      "Medical bills can be difficult to read because several organizations describe the same visit from different points of view. A clinic lists the services it provided, while an insurer explains how a claim was processed under a particular plan. The amounts may not match until the insurer's adjustment reaches the provider's account.",
      "Elena checks identifying details before discussing the difference. A service date, billing code, or account number can reveal that two documents refer to separate items, even when they arrive close together. An itemized statement makes each charge easier to compare. It also helps Elena ask about one specific test rather than challenge the entire bill.",
      "Her questions are directed to the organization that can answer them. The clinic can explain its account and correct a billing error; the insurer can explain coverage and the deductible. Neither organization necessarily controls every part of the process. Elena's notes record who gave each answer, so she can follow up without starting over.",
      "Waiting for a review does not mean Elena ignores the bill. She keeps the documents together, checks the response date, and follows the written instruction about the disputed amount. If the review had not corrected the problem, her records would help her explain the issue again or ask about the next appeal step.",
      "The example also shows why a surprising total should be examined rather than accepted or rejected immediately. Some costs are a patient's responsibility, while others may result from delayed processing or incorrect information. Comparing documents gives Elena evidence for deciding which explanation fits. It cannot guarantee that every charge will be removed, but it makes the decision more informed.",
      "When she reviews the revised statement, Elena can check that the service date and account number still match. If a new difference appears, she can describe it precisely and refer to the earlier conversation. This process does not replace professional advice, but it helps her understand the bill and ask informed questions about her own coverage."
    ],
    vocabulary: [
      { term: "in-network", definition: "Included in an insurer's group of approved healthcare providers." },
      { term: "deductible", definition: "The amount a person pays before insurance begins covering certain costs." },
      { term: "itemized statement", definition: "A detailed list showing each service and charge separately." },
      { term: "preauthorization", definition: "Approval from an insurer required before some services are provided." }
    ],
    questions: [
      { type: "Inference", prompt: "Why does Elena compare the clinic bill with the insurer's explanation of benefits?", options: ["To identify where the amounts differ before asking either organization to clarify.", "To prove that all laboratory tests should be free.", "To determine whether the clinic is outside the insurer's network."], answer: 0, explanation: "The documents show different amounts for the same test, allowing Elena to make a focused inquiry rather than guessing." },
      { type: "Author's stance", prompt: "Which statement best reflects the passage's view of unexpected medical charges?", options: ["They may be valid or mistaken, so patients should check the details before deciding.", "They are usually fraudulent and should never be paid.", "They are always correct if a provider is in-network."], answer: 0, explanation: "The final paragraph notes several legitimate reasons a patient may owe money, while still encouraging careful review of discrepancies." },
      { type: "Think critically", prompt: "What is the strongest reason for Elena to request an itemized statement and keep a call record?", options: ["They provide specific evidence she can use to follow up on the disputed charge.", "They guarantee that the insurer will pay the entire bill.", "They replace the need to wait for the claim review."], answer: 0, explanation: "A detailed statement and notes create a clear record for further questions, but they do not guarantee coverage or bypass the review." }
    ]
  }
};

const readingScenarios = [
  ["Healthy sleep", "A Better Evening Routine", "Sam finds that he feels tired each morning.", "Sam stops using his phone in bed.", "He starts a calm routine one hour before bedtime.", "He reads for a short time and keeps the room dark.", "After two weeks, he wakes more easily and feels less rushed.", ["routine", "tired", "darkness"], "What change does Sam make first?", "He stops using his phone in bed.", ["He buys a new desk.", "He drinks coffee at night."], "What attitude does the passage take toward a bedtime routine?", "What evidence suggests the routine is helping?", ["Sam wakes more easily after two weeks.", "Sam buys several new lamps.", "Sam changes his morning alarm once."]],
  ["Public transport", "Planning a Bus Journey", "Mina needs to visit the library across town.", "A bus leaves every twenty minutes.", "She checks the route and departure time before leaving home.", "Mina leaves early because road works may cause delays.", "The extra time means she arrives without panic.", ["route", "depart", "delay"], "How often does the bus leave?", "Every twenty minutes.", ["Every hour.", "Once a day."], "What does the passage suggest about preparation?", "Why might Mina arrive without panic?", ["She allows extra time for possible delays.", "The bus travels faster than usual.", "The library opens late."]],
  ["Cooking", "The Soup Recipe", "Leo wants to cook vegetable soup.", "The recipe has four main ingredients.", "Leo chops the vegetables and heats them gently.", "He tastes the soup before adding extra salt.", "The careful seasoning makes the final result balanced.", ["ingredient", "gently", "season"], "What does Leo do before adding extra salt?", "He tastes the soup.", ["He adds more water.", "He serves it to his friends."], "How does the passage present careful cooking?", "Why does Leo taste the soup first?", ["To judge whether it needs more seasoning.", "To cool the vegetables quickly.", "To check whether the pot is large enough."]],
  ["Library", "A Quiet Study Place", "Nora visits the library after school.", "She chooses the second floor because it is quiet.", "She saves a table near the window.", "Nora divides her work into short sections.", "By closing time, she has finished more than she expected.", ["section", "quiet", "study"], "Why does Nora choose the second floor?", "It is quiet.", ["It has a café.", "It is closer to the entrance."], "What does the passage say about a study environment?", "What evidence shows Nora used her time well?", ["She finished more work than she expected.", "She left before completing a page.", "The library closed early."]],
  ["Environment", "The Community Garden", "A neighborhood creates a small community garden.", "Residents share plots and tools.", "The group decides on a weekly watering schedule.", "New compost improves the soil in several beds.", "The garden provides food and gives neighbors a reason to meet.", ["resident", "compost", "soil"], "How do residents share the garden?", "They share plots and tools.", ["They keep every plant private.", "They sell the tools each week."], "How does the passage view community gardens?", "Which two benefits does the garden provide?", ["Food and a place for neighbors to meet.", "Parking and faster buses.", "A replacement for every market."]],
  ["Workplace", "A Fair Meeting Agenda", "Rosa prepares an agenda for a team meeting.", "Three items must be discussed in order.", "She asks colleagues to submit priorities beforehand.", "A strict time limit prevents later topics from being ignored.", "The meeting ends with clear owners for each decision.", ["agenda", "priority", "limit"], "What does Rosa prepare?", "An agenda.", ["A lunch menu.", "A training exam."], "What is the passage's view of planning meetings?", "What does a time limit help prevent?", ["Later topics are ignored.", "Colleagues arrive on time.", "The agenda is printed in advance."]],
  ["Shopping", "Choosing a Winter Coat", "Ben compares two winter coats.", "One coat is lighter but not waterproof.", "He considers the weather and how often he will walk outside.", "Ben chooses the waterproof coat despite its higher price.", "The decision reflects future use rather than appearance alone.", ["waterproof", "compare", "price"], "Which coat does Ben choose?", "The waterproof coat.", ["The cheaper lightweight coat.", "A coat with no buttons."], "What influences Ben's decision?", "Why might the waterproof coat be a practical choice?", ["It is better suited to his likely outdoor conditions.", "It costs less than every alternative.", "It looks different from his other clothes."]],
  ["Technology", "A Safer Password", "Maya receives an unusual login alert.", "She does not open the link in the message.", "Maya signs in through the official app and changes her password.", "She also enables a second verification step.", "The account is protected even if someone learns the old password.", ["login alert", "password", "verification"], "What does Maya do after the alert?", "She uses the official app and changes her password.", ["She replies to the sender.", "She ignores all of her accounts."], "What attitude does the passage show toward online security?", "How does second verification protect Maya's account?", ["It provides an extra barrier beyond her password.", "It removes the need for a password.", "It changes every password automatically."]],
  ["Sports", "Learning from a Match", "A basketball team loses by only four points.", "The coach reviews the final quarter instead of blaming players.", "The players identify missed passes and hurried shots.", "They practice those situations in the next training session.", "The review turns a narrow defeat into useful evidence.", ["review", "identify", "defeat"], "What part of the game does the coach review?", "The final quarter.", ["The team's uniforms.", "The spectators' reactions."], "How does the passage present losing?", "Why might reviewing the match help the team?", ["It identifies specific skills that need practice.", "It guarantees an easier opponent next time.", "It removes every mistake from the record."]],
  ["Travel", "An Overnight Delay", "Theo's train is delayed overnight.", "The station provides meal vouchers and a hotel room.", "Theo keeps his ticket and follows the staff's instructions.", "He sends an updated arrival time to his host.", "By acting calmly, he reduces uncertainty for everyone involved.", ["delay", "voucher", "arrival"], "What help does the station provide?", "Meal vouchers and a hotel room.", ["A later flight.", "A rental car for a month."], "What lesson does the passage communicate?", "Why does Theo update his host?", ["So his host knows when he will arrive.", "So his host can cancel the tickets.", "Because the hotel needs his host's permission."]],
  ["Science", "Testing Plant Growth", "A science class compares two plants.", "Only one plant receives fertilizer.", "The class measures both plants under the same light and water schedule.", "A comparison chart records the results each week.", "A fair test allows the students to judge the fertilizer's effect.", ["fertilizer", "measure", "effect"], "Which variable is changed in the experiment?", "One plant receives fertilizer.", ["Both plants receive different amounts of water.", "The plants stay in different rooms."], "What does the passage imply about a fair test?", "Why must the plants receive the same amount of light and water?", ["To isolate the effect of the fertilizer.", "To make the plants look identical.", "To finish the experiment sooner."]],
  ["Money", "A Monthly Budget", "Daniel keeps track of his monthly expenses.", "His transport cost rises after fares increase.", "He compares necessary costs with optional purchases.", "Daniel reduces takeaway meals for a month.", "The adjustment keeps his budget stable without ending all leisure spending.", ["expense", "budget", "fare"], "Why does Daniel change his spending?", "Transport fares have increased.", ["He receives a higher bank fee.", "His internet is free now."], "How does the passage view budgeting?", "What spending does Daniel reduce?", ["Takeaway meals.", "His monthly rent.", "The bus fare."]],
  ["Community", "The Missing Streetlight", "Several residents report that a streetlight is broken.", "The same problem has appeared on each evening walk.", "A neighborhood group submits a repair request with a photograph.", "Local officials place the case in their maintenance schedule.", "The clear evidence helps the request receive attention.", ["resident", "repair", "evidence"], "What evidence does the group submit?", "A photograph.", ["A list of passing buses.", "A map of the nearest park."], "How does the passage present civic action?", "Why may the photograph help?", ["It provides direct evidence of the problem.", "It proves the whole street was damaged.", "It allows residents to meet at night."]],
  ["School", "An Improved Presentation", "Yara notices that her presentation has too much text.", "Only one main idea appears on each slide.", "She replaces long sentences with diagrams and short labels.", "Yara rehearses once so that her explanation remains natural.", "The revised presentation gives her audience less to read and more to understand.", ["diagram", "audience", "rehearse"], "What change does Yara make to her slides?", "She uses diagrams and short labels.", ["She removes every title.", "She adds more paragraphs."], "What does the passage suggest makes a presentation clear?", "Why does Yara rehearse?", ["To keep her explanation natural and focused.", "To increase the number of slides.", "To memorize the diagram names."]],
  ["Health", "Interpreting a Fever", "A child develops a mild fever during the night.", "The parent checks the temperature and observes the child's energy.", "The parent follows a home care plan and watches for warning signs.", "If breathing becomes difficult, the parent seeks medical help promptly.", "The measured response is careful rather than alarmed or careless.", ["fever", "warning sign", "prompt"], "What does the parent check at first?", "The child's temperature and energy.", ["The child's favorite program.", "The calendar for the next week."], "How does the passage view health decisions?", "What warning sign requires prompt medical help?", ["Difficulty breathing.", "Being tired after lunch.", "Wanting a blanket."]],
  ["Food", "Reducing Food Waste", "A café begins tracking the food it throws away.", "Prepared meals are checked against the day's likely demand.", "Staff move unsold items to a lower-cost menu near closing time.", "The café also records what customers return uneaten.", "Measuring waste helps the owners make choices based on evidence.", ["demand", "unsold", "record"], "What does the café track?", "The food it throws away.", ["The number of chairs.", "The music volume."], "How does the passage present reducing waste?", "What information helps the café improve?", ["Records of waste and customer choices.", "The opinions of new suppliers.", "A larger refrigerator alone."]],
  ["History", "A Family Photograph", "Amir finds an old photograph in a family album.", "A building in the background helps him identify the location.", "He asks relatives about the event and checks dates in letters.", "The interview adds detail to the official story of the family.", "Different sources allow Amir to distinguish memory from evidence.", ["album", "location", "source"], "What helps Amir identify the photograph's location?", "The building in the background.", ["The frame's price.", "The season of the next photo."], "What does the passage suggest about historical evidence?", "Why does Amir use several sources?", ["To compare memories with more reliable evidence.", "To prove every memory is false.", "To remove uncertain dates completely."]],
  ["Jobs", "Preparing for an Interview", "Leila applies for a customer service position.", "The advertisement mentions teamwork and problem solving.", "Leila prepares examples that show both skills.", "She also practices explaining a mistake and what she learned.", "Specific examples make her qualifications easier for the interviewer to judge.", ["advertisement", "qualify", "interviewer"], "What skills does the advertisement mention?", "Teamwork and problem solving.", ["Accounting and design.", "Driving and gardening."], "What does the passage say about effective applications?", "Why should Leila use specific examples?", ["They make her skills credible and observable.", "They hide every weakness from the interviewer.", "They replace questions during the interview."]],
  ["News", "Checking an Online Claim", "Owen sees a dramatic claim shared in a social post.", "The post does not link to a reliable source.", "Owen searches for original reporting and checks the date.", "He compares claims from independent organizations.", "Waiting for confirmation is safer than repeating uncertain information.", ["claim", "source", "confirm"], "What does Owen find missing from the social post?", "A link to a reliable source.", ["A photograph of Owen.", "A list of emojis."], "What attitude does the passage take toward online claims?", "Why does Owen compare independent organizations?", ["To judge whether the claim is supported consistently.", "To find one source that agrees with everyone.", "To increase the number of posts he shares."]],
  ["Weather", "Preparing for Heavy Rain", "A town expects heavy rain overnight.", "The weather service warns of possible flooding near a river.", "Residents move cars from low ground and secure outdoor objects.", "An emergency office publishes an evacuation route.", "Preparation does not remove risk, but it reduces preventable harm.", ["flooding", "secure", "evacuation"], "What risk does the weather service warn about?", "Possible flooding near a river.", ["Heavy snow in the desert.", "A shortage of weather reports."], "How does the passage present emergency preparation?", "Why might moving cars help?", ["It reduces the chance that they will be damaged in low-lying flood areas.", "It makes the river move faster.", "It prevents every storm from forming."]],
  ["Culture", "A Community Festival", "A town organizes a festival celebrating local cultures.", "Performers explain the meaning behind their music and clothing.", "Organizers provide accessible seating and translated programs.", "Visitors are invited to ask respectful questions.", "The extra planning allows participation to be both educational and inclusive.", ["performer", "accessible", "inclusive"], "What do performers explain?", "The meaning behind their music and clothing.", ["The town's tax policy.", "The size of the stage roof."], "What does the passage suggest about a successful festival?", "Why does accessibility matter?", ["It allows more people to participate comfortably.", "It makes every performance identical.", "It removes the need for planning."]],
  ["Animals", "Protecting a Wetland", "A wetland is losing plant cover.", "Researchers find that runoff carries extra sediment into the water.", "Local teams add native plants along the edge.", "The roots hold soil and create more habitat for small animals.", "Restoration requires patience because plant cover grows gradually.", ["wetland", "sediment", "habitat"], "What problem do researchers identify?", "Runoff carries sediment into the water.", ["Fish build too many nests.", "Rain stops reaching the wetland."], "How does the passage present environmental restoration?", "How do native plants help the wetland?", ["Their roots hold soil and support habitat.", "They remove every animal from the water.", "They stop all rain from entering."]],
  ["Education", "Choosing an Online Course", "Sofia compares two online language courses.", "One offers live tutoring, while the other provides only recordings.", "Sofia checks the cost and considers whether she needs feedback.", "She chooses the tutoring course because speaking practice is her priority.", "The decision reflects a specific learning need rather than the larger course list.", ["tutoring", "priority", "recording"], "Why does Sofia choose the tutoring course?", "She wants speaking practice and feedback.", ["It has the largest number of videos.", "It guarantees a perfect exam score."], "What guides Sofia's comparison?", "How might live tutoring help Sofia?", ["It can give immediate feedback on her speaking.", "It removes the need to practice alone.", "It replaces every course recording."]],
  ["Customer service", "Resolving a Refund", "A customer receives an incorrect charge.", "The receipt and charge date do not match the item description.", "The employee sends the documents to a supervisor.", "The supervisor approves a refund and confirms the account adjustment.", "A clear record helps the company correct the problem fairly.", ["charge", "refund", "document"], "What evidence is sent to the supervisor?", "The receipt and charge date.", ["The customer's favorite color.", "A photograph of the shop entrance."], "How does the passage present customer complaints?", "Why does clear documentation help?", ["It allows the company to verify the complaint.", "It automatically creates a new charge.", "It proves that every item was incorrect."]],
  ["Space", "Designing a Mars Habitat", "Engineers plan a habitat for a Mars mission.", "Dust, radiation, and limited sunlight create design challenges.", "The team tests a sealed module with controlled temperature and air.", "Sensors alert them when conditions move outside safe limits.", "The test identifies risks before humans depend on the system.", ["habitat", "radiation", "sensor"], "Which challenge does the habitat face?", "Dust, radiation, and limited sunlight.", ["Too much ocean pressure.", "Daily tropical storms."], "How does the passage view careful engineering?", "Why are sensors important in the test?", ["They identify unsafe changes in conditions.", "They make Mars sunlight brighter.", "They remove every design challenge."]],
  ["Media", "A Responsible Photo Caption", "A news team chooses a photograph for an article.", "The image shows a moment but does not explain the whole event.", "The editor checks the location and date before publishing.", "The caption describes what is visible without claiming more.", "Accuracy requires acknowledging limits in an incomplete image.", ["caption", "location", "accuracy"], "What does the editor check?", "The photograph's location and date.", ["The reader's age.", "The camera's purchase price."], "What principle does the passage emphasize?", "Why should the caption avoid unsupported claims?", ["The photograph alone may not explain the complete event.", "Captions should always omit names.", "Editors cannot verify images anywhere."]],
  ["Volunteer work", "A Useful Donation Drive", "A shelter asks for practical donations.", "Unsuitable items take up storage space.", "The organizer publishes a short wish list and collection date.", "Volunteers sort items and notify the shelter of shortages.", "Targeted communication improves the value of community support.", ["donation", "shelter", "shortage"], "What problem can unsuitable donations create?", "They take up storage space.", ["They make the shelter larger.", "They guarantee a shortage of every item."], "How does the passage view donation drives?", "Why does a wish list help?", ["It directs donors toward items the shelter actually needs.", "It gives donors a reason to collect unrelated goods.", "It removes the need for volunteers."]],
  ["Architecture", "Sunlight in a New Library", "A design team studies sunlight in a proposed library.", "Large windows provide views but may create glare.", "The team uses adjustable shades and places screens away from direct light.", "Public feedback helps refine the seating arrangement.", "Good design balances comfort, appearance, and practical use.", ["glare", "adjustable", "refine"], "What problem can large windows create?", "Glare.", ["A shortage of walls.", "A need for more bookshelves only."], "What balance does the passage emphasize?", "How might adjustable shades help?", ["They can reduce glare while keeping natural light.", "They eliminate all sunlight permanently.", "They move the building to a shaded area."]],
  ["Transportation", "An Accessible Bus Stop", "A city plans a safer, more accessible bus stop.", "Passengers need a clear path, a bench, and reliable route information.", "The proposal includes curb changes and a level boarding area.", "Officials test the plan with riders who use mobility devices.", "User testing reveals needs that a map alone cannot show.", ["accessible", "boarding", "proposal"], "What does the city add to improve access?", "A level boarding area and curb changes.", ["A faster ticket printer.", "A second road through the platform."], "How does the passage view public design?", "Why should officials test the plan with riders?", ["It reveals practical needs and barriers.", "It avoids any need for an accessibility map.", "It guarantees that every route remains unchanged."]],
  ["Communication", "Delivering Difficult News", "A manager must tell a team that a project is delayed.", "The delay affects the next deadline and one important customer.", "The manager explains the cause, the remaining plan, and when another update will come.", "The team is invited to ask questions and report risks.", "Honesty and timing help preserve trust during uncertainty.", ["delay", "cause", "uncertain"], "What does the manager explain?", "The cause, remaining plan, and update schedule.", ["Only the customer's name.", "The team's private opinions."], "What does the passage suggest about difficult communication?", "Why might asking for questions help?", ["It lets team members clarify concerns and expose new risks.", "It prevents every project delay.", "It removes the need for an update."]],
  ["Business", "Expanding Too Quickly", "A café considers opening a second location.", "Demand is strong, but operating costs could rise quickly.", "The owner compares lease terms and staff availability.", "A trial partnership with a local store is considered instead.", "The safer experiment tests demand without full expansion.", ["demand", "lease", "trial"], "What risk does the owner consider?", "Operating costs could rise quickly.", ["The first café might become too quiet.", "The owner may lose the menu."], "How does the passage view rapid expansion?", "Why might a trial partnership be safer?", ["It tests demand without committing to a full second location.", "It removes all labor costs.", "It guarantees an immediate profit."]],
  ["Migration", "Adapting to a New City", "Amir moves to a city where he does not know anyone.", "He joins a language group and learns the bus routes.", "Small routines help him understand unfamiliar expectations.", "He keeps in touch with family while building local friendships.", "Adaptation does not require forgetting one culture to enter another.", ["adapt", "route", "familiar"], "What two activities does Amir begin?", "He joins a language group and learns bus routes.", ["He stops studying and travels daily.", "He avoids every new person."], "What idea does the passage present about adaptation?", "How does Amir build both stability and connection?", ["He keeps routines and links to family while meeting new people.", "He changes every familiar habit immediately.", "He waits for friends to find him."]],
  ["Cities", "A More Livable Street", "A neighborhood replaces a short road with a pedestrian space.", "Local shops worry about customer access.", "The plan adds nearby loading points and wider sidewalks.", "Researchers compare foot traffic before and after the change.", "Design choices should be assessed for their effects on several groups.", ["pedestrian", "loading", "foot traffic"], "What change does the neighborhood make?", "It replaces a short road with a pedestrian space.", ["It closes every nearby shop.", "It removes public transportation."], "How does the passage present changes to public space?", "Why might researchers study foot traffic?", ["To evaluate whether the change affects local activity.", "To count the number of cars in another city.", "To prove all drivers oppose the plan."]]
];

function createReadingPassage(scenario, level) {
  const [topic, title, core, fact, detail, action, consequence, vocab, factPrompt, factAnswer, distractors, stance, criticalPrompt, criticalOptions] = scenario;
  const [term1, term2, term3] = vocab;
  const beginnerDevelopment = [
    `The story begins with a problem. ${core} This is the first thing the reader needs to know. The story gives more facts after this. These facts help us understand what is happening. They also show what the person can do next.`,
    `One fact in the story is important. ${fact} This gives the person a place to start. It is better to look at what is true than to guess. A clear fact can help people choose a safe or useful next step.`,
    `The story gives another detail. ${detail} This helps explain why the person acts. It is not a random choice. The person uses what they know. A small check or a simple plan can help when a problem feels new.`,
    `Next, the person takes a step. ${action} The person does not have to fix everything at once. First, they can do this one thing. Then they can see what happens and decide what to do next.`,
    `At the end, ${consequence} The story shows a result. The result comes after the action. It may help the person feel safer, save time, or understand the problem better. It does not mean every story will have the same ending.`,
    `This story is about ${topic.toLowerCase()}. People may face small problems like this at home, school, or work. It helps to stop, look at the facts, and ask a question when needed. A calm choice can make the next step easier.`,
    `The main idea is simple: notice what happens, then choose one useful step. The person in this story does not need to know everything. They use the facts they have. Readers can use this idea when they face an everyday problem too.`
  ];
  const elementaryDevelopment = [
    `The article starts with a problem: ${core} The person needs to decide what to do, but a quick guess may not help. Looking at the situation first makes the next step easier to understand. The reader can follow the problem from its beginning.`,
    `A useful fact is that ${fact} This information helps explain the situation. When people know this detail, they can think about choices that fit the problem. Without it, they might spend time on an answer that does not really help.`,
    `Another detail is important: ${detail} It shows how the person learns more or gets ready to act. A short check can be useful before making a decision. It can help people avoid a mistake and feel more sure about what to do.`,
    `The person then takes action. ${action} This step follows the information in the story. It does not solve every possible problem, but it gives the person a way to move forward. After taking the step, they can check what happens.`,
    `The result is that ${consequence} The result is connected to the earlier choice. It shows why the action was useful in this situation. Other people may need a different answer, so it is important to think about their own facts and needs.`,
    `The topic is ${topic.toLowerCase()}, something people may meet in daily life. A small problem can feel confusing when there are several choices. It often helps to take one step at a time, ask for help when needed, and keep track of useful information.`,
    `The story also shows that good decisions do not always need to be complicated. The person looks at the details, chooses an action, and learns from the result. If the situation changes, the person can use new information to decide what to do next.`,
    `Readers can think about the order of events. First there is a problem, then the person learns or checks something, and finally there is a result. This order helps explain the story. It also shows how a careful choice can make an everyday task easier.`
  ];
  const articleDevelopment = [
    `The story begins with a clear situation: ${core} The first challenge is to understand what has happened before deciding why it happened. The detail matters because it gives the reader a starting point and makes the later choices easier to assess.`,
    `A key fact is that ${fact} This gives the people involved a basis for their next step. In a confusing situation, separating what is known from what is only suspected can prevent a response from being guided by an unsupported guess.`,
    `The next detail is significant: ${detail} It shows how the person uses the information available rather than acting without a plan. A measured step may seem ordinary, but it can change what happens next and reduce the chance of an avoidable misunderstanding.`,
    `The response becomes clearer when ${action.charAt(0).toLowerCase()}${action.slice(1)} This connects the earlier details to the outcome. It also shows why people need to pay attention as a situation develops instead of assuming that their first explanation is automatically correct.`,
    `The outcome is that ${consequence.charAt(0).toLowerCase()}${consequence.slice(1)} It follows from the choices described in the story. This does not mean every similar problem will end the same way, but it demonstrates how a thoughtful response can make a practical difference.`,
    `This example is useful because it moves from a problem to a response and then to a result. Each part adds information. Readers can ask what the person knew at the beginning, what changed later, and which choice was supported by the facts.`,
    `The topic also matters beyond this one story. People often face small decisions connected with ${topic.toLowerCase()}. It helps to pause, consider the available information, and choose a next step that fits the real need. That approach can prevent avoidable confusion and make later decisions easier.`,
    `Careful readers distinguish evidence from interpretation. The passage provides details that support some conclusions, while other possibilities remain unconfirmed. Noticing that boundary matters: a reasonable conclusion should fit the evidence without claiming more than the story establishes.`,
    `The person can focus on one useful action instead of trying to solve every possible problem at once. This approach is practical when time, money, attention, or other resources are limited. Afterward, the person can review the result and decide whether another step is needed.`,
    `A different choice could make sense under different conditions. What matters is whether the response fits the details, not whether it sounds confident. Someone with different needs or constraints might reasonably choose another path, which is why the circumstances deserve attention.`,
    `The decision may also affect other people. Clear information can help them understand what to expect and how to respond. Sharing relevant details reduces the chance that different people will act on conflicting assumptions, especially when a situation is still developing.`,
    `Taken together, the details show why the response matters. The passage does not claim that every problem has an easy answer; instead, it illustrates how observation, a suitable action, and a review of the outcome can support a more informed decision.`,
    `The example also has limits. It describes one set of people and one set of conditions, so readers should not treat its outcome as a universal rule. A sound decision depends on the evidence available, the needs of those involved, and whether later information changes the situation.`
  ];
  const paragraphsByLevel = { A1: 7, A2: 8, B1: 10, B2: 11, C1: 13 };
  const development = level === "A1" ? beginnerDevelopment
    : level === "A2" ? elementaryDevelopment
      : articleDevelopment;
  const text = development.slice(0, paragraphsByLevel[level]);
  const definitions = {
    [term1]: `A useful word related to ${topic.toLowerCase()}.`,
    [term2]: `A term used to describe an action or feature in this situation.`,
    [term3]: `A word that helps explain the result or setting.`
  };
  return {
    topic,
    title,
    text,
    vocabulary: Object.entries(definitions).map(([term, definition]) => ({ term, definition })),
    questions: [
      { type: "Comprehension", prompt: factPrompt, options: [factAnswer, ...distractors], answer: 0, explanation: `The passage clearly states: ${factAnswer}` },
      { type: "Author's stance", prompt: stance, options: [`The story presents a careful response to ${topic.toLowerCase()} as useful.`, "The story suggests people should ignore relevant information.", "The story claims every situation has one simple solution."], answer: 0, explanation: `The passage follows the facts, actions, and result to show why a careful response to ${topic.toLowerCase()} can be useful.` },
      { type: "Think critically", prompt: criticalPrompt, options: criticalOptions, answer: 0, explanation: criticalOptions[0] }
    ]
  };
}

const passageLibrary = {
  A1: [passages.A1, ...readingScenarios.map((scenario) => createReadingPassage(scenario, "A1"))],
  A2: [passages.A2, ...readingScenarios.map((scenario) => createReadingPassage(scenario, "A2"))],
  B1: [passages.B1, ...readingScenarios.map((scenario) => createReadingPassage(scenario, "B1"))],
  B2: [passages.B2, ...readingScenarios.map((scenario) => createReadingPassage(scenario, "B2"))],
  C1: [passages.C1, ...readingScenarios.map((scenario) => createReadingPassage(scenario, "C1"))]
};

const CONVERSATIONS = {
  school: {
    title: { en: "At school", zh: "校園生活" },
    setting: { en: "Useful sentences for classes and campus life", zh: "課堂與校園生活實用句" },
    lines: [
      { en: "Could you clarify whether today's lecture will cover the material from last week's reading?", zh: "你可以確認今天的講座是否會涵蓋上週閱讀資料的內容嗎？" },
      { en: "Would you mind saving me a seat while I speak with the instructor?", zh: "我和老師談話時，可以麻煩你幫我留個位子嗎？" },
      { en: "I seem to have left my notes in the seminar room after class.", zh: "我好像下課後把筆記留在研討室了。" },
      { en: "Do we know whether Friday's quiz will focus on the readings or the lecture notes?", zh: "我們知道星期五的小考會著重閱讀資料還是課堂筆記嗎？" },
      { en: "Could you walk me through how you approached the final part of this problem?", zh: "你可以逐步說明你是如何處理這題最後一部分的嗎？" },
      { en: "Is there a procedure for borrowing a laptop overnight?", zh: "借用筆電過夜有什麼申請流程嗎？" },
      { en: "I need to return these books before the library closes this evening.", zh: "我需要在圖書館今晚閉館前把這些書還回去。" },
      { en: "When is the final submission deadline, including the late window?", zh: "包含逾期繳交期限在內，最後的提交期限是什麼時候？" },
      { en: "Would you be interested in reviewing our notes together after the seminar?", zh: "研討會結束後，你有興趣和我一起複習筆記嗎？" },
      { en: "I'm having trouble interpreting one of the questions in today's assignment.", zh: "我不太確定該如何理解今天作業中的其中一題。" },
      { en: "Could you confirm whether the guest lecture is still scheduled for this afternoon?", zh: "你可以確認今天下午的專題講座是否仍照原定時間舉行嗎？" },
      { en: "I submitted the wrong version of my paper by mistake; would it be possible to replace it?", zh: "我不小心交錯報告版本，可以讓我重新上傳嗎？" },
      { en: "The assignment guidelines mention a reflection, but I can't find it on the course website.", zh: "作業說明提到一篇反思文章，但我在課程網站上找不到。" },
      { en: "Could we divide the presentation into sections and agree on who will cover each one?", zh: "我們可以把報告分成幾個部分，並確認每個人負責的內容嗎？" },
      { en: "I may arrive a few minutes late because my previous class is on the other side of campus.", zh: "我可能會晚幾分鐘到，因為上一堂課的教室在校園另一端。" },
      { en: "Would you be available during office hours to discuss the feedback on my draft?", zh: "你方便在固定諮詢時間討論我草稿上的意見嗎？" },
      { en: "I understand the main argument, but I'm not sure how the second example supports it.", zh: "我理解主要論點，但不太確定第二個例子如何支持這個論點。" },
      { en: "Does the course require us to cite sources in APA style or another format?", zh: "這門課要求我們使用 APA 格式還是其他格式引用資料？" },
      { en: "The study room appears to be booked; could you check whether another one is available?", zh: "這間自習室似乎已被預約，可以幫我確認是否還有其他空間嗎？" },
      { en: "I have a scheduling conflict with the review session; will the notes be posted afterward?", zh: "複習課的時間和我的行程衝突，課後會提供筆記嗎？" },
      { en: "Could you explain how participation contributes to the final grade?", zh: "你可以說明課堂參與會如何計入學期總成績嗎？" },
      { en: "I reviewed the rubric, but I'd appreciate an example of what you consider a strong analysis.", zh: "我看過評分規準了，但希望能了解一個符合優良分析標準的例子。" },
      { en: "Would anyone be willing to share their notes from the section I had to miss?", zh: "有人願意分享我缺席那堂課的筆記嗎？" },
      { en: "My group has different ideas about the project, so we should compare the evidence before deciding.", zh: "我們小組對專題有不同看法，應該先比較證據再做決定。" },
      { en: "Is there a quiet place nearby where I can join the online seminar?", zh: "附近有安靜的地方可以讓我參加線上研討會嗎？" },
      { en: "I finished the required reading, although I need to revisit the section on research methods.", zh: "我讀完指定資料了，不過還需要重新看一下研究方法那一節。" },
      { en: "Could we ask the librarian whether the article is available through another database?", zh: "我們可以問圖書館員這篇文章是否能透過其他資料庫取得嗎？" },
      { en: "I would like to revise my thesis statement before I submit the final paper.", zh: "我想在繳交期末報告前修改論文主旨。" },
      { en: "The lecture was recorded, so I'll review the part where the professor compared the two theories.", zh: "這堂課有錄影，所以我會重看教授比較兩種理論的部分。" },
      { en: "Before choosing a research topic, I would like to check whether enough reliable sources are available.", zh: "在選定研究主題前，我想先確認是否有足夠可靠的資料來源。" }
    ]
  },
  office: {
    title: { en: "At the office", zh: "辦公室生活" },
    setting: { en: "Polite and practical workplace English", zh: "禮貌實用的職場英語" },
    lines: [
      { en: "Would it be possible to move the meeting to three, given the client's earlier availability?", zh: "考量到客戶能提早出席，我們可以把會議改到三點嗎？" },
      { en: "I'll send the revised file this afternoon once I've incorporated your comments.", zh: "我今天下午納入你的意見後，就會寄出修訂版檔案。" },
      { en: "Could you clarify whether the deadline refers to the draft or the fully approved version?", zh: "你可以確認截止期限指的是草稿，還是完整核准的版本嗎？" },
      { en: "I'm currently consolidating the monthly figures before circulating the report.", zh: "我目前正在彙整月報數據，之後會寄給大家。" },
      { en: "Would you mind sharing your notes so I can follow up on the decisions we made?", zh: "你介意分享會議筆記嗎？我想接著處理我們做出的決定。" },
      { en: "I'll be away from the office until Thursday, but I'll check urgent messages.", zh: "我會離開辦公室到星期四，但會查看緊急訊息。" },
      { en: "Let's review the proposal one more time before sending it to the client.", zh: "寄給客戶前，我們再檢查一次提案吧。" },
      { en: "Thanks for flagging the discrepancy; I'll check it against the source data.", zh: "謝謝你指出這項差異；我會對照原始資料確認。" },
      { en: "Could you add this issue to the agenda so we can agree on next steps?", zh: "你可以把這個議題加入議程，讓我們一起確認接下來的行動嗎？" },
      { en: "I'll follow up with the client after lunch once we've confirmed the revised timeline.", zh: "我們確認修訂時程後，我會在午餐後再聯絡客戶。" },
      { en: "Could you circulate the revised agenda before the meeting so everyone has time to review it?", zh: "你可以在會議前寄出修訂後的議程，讓大家有時間先看過嗎？" },
      { en: "The timeline is ambitious, so we should identify the main risks before confirming it with the client.", zh: "時程安排相當緊湊，我們應該先找出主要風險，再向客戶確認。" },
      { en: "I can take the first draft, provided someone else has time to check the figures.", zh: "如果有人能幫忙核對數字，我可以負責第一版草稿。" },
      { en: "Would it be more efficient to combine the two updates into a single presentation?", zh: "把兩份進度報告合併成一份簡報會不會更有效率？" },
      { en: "I haven't received approval yet, so please hold off on sharing the announcement externally.", zh: "我還沒收到核准，請先不要對外發布這項公告。" },
      { en: "The figures in the summary don't match the spreadsheet; could we check which version is current?", zh: "摘要中的數字和試算表不一致，我們可以確認哪個版本是最新的嗎？" },
      { en: "I'll be working remotely tomorrow, but I can join the discussion by video.", zh: "我明天會遠端工作，不過可以透過視訊參加討論。" },
      { en: "Could you clarify who is responsible for sending the final proposal to the partner?", zh: "你可以確認由誰負責把最後版本的提案寄給合作夥伴嗎？" },
      { en: "We may need to adjust the scope if the additional requests are included in this phase.", zh: "如果這個階段要納入新增需求，我們可能需要調整工作範圍。" },
      { en: "I appreciate the feedback; I'll incorporate the relevant changes and explain anything I leave out.", zh: "謝謝你的意見；我會納入適用的修改，並說明未採納的部分。" },
      { en: "The supplier has pushed back the delivery date, which could affect our launch schedule.", zh: "供應商延後了交貨日期，這可能會影響我們的上線時程。" },
      { en: "Let's leave a few minutes at the end for questions that aren't covered in the presentation.", zh: "我們在簡報最後留幾分鐘，回答尚未涵蓋的問題吧。" },
      { en: "I can take over the account while Jordan is away, as long as I have access to the latest correspondence.", zh: "Jordan 不在時我可以接手這個客戶，但需要先取得最新往來信件。" },
      { en: "Could we document the decision now so the rest of the team has a clear record?", zh: "我們可以現在把決定記錄下來，讓團隊其他成員有明確的依據嗎？" },
      { en: "The first approach is less expensive, whereas the second is likely to save us time later.", zh: "第一種做法成本較低，第二種則可能為我們節省後續時間。" },
      { en: "I'll check with finance before promising the client that we can meet the revised budget.", zh: "在向客戶承諾能符合修訂後的預算前，我會先和財務部確認。" },
      { en: "Please flag any changes that could affect the accessibility of the final document.", zh: "如果有任何修改可能影響最終文件的無障礙使用，請特別提出。" },
      { en: "I'm concerned that the current plan depends on receiving data we haven't confirmed yet.", zh: "我擔心目前的計畫仰賴一批我們尚未確認的資料。" },
      { en: "Could you send a brief recap with the action items and owners after the call?", zh: "通話後你可以寄一份簡短摘要，列出待辦事項和負責人嗎？" },
      { en: "We should give the team advance notice if the change is likely to affect their workload.", zh: "如果這項變更可能增加團隊的工作量，我們應該提前通知大家。" }
    ]
  },
  shopping: {
    title: { en: "Shopping", zh: "購物" },
    setting: { en: "Useful questions for stores and checkout", zh: "商店購物與結帳實用句" },
    lines: [
      { en: "Could you tell me whether this jacket's price includes the current promotion?", zh: "你可以告訴我這件外套的價格是否已包含目前的優惠嗎？" },
      { en: "Does this style come in a lighter color, preferably in a neutral shade?", zh: "這個款式有比較淺的顏色嗎？最好是中性色系。" },
      { en: "Would it be possible to try this on before I make a decision?", zh: "我決定之前可以先試穿看看嗎？" },
      { en: "Could you point me toward the fitting rooms?", zh: "可以告訴我試衣間在哪個方向嗎？" },
      { en: "Do you have this style in a medium, or would I need to order it?", zh: "這個款式有中號現貨嗎？還是需要另外訂購？" },
      { en: "Is this item included in the current sale, or are certain styles excluded?", zh: "這件商品有參加目前的特價活動嗎？還是有些款式不適用？" },
      { en: "Could you email me an itemized receipt for my records?", zh: "你可以把詳細列出品項的收據寄到我的電子郵件，方便我留存嗎？" },
      { en: "Is contactless payment available, or should I use a physical card?", zh: "可以使用感應付款嗎？還是我需要使用實體卡片？" },
      { en: "I'm comparing a few options at the moment, but I'll let you know if I need assistance.", zh: "我目前正在比較幾個選項，如果需要協助會再告訴你。" },
      { en: "Could you explain the return policy for items bought during a sale?", zh: "你可以說明特價期間購買的商品適用什麼退貨規定嗎？" },
      { en: "Could you tell me whether this price includes the extended warranty?", zh: "你可以告訴我這個價格是否包含延長保固嗎？" },
      { en: "I'm comparing a few models; what are the main differences in their battery life?", zh: "我正在比較幾款產品，它們的電池續航力主要有什麼差異？" },
      { en: "Do you offer a price adjustment if the item goes on sale later this week?", zh: "如果這件商品本週稍晚特價，你們可以退還價差嗎？" },
      { en: "The label says it is machine washable, but does it need to be washed separately?", zh: "標籤寫著可以機洗，但需要單獨清洗嗎？" },
      { en: "Could you check whether another branch has this model in stock?", zh: "你可以查一下其他分店是否有這款現貨嗎？" },
      { en: "I'd like to exchange this for a larger size, but I no longer have the original packaging.", zh: "我想把這件換成大一號，不過原本的包裝已經不在了。" },
      { en: "Is delivery included, or will there be an additional charge?", zh: "價格包含運送費嗎？還是需要另外付費？" },
      { en: "The online listing describes a different material from the one on the tag.", zh: "網路商品說明上的材質和吊牌標示的不一樣。" },
      { en: "Could I have the receipt emailed to me instead of printed?", zh: "可以把收據寄到我的電子郵件，而不是印出來給我嗎？" },
      { en: "Do you have a more durable option that would be suitable for daily use?", zh: "你們有更耐用、適合日常使用的款式嗎？" },
      { en: "I'd prefer to see the full warranty terms before I decide whether to purchase it.", zh: "我想先看完整的保固條款，再決定是否購買。" },
      { en: "Could you explain how the store credit works if I return this without a receipt?", zh: "如果我沒有收據就退貨，你可以說明購物金如何計算嗎？" },
      { en: "This color looks different under the store lighting; would it be possible to view it near a window?", zh: "這個顏色在店內燈光下看起來不太一樣，可以拿到窗邊看看嗎？" },
      { en: "I'm looking for a carry-on bag that meets the airline's size restrictions.", zh: "我在找一款符合航空公司尺寸限制的登機箱。" },
      { en: "Does the discount apply to all sizes, or only to the items on display?", zh: "這項折扣適用於所有尺寸，還是只適用於展示品？" },
      { en: "The checkout page added a fee I wasn't expecting; could you help me identify what it covers?", zh: "結帳頁面多了一筆我沒預期的費用，可以幫我確認這筆費用的用途嗎？" },
      { en: "If I order this today, can you confirm that it will arrive before the weekend?", zh: "如果我今天下單，你可以確認週末前會送到嗎？" },
      { en: "I noticed a small defect after unpacking it; what would be the simplest way to resolve this?", zh: "拆封後我發現商品有個小瑕疵，請問怎麼處理最方便？" },
      { en: "Could you recommend an alternative with similar features but a lower environmental impact?", zh: "你可以推薦功能相近、但對環境影響較小的替代商品嗎？" },
      { en: "Before I pay, could you confirm that the promotional offer has been applied to the total?", zh: "付款前可以確認優惠已經從總金額中扣除嗎？" }
    ]
  },
  food: {
    title: { en: "Ordering food", zh: "點餐" },
    setting: { en: "At a restaurant or café", zh: "在餐廳或咖啡館" },
    lines: [
      { en: "Could we reserve a table for two somewhere relatively quiet?", zh: "可以幫我們安排一個比較安靜的兩人座位嗎？" },
      { en: "Would you mind bringing us the menu when you have a moment?", zh: "你有空時可以麻煩你把菜單拿給我們嗎？" },
      { en: "Which dishes would you recommend if we prefer something not too heavy?", zh: "如果我們想吃清淡一點，你會推薦哪些餐點？" },
      { en: "I'll have the grilled salmon, provided it can be prepared without butter.", zh: "如果烤鮭魚可以不加奶油，我就點這道。" },
      { en: "Would it be possible to leave the onions out of this dish?", zh: "這道菜可以不要加洋蔥嗎？" },
      { en: "Could we have another pitcher of water when it's convenient?", zh: "你方便時可以再幫我們拿一壺水嗎？" },
      { en: "Could I have the dressing served on the side so I can add it myself?", zh: "沙拉醬可以另外放，讓我自己添加嗎？" },
      { en: "Whenever you have a moment, could we have the check?", zh: "你有空時可以幫我們結帳嗎？" },
      { en: "Could you confirm whether the service charge has already been included?", zh: "你可以確認服務費是否已經包含在帳單裡嗎？" },
      { en: "Everything was excellent; would you pass our compliments to the kitchen?", zh: "每道菜都很棒，可以幫我們向廚房轉達讚美嗎？" },
      { en: "Could you let the kitchen know that one guest has a severe allergy to peanuts?", zh: "可以請你告訴廚房，有一位客人對花生嚴重過敏嗎？" },
      { en: "Would it be possible to substitute the side salad for the fries?", zh: "可以把薯條換成配菜沙拉嗎？" },
      { en: "We're running short on time; could you tell us which dishes can be prepared quickly?", zh: "我們時間不太夠，可以告訴我們哪些餐點能快速做好嗎？" },
      { en: "Could you describe how spicy this dish is and whether the sauce can be served separately?", zh: "你可以說明這道菜有多辣，以及醬料能否另外盛裝嗎？" },
      { en: "We reserved a table under the name Chen, but we may have arrived a little early.", zh: "我們用 Chen 這個名字訂了位，可能稍微早到了。" },
      { en: "Would you mind bringing the children's meal first if it is ready?", zh: "如果兒童餐先做好了，可以先幫我們送上來嗎？" },
      { en: "I ordered the soup without dairy, but this appears to contain cream.", zh: "我點的湯注明不加乳製品，但這碗看起來有加奶油。" },
      { en: "Could we have separate checks, or is it easier to split the total evenly?", zh: "我們可以分開結帳嗎？還是把總額平均分攤比較方便？" },
      { en: "The menu mentions a seasonal special; could you tell me what ingredients it contains?", zh: "菜單上有一道季節限定餐點，你可以告訴我裡面有哪些食材嗎？" },
      { en: "Would you be able to pack the remaining food in a container for us?", zh: "可以麻煩你把剩下的餐點裝進餐盒嗎？" },
      { en: "We have a reservation for seven, although two people may join us later.", zh: "我們訂了七位，不過可能會有兩個人晚一點才到。" },
      { en: "Could you recommend a vegetarian option that is substantial enough for dinner?", zh: "你可以推薦一道份量足夠當晚餐的素食餐點嗎？" },
      { en: "I think there may be a mistake on the bill; we didn't order this beverage.", zh: "我想帳單可能有誤，我們沒有點這杯飲料。" },
      { en: "Could you bring the main course after we've finished the appetizer?", zh: "我們吃完開胃菜後，可以再上主餐嗎？" },
      { en: "Is the fish locally sourced, and how is it usually prepared?", zh: "這種魚是當地採購的嗎？通常會怎麼料理？" },
      { en: "We'd prefer a quieter table if one becomes available.", zh: "如果有比較安靜的位子空出來，我們想換過去。" },
      { en: "Would it be possible to leave out the garnish and serve the sauce on the side?", zh: "可以不要加裝飾配料，並把醬汁另外放嗎？" },
      { en: "Could you check whether the kitchen can accommodate this request before we place the order?", zh: "我們點餐前，可以先確認廚房是否能配合這項需求嗎？" },
      { en: "We enjoyed the meal, but we're not quite ready for dessert yet.", zh: "我們很喜歡這頓餐點，不過還沒準備好要點甜點。" },
      { en: "Could you let us know if there is a service charge for a large group?", zh: "可以告訴我們多人用餐是否會收服務費嗎？" }
    ]
  },
  directions: {
    title: { en: "Getting around", zh: "交通與方向" },
    setting: { en: "Asking for directions and using transportation", zh: "詢問方向與搭乘交通工具" },
    lines: [
      { en: "Could you point me toward the train station without sending me along the highway?", zh: "可以告訴我怎麼走到火車站，又不必沿著高速公路前進嗎？" },
      { en: "Would it be reasonable to walk there, or is it farther than it looks on the map?", zh: "走路過去合理嗎？還是實際距離比地圖上看起來更遠？" },
      { en: "Take the number six bus toward downtown, then get off just after the bridge.", zh: "搭往市中心方向的六號公車，過橋後不久下車。" },
      { en: "Where can I purchase a day pass that covers both buses and trains?", zh: "我可以在哪裡買到同時適用於公車和火車的一日票？" },
      { en: "Could you check whether this train stops at Central Station before the airport?", zh: "你可以確認這班火車前往機場前會停靠中央車站嗎？" },
      { en: "Roughly how long should I allow for the journey at this time of day?", zh: "這個時段的路程大概要預留多少時間？" },
      { en: "Continue past the bank and turn right at the next intersection.", zh: "繼續往前經過銀行，然後在下一個路口右轉。" },
      { en: "Would you mind marking the quickest route on my map?", zh: "可以麻煩你在我的地圖上標出最快的路線嗎？" },
      { en: "I think we may have gone past our stop; could you advise us what to do next?", zh: "我想我們可能坐過站了，你可以建議我們接下來該怎麼辦嗎？" },
      { en: "Could you tell me which platform the airport train departs from today?", zh: "你可以告訴我今天前往機場的火車從哪個月台發車嗎？" },
      { en: "Could you tell me whether this route requires a transfer at the central station?", zh: "你可以告訴我這條路線是否需要在中央車站轉車嗎？" },
      { en: "The announcement said the service is delayed; do you know how long we should expect to wait?", zh: "廣播說列車延誤了，你知道我們大概要等多久嗎？" },
      { en: "Is there a step-free entrance to the platform from this side of the station?", zh: "從車站這一側有無階梯的入口可以到月台嗎？" },
      { en: "I bought a day pass online; do I need to validate it before boarding?", zh: "我在網路上買了一日票，上車前需要先啟用嗎？" },
      { en: "Would it be quicker to take the express train or change to the subway downtown?", zh: "搭快車比較快，還是在市中心轉搭地鐵比較快？" },
      { en: "Could you point out the stop where I should get off for the museum?", zh: "你可以指出我應該在哪一站下車去博物館嗎？" },
      { en: "The map shows two streets with the same name; which one leads to the waterfront?", zh: "地圖上有兩條同名的街，哪一條通往海濱？" },
      { en: "Does this bus run less frequently on weekends?", zh: "這班公車週末的班距會比較長嗎？" },
      { en: "I need to get to the airport by six; which route would you recommend at this time of day?", zh: "我需要在六點前抵達機場，這個時段你會建議走哪條路線？" },
      { en: "Is the pedestrian bridge open, or should I cross at the next intersection?", zh: "人行天橋有開放嗎？還是我應該到下一個路口過馬路？" },
      { en: "Could you let me know if this train stops at every station or only the major ones?", zh: "你可以告訴我這班火車每站都停，還是只停主要車站嗎？" },
      { en: "The sign says the entrance has moved temporarily; where should I go instead?", zh: "標示說入口暫時移到別處了，我應該改往哪裡走？" },
      { en: "Would you mind telling me which exit is closest to the convention center?", zh: "可以告訴我哪個出口離會議中心最近嗎？" },
      { en: "We got off one stop too early; can we use the same ticket to continue the trip?", zh: "我們提早一站下車了，可以用同一張車票繼續搭乘嗎？" },
      { en: "How much extra time should I allow for the road construction near the bridge?", zh: "橋附近正在施工，我應該額外預留多少交通時間？" },
      { en: "The route planner suggests a transfer that seems unusually short; is there enough time to make it?", zh: "路線規劃建議的轉乘時間似乎很短，來得及轉車嗎？" },
      { en: "Can I tap the same contactless card when I transfer between the bus and the train?", zh: "公車轉火車時，我可以使用同一張感應卡嗎？" },
      { en: "Could you confirm that this is the stop for the northbound service?", zh: "你可以確認這裡是北向路線的站牌嗎？" },
      { en: "The sidewalk is closed ahead, so is there a safe alternative route for pedestrians?", zh: "前方人行道封閉了，有沒有安全的替代步行路線？" },
      { en: "Because the usual station entrance is closed, follow the temporary signs through the east concourse.", zh: "由於車站平常的入口關閉了，請沿著臨時標示穿過東側大廳。" }
    ]
  },
  appointments: {
    title: { en: "Making appointments", zh: "預約與看診" },
    setting: { en: "Scheduling visits and asking about services", zh: "安排拜訪與詢問服務" },
    lines: [
      { en: "I'd like to arrange an appointment next week, ideally at a time when the clinic is less busy.", zh: "我想預約下週的時段，如果能安排在診所比較不忙的時間就更好了。" },
      { en: "Could you let me know whether Tuesday morning is available, or if another slot is more convenient?", zh: "你可以告訴我星期二早上是否有空檔，或是否有其他更方便的時段嗎？" },
      { en: "Would it be possible to reschedule my appointment for a date after the 20th?", zh: "可以把我的預約改到二十日之後嗎？" },
      { en: "My appointment is listed under Chen; could you verify that the time is still confirmed?", zh: "我的預約登記在 Chen 這個名字下；你可以確認時間仍然確定嗎？" },
      { en: "How much time should I allow to complete the required paperwork before my appointment?", zh: "預約前我應該預留多少時間填寫必要的文件？" },
      { en: "I need to cancel tomorrow's appointment; could you explain whether any further action is required?", zh: "我需要取消明天的預約；你可以說明是否還需要辦理其他手續嗎？" },
      { en: "Could you clarify whether the cancellation fee applies if I give notice today?", zh: "你可以確認如果我今天提出取消，是否仍須支付取消費嗎？" },
      { en: "Would you send an email confirmation with the appointment details and any preparation instructions?", zh: "你可以寄一封確認郵件，附上預約詳情和相關準備須知嗎？" },
      { en: "I have a follow-up appointment at two; is there a check-in procedure I should complete beforehand?", zh: "我兩點有回診；之前需要先完成報到程序嗎？" },
      { en: "Please add me to the waiting list if an earlier appointment becomes available.", zh: "如果有更早的時段，請把我加入候補名單。" },
      { en: "I can come in on short notice if someone cancels their appointment this week.", zh: "如果這週有人取消預約，我可以臨時前往。" },
      { en: "Could you confirm whether I need a referral before scheduling the consultation?", zh: "你可以確認我是否需要轉介才能安排諮詢嗎？" },
      { en: "I may be ten minutes late because the bus is running behind schedule.", zh: "公車誤點了，我可能會晚十分鐘到。" },
      { en: "Would it be possible to book the same time every other Thursday?", zh: "可以固定每隔一週的星期四預約同一個時段嗎？" },
      { en: "Please let me know which documents I should bring to the first appointment.", zh: "請告訴我第一次預約時需要攜帶哪些文件。" },
      { en: "I need to update the contact information on my account before the visit.", zh: "看診前我需要更新帳戶中的聯絡資料。" },
      { en: "Could you explain what the consultation fee covers and whether insurance is accepted?", zh: "你可以說明諮詢費包含哪些項目，以及是否接受保險嗎？" },
      { en: "I received a reminder for the wrong date; could you check the appointment in your system?", zh: "我收到的提醒日期有誤，可以幫我查一下系統中的預約嗎？" },
      { en: "Would you prefer that I complete the forms online or arrive early to fill them out?", zh: "你們希望我在線上填表，還是提早到現場填寫？" },
      { en: "I have a scheduling conflict that afternoon, so could we look at the following morning instead?", zh: "我那天下午有行程衝突，可以改約隔天早上嗎？" },
      { en: "The appointment is for two family members; should I reserve two separate time slots?", zh: "這次要替兩位家人預約，需要分別預約兩個時段嗎？" },
      { en: "Could you add a note that I may need an interpreter during the appointment?", zh: "你可以註明我看診時可能需要口譯嗎？" },
      { en: "I would like to speak with someone about the results before arranging another visit.", zh: "我想先和人員討論檢查結果，再安排下一次就診。" },
      { en: "If the appointment needs to run longer, please let me know so I can adjust my schedule.", zh: "如果預約可能超時，請告訴我，我好調整行程。" },
      { en: "Could you place me on the cancellation list for any opening before the end of the month?", zh: "月底前如果有空檔，可以把我列入候補名單嗎？" },
      { en: "I booked through the website, but I haven't received a confirmation number yet.", zh: "我透過網站預約了，但還沒收到確認編號。" },
      { en: "Would you mind confirming whether the office entrance is accessible during construction?", zh: "施工期間，診所入口仍可通行嗎？可以幫我確認一下嗎？" },
      { en: "I need to reschedule because my flight was changed unexpectedly.", zh: "我的航班臨時改期了，因此需要更改預約時間。" },
      { en: "Could you send the preparation instructions in writing so I can review them later?", zh: "你可以把準備須知以書面寄給我，讓我稍後確認嗎？" },
      { en: "Please make sure the new time is reflected in the reminder as well.", zh: "也請確認提醒通知中已更新為新的時間。" }
    ]
  },
  quotes: {
    title: { en: "Inspirational quotes", zh: "勵志名言" },
    setting: { en: "B2–C1 English · Success, life, dreams, and personal growth", zh: "B2–C1 英語 · 成功、人生、夢想與自我成長" },
    lines: [
      { en: "Well done is better than well said.", zh: "做得好，勝過說得好。", author: "Benjamin Franklin" },
      { en: "Energy and persistence conquer all things.", zh: "精力與毅力能克服一切。", author: "Benjamin Franklin" },
      { en: "An investment in knowledge pays the best interest.", zh: "對知識的投資，回報最為豐厚。", author: "Benjamin Franklin" },
      { en: "Life is either a daring adventure or nothing at all.", zh: "人生若非一場勇敢的冒險，便一無是處。", author: "Helen Keller" },
      { en: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", zh: "與我們內在的力量相比，身後的過往與眼前的未來都微不足道。", author: "Ralph Waldo Emerson" },
      { en: "Go confidently in the direction of your dreams. Live the life you have imagined.", zh: "自信地朝夢想前進，活出你所想像的人生。", author: "Henry David Thoreau" },
      { en: "Great things are done by a series of small things brought together.", zh: "偉大的成就，是由許多微小的事匯聚而成。", author: "Vincent van Gogh" },
      { en: "Do what you can, with what you have, where you are.", zh: "在你所在之處，用你擁有的資源，盡力而為。", author: "Theodore Roosevelt" },
      { en: "The only limit to our realization of tomorrow will be our doubts of today.", zh: "我們實現明日的唯一限制，將是今日的疑慮。", author: "Franklin D. Roosevelt" },
      { en: "Keep your face always toward the sunshine, and shadows will fall behind you.", zh: "始終面向陽光，陰影自然會落在身後。", author: "Helen Keller" },
      { en: "The future belongs to those who believe in the beauty of their dreams.", zh: "未來屬於那些相信夢想之美的人。", author: "Eleanor Roosevelt" },
      { en: "Diligence is the mother of good luck.", zh: "勤奮是好運之母。", author: "Benjamin Franklin" },
      { en: "Our doubts are traitors, and make us lose the good we oft might win, by fearing to attempt.", zh: "疑慮會背叛我們，使我們因害怕嘗試而失去原本可能得到的美好。", author: "William Shakespeare" },
      { en: "Be not afraid of greatness; some are born great, some achieve greatness, and some have greatness thrust upon them.", zh: "不要害怕成就非凡；有人生而不凡，有人努力成就非凡，也有人被推上非凡的位置。", author: "William Shakespeare" },
      { en: "Things won are done; joy's soul lies in the doing.", zh: "目標達成固然可喜，真正的喜悅其實在於努力的過程。", author: "William Shakespeare" },
      { en: "Action is eloquence.", zh: "行動本身就是有力的表達。", author: "William Shakespeare" },
      { en: "What's past is prologue.", zh: "過去的一切，都是未來的序幕。", author: "William Shakespeare" },
      { en: "Wisely and slow; they stumble that run fast.", zh: "謹慎而穩健地前進；一味求快的人反而容易跌倒。", author: "William Shakespeare" },
      { en: "One touch of nature makes the whole world kin.", zh: "人性中一點共通之處，就能讓全世界彼此親近。", author: "William Shakespeare" },
      { en: "How far that little candle throws his beams! So shines a good deed in a naughty world.", zh: "小小的燭火竟能照得如此遠；善行在這個世風不古的世界裡也會如此閃耀。", author: "William Shakespeare" },
      { en: "A journey of a thousand miles begins with a single step.", zh: "千里之行，始於足下。", author: "Lao Tzu" },
      { en: "Knowing others is intelligence; knowing yourself is true wisdom.", zh: "了解他人是聰明，了解自己才是真正的智慧。", author: "Lao Tzu" },
      { en: "A good traveler has no fixed plans and is not intent on arriving.", zh: "善於旅行的人不執著於固定計畫，也不一心只想抵達終點。", author: "Lao Tzu" },
      { en: "Difficulties strengthen the mind, as labor does the body.", zh: "困難能磨練心智，正如勞動能鍛鍊身體。", author: "Seneca" },
      { en: "While we teach, we learn.", zh: "教學的同時，我們也在學習。", author: "Seneca" },
      { en: "It is not that we have a short time to live, but that we waste much of it.", zh: "問題不在於人生短暫，而在於我們浪費了太多時間。", author: "Seneca" },
      { en: "Begin at once to live, and count each separate day as a separate life.", zh: "現在就開始生活，把每一天都當作一段獨立的人生。", author: "Seneca" },
      { en: "The happiness of your life depends upon the quality of your thoughts.", zh: "人生的幸福取決於你思想的品質。", author: "Marcus Aurelius" },
      { en: "The best revenge is to be unlike him who performed the injury.", zh: "最好的報復，就是不讓自己變得和傷害你的人一樣。", author: "Marcus Aurelius" },
      { en: "Look within. Within is the fountain of good, and it will ever bubble up, if thou wilt ever dig.", zh: "向內探尋；善的泉源就在心中，只要持續挖掘，它便會不斷湧現。", author: "Marcus Aurelius" }
    ]
  }
};

const CONVERSATION_QUIZZES = {
  school: {
    question: "Which sentence asks for a step-by-step explanation of a problem?",
    options: ["Could you walk me through how you approached the final part of this problem?", "Could you clarify whether today's lecture will cover the material from last week's reading?", "Would you be interested in reviewing our notes together after the seminar?"],
    answer: 0
  },
  office: {
    question: "Which sentence checks whether a deadline applies to a draft or an approved version?",
    options: ["I'll send the revised file this afternoon once I've incorporated your comments.", "Could you clarify whether the deadline refers to the draft or the fully approved version?", "I'll be away from the office until Thursday, but I'll check urgent messages."],
    answer: 1
  },
  shopping: {
    question: "Which sentence asks whether an item costs less than usual?",
    options: ["Is this item included in the current sale, or are certain styles excluded?", "Could you email me an itemized receipt for my records?", "Is contactless payment available, or should I use a physical card?"],
    answer: 0
  },
  food: {
    question: "Which sentence asks for a food recommendation?",
    options: ["Could we have another pitcher of water when it's convenient?", "Which dishes would you recommend if we prefer something not too heavy?", "Could you confirm whether the service charge has already been included?"],
    answer: 1
  },
  directions: {
    question: "Which sentence asks about the length of a trip?",
    options: ["Where can I purchase a day pass that covers both buses and trains?", "Could you check whether this train stops at Central Station before the airport?", "Roughly how long should I allow for the journey at this time of day?"],
    answer: 2
  },
  appointments: {
    question: "Which sentence asks to change a scheduled visit?",
    options: ["Would it be possible to reschedule my appointment for a date after the 20th?", "How much time should I allow to complete the required paperwork before my appointment?", "Could you clarify whether the cancellation fee applies if I give notice today?"],
    answer: 0
  },
  quotes: {
    question: "Which quote suggests that progress comes from consistent effort?",
    options: ["Well done is better than well said.", "Great things are done by a series of small things brought together.", "Life is either a daring adventure or nothing at all."],
    answer: 1
  }
};

const STORAGE = {
  language: "word-garden-language",
  level: "word-garden-level",
  mastered: "word-garden-mastered",
  custom: "word-garden-custom-words",
  definitions: "word-garden-definitions",
  examples: "word-garden-examples",
  vocabularyDetails: "word-garden-vocabulary-details"
};
for (const key of ["word-garden-kk-pronunciations-v2", "word-garden-pronunciations"]) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Could not remove obsolete pronunciation data ${key}:`, error);
  }
}
const screens = [...document.querySelectorAll(".screen")];
const navigation = [...document.querySelectorAll("[data-screen]")];
const levelSelect = document.querySelector("#level-select");
const languageSelect = document.querySelector("#language-select");
const searchInput = document.querySelector("#word-search");
const academicFirst = document.querySelector("#academic-first");
const searchResults = document.querySelector("#search-results");
const academicSet = new Set(ACADEMIC_WORDS);
const wordIndex = [...new Set([...ACADEMIC_WORDS, ...COMMON_WORDS, ...(window.vocabularyIndex || [])])].slice(0, 7000);
const academicOrdered = [...ACADEMIC_WORDS];
const dictionaryRequests = new Map();
const vocabularyDetailRequests = new Map();
let level = loadValue(STORAGE.level, "A1");
let language = loadValue(STORAGE.language, "en");
let mastered = new Set(loadArray(STORAGE.mastered).filter((word) => typeof word === "string"));
let customWords = loadArray(STORAGE.custom).filter((entry) =>
  entry && typeof entry.word === "string" && typeof entry.definition === "string" && typeof entry.example === "string"
);
let cachedDefinitions = loadObject(STORAGE.definitions);
let cachedExamples = loadObject(STORAGE.examples);
let cachedVocabularyDetails = loadObject(STORAGE.vocabularyDetails);
let currentWord = ACADEMIC_WORDS[0];
let wordList = [];
let currentQuestion = 0;
let quizScore = 0;
let quizAnswers = [];
let quizSelections = [];
let answered = false;
let readingQuizStarted = false;
let lookupRequest = 0;
let currentPassageIndex = 0;
let currentConversation = "school";
let currentConversationLine = 0;
let conversationQuizActive = false;
let conversationQuizChoice = null;
let conversationAudioRun = 0;

function loadValue(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored === null ? fallback : JSON.parse(stored);
  } catch (error) {
    console.error(`Could not read ${key}:`, error);
    return fallback;
  }
}

function loadArray(key) {
  const value = loadValue(key, []);
  return Array.isArray(value) ? value : [];
}

function loadObject(key) {
  const value = loadValue(key, {});
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}

function t(key, values = {}) {
  const phrase = COPY[language][key] || COPY.en[key] || key;
  return phrase.replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? ""));
}

function translateElement(element, value) {
  const children = [...element.children];
  if (children.length === 0) {
    element.textContent = value;
    return;
  }
  for (const node of [...element.childNodes]) {
    if (node.nodeType === Node.TEXT_NODE) node.remove();
  }
  element.insertBefore(document.createTextNode(`${value} `), children[0]);
}

function applyLanguage() {
  document.documentElement.lang = language === "zh" ? "zh-TW" : "en";
  document.title = language === "zh" ? "Ezy | 英語學習" : "Ezy | English practice";
  document.querySelector('meta[name="description"]').content = t("metaDescription");
  for (const element of document.querySelectorAll("[data-i18n]")) {
    translateElement(element, t(element.dataset.i18n));
  }
  for (const element of document.querySelectorAll("[data-i18n-placeholder]")) {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  }
  for (const element of document.querySelectorAll("[data-i18n-aria-label]")) {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  }
  for (const element of document.querySelectorAll("[data-i18n-content]")) {
    element.content = t(element.dataset.i18nContent);
  }
  const homeTitle = document.querySelector("#home-title");
  const titleLead = homeTitle.querySelector(".hero-title-lead");
  const titleAccent = homeTitle.querySelector(".hero-title-accent");
  homeTitle.replaceChildren(titleLead, document.createTextNode(language === "zh" ? "" : " "), titleAccent);
  languageSelect.value = language;
  renderHome();
  renderSearch();
  renderWord();
  renderPassage();
  renderMyWords();
  renderConversation();
}

function saveValue(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Could not save ${key}:`, error);
    return false;
  }
}

function setScreen(name) {
  if (!["home", "learn", "read", "conversations", "my-words"].includes(name)) return;
  if (name !== "conversations" && !document.querySelector("#conversations-screen").classList.contains("hidden")) {
    window.speechSynthesis?.cancel();
    conversationAudioRun += 1;
  }
  for (const screen of screens) screen.classList.toggle("hidden", screen.id !== `${name}-screen`);
  for (const button of document.querySelectorAll(".nav-button")) {
    const active = button.dataset.screen === name;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  }
  if (name === "learn") {
    renderSearch();
    renderWord();
    searchInput.focus({ preventScroll: true });
  }
  if (name === "read") renderPassage();
  if (name === "conversations") renderConversation();
  if (name === "my-words") renderMyWords();
  if (name === "home") renderHome();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getPassageLevel() {
  return level === "C2" ? "C1" : level;
}

function getPassage() {
  const level = getPassageLevel();
  const library = passageLibrary[level] || passageLibrary.C1;
  return library[currentPassageIndex % library.length];
}

function renderHome() {
  document.querySelector("#mastered-stat").textContent = String(mastered.size);
}

function getEntry(word) {
  return customWords.find((entry) => entry.word.toLocaleLowerCase() === word.toLocaleLowerCase());
}

function renderSearch() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const prioritized = academicFirst.checked
    ? [...academicOrdered, ...wordIndex.filter((word) => !academicSet.has(word))]
    : wordIndex;
  const matches = prioritized.filter((word) => word.includes(query)).slice(0, 14);
  searchResults.replaceChildren();
  document.querySelector("#library-total").textContent = t("wordCount", { count: wordIndex.length.toLocaleString() });
  if (matches.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty-result";
    empty.textContent = t("noSearchResults");
    searchResults.append(empty);
    return;
  }
  for (const word of matches) {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.className = `search-result${word === currentWord ? " selected" : ""}`;
    button.type = "button";
    const term = document.createElement("span");
    term.textContent = word;
    const tag = document.createElement("span");
    tag.className = "result-tag";
    tag.textContent = academicSet.has(word) ? t("academicTag") : mastered.has(word) ? t("masteredTag") : "";
    button.append(term, tag);
    button.addEventListener("click", () => {
      currentWord = word;
      wordList = prioritized;
      renderWord();
      renderSearch();
    });
    item.append(button);
    searchResults.append(item);
  }
}

function renderWord() {
  const fallbackIndex = academicOrdered.indexOf(currentWord);
  const entry = getEntry(currentWord);
  const academic = academicSet.has(currentWord);
  const word = currentWord.toLocaleLowerCase();
  const definitionElement = document.querySelector("#word-definition");
  const cachedDetails = cachedVocabularyDetails[word];
  document.querySelector("#word-label").textContent = academic ? t("labelAcademic") : entry ? t("labelPersonal") : t("labelLibrary");
  document.querySelector("#word-category").textContent = academic ? t("categoryAcademic") : entry ? t("categoryPersonal") : t("categoryVocabulary");
  document.querySelector("#word-term-text").textContent = currentWord;
  document.querySelector("#word-part-of-speech").textContent = cachedDetails
    ? formatPartOfSpeech(cachedDetails.partOfSpeech)
    : t("lookingUp");
  document.querySelector("#word-examples").replaceChildren();
  document.querySelector("#word-position").textContent = academic && fallbackIndex >= 0
    ? t("academicPosition", { index: fallbackIndex + 1 })
    : t("searchPosition");
  document.querySelector("#master-button").textContent = mastered.has(currentWord) ? t("masteredButton") : t("markMastered");
  document.querySelector("#word-status").textContent = "";
  replayAnimation(document.querySelector(".word-card"), "word-change");
  const cachedDefinition = cachedDetails?.definition
    || entry?.definition
    || glossary[word]
    || cachedDefinitions[word]
    || cachedDefinitions[currentWord];
  definitionElement.textContent = cachedDefinition || t("lookingUp");
  if (cachedDetails?.partOfSpeech && cachedDetails.definition
    && cachedDetails.examples?.length === 3
    && cachedDetails.examples.every((example) => example.zh)) {
    if (cachedDetails.lookupError) document.querySelector("#word-status").textContent = t("lookupRetry");
    renderWordExamples(cachedDetails.examples);
    return;
  }
  const request = ++lookupRequest;
  document.querySelector("#word-part-of-speech").textContent = t("lookingUp");
  document.querySelector("#word-status").textContent = t("vocabularyDetailsLoading");
  loadVocabularyDetails(word, entry)
    .then((details) => {
      if (request !== lookupRequest) return;
      definitionElement.textContent = details.definition || t("definitionUnavailable");
      document.querySelector("#word-part-of-speech").textContent = formatPartOfSpeech(details.partOfSpeech);
      renderWordExamples(details.examples);
      document.querySelector("#word-status").textContent = details.lookupError ? t("lookupRetry") : "";
    })
    .catch((error) => {
      console.error("Could not load vocabulary details:", error);
      if (request !== lookupRequest) return;
      definitionElement.textContent = entry?.definition || glossary[word] || t("definitionUnavailable");
      document.querySelector("#word-part-of-speech").textContent = t("partOfSpeechUnavailable");
      renderWordExamples(createExampleSentences(word, "other").map((en) => ({ en, zh: t("exampleTranslationUnavailable") })));
      document.querySelector("#word-status").textContent = t("lookupRetry");
    });
}

function formatPartOfSpeech(value) {
  if (!value) return t("partOfSpeechUnavailable");
  if (language !== "zh") return value;
  const labels = {
    noun: "名詞", verb: "動詞", adjective: "形容詞", adverb: "副詞",
    pronoun: "代名詞", preposition: "介系詞", conjunction: "連接詞",
    interjection: "感嘆詞", determiner: "限定詞", abbreviation: "縮寫"
  };
  return value.split(", ").map((part) => labels[part] || part).join("、");
}

function renderWordExamples(examples) {
  const list = document.querySelector("#word-examples");
  list.replaceChildren();
  for (const example of examples) {
    const item = document.createElement("li");
    const english = document.createElement("p");
    english.className = "word-example-english";
    english.textContent = example.en;
    item.append(english);
    if (language === "zh") {
      const chinese = document.createElement("p");
      chinese.className = "word-example-chinese";
      chinese.textContent = example.zh || t("exampleTranslationUnavailable");
      item.append(chinese);
    }
    list.append(item);
  }
}

function createExampleSentences(word, partOfSpeech) {
  const templates = {
    noun: [
      `The ${word} was discussed during the meeting.`,
      `I read about the ${word} in a recent article.`,
      `Could you tell me more about the ${word}?`
    ],
    verb: [
      `The team plans to ${word} the issue before Friday.`,
      `We need to ${word} the information carefully.`,
      `She learned how to ${word} the results more efficiently.`
    ],
    adjective: [
      `The result was surprisingly ${word}.`,
      `The team considered the proposal ${word}.`,
      `We need a plan that is ${word} enough to work.`
    ],
    adverb: [
      `She explained the change ${word} during the meeting.`,
      `The team responded ${word} to the unexpected news.`,
      `He checked the instructions ${word} before starting.`
    ],
    other: [
      `The word “${word}” appeared in today's article.`,
      `I wrote down “${word}” while reading the report.`,
      `Could you explain what “${word}” means in this sentence?`
    ]
  };
  return templates[partOfSpeech] || templates.other;
}

function isUsableDictionaryExample(example) {
  return typeof example === "string"
    && example.trim().split(/\s+/).length >= 4
    && example.length <= 180
    && !/\b(1[5-9]\d{2}|20\d{2})\b/.test(example)
    && !/^[“"]?Would counsel please/i.test(example);
}

function translateVocabularyExample(sentence) {
  const url = new URL("https://api.mymemory.translated.net/get");
  url.searchParams.set("q", sentence);
  url.searchParams.set("langpair", "en|zh-TW");
  return fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error(`Translation lookup returned ${response.status}`);
      return response.json();
    })
    .then((result) => {
      const translation = result.responseData?.translatedText?.trim();
      if (result.responseStatus !== 200 || !translation || translation.toLocaleLowerCase() === sentence.toLocaleLowerCase()) {
        throw new Error("No Traditional Chinese translation was returned.");
      }
      return translation;
    });
}

function loadVocabularyDetails(word, entry) {
  if (!vocabularyDetailRequests.has(word)) {
    const request = (async () => {
      let dictionaryResults = [];
      let lookupError = false;
      try {
        dictionaryResults = await lookupDictionary(word);
      } catch (error) {
        lookupError = true;
        console.error(`Could not look up dictionary data for ${word}:`, error);
      }
      const meanings = dictionaryResults.flatMap((result) => result.meanings || []);
      const definitions = meanings.flatMap((meaning) => meaning.definitions || []);
      const partOfSpeech = [...new Set(meanings.map((meaning) => meaning.partOfSpeech).filter(Boolean))].join(", ");
      const definition = entry?.definition || glossary[word] || cachedDefinitions[word]
        || definitions.find((item) => item.definition)?.definition || "";
      const previousExamples = cachedExamples[word];
      const previousExampleSentences = Array.isArray(previousExamples)
        ? previousExamples.map((example) => typeof example === "string" ? example : example?.en)
        : [previousExamples];
      const existingExamples = [
        ...(Array.isArray(entry?.examples) ? entry.examples : []),
        entry?.example,
        glossaryExamples[word],
        ...previousExampleSentences,
        ...definitions.map((item) => item.example).filter(isUsableDictionaryExample)
      ].filter((example) => typeof example === "string" && example.trim());
      const uniqueExamples = [...new Set(existingExamples.map((example) => example.trim()))];
      const fallbackPos = partOfSpeech.split(", ")[0] || "other";
      const examples = [...uniqueExamples, ...createExampleSentences(word, fallbackPos)]
        .filter((example, index, all) => all.indexOf(example) === index)
        .slice(0, 3);
      const translatedExamples = await Promise.all(examples.map(async (en) => {
        try {
          return { en, zh: await translateVocabularyExample(en) };
        } catch (error) {
          lookupError = true;
          console.error(`Could not translate vocabulary example for ${word}:`, error);
          return { en, zh: "" };
        }
      }));
      const details = { partOfSpeech, definition, examples: translatedExamples, lookupError };
      cachedVocabularyDetails[word] = details;
      if (!saveValue(STORAGE.vocabularyDetails, cachedVocabularyDetails)) {
        console.error("Could not save complete vocabulary details to browser storage.");
      }
      if (definition) {
        cachedDefinitions[word] = definition;
        if (!saveValue(STORAGE.definitions, cachedDefinitions)) {
          console.error("Could not save vocabulary definitions to browser storage.");
        }
      }
      if (translatedExamples.length) {
        cachedExamples[word] = translatedExamples;
        if (!saveValue(STORAGE.examples, cachedExamples)) {
          console.error("Could not save vocabulary examples to browser storage.");
        }
      }
      return details;
    })().finally(() => vocabularyDetailRequests.delete(word));
    vocabularyDetailRequests.set(word, request);
  }
  return vocabularyDetailRequests.get(word);
}

function lookupDictionary(word) {
  const key = word.toLocaleLowerCase();
  if (!dictionaryRequests.has(key)) {
    const request = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`)
      .then((response) => {
        if (!response.ok) throw new Error(`Dictionary lookup returned ${response.status}`);
        return response.json();
      })
      .then((results) => {
        dictionaryRequests.delete(key);
        return results;
      }, (error) => {
        dictionaryRequests.delete(key);
        throw error;
      });
    dictionaryRequests.set(key, request);
  }
  return dictionaryRequests.get(key);
}

function replayAnimation(element, className) {
  element.classList.remove(className);
  requestAnimationFrame(() => element.classList.add(className));
}

function changeWord(offset) {
  if (!wordList.length) wordList = academicFirst.checked ? academicOrdered : wordIndex;
  const index = wordList.indexOf(currentWord);
  currentWord = wordList[(index + offset + wordList.length) % wordList.length];
  renderWord();
  renderSearch();
}

function speakWord() {
  if (!("speechSynthesis" in window)) {
    document.querySelector("#word-status").textContent = t("speechUnavailable");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(currentWord);
  utterance.lang = "en-US";
  const americanVoice = window.speechSynthesis.getVoices()
    .find((voice) => /^en-us(?:-|$)/i.test(voice.lang));
  if (americanVoice) utterance.voice = americanVoice;
  utterance.onerror = () => {
    document.querySelector("#word-status").textContent = t("speechError");
  };
  window.speechSynthesis.speak(utterance);
}

function renderPassage() {
  const passage = getPassage();
  const readingSpeeds = { A1: 90, A2: 110, B1: 130, B2: 150, C1: 170, C2: 170 };
  const wordCount = passage.text.join(" ").trim().split(/\s+/).length;
  const estimatedMinutes = Math.max(1, Math.ceil(wordCount / readingSpeeds[level]));
  document.querySelector("#reading-level").textContent = level === "C2"
    ? t("advancedC1")
    : t("cefrLevel", { level });
  document.querySelector("#passage-count").textContent = t("passageCollection", {
    count: passageLibrary[getPassageLevel()].length
  });
  document.querySelector("#passage-position").textContent = `${currentPassageIndex + 1} / ${passageLibrary[getPassageLevel()].length}`;
  document.querySelector("#passage-topic").textContent = passage.topic;
  document.querySelector("#passage-time").textContent = t("minutesRead", { minutes: estimatedMinutes });
  document.querySelector("#passage-title").textContent = passage.title;
  const body = document.querySelector("#passage-body");
  body.replaceChildren();
  for (const paragraph of passage.text) {
    const element = document.createElement("p");
    element.textContent = paragraph;
    body.append(element);
  }
  const vocabulary = document.querySelector("#passage-vocabulary");
  vocabulary.replaceChildren();
  const heading = document.createElement("h3");
  heading.textContent = t("usefulVocabulary");
  const list = document.createElement("dl");
  list.className = "passage-vocabulary-list";
  for (const item of passage.vocabulary) {
    const term = document.createElement("dt");
    term.textContent = item.term;
    const definition = document.createElement("dd");
    definition.textContent = item.definition;
    list.append(term, definition);
  }
  vocabulary.append(heading, list);
  const readingQuiz = document.querySelector("#reading-quiz");
  readingQuiz.classList.toggle("hidden", !readingQuizStarted);
  if (readingQuizStarted) {
    if (document.querySelector("#reading-results").classList.contains("hidden")) renderQuestion();
    else renderResults();
  }
}

function renderConversation() {
  const conversation = CONVERSATIONS[currentConversation];
  document.querySelector("#conversation-kind").textContent = t(currentConversation === "quotes" ? "quotePractice" : "everydayEnglish");
  document.querySelector("#conversation-title").textContent = conversation.title[language];
  document.querySelector("#conversation-setting").textContent = conversation.setting[language];
  for (const button of document.querySelectorAll(".topic-button")) {
    const active = button.dataset.conversation === currentConversation;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  }

  const line = conversation.lines[currentConversationLine];
  document.querySelector("#conversation-progress").textContent = t(currentConversation === "quotes" ? "quoteProgress" : "sentenceProgress", {
    current: currentConversationLine + 1,
    total: conversation.lines.length
  });
  document.querySelector("#dialogue-english").textContent = line.en;
  document.querySelector("#dialogue-chinese").textContent = line.zh;
  const author = document.querySelector("#dialogue-author");
  author.textContent = line.author ? `— ${line.author}` : "";
  author.classList.toggle("hidden", !line.author);
  const listen = document.querySelector("#listen-sentence");
  listen.setAttribute("aria-label", `${t("listenLine")}: ${line.en}`);
  listen.title = t("listenLine");
  document.querySelector("#previous-sentence").disabled = currentConversationLine === 0;
  document.querySelector("#next-sentence").disabled = currentConversationLine === conversation.lines.length - 1;
  document.querySelector("#conversation-status").textContent = "";
  renderConversationQuiz();
}

function renderConversationQuiz() {
  const quizSection = document.querySelector("#conversation-quiz");
  quizSection.classList.toggle("hidden", !conversationQuizActive);
  if (!conversationQuizActive) return;

  const quiz = CONVERSATION_QUIZZES[currentConversation];
  document.querySelector("#conversation-question").textContent = quiz.question;
  const options = document.querySelector("#conversation-options");
  options.replaceChildren();
  quiz.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "conversation-option";
    button.type = "button";
    button.textContent = option;
    if (conversationQuizChoice !== null) {
      button.disabled = true;
      if (index === quiz.answer) button.classList.add("correct");
      if (index === conversationQuizChoice && index !== quiz.answer) button.classList.add("incorrect");
    }
    button.addEventListener("click", () => {
      if (conversationQuizChoice !== null) return;
      conversationQuizChoice = index;
      renderConversationQuiz();
    });
    options.append(button);
  });
  const feedback = document.querySelector("#conversation-feedback");
  const retry = document.querySelector("#conversation-quiz-retry");
  const answeredCorrectly = conversationQuizChoice === quiz.answer;
  feedback.classList.toggle("incorrect", conversationQuizChoice !== null && !answeredCorrectly);
  feedback.textContent = conversationQuizChoice === null ? "" : t(answeredCorrectly ? "conversationCorrect" : "conversationIncorrect");
  retry.classList.toggle("hidden", conversationQuizChoice === null);
}

function speakConversationLine(text) {
  if (!("speechSynthesis" in window)) {
    document.querySelector("#conversation-status").textContent = t("speechUnavailable");
    return;
  }
  window.speechSynthesis.cancel();
  const run = ++conversationAudioRun;
  document.querySelector("#conversation-status").textContent = t("conversationAudioPlaying");
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.88;
  utterance.pitch = 0.96;
  utterance.volume = 0.85;
  const voices = window.speechSynthesis.getVoices().filter((voice) => /^en-us(?:-|$)/i.test(voice.lang));
  const femaleAmericanVoice = voices.find((voice) =>
    /\b(samantha|ava|allison|susan|karen|jenny|aria|michelle|zira|tessa|victoria|salli|joanna|kendra|kimberly|ivy|libby|serena|moira|fiona|veena)\b/i.test(voice.name)
  );
  const americanVoice = femaleAmericanVoice || voices[0];
  if (americanVoice) utterance.voice = americanVoice;
  utterance.onend = () => {
    if (run === conversationAudioRun) document.querySelector("#conversation-status").textContent = t("sentenceAudioFinished");
  };
  utterance.onerror = (event) => {
    if (run === conversationAudioRun && event.error !== "canceled" && event.error !== "interrupted") {
      document.querySelector("#conversation-status").textContent = t("speechError");
    }
  };
  window.speechSynthesis.speak(utterance);
}

function startQuiz() {
  currentQuestion = 0;
  quizScore = 0;
  quizAnswers = [];
  quizSelections = [];
  answered = false;
  readingQuizStarted = true;
  document.querySelector("#quiz-card").classList.remove("hidden");
  document.querySelector("#reading-results").classList.add("hidden");
  document.querySelector("#reading-quiz").classList.remove("hidden");
  renderQuestion();
  document.querySelector("#reading-quiz").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderQuestion() {
  const passage = getPassage();
  const question = passage.questions[currentQuestion];
  document.querySelector("#quiz-progress").textContent = t("questionProgress", {
    current: currentQuestion + 1,
    total: passage.questions.length
  });
  document.querySelector("#question-type").textContent = translateQuestionType(question.type);
  document.querySelector("#question-prompt").textContent = question.prompt;
  document.querySelector("#quiz-source").textContent = t("basedOn", { title: passage.title, level });
  document.querySelector("#quiz-feedback").textContent = "";
  document.querySelector("#quiz-feedback").classList.remove("incorrect");
  document.querySelector("#next-question").classList.add("hidden");
  translateElement(
    document.querySelector("#next-question"),
    currentQuestion === passage.questions.length - 1 ? t("seeScore") : t("nextQuestion")
  );
  const answers = document.querySelector("#answer-list");
  answers.replaceChildren();
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => answerQuestion(index));
    answers.append(button);
  });
  answered = false;
  if (quizSelections[currentQuestion] !== undefined) {
    answered = true;
    showQuestionOutcome(quizSelections[currentQuestion], question);
  }
}

function translateQuestionType(type) {
  return type;
}

function showQuestionOutcome(selectedIndex, question) {
  const buttons = [...document.querySelectorAll(".answer-option")];
  const isCorrect = selectedIndex === question.answer;
  const quizCard = document.querySelector("#quiz-card");
  buttons.forEach((button) => { button.disabled = true; });
  buttons[selectedIndex].classList.add(isCorrect ? "correct" : "incorrect");
  if (!isCorrect) buttons[question.answer].classList.add("correct");
  quizCard.classList.remove("answer-correct", "answer-incorrect");
  replayAnimation(quizCard, isCorrect ? "answer-correct" : "answer-incorrect");
  const feedback = document.querySelector("#quiz-feedback");
  feedback.textContent = t(isCorrect ? "correctFeedback" : "incorrectFeedback", {
    explanation: question.explanation
  });
  feedback.classList.toggle("incorrect", !isCorrect);
  document.querySelector("#next-question").classList.remove("hidden");
}

function answerQuestion(selectedIndex) {
  if (answered) return;
  answered = true;
  const passage = getPassage();
  const question = passage.questions[currentQuestion];
  const isCorrect = selectedIndex === question.answer;
  quizSelections[currentQuestion] = selectedIndex;
  quizAnswers[currentQuestion] = isCorrect;
  if (isCorrect) quizScore += 1;
  showQuestionOutcome(selectedIndex, question);
}

function showResults() {
  renderResults();
}

function renderResults() {
  const passage = getPassage();
  const total = passage.questions.length;
  const percent = Math.round((quizScore / total) * 100);
  document.querySelector("#quiz-card").classList.add("hidden");
  document.querySelector("#reading-results").classList.remove("hidden");
  document.querySelector("#results-score").textContent = `${quizScore} / ${total}`;
  document.querySelector("#results-message").textContent = percent === 100
    ? t("perfectResults")
    : percent >= 67
      ? t("goodResults")
      : t("retryResults");
  const details = document.querySelector("#results-details");
  details.replaceChildren();
  quizAnswers.forEach((correct, index) => {
    const row = document.createElement("div");
    row.className = "result-detail";
    row.textContent = `${index + 1}. ${translateQuestionType(passage.questions[index].type)}`;
    const outcome = document.createElement("strong");
    outcome.textContent = correct ? t("correct") : t("review");
    outcome.className = correct ? "result-correct" : "result-review";
    row.append(outcome);
    details.append(row);
  });
}

function renderMyWords() {
  const list = document.querySelector("#mastered-list");
  list.replaceChildren();
  document.querySelector("#mastered-count").textContent = t("masteredCount", { count: mastered.size });
  if (mastered.size === 0) {
    const empty = document.createElement("li");
    empty.className = "empty-result";
    empty.textContent = t("emptyMastered");
    list.append(empty);
  } else {
    for (const word of [...mastered].sort()) {
      const item = document.createElement("li");
      item.className = "saved-word-row";
      const term = document.createElement("strong");
      term.textContent = word;
      const button = document.createElement("button");
      button.className = "text-button";
      button.type = "button";
      button.textContent = t("reviewWord");
      button.addEventListener("click", () => {
        currentWord = word;
        setScreen("learn");
      });
      item.append(term, button);
      list.append(item);
    }
  }
  const customList = document.querySelector("#custom-list");
  customList.replaceChildren();
  if (customWords.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty-result";
    empty.textContent = t("emptyCustom");
    customList.append(empty);
  }
  customWords.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "saved-word-row";
    const term = document.createElement("strong");
    term.textContent = entry.word;
    const remove = document.createElement("button");
    remove.className = "text-button remove-button";
    remove.type = "button";
    remove.textContent = t("remove");
    remove.setAttribute("aria-label", t("removeWord", { word: entry.word }));
    remove.addEventListener("click", () => {
      const [removed] = customWords.splice(index, 1);
      if (!saveValue(STORAGE.custom, customWords)) {
        customWords.splice(index, 0, removed);
        document.querySelector("#custom-status").textContent = t("removeError");
        return;
      }
      renderMyWords();
    });
    item.append(term, remove);
    customList.append(item);
  });
}

for (const button of navigation) {
  button.addEventListener("click", () => {
    const screen = button.dataset.screen;
    if (screen === "quiz") startQuiz();
    else setScreen(screen);
  });
}
for (const button of document.querySelectorAll(".topic-button")) {
  button.addEventListener("click", () => {
    if (button.dataset.conversation === currentConversation) return;
    window.speechSynthesis?.cancel();
    conversationAudioRun += 1;
    currentConversation = button.dataset.conversation;
    currentConversationLine = 0;
    conversationQuizActive = false;
    conversationQuizChoice = null;
    renderConversation();
  });
}
document.querySelector("#conversation-quiz-start").addEventListener("click", () => {
  conversationQuizActive = true;
  conversationQuizChoice = null;
  renderConversationQuiz();
  document.querySelector("#conversation-quiz").scrollIntoView({ behavior: "smooth", block: "nearest" });
});
document.querySelector("#conversation-quiz-retry").addEventListener("click", () => {
  conversationQuizChoice = null;
  renderConversationQuiz();
});
document.querySelector("#listen-sentence").addEventListener("click", () => {
  speakConversationLine(CONVERSATIONS[currentConversation].lines[currentConversationLine].en);
});
document.querySelector("#previous-sentence").addEventListener("click", () => {
  currentConversationLine = Math.max(0, currentConversationLine - 1);
  window.speechSynthesis?.cancel();
  conversationAudioRun += 1;
  renderConversation();
});
document.querySelector("#next-sentence").addEventListener("click", () => {
  currentConversationLine = Math.min(CONVERSATIONS[currentConversation].lines.length - 1, currentConversationLine + 1);
  window.speechSynthesis?.cancel();
  conversationAudioRun += 1;
  renderConversation();
});
level = ["A1", "A2", "B1", "B2", "C1", "C2"].includes(level) ? level : "A1";
levelSelect.value = level;
levelSelect.addEventListener("change", () => {
  level = levelSelect.value;
  currentPassageIndex = 0;
  readingQuizStarted = false;
  saveValue(STORAGE.level, level);
  renderPassage();
});
language = ["en", "zh"].includes(language) ? language : "en";
languageSelect.value = language;
languageSelect.addEventListener("change", () => {
  language = languageSelect.value;
  if (!saveValue(STORAGE.language, language)) {
    languageSelect.value = language === "zh" ? "en" : "zh";
    language = languageSelect.value;
    return;
  }
  applyLanguage();
});
searchInput.addEventListener("input", renderSearch);
academicFirst.addEventListener("change", () => {
  wordList = academicFirst.checked ? academicOrdered : wordIndex;
  renderSearch();
});
document.querySelector("#speak-button").addEventListener("click", speakWord);
document.querySelector("#master-button").addEventListener("click", () => {
  const updatedMastered = new Set(mastered);
  if (updatedMastered.has(currentWord)) updatedMastered.delete(currentWord);
  else updatedMastered.add(currentWord);
  if (!saveValue(STORAGE.mastered, [...updatedMastered])) {
    document.querySelector("#word-status").textContent = t("saveMasteredError");
    return;
  }
  mastered = updatedMastered;
  renderWord();
  if (mastered.has(currentWord)) {
    replayAnimation(document.querySelector(".word-card"), "celebrate");
    replayAnimation(document.querySelector("#master-button"), "mastered-pop");
  }
  renderSearch();
  renderHome();
});
document.querySelector("#previous-word").addEventListener("click", () => changeWord(-1));
document.querySelector("#next-word").addEventListener("click", () => changeWord(1));
document.querySelector("#passage-quiz").addEventListener("click", startQuiz);
function changePassage(direction) {
  const level = getPassageLevel();
  const length = passageLibrary[level].length;
  currentPassageIndex = (currentPassageIndex + direction + length) % length;
  currentQuestion = 0;
  quizScore = 0;
  quizAnswers = [];
  quizSelections = [];
  answered = false;
  readingQuizStarted = false;
  renderPassage();
  document.querySelector("#reading-quiz").classList.add("hidden");
}
document.querySelector("#previous-passage").addEventListener("click", () => changePassage(-1));
document.querySelector("#next-passage").addEventListener("click", () => changePassage(1));
document.querySelector("#next-question").addEventListener("click", () => {
  if (currentQuestion === getPassage().questions.length - 1) showResults();
  else {
    currentQuestion += 1;
    renderQuestion();
  }
});
document.querySelector("#try-again").addEventListener("click", startQuiz);
document.querySelector("#results-next-passage").addEventListener("click", () => changePassage(1));
document.querySelector("#word-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const word = String(form.get("word") || "").trim();
  const definition = String(form.get("definition") || "").trim();
  const example = String(form.get("example") || "").trim();
  if (!word || !definition) return;
  if ([...wordIndex, ...customWords.map((item) => item.word)].some((item) => item.toLocaleLowerCase() === word.toLocaleLowerCase())) {
    document.querySelector("#custom-status").textContent = t("duplicateWord");
    return;
  }
  customWords.unshift({ word, definition, example });
  if (!saveValue(STORAGE.custom, customWords)) {
    customWords.shift();
    document.querySelector("#custom-status").textContent = t("saveError");
    return;
  }
  event.currentTarget.reset();
  document.querySelector("#custom-status").textContent = t("savedConfirmation", { word });
  renderMyWords();
});

applyLanguage();
