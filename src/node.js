class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
			if (this.left == null) 
				{
					node.parent = this;
					this.left = node;	
				} else if (this.right == null) 
				{ 
					node.parent = this;
					this.right = node;
				}
		}
	

	removeChild(node) {
		if (node == this.left) 
		{
			this.left = null;
			node.parent = null;

			
		} else if (node == this.right) 
		{
			this.right = null;
			node.parent = null;
			
		} else {
			throw "Error, passed node is not a child of this node";
		}

	}

	remove() {
		if (this.parent != null)
		{
			this.parent.removeChild(this);
		}

	}

	swapWithParent() {
		if (this.parent != null) 
		{
			let pp = this.parent.parent;
			this.parent.parent = this;
			this.parent = pp;
		}
	}
}

module.exports = Node;
