import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { FieldId } from '../../../../field/domain/core/field/field.id';
import { FilterTypeId } from '../../type/filter-type.id';
export declare class AddFilterCommand extends Command {
    private readonly fieldId;
    private readonly filterTypeId;
    private readonly value;
    constructor(structureId: StructureId, fieldId: FieldId, filterTypeId: FilterTypeId, value: any);
    getFieldId(): FieldId;
    getFilterTypeId(): FilterTypeId;
    getValue(): any;
}
