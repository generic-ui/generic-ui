import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-id';
import { FieldId } from '../../field/data-type/field.id';
export declare class StructureToggleFilterCommand extends Command {
    private readonly fieldId;
    private readonly externalFilterId;
    private readonly filterValue;
    constructor(structureId: StructureId, fieldId: FieldId, externalFilterId: string, filterValue: string);
    getFieldId(): FieldId;
    getExternalFilterId(): string;
    getFilterValue(): string;
}
