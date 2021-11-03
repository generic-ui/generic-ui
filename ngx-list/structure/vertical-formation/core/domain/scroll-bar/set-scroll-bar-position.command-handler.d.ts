import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetScrollBarPositionCommand } from './set-scroll-bar-position.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class SetScrollBarPositionCommandHandler implements CommandHandler<StructureAggregate, SetScrollBarPositionCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetScrollBarPositionCommand>;
    handle(structure: StructureAggregate, command: SetScrollBarPositionCommand): void;
    publish(aggregate: StructureAggregate, command: SetScrollBarPositionCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetScrollBarPositionCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetScrollBarPositionCommandHandler>;
}
//# sourceMappingURL=set-scroll-bar-position.command-handler.d.ts.map