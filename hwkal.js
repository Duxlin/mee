// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'wa.me/2347082252014'
global.ig = 'official_quadhir' // ubah aja
global.email = 'botdux@gmail.com' //serah
global.region = 'Alien Realm' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Quadhir' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['2347082252014','46724001843'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = '𝙳𝚄𝚇-𝙱𝙾𝚃' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '𝙳𝚄𝚇-𝙱𝙾𝚃' // ubah aja ini nama sticker
global.author = '𝙳𝚄𝚇' // ubah aja ini nama sticker
global.prefa = ['.']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = false
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})