import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { NextPageCommand } from './next-page.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class NextPageCommandHandler implements CommandHandler<StructureAggregate, NextPageCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<NextPageCommand>;
    handle(aggregate: StructureAggregate, command: NextPageCommand): void;
    publish(aggregate: StructureAggregate, command: NextPageCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NextPageCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NextPageCommandHandler>;
}
//# sourceMappingURL=next-page.command-handler.d.ts.map