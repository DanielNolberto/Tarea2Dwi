// Asegurarnos de que el HTML haya cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionamos el botón y el cuerpo de la página (body)
    const fremenBtn = document.getElementById('fremen-btn');
    const body = document.body;

    // Le decimos al botón qué hacer cuando le hagan clic
    fremenBtn.addEventListener('click', () => {
        
        // La función 'toggle' pone la clase si no está, y la quita si ya está
        body.classList.toggle('fremen-mode');
        
        // Cambiamos el texto del botón según el modo activo
        if (body.classList.contains('fremen-mode')) {
            fremenBtn.textContent = 'Volver al Desierto';
        } else {
            fremenBtn.textContent = 'Activar Visión Fremen';
        }
    });
});