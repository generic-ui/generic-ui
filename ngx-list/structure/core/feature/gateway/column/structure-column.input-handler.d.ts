import { SimpleChanges } from '@angular/core';
import { CommandDispatcher, DomainEventBus } from '@generic-ui/hermes';
import { StructureId } from '../../../domain/structure.id';
import { CompositionCommandInvoker } from '../../../../../composition/domain-api/composition.command-invoker';
import { CompositionId } from '../../../../../composition/domain/composition.id';
import { ColumnFieldFactory } from '../../../../../composition/domain/column/field/colum-field.factory';
export declare class StructureColumnInputHandler {
    private readonly structureId;
    private readonly compositionId;
    private readonly commandDispatcher;
    private readonly domainEventBus;
    private readonly columnFieldFactory;
    private readonly compositionCommandInvoker;
    constructor(structureId: StructureId, compositionId: CompositionId, commandDispatcher: CommandDispatcher, domainEventBus: DomainEventBus, columnFieldFactory: ColumnFieldFactory, compositionCommandInvoker: CompositionCommandInvoker);
    handle(simpleChanges: SimpleChanges): void;
    private convertColumnFieldIds;
    private convertColumns;
}
