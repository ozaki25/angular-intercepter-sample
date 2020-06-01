import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'http-response-sample';

  constructor(private service: ApiService) {}

  ngOnInit() {
    this.service.getJson().subscribe(res => console.log(res));
    this.service.getHtml().subscribe(res => console.log(res));
  }
}
