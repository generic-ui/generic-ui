import { Command } from '@generic-ui/hermes';
import { FieldId } from '../../../field/domain/core/field/field.id';
import { StructureId } from '../../../core/domain/structure.id';
export declare class ToggleFilterCommand extends Command {
    private readonly fieldId;
    private readonly externalFilterId;
    private readonly filterValue;
    constructor(structureId: StructureId, fieldId: FieldId, externalFilterId: string, filterValue: string);
    getFieldId(): FieldId;
    getExternalFilterId(): string;
    getFilterValue(): string;
}
