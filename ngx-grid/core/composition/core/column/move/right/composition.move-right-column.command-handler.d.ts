import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { CompositionEventConverter } from '../../../composition.event-converter';
import { CompositionAggregate } from '../../../../domain/composition.aggregate';
import { CompositionMoveRightColumnCommand } from './composition.move-right-column.command';
export declare class CompositionMoveRightColumnCommandHandler implements CommandHandler<CompositionAggregate, CompositionMoveRightColumnCommand> {
    private readonly compositionEventConverter;
    private readonly domainEventPublisher;
    constructor(compositionEventConverter: CompositionEventConverter);
    static readonly services: readonly [typeof CompositionEventConverter];
    forCommand(): CommandType<CompositionMoveRightColumnCommand>;
    handle(aggregate: CompositionAggregate, command: CompositionMoveRightColumnCommand): void;
    publish(aggregate: CompositionAggregate, command: CompositionMoveRightColumnCommand): void;
    private publishEvents;
}
