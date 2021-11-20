import { HermesObservable, Optional } from '@generic-ui/hermes';
import { FieldArchive } from './field.archive';
import { StructureId } from '../../../core/api/structure.id';
import { FieldModel } from '../api/field.model';
import { FieldWarehouse } from '../api/field.warehouse';
export declare class FieldDomainWarehouse extends FieldWarehouse {
    private readonly fieldReadModelArchive;
    constructor(fieldReadModelArchive: FieldArchive);
    onFields(structureId: StructureId): HermesObservable<ReadonlyArray<FieldModel>>;
    findFields(structureId: StructureId): Optional<ReadonlyArray<FieldModel>>;
}
