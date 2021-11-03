import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { StructureEditSourceItemCommand } from './structure.edit-source-item.command';
import { SourceDomainEventPublisher } from '../../source.domain-event.publisher';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class StructureEditSourceItemCommandHandler implements CommandHandler<StructureAggregate, StructureEditSourceItemCommand> {
    private structureSourceDomainEventPublisher;
    constructor(structureSourceDomainEventPublisher: SourceDomainEventPublisher);
    forCommand(): CommandType<StructureEditSourceItemCommand>;
    handle(structure: StructureAggregate, command: StructureEditSourceItemCommand): void;
    publish(aggregate: StructureAggregate, command: StructureEditSourceItemCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureEditSourceItemCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructureEditSourceItemCommandHandler>;
}
//# sourceMappingURL=structure.edit-source-item.command-handler.d.ts.map