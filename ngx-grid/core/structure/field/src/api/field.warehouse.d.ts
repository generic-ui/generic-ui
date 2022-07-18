import { HermesObservable, Optional, Warehouse } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { FieldModel } from './model/field.model';
export declare abstract class FieldWarehouse implements Warehouse {
    protected constructor();
    abstract onFields(structureId: StructureId): HermesObservable<ReadonlyArray<FieldModel>>;
    abstract findFields(structureId: StructureId): Optional<ReadonlyArray<FieldModel>>;
}
