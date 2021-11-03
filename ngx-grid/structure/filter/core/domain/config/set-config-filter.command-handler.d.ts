import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetConfigFilterCommand } from './set-config-filter.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class SetConfigFilterCommandHandler implements CommandHandler<StructureAggregate, SetConfigFilterCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetConfigFilterCommand>;
    handle(aggregate: StructureAggregate, command: SetConfigFilterCommand): void;
    publish(aggregate: StructureAggregate, command: SetConfigFilterCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetConfigFilterCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetConfigFilterCommandHandler>;
}
//# sourceMappingURL=set-config-filter.command-handler.d.ts.map