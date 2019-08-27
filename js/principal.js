var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < 5; i++){
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
       tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");

    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }

}

var botaoAdcionar = document.querySelector("#adicionar-paciente");
botaoAdcionar.addEventListener("click", function (event){
    event.preventDefault(); //previne o comportamento padrão de certos elementos: event.preventDefault.
   
    var form = document.querySelector("#form-adiciona");
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;    
    
    //localisar os tr da formulario para adcionar um novo paciente
    var pacienteTr = document.createElement("tr");

    //adcionar os dados para cada td do formulario
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //coloca os dados obtidos dentro dos elementos td criados
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gorduraTd;

    //colocar os elmentos td filhos dentro do elemento pai tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    //colocar a tabela criada dentro do tbody

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr, function(event){
        event.preventDefault();
    });


});
   






