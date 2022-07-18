import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetVerticalScrollEnabledCommand } from './set-vertical-scroll-enabled.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class SetVerticalScrollEnabledCommandHandler implements CommandHandler<StructureAggregate, SetVerticalScrollEnabledCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SetVerticalScrollEnabledCommand>;
    handle(structure: StructureAggregate, command: SetVerticalScrollEnabledCommand): void;
    publish(aggregate: StructureAggregate, command: SetVerticalScrollEnabledCommand): void;
}
