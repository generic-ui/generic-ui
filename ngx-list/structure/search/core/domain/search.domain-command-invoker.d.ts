import { SearchDispatcher } from './search.dispatcher';
import { SearchConfig } from '../api/search-config';
import { StructureId } from '../../../core/api/structure.id';
import { SearchCommandInvoker } from '../api/search.command-invoker';
import * as i0 from "@angular/core";
export declare class SearchDomainCommandInvoker extends SearchCommandInvoker {
    private readonly searchDispatcher;
    constructor(searchDispatcher: SearchDispatcher);
    setSearchingConfig(config: SearchConfig, structureId: StructureId): void;
    search(phrase: string, structureId: StructureId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchDomainCommandInvoker, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SearchDomainCommandInvoker>;
}
//# sourceMappingURL=search.domain-command-invoker.d.ts.map