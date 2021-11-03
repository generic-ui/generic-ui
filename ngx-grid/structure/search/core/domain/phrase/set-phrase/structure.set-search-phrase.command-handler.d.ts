import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSearchPhraseCommand } from './set-search-phrase.command';
import { SourceDomainEventPublisher } from '../../../../../source/core/domain/source.domain-event.publisher';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class StructureSetSearchPhraseCommandHandler implements CommandHandler<StructureAggregate, SetSearchPhraseCommand> {
    private readonly structureSourceDomainEventPublisher;
    private readonly domainEventPublisher;
    constructor(structureSourceDomainEventPublisher: SourceDomainEventPublisher, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetSearchPhraseCommand>;
    handle(aggregate: StructureAggregate, command: SetSearchPhraseCommand): void;
    publish(aggregate: StructureAggregate, command: SetSearchPhraseCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureSetSearchPhraseCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructureSetSearchPhraseCommandHandler>;
}
//# sourceMappingURL=structure.set-search-phrase.command-handler.d.ts.map