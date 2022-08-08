// // const body=document.getElementsByTagName("body");
// // const mainpart=document.getElementById("mainpart");
// // const asidepart=document.createElement("horizontal");
// // body.insertbefore
 const main=document.getElementsByClassName("mainpart");
 console.log(main);


const lang=document.getElementsByClassName("languages");
console.log(lang);
const lan=Array.from(lang);
  console.log(lan);


  lan.map((item)=>item.firstElementChild.addEventListener("click",e=>{e.target.nextElementSibling.classList.toggle("hide");
  // console.log(e.target.nextElementSibling);
}))
const body=document.getElementsByTagName("body")[0];
 console.log(body);

 const horizontalside=document.createElement("div");
horizontalside.classList.add("horizontalside");

body.insertBefore(horizontalside,body.children[0]);
 console.log(body);




 const upWord=document.createElement("p");
 upWord.classList.add("upWord");
 body.insertBefore(upWord,horizontalside);
 console.log(upWord);


 const btn=document.createElement("button");
  btn.classList.add("button");
  btn.innerText="click";
  body.insertBefore(btn,body.children[0]);
 btn.addEventListener("click",e=>{
horizontalside.classList.toggle("cover");
upWord.classList.toggle("down");
console.log("heloo");
console.log(upWord);
})

const song=document.getElementById("myBtn");

const video=document.getElementById("video");

song.addEventListener("click",e=>{e.target.innerText="song";
e.target.style.backgroundColor="yellow";
 e.target.style.color="red";
 video.classList.toggle("showvideo");})






// horizontalside.classList.add("horizontalside");
//  const mybtn=document.createElement("button");
//  mybtn.classList.add("button");
//  mybtn.innerText="click"
//  body.insertBefore(mybtn,body,children[0]);






     



