import { CommandInvoker } from '@generic-ui/hermes';
import { StructureId } from '../../core/domain/structure.id';
import { SearchConfig } from './search-config';
import { SearchDispatcher } from '../domain/search.dispatcher';
export declare class SearchCommandInvoker implements CommandInvoker {
    private readonly searchDispatcher;
    constructor(searchDispatcher: SearchDispatcher);
    setSearchingConfig(config: SearchConfig, structureId?: StructureId): void;
    search(phrase: string, structureId?: StructureId): void;
}
