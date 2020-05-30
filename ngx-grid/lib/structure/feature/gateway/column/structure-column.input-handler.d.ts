import { SimpleChanges } from '@angular/core';
import { CommandDispatcher, DomainEventBus } from '@generic-ui/hermes';
import { StructureId } from '../../../domain/structure.id';
import { CompositionCommandDispatcher } from '../../../../composition/domain-api/composition.command-dispatcher';
import { CompositionId } from '../../../../composition/domain/composition.id';
import { ColumnFieldFactory } from '../../../../composition/domain/column/field/colum-field.factory';
export declare class StructureColumnInputHandler {
    private readonly structureId;
    private readonly compositionId;
    private readonly commandDispatcher;
    private readonly domainEventBus;
    private readonly columnFieldFactory;
    private readonly compositionCommandDispatcher;
    constructor(structureId: StructureId, compositionId: CompositionId, commandDispatcher: CommandDispatcher, domainEventBus: DomainEventBus, columnFieldFactory: ColumnFieldFactory, compositionCommandDispatcher: CompositionCommandDispatcher);
    handle(simpleChanges: SimpleChanges): void;
    private convertColumnFieldIds;
    private convertColumns;
}
