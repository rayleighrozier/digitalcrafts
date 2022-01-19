class User:
    def __init__(self, first_name , last_name, address=[]):
        self.first_name = first_name
        self.last_name = last_name
        self.address = address
    def add_address(self, address):
        self.address.append(address)
    def display_address(self):
        for add in self.address:
            print(add.street , add. city, add.state, add.zip_code)

class Address:
    def __init__(self,street, city, state, zip_code):
        self.street = street
        self.city = city
        self.state = state
        self.zip_code = zip_code
    # def printAddress(self):

rayleigh = User ("Rayleigh", "Rozier")
rayleighAddress = Address("123 sesame street", "Atlanta", "Georgia", "30082")
rayleighAddress2 = Address("456 main street", "Atlanta", "Georgia", "30082")
rayleigh.add_address(rayleighAddress)
rayleigh.add_address(rayleighAddress2)
rayleigh.display_address()


