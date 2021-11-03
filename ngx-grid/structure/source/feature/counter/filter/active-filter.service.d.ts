import { Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SchemaWarehouse } from '../../../../../schema/core/api/schema.warehouse';
import { StructureThemeConverter } from '../../../../grid/feature/schema/structure.theme.converter';
import { SchemaReadModelRootId } from '../../../../../schema/core/api/schema.read-model-root-id';
import { StructureId } from '../../../../core/api/structure.id';
import { Reactive } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare class ActiveFilterService extends Reactive {
    private readonly injector;
    private readonly schemaReadModelRepository;
    private readonly structureThemeConverter;
    private readonly fabricDialogService;
    constructor(injector: Injector, schemaReadModelRepository: SchemaWarehouse, structureThemeConverter: StructureThemeConverter, fabricDialogService: FabricDialogService);
    open(readModelId: SchemaReadModelRootId, structureId: StructureId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActiveFilterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ActiveFilterService>;
}
//# sourceMappingURL=active-filter.service.d.ts.map