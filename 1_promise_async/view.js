class DataViewContorller{
    #div
    constructor(){
        const div = document.createElement("div")
        this.#div=div
        document.body.appendChild(div)
        this.#div.textContent = "Töltés"
    }

    renderData(array){
        this.#div.innerHTML="";
        for (const i of array){
            const div = document.createElement("div")
            div.textContent= [i.name, i.age, i.sex]
            this.#div.appendChild(div)
        }
    }

    renderError(errorMessage) {
        this.#div.textContent = errorMessage; // A fő div szövegét beállítjuk hibaüzenetre
    }
}