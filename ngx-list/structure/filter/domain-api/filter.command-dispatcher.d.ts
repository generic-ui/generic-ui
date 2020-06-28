import { CommandDispatcher } from '@generic-ui/hermes';
import { FilterConfig } from './filter-config';
import { StructureId } from '../../../lib/structure/domain/structure.id';
import { FieldId } from '../../field/domain/core/field/field.id';
import { FilterTypeId } from '../domain/type/filter-type.id';
import { FilterId } from '../domain/filter.id';
import { UniqueValueId } from '../domain/unique/unique-value-id';
export declare class FilterCommandDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setFilteringEnabled(config: FilterConfig, structureId: StructureId): void;
    add(fieldId: FieldId, filterTypeId: FilterTypeId, value: any, structureId: StructureId): void;
    removeAllFilters(structureId: StructureId): void;
    removeFilter(filterId: FilterId, structureId: StructureId): void;
    selectAllUniqueFilter(fieldId: FieldId, structureId: StructureId): void;
    unselectAllUniqueFilter(fieldId: FieldId, structureId: StructureId): void;
    selectUniqueFilter(fieldId: FieldId, uniqueValueId: UniqueValueId, structureId: StructureId): void;
    unselectUniqueFilter(fieldId: FieldId, uniqueValueId: UniqueValueId, structureId: StructureId): void;
}
