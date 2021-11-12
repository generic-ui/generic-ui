import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { CompositionId } from '../../../../composition/core/api/composition.id';
import { FilterWarehouse } from '../api/filter.warehouse';
import { StructureId } from '../../../core/api/structure.id';
import { FilterCommandInvoker } from '../api/filter.command-invoker';
export declare class FilterIntegration {
    private readonly compositionWarehouse;
    private readonly filterCommandInvoker;
    private readonly filterWarehouse;
    constructor(compositionWarehouse: CompositionWarehouse, filterCommandInvoker: FilterCommandInvoker, filterWarehouse: FilterWarehouse);
    getFilterTypes(columnName: string, compositionId: CompositionId, structureId: StructureId): Array<string>;
    filter(columnName: string, filterType: string, value: any, compositionId: CompositionId, structureId: StructureId): void;
}
