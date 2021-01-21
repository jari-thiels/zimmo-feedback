import { Component, Input } from "@angular/core";

export interface IBlogItem {
  imageUrl: string;
  title: string;
  description: string;
  articleUrl: string;
}

@Component({
  selector: "app-blog-list-item",
  templateUrl: "./blog-list-item.component.html",
})
export class BlogListItemComponent {
  @Input() item: IBlogItem;
}
