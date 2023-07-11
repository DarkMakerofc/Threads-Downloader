const { Download } = require('./index.ts')


async function tes(){
Download('https://www.threads.net/t/Cujx6ryoYx6/?igshid=NTc4MTIwNjQ2YQ==').then((result) => {
console.log(result)
})
  .catch((error) => {
console.log(error)
}) 

} 
tes()