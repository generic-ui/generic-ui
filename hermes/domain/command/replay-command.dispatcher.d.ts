import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Command } from './command';
import { CommandDispatcher } from './command.dispatcher';
import { DomainEvent } from '../event/domain-event';
import { DomainEventBus } from '../event/domain-event.bus';
import { StatusResponse } from '../event/status/status.response';
export declare abstract class ReplayCommandDispatcher implements OnDestroy {
    private readonly dispatcher;
    private readonly bus;
    private unsubscribe$;
    private subscriptions;
    protected constructor(dispatcher: CommandDispatcher, bus: DomainEventBus);
    protected abstract mapEventToResponse(event: DomainEvent): StatusResponse;
    dispatch(command: Command): string;
    dispatchAndWait(command: Command): Observable<StatusResponse>;
    ngOnDestroy(): void;
}
