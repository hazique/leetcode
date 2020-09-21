/**
 * Initialize your Node here.
 */
function Node(val) {
    return {
        val: val,
        next: null
    }
};


/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
    this.head = null;    
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index == 0)
        return this.head;
    
    let tail = this.head;
    let currentIndex = 0;
    while (tail.next !== null) {
        tail = tail.next;
        currentIndex++;

        if (currentIndex == index)
            return tail.val;
    }

    if (index > currentIndex)
        return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val);

    if (!this.head){
        this.head = newNode;
        return this.head;
    }

    newNode.next = this.head.next;
    this.head = newNode;
    return this;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    
    const newNode = new Node(val);

    if (!this.head) {
        this.head = newNode;
        return this.head;

    }

    let tail = this.head;
    while (tail.next !== null) {
        tail = tail.next;
    }

    tail.next = newNode;
    return this.head;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    const newNode = new Node(val);

    let tail = this.head;
    let currentIndex = 0;
    while (tail.next !== null) {
        let previousNode = tail;
        tail = tail.next;

        if (currentIndex == index - 1) {
            newNode.next = tail;
            previousNode.next = newNode;
        }

        currentIndex++;
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    
    if (index == 0) {
        this.head = this.head.next;
        return;
    }

    let tail = this.head;
    let currentIndex = 0;

    while (tail.next !== null) {
        let previousNode = tail;
        tail = tail.next;

        currentIndex++

        if (currentIndex == index) {
            previousNode.next = tail.next;
        }
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */


const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
myLinkedList.get(1);              // return 2
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
console.table(myLinkedList.get(1));              // return 3