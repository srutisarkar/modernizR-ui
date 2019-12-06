import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { SetupProjectComponent } from '../setup-project/setup-project.component';
import { AnalyzeCodeComponent } from '../analyze-code/analyze-code.component';
import { AnalyzePlatformComponent } from '../analyze-platform/analyze-platform.component';
import { AnalyzeQueryComponent } from '../analyze-query/analyze-query.component';
import { ReportComponent } from '../report/report.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    @ViewChild('SetupProjectComponent') setupProjectComponent: SetupProjectComponent;    
    @ViewChild('AnalyzeCodeComponent') analyzeCodeComponent: AnalyzeCodeComponent;
    @ViewChild('AnalyzePlatformComponent') analyzePlatformComponent: AnalyzePlatformComponent;
    @ViewChild('AnalyzeQueryComponent') analyzeQueryComponent: AnalyzeQueryComponent;
    @ViewChild('ReportComponent') reportComponent: ReportComponent;

    get StepCreate_Code() {
       return this.setupProjectComponent ? this.setupProjectComponent.StepCreate_Code : null;
    }

    get StepAnalyze_Code() {
       return this.analyzeCodeComponent ? this.analyzeCodeComponent.StepAnalyze_Code : null;
    }

    get stepAnalyze_Platform() {
       return this.analyzePlatformComponent ? this.analyzePlatformComponent.stepAnalyze_Platform : null;
    }

    get stepQuery() {
       return this.analyzeQueryComponent ? this.analyzeQueryComponent.stepQuery : null;
    }

     get stepReport() {
       return this.reportComponent ? this.reportComponent.stepReport : null;
    }
    
    constructor(private fb: FormBuilder) { }


  ngOnInit() {  }

}
