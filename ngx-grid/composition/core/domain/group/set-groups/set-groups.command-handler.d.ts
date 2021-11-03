import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../composition.event-converter';
import { CompositionAggregate } from '../../composition.aggregate';
import { SetGroupsCommand } from './set-groups.command';
import * as i0 from "@angular/core";
export declare class SetGroupsCommandHandler implements CommandHandler<CompositionAggregate, SetGroupsCommand> {
    private readonly compositionAggregateRepository;
    private readonly domainEventPublisher;
    private readonly compositionEventConverter;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher, compositionEventConverter: CompositionEventConverter);
    forCommand(): CommandType<SetGroupsCommand>;
    handle(aggregate: CompositionAggregate, command: SetGroupsCommand): void;
    publish(aggregate: CompositionAggregate, command: SetGroupsCommand): void;
    private publishEvents;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetGroupsCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetGroupsCommandHandler>;
}
//# sourceMappingURL=set-groups.command-handler.d.ts.map