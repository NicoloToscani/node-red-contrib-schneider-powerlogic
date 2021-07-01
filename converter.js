module.exports = function(RED) {
    function converterNode(config) {
        RED.nodes.createNode(this,config);
        this.name = config.name;
        this.unitId = config.unitId;
        this.data = config.data;
        var node = this;
        node.on('input', function(msg) {
        switch(msg.format) {
            case "float32":
                if(msg.model == "pm3000" || msg.model == "iem3000" || msg.model == "pm5000" ){
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
                if(msg.model == "pm3000" || msg.model == "iem3000" || msg.model == "pm5000" ){
                
                   msg.payload = msg.payload.buffer.readUInt32BE(0,4).toFixed(2);
                }
                node.send(msg);
            break;
            case "int64":
                if(msg.model == "pm3000" || msg.model == "iem3000" || msg.model == "pm5000" ){
                
                   msg.payload = msg.payload.buffer.readBigInt64BE(0);
                }
                node.send(msg);
            break;
            default:
                node.warn("Extractor not configured for this data format: (" + msg.format + ")." );
                node.send(msg);
        }
 
        });
    }
    RED.nodes.registerType("converter",converterNode);
}
