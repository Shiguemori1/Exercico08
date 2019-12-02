export class NoteService{
    notes = [
        {
          id: 1,
          nome: 'Sonic',
          cor: 'azul',
          placa: 'SSS-1234' 
        },
      {
          id: 2,
          nome: 'Ferrari',
          cor: 'azul',
          placa: 'FFF-4567' 
        },
       {
          id: 3,
          nome: 'Monza',
          cor: 'marrom',
          placa: 'MMM-9874' 
        }
      ]

    removeNote (note){
        let i = this.notes.indexOf(note);
        if (i >= 0)
            this.notes.splice (i, 1);
    }

    addNote (note){
      this.notes.push(note);
    }
}
