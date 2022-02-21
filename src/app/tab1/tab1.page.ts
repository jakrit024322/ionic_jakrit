import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  promotions = [
    { title: "โปร 1 แถม 1", 
    subtitle:"ทุกวันจันทร์ - ศุกร์",
    Image:"https://images.pexels.com/photos/4109241/pexels-photo-4109241.jpeg"
  },
    { title: "โปร 2 แถม 2", 
    subtitle:"ทุกวันจันทร์ - ศุกร์",
    Image:"https://images.pexels.com/photos/4109241/pexels-photo-4109241.jpeg"
  },
    { title: "โปร 3 แถม 3", 
    subtitle:"ทุกวันจันทร์ - ศุกร์",
    Image:"https://images.pexels.com/photos/4109241/pexels-photo-4109241.jpeg"
  },
  ] 
  constructor() { }

}
