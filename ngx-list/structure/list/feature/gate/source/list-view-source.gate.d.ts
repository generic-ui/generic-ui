import { SourceGate } from '../../../../source/feature/gate/source.gate';
import { StructureId } from '../../../../core/api/structure.id';
import { SourceCommandInvoker } from '../../../../source/core/api/source.command-invoker';
import { SourceEventService } from '../../../../source/core/api/event/source-event.service';
export declare class ListViewSourceGate extends SourceGate {
    protected readonly sourceCommandService: SourceCommandInvoker;
    protected readonly sourceEventService: SourceEventService;
    constructor(structureId: StructureId, sourceCommandService: SourceCommandInvoker, sourceEventService: SourceEventService);
}
