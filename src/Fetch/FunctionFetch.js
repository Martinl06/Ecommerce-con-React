export const functionFetch = (products) => {  
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products)
        }, 2000)
    })
}



  