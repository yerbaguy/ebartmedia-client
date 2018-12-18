import { Component, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';

import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ebartmedia-client';

  constructor(private router: Router) {}


}
