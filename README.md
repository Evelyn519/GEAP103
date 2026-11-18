# Language Learning App

Ezy is a bilingual English and Traditional Chinese study app with a searchable 7,000-word vocabulary index, 200 prioritized academic words, pronunciation playback, mastered-word tracking, practical CEFR-matched readings with useful vocabulary and evidence-based quizzes, and daily conversations with Chinese translations, American English audio, and quick quizzes. Students can choose any CEFR level from A1 through C2; C2 uses the advanced C1 reading. The selected display language is saved in the browser.

The display language changes the interface only: reading passages and quiz prompts and answer choices stay in English. Daily conversation dialogues include Traditional Chinese translations for support.

The Ezy cloud-sticker logo is in `assets/ezy-logo.png`. The plane and skateboard bear illustrations are used as small decorative accents across the home, vocabulary, reading, and quiz screens.

## Run the app

Serve this folder with any static web server and open `index.html`. Use the language selector in the header to switch between English and Traditional Chinese. The app has no build step or package dependencies. The Listen button selects an installed American English browser voice when available and requests `en-US` as its fallback. Definitions and example sentences for words without built-in content are looked up through the free Dictionary API and cached in the browser. Those external definitions are in English; selected academic glossary terms include Chinese translations and curated examples.

## Word index attribution

`vocabulary-index.js` contains 7,000 entries sampled from the `words_alpha.txt` English word list by [dwyl/english-words](https://github.com/dwyl/english-words). The source is released under [The Unlicense](https://unlicense.org/).

Student level, mastered words, saved words, and looked-up definitions are stored in the browser's local storage.
