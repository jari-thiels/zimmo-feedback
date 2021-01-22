import { Component } from '@angular/core';
import { IBlogItem } from './blog-list-item.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
})
export class BlogListComponent {
  items: IBlogItem[] = [
    {
      imageUrl: 'https://picsum.photos/300',
      title: '6 makkelijke manieren om voor een huis te sparen',
      description:
        'Een huis kopen een onbereikbare toekomstdroom? Dat hoeft helemaal niet!',
      articleUrl: 'https://www.zimmo.be/nl/',
    },
    {
      imageUrl: 'https://picsum.photos/350',
      title: '6 makkelijke manieren om voor een huis te sparen',
      description:
        'Een huis kopen een onbereikbare toekomstdroom? Dat hoeft helemaal niet!',
      articleUrl: 'https://www.zimmo.be/nl/',
    },
    {
      imageUrl: 'https://picsum.photos/400',
      title: '6 makkelijke manieren om voor een huis te sparen',
      description:
        'Een huis kopen een onbereikbare toekomstdroom? Dat hoeft helemaal niet!',
      articleUrl: 'https://www.zimmo.be/nl/',
    },
    {
      imageUrl: 'https://picsum.photos/450',
      title: '6 makkelijke manieren om voor een huis te sparen',
      description:
        'Een huis kopen een onbereikbare toekomstdroom? Dat hoeft helemaal niet!',
      articleUrl: 'https://www.zimmo.be/nl/',
    },
  ];
}
