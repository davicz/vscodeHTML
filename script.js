// Array de usuários simulando um banco de dados
const users = [
    { cpf: '11503822443', senha: 'andrey301' },
    { cpf: '98765432100', senha: 'senha456' },
    { cpf: '11507751494', senha : '1234'}
  ];
  
  // Função para verificar o login
  function verifyLogin(cpf, senha) {
    return users.some(user => user.cpf === cpf && user.senha === senha);
  }
  
  // Selecionar o formulário e adicionar um evento de envio
const loginForm = document.querySelector('#login-form');
const errorMessage = document.querySelector('#error-message');
const serviceList = document.querySelector('#service-list');
  
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const cpfField = document.querySelector('#cpf');
  const senhaField = document.querySelector('#password');

  const cpf = cpfField.value;
  const senha = senhaField.value;
  if (verifyLogin(cpf, senha)) {
    // Se login for bem-sucedido, esconder o formulário e exibir os serviços
    loginForm.style.display = 'none';
    /*errorMessage.style.display = 'none';
    serviceList.style.display = 'block';*/

    window.location.href = "pagina-sucesso.html";
  } else {
    // Se login falhar, exibir mensagem de erro
    errorMessage.style.display = 'block';
  }
});
  