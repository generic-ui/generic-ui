import { SearchDispatcher } from './search.dispatcher';
import { SearchConfig } from '../api/config/search-config';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { SearchPublisher } from '../api/search.publisher';
export declare class SearchDomainPublisher extends SearchPublisher {
    private readonly searchDispatcher;
    constructor(searchDispatcher: SearchDispatcher);
    static readonly services: (typeof SearchDispatcher)[];
    setSearchingConfig(config: SearchConfig, structureId: StructureId): void;
    search(phrase: string, structureId: StructureId): void;
}
