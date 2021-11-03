import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from '../api/composition.id';
import * as i0 from "@angular/core";
export declare class CompositionEventConverter {
    convert(event: AggregateEvent<CompositionId>): DomainEvent<CompositionId>;
    convert(events: Array<AggregateEvent<CompositionId>>): Array<DomainEvent<CompositionId>>;
    private convertEvents;
    private convertEvent;
    static ɵfac: i0.ɵɵFactoryDeclaration<CompositionEventConverter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CompositionEventConverter>;
}
//# sourceMappingURL=composition.event-converter.d.ts.map