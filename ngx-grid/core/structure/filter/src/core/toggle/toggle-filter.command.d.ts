import { FieldId } from '../../../../field/src/domain/field/field.id';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export declare class ToggleFilterCommand extends StructureCommand {
    private readonly fieldId;
    private readonly externalFilterId;
    private readonly filterValue;
    constructor(structureId: StructureId, fieldId: FieldId, externalFilterId: string, filterValue: string);
    getFieldId(): FieldId;
    getExternalFilterId(): string;
    getFilterValue(): string;
}
