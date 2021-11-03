import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetConfigSearchingCommand } from './set-config-searching.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class SetConfigSearchingCommandHandler implements CommandHandler<StructureAggregate, SetConfigSearchingCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetConfigSearchingCommand>;
    handle(aggregate: StructureAggregate, command: SetConfigSearchingCommand): void;
    publish(aggregate: StructureAggregate, command: SetConfigSearchingCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetConfigSearchingCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetConfigSearchingCommandHandler>;
}
//# sourceMappingURL=set-config-searching.command-handler.d.ts.map