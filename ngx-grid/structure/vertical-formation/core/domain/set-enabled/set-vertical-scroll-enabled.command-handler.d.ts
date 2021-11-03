import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetVerticalScrollEnabledCommand } from './set-vertical-scroll-enabled.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class SetVerticalScrollEnabledCommandHandler implements CommandHandler<StructureAggregate, SetVerticalScrollEnabledCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetVerticalScrollEnabledCommand>;
    handle(structure: StructureAggregate, command: SetVerticalScrollEnabledCommand): void;
    publish(aggregate: StructureAggregate, command: SetVerticalScrollEnabledCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetVerticalScrollEnabledCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetVerticalScrollEnabledCommandHandler>;
}
//# sourceMappingURL=set-vertical-scroll-enabled.command-handler.d.ts.map