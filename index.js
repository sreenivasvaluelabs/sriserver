//Node js was created to give us the posibility of running javascript on the server which means that we can understand the request make from the browser on our server
//using javascript  so once we have node js installed we can able to respond to this request fronm the browser using javascript programing language

// NOde js easy of the possiblity of creating serve as one in java script on teh server to respond to request from the browser 
 //http package
const path= require('path') 
const express= require('express')
const app= express()
app.use(express.static('public'))
app.get('/',(request,response)=>{
	// response.json({
		// name:'tamil'
	// })
	
	response.sendFile(path.resolve(__dirname,'index.html'))
})
app.listen(3000,()=>{
	console.log('App is listing')
})



// const http =require('http')
// const fs= require('fs')
// const homePage = fs.readFileSync('index.html')
// // const homePage = fs.readFile('index.html',(file)=>{
	
// // })

// const server = http.createServer((request, response)=>{
	// console.log(request.url)
	// //response.end('Hello Srini')
	// response.end(homePage)
// })
// server.listen(3000)