import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationComponent } from '../navigation/navigation.component';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatMenuModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule, MatButtonModule,
  MatListModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule,
  MatCheckboxModule, MatSlideToggleModule, 
    MatRippleModule
} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [MatStepperModule, ReactiveFormsModule, BrowserAnimationsModule ],
      declarations: [ NavigationComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
