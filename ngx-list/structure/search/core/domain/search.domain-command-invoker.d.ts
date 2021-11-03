import { SearchDispatcher } from './search.dispatcher';
import { SearchConfig } from '../api/search-config';
import { StructureId } from '../../../core/api/structure.id';
import { SearchCommandInvoker } from '../api/search.command-invoker';
export declare class SearchDomainCommandInvoker extends SearchCommandInvoker {
    private readonly searchDispatcher;
    constructor(searchDispatcher: SearchDispatcher);
    setSearchingConfig(config: SearchConfig, structureId: StructureId): void;
    search(phrase: string, structureId: StructureId): void;
}
