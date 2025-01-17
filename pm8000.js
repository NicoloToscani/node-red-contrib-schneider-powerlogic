module.exports = function(RED) {
    function pm8000Node(config) {
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
                res.model = "pm8000";
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
                res.model = "pm8000";
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
                res.model = "pm8000";
                res.unit = "A";
              break;
              case 3:
              case "current-In":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3005,
                    quantity: 2,
                    };
                res.topic = "current-In";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "A";
              break;
              case 4:
              case "current-avg":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3009,
                    quantity: 2,
                    };
                res.topic = "current-avg";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "A";
              break;
              case 5:
              case "voltage-L1L2":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3019,
                    quantity: 2,
                    };
                res.topic = "voltage-L1L2";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "V";
              break;
              case 6:
              case "voltage-L2L3":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3021,
                    quantity: 2,
                    };
                res.topic = "voltage-L3L3";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "V";
              break;
              case 7:
              case "voltage-L3L1":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3023,
                    quantity: 2,
                    };
                res.topic = "voltage-L3L1";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "V";
              break;
              case 8:
              case "voltage-LL-Avg":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3025,
                    quantity: 2,
                    };
                res.topic = "voltage-LL-Avg";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "V";
              break;
              case 9:
              case "voltage-L1N":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3027,
                    quantity: 2,
                    };
                res.topic = "voltage-L1N";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "V";
              break;
              case 10:
              case "voltage-L2N":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3029,
                    quantity: 2,
                    };
                res.topic = "voltage-L2N";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "V";
              break;
              case 11:
              case "voltage-L3N":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3031,
                    quantity: 2,
                    };
                res.topic = "voltage-L3N";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "V";
              break;
              case 12:
              case "voltage-LN-avg":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3035,
                    quantity: 2,
                    };
                res.topic = "voltage-LN-avg";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "V";
              break;
              case 13:
              case "actPowerP1":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3053,
                    quantity: 2,
                    };
                res.topic = "actPowerP1";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "kW";
              break;
              case 14:
              case "actPowerP2":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3055,
                    quantity: 2,
                    };
                res.topic = "actPowerP2";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "kW";
              break;
              case 15:
              case "actPowerP3":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3057,
                    quantity: 2,
                    };
                res.topic = "actPowerP3";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "kW";
              break;
              case 16:
                case "actPowerTot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3059,
                      quantity: 2,
                      };
                  res.topic = "actPowerTot";
                  res.format = "float32";
                  res.model = "pm8000";
                  res.unit = "kW";
                break;
              case 17:
              case "reactPowerP1":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3061,
                    quantity: 2,
                    };
                res.topic = "reactPowerP1";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "kVAR";
              break;
              case 18:
              case "reactPowerP2":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3063,
                    quantity: 2,
                    };
                res.topic = "reactPowerP2";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "kVAR";
              break;
              case 19:
              case "reactPowerP3":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3065,
                    quantity: 2,
                    };
                res.topic = "reactPowerP3";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "kVAR";
              break;
              case 20:
              case "reactPowerTot":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3067,
                    quantity: 2,
                    };
                res.topic = "reactPowerTot";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "kVAR";
              break;
              case 21:
              case "appPowerP1":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3069,
                    quantity: 2,
                    };
                res.topic = "appPowerP1";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "VA";
              break;
              case 22:
              case "appPowerP2":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3071,
                    quantity: 2,
                    };
                res.topic = "appPowerP2";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "VA";
              break;
              case 23:
              case "appPowerP3":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3073,
                    quantity: 2,
                    };
                res.topic = "appPowerP3";
                res.format = "float32";
                res.model  = "pm8000";
                res.unit = "VA";
              break;
              case 24:
              case "appPowerTot":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3075,
                    quantity: 2,
                    };
                res.topic = "appPowerTot";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "VA";
              break;
              case 25:
              case "pFactorP1":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3143,
                    quantity: 2,
                    };
                res.topic = "pFactorP1";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "";
              break;
              case 26:
              case "pFactorP2":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3145,
                    quantity: 2,
                    };
                res.topic = "pFactorP2";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "";
              break;
              case 27:
              case "pFactorP3":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3147,
                    quantity: 2,
                    };
                res.topic = "pFactorP3";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "";
              break;
              case 28:
              case "pFactorTot":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3149,
                    quantity: 2,
                    };
                res.topic = "pFactorTot";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "";
              break;
              case 29:
              case "currentUnWst":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3017,
                    quantity: 2,
                    };
                res.topic = "currentUnWst";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "%";
              break;
              case 30:
              case "voltageUnLNWst":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3051,
                    quantity: 2,
                    };
                res.topic = "voltageUnLNWst";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "%";
              break;
              case 31:
              case "frequency":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3109,
                    quantity: 2,
                    };
                res.topic = "frequency";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "Hz";
              break;
              case 32:
              case "toEnergyActImp":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3203,
                    quantity: 4,
                    };
                res.topic = "toEnergyActImp";
                res.format = "int64";
                res.model = "pm8000";
                res.unit = "Wh";
              break;
              case 33:
              case "toEnergyActExp":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3207,
                    quantity: 4,
                    };
                res.topic = "toEnergyActExp";
                res.format = "int64";
                res.model = "pm8000";
                res.unit = "Wh";
              break;
              case 34:
              case "toEnergyReactImp":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3219,
                    quantity: 4,
                    };
                res.topic = "toEnergyReactImp";
                res.format = "int64";
                res.model = "pm8000";
                res.unit = "VARh";
              break;
              case 35:
              case "toEnergyReactExp":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3223,
                    quantity: 4,
                    };
                res.topic = "toEnergyReactExp";
                res.format = "int64";
                res.model = "pm8000";
                res.unit = "VARh";
              break;
              case 36:
              case "toEnergyAppImp":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3235,
                    quantity: 4,
                    };
                res.topic = "toEnergyAppImp";
                res.format = "int64";
                res.model = "pm8000";
                res.unit = "VAh";
              break;
              case 37:
              case "toEnergyAppExp":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3239,
                    quantity: 4,
                    };
                res.topic = "toEnergyAppExp";
                res.format = "int64";
                res.model = "pm8000";
                res.unit = "VAh";
              break;
              case 38:
              case "paEnergyActImp":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3255,
                    quantity: 4,
                    };
                res.topic = "paEnergyActImp";
                res.format = "int64";
                res.model = "pm8000";
                res.unit = "Wh";
              break;
              case 39:
              case "paEnergyReactImp":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3271,
                    quantity: 4,
                    };
                res.topic = "paEnergyReactImp";
                res.format = "int64";
                res.model = "pm8000";
                res.unit = "VARh";
              break;
              case 40:
              case "paEnergyAppImp":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3287,
                    quantity: 4,
                    };
                res.topic = "paEnergyAppImp";
                res.format = "int64";
                res.model = "pm8000";
                res.unit = "VAh"
              break;
              case 41:
              case "toEnergyActImpRate1":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 4195,
                    quantity: 4,
                    };
                res.topic = "toEnergyActImpRate1";
                res.format = "int64";
                res.model = "pm8000";
                res.unit = "Wh"
              break;
              case 42:
              case "toEnergyActImpRate2":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 4199,
                    quantity: 4,
                    };
                res.topic = "toEnergyActImpRate2";
                res.format = "int64";
                res.model = "pm8000";
                res.unit = "Wh"
              break;
              case 43:
              case "toEnergyActImpRate3":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 4203,
                    quantity: 4,
                    };
                res.topic = "toEnergyActImpRate3";
                res.format = "int64";
                res.model = "pm8000";
                res.unit = "Wh"
              break;
              case 44:
              case "toEnergyActImpRate4":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 4207,
                    quantity: 4,
                    };
                res.topic = "toEnergyActImpRate4";
                res.format = "int64";
                res.model = "pm8000";
                res.unit = "Wh"
              break;  
              case 45:
              case "THD-Voltage-L1N":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 39400,
                    quantity: 2,
                    };
                res.topic = "THD-Voltage-L1N";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "%"
              break; 
              case 46:
              case "THD-Voltage-L2N":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 39402,
                    quantity: 2,
                    };
                res.topic = "THD-Voltage-L2N";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "%"
              break; 
              case 47:
              case "THD-Voltage-L3N":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 39404,
                    quantity: 2,
                    };
                res.topic = "THD-Voltage-L3N";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "%"
              break; 
              case 48:
              case "Voltage-PosSeqMag2h":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 39440,
                    quantity: 2,
                    };
                res.topic = "Voltage-PosSeqMag2h";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "V"
              break; 
              case 49:
              case "Voltage-NegSeqMag2h":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 39444,
                    quantity: 2,
                    };
                res.topic = "Voltage-NegSeqMag2h";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "V"
              break; 
              case 50:
              case "Voltage-ZeroSeqMag2h":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 39448,
                    quantity: 2,
                    };
                res.topic = "Voltage-ZeroSeqMag2h";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "V"
              break; 
              case 51:
              case "freq10mMean":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 39999,
                    quantity: 2,
                    };
                res.topic = "freq10mMean";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "Hz";
              break;
              case 52:
              case "freq10mLow":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 40001,
                    quantity: 2,
                    };
                res.topic = "freq10mLow";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "Hz";
              break;
              case 53:
              case "freq10mHigh":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 40003,
                    quantity: 2,
                    };
                res.topic = "freq10mHigh";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "Hz";
              break;
              case 54:
              case "freqMin":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 40005,
                    quantity: 2,
                    };
                res.topic = "freqMin";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "Hz";
              break;
              case 55:
              case "freqMax":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 40007,
                    quantity: 2,
                    };
                res.topic = "freqMax";
                res.format = "float32";
                res.model = "pm8000";
                res.unit = "Hz";
              break;
            }
            
            node.send(res);
        });
    }
    RED.nodes.registerType("pm8000",pm8000Node);
}
