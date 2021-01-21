import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RatingComponent } from './components/rating/rating.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { FeedbackService } from './services/feedback.service';
import { FeedbackFormComponent } from './components/feedback/feedback-form.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogListItemComponent } from './components/blog-list/blog-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackFormComponent,
    RatingComponent,
    BlogListComponent,
    BlogListItemComponent,
    AutofocusDirective,
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'serverApp',
    }),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FeedbackService],
  bootstrap: [AppComponent],
})
export class AppModule {}
