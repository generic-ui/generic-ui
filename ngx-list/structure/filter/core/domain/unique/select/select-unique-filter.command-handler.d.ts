import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SelectUniqueFilterCommand } from './select-unique-filter.command';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class SelectUniqueFilterCommandHandler implements CommandHandler<StructureAggregate, SelectUniqueFilterCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SelectUniqueFilterCommand>;
    handle(structure: StructureAggregate, command: SelectUniqueFilterCommand): void;
    publish(aggregate: StructureAggregate, command: SelectUniqueFilterCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectUniqueFilterCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SelectUniqueFilterCommandHandler>;
}
//# sourceMappingURL=select-unique-filter.command-handler.d.ts.map