import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/UI/material-module';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputComponent ],
      imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show label', () => {
    component.label = 'email';
    fixture.detectChanges();
    const labelDebugElement = fixture.debugElement.query(By.css('.qa-button-text'));
    const labelElement = labelDebugElement.nativeElement;
    expect(labelElement.textContent).toBe('email');
  });

  it('input type should be "email"', () => {
    component.type = 'email';
    fixture.detectChanges();
    const inputDebugElement = fixture.debugElement.query(By.css('input'));
    const inputElement = inputDebugElement.nativeElement;
    expect(inputElement.attributes.getNamedItem('type').nodeValue).toBe('email');
  });
  
  it('input placeholder should be "test@example.com"', () => {
    component.placeholder = 'test@example.com';
    fixture.detectChanges();
    const inputDebugElement = fixture.debugElement.query(By.css('input'));
    const inputElement = inputDebugElement.nativeElement;
    expect(inputElement.attributes.getNamedItem('ng-reflect-placeholder').nodeValue).toBe('test@example.com');
  });

  it('input placeholder should change from "test@example.com" to "test@example.es"', () => {
    component.label = 'email';
    component.placeholder = 'test@example.com';
    fixture.detectChanges();
    const inputDebugElement = fixture.debugElement.query(By.css('input'));
    const inputElement = inputDebugElement.nativeElement;
    expect(inputElement.attributes.getNamedItem('ng-reflect-placeholder').nodeValue).toBe('test@example.com');
    component.placeholder = 'test@example.es';
    fixture.detectChanges();
    expect(inputElement.attributes.getNamedItem('ng-reflect-placeholder').nodeValue).toBe('test@example.es');
  });
});