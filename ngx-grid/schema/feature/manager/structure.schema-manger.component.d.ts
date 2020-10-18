import { ChangeDetectorRef } from '@angular/core';
import { FabricDialogThemeService } from '@generic-ui/fabric';
import { Reactive } from '../../../common/cdk/reactive';
import { SchemaWarehouse } from '../../core/api/schema.warehouse';
import { SchemaCommandInvoker } from '../../core/api/schema.command-invoker';
import { SchemaReadModelRootId } from '../../core/domain-read/schema.read-model-root-id';
export declare class StructureSchemaMangerComponent extends Reactive {
    private readonly changeDetectorRef;
    private readonly schemaReadModelRootId;
    private readonly schemaCommandService;
    private readonly schemaReadModelService;
    private readonly dialogThemeService;
    coloring: any[];
    themes: any[];
    selectedRowColoring: string;
    selectedTheme: string;
    verticalGrid: boolean;
    horizontalGrid: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, schemaReadModelRootId: SchemaReadModelRootId, schemaCommandService: SchemaCommandInvoker, schemaReadModelService: SchemaWarehouse, dialogThemeService: FabricDialogThemeService);
    ngOnInit(): void;
    toggleTheme(theme: string): void;
    toggleRowColoring(schemaRowColoring: string): void;
    toggleVerticalGrid(verticalGrid: boolean): void;
    toggleHorizontalGrid(horizontalGrid: boolean): void;
    private toTheme;
    private toRowColoring;
}
