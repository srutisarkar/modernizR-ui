import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Output, EventEmitter, Input } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { AnalyzeSerService } from '../analyze-ser.service';
import { AnalyzerplatformService } from '../analyzerplatform.service';
import { SetupdataInterface } from './setupdata.interface';
import { SetupUpdatedataInterface } from './updatedata.interface';
import { DatasaveToDBInterface } from '../datasavetodb.interface';
import { ToasterServiceService } from '../toaster-service.service';

export interface Chip {
  name: string;
}

export interface ChipTarget {
  name: string;
}

@Component({
  selector: 'app-setup-project',
  templateUrl: './setup-project.component.html',
  styleUrls: ['./setup-project.component.css']
})
export class SetupProjectComponent implements OnInit {
  isLinear = false;
  StepCreate_Code;
  showNextBtn: boolean = true;
  showUpdateBtn: boolean = false;
  constructor(private formBuilder: FormBuilder, private analyzeSerService: AnalyzeSerService, private analyzerplatformService: AnalyzerplatformService, private toasterServiceService: ToasterServiceService) { 
    console.log(this.isLinear);
  }
  // StepCreate_Code: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  /*   for Chip Adding and deleting */
  /* Object to call the post Api  */
  setupprojectObj: SetupdataInterface = {
    lifecycleStatus: "created",
    creationDate: new Date(),
    baseInfo: {
      projectName: null,
      portfolio: null,
      description: null,
      infoCreationDate: new Date(),
      infoModifiedDate: new Date(),
      infoStatus: "new",
      sourcePlatform: [],
      destinationPlatform: []
    }
  }

  /* Stroing the setup data to a project data */

/*  setupprojectObj: DatasaveToDBInterface = {
    _id: null,
    _rev: null,
    lifecycleStatus: null,
    creationDate: new Date(),
    modifiedDate:new Date(),
    completionDate:new Date(),
    baseInfo:{
      projectName: null,
      portfolio: null,
      description: null,
      infoCreationDate: new Date(),
      infoModifiedDate: new Date(),
      infoStatus: "new",
      sourcePlatform: [],
      destinationPlatform: []
    },
    profiles:[
       { 
        toolDetails:{ 
            name: null,
            type:null,
          },
          reportUrl: null,
          analysisCreationDate: new  Date(),
          analysisModifiedDate: new  Date(),
          analysisScore: null,
          analysisStatus: null,
       }
    ],
    questionnaire:{ 
        qaOverallScore: null,
        qaDetails:[ 
          { 
            questionId: null,
            answer: [],
            qaCreationDate: new  Date(),
            qaModifiedDate: new  Date(),
            qaScore: null,
            qaStatus: null,
          }
       ]
    }
  }; */

  updateSetupDataObj: DatasaveToDBInterface = {
    _id: null,
    _rev: null,
    lifecycleStatus: null,
    creationDate: null,
    modifiedDate:new Date(),
    completionDate:new Date(),
    baseInfo:{
      projectName: null,
      portfolio: null,
      description: null,
      infoCreationDate: new Date(),
      infoModifiedDate: new Date(),
      infoStatus: "new",
      sourcePlatform: [],
      destinationPlatform: []
    },
    profiles:[
       { 
        toolDetails:{ 
            name: null,
            type:null,
          },
          reportUrl: null,
          analysisCreationDate: new  Date(),
          analysisModifiedDate: new  Date(),
          analysisScore: null,
          analysisStatus: null,
       }
    ],
    questionnaire:{ 
        qaOverallScore: null,
        qaDetails:[ 
          { 
            questionId: null,
            answer: [],
            qaCreationDate: new  Date(),
            qaModifiedDate: new  Date(),
            qaScore: null,
            qaStatus: null,
          }
       ]
    }
  };

