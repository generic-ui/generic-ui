import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { GuiSelectOption } from '@generic-ui/fabric';
import { SchemaWarehouse } from '../../core/api/schema.warehouse';
import { SchemaCommandInvoker } from '../../core/api/schema.command-invoker';
import { SchemaReadModelRootId } from '../../core/api/schema.read-model-root-id';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import { StructureId } from '../../../structure/core/api/structure.id';
export declare class StructureSchemaMangerComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly schemaReadModelRootId;
    private readonly schemaCommandInvoker;
    private readonly schemaWarehouse;
    coloring: Array<GuiSelectOption>;
    themes: Array<GuiSelectOption>;
    selectedRowColoring: GuiSelectOption;
    selectedTheme: GuiSelectOption;
    verticalGrid: boolean;
    horizontalGrid: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, elRef: ElementRef, structureId: StructureId, schemaReadModelRootId: SchemaReadModelRootId, schemaCommandInvoker: SchemaCommandInvoker, schemaWarehouse: SchemaWarehouse);
    ngOnInit(): void;
    toggleTheme(theme: GuiSelectOption): void;
    toggleRowColoring(schemaRowColoring: GuiSelectOption): void;
    toggleVerticalGrid(verticalGrid: boolean): void;
    toggleHorizontalGrid(horizontalGrid: boolean): void;
    protected getSelectorName(): string;
    private toTheme;
    private toRowColoring;
}
