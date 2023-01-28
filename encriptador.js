
const textArea = document.querySelector(".text-area")
const mensaje = document.querySelector(".mensaje")

function encriptado(stringEncriptado){
	let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	stringEncriptado = stringEncriptado.toLowerCase();
	for (let i= 0;i<matriz.length;i++){
		if(stringEncriptado.includes(matriz[i][0])){
			stringEncriptado = stringEncriptado.replaceAll(matriz[i][0],matriz[i][1])};
		}return stringEncriptado;
}
function btnEncriptado(){
	const textoEncriptado = encriptado(textArea.value);
	mensaje.value = textoEncriptado;
	textArea.value= "";
	mensaje.style.backgroundImage= "none";
}

function desencriptado(stringDesencriptado){
	let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	stringDesencriptado = stringDesencriptado.toLowerCase();
	for (let i= 0;i<matriz.length;i++){
		if(stringDesencriptado.includes(matriz[i][1])){
			stringDesencriptado = stringDesencriptado.replaceAll(matriz[i][1],matriz[i][0])};
		}return stringDesencriptado;
}
function btnDesencriptado(){
	const textoEncriptado = desencriptado(textArea.value);
	mensaje.value = textoEncriptado;
	textArea.value= "";
	
}
function copiar(){
	var contenido = document.querySelector(".mensaje");
	contenido.select();
	document.execCommand('copy');
	}