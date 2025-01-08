


window.onload=function(){
    
    StartGame();
         
   
 // document.addEventListener("mousemove",e=>{MouseMove(e)})
 
 }


function StartGame(){
const startDialog=document.querySelector(".start");

    startDialog.showModal();
    const SubmitButton=document.querySelector(".close");
    SubmitButton.addEventListener("click",(e)=>{
        
        e.preventDefault();
    const name=document.querySelector("#player").value;
    document.getElementById("name").textContent=name;

    setBoard();
        
        startDialog.close();
        
    })
    

}








function setBoard(){
    
    for(let i=0;i<9;i++){
        tile=document.createElement("div");
        tile.id=i.toString()
        tile.addEventListener("click",SelectTile)
        document.getElementById("board").appendChild(tile)

    }
   
    
    setInterval(SetMole,3000)
   setInterval(SetPlant,2000)

}
function Game(){}

let currentMoleTile;
let currentPlantTile;

let score=0;
let gameOver=false;

function RandomTile(){
    let num= Math.floor(Math.random() * 9)
    return num.toString();
}

function SetMole(){
    if(gameOver){
        return;
    }
    if(currentMoleTile){
        currentMoleTile.innerHTML="";
    }
   
    let mole=document.createElement("img");
    mole.src="assets/monty-mole.png"
    
    let num
    do {
        num = RandomTile();
    } while (currentPlantTile && currentPlantTile.id == num);
    
    currentMoleTile=document.getElementById(num);
    currentMoleTile.appendChild(mole)
}


function SetPlant(){
    if(gameOver){
        return
    }

    if(currentPlantTile){
        currentPlantTile.innerHTML=""
    }
   
    
    
    let plant=document.createElement("img");
    plant.src="assets/piranha-plant.png"


    let num;
    do {
        num = RandomTile();
    } while (currentMoleTile && currentMoleTile.id == num);
    currentPlantTile=document.getElementById(num);
    currentPlantTile.appendChild(plant)


}

function SelectTile(){
    if (gameOver) {
        return;
    }
    
    if(this == currentMoleTile){
        score+=10;

        document.getElementById("score").innerText=score.toString();
        console.log(score)
    }
    else if(this==currentPlantTile){
        document.getElementById("score").innerText="GameOver:"+score.toString();

        gameOver=true
    }
}


function MouseMove(event){
    const cursor=document.querySelector(".cursor");
    cursor.setAttribute("style","top:"+(event.pageY-30)+"px; left:"+(event.pageX-30)+"px;")

}

