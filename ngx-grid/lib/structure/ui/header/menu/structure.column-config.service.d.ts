import { ElementRef, Injector } from '@angular/core';
import { FabricInlineDialogService } from '@generic-ui/fabric';
import { CellTemplateWithContext } from '../../../../composition/domain/read/definition/cell-template-with-context';
import { SchemaReadModelService } from '../../../ui-api/schema/schema-read-model.service';
import { Reactive } from '../../../../../common/cdk/reactive';
import { StructureThemeConverter } from '../../schema/structure.theme.converter';
export declare class StructureColumnConfigService extends Reactive {
    private readonly injector;
    private readonly schemaReadModelService;
    private readonly structureThemeConverter;
    private readonly inlineDialogService;
    constructor(injector: Injector, schemaReadModelService: SchemaReadModelService, structureThemeConverter: StructureThemeConverter, inlineDialogService: FabricInlineDialogService);
    open(elementRef: ElementRef, column: CellTemplateWithContext): void;
    close(): void;
}
