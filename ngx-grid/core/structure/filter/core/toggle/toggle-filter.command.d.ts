import { FieldId } from '../../../field/domain/field/field.id';
import { StructureId } from '../../../structure-core/api/global/structure.id';
import { StructureCommand } from '../../../structure-core/core/structure.command';
export declare class ToggleFilterCommand extends StructureCommand {
    private readonly fieldId;
    private readonly externalFilterId;
    private readonly filterValue;
    constructor(structureId: StructureId, fieldId: FieldId, externalFilterId: string, filterValue: string);
    getFieldId(): FieldId;
    getExternalFilterId(): string;
    getFilterValue(): string;
}
