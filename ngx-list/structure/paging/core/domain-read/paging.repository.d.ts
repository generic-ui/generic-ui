import { StructureReadModelRepository } from '../../../grid/core/api/read/structure.read-model-repository';
import { StructureId } from '../../../core/api/structure.id';
import { PagingModel } from '../api/paging.model';
import { HermesObservable } from '@generic-ui/hermes';
export declare class PagingRepository {
    private readonly structureRepository;
    constructor(structureRepository: StructureReadModelRepository);
    on(structureId: StructureId): HermesObservable<PagingModel>;
}
