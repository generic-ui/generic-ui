import { FilterConfig } from '../api/config/filter.config';
import { StructureId } from '../../../core/api/structure.id';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { FilterTypeId } from './type/filter-type.id';
import { FilterId } from '../api/filter.id';
import { UniqueValueId } from './unique/unique-value-id';
import { CommandDispatcher } from '@generic-ui/hermes';
export declare class FilterDispatcher {
    private readonly commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setConfig(config: FilterConfig, structureId: StructureId): void;
    add(fieldId: FieldId, filterTypeId: FilterTypeId, value: any, structureId: StructureId): void;
    removeAll(structureId: StructureId): void;
    remove(filterId: FilterId, structureId: StructureId): void;
    selectAllUniqueFilter(fieldId: FieldId, structureId: StructureId): void;
    unselectAllUniqueFilter(fieldId: FieldId, structureId: StructureId): void;
    selectUniqueFilter(fieldId: FieldId, uniqueValueId: UniqueValueId, structureId: StructureId): void;
    unselectUniqueFilter(fieldId: FieldId, uniqueValueId: UniqueValueId, structureId: StructureId): void;
}
