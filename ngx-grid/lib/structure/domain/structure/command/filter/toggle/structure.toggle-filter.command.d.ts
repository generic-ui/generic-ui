import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-id';
import { FieldId } from '../../field/data-type/field.id';
export declare class StructureToggleFilterCommand extends Command {
    readonly structureId: StructureId;
    readonly fieldId: FieldId;
    readonly externalFilterId: string;
    readonly filterValue: string;
    constructor(structureId: StructureId, fieldId: FieldId, externalFilterId: string, filterValue: string);
}
