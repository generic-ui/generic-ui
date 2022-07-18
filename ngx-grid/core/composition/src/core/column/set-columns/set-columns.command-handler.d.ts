import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { CompositionEventConverter } from '../../composition.event-converter';
import { CompositionAggregate } from '../../../domain/composition.aggregate';
import { SetColumnsCommand } from './set-columns.command';
export declare class SetColumnsCommandHandler implements CommandHandler<CompositionAggregate, SetColumnsCommand> {
    private readonly compositionEventConverter;
    private readonly domainEventPublisher;
    constructor(compositionEventConverter: CompositionEventConverter);
    static readonly services: readonly [typeof CompositionEventConverter];
    forCommand(): CommandType<SetColumnsCommand>;
    handle(aggregate: CompositionAggregate, command: SetColumnsCommand): void;
    publish(aggregate: CompositionAggregate, command: SetColumnsCommand): void;
    private publishEvents;
}
