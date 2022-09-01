import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/UI/material-module';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent, ],
      imports:[MaterialModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('button text should be "Hello world!"', () => {
    const buttonDebugElement = fixture.debugElement.query(By.css('.qa-button-text'));
    const buttonElement = buttonDebugElement.nativeElement;
    component.text = "Hello world!";
    fixture.detectChanges();
    expect(buttonElement.textContent).toBe('Hello world!');
  });
  
  it('button icon should be "home"', () => {
    const buttonDebugElement = fixture.debugElement.query(By.css('.qa-button-icon'));
    const buttonElement = buttonDebugElement.nativeElement;
    component.icon = "home";
    fixture.detectChanges();
    expect(buttonElement.textContent).toBe('home');
  });

  it('button type should be "submit"', () => {
    const buttonDebugElement = fixture.debugElement.query(By.css('button'));
    const buttonElement = buttonDebugElement.nativeElement;
    component.type = "submit";
    fixture.detectChanges();
    expect(buttonElement.attributes.getNamedItem('type').nodeValue).toBe("submit");
  });
});
