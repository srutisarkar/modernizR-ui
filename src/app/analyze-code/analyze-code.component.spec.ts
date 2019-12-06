/* import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationComponent } from '../navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { AnalyzeCodeComponent } from './analyze-code.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import {
  MatMenuModule, MatIconModule, MatCardModule, MatInputModule, MatButtonModule,
  MatFormFieldModule, MatSelectModule, MatChipsModule, MatRippleModule
} from '@angular/material';

import {CdkStep, CdkStepper} from '@angular/cdk/stepper';

describe('AnalyzeCodeComponent', () => {
  let component: AnalyzeCodeComponent;
  let fixture: ComponentFixture<AnalyzeCodeComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule, MatIconModule, MatCardModule, MatInputModule, MatButtonModule,
        MatStepperModule, MatFormFieldModule, MatSelectModule,
        MatChipsModule, ReactiveFormsModule, BrowserAnimationsModule, 
        MatRippleModule],

      declarations: [AnalyzeCodeComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); */