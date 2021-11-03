import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { UnselectUniqueFilterCommand } from './unselect-unique-filter.command';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class UnselectUniqueFilterCommandHandler implements CommandHandler<StructureAggregate, UnselectUniqueFilterCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<UnselectUniqueFilterCommand>;
    handle(structure: StructureAggregate, command: UnselectUniqueFilterCommand): void;
    publish(aggregate: StructureAggregate, command: UnselectUniqueFilterCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UnselectUniqueFilterCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UnselectUniqueFilterCommandHandler>;
}
//# sourceMappingURL=unselect-unique-filter.command-handler.d.ts.map