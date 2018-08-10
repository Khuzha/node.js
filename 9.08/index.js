switch (browser) {
  case 'IE':
    alert( 'О, да у вас IE!' );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Да, и эти браузеры мы поддерживаем' );
    break;

  default:
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}

//---------------------------------------- они все равны

var browser;

if (browser === IE) {
	console.log("О, да у вас IE!");
} else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
	console.log('Да, и эти браузеры мы поддерживаем');
} else {
	console.log('Мы надеемся, что и в вашем браузере все ок!');
}

//---------------------------------------- и даже этот:

var ans = (browser === IE) ? 'О, да у вас IE!':
	(browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") ? 'Да, и эти браузеры мы поддерживаем':
	'Мы надеемся, что и в вашем браузере все ок!';
	console.log(ans);