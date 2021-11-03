import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { PrevPageCommand } from './prev-page.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class PrevPageCommandHandler implements CommandHandler<StructureAggregate, PrevPageCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<PrevPageCommand>;
    handle(structure: StructureAggregate, command: PrevPageCommand): void;
    publish(aggregate: StructureAggregate, command: PrevPageCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrevPageCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrevPageCommandHandler>;
}
//# sourceMappingURL=prev-page.command-handler.d.ts.map