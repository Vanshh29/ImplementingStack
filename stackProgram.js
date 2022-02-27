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
const stack = new StackProgram();
stack.push(2);
stack.push(3);
stack.push(5);
stack.push(7);
stack.push(9);
stack.push(11);
stack.push(13);
stack.push(15);
stack.push(17);
stack.push(19);
stack.push(20);
stack.push(22);
stack.push(24);
stack.push(26);
stack.push(28);
stack.push(30);
stack.push(32);
stack.push(34);
stack.pop();
stack.peek();
stack.push(100);
stack.peek();
stack.push(50);
