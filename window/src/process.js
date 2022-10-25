const { existsSync, readdir, statSync, readdirSync } = require('fs')
const { homedir, } = require('os')
const path = require('path')
const Track = require('./track')
function getMusicasOfDirectory(directory) {
	if (existsSync(directory) && statSync(directory).isDirectory()) {
		const musicas = readdirSync(directory)
		console.log(musicas)
	}
}
async function getDirMusic() {
	return new Promise((res, rej) => {
		const directory = path.join(homedir(), `Music`)

		if (existsSync(directory)) {
			readdir(directory, function (err, dirsOrFiles) {
				if (err) return rej(new Error("[Erro] " + err.message))
				const trackThisDirectory = dirsOrFiles
					.filter(dir => statSync(path.join(directory, dir)).isFile())
					.filter(filename => /(?:\.mp3|\.m4a|\.ogg)/.test(filename))
					.map(filename => new Track(directory, filename))

				const trackOtherDirectory = dirsOrFiles
					.filter(dir => statSync(path.join(directory, dir)).isDirectory())
					.map(dir => ({
						nome: dir,
						folder: readdirSync(path.join(directory, dir))
					}))
				console.log("(>>>)", trackOtherDirectory)
				return res(trackThisDirectory)
			})
		} else {
			return rej(new Error("Directorio Music não existe"))
		}

	})

}
// getDirMusic().then(console.log)
getDirMusic().then(console.log)