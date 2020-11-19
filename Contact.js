class Contact{
    constructor(...params){
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.number=params[6];
        this.email=params[7];
    }
    toString(){
        return '\nFirstName: ' + this.firstName + ' LastName: ' + this.lastName + ' Address: ' + this.address+ ' City: '+ this.city+' State : '+ this.state+ ' Zip: '+this.zip+' Number: '+this.number+'Email: '+ this.email;
    }

}
try{
    let contact=new Contact('Jitendra','Patel','Lunawas Khara','Jodhpur','Rajasthan',342014,'91 9636638082','jitendra@gmail.com');
    console.log(contact.toString());
}catch(e){
    console.error(e);
}