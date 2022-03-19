const form = document.getElementById("form");
const textarea = document.getElementById("textarea");
const ul = document.getElementById("ul");
const button = document.getElementById("button");

const memos = JSON.parse(localStorage.getItem("memos"));

if(memos) {
    memos.forEach(memo => {
        add(memo);
    })
}

function add(memo) {
    let memoText = textarea.value;

    if(memo) {
        memoText = memo;
    }

    if(memoText) {
        const li = document.createElement("li");
        li.innerText = memoText;

        li.addEventListener("contextmenu", function
        (event) {
            event.preventDefault();
            li.remove();
            saveData();
        });

        ul.appendChild(li);
        textarea.value = "";
        saveData();
    }
}

function saveData() {
    const lists = document.querySelectorAll("li");
    let memos = [];
    lists.forEach(list => {
        memos.push(list.innerText);
    });
    localStorage.setItem("memos",JSON.stringify(memos));
}