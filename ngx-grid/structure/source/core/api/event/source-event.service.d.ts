import { DomainEventBus, HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { EditemItemValues } from './editem-item.values';
import * as i0 from "@angular/core";
export declare class SourceEventService {
    private readonly domainEventBus;
    constructor(domainEventBus: DomainEventBus);
    onSourceEdited(structureId: StructureId): HermesObservable<EditemItemValues>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceEventService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SourceEventService>;
}
//# sourceMappingURL=source-event.service.d.ts.map