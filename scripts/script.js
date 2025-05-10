function execCmd(command) {
  if (command === 'insertImage') {
    const url = prompt("Insira o URL da imagem:");
    document.execCommand('insertImage', false, url);
    appendCommand(command, url);
  } else if (command === 'createLink') {
    const url = prompt("Insira o URL do link:");
    document.execCommand('createLink', false, url);
    appendCommand(command, url);
  } else if (command === 'insertVideo') {
    const url = prompt("Insira o URL do Video:");
    document.execCommand('createLink', false, url);
    appendCommand(command, url);
  } else if (command === 'insertAudio') {
    const url = prompt("Insira o URL do Audio:");
    document.execCommand('createLink', false, url);
    appendCommand(command, url);
  } else {
    document.execCommand(command, false, null);
  }
}

function appendCommand(command, url) {
  obj = document.getElementById("richtextbox");
  if (command === 'insertImage') {
	str_app = '<img src="' + url + '"/>';
  } else if (command === 'createLink') {
	str_app = '<a href="' + url + '" target="_blank">' + url + '</a>';
  } else if (command === 'insertVideo') {
	str_app = '<video width="320" height="240" controls source="' + url + '">';
  } else if (command === 'insertAudio') {
	str_app = '<audio width="320" height="240" controls source="' + url + '">';
  } else {
	document.execCommand(command, false, null);
  }
  obj.innerHTML += str_app;
}

function keyboard_listening() {
	document.getElementById("richtextbox").addEventListener("keyup", (e) => {
	console.log("Texto atualizado:", e.target.innerHTML);});
	document.addEventListener("keydown", (e) => {
	if (e.ctrlKey && e.key === "c") {
		console.log("Comando Ctrl+C detectado");
	} else if (e.ctrlKey && e.key === "v") {
		console.log("Comando Ctrl+V detectado");
	}});
}

function loadHTML(file, target) {
	fetch(file)
	.then(response => response.text())
		.then(html => {
			document.getElementById(target).innerHTML = html;
		})
		.catch(error => {
			console.error('Error loading HTML:', error);
	});
}