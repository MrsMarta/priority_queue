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
					this.left = node;
					node.parent = this;	
				} else if (this.right == null) 
				{ 
					this.right = node;
					node.parent = this;
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
			let p = this.parent;
			let r = this.right;
			let l = this.left;
			
			this.parent.parent = this;
			this.parent = pp;
			if (p.right != null && p.right == this) 
			{
				p.left.parent = this;
			} else if (p.left != null && p.left == this ) { 
				p.right.parent = this; 
			}

		}
	}
}

module.exports = Node;
