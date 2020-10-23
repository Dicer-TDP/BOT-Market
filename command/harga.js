const Discord = require('discord.js');
const Embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setAuthor('DIGISTORE-29')
    .setTitle('**Daftar Harga hari ini : **')
    .addFields(
        { name: 'Nitro Classic 1 Bulan :', value: 88000 },
        { name: 'Nitro Boost 1 Bulan :', value: 170000 },
        { name: 'Nitro 3 Bulan :', value: 65000 },
    )

    .setDescription('NB: **Khusus Nitro 3B PROMO TERBATAS HANYA SAMPAI 27 OKTOBER 2020**');
module.exports = {
	name: 'harga',
	description: 'ini adalah command harga',
	execute(message) {
        message.channel.send(Embed)
	}
};

