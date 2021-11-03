import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { SummariesEnabledArchive } from './summaries-enabled-archive.service';
import { StructureSummariesEnabledSetEvent } from '../set/structure.summaries-enabled-set.event';
import { StructureId } from '../../../../core/api/structure.id';
import * as i0 from "@angular/core";
export declare class StructureSummariesEnabledSetEventHandler implements DomainEventHandler<StructureId, StructureSummariesEnabledSetEvent> {
    private readonly summariesEnabledArchive;
    constructor(summariesEnabledArchive: SummariesEnabledArchive);
    forEvent(): DomainEventType<StructureSummariesEnabledSetEvent>;
    handle(event: StructureSummariesEnabledSetEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureSummariesEnabledSetEventHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructureSummariesEnabledSetEventHandler>;
}
//# sourceMappingURL=structure.summaries-enabled-set.event-handler.d.ts.map