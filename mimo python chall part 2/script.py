# List Comprehension

# 1.
# Movie sites recommend films based on ratings, popularity, personalized options, etc.  
# Lets use list comprehensions to recommend movies with a rating greater than 4.
# 1.  Code a list comprehension and assign it to the recommended variable.
# 2. The list comprehension should iterate through every item in the ratings list.
# 3. Code the expression inside the list comprehension to check if the rating is greater than 4.  
# The result should be a list of booleam values.

ratings=[4.3, 3.1, 5, 1.1]

recommended = [rating > 4 for rating in ratings]

print (recommended)

# **********************************************************************************************

# 2. 
# Ever notice how browsers automatically add "https://" to a site URL?  Let's use list comprehension to add "https://" to the list of sites in a website.
# 1. Create a function add_https that takes site as a parameter. The function should return "https://" added to the site parameter.
# 2. After the function, create a variable auto_add that will store a list comprehension.
# 3. The list comprehension should iterate through every item in the websites list.
# 4. Code the expression inside the list comprehension that calls the add_https function on the list items.
# 5. Print auto_add

websites =["mimo.com", "coding.com", "food.org"]

def add_https(site):
    return "https://" + site

auto_add = [add_https(site) for site in websites]

print(auto_add)

#**************************************************************************************************************************************************** 

# 3. 
# Sometimes, we store information in databases that we don't need.  For example, in the given product dictionary, we don't need the color key and value.
# 1. Delete the color key with its value from the product dictionary using the right keyword.
# 2. Print product.

product = {
    'name' : 'pencil',
    'type' : 'stationery',
    'price' : '1.99',
    'color' : 'blue',
    'availability' : False
}

del product ['color']
print(product)

# +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


# Class

# 1.
# As a volunteer at a festival, you track the rides being installed.  We have a class named. Ride
# Ride that stores the name of the ride and the suitable age group.  Use instances of that class to 
# track the rides today.
# 1. Create a new instance of the Ride class named roller_coaster and specify that its name is Roller coaster
#  and an adults ride, 
# 2. Create a new instance of the Ride class named ferris_wheel and specify that its name is Ferris wheel and a kids ride.

class Ride:
    def __init__(self, name, age_group):
        self.name = name
        self.age_group = age_group

roller_coaster = Ride("Roller Coaster", "adults")
ferris_wheel = Ride("Ferris Wheel", "kids")

print(roller_coaster.age_group)
print(ferris_wheel.name)

# ****************************************************************************************************************************************

# 2. 
# There's a cafe nearby that offers a new variety of beverages every day.  We have a Beverage class and two instances: fruity and cocoa. 
#  Find out what's in today's drinks.
# 1. Access the name property of the fruity beverage and print it to the console.
# 2. Access the is_alcoholic property of the cocoa beverage and print it to the console. 

class Beverage:

    def __init__(self, name, is_alcoholic):
        self.name = name
        self.is_alcoholic = is_alcoholic
fruity = Beverage("Fruit punch", False)
cocoa =  Beverage("Hot chocolate", False)
print(fruity.name)
print(cocoa.is_alcoholic)

# **********************************************************************************************************************************************

# 3.
# You're a pet lover and have different pets at home.  Your sibling is visiting you and they can't remember the names of your pets.  Finish the Pet class
#  to help your sibling associate a pet's name with its properties, like its family color.
# 1. Within the Pet class, create instance variables name, family, animal_type, and color to store the specific information received in the parameters.

class Pet:
    def __init__(self, name, family, animal_type, color):
        self.name = name
        self.family=family
        self.animal_type= animal_type
        self.color = color 

rio = Pet("Rio", "Macaw", "Parrot", "Blue")
coco = Pet("Coco", "Poodle", "Dog", "White")
bud= Pet("Bud", "Labrador", "Dog","Brown")
daisy =Pet("Daisy","Burmese", "Cat", "Grey")
print(f"{rio.name} is a {rio.color} colored {rio.family} {rio.animal_type}")

