
# Desafio Alura Pos Tech - Welcome 

## Introdução
Este repositório contém o código fonte do projeto desenvolvido para o desafio da Alura Pos Tech. O objetivo deste projeto é criar um formulário que permita aos membros da equipe cadastrarem seus nomes e uma mensagem sobre a história do grupo. As informações coletadas serão enviadas para um servidor externo via requisição POST.

## Funcionalidades
* **Formulário de Cadastro:**
    * Campo para inserir os nomes dos membros da equipe (array de strings).
    * Campo para inserir a história do grupo (string).
* **Envio de Dados:**
    * As informações do formulário serão enviadas para a URL: https://fsdt-contact.onrender.com/contact
    * Os dados serão enviados no formato JSON, com os atributos `names` (array de strings) e `message` (string).
* **Feedback ao Usuário:**
    * Em caso de sucesso no envio, os campos do formulário serão limpos e uma mensagem de sucesso será exibida ao usuário.
    * Em caso de erro, uma mensagem de erro será exibida ao usuário.
	
	Estudantes: 
	Andre Silva Souteiro - rm359964
	Gabriela Midori Afuso - rm360009
	Jean Lucas Pereira da Silva - RM3602489
	Jô Corrêa - RM360190

## Tecnologias Utilizadas
* **HTML:** Estrutura básica da página.
* **CSS:** Estilização da página.
* **JavaScript:** Lógica para capturar os dados do formulário, montar o objeto JSON e realizar a requisição POST.
* **Fetch API:** Utilizada para fazer a requisição HTTP para o servidor.

