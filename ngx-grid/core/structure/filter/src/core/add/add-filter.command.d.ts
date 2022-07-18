import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { FieldId } from '../../../../field/src/domain/field/field.id';
import { FilterTypeId } from '../../domain/type/filter-type.id';
import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export declare class AddFilterCommand extends StructureCommand {
    private readonly fieldId;
    private readonly filterTypeId;
    private readonly value;
    constructor(structureId: StructureId, fieldId: FieldId, filterTypeId: FilterTypeId, value: any);
    getFieldId(): FieldId;
    getFilterTypeId(): FilterTypeId;
    getValue(): any;
}
