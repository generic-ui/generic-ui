import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../core/domain/structure-aggregate.repository';
import { SetSortOrderCommand } from './set-sort-order.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class SetSortOrderCommandHandler implements CommandHandler<StructureAggregate, SetSortOrderCommand> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetSortOrderCommand>;
    handle(structure: StructureAggregate, command: SetSortOrderCommand): void;
    publish(aggregate: StructureAggregate, command: SetSortOrderCommand): void;
    private publishSortEvent;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetSortOrderCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetSortOrderCommandHandler>;
}
//# sourceMappingURL=set-sort-order.command-handler.d.ts.map