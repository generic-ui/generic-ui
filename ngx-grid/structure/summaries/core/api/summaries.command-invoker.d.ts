import { CommandInvoker } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { SummariesConfig } from './summaries-config';
export declare abstract class SummariesCommandInvoker implements CommandInvoker {
    protected constructor();
    abstract setSummariesEnabled(enabled: boolean, structureId: StructureId): void;
    abstract setConfig(config: SummariesConfig, structureId: StructureId): void;
}
