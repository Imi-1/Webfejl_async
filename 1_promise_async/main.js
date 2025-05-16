const service = new Service()
const dataViewContorller = new DataViewContorller()

service.init().then((value)=>{
    dataViewContorller.renderData(value)
})