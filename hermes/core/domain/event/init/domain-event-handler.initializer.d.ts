import { DomainEventHandlerImpl } from '../handler/domain-event-handler-impl';
import { AggregateId } from '../../tactical/aggregate/aggregate-id';
import { DomainEvent } from '../domain-event';
import { DomainEventBus } from '../domain-event.bus';
import { Reactive } from '../../../../common/reactive';
export declare class DomainEventHandlerInitializer<I extends AggregateId, E extends DomainEvent<I>> extends Reactive {
    init(eventHandlers: Array<DomainEventHandlerImpl<I, E>>, domainEventBus: DomainEventBus): void;
}
