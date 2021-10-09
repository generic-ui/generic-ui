import { CommandInvoker } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { SearchConfig } from './search-config';
export declare abstract class SearchCommandInvoker implements CommandInvoker {
    protected constructor();
    abstract setSearchingConfig(config: SearchConfig, structureId: StructureId): void;
    abstract search(phrase: string, structureId: StructureId): void;
}
