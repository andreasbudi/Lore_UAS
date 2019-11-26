import { Component, OnInit } from '@angular/core';
import { Note, NoteService } from 'src/app/services/note.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../component/popover/popover.component';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.page.html',
  styleUrls: ['./note-details.page.scss'],
})
export class NoteDetailsPage implements OnInit {

  note: Note = {
    task: 'Test 123',
    createdAt: new Date().getTime(),
    priority: 2
  };

  noteId = null;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private navController: NavController,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.noteId = this.route.snapshot.params['id'];
    console.log(this.noteId);
    if (this.noteId) {
      this.loadNote();
    }
  }

  async loadNote() {
    const loading = await this.loadingController.create({
      message: 'Loading Note...'
    });
    await loading.present();

    this.noteService.getNote(this.noteId).subscribe(res => {
      loading.dismiss();
      this.note = res;
    });
  }

  async saveNote() {
    const loading = await this.loadingController.create({
      message: 'Saving Note...'
    });
    await loading.present();

    if (this.noteId) {
      this.noteService.updateNote(this.note, this.noteId).then(() => {
        loading.dismiss();
        this.navController.navigateBack('home');
      })
    } else {
      this.noteService.addNote(this.note).then(() => {
        loading.dismiss();
        this.navController.navigateBack('home');
      });
    }
  }

  async presentPopover(ev: any ) {
    console.log("ini yang di details presentpopover"+this.noteId);
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps:{key1:this.noteId},
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
