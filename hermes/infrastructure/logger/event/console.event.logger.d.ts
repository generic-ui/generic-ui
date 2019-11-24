import { OnDestroy } from '@angular/core';
import { DomainEventLogger } from '../../../domain/event/domain-event.logger';
import { DomainEventBus } from '../../../domain/event/domain-event.bus';
import { DomainEvent } from '../../../domain/event/domain-event';
import { AggregateStoreRegister } from '../../../domain/command/store/aggregate-store.register';
export declare class ConsoleEventLogger extends DomainEventLogger implements OnDestroy {
    private readonly aggregateStoreRegister;
    private enabled;
    private unsubscribe$;
    constructor(eventBus: DomainEventBus, aggregateStoreRegister: AggregateStoreRegister);
    ngOnDestroy(): void;
    start(): void;
    stop(): void;
    log(domainEvent: DomainEvent): void;
}
