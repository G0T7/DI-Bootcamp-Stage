from googletrans import Translator

def translate_words(words, src_lang='fr', dest_lang='en'):
    translator = Translator()
    translations = {}

    for word in words:
        translation = translator.translate(word, src=src_lang, dest=dest_lang)
        translations[word] = translation.text

    return translations

# List of French words
french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

# Translate French words to English
translations = translate_words(french_words)

# Print the translations
print(translations)
