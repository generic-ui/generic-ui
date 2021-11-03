import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { GuiSelectOption } from '@generic-ui/fabric';
import { SchemaWarehouse } from '../../core/api/schema.warehouse';
import { SchemaCommandInvoker } from '../../core/api/schema.command-invoker';
import { SchemaReadModelRootId } from '../../core/api/schema.read-model-root-id';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import { StructureId } from '../../../structure/core/api/structure.id';
import * as i0 from "@angular/core";
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
    private toTheme;
    private toRowColoring;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureSchemaMangerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureSchemaMangerComponent, "div[gui-structure-schema-manager]", never, {}, {}, never, never>;
}
//# sourceMappingURL=structure.schema-manger.component.d.ts.map