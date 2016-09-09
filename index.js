const MaxHeap = require('./src/max-heap');
const Node = require('./src/node');
h = new MaxHeap();

h.root = new Node(0, 10);
h.root.appendChild(new Node(1, 5));
h.root.appendChild(new Node(2, 7));
h.root.left.appendChild(new Node(3, 20));
h.parentNodes = [
				h.root.left,
				h.root.right,
				h.root.left.left,
			];
const correctParentNodesOrderAfterShiftUp = [
				h.root,
				h.root.right,
				h.root.left
			];

h.shiftNodeUp(h.root.left.left);

let n = h.parentNodes[0];
let n1 = h.parentNodes[1];
let n3 = h.parentNodes[2];
let a = correctParentNodesOrderAfterShiftUp[0];
let a1 = correctParentNodesOrderAfterShiftUp[1];
let a3 = correctParentNodesOrderAfterShiftUp[2];
//expect(h.parentNodes[0]).to.equal(correctParentNodesOrderAfterShiftUp[0]);
//expect(h.parentNodes[1]).to.equal(correctParentNodesOrderAfterShiftUp[1]);
//expect(h.parentNodes[2]).to.equal(correctParentNodesOrderAfterShiftUp[2]);
//expect(root.left).to.equal(childOfLeft);
//expect(root.right).to.equal(childOfRight);
