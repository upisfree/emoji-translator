// поддержка пока что только русского и английского из-за начальной формы

// параллелить через workers,
// английский язык,
// массив со всеми названиями и ключевыми словами, с которым сначала идёт проверка, мол, стоит ли уже дальше проверять все эмоджи или нет
// fallback: https://github.com/lautis/emojie

var input = document.getElementById('input');
var output = document.getElementById('output');

var worker = new Worker('./bin/worker.js');

worker.onmessage = function(e) {
  output.textContent = e.data;
}

input.oninput = function() {
  worker.postMessage(input.value);
}