import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { CompositionEventConverter } from '../../composition.event-converter';
import { CompositionAggregate } from '../../../domain/composition.aggregate';
import { CompositionSetColumnEnabledCommand } from './composition.set-column-enabled.command';
export declare class CompositionSetColumnEnabledCommandHandler implements CommandHandler<CompositionAggregate, CompositionSetColumnEnabledCommand> {
    private readonly compositionEventConverter;
    private readonly domainEventPublisher;
    constructor(compositionEventConverter: CompositionEventConverter);
    static readonly services: readonly [typeof CompositionEventConverter];
    forCommand(): CommandType<CompositionSetColumnEnabledCommand>;
    handle(aggregate: CompositionAggregate, command: CompositionSetColumnEnabledCommand): void;
    publish(aggregate: CompositionAggregate, command: CompositionSetColumnEnabledCommand): void;
    private publishEvents;
}
