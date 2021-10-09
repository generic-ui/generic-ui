import { HermesObservable, Warehouse } from '@generic-ui/hermes';
import { StructureReadModelRepository } from './read/structure.read-model-repository';
import { StructureReadModelRoot } from './read/structure.read-model-root';
import { StructureId } from '../../../core/api/structure.id';
export declare class StructureWarehouse implements Warehouse {
    private readonly structureRepository;
    constructor(structureRepository: StructureReadModelRepository);
    on(structureId: StructureId): HermesObservable<StructureReadModelRoot>;
}
