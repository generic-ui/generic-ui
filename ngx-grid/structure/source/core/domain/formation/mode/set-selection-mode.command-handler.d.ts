import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSelectionModeCommand } from './set-selection-mode.command';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class SetSelectionModeCommandHandler implements CommandHandler<StructureAggregate, SetSelectionModeCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetSelectionModeCommand>;
    handle(aggregate: StructureAggregate, command: SetSelectionModeCommand): void;
    publish(aggregate: StructureAggregate, command: SetSelectionModeCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetSelectionModeCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetSelectionModeCommandHandler>;
}
//# sourceMappingURL=set-selection-mode.command-handler.d.ts.map