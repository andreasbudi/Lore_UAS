import { Component, OnInit, Input } from '@angular/core';
import { NoteService, Note } from 'src/app/services/note.service';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute,) { }

    ngOnInit() {
    }

  remove(item) {
    this.noteId = this.route.snapshot.params['id'];
    this.noteService.getNote(this.noteId).subscribe(res => {
      this.note = res;
    });
    this.noteService.removeNote(item.id);
  }
}
