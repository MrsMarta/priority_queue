const MaxHeap = require('./src/max-heap');
const Node = require('./src/node');
h = new MaxHeap();

h.root = new Node(0, 3);
			h.root.appendChild(new Node(1, 20));
			h.root.appendChild(new Node(2, 7));
			h.root.left.appendChild(new Node(3, 5));

h.parentNodes = [
				h.root.left,
				h.root.right,
				h.root.left.left,
			];

h.shiftNodeDown(h.root);

let n = h.root; // = h.root.left
let n1 = h.root.left.left; // = h.root

const correctParentNodesOrderAfterShiftUp = [
				h.root.left.left,
				h.root.right,
				h.root
			];

let a = h.parentNodes[0];
let a1 = h.parentNodes[1];
let a2 = h.parentNodes[2];
