import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationComponent } from '../navigation/navigation.component';
import { QueryService } from '../query.service';


@Component({
    selector: 'app-analyze-query',
    templateUrl: './analyze-query.component.html',
    styleUrls: ['./analyze-query.component.css']
})
export class AnalyzeQueryComponent implements OnInit {
    formatLabel;
    stepQuery: FormGroup;
    single_Selection_Data = [];
    userAnswer;
    single_Selection_Data_Greater_05 = [];
    single_Selection_Data_Smaller_04 = [];
    text_Data = [];
    number_Data = [];
    Percentage_Data = [];
    multiple_Selection_Data = [];
    questionData = []
    questionObject = {
        question: String,
        options: []
    };

    questionStoringObject = {
        storeQuestion: String,
        StoreOptions: String
    };

    multipleQuestionStoringObject = {
        storeMultipleQuestion: String,
        StoreMultipleOptions: String
    };

    numberQuestionStoringObject = {
        storeNumberQuestion: String,
        StoreNumberOptions: String
    };

    storeQuestionOption = [];
    storeQuestionOptionNumber = [];
    storeMultipleQuestionOption = [];
    // api data
    queryData = {
        total_rows: null,
        offset: null,
        rows: [],

    }

    // data complete
    constructor(private formBuilder: FormBuilder, private queryService: QueryService) {
        this.getQueryData();
    }

    ngOnInit() {
        this.onOptionSelectionSubmit();
        this.stepQuery = this.formBuilder.group({
            age: ['', Validators.required]
        });

    }

    onOptionSelectionSubmit() { }

    /* save the data of Single selection less than 5 option*/
    radioChange(question, option) {
        this.questionStoringObject = {
            storeQuestion: question,
            StoreOptions: option
        }
        this.storeQuestionOption.push(this.questionStoringObject);
    }

    /* save the data of Question of type number*/

    radioChangeNumber(question, option) {
        this.numberQuestionStoringObject = {
            storeNumberQuestion: question,
            StoreNumberOptions: option
        };

    }

    /* save the data of Multiple selection option*/

    multipleSelectionChange(question, option, event) {
        this.multipleQuestionStoringObject = {
            storeMultipleQuestion: question,
            StoreMultipleOptions: option
        }
        if (event.checked) {
            this.storeMultipleQuestionOption.push(this.multipleQuestionStoringObject);
        } else if (!(event.checked)) {
            this.storeMultipleQuestionOption.forEach((ele,index)=>{
                    if (ele.StoreMultipleOptions==option) {
                        this.storeMultipleQuestionOption.splice(index, 1);
                    }
            });

        }
    }

    /* Calling api and populating the Questions with options */
    getQueryData() {
        this.single_Selection_Data = [];
        this.single_Selection_Data_Greater_05 = [];
        this.text_Data = [];
        this.number_Data = [];
        this.Percentage_Data = [];
        this.multiple_Selection_Data = [];
        this.questionData = [];
        this.queryService.getQueryData().subscribe((data) => {
            data.rows.forEach((element, i) => {
                this.questionObject = {
                    question: data.rows[i].doc.surveyQuestion,
                    options: data.rows[i].doc.surveyFieldOption
                }
                this.questionData.push(this.questionObject);
                if (data.rows[i].doc.surveyFieldType == "Text") {
                    let textQuestion = {
                        questionText: data.rows[i].doc.surveyQuestion,
                        optionText: data.rows[i].doc.surveyFieldOptions
                    };
                    this.text_Data.push(textQuestion)
                }
                if (data.rows[i].doc.surveyFieldType == "Single Selection") {
                    let single_Selection_Question = {
                        questionSingleSelection: data.rows[i].doc.surveyQuestion,
                        optionSingleSelection: data.rows[i].doc.surveyFieldOptions
                    };
                    this.single_Selection_Data.push(single_Selection_Question)
                }

                if (data.rows[i].doc.surveyFieldType == "Single Selection") {
                    let single_Selection_Question = {
                        questionSingleSelection: data.rows[i].doc.surveyQuestion,
                        optionSingleSelection: data.rows[i].doc.surveyFieldOptions
                    };

                    this.single_Selection_Data.push(single_Selection_Question)

                }

                if (data.rows[i].doc.surveyFieldType == "Multiple Selection") {
                    let multiple_Selection_Question = {
                        questionMultipleSelection: data.rows[i].doc.surveyQuestion,
                        optionMultipleSelection: data.rows[i].doc.surveyFieldOptions
                    };
                    this.multiple_Selection_Data.push(multiple_Selection_Question)
                }
                if (data.rows[i].doc.surveyFieldType == "Number") {
                    let number_Question = {
                        questionNumber: data.rows[i].doc.surveyQuestion,
                        optionNumber: data.rows[i].doc.surveyFieldOptions
                    };
                    this.number_Data.push(number_Question)
                }
                if (data.rows[i].doc.surveyFieldType == "Percentage") {
                    let percentage_Question = {
                        questionPercentage: data.rows[i].doc.surveyQuestion,
                        optionPercentage: data.rows[i].doc.surveyFieldOptions
                    };
                    this.Percentage_Data.push(percentage_Question)

                }
            });
            this.single_Selection_Data.forEach(element => {
                if (element.optionSingleSelection.length > 5) {
                    this.single_Selection_Data_Greater_05.push(element)
                }
                else {
                    this.single_Selection_Data_Smaller_04.push(element)
                }
            });
            this.queryData = data;
        })
    }




}
