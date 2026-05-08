enum Direction {
    Up,
    Down,
    Left,
    Right
}

function movement(keyPressed:Direction){
    if(keyPressed==Direction.Right){
        console.log("movement done to the right");
    }
}

movement(Direction.Right);