const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250151191073";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_29_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU0LFxuICAgICAgICAzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDM0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDcwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUwLFxuICAgICAgICA1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDM3LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAzMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDMyLFxuICAgICAgICA2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjksXG4gICAgICAgIDYxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MixcbiAgICAgICAgNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3LFxuICAgICAgICA1MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU1LFxuICAgICAgICA2MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0LFxuICAgICAgICA3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOG9pY0R5S2N0Q0QxSk1VME9wMnZFOWpVQnQ0VjVMeHJ4emNNdFBWTE5XWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVUJLTVoyMzlSaDJLOThpemxHeVp1QVwiLFxuICBcInBob25lSWRcIjogXCJmZWQ5ZWJmZS1lZDljLTQ5MzEtYTQwYy1hMDVhNTlmYzQ2NzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzYsXG4gICAgICAxMSxcbiAgICAgIDIxNixcbiAgICAgIDE5NyxcbiAgICAgIDE3OSxcbiAgICAgIDMzLFxuICAgICAgNzcsXG4gICAgICAyMzUsXG4gICAgICA1LFxuICAgICAgNDcsXG4gICAgICAxMTQsXG4gICAgICA2OCxcbiAgICAgIDEyMixcbiAgICAgIDE1NSxcbiAgICAgIDM3LFxuICAgICAgNixcbiAgICAgIDg3LFxuICAgICAgOTMsXG4gICAgICAxOTksXG4gICAgICA0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEwLFxuICAgICAgMTc3LFxuICAgICAgNDQsXG4gICAgICAxMTAsXG4gICAgICAxNzcsXG4gICAgICA3MixcbiAgICAgIDI0MSxcbiAgICAgIDY5LFxuICAgICAgMjM0LFxuICAgICAgMzYsXG4gICAgICAxMzYsXG4gICAgICAyMjQsXG4gICAgICAxMTIsXG4gICAgICA3NSxcbiAgICAgIDQwLFxuICAgICAgOTUsXG4gICAgICAxNTcsXG4gICAgICA1MCxcbiAgICAgIDIwMyxcbiAgICAgIDExNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BQMml0TUVFSWFlNWNNR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia3hRenloSjJleHQwN09DR3ZoV1BMcG1paUYrb2dXTEpIMjZycDA4UEFDVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjVm1zQWpYbjNDczFhQ1BkYjB6SkhBMWNYdXdGYU1QYWlSSTdmai9FOHVvUDk2TjR4ZWpIUzlza2QyMUVCTVVKL21mMXYrY2hvQk9OTlVxeUlkUEdCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaRTVnL01BMklQTk9WMmNTWHdWQm1mbDlwL0lIS2lhM2MyS250ditUcHRxNzZvK2llQWlzeVBBckxUOHZyN3IwWERaWFFWbUt1T1U2VUM5dTN6U2RqQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTUxMTkxMDczOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2VtPCdlpvwnZaG8J2Wk8KywrLCslwiLFxuICAgIFwibGlkXCI6IFwiNTQwNjEyNTY3Mjg3NjU6MTBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU1MTE5MTA3MzoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTI3ODA1NTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJOEpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUk4SS5qc29uIjogIntcImtleURhdGFcIjpcIlBQbVZLbzkvQ3Y0bklGR1dNcVl5eVh4MTdrejBRRTh0TlIraXVWallGMEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI0Nzk4NDQ5OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSThKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNUkwcWtndThMVTV1V2REVVdnUHhkbmNiNzJQc2NvRi9CU3N1aFQ4TVJHST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjQ3OTg0NDk5LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSThLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU0k5VGNJZ3JCYTNoOUVuUG95dGd6MG01RlpUMCsyOWlEK05YNldpMnhFMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjQ3OTg0NDk5LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwyLDQsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSThMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSUxLQlRGREY4TGdBRExTMk51UVZxSkhoQzNVYVN6dWNJU1oxdFNWV3VCaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjQ3OTg0NDk5LFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCw0LDUsNl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSThNLmpzb24iOiAie1wia2V5RGF0YVwiOlwibUNGR1J6VUNHbzZZZWxBeGJwejFmcGtZMmMwekFvMFAvQ2NHVHZUMFRWbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjQ3OTg0NDk5LFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCw0LDVdfSxcInRpbWVzdGFtcFwiOlwiMTc1Mjc3MTk1NTU0NVwifSIKfQ== "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
