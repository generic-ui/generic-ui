import { FormationCustomSelectId } from './formation.custom-select.id';
import { ItemEntity } from '../../../../source/src/domain/item/item.entity';
export declare class FormationCustomSelectionFunctionModel {
    private readonly key;
    private readonly text;
    private readonly customSelectId;
    private readonly builtIn;
    private readonly method?;
    constructor(key: string, text: string, customSelectId: FormationCustomSelectId, builtIn: boolean, method?: (items: Array<ItemEntity>) => Array<ItemEntity>);
    getKey(): string;
    getText(): string;
    getCustomSelectId(): FormationCustomSelectId;
    isBuiltIn(): boolean;
    customSelect(items: Array<ItemEntity>): Array<ItemEntity>;
}
export declare class FormationCustomSelection {
    private readonly enabled;
    private readonly selections;
    constructor(enabled: boolean, selections: Array<FormationCustomSelectionFunctionModel>);
    isEnabled(): boolean;
    getSelections(): Array<any>;
}
