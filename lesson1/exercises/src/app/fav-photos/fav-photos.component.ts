import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Fave Photos!';
  image1 = 'https://picsum.photos/536/354';
  image2 = 'https://picsum.photos/536/355';
  image3 = 'https://picsum.photos/536/356';

  constructor() { }

  ngOnInit() {
  }

}