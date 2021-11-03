import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { SetCompositionWidthCommand } from './set-composition-width.command';
import { CompositionAggregate } from '../../composition.aggregate';
import * as i0 from "@angular/core";
export declare class SetCompositionWidthCommandHandler implements CommandHandler<CompositionAggregate, SetCompositionWidthCommand> {
    private readonly domainEventPublisher;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetCompositionWidthCommand>;
    handle(composition: CompositionAggregate, command: SetCompositionWidthCommand): void;
    publish(aggregate: CompositionAggregate, command: SetCompositionWidthCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetCompositionWidthCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetCompositionWidthCommandHandler>;
}
//# sourceMappingURL=set-composition-width.command-handler.d.ts.map