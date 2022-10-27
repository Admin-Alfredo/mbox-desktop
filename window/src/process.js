const { existsSync, readdir, statSync, readdirSync, stat } = require('fs')
const { homedir } = require('os')
const path = require('path')
const Track = require('./track')
const { emitter: TrackEmitter } = require('./track')

function getMusicasOfDirectory(directory) {
	// 1. verificar se é um directorio
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
			.map(track => Track.emitter.emit('TRACK_ADD', track))

		RootDir
			.filter(dir => existsSync(path.join(directory, dir)))
			.map(dir => path.join(directory, dir))
			.filter(dir => statSync(dir).isDirectory())
			.map(dir => getMusicasOfDirectory(dir));
		return;
	}
}
getMusicasOfDirectory(path.join(homedir(), `Music`))
	// async function getDirMusic() {
	// 	return new Promise((res, rej) => {
	// 		const directory = path.join(homedir(), `Music`)

	// 		if (existsSync(directory)) {
	// 			readdir(directory, function (err, dirsOrFiles) {
	// 				if (err) return rej(new Error("[Erro] " + err.message))
	// 				const trackThisDirectory = dirsOrFiles
	// 					.filter(dir => statSync(path.join(directory, dir)).isFile())
	// 					.filter(filename => /(?:\.mp3|\.m4a|\.ogg)/.test(filename))
	// 					.map(filename => new Track(directory, filename))


	// 				return res(trackThisDirectory)
	// 			})
	// 		} else {
	// 			return rej(new Error("Directorio Music não existe"))
	// 		}

	// 	})

	// }
// getDirMusic().then(console.log)
// getDirMusic().then(console.log)