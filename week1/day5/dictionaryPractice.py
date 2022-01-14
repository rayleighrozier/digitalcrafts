
# Exercise 1 
phonebook_dict = { 
    'Alice': '703-493-1834', 
    'Bob': '857-384-1234', 
    'Elizabeth': '484-584-2923' }

print (phonebook_dict['Elizabeth'])
phonebook_dict ['Kareem'] = "938-489-1234"
del phonebook_dict['Alice']
phonebook_dict['Bob'] = "968-345-2345"
print (phonebook_dict)



# Exercise 2 
ramit = { 
    'name': 'Ramit', 
    'email': 'ramit@gmail.com', 
    'interests': ['movies', 'tennis'], 
        'friends': [ {'name': 'Jasmine', 
                        'email': 'jasmine@yahoo.com', 
                        'interests': ['photography', 'tennis'] },
                    { 'name': 'Jan', 
                        'email': 'jan@hotmail.com', 
                        'interests': ['movies', 'tv'] }
                     ]
        }
print (ramit['email'])
print (ramit['interests'][0])
print (ramit['friends'][0]['email'])
print (ramit['friends'][1]['interests'][1])