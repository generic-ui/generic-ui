import { CompositionWarehouse } from '../../../../composition/src/api/composition.warehouse';
import { CompositionId } from '../../../../composition/src/api/global/composition.id';
import { FilterWarehouse } from '../api/filter.warehouse';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { FilterPublisher } from '../api/filter.publisher';
import { FilterForColumn } from './filter-integration.api';
export declare class FilterIntegration {
    private readonly compositionWarehouse;
    private readonly filterCommandInvoker;
    private readonly filterWarehouse;
    constructor(compositionWarehouse: CompositionWarehouse, filterCommandInvoker: FilterPublisher, filterWarehouse: FilterWarehouse);
    static readonly services: (typeof CompositionWarehouse | typeof FilterWarehouse | typeof FilterPublisher)[];
    findFilterTypes(columnName: string, compositionId: CompositionId, structureId: StructureId): Array<string>;
    findFilters(compositionId: CompositionId, structureId: StructureId): {
        [key: string]: ReadonlyArray<FilterForColumn>;
    };
    filter(columnName: string, filterType: string, value: any, compositionId: CompositionId, structureId: StructureId): void;
}
