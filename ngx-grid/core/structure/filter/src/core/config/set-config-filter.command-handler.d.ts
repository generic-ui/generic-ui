import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetConfigFilterCommand } from './set-config-filter.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class SetConfigFilterCommandHandler implements CommandHandler<StructureAggregate, SetConfigFilterCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SetConfigFilterCommand>;
    handle(aggregate: StructureAggregate, command: SetConfigFilterCommand): void;
    publish(aggregate: StructureAggregate, command: SetConfigFilterCommand): void;
}
