import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetConfigSearchingCommand } from './set-config-searching.command';
import { StructureAggregate } from '../../../../lib/structure/domain/structure/structure.aggregate';
export declare class SetConfigSearchingCommandHandler implements CommandHandler<StructureAggregate, SetConfigSearchingCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetConfigSearchingCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SetConfigSearchingCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: SetConfigSearchingCommand): void;
}
