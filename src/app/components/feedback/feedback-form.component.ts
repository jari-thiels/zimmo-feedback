import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { FeedbackService } from "../../services/feedback.service";

@Component({
  selector: "app-feedback-form",
  templateUrl: "./feedback-form.component.html",
})
export class FeedbackFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  loading = false;
  saved = false;
  error = false;

  subscription: Subscription;

  @ViewChild("comment", { static: false }) textarea: ElementRef;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      rating: new FormControl(),
      comment: new FormControl(null, [Validators.required]),
    });
    this.subscription = this.form.controls.rating.valueChanges.subscribe(() => {
      if (this.textarea) {
        this.textarea.nativeElement.focus();
      }
    });
  }

  onFormSubmit(): void {
    // Reset the error state
    this.error = false;

    // Show an error if necessary
    this.submitted = true;

    // Don't resubmit when alreasdy calling the api
    if (this.loading) {
      return;
    }

    // Don't submit when the form is not valid
    if (!this.form.valid) {
      return;
    }

    // Start loading
    this.loading = true;
    this.feedbackService.sendFeedback(this.form.value).subscribe(
      () => {
        // Disable the rating control whem the feedback is send succesfully
        this.form.controls.rating.disable();
        this.saved = true;
      },
      () => {
        this.error = true;
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }
}
