import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetEnabledSelectionCommand } from './set-enabled-selection.command';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class SetEnabledSelectionCommandHandler implements CommandHandler<StructureAggregate, SetEnabledSelectionCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetEnabledSelectionCommand>;
    handle(aggregate: StructureAggregate, command: SetEnabledSelectionCommand): void;
    publish(aggregate: StructureAggregate, command: SetEnabledSelectionCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetEnabledSelectionCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetEnabledSelectionCommandHandler>;
}
//# sourceMappingURL=set-enabled-selection.command-handler.d.ts.map