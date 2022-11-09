module.exports = function(RED) {
    function converterNode(config) {
        RED.nodes.createNode(this,config);
        this.name = config.name;
        this.unitId = config.unitId;
        this.data = config.data;
        var node = this;
        
        // Supported models
        const allowedModels = ["pm3000", "iem3000", "pm5000", "x63", "M250_M630", "f160_rope", "iOF+SD24", "OF+SD24", "iACT24", "iatl24", "rca-ic60-ti24", "refelx-ic60-ti24"]
        
        node.on('input', function(msg) {
        switch(msg.format) {
            case "float32":
                if(msg.model == "pm3000" || msg.model == "iem3000" || msg.model == "pm5000" || msg.model == "x63" || msg.model == "M250_M630" || msg.model == "f160_rope"){
                   msg.payload = msg.payload.buffer.readFloatBE(0,4).toFixed(2);
                } 
                
                if(msg.topic != "pFactorTot"){
                   node.send(msg);
                } 
                // Power Factor Total: convert powerfactor into 0 to 1 range
                else  if (msg.topic == "pFactorTot") {
                
                    var payConv = Number(msg.payload);
                    node.send(msg);
                    
                    // Quad 1
                    if(payConv >= 0 && payConv <= 1){
                        msg.payload = payConv.toFixed(2);
                        msg.util = {
                        loadType: "Inductive"
                        }
                        node.send(msg);
                     }
                    // Quad 2
                    if(payConv >= -1 && payConv <= 0){
                        msg.payload = payConv.toFixed(2);
                        msg.util = {
                        loadType: "Capacitive"
                        }
                        node.send(msg);
                     }
                    // Quad 3
                    if(payConv >= -2 && payConv <= -1){
                        payConv = (-2) -payconv;
                        msg.payload = payConv.toFixed(2);
                        msg.util = {
                        loadType: "Inductive"
                        }
                        node.send(msg);
                    }
                    // Quad 4
                    if(payConv >= 1 && payConv <= 2){
                        payConv = 2 - payConv;
                        msg.payload = payConv.toFixed(2);
                        msg.util = {
                        loadType: "Capacitive"
                        }
                      node.send(msg);
                    }
                 }    
            break;
            case "uint32":
                if(msg.model == "pm3000" || msg.model == "iem3000" || msg.model == "pm5000" || msg.model == "x63" || msg.model == "M250_M630" || msg.model == "f160_rope"|| msg.model == "iof+sd24" || msg.model == "of+sd24" || msg.model == "iact24" || msg.model == "iatl24" || msg.model == "rca-ic60-ti24" || msg.model == "refelx-ic60-ti24"){
                   
                   // To do

                   
                   if(msg.topic == "counters"){
                      
                      if(msg.model == "iof+sd24" || msg.model == "of+sd24" || msg.model == "rca-ic60-ti24" || msg.model == "refelx-ic60-ti24"){
                         // Number of circuit breaker opening/closing cycles
                         msg.circuitBreakerCycles = msg.payload.buffer.readUInt32BE(0,4);
                      
                         // Number of trippings
                         msg.numberOfTripping = msg.payload.buffer.readUInt32BE(4,4);
                      
                         // Load operating time (hours)
                         msg.loadTimes = msg.payload.buffer.readUInt32BE(8,4);
                      
                      }
                      
                      else if(msg.model == "iatl24"){
                      
                         // Number of impulse relayopening/closing cycles
                         msg.relayCycles = msg.payload.buffer.readUInt32BE(0,4);
                      
                         // Load operating time (hours)
                         msg.loadTimes = msg.payload.buffer.readUInt32BE(8,4);
                      
                      }
                      
                      else if(msg.model == "iact24"){
                      
                         // Number of contactor open/close cycles
                         msg.contactorCycles = msg.payload.buffer.readUInt32BE(0,4);
                      
                         // Load operating time (hours)
                         msg.loadTimes = msg.payload.buffer.readUInt32BE(8,4);
                      
                      }
                   
                   }
                   
                   // Not Smartlink case
                   else{
                   
                      msg.payload = msg.payload.buffer.readUInt32BE(0,4).toFixed(2);
                   
                   }
                }
                node.send(msg);
            break;
            case "int64":
                if(msg.model == "pm3000" || msg.model == "iem3000" || msg.model == "pm5000" || msg.model == "x63" || msg.model == "M250_M630" || msg.model == "f160_rope"){
                
                   msg.payload = msg.payload.buffer.readBigInt64BE(0);
                }
                node.send(msg);
            break;
            case "int16":
                if(msg.model == "pm3000" || msg.model == "iem3000" || msg.model == "pm5000" || msg.model == "x63" || msg.model == "M250_M630" || msg.model == "f160_rope"){
                
                   msg.payload = msg.payload.buffer.readInt16LE(0);
                }
                node.send(msg);
            break;
            case "bitmap":
                if(msg.model == "iof+sd24" || msg.model == "of+sd24" || msg.model == "iact24" || msg.model == "iatl24" || msg.model == "rca-ic60-ti24" || msg.model == "refelx-ic60-ti24"){
                
                // Smartlink status
                   if(msg.topic == "status"){
                   
                      // msg.payload = "";
                   
                      if(msg.model == "iof+sd24" || msg.model == "of+sd24" || msg.model == "rca-ic60-ti24"){
                      
                         // OF status
                         msg.payload.status = msg.payload.buffer.readInt16BE(0,2);
                         
                         // OF_bit = bit.charAt(0);
                         
                         if(msg.payload.status == 0){
                         
                            msg.payload.status_desc = "Trip";
                         
                         }
                         
                         else if(msg.payload.status == 2){
                         
                            msg.payload.status_desc = "Open";
                         
                         }
                         
                         else if(msg.payload.status == 3){
                         
                            msg.payload.status_desc = "Close";
                         
                         }
                         
                         
                      }
                      
                      else if(msg.model == "iact24" || msg.model == "iatl24"){

                         // OF status
                         msg.payload.status = msg.payload.buffer.readInt16BE(0,2);
                         
                         // OF_bit = bit.charAt(0);
                         
                         if(msg.payload.status == 0){
                         
                            msg.payload.status_desc = "Trip";
                         
                         }
                         
                         else if(msg.payload.status == 2){
                         
                            msg.payload.status_desc = "Open";
                         
                         }
                         
                         else if(msg.payload.status == 3){
                         
                            msg.payload.status_desc = "Close";
                         
                         }
                     
                      }
                      
                      else if(msg.model == "refelx-ic60-ti24"){
                         
                         // OF status
                         msg.payload.status = msg.payload.buffer.readInt16BE(0,2);
                         
                         // OF_bit = bit.charAt(0);
                         
                         if(msg.payload.status == 0){
                         
                            msg.payload.status_desc = "Trip";
                         
                         }
                         
                         else if(msg.payload.status == 2){
                         
                            msg.payload.status_desc = "Open";
                         
                         }
                         
                         else if(msg.payload.status == 3){
                         
                            msg.payload.status_desc = "Close";
                         
                         }           
                      
                      }
                             
                   }
                                                  
                   else if(msg.topic == "commands"){
                   
                      if(msg.model == "iact24"){
                      
                         
                      }
                      
                      else if(msg.model == "iatl24"){
                      
                         
                      }
                      
                      else if(msg.model == "rca-ic60-ti24"){
                      
                         
                      }
                      
                      else if(msg.model == "rca-ic60-ti24"){
                      
                         
                      }
                   
                   }
                
                }
                node.send(msg);
            break;
            default:
                node.warn("Converter not configured for this data format: (" + msg.format + ")." );
                node.send(msg);
        }
 
        });
    }
    RED.nodes.registerType("converter",converterNode);
}
