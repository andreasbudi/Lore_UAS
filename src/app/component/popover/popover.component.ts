import { Component, OnInit, Input } from '@angular/core';
import { NoteService, Note } from 'src/app/services/note.service';
import { ActivatedRoute } from '@angular/router';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  note: Note = {
    task: 'Test 123',
    createdAt: new Date().getTime(),
    priority: 2
  };
  noteId = null;
  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    public navParams:NavParams) { 
      console.log(this.navParams.data);
      this.noteId = this.navParams.get('key1');
    }

    ngOnInit() {

      console.log("ini yang di init"+this.route.snapshot.params['id']);
      // this.noteId = this.route.snapshot.params['id'];
    }

    remove() {
      console.log(this.noteId+"ini id yang mau di remove ");
      this.noteService.removeNote(this.noteId);
    }
}
