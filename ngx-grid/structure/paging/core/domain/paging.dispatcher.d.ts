import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { PagingConfig } from '../api/paging-config';
import * as i0 from "@angular/core";
export declare class PagingDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setPaging(structureId: StructureId, paging: PagingConfig): void;
    changePageSize(structureId: StructureId, pageSize: number): void;
    nextPage(structureId: StructureId): void;
    prevPage(structureId: StructureId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PagingDispatcher, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PagingDispatcher>;
}
//# sourceMappingURL=paging.dispatcher.d.ts.map