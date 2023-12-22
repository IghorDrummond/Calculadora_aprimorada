//Declaração de Variaveis Globais
//Objetos
var TelaResultado = document.getElementsByTagName('input')

//==================Funções====================

/*
* Função: guardaValor(Recebe o valor Digitado)
* Descrição: Insere o Valor da Tela da Calculadora
* Data: 21/12/2023
* Ult. Modificação: 22/12/2023
* Programador(a): Ighor Drummond
*/
function guardaValor(valor) {

	if(valor != 'OFF'){
		//Insere o valor Selecionado no Input Tela
		TelaResultado[0].value += valor		
	}else{
		if(confirm("Você deseja realmente desligar Calculadora? Se Aperta Sim, fechará a Pagina!")){
			window.close()//Fecha a Pagina
		}
	}
}

/*
* Função: limpaTela()
* Descrição: Limpa a Tela responsavel por apresentar os valores
* Data: 21/12/2023
* Ult. Modificação: 22/12/2023
* Programador(a): Ighor Drummond
*/
function limpaTela() {
	TelaResultado[0].value = ''//Limpa o valor do Input Tela
}

/*
* Função: realizaCalculo()
* Descrição: Realizará o Calculo Final
* Data: 21/12/2023
* Ult. Modificação: 22/12/2023
* Programador(a): Ighor Drummond
*/
function realizaCalculo() {
	//Declaração de Variaveis
	//String
	var caracter = ''
	var Alfabeto = '1234567890.%-+X/'//Usado para verificar se é numero ou sinal
	var NumeroC  = ''
	//Numerico
	var nCont = 0
	var nCont2 = 0
	var nCont3 = 0
	var Total = 0
	//Array
	var guardaValores = new Array()

	//Atualiza o valor que contem na tela
	NumeroC = TelaResultado[0].value

	//Valida se o Numero não está vazio!
	if(NumeroC == ''){
		return 0
	}

	//Limpa o Undefined da Primeira Posição
	guardaValores[0] = ''

	//Organiza Numeros para Numeros e Operação para Operação no Vetor
	for(nCont = 0; nCont <= NumeroC.length - 1; nCont++){
		caracter = NumeroC.charAt(nCont)//Pega um caracter por vez para analisar seu tipo

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

	//Exibe na Tela o Total
	TelaResultado[0].value = Total.toString()
}
