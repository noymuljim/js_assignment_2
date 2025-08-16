function  onlyCharacter( str ) {
          if(typeof str !=='string'){
            return "Invalid"
          }


        let message='';

          for( const c of str){
            if( c!== ' '){
                message=message+c.toUpperCase();
            }
          }
          return message;
}
//console.log(onlyCharacter(["hack", "me"]));