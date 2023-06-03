import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error message "No valid users with that email"', () => {
    const expectedMessage = 'No valid users with that email';
    const errorMessageDebugElement = fixture.debugElement.query(By.css('.qa-error-message'));
    const errorMessageElement = errorMessageDebugElement.nativeElement;
    component.message = expectedMessage;
    fixture.detectChanges();
    expect(errorMessageElement.textContent).toEqual(expectedMessage);
  });
});
