// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// AUTHOR : Mr TechX | TecnoProjects
// PROJECT : Mr. Assistant (Telegram Version)
// VERSION : 1.0.1
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// WENAS EXTRAÑO QUE ESTÁ LEYENDO MI CODIGO :)
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.get('/', function(request, response) {
// 	response.sendFile(__dirname + '/views/index.html');
// });
// app.listen(3000, () => console.log(`FUNCIONAMIENTO CORRECTO`));

//----------------[Codigo fuente]----------------

//----------------[Constantes]----------------
const { Telegraf } = require('telegraf');
const config = require("./config/config.json");
const bot = new Telegraf(config.token);

//----------------[Variables]----------------


//--------------[Mensaje de Consola]--------------
console.log("MrAssistant Activado")

//----------------[Listas]----------------

bot.command('cmds', (ctx) => {
    ctx.reply("Mis comandos son:")
    ctx.reply("/start Para presentarme contigo")
    ctx.reply("/cmds Para ver mi lista de comandos")
    ctx.reply("/status Para ver como me encuentro en el lado del sistema")
    ctx.reply("/hola Saludo (Fue mi primer comando y mi comando de prueba)")
    ctx.reply("/crypto_cmds Para ver la lista de comandos de criptomonedas")
    ctx.reply("/version Para ver en que version me encuentro y su fecha de lanzamiento")
    ctx.reply("/version_logs Para ver que se modifico en mi ultima actualización")
    ctx.reply("/my_code Para ver mi codigo fuente ya que mi programador @Mr_TechX lo dejo publico para que puedas ver como es que existo")
    ctx.reply("/my_developer Para ver los proyectos y redes de Mi programador :)")
    ctx.reply("/dev_networks Para ver las redes de mi programador")
});

bot.command('crypto_cmds', (ctx) => {
    ctx.reply("Mis comandos para ver la ultima actualización de precios de las criptomonedas mas")
    ctx.reply("/all_cryptos")
    ctx.reply("/precio_bitcoin")
    ctx.reply("/precio_ethereum")
    ctx.reply("/precio_monero")
    ctx.reply("/precio_litecoin")
    ctx.reply("/precio_dogecoin")
});

bot.command('clases', (ctx) => {
    ctx.reply("Puedes ejecutar el comando /all_clases para ver el listado de todas las clases pero yo te recomendaria usar los comandos /clases_lunes, /clases_martes etc. para no saturarte de mensajes, pero ejecuta el que gustes, solo es una recomendación :)")
});

//----------------[Comandos Centrales]----------------
bot.start((ctx) => 
    ctx.reply('Hola Bienvenid@ ' + ctx.from.first_name + ' ' + ctx.from.last_name + ',' + ' soy MrAssistant, soy un Bot :), puedes ejecutar el comando /cmds para ver mi lista de comandos')
);

// bot.command('cmds', (ctx) => {
//     ctx.reply("Mis comandos son:")
//     ctx.reply("/start Para presentarme contigo")
//     ctx.reply("/cmds Para ver mi lista de comandos")
//     ctx.reply("/status Para ver como me encuentro en el lado del sistema")
//     ctx.reply("/hola Saludo (Fue mi primer comando y mi comando de prueba)")
//     ctx.reply("/crypto_cmds Para ver la lista de comandos de criptomonedas")
//     ctx.reply("/version Para ver en que version me encuentro y su fecha de lanzamiento")
//     ctx.reply("/version_logs Para ver que se modifico en mi ultima actualización")
//     ctx.reply("/my_code Para ver mi codigo fuente ya que mi programador @Mr_TechX lo dejo publico para que puedas ///     ver como es que existo")
//     ctx.reply("/my_developer Para ver los proyectos y redes de Mi programador :)")
//     ctx.reply("/dev_networks Para ver las redes de mi programador")
// });

bot.command('status', (ctx) => {
    ctx.reply("Todo bien por ahora, mi sistema funciona correctamente, quieres ver como funcionoo? ejecuta el comando /my_code y veras todas mis lineas de codigo :)")
});

bot.command('hola', (ctx) => {
    ctx.reply("Holaaa!! Soy MrAssistant")
});

bot.command('version', (ctx) => {
    ctx.reply("Actualmente estoy en mi verison 1.0.1 que fue lanzada el 16/ago/2021 por TecnoProjects")
});

bot.command('version_logs', (ctx) => {
    ctx.reply("En esta version fue mejorada mi funcionalidad, aunque para los usuarios sea casi lo mismo, dentro de mi codigo hay muchas diferéncias")
});

bot.command('my_code', (ctx) => {
    ctx.reply("Puedes ver mi codigo fuente en el Github de mi programador, ahi puedes ver mis versiones pasadas y mi version actual en el lado del codigo https://github.com/Mr-TechX/MrAssistantTelegram")
});

bot.command('my_developer', (ctx) => {
    ctx.reply("My programador tiene como Nombre MrTechX en casi todos lados, puedes ver sus redes si ejecutas el comando /dev_networks")
});

bot.command('dev_networks', (ctx) => {
    ctx.reply("Twitter - http://bit.ly/twittechX")
    ctx.reply("Instagram - https://bit.ly/ig_techx")
    ctx.reply("Discord Server - https://bit.ly/3vcdM5j")
    ctx.reply("Telegram - @Mr_TechX")
    ctx.reply("Github - bit.ly/github_techX")
    ctx.reply("TecnoProjects - https://github.com/TecnoProjects")
    ctx.reply("Portafolio - https://bit.ly/UlisesCamacho_portafolio")
});

//--------------[Comandos Criptomonedas]--------------
// bot.command('crypto_cmds', (ctx) => {
//     ctx.reply("Mis comandos para ver la ultima actualización de precios de las criptomonedas mas")
//     ctx.reply("/all_cryptos")
//     ctx.reply("/precio_bitcoin")
//     ctx.reply("/precio_ethereum")
//     ctx.reply("/precio_monero")
//     ctx.reply("/precio_litecoin")
//     ctx.reply("/precio_dogecoin")
// });

bot.command('precio_bitcoin', (ctx) => {
    ctx.reply("Bitcoin - 46345.60 USD - 920393.03 MXN (actualizacion 19/08/2021)")
});

bot.command('precio_ethereum', (ctx) => {
    ctx.reply("Ethereum - 3208.06 USD - 63709.95 MXN (actualizacion 19/08/2021)")
});

bot.command('precio_monero', (ctx) => {
    ctx.reply("Monero - 264.70 USD - 5256.77 MXN (actualizacion 19/08/2021)")
});

bot.command('precio_litecoin', (ctx) => {
    ctx.reply("Litecoin - 178.70 USD - 3548.86 MXN (actualizacion 19/08/2021)")
});

bot.command('precio_dogecoin', (ctx) => {
    ctx.reply("Dogecoin - 0.25 USD - 4.96 MXN (actualizacion 19/08/2021)")
});

bot.command('all_cryptos', (ctx) => {
    ctx.reply("ACTUALIZACIÓN 13/08/2021")
    ctx.reply("Bitcoin - 46345.60 USD - 920393.03 MXN")
    ctx.reply("Ethereum - 3208.06 USD - 63709.95 MXN")
    ctx.reply("Monero - 264.70 USD - 5256.77 MXN")
    ctx.reply("Litecoin - 178.70 USD - 3548.86 MXN")
    ctx.reply("Dogecoin - 0.25 USD - 4.96 MXN")
});

//--------------[Comandos Clases]--------------
// bot.command('clases', (ctx) => {
//     ctx.reply("Puedes ejecutar el comando /all_clases para ver el listado de todas las clases pero yo te recomendaria usar los comandos /clases_lunes, /clases_martes etc. para no saturarte de mensajes, pero ejecuta el que gustes, solo es una recomendación :)")
// });

bot.command('clases_lunes', (ctx) => {
    ctx.reply("Lunes 1:00 Fisica - prof. Mario Becerra (https://meet.google.com/kjw-rnhw-ygk)")
});

bot.command('clases_martes', (ctx) => {
    ctx.reply("Martes 7:30 Inglés y Titulación - prof. Juana Bernal (https://meet.google.com/tej-uriq-ysd)")

    ctx.reply("Martes 11:10 Habilidades Digitales - prof. Rocío Sánchez (https://meet.google.com/ptx-wuri-byv)")

    ctx.reply("Una disculpa en caso de que lleguen desordenados perdon, yo no puedo controlar eso :)")
});

bot.command('clases_jueves', (ctx) => {
    ctx.reply("Jueves 7:30 Mod4 Sub1 - prof. Gerardo Sánchez (https://meet.google.com/itj-kdme-fzp)")
});

bot.command('clases_viernes', (ctx) => {
    ctx.reply("Viernes 7:30 Mod4 Sub2 - prof. Andre Sanchez (https://meet.google.com/waz-qjfs-tmt)")

    ctx.reply("Viernes 11:20 Calculo Integral - prof. Carlos Briones (https://meet.google.com/rzg-xscm-bsj)")

    ctx.reply("Viernes 1:00 CTSyV - prof. Armando Monrroy (https://meet.google.com/qdr-ngbz-pgc)")

    ctx.reply("Una disculpa en caso de que lleguen desordenados perdon, yo no puedo controlar eso :)")
});

bot.command('all_clases', (ctx) => {
    ctx.reply("Lunes 7:30 Mod4 Sub1 - prof. Gerardo Sánchez (https://meet.google.com/itj-kdme-fzp)")

    ctx.reply("Martes 7:30 Inglés y Titulación - prof. Juana Bernal (https://meet.google.com/tej-uriq-ysd)")

    ctx.reply("Martes 11:20 Habilidades Digitales - prof. Rocío Sánchez (https://meet.google.com/ptx-wuri-byv)")

    ctx.reply("Miercoles 1:00 Fisica - prof Mario Becerra (https://meet.google.com/kjw-rnhw-ygk)")

    ctx.reply("Jueves 7:30 Mod4 Sub2 - prof Andre Sánchez (https://meet.google.com/waz-qjfs-tmt)")

    ctx.reply("Viernes 11:20 Calculo Integral - prof. Carlos Briones (https://meet.google.com/rzg-xscm-bsj)")

    ctx.reply("Viernes 1:00 CTSyV - prof. Armando Monrroy (https://meet.google.com/qdr-ngbz-pgc)")
    
    ctx.reply("Una disculpa en caso de que lleguen desordenados perdon, yo no puedo controlar eso :)")
});

//-----------------[Soporte]-----------------
bot.on('text', ctx => {
    ctx.reply('._. Creo que ese no es un comando o esta mal escrito, puedes ejecutar /cmds para ver los comandos que tengo :) disculpa las molestias')
});

bot.on('sticker', ctx => {
    ctx.reply('ohh ya veo que te gustan tanto los stickers como a mi :)')
});

bot.on('photo', ctx => {
    ctx.reply('Aun no estoy programado para poder ver fotos o imagenes :( ...Soy ciego xd')
});

bot.on('audio', ctx => {
    ctx.reply('Aun no estoy programado para escuchar audios, soy tremendo sordo xd')
});

bot.on('voice', ctx => {
    ctx.reply('Aun no estoy programado para escuchar audios, soy tremendo sordo xd, pero apuesto que tienes bonita voz :)')
});

bot.on('video', ctx => {
    ctx.reply('Aun no estoy programado para poder ver videos :( ...Soy ciego xd')
})

//----------------[Lanzamiento]----------------
bot.launch();