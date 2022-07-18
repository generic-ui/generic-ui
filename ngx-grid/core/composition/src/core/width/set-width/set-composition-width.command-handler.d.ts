import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetCompositionWidthCommand } from './set-composition-width.command';
import { CompositionAggregate } from '../../../domain/composition.aggregate';
export declare class SetCompositionWidthCommandHandler implements CommandHandler<CompositionAggregate, SetCompositionWidthCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SetCompositionWidthCommand>;
    handle(composition: CompositionAggregate, command: SetCompositionWidthCommand): void;
    publish(aggregate: CompositionAggregate, command: SetCompositionWidthCommand): void;
}
