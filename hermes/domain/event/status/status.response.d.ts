import { DomainEventStatus } from './domain-event-status';
import { DomainEventPayload } from '../domain-event.payload';
export declare abstract class StatusResponse {
    private readonly status;
    private readonly payload?;
    protected constructor(status: DomainEventStatus, payload?: DomainEventPayload);
    getStatus(): DomainEventStatus;
    getPayload(): DomainEventPayload;
}
