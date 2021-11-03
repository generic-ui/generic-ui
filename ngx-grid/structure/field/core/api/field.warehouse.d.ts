import { HermesObservable, Warehouse } from '@generic-ui/hermes';
import { FieldReadModelArchive } from './read/field-read-model.archive';
import { StructureId } from '../../../core/api/structure.id';
import { FieldReadModel } from './read/field.read-model';
export declare class FieldWarehouse implements Warehouse {
    private readonly fieldReadModelArchive;
    constructor(fieldReadModelArchive: FieldReadModelArchive);
    onFields(structureId: StructureId): HermesObservable<ReadonlyArray<FieldReadModel>>;
}
