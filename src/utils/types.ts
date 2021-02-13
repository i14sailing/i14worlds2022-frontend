export type ScheduleDay = {
    Date: string;
    Label: string;
    Events: {
        Label: string;
        Description: string;
    }[];
    Tags: {
        Name: string;
    }[];
};
