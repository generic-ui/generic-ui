import { FieldId } from '../../../../field/core/domain/field/field.id';
import { StructureId } from '../../../../core/api/structure.id';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class ToggleFilterCommand extends StructureCommand {
    private readonly fieldId;
    private readonly externalFilterId;
    private readonly filterValue;
    constructor(structureId: StructureId, fieldId: FieldId, externalFilterId: string, filterValue: string);
    getFieldId(): FieldId;
    getExternalFilterId(): string;
    getFilterValue(): string;
}
