import re
from collections import Counter

class Text:
    def __init__(self, text):
        """
        Initialize the Text class with a string.
        
        Parameters:
        - text (str): The text to be analyzed.
        """
        self.text = text
    
    def word_frequency(self, word):
        """
        Return the frequency of a word in the text.
        
        Parameters:
        - word (str): The word to find the frequency of.
        
        Returns:
        - str: A message indicating the frequency of the word.
        """
        words = self.text.split()
        frequency = words.count(word)
        return f"The word '{word}' appears {frequency} times in the text."
    
    def most_common_word(self):
        """
        Return the most common word in the text.
        
        Returns:
        - str or None: The most common word, or None if the text is empty.
        """
        words = re.findall(r'\b\w+\b', self.text.lower())
        counter = Counter(words)
        most_common = counter.most_common(1)
        return most_common[0][0] if most_common else None
    
    def unique_words(self):
        """
        Return a list of all unique words in the text.
        
        Returns:
        - list: A list of unique words.
        """
        words = re.findall(r'\b\w+\b', self.text.lower())
        return list(set(words))
    
    @classmethod
    def from_file(cls, filename):
        """
        Create a Text instance from a text file.
        
        Parameters:
        - filename (str): The name of the text file.
        
        Returns:
        - Text: A Text instance initialized with the text from the file.
        """
        with open(filename, 'r') as file:
            text = file.read()
        return cls(text)


class TextModification(Text):
    def __init__(self, text):
        """
        Initialize the TextModification subclass with a string.
        
        Parameters:
        - text (str): The text to be modified.
        """
        super().__init__(text)
    
    def remove_punctuation(self):
        """
        Return the text without any punctuation.
        
        Returns:
        - str: The text without punctuation.
        """
        return re.sub(r'[^\w\s]', '', self.text)
    
    def remove_stopwords(self):
        """
        Return the text without any English stop words.
        
        Returns:
        - str: The text without stop words.
        """
        stopwords = {"i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now"}
        words = self.text.split()
        filtered_words = [word for word in words if word.lower() not in stopwords]
        return ' '.join(filtered_words)
    
    def remove_special_characters(self):
        """
        Return the text without any special characters.
        
        Returns:
        - str: The text without special characters.
        """
        return re.sub(r'[^A-Za-z0-9\s]', '', self.text)
if __name__ == "__main__":
    # Part I: Using a simple string
    sample_text = "A good book would sometimes cost as much as a good house."
    text_obj = Text(sample_text)

    print(text_obj.word_frequency('good'))
    print(f"Most common word: {text_obj.most_common_word()}")
    print(f"Unique words: {text_obj.unique_words()}")

    # Part II: Using an external text file
    stranger_text = Text.from_file('the_stranger.txt')

    print("\nUsing the external text file:")
    print(stranger_text.word_frequency('the'))
    print(f"Most common word: {stranger_text.most_common_word()}")
    print(f"Unique words: {stranger_text.unique_words()}")

    # Bonus: TextModification class
    text_mod = TextModification(stranger_text.text)

    print("\nText without punctuation:")
    print(text_mod.remove_punctuation())

    print("\nText without stopwords:")
    print(text_mod.remove_stopwords())

    print("\nText without special characters:")
    print(text_mod.remove_special_characters())
