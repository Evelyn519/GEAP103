# Language Learning App

Ezy is a bilingual English and Traditional Chinese study app with a searchable 7,000-word vocabulary index, 200 prioritized academic words, pronunciation playback, mastered-word tracking, practical CEFR-matched readings with useful vocabulary and evidence-based quizzes, and daily conversations with Chinese translations, American English audio, and quick quizzes. Students can choose any CEFR level from A1 through C2; C2 uses the advanced C1 reading. The selected display language is saved in the browser.

The display language changes the interface only: reading passages and quiz prompts and answer choices stay in English. Daily conversation dialogues include Traditional Chinese translations for support.

The Ezy cloud-sticker logo is in `assets/ezy-logo.png`. The plane and skateboard bear illustrations are used as small decorative accents across the home, vocabulary, reading, and quiz screens.

## Run the app

Serve this folder with any static web server and open `index.html`. Use the language selector in the header to switch between English and Traditional Chinese. The app has no build step or package dependencies. KK phonetics are bundled where available, with an online dictionary fallback for other words; online lookups require an internet connection and are cached in the browser. Vocabulary cards show the KK transcription, meaning, and an example sentence in that order. The Listen button selects an installed American English browser voice when available and requests `en-US` as its fallback. Definitions and example sentences for words without built-in content are looked up through the free Dictionary API and cached in the browser. Those external definitions are in English; selected academic glossary terms include Chinese translations and curated examples.

## Pronunciation data attribution

`pronunciation-index.js` contains American English IPA pronunciations converted to KK-style symbols from [open-dict-data/ipa-dict](https://github.com/open-dict-data/ipa-dict) and supplemental pronunciations from [CMUSphinx/cmudict](https://github.com/cmusphinx/cmudict). The bundled dictionaries currently cover 1,967 of the 7,000 library words. Other words are looked up online through the free Dictionary API and cached when a pronunciation is available. Their MIT and CMUdict licenses are included in `assets/IPA-DICT-LICENSE` and `assets/CMUDICT-LICENSE`, respectively. IPA-to-KK conversion is approximate.

## Word index attribution

`vocabulary-index.js` contains 7,000 entries sampled from the `words_alpha.txt` English word list by [dwyl/english-words](https://github.com/dwyl/english-words). The source is released under [The Unlicense](https://unlicense.org/).

Student level, mastered words, saved words, and looked-up definitions are stored in the browser's local storage.
