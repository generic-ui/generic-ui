import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SelectAllUniqueFilterCommand } from './select-all-unique-filter.command';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class SelectAllUniqueFilterCommandHandler implements CommandHandler<StructureAggregate, SelectAllUniqueFilterCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SelectAllUniqueFilterCommand>;
    handle(structure: StructureAggregate, command: SelectAllUniqueFilterCommand): void;
    publish(aggregate: StructureAggregate, command: SelectAllUniqueFilterCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectAllUniqueFilterCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SelectAllUniqueFilterCommandHandler>;
}
//# sourceMappingURL=select-all-unique-filter.command-handler.d.ts.map