import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { GuiSelectOption } from '@generic-ui/fabric';
import { SchemaPublisher } from '../../../../core/schema/src/api/schema.publisher';
import { SmartComponent } from '../../../common/component/src/smart-component';
import { StructureId } from '../../../../core/structure/structure-core/src/api/global/structure.id';
import { HermesObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare class StructureSchemaMangerComponent extends SmartComponent {
    private readonly structureId;
    private readonly schemaPublisher;
    private readonly schemaWarehouse;
    private readonly schemaReadModelRootId;
    coloring: GuiSelectOption[];
    themes: GuiSelectOption[];
    rowColoring$: HermesObservable<GuiSelectOption>;
    theme$: HermesObservable<GuiSelectOption>;
    verticalGrid$: HermesObservable<boolean>;
    horizontalGrid$: HermesObservable<boolean>;
    constructor(changeDetectorRef: ChangeDetectorRef, elRef: ElementRef, structureId: StructureId, schemaPublisher: SchemaPublisher);
    toggleTheme(theme: GuiSelectOption): void;
    toggleRowColoring(schemaRowColoring: GuiSelectOption): void;
    toggleVerticalGrid(verticalGrid: boolean): void;
    toggleHorizontalGrid(horizontalGrid: boolean): void;
    protected getSelectorName(): string;
    private createColoringOptions;
    private createThemeOptions;
    private selectRowColoring;
    private selectTheme;
    private toTheme;
    private toRowColoring;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureSchemaMangerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureSchemaMangerComponent, "div[gui-structure-schema-manager]", never, {}, {}, never, never, false, never>;
}
