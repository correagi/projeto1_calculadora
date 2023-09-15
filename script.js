//Criando a classe da calculadora 
class Calculator{
    constructor(){
        // Aqui é a propriedade que receberá os valores digitados
        this.displayValue = " ";
    }
    //Este método adiciona os valores à propriedade displayValue
    //Permitindo que o usuário veja os caracteres/valores
    //append é adicionar
    appendToDisplay(value){
        this.displayValue += value; //O += significa que ele recebe e soma o valor 
        // Chamamos o método updateDisplay dentro do método appendToDisplay para que quando o usuário...
        //digitar alguma tecla da calculadora o valor que foi armazenado na propriedade displayValue seja exibida na tela
        this.updateDisplay(); ///foi criado embaixo e só chamado aqui
    }
    //Este método atualiza o elemento input no HTML com o valor atual que está armazenado em displayValue
    updateDisplay(){ //Para mostrar o número guardado na tela do usuário
        document.getElementById("displayContent").value = this.displayValue; //O value serve para pegar o..
        //valor que está contido dentro da variável, se não ele pegaria o nome da variavel.
    }
    //Este método limpa o valor que está armazenado em displayValue e chama a função updateDisplay para...
    //atualizar a tela com um valor vazio.
    clearDisplay(){
        this.displayValue = " ";
        this.updateDisplay();
    }

    //O método try cath executa o cálculo da expressão matemática contida em displayValue. Esse método..
    //utiliza a função eval() para avaliar a expressão e, se for bem sucedida, atualiza o displayValue com...
    //o resultado e chama a função updateDisplay(). Se ocorrer um erro durante a avaliação, ele atualiza o...
    //displayValue com a mensagem "Erro" e chama a função updateDisplay().
    calculate(){
        try{
           // const result = eval(this.displayValue);
           const result = math.evaluate(this.displayValue)
            this.displayValue = result.toString();
            this.updateDisplay();
        }catch(error){
            this.displayValue = "Erro";
            this.updateDisplay();
        }
    }
}

//Criando o objeto ou instanciando uma classe
//Objeto chamado calc
const calc = new Calculator();