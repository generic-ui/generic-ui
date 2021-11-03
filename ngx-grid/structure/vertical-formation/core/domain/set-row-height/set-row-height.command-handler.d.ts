import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetRowHeightCommand } from './set-row-height.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class SetRowHeightCommandHandler implements CommandHandler<StructureAggregate, SetRowHeightCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetRowHeightCommand>;
    handle(structure: StructureAggregate, command: SetRowHeightCommand): void;
    publish(aggregate: StructureAggregate, command: SetRowHeightCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetRowHeightCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetRowHeightCommandHandler>;
}
//# sourceMappingURL=set-row-height.command-handler.d.ts.map