let arr = [1, 2, 3];


// SetIndexOfArr()
// PrintIndexOfArr(SetIndexOfArr)


// function SetIndexOfArr(){
//     setTimeout(()=>{
//         arr.push(4)
//     },4000)
// }

// function PrintIndexOfArr(){
//     setTimeout(()=>{
//         arr.forEach(i=>{
//             console.log(i);
//         })
//     },2000)
// }

// function SetIndexOfArr(){
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             arr.push(4)

//             let isError=false;
//             if(!isError){
//                 resolve()
//             }else{
//                 reject("Some problem exist...")
//             }
//         },4000)
//     })
//     return promise;
// }

// let p=SetIndexOfArr()


// let p1=new Promise(function(resolve, reject) {

//      resolve(1)

//   }).then(function(result) { 
//     return result * 2;

//   }).then(function(result) { 
//     return result * 2;

//   }).then(function(result) {
//     return result * 2;
//   });

//   let p2=Promise.resolve("P2")

//   Promise.all([p,p1,p2]).then(res=>{
//       console.log(res);
//   })


//XmlHttpRequest,Ajax,Fetch
// let parentPost=document.getElementById("parentPost")
// fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(response => {
//     response.forEach(post => {

//             let p = `<div class="col-4 mt-2">
//             <div class="card" style="width: 18rem;">
//                 <div class="card-body">
//                   <h5 class="card-title">UserId: ${post["userId"]}</h5>
//                   <h6 class="card-subtitle mb-2 text-muted">Post Id: ${post["id"]}</h6>
//                   <p class="card-text">Title: ${post["title"]}</p>
//                 </div>
//               </div>
//             </div>`
//             parentPost.innerHTML+=p;
//     });
// }).catch(e => {
//     console.log(e);
// })

// async function GetPost(){
//     let res=await fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res)
//     let data=await res.json();
//     console.log(data);
// }

// GetPost();
