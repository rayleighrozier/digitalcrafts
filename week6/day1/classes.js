//Classes
class Student {
  constructor(name, height, age) {
    name = this.name;
    height = this.height;
    age = this.age;
  }
  greet() {
    return `${this.name} says hello`;
  }
}

class SuperStudent extends Student {
  consturctor(title) {
    super(title);
    this.title = title;
  }
  greet() {
    console.log(this.title);
  }
}

const santos = new Student("santos", "5.8", "1222");
const Matt = new SuperStudent("TA");
