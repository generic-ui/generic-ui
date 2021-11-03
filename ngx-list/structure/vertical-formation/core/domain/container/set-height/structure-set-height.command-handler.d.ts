import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureSetHeightCommand } from './structure-set-height.command';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class StructureSetHeightCommandHandler implements CommandHandler<StructureAggregate, StructureSetHeightCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<StructureSetHeightCommand>;
    handle(aggregate: StructureAggregate, command: StructureSetHeightCommand): void;
    publish(aggregate: StructureAggregate, command: StructureSetHeightCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureSetHeightCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructureSetHeightCommandHandler>;
}
//# sourceMappingURL=structure-set-height.command-handler.d.ts.map