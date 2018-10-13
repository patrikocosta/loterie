import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  loadAPI: Promise<any>;

  constructor(private router: Router) {

  }

  ngOnInit() {

    // setInterval(this.runningLoop, 10000000);
    


  }

  runningLoop() {
      console.log('looop');
  }


 // ngOnInit() {

    /*
    const fs = require('fs');


    fs.file('C:\\WORK\\APP23\\token\\token.txt', (err) => {
      if (err) { throw err; }
      console.log('successfully deleted /tmp/hello');
    });
*/


/*
    fs.stat('C:\\WORK\\APP23\\token\\token.txt', function(err, stat) {
      if(err == null) {
          console.log('File exists');
      } else if(err.code == 'ENOENT') {
          // file does not exist
          fs.writeFile('log.txt', 'Some log\n');
      } else {
          console.log('Some other error: ', err.code);
      }
  });
*/

//  }

  nextPage() {
    this.router.navigate(['formulaire']);
  }

}
