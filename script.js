function menushow(){
    let menuMobile =document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_icon_244496-removebg-preview.png";
    }
    else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/5412010.png";
    }
}

var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})
    //Mostra a Senha
    function show_senha(){
        
        var input = document.getElementById("i_senha");

        if(input.type == "password"){
            input.type = "text";
        }
        else{
            input.type = "password";
        }
    }
    
    //Valida Cadastro
    function validar(){
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var senha = document.getElementById("i_senha").value;
       
        
            if(nome == "" && email == "" && senha == ""){
                alert("Todos os campos estão vazios");
                return;
            }
            else if(email == "" && senha == ""){
                alert("Email ou Senha não preenchidos");
                return;
            }
            else if(nome == "" && senha == ""){
                alert("Nome ou Senha não preenchidos");
                return;
            }
            else if(nome == "" && email == ""){
                alert("Nome ou Email não preenchidos");
                return;
            }
            else if(nome == ""){
                alert("Nome não preenchido");
                return;
            }
            else if(email == ""){
                alert("Email não preenchido");
                return;
            }
            else if(senha == ""){
                alert("Senha não preenchido");
                return;
            }
        }
    

  //Valida Login
  function validarlogin(){
     var email_login = document.getElementById("email-login").value;
     var senha_login = document.getElementById("senha-login").value;

        if(email_login == "" && senha_login == ""){
            alert("Todos os Campos estão vazios");
            return
         }
         else if(email_login == ""){
            alert("Email não preenchido");
            return
         }
         else if(senha_login == ""){
            alert("Senha não preenchido");
            return
         }
     }

     const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    const value = event.target.value;
    const items = document.querySelectorAll('.slider .card');

    items.forEach(item => {
        const title = item.querySelector('.title-product').textContent;
        if (formatString(title).indexOf(formatString(value)) !== -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});

function formatString(value) {
    return value.toLowerCase().trim();
}


