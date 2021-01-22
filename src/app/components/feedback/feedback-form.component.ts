import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FeedbackService } from '../../services/feedback.service';

enum FormState {
  New,
  Submitted,
  Loading,
  Saved,
  Error,
}

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
})
export class FeedbackFormComponent implements OnInit, OnDestroy {
  // Form group with all data
  form: FormGroup;

  // Keeps the state of the form (saved, in error, submitted, ...)
  state: FormState = FormState.New;

  // Made a single subscription variable because we only have 1 in the project
  subscription: Subscription;

  // Get the comment textarea to give focus when a rating is selected
  @ViewChild('comment') textarea: ElementRef;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      rating: new FormControl(),
      comment: new FormControl(null, [Validators.required]),
    });
    // Used to set fous on textarea when a new rating is selected
    this.subscription = this.form.controls.rating.valueChanges.subscribe(() => {
      if (this.textarea) {
        this.textarea.nativeElement.focus();
      }
    });
  }

  onFormSubmit(): void {
    // Don't resubmit when alreasdy calling the api
    if (this.state === FormState.Loading) {
      return;
    }

    this.state = FormState.Submitted;

    // Don't submit when the form is not valid
    if (!this.form.valid) {
      return;
    }

    // Start loading
    this.state = FormState.Loading;
    this.feedbackService.sendFeedback(this.form.value).subscribe(
      () => {
        // Disable the rating control whem the feedback is send succesfully
        this.form.controls.rating.disable();
        this.state = FormState.Saved;
      },
      () => {
        this.state = FormState.Error;
      }
    );
  }

  isInFormState(state: string): boolean {
    return this.state === FormState[state];
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
