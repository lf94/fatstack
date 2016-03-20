'use strict';

class FatStack {
  constructor(initial) {
    this.result = initial;
  }
  
  push(data) {
    this.result = (this.result * 256) + data;
  }
  
  pop() {
    return this.result / 256;
  }
  
  peek() {
    return this.result % 256;
  }
}
