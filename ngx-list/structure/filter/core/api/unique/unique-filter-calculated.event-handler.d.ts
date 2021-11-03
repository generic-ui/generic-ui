import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { UniqueFilterCalculatedEvent } from '../../domain/unique/calculate/unique-filter-calculated.event';
import { UniqueValuesArchive } from './unique-values.archive';
import * as i0 from "@angular/core";
export declare class UniqueFilterCalculatedEventHandler implements DomainEventHandler<StructureId, UniqueFilterCalculatedEvent> {
    private readonly uniqueValuesRepository;
    constructor(uniqueValuesRepository: UniqueValuesArchive);
    forEvent(): DomainEventType<UniqueFilterCalculatedEvent>;
    handle(calculatedEvent: UniqueFilterCalculatedEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UniqueFilterCalculatedEventHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UniqueFilterCalculatedEventHandler>;
}
//# sourceMappingURL=unique-filter-calculated.event-handler.d.ts.map