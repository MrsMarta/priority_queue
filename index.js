const MaxHeap = require('./src/max-heap');
const Node = require('./src/node');
const root = new Node(15, 42);
const left = new Node(42, 15);
const right = new Node(13, 42);
const childOfLeft = new Node(13, 34);
const childOfRight = new Node(0, 1);

root.appendChild(left);
root.appendChild(right);
left.appendChild(childOfLeft);
right.appendChild(childOfRight);

childOfLeft.swapWithParent();
childOfRight.swapWithParent();
let e1 = root.left;
let e2 = childOfLeft;
let e3 = root.right;
let e4 = childOfRight;
//expect(root.left).to.equal(childOfLeft);
//expect(root.right).to.equal(childOfRight);
