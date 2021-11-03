import { CommandDispatcher, DomainEventBus } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { CompositionCommandInvoker } from '../../../../../composition/core/api/composition.command-invoker';
import { CompositionId } from '../../../../../composition/core/api/composition.id';
import { ColumnFieldFactory } from '../../../../../composition/core/domain/column/field/colum-field.factory';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
import { StructureGateway } from '../structure.gateway';
import { ColumnAutoConfigurator } from '../../../../../composition/core/api/column/auto/column-auto.configurator';
export declare class StructureColumnInputHandler {
    private readonly structureId;
    private readonly compositionId;
    private readonly commandDispatcher;
    private readonly domainEventBus;
    private readonly columnFieldFactory;
    private readonly columnAutoConfigurator;
    private readonly compositionCommandInvoker;
    private columns;
    constructor(structureId: StructureId, compositionId: CompositionId, commandDispatcher: CommandDispatcher, domainEventBus: DomainEventBus, columnFieldFactory: ColumnFieldFactory, columnAutoConfigurator: ColumnAutoConfigurator, compositionCommandInvoker: CompositionCommandInvoker);
    handle(changes: NgChanges<StructureGateway> | any): void;
    private getConfigs;
    private getFieldConfigs;
    private convertColumnFieldIds;
    private convertColumns;
}
