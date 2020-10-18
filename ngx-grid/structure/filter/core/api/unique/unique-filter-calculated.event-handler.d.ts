import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { UniqueFilterCalculatedEvent } from '../../domain/unique/calculate/unique-filter-calculated.event';
import { UniqueValuesRepository } from './unique-values.repository';
export declare class UniqueFilterCalculatedEventHandler implements DomainEventHandler<StructureId, UniqueFilterCalculatedEvent> {
    private readonly uniqueValuesRepository;
    constructor(uniqueValuesRepository: UniqueValuesRepository);
    forEvent(): DomainEventType<UniqueFilterCalculatedEvent>;
    handle(calculatedEvent: UniqueFilterCalculatedEvent): void;
}
