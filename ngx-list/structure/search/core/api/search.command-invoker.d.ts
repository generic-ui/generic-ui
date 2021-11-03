import { CommandInvoker } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { SearchConfig } from './search-config';
import * as i0 from "@angular/core";
export declare abstract class SearchCommandInvoker implements CommandInvoker {
    protected constructor();
    abstract setSearchingConfig(config: SearchConfig, structureId: StructureId): void;
    abstract search(phrase: string, structureId: StructureId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchCommandInvoker, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SearchCommandInvoker>;
}
//# sourceMappingURL=search.command-invoker.d.ts.map