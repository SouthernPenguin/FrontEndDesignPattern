class DataIterator {
  private data: number[];
  private index = 0;

  constructor(container: DataContainer) {
    this.data = container.data;
  }

  next(): number | null {
    if (this.hasNext()) {
      return this.data[this.index++];
    }
    return null;
  }

  hasNext(): boolean {
    return this.index >= this.data.length ? false : true;
  }
}

class DataContainer {
  data = [1, 2, 3, 4, 5, 6];
  getIterator() {
    return new DataIterator(this);
  }
}

const container = new DataContainer();

const iterator = container.getIterator();

while (iterator.hasNext()) {
  const num = iterator.next();
  console.log(num);
}
