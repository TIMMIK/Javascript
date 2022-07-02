// data type - object
let obj = {size:"100px"}
obj.ofObject1 = "200px"
obj.ofObject2 = true
obj.ofObject3 = ['first']
// changing & adding information on classNames
obj.size = "black"
obj.ofObject2 = false
obj.ofObject3[1] = "second"
delete obj.ofObject1
console.log(obj);