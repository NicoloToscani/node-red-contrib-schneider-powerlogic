module.exports = function(RED) {
    function iem3000Node(config) {
        RED.nodes.createNode(this,config);
        this.name = config.name;
        this.unitId = config.unitId;
        this.data = config.data;
        var node = this;
        node.on('input', function(msg) {
            var p=msg.payload;
            let settings = {
             name: p.name || node.name || "",
             unitId: p.unitId || node.unitId,
             data: p.data || node.data,
            };
            var res = {};
            switch(settings.data){
              case 0:
              case "current-P1":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2999,
                    quantity: 2,
                    };
                res.topic = "current-P1";
                res.format = "float32";
                res.model = "iem3000";
                res.unit = "A";
              break;
              case 1:
              case "current-P2":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3001,
                    quantity: 2,
                    };
                res.topic = "current-P2";
                res.format = "float32";
                res.model = "iem3000";
                res.unit = "A";
              break;
              case 2:
              case "current-P3":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3003,
                    quantity: 2,
                    };
                res.topic = "current-P3";
                res.format = "float32";
                res.model = "iem3000";
                res.unit = "A";
              break;
              case 3:
              case "current-avg":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3009,
                    quantity: 2,
                    };
                res.topic = "current-avg";
                res.format = "float32";
                res.model = "iem3000";
                res.unit = "A";
              break;
              case 4:
              case "voltage-L1L2":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3019,
                    quantity: 4,
                    };
                res.topic = "voltage-L1L2";
                res.format = "float32";
                res.model = "iem3000";
                res.unit = "V";
              break;
              case 6:
              case "voltage-L2L3":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3021,
                    quantity: 4,
                    };
                res.topic = "voltage-L3L3";
                res.format = "float32";
                res.model = "iem3000";
                res.unit = "V";
              break;
              case 6:
              case "voltage-L3L1":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3023,
                    quantity: 4,
                    };
                res.topic = "voltage-L3L1";
                res.format = "float32";
                res.model = "iem3000";
                res.unit = "V";
              break;
              case 7:
              case "voltage-LL-Avg":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3025,
                    quantity: 4,
                    };
                res.topic = "voltage-LL-Avg";
                res.format = "float32";
                res.model = "iem3000";
                res.unit = "V";
              break;
              case 8:
              case "voltage-L1N":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3027,
                    quantity: 4,
                    };
                res.topic = "voltage-L1N";
                res.format = "float32";
                res.model  = "iem3000";
                res.unit = "V";
              break;
              case 9:
              case "voltage-L2N":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3029,
                    quantity: 4,
                    };
                res.topic = "voltage-L2N";
                res.format = "float32";
                res.model = "iem3000";
                res.unit = "V";
              break;
              case 10:
              case "voltage-L3N":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3031,
                    quantity: 4,
                    };
                res.topic = "voltage-L3N";
                res.format = "float32";
                res.model = "iem3000";
                res.unit = "V";
              break;
              case 11:
              case "voltage-LN-avg":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3035,
                    quantity: 4,
                    };
                res.topic = "voltage-LN-avg";
                res.format = "float32";
                res.model = "iem3000";
                res.unit = "V";
              break;
              case 12:
              case "actPowerP1":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3053,
                    quantity: 4,
                    };
                res.topic = "actPowerP1";
                res.format = "float32";
                res.model = "iem3000";
                res.unit = "kW";
              break;
              case 13:
              case "actPowerP2":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3055,
                    quantity: 4,
                    };
                res.topic = "actPowerP2";
                res.format = "float32";
                res.model = "iem3000";
                res.unit = "kW";
              break;
              case 14:
              case "actPowerP3":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3057,
                    quantity: 4,
                    };
                res.topic = "actPowerP3";
                res.format = "float32";
                res.model = "iem3000";
                res.unit = "kW";
              break;
              case 15:
                case "actPowerTot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3059,
                      quantity: 4,
                      };
                  res.topic = "actPowerTot";
                  res.format = "float32";
                  res.model = "iem3000";
                  res.unit = "";
                break;
              case 16:
              case "pFactorTot":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3083,
                    quantity: 4,
                    };
                res.topic = "pFactorTot";
                res.format = "float32";
                res.model = "iem3000";
                res.unit = "kW";
              break;
              case 17:
                case "frequency":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3109,
                      quantity: 4,
                      };
                  res.topic = "frequency";
                  res.format = "float32";
                  res.model = "iem3000";
                  res.unit = "Hz";
                break;
                case 18:
                case "toEnergyActImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3203,
                      quantity: 4,
                      };
                  res.topic = "toEnergyActImp";
                  res.format = "int64";
                  res.model = "iem3000";
                  res.unit = "Wh";
                break;    
            }
            
            node.send(res);
        });
    }
    RED.nodes.registerType("iem3000",iem3000Node);
}
