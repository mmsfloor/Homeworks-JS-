var NotesModel = (function () {
    var NOTES = [{
            id: 1,
            text: 'Some note text 1'
        },
        {
            id: 2,
            text: 'Some note text 2'
        },
        {
            id: 3,
            text: 'Some note text 3'
        },
        {
            id: 4,
            text: 'Some note text 4'
        }
    ]

    return {
        getNotes: function (cb) {
            // get data from server...
            cb(NOTES);
            return NOTES;
        },
        addNote: function (newNoteText, cb) {
            console.log('2');
            var newNote = {
                id: NOTES[NOTES.length - 1].id + 1,
                text: newNoteText
            }
            NOTES.push(newNote);
            cb(NOTES);
        },
        delNote: function (noteId, cb) {
            console.log('09');    //проблема где-то близко... хмм 
            for (i=0;i<NOTES.length;i++) { 
                console.log('ooomy');
                if (NOTES[i].id == noteId) {
                   console.log('delModel');
                    NOTES.splice(i,1);
                    break;
                };
            }
            cb(NOTES);
        }
    }

}())