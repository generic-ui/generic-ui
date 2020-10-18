import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Command } from './command';
import { CommandDispatcher } from './command.dispatcher';
import { DomainEvent } from '../event/domain-event';
import { DomainEventBus } from '../event/domain-event.bus';
import { StatusResponse } from '../event/status/status.response';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
export declare abstract class ReplayCommandDispatcher<I extends AggregateId> implements OnDestroy {
    private readonly dispatcher;
    private readonly bus;
    private unsubscribe$;
    private subscriptions;
    protected constructor(dispatcher: CommandDispatcher, bus: DomainEventBus);
    protected abstract mapEventToResponse(event: DomainEvent<I>): StatusResponse;
    dispatch(command: Command<I>): string;
    dispatchAndWait(command: Command<I>): Observable<StatusResponse>;
    ngOnDestroy(): void;
}
