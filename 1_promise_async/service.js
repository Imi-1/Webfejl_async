class Service{
    #data

    constructor(){
        this.#data=people
    }

    init(){
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve(this.#data)
            }, 3000);
        })

    }

     initInvalid() {
        return new Promise((_, reject) => { // Csak a reject ágat használjuk, ezért az első paraméter "_"
            setTimeout(() => {
                reject("Hiba: az inicializálás érvénytelen."); // 3 másodperc után hibát dobunk
            }, 3000); // A hiba késleltetve történik
        });
    }

    realInit(num) {
        return new Promise((resolve, reject) => {
            if (num < 2) {
                // Sikeres eset
                setTimeout(() => {
                    resolve("Sikeres inicializálás");
                }, 3000);
            } else {
                // Hibás eset
                setTimeout(() => {
                    reject(`Hiba: a megadott szám túl nagy (${num})`);
                }, 3000);
            }
        });
    }
}