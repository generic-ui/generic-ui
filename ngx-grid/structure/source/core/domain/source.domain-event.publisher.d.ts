import { AggregateEvent, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import * as i0 from "@angular/core";
export declare class SourceDomainEventPublisher {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    publish(events: ReadonlyArray<AggregateEvent<StructureId>>): void;
    private publishEvent;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceDomainEventPublisher, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SourceDomainEventPublisher>;
}
//# sourceMappingURL=source.domain-event.publisher.d.ts.map