import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetScrollPositionCommand } from './set-scroll-position.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class SetScrollPositionCommandHandler implements CommandHandler<StructureAggregate, SetScrollPositionCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetScrollPositionCommand>;
    handle(structure: StructureAggregate, command: SetScrollPositionCommand): void;
    publish(aggregate: StructureAggregate, command: SetScrollPositionCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetScrollPositionCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetScrollPositionCommandHandler>;
}
//# sourceMappingURL=set-scroll-position.command-handler.d.ts.map