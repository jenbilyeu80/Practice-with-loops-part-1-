from statistics import median
import statistics as s 



prices = [3000000,270000,389000,295000,321000,288000,232000,200000,323000]
result=median(prices)
print(f"Median property price for the area is ${result}")

scores=[87,76,75,65,54,50,43,23,56,68,97]
print(f'The highest score the team scored was {max(scores)}')
print(f'The lowest score the team scored was {min(scores)}')
print(f'The average score the team scored was {s.mean(scores)}')
print(f'The median score the team scored was {s.median(scores)}')
