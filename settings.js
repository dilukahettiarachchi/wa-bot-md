/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█

WHATSAPP BOT BY MR NIMA ( DARK MAKER OFC )

WHATSAPP - 94719574492
SUPPORT GROUP - https://t.me/queenelisasupport
YOUTUBE - http://youtube.com/MRNIMAOFC


ℹ️ SPECIAL INFORMATION ℹ️

Welcome to Queen Elisa Whatsapp Bot settings.js.
Information provided to you.
If you use true or false
true = if you want to do that task
false = return if you don't want to do the task.
When you change the ones inside the commas, change them correctly.
If you are using Sex Video Downloader, you need to get permission from Bot Devoper. 

*/

const fs = require('fs')
const chalk = require('chalk')

/*
⚙️ BOT SETTINGS  ⚙️
*/
//👇 if you need seen massage use " true " , මැසේජ් සීන් කරන්න ඔනි නම් true දාන්න ඔනි නැත්තම් false දාන්න
global.READ_MASSAGE = true
//👇 enable DISABLE Girls Voice Reply , Auto Voice Reply යවන්න ඔනි නම් true දාන්න 
global.VOICE_REPLY = true
//👇 Do you want show time on your bio use "true" want DISABLE use "false" , ස්වයං ක්‍රීය Bio එක ඔනි නම් true දාන්න
global.AUTO_BIO = true
//👇 Inbox massage block PM block , ඉන්බොක් බ්ලොක් 
global.INBOX_BLOCK = false
//👇 Auto react  , ස්වයංක්‍රීය රියක්ට්
global.AUTO_REACT = true
//👇 Bad word Auto delete ( you must add bad words ) නරක වචන ඩිලීට් කිරීම , ඔබ විසින් වචන දැමිය යුතුය 
global.ANTI_BADWORD = true
//👇 Kick And Auto Delete Group link Senders , ස්මූහ ස්බැදි දමන අයව ඉවත් කරයි
global.ANTI_G_LINK = true
//👇 212 Number block
global.NUMBER_212_BLOCK = false
//👇 Send Welcome ( true or false ) වෙල්කම් ගූඩ් බායි මැසේජ් යවන්න ඔනි නම් 
global.SEND_WELCOME = true
global.SEND_GOODBYE = true
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Send Auto reply , sticker , voice Use true and costemize your own 
global.AUTO_FUNCTION = true
//👇 Put Bot Offline
global.BOT_OFFLINE = false
//👇 Only PreFix [ true / false ]
global.ONLY_PREFIX = false
//👇 This uplaod youtube videos without limit ⚠️ if you use this you must have paid sever
global.UPLOAD_MAX = false
//👇 Desabale Bot inbox ඉන්බොක්ස් බ්ලොක් නොවී වැඩ නොකරන්නනම් 
global.DISABLE_INBOX = false 
//👇 DISABLE inbox message send ඉන්බොක්ස් වැඩනොකරන බවට මැසේජ් එක යැවිම true or false 
global.DISABLE_INBOX_MESSAGE_SEND = false
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = false
//👇 Only Inbox Use ( Only PM Work )
global.INBOX_ONLY_WORK = false
//👇 Auto ChatGPT ( You Must put CHATGPT API KEY For use this )
global.AUTO_OPEN_AI = true
//👇 Bot On Privet
global.PRIVET_BOT = false
//👇 DISABLE Bot Commands But Others Are Working 
global.DISABLE_COMMANDS = false
//👇 DISABLE Bot Commands On Message Send On Off
global.DISABLE_COMMAND_MESSAGE_SEND = false 
global.AUTO_SEEN_STATUS = true



/*
       ✨ BOT INFO SETTINGS ✨
*/
// You Bots Owner Number 
global.owner = ['94764570094'] 
//👇 Your Caption ( Image Video )
global.cap = '© Chuti Suduu Wa Bot Md'
//👇 Your Bot Name
global.botnma =  'Chuti Suduu Wa Bot Md' 
//👇 Your name
global.ownernma =  'Dilla Editz' 
//👇 Sticker Author Name
global.packname =  'Chuti Suduu Wa Bot Md' 
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK කලනව හොදේ !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '🥰'
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ ඉන්න ඔයාගෙ සින්දුව Download වෙන ගමන්...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ ඉන්න ඔයාගෙ සින්දුව Upload වෙන ගමන්...```'
//👇 Menu imoji 
global.MENU_IMOJI = '👸|ℹ️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = 't7ZiMHcFJevdz56daAG8trPA'
//👇 Change Bot Language 
global.LANG = 'EN ,SI'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://telegra.ph/Bot-08-25-12`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `default`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || ``
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || ``
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || ``
//👇 DISABLE PM Block numbers
global.NO_BLOCK = ["94767630074","94764570094"]
//👇 DISABLE download words
global.IMG_BLOCKER = ["xxx","sex","mia","hentai"]
//👇 Open ai API Put Withouth "sk-" ( "sk-" අයින් කරල ඉතුරු ටික දාන්න )
global.CHATGPT_API = 'rEqpPEO71IKqp5Y71aYnT3BlbkFJZUEANNYwYmKn1XTdyx57'
//👇 Sex  video Download Allowed Groups
global.SEX_DOWNLOAD_GROUPS = ['']
//👇 Your Bot Group Link
global.GROUP_LINK = ''
/*

   🍃 OTHER 🍃

*/
global.PORT = process.env.PORT ||  '8000'
global.zenzapi = '01ABEB1E11'
/*

💬 MESSAGE 💬

*/
global.mess = {
    success: '✅ හලී!',
    admin: '*Admin ලට විතලයි අනී !*',
    botAdmin: '*Bot ව admin කලන්නකෝ!*',
    owner: '*සොලී, owner ට විතලයි !*',
    group: '*Groups වල විතලයි !*',
    private: '*Inbox විතලයි!*',
    bot: '*Bot ට විතලයි !*',
    wait: '*♲ තුත්තක් ඉන්න ...*',
    endLimit: 'මට මහන්සීයි අනී , ටිකකින් එන්නම්',
    BLOCK_CMD_MSG : '*⚠️ මෙ මොකක්ද ?*',
    IMG_BLOCK : "ඔවා දන්න එපා , මන් තාම තූතී",
    DISABLE_INBOX : "Inbox එපා Groups වල විතලයී",
    ONLY_SEX_GROUP : "ඔවා දන්න එපා , මන් තාම තූතී",
    DISABLE_CMD : "🚫 සොලී, owner ට විතලයි",
    BAD_DETECT : 'ඔවා දන්න එපා , මන් තාම තූතී',
    BLOCK : 'BLOCK කලනව හොදේ !!!',
    UNBLOCK : 'ඔන්න Unblock කලා',
    KICK : 'යනවා යන්න',
    ADD : 'හේලෝ',
    LEAVE : 'ඇයි යන්නෙ',
    PROMOTE : 'ඔන්න Admin දුන්නා',
    DEMOTE : 'Admin දෙන්න බැ'
}




//other
global.pemilik = ['94764470094'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94764470094'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'Dilla-Editz' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['#','!','.',''] 
global.sp = '👽'
global.weem = 'Chuti Suduu Wa Bot Md'

global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//global.alivelogo = `https://telegra.ph/file/b3f17c16eedf99731a52d.jpg`
global.imgalive = fs.readFileSync('./Media/image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
