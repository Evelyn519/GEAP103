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
    shortPassage: "Level-matched reading", minutesRead: "{minutes} min read", usefulVocabulary: "Useful vocabulary", questionProgress: "QUESTION {current} OF {total}",
    basedOn: "Based on “{title}” · {level} level", inference: "Inference", authorStance: "Author's stance",
    thinkCritically: "Think critically", correctFeedback: "That's right. {explanation}",
    incorrectFeedback: "Not quite. {explanation}", seeScore: "See your score", nextQuestion: "Next question",
    perfectResults: "Excellent work. You read carefully and supported your thinking with evidence.",
    goodResults: "Nice work. You're building strong reading habits—keep looking for the clues behind each idea.",
    retryResults: "Good effort. Reading the passage again can help you spot the details that support each answer.",
    correct: "Correct", review: "Review", masteredCount: "{count} mastered",
    dailyConversationDescription: "Practice useful phrases for everyday moments.",
    conversationPractice: "SPEAK WITH CONFIDENCE", conversationIntro: "Practice useful English for everyday situations, one friendly exchange at a time.",
    conversationTopics: "Conversation topics", greetings: "Greetings", shopping: "Shopping", orderingFood: "Ordering food", directions: "Asking for directions",
    everydayEnglish: "EVERYDAY ENGLISH", playDialogue: "Play dialogue", stopAudio: "Stop audio",
    conversationHint: "Tap the speaker to hear each line in American English.", quickQuiz: "Quick quiz",
    checkYourUnderstanding: "CHECK YOUR UNDERSTANDING", listenLine: "Listen to this line",
    conversationCorrect: "That's right! {explanation}", conversationIncorrect: "Not quite. {explanation}",
    conversationAudioPlaying: "Playing American English pronunciation…",
    conversationAudioFinished: "Dialogue finished. Nice speaking!",
    retryConversationQuiz: "Try again",
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
    shortPassage: "分級閱讀文章", minutesRead: "約需 {minutes} 分鐘", usefulVocabulary: "實用詞彙", questionProgress: "第 {current} 題，共 {total} 題",
    basedOn: "根據《{title}》 · {level} 程度", inference: "推論", authorStance: "作者立場",
    thinkCritically: "批判性思考", correctFeedback: "回答正確！{explanation}",
    incorrectFeedback: "再仔細想想。{explanation}", seeScore: "查看成績", nextQuestion: "下一題",
    perfectResults: "太棒了！你仔細閱讀文章，並能用文中證據支持自己的判斷。",
    goodResults: "做得不錯！繼續培養良好的閱讀習慣，留意支持各個觀點的線索。",
    retryResults: "繼續加油！再讀一次文章，找找支持各個答案的細節。",
    correct: "正確", review: "複習", masteredCount: "已熟記 {count} 個",
    dailyConversationDescription: "練習日常生活中實用的英語表達。",
    conversationPractice: "自在開口說英語", conversationIntro: "透過親切的日常對話，練習實用英語。",
    conversationTopics: "會話主題", greetings: "問候", shopping: "購物", orderingFood: "點餐", directions: "詢問方向",
    everydayEnglish: "生活英語", playDialogue: "播放對話", stopAudio: "停止播放",
    conversationHint: "點選喇叭圖示，聆聽每句美式英語發音。", quickQuiz: "快速測驗",
    checkYourUnderstanding: "理解小測驗", listenLine: "聆聽這句話",
    conversationCorrect: "答對了！{explanation}", conversationIncorrect: "再想一想。{explanation}",
    conversationAudioPlaying: "正在播放美式英語發音…",
    conversationAudioFinished: "對話播放完畢，說得真好！",
    retryConversationQuiz: "再試一次",
    emptyMastered: "已熟記的單字會顯示在這裡。", reviewWord: "複習", emptyCustom: "還沒有收藏的單字。",
    remove: "刪除", removeWord: "刪除單字 {word}", removeError: "無法從瀏覽器儲存空間刪除此單字。",
    duplicateWord: "這個單字已經在你的詞彙練習清單中。", saveError: "無法儲存至此裝置，請檢查瀏覽器的儲存設定。",
    saveMasteredError: "無法儲存你的學習進度，請檢查瀏覽器的儲存設定。",
    savedConfirmation: "已儲存「{word}」，可以開始練習了。", definitionPrefix: "英文釋義",
    definitionChineseUnavailable: "中文釋義暫無提供。", languageEnglish: "English", languageChinese: "繁體中文"
  }
};

