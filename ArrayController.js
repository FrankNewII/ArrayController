class ArrayCtrl {
  constructor(obj) {
    this.originArray = obj;
    ArrayCtrl.copy(this.originArray, this.currentObject = {}, true);
    this.getKeys();
  }

  getLast() {
    for(var k in this.currentObject) {}

    return this.currentObject[k];
  }

  getKeys() {
    this.keys = Object.keys(this.currentObject);
  }

  getLinkToOrigin() {
    return this.originArray;
  }

  get length() {
    if(typeof this.lengthArray !== 'number') {
      let i = 0;
      for(var k in this.currentObject) {
        ++i;
      }
      this.lengthArray = i;
      return i;
    }
    return this.lengthArray;
  }

  next() {
    if(this.currentKey !== undefined) {
      let nextKey = this.keys.indexOf(this.currentKey);
      let nextKeyName = this.keys[++nextKey];
      if(nextKeyName in this.currentObject) {
        this.currentKey = nextKeyName;
        return this.currentObject[nextKeyName];
      }
    } else {
      this.currentKey = this.keys[0];
      return this.currentObject[this.currentKey];
    }
  }

  prev() {
    if(this.currentKey !== undefined) {
      let nextKey = this.keys.indexOf(this.currentKey);
      let nextKeyName = this.keys[--nextKey];
      if(nextKeyName in this.currentObject) {
        this.currentKey = nextKeyName;
        return this.currentObject[nextKeyName];
      }
    } else {
      this.currentKey = this.keys[0];
      return this.currentObject[this.currentKey];
    }
  }

  filter(fn) {
    let newObject = {};
    for(let k in this.currentObject) {
      let currentValue = fn.call(null, this.currentObject[k], k);
      if(currentValue) newObject[k] = currentValue;
    }
    this.currentObject = newObject;
  }

  add(key, value, replace) {
    if(this.currentObject[key] && !replace) {
      console.warn('You try to rewrite object without setting flag - "replace"');
      return;
    }

    this.currentObject[key] = this.copy(value, {}, true);
  }

  cut(key) {
    if(!this.currentObject[key]) {
      console.warn('You try to delete undefined key');
      return;
    }

    this.currentObject[key] = null;
  }

  static isObject(obj) {
    return !(
    typeof obj == 'string' ||
    typeof obj == 'number' ||
    obj === undefined ||
    obj === null ||
    typeof obj == "boolean" ||
    typeof obj == "function");
  }

  static recursion(obj, fn) {
    if(arguments.length == 1) recursion(this.currentObject, fn);

    let newObject = {};
    for(let k in obj) {
      if(!ArrayCtrl.isObject(obj[k])) {
        fn.call(null, obj[k], k);
      } else {
        this.recursion(obj[k], fn);
      }
    }
  }

  static copy(from, to, deep) {
    if(deep) {
      for(var k in obj) {
        if(!obj.hasOwnProperty(k)) continue;
        if(!ArrayCtrl.isObject(obj[k]))
        {
          link[k] = obj[k];
        } else {
          this.copy(obj[k], link[k] = {}, deep);
        }
      }
    } else {
      for(var k in obj) {
        link[k] = obj[k];
      }
    }

    return link;
  }
}