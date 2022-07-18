import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetCompositionResizeWidthCommand } from './set-composition-resize-width.command';
import { CompositionAggregate } from '../../../domain/composition.aggregate';
export declare class SetCompositionResizeWidthCommandHandler implements CommandHandler<CompositionAggregate, SetCompositionResizeWidthCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SetCompositionResizeWidthCommand>;
    handle(composition: CompositionAggregate, command: SetCompositionResizeWidthCommand): void;
    publish(aggregate: CompositionAggregate, command: SetCompositionResizeWidthCommand): void;
}
