const form = document.getElementById("form");
const textarea = document.getElementById("textarea");
const ul = document.getElementById("ul");
const button = document.getElementById("button");


button.addEventListener("click",add());




function add(memo) {
    let memoText = textarea.value;

//     if(memo) {
//         memoText = memo.text;
//     }

    if(memoText) {
        const li = document.createElement("li");
        li.innerText = memoText;
        ul.appendChild(li);
        textarea.value = "";
    }

}
