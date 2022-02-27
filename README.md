# HyperionDev-THT
This is a repository that contains submissions for the HyperionDev Code Reviewer test assessment.

# Section A: Code Review

### Option 1: Python Task

Compulsory Task 1 Follow these steps:

- In a file called anagram.py, create:

- Given an array of strings strs, group the anagrams together.

- An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
-- You can return the answer in any order.
    -- Strings consists of lowercase English letters.
- Example input

- Input: strs = ["eat","tea","tan","ate","nat","bat"]

- Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```python
class Solution:
       def groupAnagrams(self, strs):
      result = {}
      for i in strs:
         x = "".join(sorted())
         if x in result:
            result[x].append(i)
         else:
            result[x] = [i]
      return list(result.values())
ob1 = Solution()
print(ob1.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
```

# Sumbission  Review
Thank you for your code submission, on trying to run your code locally, here are my observations;

### Correctness
1.  You have indentation incosistency on lines: 3, 4, 5, 6, 7 and 8, it would help if you used an IDE that recognises a python file, that way it will authomatically indent your code.
2. On line 5: `x = "".join(sorted())`, the `sorted()` takes in a parameter, possibly your string value `i`
3. The Output required your array of strings to start with the list with the least number of anagrams, i.e `[['bat'], ['tan', 'nat'], ['eat', 'tea', 'ate']]`. However, your most possible out would have been: `[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]`, a final sort on the list would fix this.

### Efficiency
1. You have a good understanding of the python syntax, you know how to use classes, however, for this assignment a method would help you acheive the same result. Below is my submission;

```python
def groupAnagrams(strs):
	# declare a dictionary that holds your list of anagrams
	result = {}
	for item in strs:
		# Check if item already exists in list
		x = "".join(sorted(item))
		if x in result:
			result[x].append(item)
		else:
			result[x] = [item]
			
	# Sort your final list of anagrams as per output
	return sorted(list(result.values()), key=len)

print(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
```

### Style
1. Indentation: Please choose a particular indentation style to use throughout, if tabs, use tabs all the way, if spaces use spaces all the way and mind how many spaces too.
2. The code lacked comments, comments help guide others on what is happening on a specific line of code.

### Documentation
The documentation of this assignment was okay, it does guide the candidate for the assignment on what should be done, however, here are some pointers;
1. It would have been better to start with describing what an **Anagram** is
2. Given the input example and output, there seems to have been on more instruction missing on the assignment, for the candidate submitting code to organize the array of anagrams from the array with the least number of anagrams to the largest.


