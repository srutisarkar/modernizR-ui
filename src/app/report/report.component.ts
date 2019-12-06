import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationComponent } from '../navigation/navigation.component';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
    dataSource: object;
    dataSource_01: object;
    dataSource_02: object;
   // dataSource_03: object;
    dataSource_04: object;
    numberOfgraph = [1];
    stepReport: FormGroup;
    constructor(private formBuilder: FormBuilder) {
        this.dataSource = {
      chart: {
        caption: "Technical debt Analysis",
        lowerLimit: "0",
        upperLimit: "100",
        showValue: "1",
        numberSuffix: "%",
        theme: "fusion",
        showToolTip: "0"
      },
      // Gauge Data
      colorRange: {
        color: [
          {
            minValue: "10",
            maxValue: "60",
            code: "#F2726F"
          },
          {
            minValue: "20",
            maxValue: "95",
            code: "#62B58F"
          },
          {
            minValue: "55",
            maxValue: "100",
            code: "#FFC533"
          }
        ]
      },
      dials: {
        dial: [
          {
            value: "61"
          }
        ]
      }
    };

    this.dataSource_01 = {
      chart: {
        caption: "Proprietary code Analysis",
        lowerLimit: "0",
        upperLimit: "100",
        showValue: "1",
        numberSuffix: "%",
        theme: "fusion",
        showToolTip: "0"
      },
      // Gauge Data
      colorRange: {
        color: [
          {
            minValue: "20",
            maxValue: "70",
            code: "#F2726F"
          },
          {
            minValue: "30",
            maxValue: "95",
            code: "#FFC533"
          },
          {
            minValue: "55",
            maxValue: "100",
            code: "#62B58F"
          }
        ]
      },
      dials: {
        dial: [
          {
            value: "81"
          }
        ]
      }
    };

    this.dataSource_02 = {
      chart: {
        caption: "Other Informations",
        lowerLimit: "0",
        upperLimit: "100",
        showValue: "1",
        numberSuffix: "%",
        theme: "fusion",
        showToolTip: "0"
      },
      // Gauge Data
      colorRange: {
        color: [
          {
            minValue: "20",
            maxValue: "70",
            code: "#F2726F"
          },
          {
            minValue: "30",
            maxValue: "95",
            code: "#FFC533"
          },
          {
            minValue: "55",
            maxValue: "100",
            code: "#62B58F"
          }
        ]
      },
      dials: {
        dial: [
          {
            value: "81"
          }
        ]
      }
    };

  /*  this.dataSource_03 = {
      chart: {
        caption: "Gauge Chart caption Fourth Value",
        lowerLimit: "0",
        upperLimit: "100",
        showValue: "1",
        numberSuffix: "%",
        theme: "fusion",
        showToolTip: "0"
      },
      // Gauge Data
      colorRange: {
        color: [
          {
            minValue: "20",
            maxValue: "70",
            code: "#F2726F"
          },
          {
            minValue: "30",
            maxValue: "95",
            code: "#FFC533"
          },
          {
            minValue: "55",
            maxValue: "100",
            code: "#62B58F"
          }
        ]
      },
      dials: {
        dial: [
          {
            value: "81"
          }
        ]
      }
    };  */

    this.dataSource_04 = {
      chart: {
        caption: "Final Report",
        lowerLimit: "0",
        upperLimit: "100",
        showValue: "1",
        numberSuffix: "%",
        theme: "fusion",
        showToolTip: "0"
      },
      // Gauge Data
      colorRange: {
        color: [
          {
            minValue: "20",
            maxValue: "70",
            code: "#F2726F"
          },
          {
            minValue: "30",
            maxValue: "95",
            code: "#62B58F"
          },
          {
            minValue: "55",
            maxValue: "100",
            code: "#FFC533"
          }
        ]
      },
      dials: {
        dial: [
          {
            value: "81"
          }
        ]
      }
    };

    }
    ngOnInit() {
        this.stepReport = this.formBuilder.group({
            age: ['', Validators.required]
        });

    }
    reset() {}

}
