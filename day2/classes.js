class Collge {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    console.log(`iam ${name} and my address is ${address}`);
  }
}

class Address extends Collge {
  constructor(subject, name, address) {
    super(subject); //this is only used in the child class it is used to initialice the child constructor
    this.subject = subject;
    this.name = name;
    this.address = address;
    console.log(
      `this subject is ${subject}  and ${name} and address is ${address}`
    );
  }
}

const object1 = new Address("react", "kailash", "Dhangadhi");
