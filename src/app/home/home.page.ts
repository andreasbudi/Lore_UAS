import { Component, OnInit } from '@angular/core';
import { Note, NoteService } from '../services/note.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  notes: Note[];

  constructor(private noteService: NoteService,private router: Router, private authSvc: AuthService) {}
  ngOnInit(): void {
    this.noteService.getNotes().subscribe(res => {
      this.notes = res;
    });
  }

  remove(item) {
    this.noteService.removeNote(item.id);
  }


}
