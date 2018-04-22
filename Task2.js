class Node{
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class SinglyList{
    constructor(){
        this._length = 0;
        this.head = null;
    }
    add(value){
        let node = new Node(value),
            currentNode = this.head;

        if (!currentNode) {
            this.head = node;
            this._length++;

            return node;
        }

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;

        this._length++;

        return node;
    }
    searchNodeAt(position){
        let currentNode = this.head,
            length = this._length,
            count = 1,
            message = {failure: 'Failure: non-existent node in this list.'};

        if (length === 0 || position < 1 || position > length) {
            throw new Error(message.failure);
        }

        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }
    remove(position){
        let currentNode = this.head,
            length = this._length,
            count = 0,
            message = {failure: 'Failure: non-existent node in this list.'},
            beforeNodeToDelete = null,
            nodeToDelete = null,
            deletedNode = null;

        if (position < 0 || position > length) {
            throw new Error(message.failure);
        }

        if (position === 1) {
            this.head = currentNode.next;
            deletedNode = currentNode;
            currentNode = null;
            this._length--;

            return deletedNode;
        }

        while (count < position) {
            beforeNodeToDelete = currentNode;
            nodeToDelete = currentNode.next;
            count++;
        }

        beforeNodeToDelete.next = nodeToDelete.next;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
        this._length--;

        return deletedNode;
    }
    showList(){
        for(let i = 1; i <= this._length; i++){
            console.log(this.searchNodeAt(i).data);
        }
    }

}

function ConvertNumberToList(number){
    let list = new SinglyList();
    let sNumber = number.toString();
    for(let i = 0; i < sNumber.length; i++) list.add(+sNumber.charAt(i));
    return list;
}

function SumLists(list1, list2){
    let resultList = new SinglyList();
    let isOverflow = false;
    if(list1._length === list2._length){
        for(let i = 1; i <= list1._length; i++){
            let bufferNode = list1.searchNodeAt(i).data + list2.searchNodeAt(i).data;
            if(isOverflow) {
                bufferNode++;
                isOverflow = false;
            }
            if(bufferNode >= 10){
                isOverflow = true;
                bufferNode = bufferNode - 10;
            }
            resultList.add(bufferNode);
        }
    }
    else
        console.log("error lists size");
    return resultList;
}

SumLists(ConvertNumberToList(243), ConvertNumberToList(564)).showList();

