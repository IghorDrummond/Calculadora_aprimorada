//Declaração de Variaveis Globais
//Numerico
var Total = 0.0
//String
var Numero = ''
//Objetos
var TelaResultado = document.getElementsByTagName('input')

//==================Funções====================

/*
* Função: numero(Recebe o valor Digitado)
* Descrição: Guarda o valor selecionado para futura ação
* Data: 21/12/2023
* Programador(a): Ighor Drummond
*/
function numero(valor) {

	if (true) {
		//Recebe o Valor e concatena na variavel Numero 
		Numero += valor
		//Insere o valor Selecionado na Tela
		TelaResultado[0].value += valor
	}
}

/*
* Função: operacao(Recebe a Operação Selecionada)
* Descrição: Guarda a Operação Selecionada
* Data: 21/12/2023
* Programador(a): Ighor Drummond
*/
function operacao(opc) {
	//Concatena a Operação na Variavel Numero
	switch (opc) {
		case '+':
			Numero += '+'
			break
		case 'X':
			Numero += 'X'
			break
		case '/':
			Numero += '/'
			break
		case '-':
			Numero += '-'
			break
		case '%':
			Numero += '%'
			break
	}
	TelaResultado[0].value += Numero.charAt(Numero.length - 1)//Insere o valor de Operação na Tela
}

/*
* Função: limpaTela()
* Descrição: Limpa a Tela responsavel por apresentar os valores
* Data: 21/12/2023
* Programador(a): Ighor Drummond
*/
function limpaTela() {
	TelaResultado[0].value = ''//Limpa o valor do Input Tela
	Numero = '' //Limpa o Historico
}

/*
* Função: realizaCalculo()
* Descrição: Realizará o Calculo Final
* Data: 21/12/2023
* Programador(a): Ighor Drummond
*/
function realizaCalculo() {
	//Declaração de Variaveis
	//String
	var caracter = ''
	var Alfabeto = '1234567890.%-+X/'//Usado para verificar se é numero ou sinal
	//Numerico
	var nCont = 0
	var nCont2 = 0
	var nCont3 = 0
	//Array
	var guardaValores = new Array()

	//Limpa o Undefined
	guardaValores[0] = ''

	//Organiza Numeros para Numeros e Operação para Operação no Vetor
	for(nCont = 0; nCont <= Numero.length - 1; nCont++){
		caracter = Numero.charAt(nCont)	//Pega um caracter por vez para analisar seu tipo

		//Verificar qual é o tipo de caracter. se é numero ou operação Matemática
		for(nCont2 = 0; nCont2 <= Alfabeto.length; nCont2++){
			if(caracter == Alfabeto.charAt(nCont2) && nCont2 <= 10){
				guardaValores[nCont3] += caracter //Se for numerico, guarda na mesma posição
				break
			}else if(nCont2 > 10 && caracter == Alfabeto.charAt(nCont2)){
				//Pula para proxima posição e guarda o sinal da operação
				nCont3++
				guardaValores[nCont3] = caracter
				//Pula para a Proxima Limpando o Undefined
				nCont3++
				guardaValores[nCont3] = ''
				break
			}
		}
	}

	//Realizar o Calculo Final
	for (nCont = 0; nCont <= guardaValores.length -1; nCont++) {
		if ((nCont % 2) != 0){//se caso for impar, ele pegará o sinal e fará a conta
			switch (guardaValores[nCont]) {
				case '+':
					Total += parseFloat(guardaValores[nCont +1])
					break
				case '-':
					Total -= parseFloat(guardaValores[nCont +1])
					break	
				case '/':
					Total /= parseFloat(guardaValores[nCont +1])
					break	
				case 'X':
					Total *= parseFloat(guardaValores[nCont +1])
					break																			
			}
		}
		if(nCont <= 0){//pega o primeiro valor da primeira posição do vetor
			Total = parseFloat(guardaValores[nCont])
		}
	}
	//Exibe na Tela
	TelaResultado[0].value = Total.toString()
}
