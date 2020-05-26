

ans = game2();

function game2() {
	var a = parseInt(Math.random() * 100);
	return a;
}

function game1() {
	document.getElementById('box').innerHTML =
			'<br><br><br>' +
	 		'<div id="answer4isla">' +
			'<h3 id="comment"> Введите число </h3>' +
			'<form onsubmit="gamereturn(1)">' +
				'<input type="text" size="20" id="uansw1">' +
				'</form>' +
			'<a href="#" onclick="gamereturn(1)" id="numberclick">Ход Игрока №1</a>' +
			'</div>'
}


function gamereturn(a) {

	var uansw = document.getElementById("uansw1").value;

	uansw = parseInt(uansw);  // фунци parseInt превращает в число и убирает дробную часть
/*
	if (isNaN(uansw)) {
		b.innerHTML = "Необходимо ввести число!";
		break;
	}*/

	var c = document.getElementById("numberclick");

	if (a == 2) {
		document.getElementById('box').innerHTML =
			'<br><br><br>' +
	 		'<div id="answer4isla">' +
			'<h3 id="comment"> Введите число </h3>' +
			'<form onsubmit="gamereturn(1)">' +
				'<input type="text" size="20" id="uansw1">' +
				'</form>' +
			'<a href="#" onclick="gamereturn(1)" id="numberclick">Ход Игрока №1</a>' +
			'</div>'
	} else if (a == 1) {
		document.getElementById('box').innerHTML =
			'<br><br><br>' +
	 		'<div id="answer4isla">' +
			'<h3 id="comment"> Введите число </h3>' +
			'<form onsubmit="gamereturn(2)">' +
				'<input type="text" size="20" id="uansw1">' +
				'</form>' +
			'<a href="#" onclick="gamereturn(2)" id="numberclick">Ход Игрока №2</a>' +
			'</div>'
	}
	var b = document.getElementById("comment");
	for ( ; ; ) {		 	
			if (uansw > ans) {
				b.innerHTML = "Ваш ответ слишком большой";
				break;
			} else if (uansw < ans) {
				b.innerHTML = "Ваш ответ слишком маленький";
				break;
			} else if (uansw == ans) {
				b.innerHTML = "Вы угадали! Игрок №" + a + " победил!";
				break;
			} else {
				b.innerHTML = "Необходимо ввести число!";
				break;
			}
			
			
		} 
}






/*function play4isla(a) {
	if (a == 1) {
		document.getElementById('box').innerHTML =
		'<br><br><br>' +
	 	'<div id="answer4isla">' +
			'<h3>ololo</h3>' +
			'<input type="text" size="20" name="userAnswer1">' +
			'<a href="#" onclick="play4isla(2)">Игрок №1</a>' +
		'</div>'
	} else if (a == 2) {
		var answ = parseInt(Math.random() * 100); // Math.random() дает число от 0 до 1 включительно рандомное
		var userAnswer = document.getElementById("userAnswer1")value;
		alert(userAnswer);
		for (var i = 1; i <= 2; i++) {
		 
			var userAnswer = document.getElementById("userAnswer1s").value;
			alert("userAnswer")

			userAnswer = parseInt(userAnswer);  // фунци parseInt превращает в число и убирает дробную часть

			if (userAnswer > answer) {
				alert("Ваш ответ слишком большой.");
			} else if (userAnswer < answer) {
				alert("Ваш ответ слишком маленький");
			} else if (userAnswer == answer) {
				alert("Вы угадали!");
				break;
			} else {
				i--;
				alert("Необходимо ввести число!");
			}
			if (i == 2) {
				i = 0;
			}
		} 
	} 
	
}*/


