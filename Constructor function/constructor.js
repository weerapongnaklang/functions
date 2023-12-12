function Person(authorID, name, houreNo, street, county, postcode, url) {
  this.authorID = authorID;
  this.name = name;
  this.address = {
    houreNo: houreNo,
    street: street,
    county: county,
    postcode: postcode
  };

  // this.address = {
  //   houreNo,
  //   street,
  //   county,
  //   postcode,
  // };

  // this.address = {};
  // this.address.houreNo = houreNo;
  // this.address.street = street;
  // this.address.county = county;
  // this.address.postcode = postcode;
  this.url = url;
  this.dance = () => {
    console.log(`${this.name} is dancing`);
  };
}

const person = new Person(111, "kim", "164", "jisoo", "seoul", "10400", "url");
console.log(person.authorID);
console.log(person.name);
console.log(person.address.houreNo);
console.log(person.address.street);
console.log(person.address.county);
console.log(person.address.postcode);
console.log(person.url);
console.log(person.dance());
