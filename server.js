'use strict';
var onoof = "1";
var HOST = location.origin.replace(/^http/, 'ws')
      var ws = new WebSocket('wss://socialotlo.herokuapp.com/');
      var el;
      ws.onopen = (event) => {
      console.log('conectado')
      };
      ws.onclose = () => {
        switch(onoof) {
           case '1': {  
        
          console.log('conexao perdida')
           setTimeout(
                 function() {
                          HOST = location.origin.replace(/^http/, 'ws')
                          ws = new WebSocket("wss://otloserver.herokuapp.com/");
                          
                     console.log(" a tentar reconectar...")
                     conetador();
                  }, 15000);
          } break;
        }
      }
      
      
  
      setTimeout(
        function() {
                
             ws.send(onoof) 
            console.log("conversando")
            conetador();
         }, 9000);