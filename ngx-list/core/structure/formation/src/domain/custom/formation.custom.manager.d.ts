import { StructureAggregateEvent } from '../../../../structure-core/src/core/structure.aggregate-event';
import { FormationCustomSelectionFunctionModel } from '../../api/custom/formation.custom-selection';
import { Optional } from '@generic-ui/hermes';
import { FormationCustomSelectId } from '../../api/custom/formation.custom-select.id';
import { FormationCustomSelectType } from '../../api/custom/formation.custom-select-type';
import { FormationCustomSelectionFunction } from '../../api/custom/formation.custom-selection.config';
export declare class FormationCustomManager {
    private enabled;
    private selections;
    static id: number;
    constructor(enabled: boolean, selections: Array<FormationCustomSelectionFunctionModel>);
    init(): Array<StructureAggregateEvent>;
    isEnabled(): boolean;
    setEnabled(enabled: boolean): void;
    getSelections(): Array<FormationCustomSelectionFunctionModel>;
    setSelections(selections: Array<FormationCustomSelectType | FormationCustomSelectionFunction>): void;
    findSelection(id: FormationCustomSelectId): Optional<FormationCustomSelectionFunctionModel>;
}
