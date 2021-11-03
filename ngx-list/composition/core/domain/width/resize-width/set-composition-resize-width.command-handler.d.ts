import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetCompositionResizeWidthCommand } from './set-composition-resize-width.command';
import { CompositionAggregate } from '../../composition.aggregate';
import * as i0 from "@angular/core";
export declare class SetCompositionResizeWidthCommandHandler implements CommandHandler<CompositionAggregate, SetCompositionResizeWidthCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetCompositionResizeWidthCommand>;
    handle(composition: CompositionAggregate, command: SetCompositionResizeWidthCommand): void;
    publish(aggregate: CompositionAggregate, command: SetCompositionResizeWidthCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetCompositionResizeWidthCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetCompositionResizeWidthCommandHandler>;
}
//# sourceMappingURL=set-composition-resize-width.command-handler.d.ts.map