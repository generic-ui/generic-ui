import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../core/domain/structure-aggregate.repository';
import { ToggleSortCommand } from './toggle-sort.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class ToggleSortCommandHandler implements CommandHandler<StructureAggregate, ToggleSortCommand> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<ToggleSortCommand>;
    handle(structure: StructureAggregate, command: ToggleSortCommand): void;
    publish(aggregate: StructureAggregate, command: ToggleSortCommand): void;
    private publishSortEvent;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleSortCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToggleSortCommandHandler>;
}
//# sourceMappingURL=toggle-sort.command-handler.d.ts.map