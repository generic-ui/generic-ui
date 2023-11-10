import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SchemaRowColoring } from '../../../../core/schema/src/api/row-coloring/schema-row-coloring';
import { SchemaTheme } from '../../../../core/schema/src/api/theme/schema-theme';
import { RowColoring } from '../../../../core/schema/src/api/row-coloring/row-coloring';
import { SmartComponent } from '../../../common/component/src/smart-component';
import { hermesMap } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../core/schema/src/api/global/schema.read-model-root-id";
import * as i3 from "../../../../core/schema/src/api/schema.publisher";
import * as i4 from "../../../../core/schema/src/api/schema.warehouse";
import * as i5 from "@generic-ui/fabric";
import * as i6 from "../../../gui-angular/template/let/gui.let.directive";
import * as i7 from "../../../l10n/src/translation.pipe";
import * as i8 from "../../../gui-angular/template/push/gui.push.pipe";
export class StructureSchemaMangerComponent extends SmartComponent {
    structureId;
    schemaReadModelRootId;
    schemaPublisher;
    schemaWarehouse;
    coloring = this.createColoringOptions();
    themes = this.createThemeOptions();
    rowColoring$ = this.selectRowColoring();
    theme$ = this.selectTheme();
    // @ts-ignore
    verticalGrid$ = this.schemaWarehouse.onVerticalGrid(this.schemaReadModelRootId);
    // @ts-ignore
    horizontalGrid$ = this.schemaWarehouse.onHorizontalGrid(this.schemaReadModelRootId);
    constructor(changeDetectorRef, elRef, structureId, schemaReadModelRootId, schemaPublisher, schemaWarehouse) {
        super(changeDetectorRef, elRef);
        this.structureId = structureId;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.schemaPublisher = schemaPublisher;
        this.schemaWarehouse = schemaWarehouse;
    }
    toggleTheme(theme) {
        this.schemaPublisher.setTheme(this.toTheme(theme.value), this.schemaReadModelRootId, this.structureId);
    }
    toggleRowColoring(schemaRowColoring) {
        this.schemaPublisher.setRowColoring(this.toRowColoring(schemaRowColoring.value), this.schemaReadModelRootId);
    }
    toggleVerticalGrid(verticalGrid) {
        event.stopPropagation();
        this.schemaPublisher.setVerticalGrid(!verticalGrid, this.schemaReadModelRootId);
    }
    toggleHorizontalGrid(horizontalGrid) {
        event.stopPropagation();
        this.schemaPublisher.setHorizontalGrid(!horizontalGrid, this.schemaReadModelRootId);
    }
    getSelectorName() {
        return 'gui-structure-schema-manager';
    }
    createColoringOptions() {
        return Object.keys(SchemaRowColoring)
            .map((key) => SchemaRowColoring[key])
            .filter((val) => !Number.isInteger(val))
            .map((value) => {
            return {
                value: value,
                name: value
            };
        });
    }
    createThemeOptions() {
        return Object.keys(SchemaTheme)
            .map((key) => SchemaTheme[key])
            .filter((val) => !Number.isInteger(val))
            .map((value) => {
            return {
                value: value,
                name: value
            };
        });
    }
    selectRowColoring() {
        return this.schemaWarehouse
            .onRowColoring(this.schemaReadModelRootId)
            .pipe(hermesMap((rowColoring) => {
            return {
                value: SchemaRowColoring[rowColoring],
                name: SchemaRowColoring[rowColoring]
            };
        }));
    }
    selectTheme() {
        return this.schemaWarehouse
            .onTheme(this.schemaReadModelRootId)
            .pipe(hermesMap((schemaTheme) => {
            return {
                value: SchemaTheme[schemaTheme],
                name: SchemaTheme[schemaTheme]
            };
        }));
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureSchemaMangerComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.StructureId }, { token: i2.SchemaReadModelRootId }, { token: i3.SchemaPublisher }, { token: i4.SchemaWarehouse }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: StructureSchemaMangerComponent, selector: "div[gui-structure-schema-manager]", usesInheritance: true, ngImport: i0, template: "<div class=\"gui-schema-manager gui-flex gui-flex-col\">\n\n\t<div class=\"gui-dialog-title gui-mb-8\">{{'themeManagerModalTitle' | guiTranslate}}</div>\n\n\t<div class=\"gui-structure-schema-manager-select gui-flex gui-flex-col\">\n\n\t\t<span class=\"gui-mb-4 gui-text-xs\">{{'themeManagerModalTheme' | guiTranslate}}</span>\n\n\t\t<gui-select (optionChanged)=\"toggleTheme($event)\"\n\t\t\t\t\t[options]=\"themes\"\n\t\t\t\t\t[selected]=\"theme$ | guiPush\"\n\t\t\t\t\t[width]=\"180\">\n\t\t</gui-select>\n\t</div>\n\n\t<div class=\"gui-structure-schema-manager-select gui-flex gui-flex-col \">\n\n\t\t<span class=\"gui-mb-4 gui-text-xs\">\n\t\t\t{{'themeManagerModalRowColoring' | guiTranslate}}\n\t\t</span>\n\n\t\t<gui-select (optionChanged)=\"toggleRowColoring($event)\"\n\t\t\t\t\t[options]=\"coloring\"\n\t\t\t\t\t[selected]=\"rowColoring$ | guiPush\"\n\t\t\t\t\t[width]=\"180\">\n\t\t</gui-select>\n\t</div>\n\n\t<ol class=\"gui-structure-ordered-list gui-mx-10 gui-p-0 gui-my-4 gui-list-none gui-overflow-auto\">\n\n\t\t<li (click)=\"toggleVerticalGrid(verticalGrid)\"\n\t\t\t*guiLet=\"verticalGrid$; let verticalGrid\"\n\t\t\tclass=\"gui-px-13 gui-py-6 gui-cursor-pointer\">\n\n\t\t\t<gui-checkbox [checked]=\"verticalGrid\">\n\t\t\t\t{{'themeManagerModalVerticalGrid' | guiTranslate}}\n\t\t\t</gui-checkbox>\n\n\t\t</li>\n\n\t\t<li (click)=\"toggleHorizontalGrid(horizontalGrid)\"\n\t\t\t*guiLet=\"horizontalGrid$; let horizontalGrid\"\n\t\t\tclass=\"gui-px-13 gui-py-6 gui-cursor-pointer\">\n\n\t\t\t<gui-checkbox [checked]=\"horizontalGrid\">\n\t\t\t\t{{'themeManagerModalHorizontalGrid' | guiTranslate}}\n\t\t\t</gui-checkbox>\n\n\t\t</li>\n\t</ol>\n</div>\n", dependencies: [{ kind: "component", type: i5.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }, { kind: "component", type: i5.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }, { kind: "directive", type: i6.GuiLetDirective, selector: "[guiLet]", inputs: ["guiLet"] }, { kind: "pipe", type: i7.TranslationPipe, name: "guiTranslate" }, { kind: "pipe", type: i8.GuiPushPipe, name: "guiPush" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureSchemaMangerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-schema-manager]', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"gui-schema-manager gui-flex gui-flex-col\">\n\n\t<div class=\"gui-dialog-title gui-mb-8\">{{'themeManagerModalTitle' | guiTranslate}}</div>\n\n\t<div class=\"gui-structure-schema-manager-select gui-flex gui-flex-col\">\n\n\t\t<span class=\"gui-mb-4 gui-text-xs\">{{'themeManagerModalTheme' | guiTranslate}}</span>\n\n\t\t<gui-select (optionChanged)=\"toggleTheme($event)\"\n\t\t\t\t\t[options]=\"themes\"\n\t\t\t\t\t[selected]=\"theme$ | guiPush\"\n\t\t\t\t\t[width]=\"180\">\n\t\t</gui-select>\n\t</div>\n\n\t<div class=\"gui-structure-schema-manager-select gui-flex gui-flex-col \">\n\n\t\t<span class=\"gui-mb-4 gui-text-xs\">\n\t\t\t{{'themeManagerModalRowColoring' | guiTranslate}}\n\t\t</span>\n\n\t\t<gui-select (optionChanged)=\"toggleRowColoring($event)\"\n\t\t\t\t\t[options]=\"coloring\"\n\t\t\t\t\t[selected]=\"rowColoring$ | guiPush\"\n\t\t\t\t\t[width]=\"180\">\n\t\t</gui-select>\n\t</div>\n\n\t<ol class=\"gui-structure-ordered-list gui-mx-10 gui-p-0 gui-my-4 gui-list-none gui-overflow-auto\">\n\n\t\t<li (click)=\"toggleVerticalGrid(verticalGrid)\"\n\t\t\t*guiLet=\"verticalGrid$; let verticalGrid\"\n\t\t\tclass=\"gui-px-13 gui-py-6 gui-cursor-pointer\">\n\n\t\t\t<gui-checkbox [checked]=\"verticalGrid\">\n\t\t\t\t{{'themeManagerModalVerticalGrid' | guiTranslate}}\n\t\t\t</gui-checkbox>\n\n\t\t</li>\n\n\t\t<li (click)=\"toggleHorizontalGrid(horizontalGrid)\"\n\t\t\t*guiLet=\"horizontalGrid$; let horizontalGrid\"\n\t\t\tclass=\"gui-px-13 gui-py-6 gui-cursor-pointer\">\n\n\t\t\t<gui-checkbox [checked]=\"horizontalGrid\">\n\t\t\t\t{{'themeManagerModalHorizontalGrid' | guiTranslate}}\n\t\t\t</gui-checkbox>\n\n\t\t</li>\n\t</ol>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.SchemaReadModelRootId }, { type: i3.SchemaPublisher }, { type: i4.SchemaWarehouse }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNjaGVtYS1tYW5nZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3NjaGVtYS9zcmMvbWFuYWdlci9zdHJ1Y3R1cmUuc2NoZW1hLW1hbmdlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc2NoZW1hL3NyYy9tYW5hZ2VyL3N0cnVjdHVyZS5zY2hlbWEtbWFuZ2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXJILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUdqRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDeEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRS9FLE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7QUFTakUsTUFBTSxPQUFPLDhCQUErQixTQUFRLGNBQWM7SUFrQjdDO0lBQ0E7SUFDQTtJQUNBO0lBbkJwQixRQUFRLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFFeEMsTUFBTSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBRW5DLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUV4QyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRTVCLGFBQWE7SUFDYixhQUFhLEdBQUcsSUFBSSxDQUFDLGVB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T0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztTQUN6QjtJQUNGLENBQUM7d0dBdklXLDhCQUE4Qjs0RkFBOUIsOEJBQThCLGdHQ3BCM0MsNG9EQW1EQTs7NEZEL0JhLDhCQUE4QjtrQkFOMUMsU0FBUzsrQkFDQyxtQ0FBbUMsaUJBRTlCLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL3NjaGVtYS5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9nbG9iYWwvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvcm93LWNvbG9yaW5nL3Jvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLXNjaGVtYS1tYW5hZ2VyXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUuc2NoZW1hLW1hbmdlci5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNjaGVtYU1hbmdlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRjb2xvcmluZyA9IHRoaXMuY3JlYXRlQ29sb3JpbmdPcHRpb25zKCk7XG5cblx0dGhlbWVzID0gdGhpcy5jcmVhdGVUaGVtZU9wdGlvbnMoKTtcblxuXHRyb3dDb2xvcmluZyQgPSB0aGlzLnNlbGVjdFJvd0NvbG9yaW5nKCk7XG5cblx0dGhlbWUkID0gdGhpcy5zZWxlY3RUaGVtZSgpO1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0dmVydGljYWxHcmlkJCA9IHRoaXMuc2NoZW1hV2FyZWhvdXNlLm9uVmVydGljYWxHcmlkKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblxuXHQvLyBAdHMtaWdub3JlXG5cdGhvcml6b250YWxHcmlkJCA9IHRoaXMuc2NoZW1hV2FyZWhvdXNlLm9uSG9yaXpvbnRhbEdyaWQodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXG5cdGNvbnN0cnVjdG9yKGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVB1Ymxpc2hlcjogU2NoZW1hUHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVdhcmVob3VzZTogU2NoZW1hV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsUmVmKTtcblx0fVxuXG5cdHRvZ2dsZVRoZW1lKHRoZW1lOiBHdWlTZWxlY3RPcHRpb24pOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYVB1Ymxpc2hlci5zZXRUaGVtZSh0aGlzLnRvVGhlbWUodGhlbWUudmFsdWUpLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHR0b2dnbGVSb3dDb2xvcmluZyhzY2hlbWFSb3dDb2xvcmluZzogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFQdWJsaXNoZXIuc2V0Um93Q29sb3JpbmcodGhpcy50b1Jvd0NvbG9yaW5nKHNjaGVtYVJvd0NvbG9yaW5nLnZhbHVlKSwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0dG9nZ2xlVmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMuc2NoZW1hUHVibGlzaGVyLnNldFZlcnRpY2FsR3JpZCghdmVydGljYWxHcmlkLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHR0b2dnbGVIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMuc2NoZW1hUHVibGlzaGVyLnNldEhvcml6b250YWxHcmlkKCFob3Jpem9udGFsR3JpZCwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1zY2hlbWEtbWFuYWdlcic7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUNvbG9yaW5nT3B0aW9ucygpOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+IHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoU2NoZW1hUm93Q29sb3JpbmcpXG5cdFx0XHRcdFx0IC5tYXAoKGtleTogc3RyaW5nKSA9PiBTY2hlbWFSb3dDb2xvcmluZ1trZXldKVxuXHRcdFx0XHRcdCAuZmlsdGVyKCh2YWwpID0+ICFOdW1iZXIuaXNJbnRlZ2VyKHZhbCkpXG5cdFx0XHRcdFx0IC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRcdCByZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHQgdmFsdWU6IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHQgbmFtZTogdmFsdWVcblx0XHRcdFx0XHRcdCB9O1xuXHRcdFx0XHRcdCB9KTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlVGhlbWVPcHRpb25zKCk6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj4ge1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyhTY2hlbWFUaGVtZSlcblx0XHRcdFx0XHQgLm1hcCgoa2V5OiBzdHJpbmcpID0+IFNjaGVtYVRoZW1lW2tleV0pXG5cdFx0XHRcdFx0IC5maWx0ZXIoKHZhbCkgPT4gIU51bWJlci5pc0ludGVnZXIodmFsKSlcblx0XHRcdFx0XHQgLm1hcCgodmFsdWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdFx0IHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdCB2YWx1ZTogdmFsdWUsXG5cdFx0XHRcdFx0XHRcdCBuYW1lOiB2YWx1ZVxuXHRcdFx0XHRcdFx0IH07XG5cdFx0XHRcdFx0IH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RSb3dDb2xvcmluZygpOiBIZXJtZXNPYnNlcnZhYmxlPEd1aVNlbGVjdE9wdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVdhcmVob3VzZVxuXHRcdFx0XHQgICAub25Sb3dDb2xvcmluZyh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChyb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdCAgIHZhbHVlOiBTY2hlbWFSb3dDb2xvcmluZ1tyb3dDb2xvcmluZ10sXG5cdFx0XHRcdFx0XHRcdCAgIG5hbWU6IFNjaGVtYVJvd0NvbG9yaW5nW3Jvd0NvbG9yaW5nXVxuXHRcdFx0XHRcdFx0ICAgfTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RUaGVtZSgpOiBIZXJtZXNPYnNlcnZhYmxlPEd1aVNlbGVjdE9wdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVdhcmVob3VzZVxuXHRcdFx0XHQgICAub25UaGVtZSh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChzY2hlbWFUaGVtZTogU2NoZW1hVGhlbWUpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdCAgIHZhbHVlOiBTY2hlbWFUaGVtZVtzY2hlbWFUaGVtZV0sXG5cdFx0XHRcdFx0XHRcdCAgIG5hbWU6IFNjaGVtYVRoZW1lW3NjaGVtYVRoZW1lXVxuXHRcdFx0XHRcdFx0ICAgfTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSB0b1RoZW1lKHRoZW1lOiBzdHJpbmcpOiBTY2hlbWFUaGVtZSB7XG5cdFx0c3dpdGNoICh0aGVtZS50b0xvd2VyQ2FzZSgpKSB7XG5cblx0XHRcdGNhc2UgJ2ZhYnJpYyc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5GQUJSSUM7XG5cblx0XHRcdGNhc2UgJ21hdGVyaWFsJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLk1BVEVSSUFMO1xuXG5cdFx0XHRjYXNlICdnZW5lcmljJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkdFTkVSSUM7XG5cblx0XHRcdGNhc2UgJ2xpZ2h0Jzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkxJR0hUO1xuXG5cdFx0XHRjYXNlICdkYXJrJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkRBUks7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5GQUJSSUM7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB0b1Jvd0NvbG9yaW5nKGNvbG9yaW5nOiBzdHJpbmcpOiBSb3dDb2xvcmluZyB7XG5cdFx0c3dpdGNoIChjb2xvcmluZy50b0xvd2VyQ2FzZSgpKSB7XG5cblx0XHRcdGNhc2UgJ25vbmUnOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuTk9ORTtcblxuXHRcdFx0Y2FzZSAnb2RkJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk9ERDtcblxuXHRcdFx0Y2FzZSAnZXZlbic6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuTk9ORTtcblx0XHR9XG5cdH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJndWktc2NoZW1hLW1hbmFnZXIgZ3VpLWZsZXggZ3VpLWZsZXgtY29sXCI+XG5cblx0PGRpdiBjbGFzcz1cImd1aS1kaWFsb2ctdGl0bGUgZ3VpLW1iLThcIj57eyd0aGVtZU1hbmFnZXJNb2RhbFRpdGxlJyB8IGd1aVRyYW5zbGF0ZX19PC9kaXY+XG5cblx0PGRpdiBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc2NoZW1hLW1hbmFnZXItc2VsZWN0IGd1aS1mbGV4IGd1aS1mbGV4LWNvbFwiPlxuXG5cdFx0PHNwYW4gY2xhc3M9XCJndWktbWItNCBndWktdGV4dC14c1wiPnt7J3RoZW1lTWFuYWdlck1vZGFsVGhlbWUnIHwgZ3VpVHJhbnNsYXRlfX08L3NwYW4+XG5cblx0XHQ8Z3VpLXNlbGVjdCAob3B0aW9uQ2hhbmdlZCk9XCJ0b2dnbGVUaGVtZSgkZXZlbnQpXCJcblx0XHRcdFx0XHRbb3B0aW9uc109XCJ0aGVtZXNcIlxuXHRcdFx0XHRcdFtzZWxlY3RlZF09XCJ0aGVtZSQgfCBndWlQdXNoXCJcblx0XHRcdFx0XHRbd2lkdGhdPVwiMTgwXCI+XG5cdFx0PC9ndWktc2VsZWN0PlxuXHQ8L2Rpdj5cblxuXHQ8ZGl2IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zY2hlbWEtbWFuYWdlci1zZWxlY3QgZ3VpLWZsZXggZ3VpLWZsZXgtY29sIFwiPlxuXG5cdFx0PHNwYW4gY2xhc3M9XCJndWktbWItNCBndWktdGV4dC14c1wiPlxuXHRcdFx0e3sndGhlbWVNYW5hZ2VyTW9kYWxSb3dDb2xvcmluZycgfCBndWlUcmFuc2xhdGV9fVxuXHRcdDwvc3Bhbj5cblxuXHRcdDxndWktc2VsZWN0IChvcHRpb25DaGFuZ2VkKT1cInRvZ2dsZVJvd0NvbG9yaW5nKCRldmVudClcIlxuXHRcdFx0XHRcdFtvcHRpb25zXT1cImNvbG9yaW5nXCJcblx0XHRcdFx0XHRbc2VsZWN0ZWRdPVwicm93Q29sb3JpbmckIHwgZ3VpUHVzaFwiXG5cdFx0XHRcdFx0W3dpZHRoXT1cIjE4MFwiPlxuXHRcdDwvZ3VpLXNlbGVjdD5cblx0PC9kaXY+XG5cblx0PG9sIGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1vcmRlcmVkLWxpc3QgZ3VpLW14LTEwIGd1aS1wLTAgZ3VpLW15LTQgZ3VpLWxpc3Qtbm9uZSBndWktb3ZlcmZsb3ctYXV0b1wiPlxuXG5cdFx0PGxpIChjbGljayk9XCJ0b2dnbGVWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkKVwiXG5cdFx0XHQqZ3VpTGV0PVwidmVydGljYWxHcmlkJDsgbGV0IHZlcnRpY2FsR3JpZFwiXG5cdFx0XHRjbGFzcz1cImd1aS1weC0xMyBndWktcHktNiBndWktY3Vyc29yLXBvaW50ZXJcIj5cblxuXHRcdFx0PGd1aS1jaGVja2JveCBbY2hlY2tlZF09XCJ2ZXJ0aWNhbEdyaWRcIj5cblx0XHRcdFx0e3sndGhlbWVNYW5hZ2VyTW9kYWxWZXJ0aWNhbEdyaWQnIHwgZ3VpVHJhbnNsYXRlfX1cblx0XHRcdDwvZ3VpLWNoZWNrYm94PlxuXG5cdFx0PC9saT5cblxuXHRcdDxsaSAoY2xpY2spPVwidG9nZ2xlSG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQpXCJcblx0XHRcdCpndWlMZXQ9XCJob3Jpem9udGFsR3JpZCQ7IGxldCBob3Jpem9udGFsR3JpZFwiXG5cdFx0XHRjbGFzcz1cImd1aS1weC0xMyBndWktcHktNiBndWktY3Vyc29yLXBvaW50ZXJcIj5cblxuXHRcdFx0PGd1aS1jaGVja2JveCBbY2hlY2tlZF09XCJob3Jpem9udGFsR3JpZFwiPlxuXHRcdFx0XHR7eyd0aGVtZU1hbmFnZXJNb2RhbEhvcml6b250YWxHcmlkJyB8IGd1aVRyYW5zbGF0ZX19XG5cdFx0XHQ8L2d1aS1jaGVja2JveD5cblxuXHRcdDwvbGk+XG5cdDwvb2w+XG48L2Rpdj5cbiJdfQ==