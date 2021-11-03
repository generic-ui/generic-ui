import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetRowColoringCommand } from './set-row-coloring.command';
import { SchemaAggregate } from '../schema.aggregate';
export declare class SetRowColoringCommandHandler implements CommandHandler<SchemaAggregate, SetRowColoringCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetRowColoringCommand>;
    handle(schemaAggregate: SchemaAggregate, command: SetRowColoringCommand): void;
    publish(aggregate: SchemaAggregate, command: SetRowColoringCommand): void;
}
