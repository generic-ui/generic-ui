import { StructureId } from '../../../core/api/structure.id';
import { HermesObservable, Warehouse } from '@generic-ui/hermes';
export declare abstract class SummariesWarehouse implements Warehouse {
    protected constructor();
    abstract onSummariesEnabled(structureId: StructureId): HermesObservable<boolean>;
}
