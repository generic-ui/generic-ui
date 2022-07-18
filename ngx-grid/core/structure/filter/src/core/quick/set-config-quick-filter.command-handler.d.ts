import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetConfigQuickFilterCommand } from './set-config-quick-filter.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class SetConfigQuickFilterCommandHandler implements CommandHandler<StructureAggregate, SetConfigQuickFilterCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SetConfigQuickFilterCommand>;
    handle(aggregate: StructureAggregate, command: SetConfigQuickFilterCommand): void;
    publish(aggregate: StructureAggregate, command: SetConfigQuickFilterCommand): void;
}