const GLOSSARY_ZH = {
  analyze: "將事物拆解成不同部分，仔細檢視或分析。",
  approach: "處理任務、問題或情況的方法。",
  assess: "判斷某事物的品質、重要性或價值。",
  assume: "在沒有證據的情況下，認定某事為真。",
  benefit: "有幫助或有用的效果或結果。",
  concept: "用來理解或描述事物的一般概念。",
  context: "有助於解釋事件或想法的背景或資訊。",
  data: "為了研究或理解事物而收集的事實或資訊。",
  define: "說明單字、想法或事物的意義或範圍。",
  derive: "從特定來源或起點取得某物。",
  establish: "創立某事，或證明某事為真。",
  estimate: "審慎估算數量、大小或價值。",
  evidence: "有助於證明某個想法或主張是否屬實的資訊。",
  factor: "促成某種結果的因素之一。",
  identify: "辨認或指出某人或某物是什麼。",
  indicate: "顯示、暗示或指出某事。",
  interpret: "解釋資訊、文字或行為的意義。",
  method: "有計畫地完成某事的方法。",
  policy: "用來引導決策的計畫或規則。",
  principle: "引導行動或思想的基本規則或信念。",
  process: "為了達成某個結果而採取的一連串行動。",
  require: "需要某物，或使某事成為必要。",
  research: "透過仔細研究發現事實或獲得新見解。",
  significant: "重要到值得注意或會造成影響的。",
  source: "資訊來源的地點、人物或事物。",
  specific: "明確指出或精確的，而非籠統的。",
  structure: "某事物各部分的排列或組織方式。",
  theory: "根據想法和證據提出，且可以檢驗的解釋。",
  vary: "在大小、數量或形式上有所變化或不同。"
};

