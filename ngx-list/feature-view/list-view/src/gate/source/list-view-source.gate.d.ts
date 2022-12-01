import { SourceGate } from '../../../../../feature/structure/source/src/gate/source.gate';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { SourcePublisher } from '../../../../../core/structure/source/src/api/source.publisher';
import { SourceEventService } from '../../../../../core/structure/source/src/api/edit/source-event.service';
import * as i0 from "@angular/core";
export declare class ListViewSourceGate extends SourceGate {
    protected readonly sourceCommandService: SourcePublisher;
    protected readonly sourceEventService: SourceEventService;
    constructor(structureId: StructureId, sourceCommandService: SourcePublisher, sourceEventService: SourceEventService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewSourceGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ListViewSourceGate, "gui-list-view[items]", never, {}, {}, never, never, false, never>;
}
