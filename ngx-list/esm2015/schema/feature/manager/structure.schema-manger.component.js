import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SchemaRowColoring } from '../../core/api/row-coloring/schema-row-coloring';
import { SchemaTheme } from '../../core/api/theme/schema-theme';
import { RowColoring } from '../../core/api/row-coloring/row-coloring';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../structure/core/api/structure.id";
import * as i2 from "../../core/api/schema.read-model-root-id";
import * as i3 from "../../core/api/schema.command-invoker";
import * as i4 from "../../core/api/schema.warehouse";
import * as i5 from "@generic-ui/fabric";
import * as i6 from "../../../l10n/feature/translation.pipe";
const _c0 = ["gui-structure-schema-manager", ""];
export class StructureSchemaMangerComponent extends SmartComponent {
    constructor(changeDetectorRef, elRef, structureId, schemaReadModelRootId, schemaCommandInvoker, schemaWarehouse) {
        super(changeDetectorRef, elRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.schemaWarehouse = schemaWarehouse;
        this.coloring = Object.keys(SchemaRowColoring)
            .map((key) => SchemaRowColoring[key])
            .filter((val) => !Number.isInteger(val))
            .map((value) => {
            return {
                value: value,
                name: value
            };
        });
        this.themes = Object.keys(SchemaTheme)
            .map((key) => SchemaTheme[key])
            .filter((val) => !Number.isInteger(val))
            .map((value) => {
            return {
                value: value,
                name: value
            };
        });
    }
    ngOnInit() {
        this.hermesSubscribe(this.schemaWarehouse.onRowColoring(this.schemaReadModelRootId), (rowColoring) => {
            this.selectedRowColoring = {
                value: SchemaRowColoring[rowColoring],
                name: SchemaRowColoring[rowColoring]
            };
        });
        this.hermesSubscribe(this.schemaWarehouse.onTheme(this.schemaReadModelRootId), (schemaTheme) => {
            this.selectedTheme = {
                value: SchemaTheme[schemaTheme],
                name: SchemaTheme[schemaTheme]
            };
        });
        this.hermesSubscribe(this.schemaWarehouse.onVerticalGrid(this.schemaReadModelRootId), (verticalGrid) => {
            this.verticalGrid = verticalGrid;
        });
        this.hermesSubscribe(this.schemaWarehouse.onHorizontalGrid(this.schemaReadModelRootId), (horizontalGrid) => {
            this.horizontalGrid = horizontalGrid;
        });
    }
    toggleTheme(theme) {
        this.schemaCommandInvoker.setTheme(this.toTheme(theme.value), this.schemaReadModelRootId, this.structureId);
    }
    toggleRowColoring(schemaRowColoring) {
        this.schemaCommandInvoker.setRowColoring(this.toRowColoring(schemaRowColoring.value), this.schemaReadModelRootId);
    }
    toggleVerticalGrid(verticalGrid) {
        this.schemaCommandInvoker.setVerticalGrid(verticalGrid, this.schemaReadModelRootId);
    }
    toggleHorizontalGrid(horizontalGrid) {
        this.schemaCommandInvoker.setHorizontalGrid(horizontalGrid, this.schemaReadModelRootId);
    }
    toTheme(theme) {
        switch (theme.toLowerCase()) {
            case 'fabric':
                return SchemaTheme.FABRIC;
            case 'material':
                return SchemaTheme.MATERIAL;
            case 'generic':
                return SchemaTheme.GENERIC;
            case 'light':
                return SchemaTheme.LIGHT;
            case 'dark':
                return SchemaTheme.DARK;
            default:
                return SchemaTheme.FABRIC;
        }
    }
    toRowColoring(coloring) {
        switch (coloring.toLowerCase()) {
            case 'none':
                return RowColoring.NONE;
            case 'odd':
                return RowColoring.ODD;
            case 'even':
                return RowColoring.EVEN;
            default:
                return RowColoring.NONE;
        }
    }
    getSelectorName() {
        return 'gui-structure-schema-manager';
    }
}
StructureSchemaMangerComponent.ɵfac = function StructureSchemaMangerComponent_Factory(t) { return new (t || StructureSchemaMangerComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.SchemaReadModelRootId), i0.ɵɵdirectiveInject(i3.SchemaCommandInvoker), i0.ɵɵdirectiveInject(i4.SchemaWarehouse)); };
StructureSchemaMangerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureSchemaMangerComponent, selectors: [["div", "gui-structure-schema-manager", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 20, vars: 22, consts: [[1, "gui-schema-manager", "gui-flex", "gui-flex-col"], [1, "gui-dialog-title"], [1, "gui-structure-schema-manager-select", "gui-flex", "gui-flex-col", "gui-mb-10"], [1, "gui-mb-4"], [3, "options", "placeholder", "selected", "optionChanged"], [1, "gui-structure-schema-manager-select", "gui-flex", "gui-flex-col"], [3, "options", "selected", "optionChanged"], [1, "gui-mt-14", 3, "checked", "changed"], [1, "gui-mt-10", 3, "checked", "changed"]], template: function StructureSchemaMangerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtext(2);
        i0.ɵɵpipe(3, "guiTranslate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 2);
        i0.ɵɵelementStart(5, "span", 3);
        i0.ɵɵtext(6);
        i0.ɵɵpipe(7, "guiTranslate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "gui-select", 4);
        i0.ɵɵlistener("optionChanged", function StructureSchemaMangerComponent_Template_gui_select_optionChanged_8_listener($event) { return ctx.toggleTheme($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 5);
        i0.ɵɵelementStart(10, "span", 3);
        i0.ɵɵtext(11);
        i0.ɵɵpipe(12, "guiTranslate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "gui-select", 6);
        i0.ɵɵlistener("optionChanged", function StructureSchemaMangerComponent_Template_gui_select_optionChanged_13_listener($event) { return ctx.toggleRowColoring($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "gui-checkbox", 7);
        i0.ɵɵlistener("changed", function StructureSchemaMangerComponent_Template_gui_checkbox_changed_14_listener($event) { return ctx.toggleVerticalGrid($event); });
        i0.ɵɵtext(15);
        i0.ɵɵpipe(16, "guiTranslate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "gui-checkbox", 8);
        i0.ɵɵlistener("changed", function StructureSchemaMangerComponent_Template_gui_checkbox_changed_17_listener($event) { return ctx.toggleHorizontalGrid($event); });
        i0.ɵɵtext(18);
        i0.ɵɵpipe(19, "guiTranslate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 12, "themeManagerModalTitle"));
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 14, "themeManagerModalTheme"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("options", ctx.themes)("placeholder", "Select theme")("selected", ctx.selectedTheme);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(12, 16, "themeManagerModalRowColoring"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("options", ctx.coloring)("selected", ctx.selectedRowColoring);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("checked", ctx.verticalGrid);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(16, 18, "themeManagerModalVerticalGrid"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("checked", ctx.horizontalGrid);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(19, 20, "themeManagerModalHorizontalGrid"), " ");
    } }, directives: [i5.FabricSelectComponent, i5.FabricCheckboxComponent], pipes: [i6.TranslationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureSchemaMangerComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-schema-manager]',
                templateUrl: './structure.schema-manger.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.SchemaReadModelRootId }, { type: i3.SchemaCommandInvoker }, { type: i4.SchemaWarehouse }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNjaGVtYS1tYW5nZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL3N0cnVjdHVyZS5zY2hlbWEtbWFuZ2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc2NoZW1hL2ZlYXR1cmUvbWFuYWdlci9zdHJ1Y3R1cmUuc2NoZW1hLW1hbmdlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBc0IsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0gsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBR2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7Ozs7OztBQVUvRSxNQUFNLE9BQU8sOEJBQStCLFNBQVEsY0FBYztJQThCakUsWUFBNkIsaUJBQW9DLEVBQzlELEtBQWlCLEVBQ0EsV0FBd0IsRUFDeEIscUJBQTRDLEVBQzVDLG9CQUEwQyxFQUMxQyxlQUFnQztRQUNuRCxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFOSixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTdDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFqQ3BELGFBQVEsR0FB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L0UsOEJBQWlGO1FBQ2hGLCtCQUF1QjtRQUFBLFlBQTJDOztRQUFBLGlCQUFPO1FBQ3pFLHFDQUc4QjtRQUhsQixxSUFBaUIsdUJBQW1CLElBQUM7UUFJakQsaUJBQWE7UUFDZCxpQkFBTTtRQUVOLDhCQUF1RTtRQUV0RSxnQ0FBdUI7UUFDdEIsYUFDRDs7UUFBQSxpQkFBTztRQUVQLHNDQUVvQztRQUZ4QixzSUFBaUIsNkJBQXlCLElBQUM7UUFHdkQsaUJBQWE7UUFDZCxpQkFBTTtRQUVOLHdDQUV1QjtRQUZULDRIQUFXLDhCQUEwQixJQUFDO1FBR25ELGFBQ0Q7O1FBQUEsaUJBQWU7UUFFZix3Q0FFdUI7UUFGVCw0SEFBVyxnQ0FBNEIsSUFBQztRQUdyRCxhQUNEOztRQUFBLGlCQUFlO1FBRWhCLGlCQUFNOztRQW5DeUIsZUFBMkM7UUFBM0MscUVBQTJDO1FBR2pELGVBQTJDO1FBQTNDLHFFQUEyQztRQUUvRCxlQUFrQjtRQUFsQixvQ0FBa0IsK0JBQUEsK0JBQUE7UUFTcEIsZUFDRDtRQURDLHVGQUNEO1FBR0csZUFBb0I7UUFBcEIsc0NBQW9CLHFDQUFBO1FBTW5CLGVBQXdCO1FBQXhCLDBDQUF3QjtRQUU1QixlQUNEO1FBREMsd0ZBQ0Q7UUFHSyxlQUEwQjtRQUExQiw0Q0FBMEI7UUFFOUIsZUFDRDtRQURDLDBGQUNEOzt1RkRoQlksOEJBQThCO2NBTjFDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxXQUFXLEVBQUUsMENBQTBDO2dCQUN2RCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlTZWxlY3RPcHRpb24gfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3Jvdy1jb2xvcmluZy9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc2NoZW1hLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcm93LWNvbG9yaW5nL3Jvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLXNjaGVtYS1tYW5hZ2VyXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUuc2NoZW1hLW1hbmdlci5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNjaGVtYU1hbmdlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb2xvcmluZzogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiA9IE9iamVjdC5rZXlzKFNjaGVtYVJvd0NvbG9yaW5nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAubWFwKChrZXk6IHN0cmluZykgPT4gU2NoZW1hUm93Q29sb3Jpbmdba2V5XSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLmZpbHRlcigodmFsKSA9PiAhTnVtYmVyLmlzSW50ZWdlcih2YWwpKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAubWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgcmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlOiB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IG5hbWU6IHZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgfTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgfSk7XG5cblx0dGhlbWVzOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+ID0gT2JqZWN0LmtleXMoU2NoZW1hVGhlbWUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC5tYXAoKGtleTogc3RyaW5nKSA9PiBTY2hlbWFUaGVtZVtrZXldKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICAuZmlsdGVyKCh2YWwpID0+ICFOdW1iZXIuaXNJbnRlZ2VyKHZhbCkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICByZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgdmFsdWU6IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgbmFtZTogdmFsdWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9KTtcblxuXHRzZWxlY3RlZFJvd0NvbG9yaW5nOiBHdWlTZWxlY3RPcHRpb247XG5cblx0c2VsZWN0ZWRUaGVtZTogR3VpU2VsZWN0T3B0aW9uO1xuXG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUNvbW1hbmRJbnZva2VyOiBTY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFXYXJlaG91c2U6IFNjaGVtYVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zY2hlbWFXYXJlaG91c2Uub25Sb3dDb2xvcmluZyh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCksXG5cdFx0XHQocm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dDb2xvcmluZyA9IHtcblx0XHRcdFx0XHR2YWx1ZTogU2NoZW1hUm93Q29sb3Jpbmdbcm93Q29sb3JpbmddLFxuXHRcdFx0XHRcdG5hbWU6IFNjaGVtYVJvd0NvbG9yaW5nW3Jvd0NvbG9yaW5nXVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc2NoZW1hV2FyZWhvdXNlLm9uVGhlbWUodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpLFxuXHRcdFx0KHNjaGVtYVRoZW1lOiBTY2hlbWFUaGVtZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkVGhlbWUgPSB7XG5cdFx0XHRcdFx0dmFsdWU6IFNjaGVtYVRoZW1lW3NjaGVtYVRoZW1lXSxcblx0XHRcdFx0XHRuYW1lOiBTY2hlbWFUaGVtZVtzY2hlbWFUaGVtZV1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnNjaGVtYVdhcmVob3VzZS5vblZlcnRpY2FsR3JpZCh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCksXG5cdFx0XHQodmVydGljYWxHcmlkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMudmVydGljYWxHcmlkID0gdmVydGljYWxHcmlkO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc2NoZW1hV2FyZWhvdXNlLm9uSG9yaXpvbnRhbEdyaWQodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpLFxuXHRcdFx0KGhvcml6b250YWxHcmlkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbEdyaWQgPSBob3Jpem9udGFsR3JpZDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdH1cblxuXHR0b2dnbGVUaGVtZSh0aGVtZTogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRUaGVtZSh0aGlzLnRvVGhlbWUodGhlbWUudmFsdWUpLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHR0b2dnbGVSb3dDb2xvcmluZyhzY2hlbWFSb3dDb2xvcmluZzogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRSb3dDb2xvcmluZyh0aGlzLnRvUm93Q29sb3Jpbmcoc2NoZW1hUm93Q29sb3JpbmcudmFsdWUpLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHR0b2dnbGVWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHR0b2dnbGVIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIuc2V0SG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQsIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdHByaXZhdGUgdG9UaGVtZSh0aGVtZTogc3RyaW5nKTogU2NoZW1hVGhlbWUge1xuXHRcdHN3aXRjaCAodGhlbWUudG9Mb3dlckNhc2UoKSkge1xuXG5cdFx0XHRjYXNlICdmYWJyaWMnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuRkFCUklDO1xuXG5cdFx0XHRjYXNlICdtYXRlcmlhbCc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5NQVRFUklBTDtcblxuXHRcdFx0Y2FzZSAnZ2VuZXJpYyc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5HRU5FUklDO1xuXG5cdFx0XHRjYXNlICdsaWdodCc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5MSUdIVDtcblxuXHRcdFx0Y2FzZSAnZGFyayc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5EQVJLO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuRkFCUklDO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdG9Sb3dDb2xvcmluZyhjb2xvcmluZzogc3RyaW5nKTogUm93Q29sb3Jpbmcge1xuXHRcdHN3aXRjaCAoY29sb3JpbmcudG9Mb3dlckNhc2UoKSkge1xuXG5cdFx0XHRjYXNlICdub25lJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk5PTkU7XG5cblx0XHRcdGNhc2UgJ29kZCc6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5PREQ7XG5cblx0XHRcdGNhc2UgJ2V2ZW4nOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk5PTkU7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1zY2hlbWEtbWFuYWdlcic7XG5cdH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJndWktc2NoZW1hLW1hbmFnZXIgZ3VpLWZsZXggZ3VpLWZsZXgtY29sXCI+XG5cblx0PGRpdiBjbGFzcz1cImd1aS1kaWFsb2ctdGl0bGVcIj57eyd0aGVtZU1hbmFnZXJNb2RhbFRpdGxlJyB8IGd1aVRyYW5zbGF0ZX19PC9kaXY+XG5cblx0PGRpdiBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc2NoZW1hLW1hbmFnZXItc2VsZWN0IGd1aS1mbGV4IGd1aS1mbGV4LWNvbCBndWktbWItMTBcIj5cblx0XHQ8c3BhbiBjbGFzcz1cImd1aS1tYi00XCI+e3sndGhlbWVNYW5hZ2VyTW9kYWxUaGVtZScgfCBndWlUcmFuc2xhdGV9fTwvc3Bhbj5cblx0XHQ8Z3VpLXNlbGVjdCAob3B0aW9uQ2hhbmdlZCk9XCJ0b2dnbGVUaGVtZSgkZXZlbnQpXCJcblx0XHRcdFx0XHRbb3B0aW9uc109XCJ0aGVtZXNcIlxuXHRcdFx0XHRcdFtwbGFjZWhvbGRlcl09XCInU2VsZWN0IHRoZW1lJ1wiXG5cdFx0XHRcdFx0W3NlbGVjdGVkXT1cInNlbGVjdGVkVGhlbWVcIj5cblx0XHQ8L2d1aS1zZWxlY3Q+XG5cdDwvZGl2PlxuXG5cdDxkaXYgY2xhc3M9XCJndWktc3RydWN0dXJlLXNjaGVtYS1tYW5hZ2VyLXNlbGVjdCBndWktZmxleCBndWktZmxleC1jb2xcIj5cblxuXHRcdDxzcGFuIGNsYXNzPVwiZ3VpLW1iLTRcIj5cblx0XHRcdHt7J3RoZW1lTWFuYWdlck1vZGFsUm93Q29sb3JpbmcnIHwgZ3VpVHJhbnNsYXRlfX1cblx0XHQ8L3NwYW4+XG5cblx0XHQ8Z3VpLXNlbGVjdCAob3B0aW9uQ2hhbmdlZCk9XCJ0b2dnbGVSb3dDb2xvcmluZygkZXZlbnQpXCJcblx0XHRcdFx0XHRbb3B0aW9uc109XCJjb2xvcmluZ1wiXG5cdFx0XHRcdFx0W3NlbGVjdGVkXT1cInNlbGVjdGVkUm93Q29sb3JpbmdcIj5cblx0XHQ8L2d1aS1zZWxlY3Q+XG5cdDwvZGl2PlxuXG5cdDxndWktY2hlY2tib3ggKGNoYW5nZWQpPVwidG9nZ2xlVmVydGljYWxHcmlkKCRldmVudClcIlxuXHRcdFx0XHQgIFtjaGVja2VkXT1cInZlcnRpY2FsR3JpZFwiXG5cdFx0XHRcdCAgY2xhc3M9XCJndWktbXQtMTRcIj5cblx0XHR7eyd0aGVtZU1hbmFnZXJNb2RhbFZlcnRpY2FsR3JpZCcgfCBndWlUcmFuc2xhdGV9fVxuXHQ8L2d1aS1jaGVja2JveD5cblxuXHQ8Z3VpLWNoZWNrYm94IChjaGFuZ2VkKT1cInRvZ2dsZUhvcml6b250YWxHcmlkKCRldmVudClcIlxuXHRcdFx0XHQgIFtjaGVja2VkXT1cImhvcml6b250YWxHcmlkXCJcblx0XHRcdFx0ICBjbGFzcz1cImd1aS1tdC0xMFwiPlxuXHRcdHt7J3RoZW1lTWFuYWdlck1vZGFsSG9yaXpvbnRhbEdyaWQnIHwgZ3VpVHJhbnNsYXRlfX1cblx0PC9ndWktY2hlY2tib3g+XG5cbjwvZGl2PlxuIl19