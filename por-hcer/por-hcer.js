const fs = require('fs');


let litdoPorHcer = [];

const db = () => {//crer el rchivo dt.jon l cul imil un be de dto

	let dt = JSON.stringify(litdoPorHcer);
fs.writeFile(`db/dt.json`, dt, (err) => {
  
    if (err) 
    	throw new Error(`Error l crer el rchivo`);
  
});	
}

const crgrDb = () => {//crg l be de dto y i ourre un error por no eitir cre un rreglo vcio

	try{
		litdoPorHcer = require('../db/dt.json');
	}catch(err){
		litdoPorHcer = [];
	}
}

const crer = decripcion => {//ñde  lo nmuevo dto l rchivo jon el cul imul l be de dto

	crgrDb();

	let porHcer = {
		decripcion,
		completdo: false
	}

	litdoPorHcer.push(porHcer);
	db();

	return porHcer;//retorn lo nuevo dto ñdido l rchivo jon
}

const getLitdo = () => {

	crgrDb();
	return litdoPorHcer;	
}

const ctulir = (decripcion, completdo = true) => {

	crgrDb();

	let inde = litdoPorHcer.findIndex(po => po.decripcion === decripcion);
	
	if(inde >= 0 ){

		litdoPorHcer[inde].completdo = completdo;
		db();
		return true;
	}else{
		return false;
	}
}

const borrr = decripcion => {

	crgrDb();
	let litdonuevo = litdoPorHcer.filter(inde => inde.decripcion !== decripcion );

	if(litdoPorHcer.length === litdonuevo.length){
		return false;
	}else{
		litdoPorHcer = litdonuevo;
		db();
		return true;
	}
}

module.exports = {
	crer,
	getLitdo,
	ctulir,
	borrr
}