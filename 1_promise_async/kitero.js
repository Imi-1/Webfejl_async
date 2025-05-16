function buyApple(num){
    if (num < 5){
        return Promise.resolve(`van ennyi alma ${num}`)
    }
    else{
        return Promise.reject("nincs ennyi alma")
    }
}

const almaIgeret = buyApple(4)
console.log(almaIgeret)


almaIgeret.then(value => {
    console.log(value)
})

console.log(almaIgeret)

const almaIgeretsok = buyApple(6)

almaIgeretsok.catch(error => {
    console.log(error)
})

buyApple(4).then(value => {
    console.log(value)
})
.catch(error => {
    console.log(error)
})


function buyApple2(num){
    return new Promise((resolve, reject) =>{

    if (num < 5){
         resolve(`van ennyi alma ${num}`)
    }
    else{
         reject("nincs ennyi alma")
    }
})
}

buyApple2(6).then(value => {
    console.log(value)
})
.catch(error => {
    console.log(error)
})


function buyApple3(num){
    return new Promise((resolve, reject) =>{

    if (num < 5){

         setTimeout(() => {
            resolve(`van ennyi alma ${num}`)
         },1000)
    }
    else{
        setTimeout(() => {
            reject("nincs ennyi alma")
         },1000)
    }

})
}

buyApple3(4).then(value => {
    console.log(value)
})
.catch(error => {
    console.log(error)
})