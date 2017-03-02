# ArrayController (ES6)

### methods

**getLast** - return last property from array

**getKeys** - return keys from array

**getLinkToOrigin** - return link to origin array (attention, all which you will set in constructor will copied, and present like object);

**length** - return length of object

**next** - return next object item. If item is unset - will return undefined

**prev** - return previous object item. If item is unset - will return undefined

**filter** - procedure which will call funarg for all items in object.

**add** - will append value by key. If current key is exist in you will get warning, and value will not to set.

**cut** - procedure which set current key in object to null

**recursion** - (**static**) will call your funArg to all items in object

**copy** - (**static**) will copied all properties from dist object to link which you will set as a second argument.  
