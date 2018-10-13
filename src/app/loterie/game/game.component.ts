import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  loadAPI: Promise<any>;

  constructor(private router: Router) {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
  });

  }

  ngOnInit() {
  }


  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
            isFound = true;
        }
    }

    if (!isFound) {
        var dynamicScripts = ['http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js',
          'http://localhost:4200/assets/js/jquery.spritely.js',
      'http://localhost:4200/assets/js/jquery.backgroundPosition.js',
      'http://localhost:4200/assets/js/slot.js'];

        for (var i = 0; i < dynamicScripts .length; i++) {
            let node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }

    }
}


  nextPage() {
    this.router.navigate(['win']);
  }

}
