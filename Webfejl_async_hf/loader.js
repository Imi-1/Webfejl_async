class Loader {
    constructor(service, manager) {
      const button = document.createElement('button');
      button.textContent = 'Adatok betöltése';
      document.body.appendChild(button);
  
      button.addEventListener('click', () => {
        service.getData().then(data => {
          manager.onData(data);
        });
      });
    }
}


const service = new Service(people);


const manager = new Manager();


const table = new Table(manager);


const loader = new Loader(service, manager);
  