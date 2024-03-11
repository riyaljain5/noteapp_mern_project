

document.addEventListener('DOMContentLoaded', function () {
    

    let noteCounter = 0;

    
    function addNote() {
        
        noteCounter++;

        
        const newNote = document.createElement('div');
        newNote.id = 'con' + noteCounter;
        newNote.classList.add('defaultsize');

        
        const toolSection = document.createElement('div');
        toolSection.id = 'tool';

        
        const noteNumber = document.createElement('span');
        noteNumber.id = 'notenumber';
        noteNumber.textContent = 'Note ' + noteCounter;

        
        const iconsSection = document.createElement('div');
        iconsSection.id = 'icons';

        //save icon
        const saveIcon = document.createElement('i');
        saveIcon.classList.add('fa', 'fa-floppy-o');
        saveIcon.setAttribute('aria-hidden', 'true');
        saveIcon.style.zIndex = '2';

        //trash icon
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa-solid', 'fa-trash');

        // Append icons 
        iconsSection.appendChild(saveIcon);
        iconsSection.appendChild(deleteIcon);

        // Apppen notnumb and iconsec
        toolSection.appendChild(noteNumber);
        toolSection.appendChild(iconsSection);

        // textarea
        const textarea = document.createElement('textarea');

        // append toolsec and textarea
        newNote.appendChild(toolSection);
        newNote.appendChild(textarea);

        // append new note to conatiner
        document.getElementById('container').appendChild(newNote);


        deleteIcon.addEventListener('click', function () {
            deleteNote(newNote);
            updateNoteNumbers();
        });

       
        saveIcon.addEventListener('click', function () {
            saveNoteContent(newNote);
        });
    }

    
    function saveNoteContent(note) {
        const textarea = note.querySelector('textarea');
        const content = textarea.value;
        
        console.log('Saving Note Content:', content);
    }

    
    function deleteNote(note) {
        note.remove();
        noteCounter= noteCounter-1;
    }

    // Function to update note numbers after a note is deleted
    function updateNoteNumbers() {
        const notes = document.querySelectorAll('#container > div');
        notes.forEach((note, index) => {
            const noteNumber = note.querySelector('#notenumber');
            const newNoteNumber = 'Note ' + (index + 1);
            noteNumber.textContent = newNoteNumber;
    
            // Update the ID of the note element
            note.id = 'con' + (index + 1);
        });


    }

 
    document.getElementById('addnote').addEventListener('click', addNote);
});
