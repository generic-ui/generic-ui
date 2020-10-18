import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetRowColoringCommand } from './set-row-coloring.command';
import { SchemaAggregate } from '../schema.aggregate';
export declare class SetRowColoringCommandHandler implements CommandHandler<SchemaAggregate, SetRowColoringCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetRowColoringCommand>;
    publishDomainEvents(aggregate: SchemaAggregate, command: SetRowColoringCommand): void;
    handleAggregate(schemaAggregate: SchemaAggregate, command: SetRowColoringCommand): void;
}
