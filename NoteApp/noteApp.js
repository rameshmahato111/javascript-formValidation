

let Notes = [];
const noteTaken = document.getElementById('noteapp')
// localStorage.setItem('notes', Notes)
const allNotes = JSON.parse(localStorage.getItem('myNotes'))
console.log(allNotes)
Notes.push(allNotes)
const Createnotes = () => {

   Notes += document.querySelector("#noteapp").value
    //   Notes.push(noteTaken.value)
    
    noteTaken.value = ""

      localStorage.setItem('myNotes', JSON.stringify(Notes))

    // console.log(Notes)

    document.querySelector("#notes").innerHTML = Notes;
}

if(Notes==''){
    document.querySelector("#notes").innerHTML = '0 Notes Found'
}

