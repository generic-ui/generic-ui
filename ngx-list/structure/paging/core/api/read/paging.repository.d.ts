import { StructureReadModelRepository } from '../../../../grid/core/api/read/structure.read-model-repository';
import { StructureId } from '../../../../core/api/structure.id';
import { Paging } from './paging';
import { HermesObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare class PagingRepository {
    private readonly structureRepository;
    constructor(structureRepository: StructureReadModelRepository);
    on(structureId: StructureId): HermesObservable<Paging>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PagingRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PagingRepository>;
}
//# sourceMappingURL=paging.repository.d.ts.map