import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { RemoveAllFiltersCommand } from './remove-all-filters.command';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class RemoveAllFiltersCommandHandler implements CommandHandler<StructureAggregate, RemoveAllFiltersCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<RemoveAllFiltersCommand>;
    handle(structure: StructureAggregate, command: RemoveAllFiltersCommand): void;
    publish(aggregate: StructureAggregate, command: RemoveAllFiltersCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RemoveAllFiltersCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RemoveAllFiltersCommandHandler>;
}
//# sourceMappingURL=remove-all-filters.command-handler.d.ts.map