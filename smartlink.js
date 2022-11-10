module.exports = function(RED) {
  function smartlinkNode(config) {
      RED.nodes.createNode(this,config);
      this.name = config.name;
      this.unitId = config.unitId;
      this.mode = config.mode;
      this.device = config.device;
      this.channel = config.channel;
      this.data = config.data;
      var node = this;
      node.on('input', function(msg) {
          var p=msg.payload;
          let settings = {
           name: p.name || node.name || "",
           unitId: p.unitId || node.unitId,
           mode: p.mode || node.mode,
           device: p.device || node.device,
           channel: p.channel || node.channel,
           data: p.data || node.data,
          };
          var res = {};
          
          // Read mode 
          if(settings.mode == "read"){
             
             // Device type
             switch(settings.device){
                case 'iof+sd24':
                   if(settings.channel == "digital-channel-1"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 1"
                             res.model = "iof+sd24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 1"
                             res.model = "iof+sd24";                             
                         break;
                      }
                   }
                   else if(settings.channel == "digital-channel-2"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+40,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 2"
                             res.model = "iof+sd24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+40,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 2"
                             res.model = "iof+sd24";                             
                         break;
                      }                      
                      
                   }
                   else if(settings.channel == "digital-channel-3"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+80,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 3"
                             res.model = "iof+sd24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+80,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 3"
                             res.model = "iof+sd24";                             
                         break;
                      }                      
                      
                   }
                   else if(settings.channel == "digital-channel-4"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+120,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 4"
                             res.model = "iof+sd24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+120,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 4"
                             res.model = "iof+sd24";                             
                         break;
                      }                      
                      
                   }  
                   else if(settings.channel == "digital-channel-5"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+160,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 5"
                             res.model = "iof+sd24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+160,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 5"
                             res.model = "iof+sd24";                             
                         break;
                      }                      
                      
                   }  
                   else if(settings.channel == "digital-channel-6"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+200,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 6"
                             res.model = "iof+sd24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+200,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 6"
                             res.model = "iof+sd24";                             
                         break;
                      }                      
                      
                   } 
                   else if(settings.channel == "digital-channel-7"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+240,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 7"
                             res.model = "iof+sd24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+240,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 7"
                             res.model = "iof+sd24";                             
                         break;
                      }                      
                      
                   }                                                                                                         
                break;
                
                case 'of+sd24':
                   if(settings.channel == "digital-channel-1"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 1"
                             res.model = "of+sd24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 1"
                             res.model = "of+sd24";                             
                         break;
                      }
                   }
                   else if(settings.channel == "digital-channel-2"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+40,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 2"
                             res.model = "of+sd24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+40,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 2"
                             res.model = "of+sd24";                             
                         break;
                      }                      
                      
                   }
                   else if(settings.channel == "digital-channel-3"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+80,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 3"
                             res.model = "of+sd24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+80,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 3"
                             res.model = "of+sd24";                             
                         break;
                      }                      
                      
                   }
                   else if(settings.channel == "digital-channel-4"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+120,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 4"
                             res.model = "of+sd24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+120,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 4"
                             res.model = "of+sd24";                             
                         break;
                      }                      
                      
                   }  
                   else if(settings.channel == "digital-channel-5"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+160,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 5"
                             res.model = "of+sd24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+160,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 5"
                             res.model = "of+sd24";                             
                         break;
                      }                      
                      
                   }  
                   else if(settings.channel == "digital-channel-6"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+200,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 6"
                             res.model = "of+sd24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+200,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 6"
                             res.model = "of+sd24";                             
                         break;
                      }                      
                      
                   } 
                   else if(settings.channel == "digital-channel-7"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+240,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 7"
                             res.model = "of+sd24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+240,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 7"
                             res.model = "of+sd24";                             
                         break;
                      }                      
                      
                   }                                                                                                         
                break;
                
                case 'iact24':
                   if(settings.channel == "digital-channel-1"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 1"
                             res.model = "iact24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 1"
                             res.model = "iact24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 6,
                                 unitid: settings.unitId,
                                 address: 14201,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 1"
                             res.model = "iact24";                             
                         break;                         
                      }
                   }
                   else if(settings.channel == "digital-channel-2"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+40,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 2"
                             res.model = "iact24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+40,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 2"
                             res.model = "iact24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+40,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 2"
                             res.model = "iact24";                             
                         break;            
                      }                      
                      
                   }
                   else if(settings.channel == "digital-channel-3"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+80,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 3"
                             res.model = "iact24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+80,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 3"
                             res.model = "iact24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+80,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 3"
                             res.model = "iact24";                             
                         break;            
                      }                      
                      
                   }
                   else if(settings.channel == "digital-channel-4"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+120,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 4"
                             res.model = "iact24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+120,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 4"
                             res.model = "iact24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+120,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 4"
                             res.model = "iact24";                             
                         break;            
                      }                      
                      
                   }  
                   else if(settings.channel == "digital-channel-5"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+160,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 5"
                             res.model = "iact24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+160,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 5"
                             res.model = "iact24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+160,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 5"
                             res.model = "iact24";                             
                         break;            
                      }                      
                      
                   }  
                   else if(settings.channel == "digital-channel-6"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+200,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 6"
                             res.model = "iact24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+200,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 6"
                             res.model = "iact24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+200,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 6"
                             res.model = "iact24";                             
                         break;            
                      }                      
                      
                   } 
                   else if(settings.channel == "digital-channel-7"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+240,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 7"
                             res.model = "iact24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+240,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 7"
                             res.model = "iact24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+240,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 7"
                             res.model = "iact24";                             
                         break;            
                      }                      
                      
                   }                                                                                                         
                break;

                case 'iatl24':
                   if(settings.channel == "digital-channel-1"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 1"
                             res.model = "iatl24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 1"
                             res.model = "iatl24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 1"
                             res.model = "iatl24";                             
                         break;                         
                      }
                   }
                   else if(settings.channel == "digital-channel-2"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+40,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 2"
                             res.model = "iatl24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+40,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 2"
                             res.model = "iatl24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+40,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 2"
                             res.model = "iatl24";                             
                         break;            
                      }                      
                      
                   }
                   else if(settings.channel == "digital-channel-3"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+80,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 3"
                             res.model = "iatl24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+80,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 3"
                             res.model = "iatl24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+80,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 3"
                             res.model = "iatl24";                             
                         break;            
                      }                      
                      
                   }
                   else if(settings.channel == "digital-channel-4"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+120,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 4"
                             res.model = "iatl24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+120,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 4"
                             res.model = "iatl24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+120,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 4"
                             res.model = "iatl24";                             
                         break;            
                      }                      
                      
                   }  
                   else if(settings.channel == "digital-channel-5"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+160,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 5"
                             res.model = "iatl24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+160,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 5"
                             res.model = "iatl24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+160,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 5"
                             res.model = "iatl24";                             
                         break;            
                      }                      
                      
                   }  
                   else if(settings.channel == "digital-channel-6"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+200,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 6"
                             res.model = "iatl24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+200,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 6"
                             res.model = "iatl24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+200,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 6"
                             res.model = "iatl24";                             
                         break;            
                      }                      
                      
                   } 
                   else if(settings.channel == "digital-channel-7"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+240,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 7"
                             res.model = "iatl24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+240,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 7"
                             res.model = "iatl24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+240,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 7"
                             res.model = "iatl24";                             
                         break;            
                      }                      
                      
                   }                                                                                                         
                break;


                case 'rca-ic60-ti24':
                   if(settings.channel == "digital-channel-1"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 1"
                             res.model = "rca-ic60-ti24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 1"
                             res.model = "rca-ic60-ti24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 1"
                             res.model = "rca-ic60-ti24";                             
                         break;                         
                      }
                   }
                   else if(settings.channel == "digital-channel-2"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+40,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 2"
                             res.model = "rca-ic60-ti24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+40,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 2"
                             res.model = "rca-ic60-ti24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+40,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 2"
                             res.model = "rca-ic60-ti24";                             
                         break;            
                      }                      
                      
                   }
                   else if(settings.channel == "digital-channel-3"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+80,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 3"
                             res.model = "rca-ic60-ti24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+80,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 3"
                             res.model = "rca-ic60-ti24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+80,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 3"
                             res.model = "rca-ic60-ti24";                             
                         break;            
                      }                      
                      
                   }
                   else if(settings.channel == "digital-channel-4"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+120,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 4"
                             res.model = "rca-ic60-ti24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+120,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 4"
                             res.model = "rca-ic60-ti24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+120,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 4"
                             res.model = "rca-ic60-ti24";                             
                         break;            
                      }                      
                      
                   }  
                   else if(settings.channel == "digital-channel-5"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+160,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 5"
                             res.model = "rca-ic60-ti24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+160,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 5"
                             res.model = "rca-ic60-ti24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+160,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 5"
                             res.model = "rca-ic60-ti24";                             
                         break;            
                      }                      
                      
                   }  
                   else if(settings.channel == "digital-channel-6"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+200,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 6"
                             res.model = "rca-ic60-ti24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+200,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 6"
                             res.model = "rca-ic60-ti24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+200,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 6"
                             res.model = "rca-ic60-ti24";                             
                         break;            
                      }                      
                      
                   } 
                   else if(settings.channel == "digital-channel-7"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+240,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 7"
                             res.model = "rca-ic60-ti24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+240,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 7"
                             res.model = "rca-ic60-ti24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+240,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 7"
                             res.model = "rca-ic60-ti24";                             
                         break;            
                      }                      
                      
                   }                                                                                                         
                break;
                
                
                case 'refelx-ic60-ti24':
                   if(settings.channel == "digital-channel-1"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 1"
                             res.model = "refelx-ic60-ti24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 1"
                             res.model = "refelx-ic60-ti24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 1"
                             res.model = "refelx-ic60-ti24";                             
                         break;                         
                      }
                   }
                   else if(settings.channel == "digital-channel-2"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+40,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 2"
                             res.model = "refelx-ic60-ti24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+40,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 2"
                             res.model = "refelx-ic60-ti24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+40,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 2"
                             res.model = "refelx-ic60-ti24";                             
                         break;            
                      }                      
                      
                   }
                   else if(settings.channel == "digital-channel-3"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+80,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 3"
                             res.model = "refelx-ic60-ti24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+80,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 3"
                             res.model = "refelx-ic60-ti24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+80,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 3"
                             res.model = "refelx-ic60-ti24";                             
                         break;            
                      }                      
                      
                   }
                   else if(settings.channel == "digital-channel-4"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+120,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 4"
                             res.model = "refelx-ic60-ti24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+120,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 4"
                             res.model = "refelx-ic60-ti24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+120,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 4"
                             res.model = "refelx-ic60-ti24";                             
                         break;            
                      }                      
                      
                   }  
                   else if(settings.channel == "digital-channel-5"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+160,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 5"
                             res.model = "refelx-ic60-ti24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+160,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 5"
                             res.model = "refelx-ic60-ti24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+160,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 5"
                             res.model = "refelx-ic60-ti24";                             
                         break;            
                      }                      
                      
                   }  
                   else if(settings.channel == "digital-channel-6"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+200,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 6"
                             res.model = "refelx-ic60-ti24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+200,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 6"
                             res.model = "refelx-ic60-ti24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+200,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 6"
                             res.model = "refelx-ic60-ti24";                             
                         break;            
                      }                      
                      
                   } 
                   else if(settings.channel == "digital-channel-7"){
                      switch(settings.data){
                         case "status":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14200+240,
                                 quantity: 1,
                             };
                             res.topic = "status";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 7"
                             res.model = "refelx-ic60-ti24";
                         break;
                         case "counters":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14212+240,
                                 quantity: 6,
                             };
                             res.topic = "counters";
                             res.format = "uint32";
                             res.unit = "";
                             res.channel = "Digital channel 7"
                             res.model = "refelx-ic60-ti24";                             
                         break;
                         case "commands":
                             res.payload = {
                                 fc: 3,
                                 unitid: settings.unitId,
                                 address: 14201+240,
                                 quantity: 1,
                             };
                             res.topic = "commands";
                             res.format = "bitmap";
                             res.unit = "";
                             res.channel = "Digital channel 7"
                             res.model = "refelx-ic60-ti24";                             
                         break;            
                      }                      
                      
                   }                                                                                                         
                break;            
                    
                }
            
          }
          // Write mode
          else if (settings.mode == "write"){
            
               // To do              
            
          }
          
          node.send(res);
      });
  }
  RED.nodes.registerType("smartlink", smartlinkNode);
}
