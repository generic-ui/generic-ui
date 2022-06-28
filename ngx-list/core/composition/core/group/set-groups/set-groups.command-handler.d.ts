import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { CompositionEventConverter } from '../../composition.event-converter';
import { CompositionAggregate } from '../../../domain/composition.aggregate';
import { SetGroupsCommand } from './set-groups.command';
export declare class SetGroupsCommandHandler implements CommandHandler<CompositionAggregate, SetGroupsCommand> {
    private readonly compositionEventConverter;
    private readonly domainEventPublisher;
    constructor(compositionEventConverter: CompositionEventConverter);
    static readonly services: (typeof CompositionEventConverter)[];
    forCommand(): CommandType<SetGroupsCommand>;
    handle(aggregate: CompositionAggregate, command: SetGroupsCommand): void;
    publish(aggregate: CompositionAggregate, command: SetGroupsCommand): void;
    private publishEvents;
}
