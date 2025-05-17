class Manager {
    constructor() {
      this.callback = null;
    }
  
    onData(data) {
      if (this.callback) {
        this.callback(data);
      }
    }
}
  