function Deposit_calculation() {
	alert("Добро пожаловать в калькулятор для расчета вклада") ;
	var d = ("Пожалуйста, вводите только цифры.") ;
	

	for (var a = +prompt("Введите сумму вклада") ; a <= 0 || isNaN(a) ; ) {
		alert (d) ;
		var a = +prompt("Введите сумму вклада")	;
	}	 

	for (var b = +prompt("Введите % ежегодных начислений") ; b <= 0 || isNaN(b) ; ) {
		alert (d) ;
		var b = +prompt("Введите % ежегодных начислений") ;
	}

	for (var c = +prompt("На какой период хотите сделать вклад (пишите только цифру)") ; c <= 0 || isNaN(c) ; ) {
		alert (d) ;
		var c = +prompt("На какой период хотите сделать вклад (пишите только цифру)") ;
	}
			
	for (var i = 1 ; i <= c ; i++) {
		var y = a*(1+(b/100))**i ;	
		alert("Год № " + i + ". Ваша сумма станет - " + y.toFixed(2)) ;
	} 
}


function answer(a) {
	if (a == 1) {
		document.getElementById('box').innerHTML =
	 " <p> РАД, ЧТО ТЫ ПРИЗНАЛ ЭТО </p> "	+ cont(1)
	} else if (a == 2) {
		document.getElementById('box').innerHTML =
	 " <p> БОЮСЬ КОЛОНКА С ТОБОЙ ПОСПОРИТ </p> "	+ cont(1)
	} else if (a == 3) {
		document.getElementById('box').innerHTML =
	 " <p> АХ ТЫ ПИДОР ГРОМКИЙ </p> "	+ cont(1)
	} else if (a == 4) {
		document.getElementById('box').innerHTML =
	 " <p> ЕСЛИ БЫ У ТЕБЯ БЫЛ УМНЫЙ ТОЛЧОК, ТАКОГО БЫ НЕ СЛУЧИЛОСЬ </p> "	+ cont(1)
	}
}

function answer1(a) {
	if (a == 0) {
		document.getElementById('box').innerHTML =
		'<p>Вопрос 2: <br> <br>' +
				'ТЫ ОБЫЧНАЯ ПЛАНЕТА В СОЛНЕЧНОЙ СИСТЕМЕ @ НАЗВАЛИ В ЧЕСТЬ КАКОГО-ТО ВОИНСТВЕННОГО БОГА @ ' +
				'ИЛИ В ЧЕСТЬ ШОКОЛАДКИ @ СПОКОЙНО НАМАТЫВАЕШЬ КРУГИ ВОКРУГ СВОЕЙ ЗВЕЗДЫ УЖЕ ДОВОЛЬНО БОЛЬШОЕ ' +
				'КОЛИЧЕСТВО МИЛЛИАРДОВ ЛЕТ @ ПОСЛЕДНИЕ 10 ЛЕТ НА ТВОЮ ПОВЕРХНОСТЬ ПРИЛЕТАЮТ КАКИЕ-ТО ОМЕЖКИ, ' +
				'ИЛОНЫ МАСКИ @ РАССКАЗЫВАЮТ ТЕБЕ СВОИ БУГУРТЫ <br>' +
				'ТВОИ ДЕЙСТВИЯ? <br> <br>' +
				'<a href="#" onclick="answer1(1);">НА РЕАКТИВНОЙ ТЯГЕ УЛЕТЕТЬ В ДРУГУЮ ГАЛАКТИКУ</a>' +
				'<a href="#" onclick="answer1(2);">ЗАРАЗИТСЯ ЧЕЛОВЕЧЕСТВОМ</a>' +
				'<a href="#" onclick="answer1(3)">РАЗБУДИТИЬ МАРСИАН</a>' + 
				'<a href="#" onclick="answer1(4)">ОБОСРАТЬСЯ И ПРОСНУТСЯ ЛУНОЙ</a> </p>'
	} else if (a == 1) {
		document.getElementById('box').innerHTML =
		"<p> ГОВОРЯТ НА АНДРОМЕДЕ НОРМ </p>" + cont(2)
	} else if (a == 2) {
		document.getElementById('box').innerHTML =
		"<p> ЧЕРЕЗ СОТНЮ ДРУГУЮ ЛЕТ СТАТЬ ПОМОЙКОЙ </p>" + cont(2)
	} else if (a == 3) {
		document.getElementById('box').innerHTML =
		"<p> РЕШИЛ СБАЙТИТЬ ВОЙНУ МИРОВ? </p>" + cont(2)
	} else if (a == 4) {
		document.getElementById('box').innerHTML =
		"<p> ИНТЕРЕСНО, ЧЕМ СРЕТ ЛУНА </p>" + cont(2)
	}
}	

