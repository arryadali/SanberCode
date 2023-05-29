const myCountPromise = (angka) => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            if (angka === 2) {
                jum = angka * 2
                resolve(jum)
            } else {
                reject("Maaf tidak ada nilai dalam parameter")
            }
        }, 2000)
    })
}

myCountPromise(2)
 .then((result) => {
    console.log(result)
 })
.catch((error) => {
    console.log(error)
})