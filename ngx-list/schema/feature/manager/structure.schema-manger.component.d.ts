import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { GuiSelectOption } from '@generic-ui/fabric';
import { SchemaWarehouse } from '../../core/api/schema.warehouse';
import { SchemaCommandInvoker } from '../../core/api/schema.command-invoker';
import { SchemaReadModelRootId } from '../../core/domain-read/schema.read-model-root-id';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
export declare class StructureSchemaMangerComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly schemaReadModelRootId;
    private readonly schemaCommandService;
    private readonly schemaReadModelService;
    coloring: Array<GuiSelectOption>;
    themes: Array<GuiSelectOption>;
    selectedRowColoring: GuiSelectOption;
    selectedTheme: GuiSelectOption;
    verticalGrid: boolean;
    horizontalGrid: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, elRef: ElementRef, schemaReadModelRootId: SchemaReadModelRootId, schemaCommandService: SchemaCommandInvoker, schemaReadModelService: SchemaWarehouse);
    ngOnInit(): void;
    toggleTheme(theme: GuiSelectOption): void;
    toggleRowColoring(schemaRowColoring: GuiSelectOption): void;
    toggleVerticalGrid(verticalGrid: boolean): void;
    toggleHorizontalGrid(horizontalGrid: boolean): void;
    private toTheme;
    private toRowColoring;
    protected getSelectorName(): string;
}
