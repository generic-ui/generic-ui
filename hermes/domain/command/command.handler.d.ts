import { Observable } from 'rxjs';
import { Command } from './command';
import { ExecuteResponse } from './execute-response';
import { DomainEvent } from '../event/domain-event';
import { DomainEventPublisher } from '../event/domain-event.publisher';
export declare abstract class CommandHandler {
    private readonly command;
    private readonly domainEvent?;
    protected readonly eventPublisher?: DomainEventPublisher;
    private readonly commandType;
    protected constructor(command: typeof Command | any, // any is required when inherited Command has more arguments than Command
    domainEvent?: typeof DomainEvent, eventPublisher?: DomainEventPublisher);
    abstract handle(command: Command): ExecuteResponse | Observable<ExecuteResponse>;
    forCommand(command: Command): boolean;
    handleCommand(command: Command): void;
    private dispatchEvent;
    private createCommandInstance;
}
