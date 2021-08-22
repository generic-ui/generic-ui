import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetConfigSearchingCommand } from './set-config-searching.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class SetConfigSearchingCommandHandler implements CommandHandler<StructureAggregate, SetConfigSearchingCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetConfigSearchingCommand>;
    publish(aggregate: StructureAggregate, command: SetConfigSearchingCommand): void;
    handle(aggregate: StructureAggregate, command: SetConfigSearchingCommand): void;
}
