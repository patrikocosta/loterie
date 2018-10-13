import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loginForm = new FormGroup({
    login: new FormControl('', 
      [Validators.required]),
    password: new FormControl('', 
      [Validators.required])
  });


  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.setStorage('lang', 'FR');



  }

  onSubmit() {
    const formModel = this.loginForm.value;
    // console.log(formModel)
    this.storageService.setStorageObject('user', formModel);

    // this.storageService.saveLogin(formModel.login);
    console.log('storage', this.storageService.getStorageObject('user'));
  }

}
