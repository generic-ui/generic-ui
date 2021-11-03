import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetRowHeightBasedOnThemeCommand } from './set-row-height-based-on-theme.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class SetRowHeightBasedOnThemeCommandHandler implements CommandHandler<StructureAggregate, SetRowHeightBasedOnThemeCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetRowHeightBasedOnThemeCommand>;
    handle(structure: StructureAggregate, command: SetRowHeightBasedOnThemeCommand): void;
    publish(aggregate: StructureAggregate, command: SetRowHeightBasedOnThemeCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetRowHeightBasedOnThemeCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetRowHeightBasedOnThemeCommandHandler>;
}
//# sourceMappingURL=set-row-height-based-on-theme.command-handler.d.ts.map