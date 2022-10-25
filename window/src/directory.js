const { existsSync, readdir, statSync } = require('fs')
const { homedir, } = require('os')
const path = require('path')

exports.getDirMusic = async function () {
  return new Promise((res, rej) => {
		const musicDir = path.join(homedir(), `Music`)
			
		if(existsSync(musicDir)){
			readdir(musicDir, function(err, dirsOrFiles){
				if(err) return rej( new Error("[Erro] "+err.message))
				const userDirs= dirsOrFiles
									.filter(dir => statSync(path.join(musicDir, dir)).isFile())
									.filter(filename => /(?:\.mp3|\.m4a|\.ogg)/.test(filename))
									.map(filename => {
										let ext = path.extname(filename)
										let name = path.basename(filename, ext)
										let source = path.join(musicDir, filename)
										let size = statSync(source).size
										let fullDirname = path.dirname(source)
										let splitedDirname = fullDirname.split(path.sep)
										let dirname = splitedDirname[splitedDirname.length - 1]
										return { File: { ext, name, size }, source, fullDirname, dirname }
									})
									
				return res(userDirs)
			 })
		}else{
			return rej(new Error("Directorio Music não existe"))
		}
		
	})

}
// getDirMusic().then(console.log)