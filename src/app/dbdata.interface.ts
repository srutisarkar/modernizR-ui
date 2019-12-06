export interface dbdataInterface {
    total_rows: Number,
    offset: Number,
    rows: [
        {
            id: String,
            key: String,
            value: {
                _id: String,
                _rev: String,
                surveyQuestion: String,
                surveyCategory: String,
                surveyFieldType: String,
                surveyFieldOptions: [
                    {
                        qaOption: String,
                        qaScore: Number,
                        qaCode: Number
                    }
                ],
                surveyCreationDate: String,
                isValid: Number,
                tags: [
                    String
                ]
            }
        }
    ]
}