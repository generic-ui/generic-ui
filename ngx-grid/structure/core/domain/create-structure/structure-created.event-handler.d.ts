import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { SummariesEnabledArchive } from '../../../summaries/core/domain/enabled/summaries-enabled-archive.service';
import { StructureCreatedEvent } from './structure-created.event';
import { StructureId } from '../../api/structure.id';
import * as i0 from "@angular/core";
export declare class StructureCreatedEventHandler implements DomainEventHandler<StructureId, StructureCreatedEvent> {
    private summariesEnabledArchive;
    constructor(summariesEnabledArchive: SummariesEnabledArchive);
    forEvent(): DomainEventType<StructureCreatedEvent>;
    handle(event: StructureCreatedEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureCreatedEventHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructureCreatedEventHandler>;
}
//# sourceMappingURL=structure-created.event-handler.d.ts.map