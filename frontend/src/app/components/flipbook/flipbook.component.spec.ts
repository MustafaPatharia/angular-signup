/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlipbookComponent } from './flipbook.component';

describe('FlipbookComponent', () => {
  let component: FlipbookComponent;
  let fixture: ComponentFixture<FlipbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
