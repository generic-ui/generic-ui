import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { SummariesCommandInvoker } from '../api/summaries.command-invoker';
export declare class SummariesDomainCommandInvoker extends SummariesCommandInvoker {
    private readonly commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setSummariesEnabled(enabled: boolean, structureId: StructureId): void;
}
