import { CommonModule } from "@angular/common";
import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import {
  ControlContainer,
  FormControl,
  FormGroup,
  Validators,
  NgControl,
  ReactiveFormsModule,
} from "@angular/forms";
import { By } from "@angular/platform-browser";
import { RatingComponent } from "./rating.component";

describe("Component: DateTimeInput", () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;
  let formGroup: FormGroup;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RatingComponent],
      imports: [CommonModule, ReactiveFormsModule],
      providers: [
        {
          provide: ControlContainer,
          useValue: {
            control: new FormGroup({
              rating: new FormControl(null, [Validators.required]),
            }),
          },
        },
        {
          provide: NgControl,
          useValue: {
            control: null,
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    formGroup = TestBed.get(ControlContainer).control;
    fixture.detectChanges();
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should show 5 buttons", () => {
    const elements = fixture.debugElement.queryAll(By.css(".rating__button"));
    expect(elements.length).toBe(5);
  });
  it("should update the value when selecting a rating", () => {
    const button = fixture.debugElement.query(By.css(".rating__button--2"));
    button.nativeElement.click();
    expect(component.value).toBe(2);
  });
  it("should update the class of a button when selecting", () => {
    const button = fixture.debugElement.query(By.css(".rating__button--2"));
    button.nativeElement.click();
    fixture.detectChanges();
    expect(Object.keys(button.classes)).toContain("rating__button--selected");
  });
  it("should NOT be able to select a rating when DISABLED", () => {
    component.disabled = true;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css(".rating__button--2"));
    button.nativeElement.click();
    expect(component.value).toBe(undefined);
  });
});
