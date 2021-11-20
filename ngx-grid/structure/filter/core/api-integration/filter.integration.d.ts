import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { CompositionId } from '../../../../composition/core/api/composition.id';
import { FilterWarehouse } from '../api/filter.warehouse';
import { StructureId } from '../../../core/api/structure.id';
import { FilterCommandInvoker } from '../api/filter.command-invoker';
import { FilterForColumn } from './filter-integration.api';
export declare class FilterIntegration {
    private readonly compositionWarehouse;
    private readonly filterCommandInvoker;
    private readonly filterWarehouse;
    constructor(compositionWarehouse: CompositionWarehouse, filterCommandInvoker: FilterCommandInvoker, filterWarehouse: FilterWarehouse);
    findFilterTypes(columnName: string, compositionId: CompositionId, structureId: StructureId): Array<string>;
    findFilters(compositionId: CompositionId, structureId: StructureId): {
        [key: string]: ReadonlyArray<FilterForColumn>;
    };
    filter(columnName: string, filterType: string, value: any, compositionId: CompositionId, structureId: StructureId): void;
}
