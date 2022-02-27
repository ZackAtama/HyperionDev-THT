# HyperionDev-THT
This is a repository that contains submissions for the HyperionDev Code Reviewer test assessment.
- [Section A](https://github.com/ZackAtama/HyperionDev-THT/edit/main/README.md#subission-review)
- [Section B](https://github.com/ZackAtama/HyperionDev-THT/edit/main/README.md#section-b-repository-link--live-app-link)
- [Section C](https://github.com/ZackAtama/HyperionDev-THT/edit/main/README.md#section-c-code-challenge)

## Section A: Code Review
I chose Option 1: Python Task

## Subission Review
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

## Section B: [Repository Link](https://github.com/ZackAtama/data-lytics) | [Live App Link](https://data-lytics.netlify.app/)

## Section C: Code Challenge
I chose Option 1: Say the Number
- [Link to assignment](https://edabit.com/challenge/4E9gTrRWErpTCA2FQ)

### How to run the app locally
1. Clone this repository: `git clone https://github.com/ZackAtama/HyperionDev-THT/tree/section-c`
2. Install dependencies: `npm install` or `yarn add`
3. Run application: `npm run dev`

### How to use
1. In your terminal, soon as the application starts running, you'll be presented with a prompt in your ternimal to enter any number; `Enter any number:`
2. Enter any number and press enter on your keyboard
3. The application will print out your number in words and exit.

