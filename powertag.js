module.exports = function(RED) {
  function powertagNode(config) {
      RED.nodes.createNode(this,config);
      this.name = config.name;
      this.unitId = config.unitId;
      this.device = config.device;
      this.data = config.data;
      var node = this;
      node.on('input', function(msg) {
          var p=msg.payload;
          let settings = {
           name: p.name || node.name || "",
           unitId: p.unitId || node.unitId,
           device: p.device || node.device,
           data: p.data || node.data,
          };
          var res = {};
          
          // PowerTag Energy x63
          if(settings.device == "powertag-energy-x63"){
            switch(settings.data){
              case 0:
              case "rms-current-phase-a":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2999,
                    quantity: 2,
                    };
                res.topic = "rms-current-phase-a";
                res.format = "float32";
                res.unit = "A";
                res.model = "x63";
              break;
              case 1:
              case "rms-current-phase-b":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3001,
                    quantity: 2,
                    };
                res.topic = "rms-current-phase-b";
                res.format = "float32";
                res.unit = "A";
                res.model = "x63";
              break;
              case 2:
              case "rms-current-phase-c":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3004,
                    quantity: 2,
                    };
                res.topic = "rms-current-phase-c";
                res.format = "float32";
                res.unit = "A";
                res.model = "x63";
              break;
              case 3:
              case "rms-voltage-a-b":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3019,
                    quantity: 2,
                    };
                res.topic = "rms-voltage-a-b";
                res.format = "float32";
                res.unit = "V";
                res.model = "x63";
              break;
              case 4:
              case "rms-voltage-b-c":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3021,
                    quantity: 2,
                    };
                res.topic = "rms-voltage-b-c";
                res.format = "float32";
                res.unit = "V";
                res.model = "x63";
              break;
              case 5:
              case "rms-voltage-c-a":
                res.payload = {
                    fc: 3023,
                    unitid: settings.unitId,
                    address: 11,
                    quantity: 2,
                    };
                res.topic = "rms-voltage-c-a";
                res.format = "float32";
                res.unit = "V";
                res.model = "x63";
              break;
              case 6:
              case "rms-voltage-a-n":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3027,
                    quantity: 2,
                    };
                res.topic = "rms-voltage-a-n";
                res.format = "float32";
                res.unit = "V";
                res.model = "x63";
              break;
              case 7:
              case "rms-voltage-b-n":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3029,
                    quantity: 2,
                    };
                res.topic = "rms-voltage-b-n";
                res.format = "float32";
                res.unit = "V";
                res.model = "x63";
              break;
              case 8:
              case "rms-voltage-c-n":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3031,
                    quantity: 2,
                    };
                res.topic = "rms-voltage-c-n";
                res.format = "float32";
                res.unit = "V";
                res.model = "x63";
              break;
              case 9:
              case "active-power-phase-a":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3053,
                    quantity: 2,
                    };
                res.topic = "active-power-phase-a";
                res.format = "float32";
                res.unit = "W";
                res.model = "x63";
              break;
              case 10:
              case "active-power-phase-b":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3055,
                    quantity: 2,
                    };
                res.topic = "active-power-phase-b";
                res.format = "float32";
                res.unit = "W";
                res.model = "x63";
              break;
              case 11:
              case "active-power-phase-c":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3057,
                    quantity: 2,
                    };
                res.topic = "active-power-phase-c";
                res.format = "float32";
                res.unit = "W";
                res.model = "x63";
              break;
              case 12:
              case "active-power-total":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3059,
                    quantity: 2,
                    };
                res.topic = "active-power-total";
                res.format = "float32";
                res.unit = "W";
                res.model = "x63";
              break;
              case 13:
              case "apparent-power-total":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3075,
                    quantity: 2,
                    };
                res.topic = "apparent-power-total";
                res.format = "float32";
                res.unit = "VA";
                res.model = "x63";
              break;
              case 14:
              case "power-factor-total":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3083,
                    quantity: 2,
                    };
                res.topic = "power-factor-total";
                 res.format = "float32";
                res.unit = "";
                res.model = "x63";
              break;
              case 15:
              case "total-active-energy-delivered-received":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3203,
                    quantity: 4,
                    };
                res.topic = "total-active-energy-delivered-received";
                res.format = "int64";
                res.unit = "Wh";
                res.model = "x63";
              break;
              case 16:
              case "partial-active-energy-delivered-received":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3255,
                    quantity: 4,
                    };
                res.topic = "partial-active-energy-delivered-received";
                res.format = "int64";
                res.unit = "Wh";
                res.model = "x63";
               break;
              case 17:
              case "total-active-power-demand":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3765,
                    quantity: 2,
                    };
                res.topic = "total-active-power-demand";
                res.format = "float32";
                res.unit = "W";
                res.model = "x63";
              break;
              case 18:
              case "max-demand-total-active-power":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3769,
                    quantity: 2,
                    };
                res.topic = "max-demand-total-active-power";
                res.format = "float32";
                res.unit = "W";
                res.model = "x63";
              break;
            }
          }
          // PowerTag Energy M250/M630
          else if(settings.device == "powertag-energy-m250-m630"){
            switch(settings.data){
              case 0:
              case "rms-current-phase-a":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2999,
                    quantity: 2,
                    };
                res.topic = "rms-current-phase-a";
                res.format = "float32";
                res.unit = "A";
                res.model = "M250_M630";
              break;
              case 1:
              case "rms-current-phase-b":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3001,
                    quantity: 2,
                    };
                res.topic = "rms-current-phase-b";
                res.format = "float32";
                res.unit = "A";
                res.model = "M250_M630";
              break;
              case 2:
              case "rms-current-phase-c":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3004,
                    quantity: 2,
                    };
                res.topic = "rms-current-phase-c";
                res.format = "float32";
                res.unit = "A";
                res.model = "M250_M630";
              break;
              case 3:
              case "rms-voltage-a-b":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3019,
                    quantity: 2,
                    };
                res.topic = "rms-voltage-a-b";
                res.format = "float32";
                res.unit = "V";
                res.model = "M250_M630";
              break;
              case 4:
              case "rms-voltage-b-c":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3021,
                    quantity: 2,
                    };
                res.topic = "rms-voltage-b-c";
                res.format = "float32";
                res.unit = "V";
                res.model = "M250_M630";
              break;
              case 5:
              case "rms-voltage-c-a":
                res.payload = {
                    fc: 3023,
                    unitid: settings.unitId,
                    address: 11,
                    quantity: 2,
                    };
                res.topic = "rms-voltage-c-a";
                res.format = "float32";
                res.unit = "V";
                res.model = "M250_M630";
              break;
              case 6:
              case "rms-voltage-a-n":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3027,
                    quantity: 2,
                    };
                res.topic = "rms-voltage-a-n";
                res.format = "float32";
                res.unit = "V";
                res.model = "M250_M630";
              break;
              case 7:
              case "rms-voltage-b-n":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3029,
                    quantity: 2,
                    };
                res.topic = "rms-voltage-b-n";
                res.format = "float32";
                res.unit = "V";
                res.model = "M250_M630";
              break;
              case 8:
              case "rms-voltage-c-n":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3031,
                    quantity: 2,
                    };
                res.topic = "rms-voltage-c-n";
                res.format = "float32";
                res.unit = "V";
                res.model = "M250_M630";
              break;
              case 9:
              case "active-power-phase-a":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3053,
                    quantity: 2,
                    };
                res.topic = "active-power-phase-a";
                res.format = "float32";
                res.unit = "W";
                res.model = "M250_M630";
              break;
              case 10:
              case "active-power-phase-b":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3055,
                    quantity: 2,
                    };
                res.topic = "active-power-phase-b";
                res.format = "float32";
                res.unit = "W";
                res.model = "M250_M630";
              break;
              case 11:
              case "active-power-phase-c":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3057,
                    quantity: 2,
                    };
                res.topic = "active-power-phase-c";
                res.format = "float32";
                res.unit = "W";
                res.model = "M250_M630";
              break;
              case 12:
              case "active-power-total":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3059,
                    quantity: 2,
                    };
                res.topic = "active-power-total";
                res.format = "float32";
                res.unit = "W";
                res.model = "M250_M630";
              break;
              case 13:
              case "reactive-power-total":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3067,
                    quantity: 2,
                    };
                res.topic = "reactive-power-total";
                res.format = "float32";
                res.unit = "VAR";
                res.model = "M250_M630";
              break;
              case 14:
              case "apparent-power-total":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3075,
                    quantity: 2,
                    };
                res.topic = "apparent-power-total";
                res.format = "float32";
                res.unit = "VA";
                res.model = "M250_M630";
              break;
              case 15:
              case "power-factor-total":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3083,
                    quantity: 2,
                    };
                res.topic = "power-factor-total";
                 res.format = "float32";
                res.unit = "";
                res.model = "M250_M630";
              break;
              case 16:
              case "frequency":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3109,
                    quantity: 2,
                    };
                res.topic = "frequency";
                 res.format = "float32";
                res.unit = "Hz";
                res.model = "M250_M630";
              break;
              case 17:
              case "device-temperature":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3131,
                    quantity: 2,
                    };
                res.topic = "device-temperature";
                 res.format = "float32";
                res.unit = "°C";
                res.model = "M250_M630";
              break;
              case 18:
              case "total-active-energy-delivered-count-positively":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3207,
                    quantity: 4,
                    };
                res.topic = "total-active-energy-delivered-count-positively";
                 res.format = "int64";
                res.unit = "Wh";
                res.model = "M250_M630";
              break;
              case 19:
              case "total-active-energy-received":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3211,
                    quantity: 4,
                    };
                res.topic = "total-active-energy-received";
                 res.format = "int64";
                res.unit = "Wh";
                res.model = "M250_M630";
              break;
              case 20:
              case "active-energy-phase-a-delivered":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3215,
                    quantity: 4,
                    };
                res.topic = "active-energy-phase-a-delivered";
                 res.format = "int64";
                res.unit = "Wh";
                res.model = "M250_M630";
              break;
              case 21:
              case "active-energy-phase-b-delivered":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3219,
                    quantity: 4,
                    };
                res.topic = "active-energy-phase-b-delivered";
                 res.format = "int64";
                res.unit = "Wh";
                res.model = "M250_M630";
              break;
              case 22:
              case "active-energy-phase-c-delivered":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3223,
                    quantity: 4,
                    };
                res.topic = "active-energy-phase-c-delivered";
                 res.format = "int64";
                res.unit = "Wh";
                res.model = "M250_M630";
              break;
              case 23:
              case "partial-active-energy-delivered":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3263,
                    quantity: 4,
                    };
                res.topic = "partial-active-energy-delivered";
                 res.format = "int64";
                res.unit = "Wh";
                res.model = "M250_M630";
              break;
              case 24:
              case "partial-active-energy-received":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3271,
                    quantity: 4,
                    };
                res.topic = "partial-active-energy-received";
                 res.format = "int64";
                res.unit = "Wh";
                res.model = "M250_M630";
              break;
              case 25:
              case "partial-reactive-energy-delivered":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3279,
                    quantity: 4,
                    };
                res.topic = "partial-reactive-energy-delivered";
                 res.format = "int64";
                res.unit = "VARh";
                res.model = "M250_M630";
              break;
              case 26:
              case "partial-reactive-energy-received":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3287,
                    quantity: 4,
                    };
                res.topic = "partial-reactive-energy-received";
                 res.format = "int64";
                res.unit = "VARh";
                res.model = "M250_M630";
              break;
            }
          }
          // PowerTag Energy F160/Rope
          else if(settings.device == "powertag-energy-f16-rope"){
            switch(settings.data){
              case 0:
              case "rms-current-phase-a":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2999,
                    quantity: 2,
                    };
                res.topic = "rms-current-phase-a";
                res.format = "float32";
                res.unit = "A";
                res.model = "f160_rope";
              break;
              case 1:
              case "rms-current-phase-b":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3001,
                    quantity: 2,
                    };
                res.topic = "rms-current-phase-b";
                res.format = "float32";
                res.unit = "A";
                res.model = "f160_rope";
              break;
              case 2:
              case "rms-current-phase-c":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3004,
                    quantity: 2,
                    };
                res.topic = "rms-current-phase-c";
                res.format = "float32";
                res.unit = "A";
                res.model = "f160_rope";
              break;
              case 3:
              case "rms-current-phase-neutral":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3005,
                    quantity: 2,
                    };
                res.topic = "rms-current-phase-neutral";
                res.format = "float32";
                res.unit = "A";
                res.model = "f160_rope";
              break;
              case 4:
              case "rms-voltage-a-b":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3019,
                    quantity: 2,
                    };
                res.topic = "rms-voltage-a-b";
                res.format = "float32";
                res.unit = "V";
                res.model = "f160_rope";
              break;
              case 5:
              case "rms-voltage-b-c":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3021,
                    quantity: 2,
                    };
                res.topic = "rms-voltage-b-c";
                res.format = "float32";
                res.unit = "V";
                res.model = "f160_rope";
              break;
              case 6:
              case "rms-voltage-c-a":
                res.payload = {
                    fc: 3023,
                    unitid: settings.unitId,
                    address: 11,
                    quantity: 2,
                    };
                res.topic = "rms-voltage-c-a";
                res.format = "float32";
                res.unit = "V";
                res.model = "f160_rope";
              break;
              case 7:
              case "rms-voltage-a-n":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3027,
                    quantity: 2,
                    };
                res.topic = "rms-voltage-a-n";
                res.format = "float32";
                res.unit = "V";
                res.model = "f160_rope";
              break;
              case 8:
              case "rms-voltage-b-n":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3029,
                    quantity: 2,
                    };
                res.topic = "rms-voltage-b-n";
                res.format = "float32";
                res.unit = "V";
                res.model = "f160_rope";
              break;
              case 9:
              case "rms-voltage-c-n":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3031,
                    quantity: 2,
                    };
                res.topic = "rms-voltage-c-n";
                res.format = "float32";
                res.unit = "V";
                res.model = "f160_rope";
              break;
              case 10:
              case "active-power-phase-a":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3053,
                    quantity: 2,
                    };
                res.topic = "active-power-phase-a";
                res.format = "float32";
                res.unit = "W";
                res.model = "f160_rope";
              break;
              case 11:
              case "active-power-phase-b":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3055,
                    quantity: 2,
                    };
                res.topic = "active-power-phase-b";
                res.format = "float32";
                res.unit = "W";
                res.model = "f160_rope";
              break;
              case 12:
              case "active-power-phase-c":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3057,
                    quantity: 2,
                    };
                res.topic = "active-power-phase-c";
                res.format = "float32";
                res.unit = "W";
                res.model = "f160_rope";
              break;
              case 13:
              case "active-power-total":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3059,
                    quantity: 2,
                    };
                res.topic = "active-power-total";
                res.format = "float32";
                res.unit = "W";
                res.model = "f160_rope";
              break;
              case 14:
              case "reactive-power-phase-a":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3061,
                    quantity: 2,
                    };
                res.topic = "reactive-power-phase-a";
                res.format = "float32";
                res.unit = "VAR";
                res.model = "f160_rope";
              break;
              case 15:
              case "reactive-power-phase-b":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3063,
                    quantity: 2,
                    };
                res.topic = "reactive-power-phase-b";
                res.format = "float32";
                res.unit = "VAR";
                res.model = "f160_rope";
              break;
              case 16:
              case "reactive-power-phase-c":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3065,
                    quantity: 2,
                    };
                res.topic = "reactive-power-phase-c";
                res.format = "float32";
                res.unit = "VAR";
                res.model = "f160_rope";
              break;
              case 17:
              case "reactive-power-total":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3067,
                    quantity: 2,
                    };
                res.topic = "reactive-power-total";
                res.format = "float32";
                res.unit = "VAR";
                res.model = "f160_rope";
              break;

              case 18:
              case "apparent-power-phase-a":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3069,
                    quantity: 2,
                    };
                res.topic = "apparent-power-phase-a";
                res.format = "float32";
                res.unit = "VA";
                res.model = "f160_rope";
              break;
              case 19:
              case "apparent-power-phase-b":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3071,
                    quantity: 2,
                    };
                res.topic = "apparent-power-phase-b";
                res.format = "float32";
                res.unit = "VA";
                res.model = "f160_rope";
              break;
              case 20:
              case "apparent-power-phase-c":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3073,
                    quantity: 2,
                    };
                res.topic = "apparent-power-phase-c";
                res.format = "float32";
                res.unit = "VA";
                res.model = "f160_rope";
              break;
              case 21:
              case "apparent-power-total":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3075,
                    quantity: 2,
                    };
                res.topic = "apparent-power-total";
                res.format = "float32";
                res.unit = "VA";
                res.model = "f160_rope";
              break;
              case 22:
              case "power-factor-phase-a":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3077,
                    quantity: 2,
                    };
                res.topic = "power-factor-phase-a";
                res.format = "float32";
                res.unit = "";
                res.model = "f160_rope";
              break;
              case 23:
              case "power-factor-phase-b":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3079,
                    quantity: 2,
                    };
                res.topic = "power-factor-phase-b";
                res.format = "float32";
                res.unit = "";
                res.model = "f160_rope";
              break;
              case 24:
              case "power-factor-phase-c":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3081,
                    quantity: 2,
                    };
                res.topic = "power-factor-phase-c";
                res.format = "float32";
                res.unit = "";
                res.model = "f160_rope";
              break;
              case 25:
              case "power-factor-total":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3083,
                    quantity: 2,
                    };
                res.topic = "power-factor-total";
                 res.format = "float32";
                res.unit = "";
                res.model = "f160_rope";
              break;
              case 26:
              case "power-factor-sign":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3085,
                    quantity: 2,
                    };
                res.topic = "power-factor-sign";
                 res.format = "int16";
                res.unit = "";
                res.model = "f160_rope";
              break;
              case 27:
              case "frequency":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3109,
                    quantity: 2,
                    };
                res.topic = "frequency";
                 res.format = "float32";
                res.unit = "Hz";
                res.model = "f160_rope";
              break;
              case 28:
              case "device-temperature":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3131,
                    quantity: 2,
                    };
                res.topic = "device-temperature";
                 res.format = "float32";
                res.unit = "°C";
                res.model = "f160_rope";
              break;
              case 29:
              case "total-active-energy-delivered-count-positively":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3207,
                    quantity: 4,
                    };
                res.topic = "total-active-energy-delivered-count-positively";
                 res.format = "int64";
                res.unit = "Wh";
                res.model = "f160_rope";
              break;
              case 30:
              case "total-active-energy-received":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3211,
                    quantity: 4,
                    };
                res.topic = "total-active-energy-received";
                 res.format = "int64";
                res.unit = "Wh";
                res.model = "f160_rope";
              break;
              case 31:
              case "partial-active-energy-delivered":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3263,
                    quantity: 4,
                    };
                res.topic = "partial-active-energy-delivered";
                 res.format = "int64";
                res.unit = "Wh";
                res.model = "f160_rope";
              break;
              case 32:
              case "partial-active-energy-received":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3271,
                    quantity: 4,
                    };
                res.topic = "partial-active-energy-received";
                 res.format = "int64";
                res.unit = "Wh";
                res.model = "f160_rope";
              break;
              case 33:
              case "partial-reactive-energy-delivered":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3279,
                    quantity: 4,
                    };
                res.topic = "partial-reactive-energy-delivered";
                 res.format = "int64";
                res.unit = "VARh";
                res.model = "f160_rope";
              break;
              case 33:
              case "partial-reactive-energy-received":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3287,
                    quantity: 4,
                    };
                res.topic = "partial-reactive-energy-received";
                 res.format = "int64";
                res.unit = "VARh";
                res.model = "f160_rope";
              break;
              case 34:
              case "total-active-power-demand":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3765,
                    quantity: 4,
                    };
                res.topic = "total-active-power-demand";
                 res.format = "float32";
                res.unit = "W";
                res.model = "f160_rope";
              break;
              case 35:
              case "max-demand-total-active-power":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 3769,
                    quantity: 4,
                    };
                res.topic = "max-demand-total-active-power";
                 res.format = "float32";
                res.unit = "W";
                res.model = "f160_rope";
              break;
            }
          }
          
          node.send(res);
      });
  }
  RED.nodes.registerType("powertag", powertagNode);
}
