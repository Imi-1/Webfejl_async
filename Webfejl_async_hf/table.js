class Table {
    constructor(manager) {
      this.container = document.createElement('div');
      document.body.appendChild(this.container);
  
      manager.callback = (dataArray) => {
        this.container.innerHTML = '';
        dataArray.forEach(person => {
          const personDiv = document.createElement('div');
          personDiv.textContent = `${person.name} (${person.age}) rendelkezik egy ${person.car.color} színű ${person.car.type} típusú autóval.`;
          this.container.appendChild(personDiv);
        });
      };
    }
}