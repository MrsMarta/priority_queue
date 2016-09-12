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
		if (this.root != null)
		{
			return this.root.data;
		}
	}

	detachRoot() {
		let rootIndex = this.parentNodes.indexOf(this.root);
		let root = this.root;
		if (rootIndex != -1)
		{
			this.parentNodes.splice(rootIndex, 1);
		}
		this.root = null;
		return root;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
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
			//node.swapWithParent();
			let indexOfNode = this.parentNodes.indexOf(node);
			let indexOfNodeParent = this.parentNodes.indexOf(node.parent);
			if ((indexOfNode != -1) && (indexOfNodeParent != -1))
			{
				this.parentNodes[indexOfNode] = node.parent;
				this.parentNodes[indexOfNodeParent] = node;
			} else if ((indexOfNodeParent == -1) && (indexOfNode != -1))
			{
				this.parentNodes[indexOfNode] = node.parent;
			}
			node.swapWithParent();
			this.shiftNodeUp(node);
		} 
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
