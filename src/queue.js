const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) 
	{
		if (maxSize != null)
		{
   			this.maxSize = maxSize;
  		} else {
   			this.maxSize = 30;
  		}
  		this.heap = new MaxHeap;
	}

	push(data, priority) 
	{
		this.heap.push(data, priority);
		if (this.maxSize != null) 
		{
			if (this.size() >= this.maxSize) 
			{
				throw "Error, out of heap capacity";
			}
		}
	}

	shift() 
	{

	}

	size() 
	{

	}

	isEmpty() 
	{
		
	}
}

module.exports = PriorityQueue;
