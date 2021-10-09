import { ElementRef, Injector } from '@angular/core';
import { FabricInlineDialogService } from '@generic-ui/fabric';
import { CellTemplateWithContext } from '../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { StructureThemeConverter } from '../../schema/structure.theme.converter';
import { SchemaWarehouse } from '../../../../../schema/core/api/schema.warehouse';
import { Reactive } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from '../../../../../schema/core/api/schema.read-model-root-id';
export declare class StructureColumnConfigService extends Reactive {
    private readonly injector;
    private readonly schemaReadModelRootId;
    private readonly schemaWarehouse;
    private readonly structureThemeConverter;
    private readonly inlineDialogService;
    constructor(injector: Injector, schemaReadModelRootId: SchemaReadModelRootId, schemaWarehouse: SchemaWarehouse, structureThemeConverter: StructureThemeConverter, inlineDialogService: FabricInlineDialogService);
    open(elementRef: ElementRef, column: CellTemplateWithContext): void;
    close(): void;
}
