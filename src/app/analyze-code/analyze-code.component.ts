import { OnInit } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationComponent } from '../navigation/navigation.component';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { AnalyzerplatformService } from '../analyzerplatform.service';
import { SonarInterface } from './analyzecode.interface';
import { ToasterServiceService } from '../toaster-service.service';



@Component({
    selector: 'app-analyze-code',
    templateUrl: './analyze-code.component.html',
    styleUrls: ['./analyze-code.component.css']
})
export class AnalyzeCodeComponent implements OnInit {

    StepAnalyze_Code: FormGroup;
    setupdataForSonarshow: boolean = false;

    constructor(private formBuilder: FormBuilder, private analyzerplatformService: AnalyzerplatformService, private toasterServiceService: ToasterServiceService) {
        this.analyzerplatformService.project_Name_TAPlatform.subscribe((projectName) => {
            this.sonarRequestObj.analyzer.projectName = projectName
        });
        console.log(this.sonarRequestObj.analyzer.projectName);
    }

    sonarRequestObj: SonarInterface = {
        analyzer: {
            toolName: "Sonar",
            category: "Testing Sonar",
            projectName: null

        }
    };

    sonarfetchDataDetails = {
        "analyzer": {
            "custom": [
                {
                  "projectKey": "",
                  "tokenId": "",
                  "mvnCommandToExecute": "",
                  "projectName": ""
                }
              ],
              "createdTimeStamp": new Date(),
              "location": "",
              "category": "",
              "projectName": "",
              "toolName": ""
        }

    };

    ngOnInit() {
        this.StepAnalyze_Code = this.formBuilder.group({
            name: ['', Validators.required]
        });
    }

    sonarfetchData() {
        console.log(this.sonarRequestObj);
        this.analyzerplatformService.generateTokenForSonar(this.sonarRequestObj).subscribe((data) => {
            console.log(data);
            this.sonarfetchDataDetails = data;
            this.setupdataForSonarshow = true;
            console.log(this.sonarfetchDataDetails);
            this.toasterServiceService.Success('Added Successfully!');
        },
        (error: any) => {
          console.log(error);
          this.toasterServiceService.Error(error.error.message);
        }
      )

    }

    copyTextCommand() {
        let textarea = document.createElement('textarea') as HTMLTextAreaElement;
        textarea.id = 't'
        document.body.appendChild(textarea)
        textarea.value = document.getElementById("copyTextID").innerText
        let selector = document.querySelector('#t') as HTMLInputElement
        selector.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
    }
}
