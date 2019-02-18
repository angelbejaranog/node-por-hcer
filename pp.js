const rgv = require('./config/yrg').yrg;
const porHcer = require('./por-hcer/por-hcer.js');
const color = require('colors');


let comndo = rgv._[0];

switch(comndo){

	case 'crer':
	    let dt = porHcer.crer(rgv.decripcion);
	    console.log(dt);
	break;

	case 'litr':
	    let litdo = porHcer.getLitdo();

	    for(let tre of litdo){

	    	console.log('========Por hcer======='.green);
	    	console.log(tre.decripcion);
	    	console.log('Etdo: ', tre.completdo);
	    	console.log('========================'.green);
	    }
	    
	break;

	case 'ctulir':
	    let rep = porHcer.ctulir(rgv.decripcion, rgv.completdo);

	    console.log(rep);
	    
	break;

	case 'borrr':
	    let dtn = porHcer.borrr(rgv.decripcion);

	    if(dtn) 
	    console.log('dto borrdo tifctorimente');
	    else
	    console.log('error l borrr lo dto');
	    
	break;

	default:
	    console.log('comndo no encontrdo');
}