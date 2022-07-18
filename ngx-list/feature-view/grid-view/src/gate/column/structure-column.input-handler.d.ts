import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { CompositionPublisher } from '../../../../../core/composition/src/api/composition.publisher';
import { CompositionId } from '../../../../../core/composition/src/api/global/composition.id';
import { ColumnFieldFactory } from '../../../../../core/composition/src/domain/column/field/colum-field.factory';
import { NgChanges } from '../../../../../feature/common/src/cdk/component/lib/src/ng-changes';
import { StructureGateway } from '../structure.gateway';
import { ColumnAutoConfigurator } from '../../../../../core/composition/src/api/column/auto/column-auto.configurator';
export declare class StructureColumnInputHandler {
    private readonly structureId;
    private readonly compositionId;
    private readonly columnFieldFactory;
    private readonly columnAutoConfigurator;
    private readonly compositionCommandInvoker;
    private readonly commandDispatcher;
    private readonly domainEventBus;
    private columns;
    constructor(structureId: StructureId, compositionId: CompositionId, columnFieldFactory: ColumnFieldFactory, columnAutoConfigurator: ColumnAutoConfigurator, compositionCommandInvoker: CompositionPublisher);
    handle(changes: NgChanges<StructureGateway> | any): void;
    private getConfigs;
    private getFieldConfigs;
    private convertColumnFieldIds;
    private convertColumns;
}
