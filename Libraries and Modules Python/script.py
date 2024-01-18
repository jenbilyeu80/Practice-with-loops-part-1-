# Mimo Python Libraries and Modules challenges.

# 1.
# Ricky is doing a Math project.  He's trying to create a radian and degree converter using Pytho
#  but he forgot to import the module.  Help Ricky to import the math package.

import math

def degree_to_radian (degree):
    print(f'{degree} degree = {math.radians(degree)} radian')

def radian_to_degree(radian):
    print(f'{radian} radian = {math.degrees(radian)} degree')

degree_to_radian(90)
radian_to_degree(0.785)

# 2.
# As part of the research for an article she is writing, Mia created a program to get the median price of housing properties in an area.
# Her program runs fine but since she is only using 1 function, we don't have to import the entire statistics module.
#  Change her import statement to only import the median function from the statistics module.  Then remove statistics when using the median function.  

from statistics import median

prices = [300000, 270000, 389000, 295000, 321000, 288000, 232000, 200000, 323000]
result = median(prices)
print(f'Median property price for the area is ${result}')

# 3.
# As the manager of the basketball club, Kugo is tabulating and analyzing the club's performance.  Kugo finds that statistics is too long to type 
# and wants to simplify it to just s but he forgot to rename the module when he imported it. Help Kugo rename his import to s.

import statistics as s 

scores = [87, 76, 75, 65, 54, 50, 43, 23, 56, 68, 97]
print (f'The highest score the team scored was {max(scores)}')
print (f' The lowest score the team scored was {min(scores)}')
print (f' The average score the team scored was {s.mean(scores)}')
print (f' The median score the team scored was {s.median(scores)}')