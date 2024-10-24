
let boxes = document.querySelectorAll(".box");
console.log(boxes);

let resetbtn = document.querySelector(".reset_btn");
let newgamebtn = document.querySelector(".newgame_btn");

let turnO = true; // turn of  O is true or false  here it is true 
let count = 0;
let winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
//  console.log(winpatterns)
// adding event listners for boxex 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log(" box is clicked ");
        if (turnO === true) {
            box.innerHTML = 'O';
            turnO = false;
        }
        else {
            box.innerHTML = 'X';
            turnO = true;
        }
        box.disabled = true;
        count=count+1;
        checkWinner();
    });

}
);

// function to make disabled all the boxes after getting winner 

const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
// function to make disabled boxes  to again inable  

const enabledboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
};
// function to check the winner 

const checkWinner = () => {
    for (let pattern of winpatterns) {
        // printing all sub array of win patterns array 
        console.log(pattern[0], pattern[1], pattern[2]);

        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                // console.log(" YOU ARE THE WINNER  " , val1);
                document.querySelector(".winner").innerText = ` THE WINNER IS : ${val1}`;
                disabledboxes();
            }
        }
        if (count>=9)
        {
            document.querySelector(".winner").innerText = ` DRAW : play again to win the game `;

        }
    }
};

// functions for buttons clicks   of reset game  and new game 

resetbtn.addEventListener("click",()=>{
    turnO=true;
    count=0;
    enabledboxes();
    document.querySelector(".winner").innerText = "";
})
newgamebtn.addEventListener("click",()=>{
    turnO=true;
    count=0;
    enabledboxes();
    document.querySelector(".winner").innerText = "";
})