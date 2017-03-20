import { Component } from '@angular/core';


@Component({
  selector: 'youtubeapi',
  templateUrl: './youtubeapi.component.html',
  styleUrls: ['./youtubeapi.component.css']
})


export class YoutubeapiComponent {
  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }
}
