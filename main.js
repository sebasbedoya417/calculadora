function Agregar(valor) {
    document.getElementById("pantalla").value += valor;
    
}
function Calcular() {

    try {
        const resul = eval(document.getElementById("pantalla").value)
        document.getElementById("pantalla").value=resul;
        
    } catch (error) {
        document.getElementById("pantalla").value="error";
        
    }
    
}
function Limpiar() {
    document.getElementById("pantalla").value="";
    
}