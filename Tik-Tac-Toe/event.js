let btn1=document.querySelector("#btn1")

// btn1.onclick = ()=>{
//     console.log("Button 1 clicked");
//     let a=25;
//     a++;
//     console.log(a);
// }

let div1=document.querySelector("#div1")

// div1.onmouseover =()=>{
//     console.log("Mouse over div1");
// }

btn1.addEventListener("click",()=>{
    alert("hii");
    console.log("Button 1 clicked");
})

div1.addEventListener("mouseover",()=>{
    console.log("Mouse over div1");
})