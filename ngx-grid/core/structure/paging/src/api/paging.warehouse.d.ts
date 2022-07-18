import { HermesObservable, HermesSingle, Warehouse } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { PagingModel } from './model/paging.model';
export declare abstract class PagingWarehouse implements Warehouse {
    protected constructor();
    abstract onPaging(structureId: StructureId): HermesObservable<PagingModel>;
    abstract oncePaging(structureId: StructureId): HermesSingle<PagingModel>;
}
