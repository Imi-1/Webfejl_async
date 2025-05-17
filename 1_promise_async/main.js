const service = new Service()
const dataViewContorller = new DataViewContorller()

// Első hívás: helyes érték, sikeres Promise → renderData
service.realInit(1)
    .then((value) => {
        dataViewContorller.renderData(value);

        // Második hívás: hibás érték, Promise elutasítva → renderError
        return service.realInit(5);
    })
    .catch((error) => {
        dataViewContorller.renderError(error);
    });