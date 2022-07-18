import { StructureReadModelRepository } from '../../../structure-core/src/api/read/structure.read-model-repository';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { PagingModel } from '../api/model/paging.model';
import { HermesObservable } from '@generic-ui/hermes';
export declare class PagingRepository {
    private readonly structureRepository;
    constructor(structureRepository: StructureReadModelRepository);
    static readonly services: (typeof StructureReadModelRepository)[];
    on(structureId: StructureId): HermesObservable<PagingModel>;
}
