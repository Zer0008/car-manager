import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.css']
})
export class PubComponent implements OnInit {

  listPubs = ["/assets/gifPub/renaultPub.gif","../assets/gifPub/tlchargement-2.jpeg","../assets/gifPub/parfum.jpg"];

  id: number;

  rand: number;
  image: string;

  //rand = Math.round(Math.random()*(this.listPubs.length-1));
  //image = this.listPubs[this.rand];

  constructor() {
    setInterval(
        () => {
            this.rand = Math.round(Math.random()*(this.listPubs.length-1));
            this.image = this.listPubs[this.rand];
            console.log(this.listPubs[this.rand]);
        }, 5000
    );
  }

  ngOnInit() {
  }
}
