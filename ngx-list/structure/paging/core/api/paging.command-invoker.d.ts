import { CommandInvoker } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { PagingConfig } from './paging-config';
import * as i0 from "@angular/core";
export declare abstract class PagingCommandInvoker implements CommandInvoker {
    protected constructor();
    abstract enable(structureId: StructureId): void;
    abstract disable(structureId: StructureId): void;
    abstract setPaging(paging: PagingConfig, structureId: StructureId): void;
    abstract changePageSize(pageSize: number, structureId: StructureId): void;
    abstract nextPage(structureId: StructureId): void;
    abstract prevPage(structureId: StructureId): void;
    abstract goToPage(pageNumber: number, currentPage: number, structureId: StructureId): void;
    abstract changePagerTop(enabled: boolean, structureId: StructureId): void;
    abstract changePagerBottom(enabled: boolean, structureId: StructureId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PagingCommandInvoker, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PagingCommandInvoker>;
}
//# sourceMappingURL=paging.command-invoker.d.ts.map