class Service {
    constructor(data) {
      this.data = data;
    }
  
    getData() {
      return Promise.resolve(this.data);
    }
} 