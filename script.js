{
  // for define Getter
  let obj = { f_name: "sahil", l_name: "khan" };
  obj.__defineGetter__("name", function () {
      // console.log(this.f_name);
      return `${this.f_name} ${this.l_name}`;
  });
  // console.log(obj.name);

  // for define Setter
  obj.__defineSetter__("name", function (f_name) {
      this.f_name = f_name;
  });
  obj.name = "aman";
  // console.log(obj);
  
  // console.log(obj.__lookupGetter__('name'));
  // console.log(obj.__lookupSetter__('name'));
}


{
  // Object.assign()
  // it changes in orignal array
  let student = { name: "dom" };
  let grade = { mark: 80 };
  Object.assign(student, grade);
  let detail = Object.assign({}, student);
  // console.log(student);
  // console.log(detail);
}

{
  const object1 = {};
  // console.log(object1);
  Object.defineProperties(object1, {
    property1: {
      value: 42,
      writable: true
    },
    property2: {}
  });
  // console.log(object1);
}


{
  // Object.entries()
  // it makes an array of object key value pair.you can easily iterate over it using for of loop.
  let person = {
    name:'dom',
    age:29
  }
  let person_arr = Object.entries(person);
  // console.log(person_arr);
}


{
  // convert in JS object
  const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  let arr_entries = Object.fromEntries(entries);
  // console.log(arr_entries);
}

{
  // Object.getOwnPropertyDescriptor()
  let obj1 = {
    name:'sahil'
  }
  let obj_prop = Object.getOwnPropertyDescriptor(obj1,'name');
  // console.log(obj_prop);
}


{
  const object2 = {name:'sahil'};
  const a = Symbol('a');
  const b = Symbol.for('b');
  
  object2[a] = 'localSymbol';
  object2[b] = 'globalSymbol';
  
  const objectSymbols = Object.getOwnPropertySymbols(object2);
  
  for(let prop in object2){
    // console.log(prop);
  }
  // console.log(object2);
  // console.log(objectSymbols);
  for ( let prop of objectSymbols){
    // console.log(prop);
  }
  // console.log(Object.getPrototypeOf(object2));
}


{
  let obj1 = {
    name:'sahil'
  };
  let proto = {
    getname:function() {
      return this.name;
    }
  }
  obj1.prototype = Object.create(proto);
  // console.log(obj1);
}



{
  let student = { name: "dom" };
  let grade = { mark: 80 };
  Object.setPrototypeOf(student,grade);
  console.log(student);
  let res = grade.isPrototypeOf(student);
  console.log(res);
}