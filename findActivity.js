const url="http://universities.hipolabs.com/search?name=";
// let country="nepal";

let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
 let country=document.querySelector("input").value;
 console.log(country);
 let clg=await findCollege(country);
 show(clg);
});

function show(clg){
    let list=document.querySelector("#list");
    list.innerText="";
    for(clgs of clg){
        console.log(clgs.name);
        let li=document.createElement("li");
        li.innerText=clgs.name;
        list.appendChild(li);
    }

}

async function findCollege(country){
    try{
        let res=await axios.get(url+country);
        return res.data;
    }
    catch(e){
        return [];
    }
}




