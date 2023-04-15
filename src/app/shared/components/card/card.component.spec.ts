import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MaterialModule } from 'src/app/shared/material-module';
import { CardComponent } from './card.component';

@Component({
  template: `<vrmg-card><h1>Hello world</h1></vrmg-card>`,
})
class TestHostComponent {}

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent ],
      imports: [ MaterialModule, CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance; 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has the title "Hello world"', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const titleElement: HTMLElement = hostElement.querySelector('.qa-title')!;
    component.title = 'Hello world';
    fixture.detectChanges();
    expect(titleElement.textContent).toEqual('Hello world');
  });

  it('should has content with "Hello world"', () => {
    const testFixture = TestBed.createComponent(TestHostComponent);
    const debugElement: DebugElement = testFixture.debugElement.query(
      By.css('h1')
    );
    const element: Element = debugElement.nativeElement;
    expect(element.textContent).toBe('Hello world');
  });
});
