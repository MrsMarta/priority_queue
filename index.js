const MaxHeap = require('./src/max-heap');
const Node = require('./src/node');

const parentOfParent = new Node(100, 500);
const parent = new Node(15, 42);
const child = new Node(42, 15);

parentOfParent.appendChild(parent);
parent.appendChild(child);
child.swapWithParent();

let e1 = child.parent;
let e2 = parentOfParent;
//expect(child.parent).to.equal(parentOfParent);
