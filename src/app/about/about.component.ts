import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  idParam: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.idParam = this.route.snapshot.params['id'];
    if (this.idParam) {
      console.log(this.idParam);
    }
  }


}
