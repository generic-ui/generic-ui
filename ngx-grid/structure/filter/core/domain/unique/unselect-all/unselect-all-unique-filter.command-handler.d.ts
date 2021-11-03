import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { UnselectAllUniqueFilterCommand } from './unselect-all-unique-filter.command';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class UnselectAllUniqueFilterCommandHandler implements CommandHandler<StructureAggregate, UnselectAllUniqueFilterCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<UnselectAllUniqueFilterCommand>;
    handle(structure: StructureAggregate, command: UnselectAllUniqueFilterCommand): void;
    publish(aggregate: StructureAggregate, command: UnselectAllUniqueFilterCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UnselectAllUniqueFilterCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UnselectAllUniqueFilterCommandHandler>;
}
//# sourceMappingURL=unselect-all-unique-filter.command-handler.d.ts.map