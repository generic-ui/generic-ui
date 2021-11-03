import { HermesObservable, Warehouse } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { Paging } from './read/paging';
export declare abstract class PagingWarehouse implements Warehouse {
    protected constructor();
    abstract onPaging(structureId: StructureId): HermesObservable<Paging>;
    abstract oncePaging(structureId: StructureId): HermesObservable<Paging>;
}
