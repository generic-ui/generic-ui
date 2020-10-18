import { SimpleChanges } from '@angular/core';
import { CommandDispatcher, DomainEventBus } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { CompositionCommandInvoker } from '../../../../../composition/core/api/composition.command-invoker';
import { CompositionId } from '../../../../../composition/core/api/composition.id';
import { ColumnFieldFactory } from '../../../../../composition/core/domain/column/field/colum-field.factory';
export declare class StructureColumnInputHandler {
    private readonly structureId;
    private readonly compositionId;
    private readonly commandDispatcher;
    private readonly domainEventBus;
    private readonly columnFieldFactory;
    private readonly compositionCommandInvoker;
    constructor(structureId: StructureId, compositionId: CompositionId, commandDispatcher: CommandDispatcher, domainEventBus: DomainEventBus, columnFieldFactory: ColumnFieldFactory, compositionCommandInvoker: CompositionCommandInvoker);
    handle(simpleChanges: SimpleChanges): void;
    private getConfigs;
    private getFieldConfigs;
    private convertColumnFieldIds;
    private convertColumns;
}
