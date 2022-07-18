import { Publisher } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { SummariesConfig } from './config/summaries-config';
export declare abstract class SummariesPublisher implements Publisher {
    protected constructor();
    abstract setSummariesEnabled(enabled: boolean, structureId: StructureId): void;
    abstract setConfig(config: SummariesConfig, structureId: StructureId): void;
}
