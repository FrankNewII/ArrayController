class ArrayCtrl {
  constructor(obj) {
    this.originArray = obj;
    this.copy(this.originArray, this.currentObject = {}, true);
    this.keys = this.getKeys(this.currentObject);
  }

  getLast(obj) {
    for(var k in obj || this.currentObject) {}

    return this.currentObject[k];
  }

  getKeys(obj) {
    return Object.keys(obj);
  }

  copy(orig, link, deep) {
    if(deep) {
      for(var k in orig) {
        if(!orig.hasOwnProperty(k)) continue;
        if(!this.isObject(orig[k]))
        {
          link[k] = orig[k];
        } else {
          this.copy(orig[k], link[k] = {}, deep);
        }
      }
    } else {
      for(var k in orig) {
        link[k] = orig[k];
      }
    }

    return link;
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

  recursion(obj, fn) {
    if(arguments.length == 1) recursion(this.currentObject, fn);

    let newObject = {};
    for(let k in obj) {
      if(!this.isObject(obj[k])) {
        fn.call(null, obj[k], k);
      } else {
        this.recursion(obj[k], fn);
      }
    }
  }

  isObject(obj) {
    return !(
    typeof obj == 'string' ||
    typeof obj == 'number' ||
    obj === undefined ||
    obj === null ||
    typeof obj == "boolean" ||
    typeof obj == "function");
  }
}