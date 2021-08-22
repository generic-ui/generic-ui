import { CommandDispatcher, DomainEventBus } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/domain/structure.id';
import { CompositionCommandInvoker } from '../../../../../composition/core/api/composition.command-invoker';
import { CompositionId } from '../../../../../composition/core/domain/composition.id';
import { ColumnFieldFactory } from '../../../../../composition/core/domain/column/field/colum-field.factory';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
import { StructureGateway } from '../structure.gateway';
export declare class StructureColumnInputHandler {
    private readonly structureId;
    private readonly compositionId;
    private readonly commandDispatcher;
    private readonly domainEventBus;
    private readonly columnFieldFactory;
    private readonly compositionCommandInvoker;
    constructor(structureId: StructureId, compositionId: CompositionId, commandDispatcher: CommandDispatcher, domainEventBus: DomainEventBus, columnFieldFactory: ColumnFieldFactory, compositionCommandInvoker: CompositionCommandInvoker);
    handle(changes: NgChanges<StructureGateway>): void;
    private getConfigs;
    private getFieldConfigs;
    private convertColumnFieldIds;
    private convertColumns;
}
