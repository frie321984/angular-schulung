import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any[] = [
    { 'text' : 'Anna'  },
    { 'text' : 'Bernd'  },
    { 'text' : 'Chuck'  },
    { 'text' : 'Eva'  },
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  contactClicked(i ) {
    console.log(this.contacts[i].text);
    this.router.navigate(['/about', this.contacts[i].text]);
  }
}
