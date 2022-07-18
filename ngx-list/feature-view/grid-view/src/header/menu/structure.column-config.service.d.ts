import { ElementRef, Injector } from '@angular/core';
import { FabricInlineDialogService } from '@generic-ui/fabric';
import { CellTemplateWithContext } from '../../../../../core/composition/src/core-read/definition/cell-template-with-context';
import { StructureThemeConverter } from '../../schema/structure.theme.converter';
import { SchemaWarehouse } from '../../../../../core/schema/src/api/schema.warehouse';
import { Reactive } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from '../../../../../core/schema/src/api/global/schema.read-model-root-id';
import * as i0 from "@angular/core";
export declare class StructureColumnConfigService extends Reactive {
    private readonly injector;
    private readonly schemaReadModelRootId;
    private readonly schemaWarehouse;
    private readonly structureThemeConverter;
    private readonly inlineDialogService;
    constructor(injector: Injector, schemaReadModelRootId: SchemaReadModelRootId, schemaWarehouse: SchemaWarehouse, structureThemeConverter: StructureThemeConverter, inlineDialogService: FabricInlineDialogService);
    open(elementRef: ElementRef, column: CellTemplateWithContext): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureColumnConfigService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructureColumnConfigService>;
}
