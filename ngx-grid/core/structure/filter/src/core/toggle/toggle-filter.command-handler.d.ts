import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { ToggleFilterCommand } from './toggle-filter.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class ToggleFilterCommandHandler implements CommandHandler<StructureAggregate, ToggleFilterCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<ToggleFilterCommand>;
    handle(aggregate: StructureAggregate, command: ToggleFilterCommand): void;
    publish(aggregate: StructureAggregate, command: ToggleFilterCommand): void;
}
