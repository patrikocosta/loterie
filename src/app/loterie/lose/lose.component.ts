import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lose',
  templateUrl: './lose.component.html',
  styleUrls: ['./lose.component.css']
})
export class LoseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextPage() {
    this.router.navigate(['welcome']);
  }

}
