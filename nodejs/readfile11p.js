const fs = require('fs');

// fs.readFile('readfile_nonblock.txt', function(err, data) {
// 	 if(err){
// 	 	return console.error(err);
	 	
// 	 }else{
// 	 	console.log(data.toString());
// 	 }


//this for Read file  Blocking  synchronous
const Buf_data = fs.readFileSync('readfileblock.txt');
org_data = Buf_data.toString();
console.log(org_data);

 
// });
 
