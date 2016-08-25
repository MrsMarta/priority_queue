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
				try 
				{
  					throw new Error('Out of queue capacity');
				} catch (e) 
				{
  					alert(e.name + ': ' + e.message);
				}
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
