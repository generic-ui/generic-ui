import { StructureId } from '../../../../../core/api/structure.id';
import { FieldId } from '../../../../../field/core/domain/field/field.id';
import { FilterTypeId } from '../../type/filter-type.id';
import { StructureCommand } from '../../../../../core/domain/structure.command';
export declare class AddFilterCommand extends StructureCommand {
    private readonly fieldId;
    private readonly filterTypeId;
    private readonly value;
    constructor(structureId: StructureId, fieldId: FieldId, filterTypeId: FilterTypeId, value: any);
    getFieldId(): FieldId;
    getFilterTypeId(): FilterTypeId;
    getValue(): any;
}
