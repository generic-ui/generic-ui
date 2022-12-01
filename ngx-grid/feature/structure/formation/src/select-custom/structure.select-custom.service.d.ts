import { ElementRef, Injector } from '@angular/core';
import { FabricInlineDialogService } from '@generic-ui/fabric';
import { Reactive } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from '../../../../../core/schema/src/api/global/schema.read-model-root-id';
import { SchemaWarehouse } from '../../../../../core/schema/src/api/schema.warehouse';
import { StructureThemeConverter } from '../../../../../feature-view/grid-view/src/schema/structure.theme.converter';
import * as i0 from "@angular/core";
export declare class StructureSelectCustomService extends Reactive {
    private readonly injector;
    private readonly schemaReadModelRootId;
    private readonly schemaWarehouse;
    private readonly structureThemeConverter;
    private readonly inlineDialogService;
    constructor(injector: Injector, schemaReadModelRootId: SchemaReadModelRootId, schemaWarehouse: SchemaWarehouse, structureThemeConverter: StructureThemeConverter, inlineDialogService: FabricInlineDialogService);
    open(elementRef: ElementRef): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureSelectCustomService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructureSelectCustomService>;
}
