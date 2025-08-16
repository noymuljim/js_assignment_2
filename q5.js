function  resultReport( marks ) {
          if(Array.isArray(marks) !== true){
            return 'Invalid';
          }

          
let pass=0;
let fail=0;
let sum=0;

          for( const mark of marks){
            sum=sum+mark;
            

if(mark>=40){
    pass++
}

else{
    fail++
}

          }
        const count=marks.length;
          const finalScore=sum/count;
   let result={
    finalScore:finalScore,
    pass:pass,
    fail:fail
    
};


    
  return sum,result;
};

      



console.log(resultReport([]))