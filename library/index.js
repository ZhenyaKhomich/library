console.log('1.Вёрстка валидная  +10;\n2.Вёрстка семантическая +16;\n3.Вёрстка соответствует макету +54\n4.Общие требования к верстке +20');

const quarterOf = (1 <= month <= 12) => {
    let cvartal;
      if(1 <= month <= 3) {
       cvartal = 1; 
      return cvartal;
      } else if( 4 <= month <= 6) {
       cvartal = 2;
       return cvartal;
      } else if( 7 <= month <= 9) {
       cvartal = 3;
       return cvartal;
      } else 
      {cvartal = 4;
       return cvartal;}
    }
    quarterOf(9);