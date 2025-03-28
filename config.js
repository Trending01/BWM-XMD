const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OiOBj9L3nVHrnJxaquWlDEC4IKeNuahwhRAgiYBBW7/O9b2N01/bAz28tTCsjJybl8byAvMEVTVIPeGygJvkCGmiWrSwR6wKgOB0RAG0SQQdADcHIxB9FseltvOqPdZL/2kv5yeXfDcmO0Bup+sfOCmUxXSWC+gkcblNU+w+EfAAXubm27udDKuWzgaCTpKI5i6VRxqwNFfuHKOt/h5ht/eH0FjwYRYoLzo1nG6IQIzKaonkNMvkffG5mWNkquflZUYWazCw1uY/fODXK0kTdlYMTjuNDukyQ9fo/+gFskGrOIpnDsnJodPaYeb8+v/Apj2WQIQX0r1vbR9ot3+hQfcxSNI5QzzOpv6+7NprfhxmZoG7mp6WAobcZr0y9gbglzwYJO6yaZdbqwV98k3h/UqCuxAZvLsuEXVzWHYnBZXqbFchgJbjk7ky3XZ+FyEXwlPiefWUn/j+6FcVavqZ9ILWIFEyFVRZ3nunY8l9BsIC4lcmrtLMO5Gevge/Q9VxSl9QRB1w0Naw+X0rmeFupqvRs7ztxzk2XRhzNRbi2+6A5ZRf7EcgwT3qksrpyIyp6rysyOnJ0/Ysl9M/EcwTrOY7pWTe8cz3CdDgPEWiNt73nJRh13o/zgsf1N2RW3QhkW3nxvmuhcxNfX541SVI8j0OMfbUDQEVNGIMNF3rwTuG4bwOjioZAg9pQXLG88o2N8TEa3sbE67Co+9Ex3aHTraWFOFysWMqPqxKvTdfsK2qAkRYgoRdEIU1aQeoYohUdEQe/vn22Qoxt7N645TuTb4IAJZUFelVkBo09XPz/CMCyqnHl1HvabBSKgx/16jRjD+ZE2OlY5JGGML6gfQ0ZB7wAzih5tEKELDlGDB8QXd7ghA9HTvK5eXFNRlOPJtaEcF/nHL5KsaJEWvuyhtn+ReF570UJNfpHhXkP8YS+rogDaAH90ptnzWwvti5htFL2fT84WT3DnlFiJsLONDHFPG961RwRFoMdIhdpgD8O0Kv0iRfkfcHetsWWRBcHegFj8tjYcbkjTSTCSZ19w3z0Fvbdfc6pfRA2eZPDGbOLNQBucnhHEzc15URREQVTkrtqT5L/oj2ujIyzLHzliDeyH5s2GCDGIM9pUd0qsC6W2Od3nJ6JalkGPev+og18efYb9PUx1mtD+uZwvDiZ/L527JW2FbuzcdIUb3BXTHG4WOocv2Bf1138BAT2QroruIFxe3cybKabdPR4pDFpjG4VBfRC8uMjVpU1nvOrP7tFFv/Dcuu+2OkMbsf6tM89akno+begy8PEV8lN7WR87ff21Oe09K18PUwPC6RMzjdlOT7JU2JwWQjBV5OASURytrIF4DrFtnkMjXNSKR8SDIapMMog2UsvczKf8fIu62d5dLC9z66yPc30Y6+81fI6B7GP84mdB3j6SdcDoOc1y2Dj0H958zTj3aH+B+BiPv8mREZZjRT+ffW50c0LZD2+V5VRbP1y4mq62boax4nRnTKRUu4LH42cblBlkh4KcQA/gZ2dAG2SQMv1XS318QpTBUwl6vCKJvCJ0RaENTrVelh6D7LPcQG+ePumCxz9l/EzQ+AcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Trending Boss",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "13323237658",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'TRENDING_BOSS',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise Ã  jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
