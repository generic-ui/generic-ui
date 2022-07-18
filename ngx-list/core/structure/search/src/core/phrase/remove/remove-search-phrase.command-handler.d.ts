import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { RemoveSearchPhraseCommand } from './remove-search-phrase.command';
import { StructureAggregate } from '../../../../../structure-core/src/domain/structure.aggregate';
export declare class RemoveSearchPhraseCommandHandler implements CommandHandler<StructureAggregate, RemoveSearchPhraseCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<RemoveSearchPhraseCommand>;
    handle(aggregate: StructureAggregate, command: RemoveSearchPhraseCommand): void;
    publish(aggregate: StructureAggregate, command: RemoveSearchPhraseCommand): void;
}
