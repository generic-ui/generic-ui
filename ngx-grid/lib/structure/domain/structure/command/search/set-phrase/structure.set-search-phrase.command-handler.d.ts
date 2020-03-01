import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureSetSearchPhraseCommand } from './structure.set-search-phrase.command';
import { StructureSourceDomainEventPublisher } from '../../../../source/command/structure.source.domain-event.publisher';
import { StructureAggregate } from '../../structure.aggregate';
export declare class StructureSetSearchPhraseCommandHandler extends CommandHandler<StructureAggregate> {
    private readonly structureAggregateRepository;
    private structureSourceDomainEventPublisher;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, structureSourceDomainEventPublisher: StructureSourceDomainEventPublisher, domainEventPublisher: DomainEventPublisher);
    handle(command: StructureSetSearchPhraseCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
