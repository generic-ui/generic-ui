import { ElementRef, Injector } from '@angular/core';
import { FabricInlineDialogService } from '@generic-ui/fabric';
import { CellTemplateWithContext } from '../../../../composition/read/definition/cell-template-with-context';
import { Reactive } from '../../../../../common/cdk/reactive';
import { StructureThemeConverter } from '../../schema/structure.theme.converter';
import { SchemaReadModelWarehouse } from '../../../../schema/ui-api/schema.read-model-warehouse';
export declare class StructureColumnConfigService extends Reactive {
    private readonly injector;
    private readonly schemaReadModelRepository;
    private readonly structureThemeConverter;
    private readonly inlineDialogService;
    constructor(injector: Injector, schemaReadModelRepository: SchemaReadModelWarehouse, structureThemeConverter: StructureThemeConverter, inlineDialogService: FabricInlineDialogService);
    open(elementRef: ElementRef, column: CellTemplateWithContext): void;
    close(): void;
}
