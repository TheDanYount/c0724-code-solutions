export type Node<T> = {
  data: T;
  priority: number;
};

export class PriorityQueue<T = unknown> {
  nodes: Node<T>[] = [];

  /**
   * Adds a value to the queue with given priority.
   * Higher priority values are dequeued first.
   * If priority already exists, last one in is dequeued first.
   */
  enqueue(item: T, priority: number): void {
    let insertHere = this.nodes.length;
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].priority <= priority) {
        insertHere = i;
        break;
      }
    }
    this.nodes.splice(insertHere, 0, { data: item, priority });
  }

  /**
   * Removes and returns highest priority value in the queue.
   * Returns `undefined` if queue is empty.
   */
  dequeue(): T | undefined {
    if (this.nodes.length > 0) {
      const removedNode = this.nodes.shift() as Node<T>;
      return removedNode.data;
    }
    return undefined;
  }

  /**
   * Returns highest priority value in the queue without removing it.
   * Returns `undefined` if queue is empty.
   */
  peek(): T | undefined {
    if (this.nodes.length > 0) {
      return this.nodes[0].data;
    }
    return undefined;
  }
}
