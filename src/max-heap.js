const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {

		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		if (this.root == null)
			{
				this.root = node;
				this.parentNodes.push(node);
			} else {
				this.parentNodes[0].appendChild(node);
				this.parentNodes.push(node);
				if (this.parentNodes[0].left != null & this.parentNodes[0].right != null) 
			{
				this.parentNodes.shift();
			}
		}	
	}
	

	shiftNodeUp(node) {
		if (node.parent == null)
		{
			this.root = node;
		}
		else if ((node != null) && (node.parent != null) && (node.priority > node.parent.priority)) 
		{
			node.swapWithParent();
			if ((node.parent != null) && (node == node.parent.left)) 
		{
			this.parentNodes.pop();
			let poppedNode = this.parentNodes.pop();
			this.parentNodes.unshift(poppedNode);
			this.parentNodes.unshift(node.parent.parent);
		} 
		else if ((node.parent != null) && (node == node.parent.right))  
		{
			this.parentNodes.pop();
			this.parentNodes.push(node.parent);
		}
			this.shiftNodeUp(node);
		} 
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
