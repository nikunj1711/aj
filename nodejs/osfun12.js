



const os = require('os');




// OS type 
console.log('type : ' + os.type());
 // OS platform
 console.log('platform : ' + os.platform()); 
// Total system memory 
console.log('total memory : ' + os.totalmem() + " bytes."); 
// Total free memory 
console.log('free memory : ' + os.freemem() + " bytes.");
//userInfo
//console.log('userInfo : ' + os.userInfo());
//hostname
console.log('hostname : ' + os.hostname());
//release
console.log('release : ' + os.release());
//console.log('uptime : ' + os.uptime());
//tmpdir()
console.log('default directory for temporary files : ' + os.tmpdir());


console.log('endianness : ' + os.endianness()); 

