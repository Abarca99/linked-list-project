/* eslint-disable */
function Node(value) {
    this.value = value;   
    this.nextNode = null;
  }
  
function LinkedList() {
this.headNode = null;  
this.sizeValue = 0;

this.append = function (value) {
    const newNode = new Node(value); //create new node

    if (!this.headNode) {       //check if there is head node 
    this.headNode = newNode;    //if assign this headnode to this node
    } else {
    let currentNode = this.headNode;  //otherwise assign currentnode to this.headnode
                                      
    while (currentNode.nextNode) {           //checks if next node has a node
        currentNode = currentNode.nextNode;  //if it does reassign it to said next node AND repeat
    }

    currentNode.nextNode = newNode;      //if there is no next node assign it to this node
    }                                    //now its at the end and newNode has effectively pushed null back

    this.sizeValue += 1;  // reoccuring code adds 1 every time a node is created to check length
};

this.prepend = function (value) {
    const newNode = new Node(value);  //create new node

    newNode.nextNode = this.headNode;  //assign next node to this current node

    this.headNode = newNode;   //assign new headnode to current node as we are placing at start i.e HEAD
    this.sizeValue += 1;
};

this.size = function () {
    console.log(`This linked-list is ${this.sizeValue} nodes long!`);
};

this.returnHead = function () {
    console.log(this.headNode);
};

this.returnTail = function () {
    if (!this.headNode) {
    console.log("The linked list is empty."); //if there is no head there is no array
    } else {
    let currentNode = this.headNode;

    while (currentNode.nextNode) {
        currentNode = currentNode.nextNode; //go through all nodes and logs last node
    }

    console.log(currentNode);
    }
};
this.at = function(index){
let currentNode = this.headNode;
for(let i=0;i<index;i++){
    currentNode = currentNode.nextNode
}
console.log(currentNode.value);
}

this.pop = function () {
if (!this.headNode) {
    console.log("The linked list is empty.");  //if there is no head node then console long EMPTY
    return;
}

if (!this.headNode.nextNode) {
    this.headNode = null;  //if head node doesnt have next node we reassign this node to null effectively removing it
} else {
    let currentNode = this.headNode;
    while (currentNode.nextNode.nextNode) {  //checks two nodes ahead and pops the one before the null
    currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
}

this.sizeValue -= 1; // Decrement the size
};

this.contains = function(value){
  if (!this.headNode) {
    console.log("The linked list is empty.");  //if there is no head node then console long EMPTY
    return;
}
  let currentNode = this.headNode;
  while(currentNode){
    if(currentNode.value === value){
        return true;
    }
    currentNode = currentNode.nextNode;
  }
  return false;
}
this.find = function(value){
    let currentNode = this.headNode;
    let index = 0;

    while(currentNode){
        if(currentNode.value === value){
            return index;
        }
        currentNode = currentNode.nextNode;
        index++;
    }
    return -1;
}

this.toString = function(){
    let currentNode = this.headNode;
    let stringify = '';
    while(currentNode){
      stringify += currentNode.value + ',';
      currentNode = currentNode.nextNode;
    }
    return stringify;
}

}
  
  const linkedListOne = new LinkedList();
  
  linkedListOne.append(1);
  linkedListOne.prepend(2);
  linkedListOne.prepend(2);
  linkedListOne.prepend(3);
  linkedListOne.prepend(2);
  linkedListOne.prepend(4);
  
  linkedListOne.size();      
  linkedListOne.returnHead(); 
  linkedListOne.returnTail();
  linkedListOne.at(5);
  linkedListOne.pop();
  console.log(linkedListOne.contains(10))
  console.log(linkedListOne.find(5));
  console.log(linkedListOne.toString());
  

  