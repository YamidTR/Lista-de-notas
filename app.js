document.addEventListener('DOMContentLoaded', () => {
    
    const miBoton = document.getElementById('miBoton');
    const tareas = document.getElementById('tareas');
    const limpiarTareas = document.getElementById('limpiarTareas');

    
    miBoton.addEventListener('click', () => {
        
        const nombre = document.getElementById('nombre').value.trim();
        const nota1 = parseFloat(document.getElementById('nota1').value.trim());
        const nota2 = parseFloat(document.getElementById('nota2').value.trim());
        const nota3 = parseFloat(document.getElementById('nota3').value.trim());

        if (!nombre || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
            alert('Por favor, complete todos los campos con datos válidos.');
            return;
        }

        if (nota1 > 5 || nota2 > 5 || nota3 > 5) {
            alert('Error: Las notas deben ser valores entre 0 y 5.');
            return;
        }
        


        const promedio = ((nota1 + nota2 + nota3) / 3).toFixed(2);

        
        const li = document.createElement('li');
        li.textContent = `${nombre} - Promedio: ${promedio}`;

        if (promedio >= 3) {
            li.classList.add('alta');
        } else {
            li.classList.add('baja'); 
        }
    
        tareas.appendChild(li);

        
        document.getElementById('nombre').value = '';
        document.getElementById('nota1').value = '';
        document.getElementById('nota2').value = '';
        document.getElementById('nota3').value = '';
    });

    
    tareas.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('resaltado');
        }
    });

    
    limpiarTareas.addEventListener('click', () => {
        if (confirm('¿Está seguro de que desea borrar todas las tareas?')) {
            tareas.innerHTML = '';
        }
    });
});