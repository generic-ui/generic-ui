import { StructureId } from '../../../lib/structure/domain/structure.id';
import { SearchConfig } from './search-config';
import { SearchDispatcher } from '../domain/search.dispatcher';
export declare class SearchCommandDispatcher {
    private readonly searchDispatcher;
    constructor(searchDispatcher: SearchDispatcher);
    setSearchingConfig(config: SearchConfig, structureId?: StructureId): void;
    search(phrase: string, structureId?: StructureId): void;
}
