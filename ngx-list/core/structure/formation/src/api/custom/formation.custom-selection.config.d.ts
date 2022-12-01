import { FormationCustomSelectType } from './formation.custom-select-type';
export interface FormationCustomSelectionFunction {
    key?: string;
    text: string;
    select: (ids: Array<any>) => Array<any>;
}
export declare class FormationCustomSelectionConfig {
    enabled?: boolean;
    selections?: Array<FormationCustomSelectType | FormationCustomSelectionFunction>;
}
