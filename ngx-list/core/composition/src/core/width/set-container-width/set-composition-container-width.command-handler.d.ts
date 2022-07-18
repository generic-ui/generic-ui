import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { CompositionEventConverter } from '../../composition.event-converter';
import { SetCompositionContainerWidthCommand } from './set-composition-container-width.command';
import { CompositionAggregate } from '../../../domain/composition.aggregate';
export declare class SetCompositionContainerWidthCommandHandler implements CommandHandler<CompositionAggregate, SetCompositionContainerWidthCommand> {
    private readonly compositionEventConverter;
    private readonly domainEventPublisher;
    constructor(compositionEventConverter: CompositionEventConverter);
    static readonly services: (typeof CompositionEventConverter)[];
    forCommand(): CommandType<SetCompositionContainerWidthCommand>;
    handle(composition: CompositionAggregate, command: SetCompositionContainerWidthCommand): void;
    publish(aggregate: CompositionAggregate, command: SetCompositionContainerWidthCommand): void;
    private publishAggregateEvents;
}
