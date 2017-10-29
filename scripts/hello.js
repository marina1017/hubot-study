'use strict';
module.exports = (robot) => {
    robot.hear(/hello>/i, (msg) => {
        const username = msg.message.user.name;
        msg.send('Hello, ' + username);
    });
    robot.hear(/pai>/i, (msg) => {
	const username = msg.message.user.name;
        const lots = ['(  ・ 　λ　 ・   )Hカップ', '(・　人　・)Gカップ', '(・ 人 ・)Fカップ', '(・人・)Eカップ', '(・   ・)Dカップ', '(・ ・)Cカップ', '(     )Bカップ', '|     |Aカップ'];
        const lot = lots[Math.floor(Math.random() * lots.length)];
        msg.send(username + 'は' + lot + 'です');	
    });
};