function answer2(a) {
	if (a == 0) {
		document.getElementById('box').innerHTML =
		'<p>Вопрос 3: <br> <br>' +
				'ТЫ ЛАМПОВАЯ ДУША 12 ПРОШЛЫХ ЖИЗНЕЙ ИЗ 13 @ ПЕРЕД ОЧЕРЕДНЫМ ПЕРЕРОЖДЕНИЕМ НА ЗЕМЛЕ ТЕБЯ И ВСЕ' +
				'ПРОЧИЕ ДУШИ ИНСТРУКТИРУЕТ БОЖЕНЬКА @ ОН ГОВОРИТ, ЧТО ДЛЯ ИНТЕРЕСА ДОБАВИЛ В ЖИЗНЬ РАЗНЫЕ АЧИВКИ' +
				' @ ТВОЯ ЕДИНСТВЕННАЯ АЧИВКА - СПИДРАНЕР @ СНОВА ОТПРАВЛЯЕШЬСЯ НА НЕБЕСА @ НА ЭТОТ РАЗ АЛЛАХ ПРЕДЛАГАЕТ' +
				'ТЕБЕ ПЕРЕРОДИТЬСЯ КЕМ ТЫ ЗАХОЧЕШЬ<br>' +
				'ТЫ ВЫБИРАЕШЬ СТАТЬ? <br> <br>' +
				'<a href="#" onclick="answer2(1);">ТЯНОЧКОЙ</a>' +
				'<a href="#" onclick="answer2(2);">МЭДОМ</a>' +
				'<a href="#" onclick="answer2(3)">ПУТИНЫМ</a>' + 
				'<a href="#" onclick="answer2(4)">АЛЛАХОМ</a> </p>'
	} else if (a == 1) {
		document.getElementById('box').innerHTML =
		"<p>ПОЗДРАВЛЯЮ, ТЫ СТАЛ ЛГБТ СЖВ БОДИПОЗИТИВЩИЦЕЙ</p>" + cont(3)
	} else if (a == 2) {
		document.getElementById('box').innerHTML =
		"<p>ТЫ ПЕРЕРОДИЛСЯ В ЖИРНОГО 30 ЛЕТНЕГО МУЖИКА С ПСИХОЛОГИЧЕСКИМИ ПРОБЛЕМАМИ И ТЕЛОМ СТАРИКА</p>" + cont(3)
	}else if (a == 3) {
		document.getElementById('box').innerHTML =
		"<p>ТЫ СТАЛ СВЕРХЧЕЛОВЕКОМ</p>" + cont(3)
	}else if (a == 4) {
		document.getElementById('box').innerHTML =
		"<p>ТЫ ЧО ОХ*ЕЛ?</p>" + cont(3)
	}
}

function answer3() {
	document.getElementById('box').innerHTML =
	'<p>ИТАК, ПУТЕМ СЛОЖНЫХ ВЫЧИСЛЕНИЙ МЫ ВЫЯСНИЛИ, КТО ТЫ ПО ЖИЗНИ.</p>' + cont(4)
}

function cont(a) {
	if (a == 1) {
		var b = ' <p> <a href="#" onclick="answer1(0);">ПРОДОЛЖИТЬ</a> </p> ';
		return b;
	} else if (a == 2) {
		var b = ' <p> <a href="#" onclick="answer2(0);">ПРОДОЛЖИТЬ</a> </p> ';
		return b;
	} else if (a == 3) {
		var b = ' <p> <a href="#" onclick="answer3();">ПРОДОЛЖИТЬ</a> </p> ';
		return b;
	} else if (a == 4) {
		var b = ' <p> <a href="index_hack.html">ПОЛУЧИТЬ ПРИЗ</a> </p> ';
		return b;
	}
}