const passages = {
  A1: {
    topic: "At the pharmacy",
    title: "A Question About Cold Medicine",
    text: [
      "After work, Daniel stops at a pharmacy because he has a sore throat and a stuffy nose. He finds the cold medicine, but there are several kinds. One box says it may cause sleepiness. Daniel is driving home, so he wants to choose carefully.",
      "He asks the pharmacist, “Is there a medicine that will not make me sleepy?” The pharmacist asks whether Daniel takes any other medicine. Daniel says no. She points to a different box and explains the directions: take one tablet with water every six hours, but no more than four tablets in one day.",
      "Daniel reads the label before he pays. He also asks whether he should take the medicine with food. The pharmacist says it is fine either way, but he should stop taking it and ask a doctor if he feels worse. Daniel buys the medicine and saves the receipt in his bag."
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
      "The following morning, Priya still has no package, so she contacts the online store as well. A support worker confirms that the delivery photo does not match Priya's address. The store offers to send a replacement without charging her again. Priya checks the new tracking information and asks the store to leave the package with the building manager if she is at work. She saves the messages until the replacement arrives."
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
      "Later, Lena tells her manager that she may be able to attend the meeting if the clinic has an opening. She does not assume the appointment is changed until the clinic sends written confirmation. That small step prevents a mix-up and gives her time to plan around either schedule."
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
      "The next day, the property manager confirms that a contractor will inspect the ceiling and that Maya should keep receipts for any reasonable expenses caused by the leak. She also receives a time window for the visit. By documenting the problem and using the emergency contact, Maya helps prevent further damage while creating a clear record of what still needs to be resolved."
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
      "A week later, the clinic sends a revised bill that matches the insurer's explanation. The correction does not mean every unexpected charge is an error; deductibles, out-of-network services, and non-covered procedures can all affect a patient's share. But comparing documents, checking codes, and keeping a record of conversations gives Elena a clearer basis for deciding what to pay and what to question."
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

const CONVERSATIONS = {
  greetings: {
    title: { en: "Meeting a new classmate", zh: "認識新同學" },
    setting: { en: "Before class · A friendly first hello", zh: "上課前 · 親切地打聲招呼" },
    lines: [
      { speaker: "Mia", en: "Hi! Is this seat taken?", zh: "嗨！這個位子有人坐嗎？" },
      { speaker: "Noah", en: "No, go ahead. I'm Noah.", zh: "沒有，請坐。我叫 Noah。" },
      { speaker: "Mia", en: "Nice to meet you, Noah. I'm Mia.", zh: "很高興認識你，Noah。我叫 Mia。" },
      { speaker: "Noah", en: "Nice to meet you, too! Are you in this class?", zh: "我也很高興認識你！你也上這堂課嗎？" }
    ],
    quiz: {
      question: { en: "What is a friendly way for Mia to continue the conversation?", zh: "Mia 可以怎麼友善地繼續這段對話？" },
      options: [
        { en: "Ask Noah what he likes about the class.", zh: "問 Noah 喜歡這堂課的哪個部分。" },
        { en: "Tell Noah to leave the seat.", zh: "叫 Noah 離開座位。" },
        { en: "Ask Noah to pay for the seat.", zh: "請 Noah 為這個座位付錢。" }
      ],
      answer: 0,
      explanation: { en: "A friendly question helps people get to know each other.", zh: "友善地提問能幫助彼此認識。" }
    }
  },
  shopping: {
    title: { en: "Finding a T-shirt", zh: "挑選 T 恤" },
    setting: { en: "At a clothing store · Asking for help", zh: "服飾店裡 · 詢問店員" },
    lines: [
      { speaker: "Customer", en: "Excuse me, how much is this blue T-shirt?", zh: "不好意思，這件藍色 T 恤多少錢？" },
      { speaker: "Shop assistant", en: "It's twenty dollars.", zh: "這件是 20 美元。" },
      { speaker: "Customer", en: "Do you have it in a small?", zh: "請問有小號的嗎？" },
      { speaker: "Shop assistant", en: "Yes. I can check for you.", zh: "有的，我可以幫你找找看。" }
    ],
    quiz: {
      question: { en: "Which question asks for a different clothing size?", zh: "想詢問其他尺寸時，應該怎麼問？" },
      options: [
        { en: "Do you have it in a small?", zh: "請問有小號的嗎？" },
        { en: "Where is the bus stop?", zh: "公車站在哪裡？" },
        { en: "Can I have the menu?", zh: "可以給我菜單嗎？" }
      ],
      answer: 0,
      explanation: { en: "“Do you have it in a small?” is a polite way to ask for a different size.", zh: "「Do you have it in a small?」是禮貌詢問其他尺寸的說法。" }
    }
  },
  food: {
    title: { en: "Ordering lunch", zh: "點午餐" },
    setting: { en: "At a café · Placing a simple order", zh: "咖啡館裡 · 簡單點餐" },
    lines: [
      { speaker: "Server", en: "Hi! What can I get for you?", zh: "你好！請問想吃點什麼？" },
      { speaker: "Guest", en: "I'd like a chicken sandwich, please.", zh: "我想要一份雞肉三明治，謝謝。" },
      { speaker: "Server", en: "Sure. Would you like anything to drink?", zh: "好的。想喝點什麼嗎？" },
      { speaker: "Guest", en: "Water, please. Thank you!", zh: "請給我水，謝謝！" }
    ],
    quiz: {
      question: { en: "How does the guest politely order a sandwich?", zh: "客人如何禮貌地點一份三明治？" },
      options: [
        { en: "I'd like a chicken sandwich, please.", zh: "我想要一份雞肉三明治，謝謝。" },
        { en: "How do I get to the station?", zh: "請問車站怎麼走？" },
        { en: "What time is the class?", zh: "課程幾點開始？" }
      ],
      answer: 0,
      explanation: { en: "“I'd like …, please” is a polite and useful way to order food.", zh: "「I'd like …, please」是禮貌又實用的點餐說法。" }
    }
  },
  directions: {
    title: { en: "Finding the library", zh: "尋找圖書館" },
    setting: { en: "On the street · Asking someone nearby", zh: "街上 · 向路人詢問" },
    lines: [
      { speaker: "Visitor", en: "Excuse me, how do I get to the library?", zh: "不好意思，請問圖書館怎麼走？" },
      { speaker: "Local", en: "Go straight for two blocks.", zh: "直走兩個街區。" },
      { speaker: "Visitor", en: "Then what should I do?", zh: "然後呢？" },
      { speaker: "Local", en: "Turn left. It's next to the park.", zh: "左轉。圖書館就在公園旁邊。" }
    ],
    quiz: {
      question: { en: "Where is the library?", zh: "圖書館在哪裡？" },
      options: [
        { en: "Next to the park.", zh: "在公園旁邊。" },
        { en: "Inside the café.", zh: "在咖啡館裡。" },
        { en: "Across from the school.", zh: "在學校對面。" }
      ],
      answer: 0,
      explanation: { en: "The local says to turn left; the library is next to the park.", zh: "路人說左轉後，圖書館就在公園旁邊。" }
    }
  }
};

const STORAGE = {
  language: "word-garden-language",
  level: "word-garden-level",
  mastered: "word-garden-mastered",
  custom: "word-garden-custom-words",
  definitions: "word-garden-definitions",
  examples: "word-garden-examples"
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
let level = loadValue(STORAGE.level, "A1");
let language = loadValue(STORAGE.language, "en");
let mastered = new Set(loadArray(STORAGE.mastered).filter((word) => typeof word === "string"));
let customWords = loadArray(STORAGE.custom).filter((entry) =>
  entry && typeof entry.word === "string" && typeof entry.definition === "string" && typeof entry.example === "string"
);
let cachedDefinitions = loadObject(STORAGE.definitions);
let cachedExamples = loadObject(STORAGE.examples);
let currentWord = ACADEMIC_WORDS[0];
let wordList = [];
let currentQuestion = 0;
let quizScore = 0;
let quizAnswers = [];
let quizSelections = [];
let answered = false;
let lookupRequest = 0;
let currentConversation = "greetings";
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
  if (!document.querySelector("#quiz-screen").classList.contains("hidden")) renderQuestion();
  if (!document.querySelector("#results-screen").classList.contains("hidden")) renderResults();
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
  if (!["home", "learn", "read", "conversations", "quiz", "results", "my-words"].includes(name)) return;
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
  return passages[getPassageLevel()];
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
  const cachedDefinition = cachedDefinitions[word] || cachedDefinitions[currentWord];
  const definitionElement = document.querySelector("#word-definition");
  const exampleElement = document.querySelector("#word-example");
  document.querySelector("#word-label").textContent = academic ? t("labelAcademic") : entry ? t("labelPersonal") : t("labelLibrary");
  document.querySelector("#word-category").textContent = academic ? t("categoryAcademic") : entry ? t("categoryPersonal") : t("categoryVocabulary");
  document.querySelector("#word-term").textContent = currentWord;
  exampleElement.textContent = "";
  exampleElement.classList.add("hidden");
  document.querySelector("#word-position").textContent = academic && fallbackIndex >= 0
    ? t("academicPosition", { index: fallbackIndex + 1 })
    : t("searchPosition");
  document.querySelector("#master-button").textContent = mastered.has(currentWord) ? t("masteredButton") : t("markMastered");
  document.querySelector("#word-status").textContent = "";
  replayAnimation(document.querySelector(".word-card"), "word-change");
  let definition = "";
  let example = entry?.example || glossaryExamples[word] || cachedExamples[word] || "";
  if (entry) {
    definition = entry.definition;
  } else if (glossary[currentWord]) {
    definition = language === "zh"
      ? `${glossary[currentWord]}\n${GLOSSARY_ZH[currentWord]}`
      : glossary[currentWord];
  } else if (cachedDefinition) {
    definition = language === "zh"
      ? `${t("definitionPrefix")}：${cachedDefinition}\n${t("definitionChineseUnavailable")}`
      : cachedDefinition;
  }
  definitionElement.textContent = definition || t("lookingUp");
  if (example) {
    exampleElement.textContent = `“${example}”`;
    exampleElement.classList.remove("hidden");
  } else {
    exampleElement.textContent = t("exampleLookingUp");
    exampleElement.classList.remove("hidden");
  }

  const needsDefinition = !entry && !glossary[currentWord] && !cachedDefinition;
  const needsExample = !example;
  if (!needsDefinition && !needsExample) return;

  const request = ++lookupRequest;
  lookupDictionary(currentWord)
    .then((results) => {
      const definitions = results.flatMap((result) => result.meanings || [])
        .flatMap((meaning) => meaning.definitions || [])
        .filter((item) => item.definition);
      const lookedUpDefinition = definitions[0]?.definition;
      const lookedUpExample = definitions.map((item) => item.example).find(Boolean);
      if (needsDefinition && !lookedUpDefinition) throw new Error("No definition was returned.");
      if (lookedUpDefinition && needsDefinition) {
        cachedDefinitions[word] = lookedUpDefinition;
        if (!saveValue(STORAGE.definitions, cachedDefinitions)) {
          console.error("Could not save vocabulary definitions to browser storage.");
        }
      }
      if (lookedUpExample && needsExample) {
        cachedExamples[word] = lookedUpExample;
        if (!saveValue(STORAGE.examples, cachedExamples)) {
          console.error("Could not save vocabulary examples to browser storage.");
        }
      }
      if (request === lookupRequest) {
        if (lookedUpDefinition && needsDefinition) {
          definitionElement.textContent = language === "zh"
            ? `${t("definitionPrefix")}：${lookedUpDefinition}\n${t("definitionChineseUnavailable")}`
            : lookedUpDefinition;
        }
        if (needsExample) {
          exampleElement.textContent = lookedUpExample ? `“${lookedUpExample}”` : t("exampleUnavailable");
        }
      }
    })
    .catch((error) => {
      console.error("Could not look up vocabulary definition:", error);
      if (request === lookupRequest) {
        if (needsDefinition) {
          definitionElement.textContent = t("definitionUnavailable");
          document.querySelector("#word-status").textContent = t("lookupRetry");
        }
        if (needsExample) exampleElement.textContent = t("exampleUnavailable");
      }
    });
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
  document.querySelector("#passage-count").textContent = t("shortPassage");
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
}

function renderConversation() {
  const conversation = CONVERSATIONS[currentConversation];
  document.querySelector("#conversation-title").textContent = conversation.title[language];
  document.querySelector("#conversation-setting").textContent = conversation.setting[language];
  for (const button of document.querySelectorAll(".topic-button")) {
    const active = button.dataset.conversation === currentConversation;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  }

  const lines = document.querySelector("#dialogue-lines");
  lines.replaceChildren();
  conversation.lines.forEach((line, index) => {
    const row = document.createElement("article");
    row.className = `dialogue-line dialogue-line-${index % 2 ? "right" : "left"}`;
    const text = document.createElement("div");
    text.className = "dialogue-text";
    const speaker = document.createElement("span");
    speaker.className = "dialogue-speaker";
    speaker.textContent = line.speaker;
    const english = document.createElement("p");
    english.className = "dialogue-english";
    english.textContent = line.en;
    const chinese = document.createElement("p");
    chinese.className = "dialogue-chinese";
    chinese.textContent = line.zh;
    const listen = document.createElement("button");
    listen.className = "line-audio";
    listen.type = "button";
    listen.textContent = "♫";
    listen.setAttribute("aria-label", `${t("listenLine")}: ${line.en}`);
    listen.title = t("listenLine");
    listen.addEventListener("click", () => speakConversationLine(line.en));
    text.append(speaker, english, chinese);
    row.append(text, listen);
    lines.append(row);
  });
  document.querySelector("#conversation-status").textContent = "";
  renderConversationQuiz();
}

function speakConversationLine(text, run, onEnd = null) {
  if (!("speechSynthesis" in window)) {
    document.querySelector("#conversation-status").textContent = t("speechUnavailable");
    return;
  }
  if (run === undefined) {
    window.speechSynthesis.cancel();
    run = ++conversationAudioRun;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.94;
  const americanVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang.toLowerCase() === "en-us");
  if (americanVoice) utterance.voice = americanVoice;
  utterance.onend = () => {
    if (run === conversationAudioRun) onEnd?.();
  };
  utterance.onerror = (event) => {
    if (run === conversationAudioRun && event.error !== "canceled" && event.error !== "interrupted") {
      document.querySelector("#conversation-status").textContent = t("speechError");
    }
  };
  window.speechSynthesis.speak(utterance);
}

function playConversation() {
  if (!("speechSynthesis" in window)) {
    document.querySelector("#conversation-status").textContent = t("speechUnavailable");
    return;
  }
  window.speechSynthesis.cancel();
  const run = ++conversationAudioRun;
  const lines = CONVERSATIONS[currentConversation].lines;
  let index = 0;
  document.querySelector("#conversation-status").textContent = t("conversationAudioPlaying");
  const playNext = () => {
    if (run !== conversationAudioRun) return;
    if (index >= lines.length) {
      document.querySelector("#conversation-status").textContent = t("conversationAudioFinished");
      return;
    }
    speakConversationLine(lines[index++].en, run, playNext);
  };
  playNext();
}

function renderConversationQuiz() {
  const quiz = document.querySelector("#conversation-quiz");
  quiz.classList.toggle("hidden", !conversationQuizActive);
  if (!conversationQuizActive) return;
  const question = CONVERSATIONS[currentConversation].quiz;
  document.querySelector("#conversation-question").textContent = question.question.en;
  const options = document.querySelector("#conversation-options");
  options.replaceChildren();
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "conversation-option";
    button.type = "button";
    button.textContent = option.en;
    if (conversationQuizChoice !== null) {
      button.disabled = true;
      if (index === question.answer) button.classList.add("correct");
      if (index === conversationQuizChoice && index !== question.answer) button.classList.add("incorrect");
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
  const answeredCorrectly = conversationQuizChoice === question.answer;
  feedback.classList.toggle("incorrect", conversationQuizChoice !== null && !answeredCorrectly);
  feedback.textContent = conversationQuizChoice === null
    ? ""
    : t(answeredCorrectly ? "conversationCorrect" : "conversationIncorrect", {
      explanation: question.explanation[language]
    });
  retry.classList.toggle("hidden", conversationQuizChoice === null);
}

function startQuiz() {
  currentQuestion = 0;
  quizScore = 0;
  quizAnswers = [];
  quizSelections = [];
  answered = false;
  renderQuestion();
  setScreen("quiz");
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
  setScreen("results");
}

function renderResults() {
  const passage = getPassage();
  const total = passage.questions.length;
  const percent = Math.round((quizScore / total) * 100);
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
    conversationQuizActive = false;
    conversationQuizChoice = null;
    renderConversation();
  });
}
document.querySelector("#play-dialogue").addEventListener("click", playConversation);
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
level = ["A1", "A2", "B1", "B2", "C1", "C2"].includes(level) ? level : "A1";
levelSelect.value = level;
levelSelect.addEventListener("change", () => {
  level = levelSelect.value;
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
document.querySelector("#next-question").addEventListener("click", () => {
  if (currentQuestion === passages[getPassageLevel()].questions.length - 1) showResults();
  else {
    currentQuestion += 1;
    renderQuestion();
  }
});
document.querySelector("#try-again").addEventListener("click", startQuiz);
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
