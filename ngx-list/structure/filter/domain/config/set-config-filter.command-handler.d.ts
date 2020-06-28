import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetConfigFilterCommand } from './set-config-filter.command';
import { StructureAggregate } from '../../../../lib/structure/domain/structure/structure.aggregate';
export declare class SetConfigFilterCommandHandler implements CommandHandler<StructureAggregate, SetConfigFilterCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetConfigFilterCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SetConfigFilterCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: SetConfigFilterCommand): void;
}
