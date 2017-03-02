# ArrayController (ES6)

####Usage:

`var arr = new ArrayCtrl(Object|Arguments|Array);`

### methods

`getLast()` - return last property from array

`getKeys()` - return keys from array

`getLinkToOrigin()` - return link to origin array (attention, all which you will set in constructor will copied, and present like object);

`length()` - return length of object

`next()` - return next object item. If item is unset - will return undefined

`prev()` - return previous object item. If item is unset - will return undefined

`filter(callback)` - procedure which will call funarg for all items in object.
@params: 
callback - function which will call for all items in current object. That function must return modified data
At first argument that function will get value(current item) and key (current object key)

`add(key, value, replace)` - procedure will append value by key. If current key is exist in you will get warning, and value will not to set.
@params:
key - key which will add to current object
value - value, which will add by _key_ in current object
replace - flag which used for check permission for reset previous value, if they is exist (by default **false**)


`cut(key)` - procedure which set current key in object to null
@params: 
key - key which will set to **null** in current object

`recursion(object, funArg)` - (**static**) will call your funArg to all items in object
@params:
object - object which will passed by that function
funArg - function which will call for all items in current _object_

`copy(from, to, deep)` - (**static**) will copied all properties from dist object to link which you will set as a second argument.  
@params: 
from - object which we want to copy
to - link to object which must get properties from object _from_
deep - flag which will explain to function how work this objects which will get in current object. If set that argument to _true_, so function will recursive copy all primitive values, if set to false - object _to_ will get link to object which will found in object _from_
