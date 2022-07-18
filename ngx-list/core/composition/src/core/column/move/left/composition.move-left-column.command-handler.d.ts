import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { CompositionEventConverter } from '../../../composition.event-converter';
import { CompositionAggregate } from '../../../../domain/composition.aggregate';
import { CompositionMoveLeftColumnCommand } from './composition.move-left-column.command';
export declare class CompositionMoveLeftColumnCommandHandler implements CommandHandler<CompositionAggregate, CompositionMoveLeftColumnCommand> {
    private readonly compositionEventConverter;
    private readonly domainEventPublisher;
    constructor(compositionEventConverter: CompositionEventConverter);
    static readonly services: readonly [typeof CompositionEventConverter];
    forCommand(): CommandType<CompositionMoveLeftColumnCommand>;
    handle(aggregate: CompositionAggregate, command: CompositionMoveLeftColumnCommand): void;
    publish(aggregate: CompositionAggregate, command: CompositionMoveLeftColumnCommand): void;
    private publishEvents;
}
