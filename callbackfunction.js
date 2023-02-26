function callback(name,age,task){
    console.log("Hello", name);
    console.log("age is", age);
    task();
}

function washHand(){
    console.log("Please wash your hand");

}
function takeShower(){
    console.log("please take shower ");
}
callback('Sogir', 22, washHand );
callback('Jogir', 25, takeShower);
callback('mogir', 30, washHand);
