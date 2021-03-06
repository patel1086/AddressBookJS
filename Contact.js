class Contact {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.number = params[6];
        this.email = params[7];
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        let regFirstName = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (regFirstName.test(firstName)) {
            this._firstName = firstName;
        }
        else throw 'Incorrect FirstName';
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        let regLastName = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (regLastName.test(lastName)) {
            this._lastName = lastName;
        }
        else throw 'Incorrect LastName';
    }
    get address() {
         return this._address;
    }
    set address(address) {
        let regAddress = RegExp('^[A-Za-z0-9]{4,}$');
        if (regAddress.test(address)) {
            this._address = address;
        }
        else throw 'Incorrect address';
    }
    get city() {
        return this._city;
    }
    set city(city) {
        let regCity = RegExp('^[A-Za-z]{4,}$');
        if (regCity.test(city)) {
            this._city = city;
        }
        else throw 'Incorrect city';
    }
    get state() {
        return this._state; 
    }
    set state(state) {
        let regState = RegExp('^[A-Za-z]{4,}$');
        if (regState.test(state)) {
            this._state = state;
        }
        else throw 'Incorrect state';
    }
    get zip() {
        return this._zip; 
    }
    set zip(zip) {
        let regZip = RegExp('^\\d{3}(\\s{0,1}\\d{3})$');
        if (regZip.test(zip)) {
            this._zip = zip;
        }
        else throw 'Incorrect zip';

    }

    get number() {
        return this._number; 
    }
    set number(number) {
        let regNumber = RegExp('^\\d{2}(\\s{1}\\d{10})$');
        if (regNumber.test(number)) {
            this._number = number;
        }
        else throw 'Incorrect number';
    }

    get email() {
        return this._email; 
    }
    set email(email) {
        let regEmail = RegExp('^[a-zA-Z]+([._+-]{0,1}[a-zA-Z0-9]+)*@[a-zA-Z0-9]+.[(com)|(co)|(net)]+(?:\\.[a-z]{2,}){0,1}$');
        if (regEmail.test(email)) {
            this._email = email;
        }
        else throw 'Incorrect email';

    }
    toString() {
        return '\nFirstName: ' + this.firstName + ' LastName: ' + this.lastName + ' Address: ' + this.address + ' City: ' + this.city + ' State : ' + this.state + ' Zip: ' + this.zip + ' Number: ' + this.number + ' Email: ' + this.email;
    }

}

//Function to add name in addressBook
function addName(addressBook, contact) {
    for(contacts in addressBook){
        if(contacts.firstName==contact.firstName){
            throw 'Name already taken';

        }
    }
    addressBook.push(contact);
}

//Function to update name in addressBook
function updateName(contact, oldName, newName) {
    contact.filter(person => person.firstName == oldName).forEach(person => person.firstName = newName);
}

//Function to delete name in addressBook
function deleteName(contactArray, name){
    var removeIndex = contactArray.map(item=>item.firstName).indexOf(name);
    contactArray.splice(removeIndex,1);
}

//Function to count the contacts
function countContacts(contactArray){
    let count= contactArray.reduce((a, b) => a.concat(b), []).length;
    console.log("Number of contacts is: "+count);
 }

 //Function to get contacts by city name
function getPersonByCity(contactArray,cityName){
    contactArray.filter(name => name.city == cityName).forEach(contact=>console.log(contact.toString()));
}
//Function to get contacts by state name
function getPersonByState(contactArray,stateName){
    contactArray.filter(name => name.state == stateName).forEach(contact=>console.log(contact.toString()));
}

function isPresentInState(contactArray,name,stateName){
    let contactSearched=contactArray.filter(a => a.state == stateName).find(b => b.firstName==name);
    console.log(contactSearched.toString());
}

function isPresentInCity(contactArray, name, cityName) {
    let contactSearched=contactArray.filter(a => a.city == cityName).find(b => b.firstName==name);
    console.log(contactSearched.toString());
}

//Function to get count of persons by city
function getCountByCity(contactArray, cityName) {
    let count = contactArray.filter(contact => contact.city == cityName).reduce((a, b) => a.concat(b), []).length;
    console.log("Number of contacts living in this city are: " + count);
}

//Function to get count of persons by state
function getCountByState(contactArray, stateName) {
    let count = contactArray.filter(contact => contact.state == stateName).reduce((a, b) => a.concat(b), []).length;
    console.log("Number of contacts living in this state are: " + count);
}

//Function to sort on the basis of names
function sortedContacts(contactArray,type) {
    if(type=='fisrtName'){
    contactArray.sort(function (a, b) {
        var nameA = a.firstName.toLowerCase();
        var nameB = b.firstName.toLowerCase();
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0
    });
    contactArray.forEach(emp => console.log(emp.toString()));
}
else if(type=="City"){
    contactArray.sort(function (a, b) {
        var nameA = a.city.toLowerCase(), nameB = b.city.toLowerCase()
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0
    });
    contactArray.forEach(emp => console.log(emp.toString()));
}
else if(type=="State"){
    contactArray.sort(function (a, b) {
        var nameA = a.state.toLowerCase(), nameB = b.state.toLowerCase()
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0
    });
    contactArray.forEach(emp => console.log(emp.toString()));
}
else{
    contactArray.sort(function (a, b) { return a.zip - b.zip });
    contactArray.forEach(emp => console.log(emp.toString()));
}
}
try {
    let contact = new Contact('Jitendra', 'Patel', 'LunawasKhara', 'Jodhpur', 'Rajasthan', 342014, '91 9636638082', 'jitendra@gmail.com');
    let contact1 = new Contact('Ramnarayan', 'Patel', 'LunawasKhara', 'Jodhpur', 'Rajasthan', 342014, '91 9571908082', 'rampatel@gmail.com');
    let addressBook=new Array();
    addName(addressBook, contact);
    addName(addressBook, contact1);
    updateName(addressBook, "Jitendra", "Radheshyam");
    deleteName(addressBook,'Ramnarayan');
    countContacts(addressBook);
    getPersonByCity(addressBook,"Jodhpur");
    getPersonByState(addressBook,"Rajasthan");
    isPresentInState(addressBook,"Radheshyam","Rajasthan");
    isPresentInCity(addressBook,"Radheshyam","Jodhpur");
    getCountByCity(addressBook, "Jodhpur");
    getCountByState(addressBook, "Rajasthan");
    sortedContacts(addressBook,"firstName");
    sortedContacts(addressBook,"City");
    sortedContacts(addressBook,"State");
    sortedContacts(addressBook,"Zip");
    console.log(addressBook);

} catch (e) {
    console.error(e);
}