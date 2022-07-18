export interface FormationCustomSelectionFunction {
    key: string;
    text: string;
    functionId: string;
}
export declare class FormationCustomSelection {
    private readonly enabled;
    private readonly selections;
    constructor(enabled: boolean, selections: Array<FormationCustomSelectionFunction>);
    isEnabled(): boolean;
    getSelections(): Array<any>;
}
