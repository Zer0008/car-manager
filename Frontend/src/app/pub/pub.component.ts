import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.css']
})
export class PubComponent implements OnInit {

  listPubs = [
      {
          "root": "/assets/gifPub/renaultPub.gif",
          "site": "https://www.renault.fr"
      },
      {
          "root": "../assets/gifPub/tlchargement-2.jpeg",
          "site": "https://www.unibet.fr"
      },
      {
          "root": "../assets/gifPub/parfum.jpg",
          "site": "https://www.sephora.fr"
      },
      {
          "root": "../assets/gifPub/bouygues.jpg",
          "site": "https://www.bouyguestelecom.fr"
      }
      ];

  rand: number;
  image: string;
  site: string;

  //rand = Math.round(Math.random()*(this.listPubs.length-1));
  //image = this.listPubs[this.rand];

  constructor() {

    this.image = this.listPubs[Math.round(Math.random()*(this.listPubs.length-1))].root;

    setInterval(
        () => {
            this.rand = Math.round(Math.random()*(this.listPubs.length-1));
            this.image = this.listPubs[this.rand].root;
            this.site = this.listPubs[this.rand].site;
            //console.log(this.image);
            //console.log(this.site);
        }, 5000
    );
  }

  ngOnInit() {
  }
}
