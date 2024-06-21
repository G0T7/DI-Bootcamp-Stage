# anagram_checker.py

class AnagramChecker:
    def __init__(self, wordlist_file):
        self.wordlist = self.load_wordlist(wordlist_file)
    
    def load_wordlist(self, wordlist_file):
        with open(wordlist_file, 'r', encoding='utf-8') as file:
            wordlist = [line.strip().lower() for line in file]
        return wordlist
    
    def is_valid_word(self, word):
        word = word.lower()
        return word in self.wordlist
    
    def get_anagrams(self, word):
        word = word.lower()
        anagrams = [w for w in self.wordlist if self.is_anagram(word, w)]
        return anagrams
    
    def is_anagram(self, word1, word2):
        return sorted(word1) == sorted(word2)
