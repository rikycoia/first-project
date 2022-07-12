import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

    topic: string = '';
    mistakes: string = ''




  ngOnInit(): void {
  }

}
