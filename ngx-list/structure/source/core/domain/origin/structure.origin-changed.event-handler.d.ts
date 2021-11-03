import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureSourceOriginArchive } from './structure.source-origin.archive';
import { OriginSetEvent } from '../../domain/origin/set-origin/origin-set.event';
import { StructureId } from '../../../../core/api/structure.id';
import * as i0 from "@angular/core";
export declare class StructureOriginChangedEventHandler implements DomainEventHandler<StructureId, OriginSetEvent> {
    private structureSourceOriginRepository;
    constructor(structureSourceOriginRepository: StructureSourceOriginArchive);
    forEvent(): DomainEventType<OriginSetEvent>;
    handle(event: OriginSetEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureOriginChangedEventHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructureOriginChangedEventHandler>;
}
//# sourceMappingURL=structure.origin-changed.event-handler.d.ts.map