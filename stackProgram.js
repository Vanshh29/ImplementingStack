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

    pop(){

        if(this.count==0) {
            console.log("Nothing to Pop");
        }
        else{
            let dcollection=this.collection[this.count-1];
            this.count=this.count-1;
            console.log(`${dcollection} removed`);
            return dcollection;
        }
        
    }
    
     peek(){

        console.log(`Stack's top piece is ${this.collection[this.count-1]}`)
        return this.collection[this.count-1]
         
     }
