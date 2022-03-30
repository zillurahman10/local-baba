// const fruits = [{ name: 'painapple' }, { name: 'mango' }, { name: 'papaya' }]

// const election = ['razzak', 'alomgir', 'jayed', 'jayed', 'jayed', 'nepun', 'jayed']
// const election2 = {
//     razzak : 1,
//     alomgir : 1, 
//     jasim : 1,
//     jayed : 4
// }


let pd = {};
const addToPd = (item) => {
    // three ways to add a property to an object
    // pd.alom = 1;
    // pd['alom'] = 1;
    // pd[item] = 1;
    const storedData = localStorage.getItem('checka-tracker')
    if (storedData) {
        db = JSON.parse(storedData)
    }

    if (item in pd) {
        pd[item] = pd[item] + 1;
    }
    else {
        pd[item] = 1;
    }

    localStorage.setItem('checka-tracker', JSON.stringify(pd))
}

const removeItem = item => {
    const storedData = localStorage.getItem('checka-tracker')
    if (storedData) {
        const storedObject = JSON.parse(storedData)
        delete storedObject[item]
        localStorage.setItem('checka-tracker', JSON.stringify(storedObject))
    }
}