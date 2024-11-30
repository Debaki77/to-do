function add_item(){
    let listitem= document.getElementById("list_item");
    if(item.value!=""){
        let make_li=document.createElement("li");
        make_li.appendChild(document.createTextNode(item.value));
        list_item.appendChild(make_li);
        item.value=""
        make_li.onclick=function(){
            this.parentNode.removeChild(this);
        }
    }
    else{

        alert("please add a value to item");
    }
}   let item= document.getElementById("box");
 