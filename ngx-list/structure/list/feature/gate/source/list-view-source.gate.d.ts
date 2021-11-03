import { SourceGate } from '../../../../source/feature/gate/source.gate';
import { StructureId } from '../../../../core/api/structure.id';
import { SourceCommandInvoker } from '../../../../source/core/api/source.command-invoker';
import { SourceEventService } from '../../../../source/core/api/event/source-event.service';
import * as i0 from "@angular/core";
export declare class ListViewSourceGate extends SourceGate {
    protected readonly sourceCommandService: SourceCommandInvoker;
    protected readonly sourceEventService: SourceEventService;
    constructor(structureId: StructureId, sourceCommandService: SourceCommandInvoker, sourceEventService: SourceEventService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewSourceGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ListViewSourceGate, "gui-list-view[items]", never, {}, {}, never>;
}
//# sourceMappingURL=list-view-source.gate.d.ts.map