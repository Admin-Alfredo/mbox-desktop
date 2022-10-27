const { existsSync, readdir, statSync, readdirSync, stat } = require('fs')
const { homedir } = require('os')
const path = require('path')
const os = require('os')
const Track = require('./track');
function _getMusicasOfDirectory(directory, callback) {
	7// 1. verificar se é um directorio
	// 2. ler os ficheiros destes directoris 
	// 2.1 verificando se é um ficheiro se é for 
	// 2.3 verificar se é do tipo informado
	// 2.4 transformar em uma track
	// 2.5 emittir o evento [TRACK_ADD]

	if (existsSync(directory) && statSync(directory).isDirectory()) {
		const RootDir = readdirSync(directory)
		RootDir
			.filter(dir => statSync(path.join(directory, dir)).isFile())
			.filter(filename => /(?:\.mp3|\.m4a|\.ogg|\.mpga)$/.test(filename))
			.map(filename => new Track(directory, filename))
			.map(track => callback(track))

		RootDir
			.filter(dir => existsSync(path.join(directory, dir)))
			.map(dir => path.join(directory, dir))
			.filter(dir => statSync(dir).isDirectory())
			.map(dir => _getMusicasOfDirectory(dir, callback));
		return;
	}
}
_getMusicasOfDirectory(path.join(os.homedir(), 'Music'), function(track){
    console.log(track)
 })


