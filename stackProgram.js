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
         else{

        this.collection[this.count]=stack_collection;
            console.log(`${stack_collection} added to ${this.count}`);
            this.count=this.count+1;
        
            return this.count-1;
        }
    }
