import { StructureId } from '../../../core/api/structure.id';
import { HermesObservable, Warehouse } from '@generic-ui/hermes';
export declare abstract class SummariesWarehouse implements Warehouse {
    protected constructor();
    abstract onEnabled(structureId: StructureId): HermesObservable<boolean>;
    abstract onTopEnabled(structureId: StructureId): HermesObservable<boolean>;
    abstract onBottomEnabled(structureId: StructureId): HermesObservable<boolean>;
}
