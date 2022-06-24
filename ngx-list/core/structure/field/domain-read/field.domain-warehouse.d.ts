import { HermesObservable, Optional } from '@generic-ui/hermes';
import { FieldArchive } from './field.archive';
import { StructureId } from '../../core/api/global/structure.id';
import { FieldModel } from '../api/model/field.model';
import { FieldWarehouse } from '../api/field.warehouse';
export declare class FieldDomainWarehouse extends FieldWarehouse {
    private readonly fieldReadModelArchive;
    constructor(fieldReadModelArchive: FieldArchive);
    static readonly services: (typeof FieldArchive)[];
    onFields(structureId: StructureId): HermesObservable<ReadonlyArray<FieldModel>>;
    findFields(structureId: StructureId): Optional<ReadonlyArray<FieldModel>>;
}
