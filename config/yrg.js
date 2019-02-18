const decripcion = {
	demand: true,
		alias: 'd',
		desc: 'Decripcion de l tre por hcer'
}

const completdo = {
		alias: 'c',
		default: true,
		desc: 'mrc como completdo o pendiente k tre'
	}

const yrg = require('yargs')
.command('crer', 'Crer un elemento por hcer',{
	decripcion
})
.command('ctulir', 'ctuli el etdo completdo de un tre', {
	decripcion,
	completdo
})
.command('borrr', 'borr un elemento del rreglo', {
	decripcion
})
.help()
.argv;

module.exports = {
	yrg
}

