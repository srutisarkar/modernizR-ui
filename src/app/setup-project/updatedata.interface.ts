export interface SetupUpdatedataInterface {
    _id: string;
    _rev:string;
    lifecycleStatus: string;
    creationDate: Date;
    modifiedDate: Date;
    completionDate: Date;
    baseInfo: {
        projectName: string;
        portfolio: string;
        description: string;
        infoCreationDate: Date;
        infoModifiedDate: Date;
        infoStatus: string;
        sourcePlatform: Array<String>,
        destinationPlatform:Array<String>

    }
    analysis: [
        {
            analysisId: string,
            toolDetails: {
                name: string,
                type: string
            },
            reportUrl: string,
            analysisCreationDate: Date,
            analysisModifiedDate: Date,
            analysisScore: string,
            analysisStatus: string,
        }
    ],
    questionnaire:{
        qaOverallScore: string,
        qaDetails:[
            {
                questionId: string,
                answer: string,
                qaCreationDate: Date,
                qaModifiedDate: Date,
                qaScore: string,
                qaStatus: string
            }
        ]
    }
}
