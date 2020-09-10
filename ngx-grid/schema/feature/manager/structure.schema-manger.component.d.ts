import { ChangeDetectorRef } from '@angular/core';
import { Reactive } from '../../../common/cdk/reactive';
import { SchemaWarehouse } from '../../domain-api/schema.warehouse';
import { SchemaCommandInvoker } from '../../domain-api/schema.command-invoker';
import { SchemaReadModelRootId } from '../../domain-api/read/schema.read-model-root-id';
import { FabricDialogThemeService } from '@generic-ui/fabric';
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
