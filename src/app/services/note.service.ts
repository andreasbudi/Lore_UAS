import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Note {
  task: string;
  priority: number;
  createdAt: number;
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notesCollection: AngularFirestoreCollection<Note>;
  private notes: Observable<Note[]>;

  constructor(db: AngularFirestore) {
    this.notesCollection = db.collection<Note>('notes');

    this.notes = this.notesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
   }

   getNotes() {
     return this.notes;
   }

   getNote(id) {
     return this.notesCollection.doc<Note>(id).valueChanges();
   }

   updateNote(note: Note, id: string) {
     return this.notesCollection.doc(id).update(note);
   }

   addNote(note: Note) {
     return this.notesCollection.add(note);
   }

   removeNote(id) {
     return this.notesCollection.doc(id).delete();
   }
}
