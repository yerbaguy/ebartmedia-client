import { Component, OnInit } from '@angular/core';

import { ContactModel } from '../../../contact.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  // template: `
  //   <p>
  //     contact works!
  //   </p>
  // `,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
  // styles: []
})
export class ContactComponent implements OnInit {

  contact: ContactModel = new ContactModel();
  contactForm: FormGroup;


  imie: String;
  nazwisko: String;
  email: String;
  information: String;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.contactForm = this.formBuilder.group({

      'name': [this.contact.name, [

        Validators.required
      ]],

      'surname': [this.contact.surname, [

        Validators.required
      ]],

      'email': [this.contact.email, [

        Validators.required
      ]],

      'information': [this.contact.information, [

        Validators.required
      ]]



    })
  }



//  onFormSubmit(contactForm: NgForm) {
  onFormSubmit(f: NgForm) {  

    console.log(f.value);

    

  }

}