 /* updateSetupDataObj = {
    _id: null,
    _rev: null,
    lifecycleStatus: "created",
    creationDate: new Date(),
    baseInfo: {
      projectName: '',
      portfolio: null,
      description: null,
      infoCreationDate: new Date(),
      infoModifiedDate: new Date(),
      infoStatus: "new",
      sourcePlatform: [],
      destinationPlatform: []
    },

    analysis: [
      {
        analysisId: null,
        toolDetails: {
          name: null,
          type: null
        },
        reportUrl: null,
        analysisCreationDate: new Date(),
        analysisModifiedDate: new Date(),
        analysisScore: null,
        analysisStatus: null,
      }
    ],
    questionnaire: {
      qaOverallScore: null,
      qaDetails: [
        {
          questionId: null,
          answer: null,
          qaCreationDate: new Date(),
          qaModifiedDate: new Date(),
          qaScore: null,
          qaStatus: null
        }
      ]
    }
  };

  */
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  chips: Chip[] = [];

  chipsTarget: ChipTarget[] = [];

  ngOnInit() {
    this.StepCreate_Code = this.formBuilder.group({
      projectName: new FormControl('', [Validators.required]),
      portfolio: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      sourcechip: new FormControl([], [Validators.required]),
      targetchip: new FormControl([], [Validators.required])

    });

  }

  /* api call to store data into the database*/

  storedata() {
    console.log(this.setupprojectObj);
    this.setupprojectObj.baseInfo.destinationPlatform = [];
    this.setupprojectObj.baseInfo.sourcePlatform = [];
    this.setupprojectObj.baseInfo.projectName = this.StepCreate_Code.value.projectName;
    this.setupprojectObj.baseInfo.portfolio = this.StepCreate_Code.value.portfolio;
    this.setupprojectObj.baseInfo.description = this.StepCreate_Code.value.description;
    this.chips.forEach((data) => {
      this.setupprojectObj.baseInfo.sourcePlatform.push(data.name);
      (document.getElementById('Project_Name') as HTMLButtonElement).disabled = true;
    });
    this.chipsTarget.forEach((data) => {
      this.setupprojectObj.baseInfo.destinationPlatform.push(data.name);
    });
    this.analyzerplatformService.setProjectName(this.setupprojectObj.baseInfo.projectName);
    this.analyzeSerService.addBaseProfile(this.setupprojectObj).subscribe((data) => {
      this.updateSetupDataObj._id = data.id;
      this.updateSetupDataObj._rev = data.rev;
     // this.showNextBtn = false;
      this.showUpdateBtn = true;
      this.isLinear = true;
      console.log(this.isLinear);
      this.toasterServiceService.Success('Data Entry Added Successfully!');
      (document.getElementById('nextBtn') as HTMLButtonElement).disabled = true;


    },
      (error: any) => {
        this.toasterServiceService.Error(error.error.reason);
        console.log(error);
      }
    )
  }
/* Api call to update the data */
  updateProfile() {
    this.updateSetupDataObj.baseInfo.destinationPlatform = [];
    this.updateSetupDataObj.baseInfo.sourcePlatform = [];
    this.updateSetupDataObj.baseInfo.projectName = this.StepCreate_Code.value.projectName;
    this.updateSetupDataObj.baseInfo.portfolio = this.StepCreate_Code.value.portfolio;
    this.updateSetupDataObj.baseInfo.description = this.StepCreate_Code.value.description;
    this.chips.forEach((data) => {
      this.updateSetupDataObj.baseInfo.sourcePlatform.push(data.name)
    });
    this.chipsTarget.forEach((data) => {
      this.updateSetupDataObj.baseInfo.destinationPlatform.push(data.name);
    });
    this.analyzeSerService.getBaseProfileData(this.updateSetupDataObj._id).subscribe((data) => {
      this.chipsTarget = [];
      this.chips = [];
      this.updateSetupDataObj._rev = data._rev;
      this.analyzeSerService.updateBaseProfileData(this.updateSetupDataObj, data._id).subscribe((data) => {
      });
    })


  }

  /*   for Chip Adding and deleting */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our chip
    if ((value || '').trim()) {
      this.chips.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(chip: Chip): void {
    const index = this.chips.indexOf(chip);

    if (index >= 0) {
      this.chips.splice(index, 1);
    }
  }


  addTarget(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our chip
    if ((value || '').trim()) {
      this.chipsTarget.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeTarget(chipTarget: ChipTarget): void {
    const index = this.chipsTarget.indexOf(chipTarget);
    if (index >= 0) {
      this.chipsTarget.splice(index, 1);
    }
  }

  onSubmit() {  }

}
