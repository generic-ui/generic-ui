import { Publisher } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { SearchConfig } from './config/search-config';
export declare abstract class SearchPublisher implements Publisher {
    protected constructor();
    abstract setSearchingConfig(config: SearchConfig, structureId: StructureId): void;
    abstract search(phrase: string, structureId: StructureId): void;
}
