import { FilterCommandInvoker } from '../api/filter.command-invoker';
import { CommandDispatcher } from '@generic-ui/hermes';
import { FilterConfig } from '../api/filter.config';
import { StructureId } from '../../../core/api/structure.id';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { FilterTypeId } from './type/filter-type.id';
import { FilterId } from '../api/filter.id';
import { UniqueValueId } from './unique/unique-value-id';
export declare class DomainFilterCommandInvoker extends FilterCommandInvoker {
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
