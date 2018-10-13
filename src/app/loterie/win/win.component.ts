import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.css']
})
export class WinComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextPage() {
    this.router.navigate(['welcome']);
  }

}
