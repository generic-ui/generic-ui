import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetRowHeightBasedOnThemeCommand } from './set-row-height-based-on-theme.command';
import { StructureAggregate } from '../../../core/domain/structure.aggregate';
export declare class SetRowHeightBasedOnThemeCommandHandler implements CommandHandler<StructureAggregate, SetRowHeightBasedOnThemeCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SetRowHeightBasedOnThemeCommand>;
    handle(structure: StructureAggregate, command: SetRowHeightBasedOnThemeCommand): void;
    publish(aggregate: StructureAggregate, command: SetRowHeightBasedOnThemeCommand): void;
}
