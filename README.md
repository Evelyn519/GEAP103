# Language Learning App

Ezy is a bilingual English and Traditional Chinese study app with a searchable 7,000-word vocabulary index, 200 prioritized academic words, pronunciation playback, mastered-word tracking, and daily sentence practice across six everyday topics. Reading offers 34 English articles at each level from A1 to C1; each article takes at least three minutes to read and includes useful vocabulary and comprehension questions with answers and explanations. The questions stay within the Reading section rather than appearing on a separate Quiz page. An additional B2–C1 Inspirational Quotes topic presents attributed quotes one at a time with Traditional Chinese translations and American English audio playback. Students can choose any CEFR level from A1 through C2; C2 uses the advanced C1 reading. The selected display language is saved in the browser.

The display language changes the interface only: reading passages, questions, answer choices, answers, and explanations stay in English. Daily conversation sentences are always shown in English with Traditional Chinese translations for support.

The Ezy cloud-sticker logo is in `assets/ezy-logo.png`. The plane and skateboard bear illustrations are used as small decorative accents across the home, vocabulary, and reading screens.

## Run the app

Serve this folder with any static web server and open `index.html`. Use the language selector in the header to switch between English and Traditional Chinese. The app has no build step or package dependencies. The Listen button selects an installed American English browser voice when available and requests `en-US` as its fallback. Vocabulary cards show part of speech, a simple English definition, and three English example sentences with Traditional Chinese translations. Dictionary details are looked up through the free Dictionary API, and example translations are looked up through MyMemory; both are cached in the browser. A few common academic terms use curated definitions and example sentences.

## Word index attribution

`vocabulary-index.js` contains 7,000 entries sampled from the `words_alpha.txt` English word list by [dwyl/english-words](https://github.com/dwyl/english-words). The source is released under [The Unlicense](https://unlicense.org/).

Student level, mastered words, saved words, and looked-up definitions are stored in the browser's local storage.
