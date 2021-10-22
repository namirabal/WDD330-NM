
const listaTareas = document.getElementById('listaTareas');
//const detailsList = document.getElementById('detailsList');
//const todosCount = document.getElementById('todosCount');
const formulario = document.getElementById('formulario');
const inputID = document.getElementById('inputID');
const template = document.getElementById('template').content;//regla: siempre que se accede a un template se usa content,si no, no sirve
const fragment = document.createDocumentFragment();
let tareas = {
/*   1634839728061:{
        id: 1634839728061,
        texto: 'tarea #1',
        estado: false
    },
    1634839818432:{
        id: 1634839818432,
        texto: 'tarea #2',
        estado: false
    },*/
};
//solo lo creamos para que nos tire numeros para los ids
//console.log(Date.now());


listaTareas.addEventListener('click', e => {
    btnAccion(e)
}) //conectado con la const  btnAccion


formulario.addEventListener('submit', e =>{
    e.preventDefault()//esto sirve para que se vea y no desaparezca en el console
   // console.log(e.target[0].value)//esto es para comprobar si funciona en el console, si aparece esta bien
   // console.log(e.target.querySelector('input').value)//otra forma de capturar el valor de input
//con esta opcion debemos primero crear un id para el input y luego agregarlo en una variable-linea 2:
    //console.log(inputID.value)
    setTareas(e)
})

const setTareas = e => {
//aqui validamos si en realidad se ingreso un valor o esta vacio
//validamos formulario:
    if(inputID.value.trim() === '') {
        console.log('no ingresó su tarea')
        return
    }
    //construimos nuestro objeto:
    const tarea ={
        id: Date.now(),
        texto: inputID.value,
        estado: false
    }
    //aca esta relacionado con la linea 7 de let tareas:
    tareas[tarea.id] = tarea
    console.log(tareas)


    //para que se limpien los valores luego de agregar:
    formulario.reset()
    inputID.focus()//queda seleccionado el campo para agregar otra tarea

    //para que las tareas aparezcan en una lista:
    imprimirTareas()

}

const imprimirTareas = () => {
    //sirve para que no se imprimas las tareas en let:
    listaTareas.innerHTML = ''
    Object.values(tareas).forEach(tarea => {
      //clona el template 
        const clone = template.cloneNode(true)
        clone.querySelector('p').textContent = tarea.texto
        fragment.appendChild(clone)//alamcena toda esa cadena de elementos html
    })

    listaTareas.appendChild(fragment) //este permite que aparezcan las tareas en la app luego de agregarlas
    
}



