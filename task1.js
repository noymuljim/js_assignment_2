function totalFine( fare ) {
         
          if(typeof fare !== 'number' || fare <=0){
            return 'Invalid'
          }
          else{
       const extra= fare+ fare*( 20 / 100) + 30 
           return extra
          }
         
}
const x= totalFine(0)
console.log(x)
