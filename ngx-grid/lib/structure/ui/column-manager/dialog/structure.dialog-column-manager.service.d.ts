import { Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { CompositionId } from '../../../../composition/domain/composition-id';
import { SchemaReadModelService } from '../../../ui-api/schema/schema-read-model.service';
import { Reactive } from '../../../../../common/cdk/reactive';
import { StructureThemeConverter } from '../../schema/structure.theme.converter';
import { StructureId } from '../../../domain/structure-id';
export declare class StructureDialogColumnManagerService extends Reactive {
    private readonly injector;
    private readonly schemaReadModelService;
    private readonly structureThemeConverter;
    private readonly fabricDialogService;
    constructor(injector: Injector, schemaReadModelService: SchemaReadModelService, structureThemeConverter: StructureThemeConverter, fabricDialogService: FabricDialogService);
    open(compositionId: CompositionId, structureId: StructureId): void;
}
