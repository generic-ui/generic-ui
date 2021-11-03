import { CommandDispatcher, CommandInvoker } from '@generic-ui/hermes';
import { FilterConfig } from './filter-config';
import { StructureId } from '../../../core/api/structure.id';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { FilterTypeId } from '../domain/type/filter-type.id';
import { FilterId } from './filter.id';
import { UniqueValueId } from '../domain/unique/unique-value-id';
import * as i0 from "@angular/core";
export declare class FilterCommandInvoker implements CommandInvoker {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterCommandInvoker, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FilterCommandInvoker>;
}
//# sourceMappingURL=filter.command-invoker.d.ts.map