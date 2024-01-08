# Python Basics

# Your friend has a youtube channel.  They asked you to figure out how well their channel is doing. Lets find their best and worst videos!

# 1. Create a mostViewed variable, and assign the value "7 Amazing Mugs I CANNOT live without" to it.
#   2.  Create a leastViewed variable, and assign the value "The Best Mug to Take Scuba Diving" to it.
# 3.  use two print statements to output these variables in the console, each on a different line.  Make sure the output is the following:
# 7 Amaing Mugs I CANNOT live without
# The Best Mug to Take Scuba Diving

mostViewed="7 Amazing Mugs I CANNOT LIVE WITHOUT"
leastViewed="The Best Mug to Take Scuba Diving"
print (mostViewed)
print(leastViewed)

# Your favourite band uploaded a new video! Let's see how many people watched and commented on it.
# 1. Create a views variable and assign the value 1145 to it.
# 2. Create a comments variable and assign the value 200 to it.
# 3. Use a print statement to output the views variable to the console.
# 4. Use a print statement to output the comments variable to the console. 

views=1145
comments=200
print(views)
print(comments)

# Types & Comparisons

# Sam is 16 years old and wants to know if she's old enough to drive a car.  
# Complete the missing operators to show that anyone younger than 17 is not allowed to drive.
#  1. Finish the too_young comparison to answer the question in the console with a Boolean
#  that says that Sam's too young to drive.
#  2. Finish the car_driver comparison to show that she connot drive a car. 

sams_age =16
too_young = sams_age < 17
car_driver = sams_age > 17

print (f"Is Sam too young to drive? {too_young}")
print(f"Can Sam drive a car? {car_driver}")

# Lorde forgot her password and she's using a program to restore it.  The program checks if her new passowrd is different from the old one.
#  it also makes Lorde enter the new password twice to make sure it's written correctly.  Let's finish that program!
# 1. Use the inequality operator in the compare_old_new to show that the passwords are not the same.
# 2. Make sure that the new_password matches the repeat_new_password

old_password="hello123"
new_password="goodbye321"
compare_old_new = old_password != new_password
repeat_new_password ="goodbye321"
compare_new = new_password == repeat_new_password

print(f"Is new password different from old password? {compare_old_new}")
print(f"Has new password been introduced correctly? {compare_new}") 

# Jonas is going to the movies.  He checked the prices and he'll need a ticket for one adult.  
# 1. Complete the f-string to show that he'll buy a ticket for an adult by using the correct variable.

age=15
adult_ticket = age > 12
print(f"Buy one adult ticket: {adult_ticket}")

# Conditional Satements

# We'll print the number of read or unread notifications that a user received.
# 1.  If unread is not 0, print
# You have {unread} unread messages.
# Use f-string to display the value of unread inside the string.
# 2. Else print
# No unread messages.  Check your {read} read messages.  Use f-string to display theg value of read inside the string. 

read=5
unread=4
if unread != 0:
 print(f"You have {unread} unread messages")
else:
 print(f"No unread messages.  Check your {read} read messages")

#  Lets check if a password is correct using Python.
#   1.  if actualPass is equal to enteredPass, print Login successful.
#  2. Else, print Incorrect credentials.  Please try again.
 
actualPass = "abc123"
enteredPass = "Abc123"

if actualPass == enteredPass:
 print("Login successfull")
else:
 print("Incorrect credentials.  Please try again")

#   Entering certain establishments like a club depends on being over the age linit and having a reservation.  Lets write a Python program to check if a person can enter. 
#  1.  If age is greater than or equal to 18 and hasReservation is True, set the result to True.
#  2. Print Entry granted: followed by the result.  For exapmle, if the results is False, then print Entry granted:False.
 
 age =21
 hasReservation =True
 result =False

 if age >= 18 and hasReservation:
  result = True
print(f"Entry granted: {result}")
 
# Loops

# Create a simple inventory program for a shirt store.  The program should increase the sales variable by 1 and decrease the inventory variable by 1 when a shirt is sold.
# 1. Between the variable initalization and the print statements, increase the value of the sales variable by 1 using an operator.
# 2. Decrease the value of inventory variable by 1 using an operator.

sales = 0
inventory =10
sales +=1
inventory -=1

print (f"Sales: {sales}")
print(f'Inventory: {inventory}')

# Create a program that reminds us three times to stop the bot.
# 1. Code a while loop that prints
# "Reminder: Stop the bot!" when reminder_ count is less than 3.
#  2. After the print statement, increase the value of reminder_count by 1.

reminder_count = 0
while reminder_count < 3:
 print("Reminder: Stop the bot!") 
 reminder_count += 1

#  We wrote a print statement to let us know that the program has entered the loop.  However, the program is looping endlessly, fix it before it crashes our computer!
#  1.  In the while loop, change the value of the loop variable such that "Entered the loop!" is printed only once.
 
 loop= True
 while loop:
  print("Entered the loop!")
  loop =False

  # List

  # You decide to plan your daily meals using Python lists.
  #  1. Within the variable meals, create a list containing your meals for breakfast, lunch, and dinner in this order: "omelet", "salad", and "chicken".
  #  2. Alter the first print statement to include the lunch menu.
  #  3. A friend stops by with pizza! Change the meals list dinner value (the last value) to "pizza".
  #  4. Alter the second print statement to include the current dinner menu item!

  meals = ["omelet", "salad","chicken"]

  print (f"Lunch menu: {meals[1]}")
  meals[2] ="pizza"
  print (f"Dinner menu: {meals[2]}") 

  # it's tournament time for your volleyball league, but many of your teammates are out of town for the long weekend.  
  # Sounds like we'll have to make some subsitutions!
  # 1. Use a list operations to replace "Iliana" with "Jack" (sub_1).
  # 2. Replace "Anders" with "Celeste" (sub_2).
  # 3. Replace "Gabrielle" with "Mary" (sub_3).
  # Its match time.  Go team!

  players = ["Illiana", "Samuel", "Anders", "Teresa", "Gabrielle", "Alejandro"]
  sub1 = "Jack"
  sub2 = "Celeste"
  sub3 = "Mary"
  players[0]=sub1
  players[2]=sub2
  players[4]=sub3
  print(players)

  # Let's use for loops to keep us on track with our shopping_list list!
  # 1. For each item, print out a reminder sentence following this format:
  "Dont forget to buy <...>!"
  # 2. Replace <...> with the value of the current shopping list item in your loop.

  shopping_list = ["dish soap", "kleenex", "batteries", "aluminum foil", "pet food", "toothpaste", "lightbulbs"]

  for item in shopping_list:
   print(f"Dont forget to buy {item}!")

# We have a monthley tournament and we recorded the champion's name in the chamions list.  Recently, we found oyt that a regular participant "Tooti3" was cheating.  
  #  We have to check if "Tooti3" has won any tournamnets and remove him from the list.  Find out how many times "Tooti3" appears in the champions list using 
  #  count() then print the result in the console. 
   
   champions = ["Miracle+", "Tooti3", "Orustat", "Emkay", "mizuhuana", "diabian", "Cyle", "Tooti3", "Flaker"]
   result=champions.count("Tooti3")
   print(result)

  #  Joe records how much money he saved every month in a list called savings.  Help Joe calculate his total savings for the year using sum()
  #  and print the result in the console
   
   savings=[122, 50, 102, 103, 79, 46, 107, 9, 13, 91, 193, 4]
   print(sum(savings))