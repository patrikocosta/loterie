import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Auteur } from '../../models/auteur.model';
import { AuteurService } from '../../services/auteur.service';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {


 

  auteurForm = new FormGroup({
    nom: new FormControl('', 
      [Validators.required,
        Validators.minLength(4)])
  });

  constructor(private auteurService: AuteurService) { }

  ngOnInit() {

  }

  onSubmit() {
    console.log("submittt!", this.auteurForm);

    const formModel = this.auteurForm.value;
    const saveAuthor: Auteur = {
      id:0,
      nom: formModel.nom
    }

    return this.auteurService.create(saveAuthor).subscribe();
  }

  get nom() {
    return this.auteurForm.get('nom'); 
  }

}
