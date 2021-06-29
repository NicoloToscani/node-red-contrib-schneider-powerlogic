module.exports = function(RED) {
    function pm3000Node(config) {
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
                res.model: "pm3000";
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
                res.model: "pm3000";
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
                res.model: "pm3000";
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
                res.model: "pm3000";
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
                res.model: "pm3000";
              break;
              case 5:
              case "voltage-L1L2":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3019,
                    quantity: 4,
                    };
                res.topic = "voltage-L1L2";
                res.format = "float32";
                res.model: "pm3000";
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
                res.model: "pm3000";
              break;
              case 7:
              case "voltage-L3L1":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3023,
                    quantity: 4,
                    };
                res.topic = "voltage-L3L1";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 8:
              case "voltage-LL-Avg":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3025,
                    quantity: 4,
                    };
                res.topic = "voltage-LL-Avg";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 9:
              case "voltage-L1N":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3027,
                    quantity: 4,
                    };
                res.topic = "voltage-L1N";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 10:
              case "voltage-L2N":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3029,
                    quantity: 4,
                    };
                res.topic = "voltage-L2N";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 11:
              case "voltage-L3N":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3031,
                    quantity: 4,
                    };
                res.topic = "voltage-L3N";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 12:
              case "voltage-LN-avg":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3035,
                    quantity: 4,
                    };
                res.topic = "voltage-LN-avg";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 13:
              case "actPowerP1":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3053,
                    quantity: 4,
                    };
                res.topic = "actPowerP1";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 14:
              case "actPowerP2":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3055,
                    quantity: 4,
                    };
                res.topic = "actPowerP2";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 15:
              case "actPowerP3":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3057,
                    quantity: 4,
                    };
                res.topic = "actPowerP3";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 16:
                case "actPowerTot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3059,
                      quantity: 4,
                      };
                  res.topic = "actPowerTot";
                  res.format = "float32";
                  res.model: "pm3000";
                break;
              case 17:
              case "reactPowerP1":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3061,
                    quantity: 4,
                    };
                res.topic = "reactPowerP1";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 18:
              case "reactPowerP2":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3063,
                    quantity: 4,
                    };
                res.topic = "reactPowerP2";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 19:
              case "reactPowerP3":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3065,
                    quantity: 4,
                    };
                res.topic = "reactPowerP3";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 20:
              case "reactPowerTot":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3067,
                    quantity: 4,
                    };
                res.topic = "reactPowerTot";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 21:
              case "appPowerP1":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3069,
                    quantity: 4,
                    };
                res.topic = "appPowerP1";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 22:
              case "appPowerP2":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3071,
                    quantity: 4,
                    };
                res.topic = "appPowerP2";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 23:
              case "appPowerP3":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3073,
                    quantity: 4,
                    };
                res.topic = "appPowerP3";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 24:
              case "appPowerTot":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3075,
                    quantity: 4,
                    };
                res.topic = "appPowerTot";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 25:
              case "pFactorP1":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3077,
                    quantity: 4,
                    };
                res.topic = "pFactorP1";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 26:
              case "pFactorP2":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3079,
                    quantity: 4,
                    };
                res.topic = "pFactorP2";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 27:
              case "pFactorP3":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3081,
                    quantity: 4,
                    };
                res.topic = "pFactorP3";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 28:
              case "pFactorTot":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3083,
                    quantity: 4,
                    };
                res.topic = "pFactorTot";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 29:
              case "currentUnI1":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3011,
                    quantity: 4,
                    };
                res.topic = "currentUnI1";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 30:
              case "currentUnI2":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3013,
                    quantity: 4,
                    };
                res.topic = "currentUnI2";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 31:
              case "currentUnI3":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3015,
                    quantity: 4,
                    };
                res.topic = "currentUnI3";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 32:
              case "currentUnWst":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3017,
                    quantity: 4,
                    };
                res.topic = "currentUnWst";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 33:
              case "voltageUnL1L2":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3037,
                    quantity: 4,
                    };
                res.topic = "voltageUnL1L2";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 34:
              case "voltageUnL2L3":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3039,
                    quantity: 4,
                    };
                res.topic = "voltageUnL2L3";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 35:
              case "voltageUnL3L1":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3041,
                    quantity: 4,
                    };
                res.topic = "voltageUnL3L1";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 36:
              case "voltageUnLLWst":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3043,
                    quantity: 4,
                    };
                res.topic = "voltageUnLLWst";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 37:
              case "voltageUnL1N":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3045,
                    quantity: 4,
                    };
                res.topic = "voltageUnL1N";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 38:
              case "voltageUnL2N":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3047,
                    quantity: 4,
                    };
                res.topic = "voltageUnL2N";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 39:
              case "voltageUnL3N":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3049,
                    quantity: 4,
                    };
                res.topic = "voltageUnL3N";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 40:
              case "voltageUnLNWst":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3051,
                    quantity: 4,
                    };
                res.topic = "voltageUnLNWst";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 41:
              case "tangentPhi":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3107,
                    quantity: 4,
                    };
                res.topic = "tangentPhi";
                res.format = "float32";
                res.model: "pm3000";
              break;
              case 42:
                case "frequency":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3109,
                      quantity: 4,
                      };
                  res.topic = "frequency";
                  res.format = "float32";
                  res.model: "pm3000";
                break;
                case 43:
                case "temperature":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3131,
                      quantity: 4,
                      };
                  res.topic = "temperature";
                  res.format = "float32";
                  res.model: "pm3000";
                break;
                case 44:
                case "toEnergyActImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3203,
                      quantity: 4,
                      };
                  res.topic = "toEnergyActImp";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 45:
                case "toEnergyActExp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3207,
                      quantity: 4,
                      };
                  res.topic = "toEnergyActExp";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 46:
                case "toEnergyReactImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3219,
                      quantity: 4,
                      };
                  res.topic = "toEnergyReactImp";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 47:
                case "toEnergyReactExp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3223,
                      quantity: 4,
                      };
                  res.topic = "toEnergyReactExp";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 48:
                case "toEnergyAppImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3235,
                      quantity: 4,
                      };
                  res.topic = "toEnergyAppImp";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 49:
                case "toEnergyAppExp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3239,
                      quantity: 4,
                      };
                  res.topic = "toEnergyAppExp";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 50:
                case "paEnergyActImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3255,
                      quantity: 4,
                      };
                  res.topic = "paEnergyActImp";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 51:
                case "paEnergyReactImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3271,
                      quantity: 4,
                      };
                  res.topic = "paEnergyReactImp";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 52:
                case "paEnergyAppImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3287,
                      quantity: 4,
                      };
                  res.topic = "paEnergyAppImp";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 53:
                case "activeEnergyImpP1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3517,
                      quantity: 4,
                      };
                  res.topic = "activeEnergyImpP1";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 54:
                case "activeEnergyImpP2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3521,
                      quantity: 4,
                      };
                  res.topic = "activeEnergyImpP2";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 55:
                case "activeEnergyImpP3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3525,
                      quantity: 4,
                      };
                  res.topic = "activeEnergyImpP3";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 56:
                case "reactiveEnergyImpP1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3529,
                      quantity: 4,
                      };
                  res.topic = "reactiveEnergyImpP1";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 57:
                case "reactiveEnergyImpP2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3533,
                      quantity: 4,
                      };
                  res.topic = "reactiveEnergyImpP2";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 58:
                case "reactiveEnergyImpP3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3537,
                      quantity: 4,
                      };
                  res.topic = "reactiveEnergyImpP3";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 59:
                case "apparentEnergyImpP1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3541,
                      quantity: 4,
                      };
                  res.topic = "apparentEnergyImpP1";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 60:
                case "apparentEnergyImpP2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3545,
                      quantity: 4,
                      };
                  res.topic = "apparentEnergyImpP2";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 61:
                case "apparentEnergyImpP3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3549,
                      quantity: 4,
                      };
                  res.topic = "apparentEnergyImpP3";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 62:
                case "toEnergyActImpRate1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 4195,
                      quantity: 4,
                      };
                  res.topic = "toEnergyActImpRate1";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 63:
                case "toEnergyActImpRate2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 4199,
                      quantity: 4,
                      };
                  res.topic = "toEnergyActImpRate2";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 64:
                case "toEnergyActImpRate3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 4203,
                      quantity: 4,
                      };
                  res.topic = "toEnergyActImpRate3";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
                case 65:
                case "toEnergyActImpRate4":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 4207,
                      quantity: 4,
                      };
                  res.topic = "toEnergyActImpRate4";
                  res.format = "int64";
                  res.model: "pm3000";
                break;
            }
            
            node.send(res);
        });
    }
    RED.nodes.registerType("pm3000",pm3000Node);
}
