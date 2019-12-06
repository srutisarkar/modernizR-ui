export interface DatasaveToDBInterface { 
    _id: String;
    _rev: String;
    lifecycleStatus: String;
    creationDate: Date;
    modifiedDate:Date;
    completionDate:Date;
    baseInfo:{
        projectName:String;
        portfolio:String;
        description: String;
        infoCreationDate: Date;
        infoModifiedDate: Date;
        infoStatus:String;
        sourcePlatform: Array<String>,
        destinationPlatform: Array<String>
    },
    profiles:[
       { 
        toolDetails:{ 
            name: String;
            type:String;
          },
          reportUrl: String;
          analysisCreationDate: Date;
          analysisModifiedDate: Date;
          analysisScore: String;
          analysisStatus: String;
       }
    ],
    questionnaire:{ 
        qaOverallScore: String;
        qaDetails:[ 
          { 
            questionId: String,
            answer: Array<String>,
            qaCreationDate: Date;
            qaModifiedDate: Date;
            qaScore: String;
            qaStatus: String;
          }
       ]
    }
 }