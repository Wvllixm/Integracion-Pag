document.getElementById("valNombre").style.display = "none";
document.getElementById("valApellido").style.display = "none";
document.getElementById("valCorreo").style.display = "none";
document.getElementById("valUsuario").style.display = "none";
document.getElementById("valContrasena").style.display = "none";

<script src="{% static 'js/index.js' %}"></script>
function entrar() {
    const usu = document.getElementById('usuarioPrincipal').value;
    const pass = document.getElementById('passPrincipal').value;
    console.log(usu, pass);

    if (usu == 'miguel@duocuc.cl' && pass == '123'){
        window.location.href = 'index.html';
    }else if(usu == 'pablo@chef.cl' && pass == '123'){
        window.location.href = 'index.html'
    }else if(usu == 'nico@admin.cl' && pass == '123'){
        window.location.href = 'login.html'
    }else{
        alert('Error')
    }


}

function validar(){
    if (document.getElementById("txtNombre").value.length == 0) {
        document.getElementById("valNombre").style.display = "inline";
        document.getElementById("txtNombre").classList.add("is-invalid");
    }else{
        document.getElementById("valNombre").style.display = "none";
        document.getElementById("txtNombre").classList.remove("is-invalid");
        document.getElementById("txtNombre").classList.add("is-valid");
    }

    if (document.getElementById("txtApellido").value.length == 0) {
        document.getElementById("valApellido").style.display = "inline";
        document.getElementById("txtApellido").classList.add("is-invalid");
    }else{
        document.getElementById("valApellido").style.display = "none";
        document.getElementById("txtApellido").classList.remove("is-invalid");
        document.getElementById("txtApellido").classList.add("is-valid");
    }
    
    if (document.getElementById("txtCorreo").value.length == 0) {
        document.getElementById("valCorreo").style.display = "inline";
        document.getElementById("txtCorreo").classList.add("is-invalid");
    }else{
        document.getElementById("valCorreoCliente").style.display = "none";
        document.getElementById("txtCorreo").classList.remove("is-invalid");
        document.getElementById("txtCorreo").classList.add("is-valid");
    }

    if (document.getElementById("txtUsuario").value.length == 0) {
        document.getElementById("valUsuario").style.display = "inline";
        document.getElementById("txtUsuario").classList.add("is-invalid");
    }else{
        document.getElementById("valUsuario").style.display = "none";
        document.getElementById("txtUsuario").classList.remove("is-invalid");
        document.getElementById("txtUsuario").classList.add("is-valid");
    }

    if (document.getElementById("txtContrasena").value.length == 0) {
        document.getElementById("valContrasena").style.display = "inline";
        document.getElementById("txtContrasena").classList.add("is-invalid");
    }else{
        document.getElementById("valContrasena").style.display = "none";
        document.getElementById("txtContrasena").classList.remove("is-invalid");
        document.getElementById("txtContrasena").classList.add("is-valid");
    }

}


$(function(){
    $("#formulario").validate({
        rules:{
            contrasena:{
                required: true,
                minlength: 5
            }
        },
        messages:{
            contrasena:{
                minlength: "Debe ingresar Contraseña."
            }
        }
    })
})