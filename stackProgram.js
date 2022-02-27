class StackProgram{

    constructor(){
        this.collection=[];
        this.count=0;
        this.count_limit=15;
    }
 push (stack_collection){

        if(this.count>this.count_limit){
            console.log("Count Limit of Stack Exceeded");
        }
