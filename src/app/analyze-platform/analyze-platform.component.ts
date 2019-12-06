import { OnInit } from '@angular/core';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationComponent } from '../navigation/navigation.component';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { AnalyzerplatformService } from '../analyzerplatform.service';
import { TAPlatformInterface } from './analyzerplatform.interface';
import { ToasterServiceService } from '../toaster-service.service';


@Component({
    selector: 'app-analyze-platform',
    templateUrl: './analyze-platform.component.html',
    styleUrls: ['./analyze-platform.component.css']
})
export class AnalyzePlatformComponent implements OnInit {
    stepAnalyze_Platform: FormGroup;
    setupdatashow: boolean = false;
    constructor(private formBuilder: FormBuilder, private analyzerplatformService: AnalyzerplatformService, private toasterServiceService: ToasterServiceService) {
        this.analyzerplatformService.project_Name_TAPlatform.subscribe((projectName) => {
            this.taPlatformObj.projectName = projectName
        });
    }
    taPlatformObj: TAPlatformInterface = {
        category: "Testing",
        platform: "Linux",
        projectName: null,
        toolName: "IBM-TA"
    };
    taPlatformdataDetails = {
        "analyzer": {
            "category": "",
            "createdTimeStamp": new Date(),
            "dataCollectorURL": "",
            "projectName": "",
            "toolName": ""
        },
        "custom": {

            "collectionId": "",
            "collectionName": "",
            "projectId": ""
        }

    };

    ibmTAfetchData() {
        this.analyzerplatformService.getibmtaanalyze(this.taPlatformObj).subscribe((data) => {
            if (data.analyzer) {
                this.taPlatformdataDetails = data;
                this.ngOnInit();
                this.setupdatashow = true;
                this.toasterServiceService.Success('Added Successfully!');

            } else {
                this.toasterServiceService.Error(data.Conflict);
            }
        },
            (error: any) => {
                console.log(error);
                this.toasterServiceService.Error(error.error.message);
            }
        )

    }

    ngOnInit() {
        this.stepAnalyze_Platform = this.formBuilder.group({
            address: ['', Validators.required]
        });

    }


}
