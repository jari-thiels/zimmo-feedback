import { Component } from "@angular/core";
import { IBlogItem } from "./blog-list-item.component";

@Component({
  selector: "app-blog-list",
  templateUrl: "./blog-list.component.html",
})
export class BlogListComponent {
  items: IBlogItem[] = [
    {
      imageUrl: "https://via.placeholder.com/300",
      title: "6 makkelijke manieren om voor een huis te sparen",
      description:
        "Een huis kopen een onbereikbare toekomstdroom? Dat hoeft helemaal niet!",
      articleUrl: "http://localhost:4200",
    },
    {
      imageUrl: "https://via.placeholder.com/300",
      title: "6 makkelijke manieren om voor een huis te sparen",
      description:
        "Een huis kopen een onbereikbare toekomstdroom? Dat hoeft helemaal niet!",
      articleUrl: "http://localhost:4200",
    },
    {
      imageUrl: "https://via.placeholder.com/300",
      title: "6 makkelijke manieren om voor een huis te sparen",
      description:
        "Een huis kopen een onbereikbare toekomstdroom? Dat hoeft helemaal niet!",
      articleUrl: "http://localhost:4200",
    },
    {
      imageUrl: "https://via.placeholder.com/300",
      title: "6 makkelijke manieren om voor een huis te sparen",
      description:
        "Een huis kopen een onbereikbare toekomstdroom? Dat hoeft helemaal niet!",
      articleUrl: "http://localhost:4200",
    },
  ];
}
