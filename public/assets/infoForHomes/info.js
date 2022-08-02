
// Client side js and how the info will
// be displayed when each home is clicked

// listens for a 'click' on any <a> in the index.html file 
// Once clicked the getFetch file will trigger
// document.querySelector('article').addEventListener('click', getFetch)

// async function getFetch(){
//     const homeName = document.querySelector('a').value 

//     try{

//         const response = await fetch(`https://bronx-dementia-homes.herokuapp.com/bainbridge`)
//         const data = await response.json()

//         console.log(data)

//         // displaying the name of the home from the api
//         // document.querySelector('h2').innerHTML = 'Name ' + data.name


//     }catch(error){
//         console.log(error)
//     }
    
// }