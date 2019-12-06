export interface SetupdataInterface {
    lifecycleStatus: string;
    creationDate: Date;
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
}