import { Observable } from 'rxjs';
import { Command } from './command';
import { ExecuteResponse } from './execute-response';
import { DomainEvent } from '../event/domain-event';
import { DomainEventPublisher } from '../event/domain-event.publisher';
import { AggregateRepository } from './aggregate-repository';
import { Aggregate } from './aggregate';
export declare abstract class CommandHandler<A extends Aggregate> {
    private readonly command;
    private readonly domainEvent?;
    protected readonly eventPublisher?: DomainEventPublisher;
    protected readonly aggregateRepository?: AggregateRepository<A>;
    private readonly commandType;
    protected constructor(command: typeof Command | any, // any is required when inherited Command has more arguments than Command
    domainEvent?: typeof DomainEvent, eventPublisher?: DomainEventPublisher, aggregateRepository?: AggregateRepository<A>);
    handle(command: Command): ExecuteResponse | Observable<ExecuteResponse>;
    handleAggregate(aggregate: A, command: Command): void;
    handleEmptyAggregate(command: Command): void;
    publishDomainEvents(aggregate: A, command: Command): void;
    handleCommandForAggregate(command: Command): void;
    forCommand(command: Command): boolean;
    handleCommand(command: Command): void;
    private dispatchEvent;
    private createCommandInstance;
}
