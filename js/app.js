import { valida } from "./validacao.js";

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    if(input.dataset.tipo === 'preco') {
        SimpleMaskMoney.setMask(input, {
            prefix: 'R$',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        })
    }
    
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})

/*
 document.addEventListener('invalid', (function(){
      return function(e){
          //prevent the browser from showing default error bubble/ hint
          e.preventDefault();
          // optionally fire off some custom validation handler
          // myvalidationfunction();
      };
  })(), true);
  */
