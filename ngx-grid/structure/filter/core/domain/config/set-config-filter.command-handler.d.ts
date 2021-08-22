import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetConfigFilterCommand } from './set-config-filter.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class SetConfigFilterCommandHandler implements CommandHandler<StructureAggregate, SetConfigFilterCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetConfigFilterCommand>;
    publish(aggregate: StructureAggregate, command: SetConfigFilterCommand): void;
    handle(aggregate: StructureAggregate, command: SetConfigFilterCommand): void;
}
