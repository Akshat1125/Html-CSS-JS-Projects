//game constants
let direction = { x: 0, y: 0 };
let speed = 4;
let lastPtime = 0;
let score=0;
let snakeArr = [{x: 13, y: 14}]
let food = { x: 5, y: 6 };
const scoreBox=document.querySelector(".score");
const gameBox = document.querySelector('.gamebox');





//game functions
const game = (ctime) => {
    window.requestAnimationFrame(game);
    if ((ctime - lastPtime) / 1000 < 1 / speed) return;
    lastPtime = ctime;
    // console.log(ctime)
    gEngine();
}
const Collide=(sarr)=>{
    for (let i = 1; i < sarr.length; i++) {
        if(sarr[i].x===sarr[0].x && sarr[i].y===sarr[0].y){
            return true;
        }
    }
        if(sarr[0].x>35 || sarr[0].x<0 || sarr[0].y>20||sarr[0].y<0){
            return true;
        }

}
const gEngine = () => {
    // part 1: Updating Snake and food
    if(Collide(snakeArr)){
     direction={x:0,y:0}
     alert('game over')
     snakeArr=[{x:13,y:14}];
     score=0;
    scoreBox.innerText="Score: "+score;
    }
//if u eaten the food rray increase
if(snakeArr[0].y===food.y&&snakeArr[0].x===food.x){
    snakeArr.push({x:snakeArr[0].x+direction.x,y:snakeArr[0].y+direction.y})
    let a=2,b=32,c=18;
    food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(c-a)*Math.random())}
    score+=5;
     scoreBox.innerText="Score: "+score;
}
//moving the snake
for(let i=snakeArr.length-2;i>=0;i--){
    snakeArr[i+1]={...snakeArr[i]}
}
snakeArr[0].x+=direction.x;
snakeArr[0].y+=direction.y;

    //part2: display snake and food
    gameBox.innerText = "";
    snakeArr.forEach((e, index) => {
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index===0){
            snakeElement.classList.add("head")
            //  snakeElement.style.borderRadius = "10px 10px 0px 0px";
        }
    //     else if(index===snakeArr.length-1){
    //     snakeElement.classList.add("snake")
    //     snakeElement.style.borderRadius = "0px 0px 10px 10px";
    // }
            else
        snakeElement.classList.add("snake")
        gameBox.appendChild(snakeElement);
    })
    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food")
    gameBox.appendChild(foodElement);
}












//game logic start
window.requestAnimationFrame(game);
window.addEventListener('keydown', e => {
    direction = { x: 0, y: 1 }
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp")
            direction.x =0;
            direction.y =-1;
            snakeElement.style.borderRadius="10px 10px 0px 0px";
            snakeArr[snakeArr.length-1].style.borderRadius="0px 0px 10px 10px";
            break;
        case "ArrowDown":
            console.log("ArrowDown")
            direction.x =0;
            direction.y =1;
            break;
        case "ArrowRight":
            console.log("ArrowRight")
            direction.x =1;
            direction.y =0;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft")
            direction.x =-1;
            direction.y =0;
            break;
    }
})