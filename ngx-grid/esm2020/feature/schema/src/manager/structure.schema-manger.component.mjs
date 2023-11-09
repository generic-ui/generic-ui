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
    constructor(changeDetectorRef, elRef, structureId, schemaReadModelRootId, schemaPublisher, schemaWarehouse) {
        super(changeDetectorRef, elRef);
        this.structureId = structureId;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.schemaPublisher = schemaPublisher;
        this.schemaWarehouse = schemaWarehouse;
        this.coloring = this.createColoringOptions();
        this.themes = this.createThemeOptions();
        this.rowColoring$ = this.selectRowColoring();
        this.theme$ = this.selectTheme();
        this.verticalGrid$ = this.schemaWarehouse.onVerticalGrid(this.schemaReadModelRootId);
        this.horizontalGrid$ = this.schemaWarehouse.onHorizontalGrid(this.schemaReadModelRootId);
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
}
StructureSchemaMangerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureSchemaMangerComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.StructureId }, { token: i2.SchemaReadModelRootId }, { token: i3.SchemaPublisher }, { token: i4.SchemaWarehouse }], target: i0.ɵɵFactoryTarget.Component });
StructureSchemaMangerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: StructureSchemaMangerComponent, selector: "div[gui-structure-schema-manager]", usesInheritance: true, ngImport: i0, template: "<div class=\"gui-schema-manager gui-flex gui-flex-col\">\n\n\t<div class=\"gui-dialog-title gui-mb-8\">{{'themeManagerModalTitle' | guiTranslate}}</div>\n\n\t<div class=\"gui-structure-schema-manager-select gui-flex gui-flex-col\">\n\n\t\t<span class=\"gui-mb-4 gui-text-xs\">{{'themeManagerModalTheme' | guiTranslate}}</span>\n\n\t\t<gui-select (optionChanged)=\"toggleTheme($event)\"\n\t\t\t\t\t[options]=\"themes\"\n\t\t\t\t\t[selected]=\"theme$ | guiPush\"\n\t\t\t\t\t[width]=\"180\">\n\t\t</gui-select>\n\t</div>\n\n\t<div class=\"gui-structure-schema-manager-select gui-flex gui-flex-col \">\n\n\t\t<span class=\"gui-mb-4 gui-text-xs\">\n\t\t\t{{'themeManagerModalRowColoring' | guiTranslate}}\n\t\t</span>\n\n\t\t<gui-select (optionChanged)=\"toggleRowColoring($event)\"\n\t\t\t\t\t[options]=\"coloring\"\n\t\t\t\t\t[selected]=\"rowColoring$ | guiPush\"\n\t\t\t\t\t[width]=\"180\">\n\t\t</gui-select>\n\t</div>\n\n\t<ol class=\"gui-structure-ordered-list gui-mx-10 gui-p-0 gui-my-4 gui-list-none gui-overflow-auto\">\n\n\t\t<li (click)=\"toggleVerticalGrid(verticalGrid)\"\n\t\t\t*guiLet=\"verticalGrid$; let verticalGrid\"\n\t\t\tclass=\"gui-px-13 gui-py-6 gui-cursor-pointer\">\n\n\t\t\t<gui-checkbox [checked]=\"verticalGrid\">\n\t\t\t\t{{'themeManagerModalVerticalGrid' | guiTranslate}}\n\t\t\t</gui-checkbox>\n\n\t\t</li>\n\n\t\t<li (click)=\"toggleHorizontalGrid(horizontalGrid)\"\n\t\t\t*guiLet=\"horizontalGrid$; let horizontalGrid\"\n\t\t\tclass=\"gui-px-13 gui-py-6 gui-cursor-pointer\">\n\n\t\t\t<gui-checkbox [checked]=\"horizontalGrid\">\n\t\t\t\t{{'themeManagerModalHorizontalGrid' | guiTranslate}}\n\t\t\t</gui-checkbox>\n\n\t\t</li>\n\t</ol>\n</div>\n", dependencies: [{ kind: "component", type: i5.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }, { kind: "component", type: i5.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }, { kind: "directive", type: i6.GuiLetDirective, selector: "[guiLet]", inputs: ["guiLet"] }, { kind: "pipe", type: i7.TranslationPipe, name: "guiTranslate" }, { kind: "pipe", type: i8.GuiPushPipe, name: "guiPush" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureSchemaMangerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-schema-manager]', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"gui-schema-manager gui-flex gui-flex-col\">\n\n\t<div class=\"gui-dialog-title gui-mb-8\">{{'themeManagerModalTitle' | guiTranslate}}</div>\n\n\t<div class=\"gui-structure-schema-manager-select gui-flex gui-flex-col\">\n\n\t\t<span class=\"gui-mb-4 gui-text-xs\">{{'themeManagerModalTheme' | guiTranslate}}</span>\n\n\t\t<gui-select (optionChanged)=\"toggleTheme($event)\"\n\t\t\t\t\t[options]=\"themes\"\n\t\t\t\t\t[selected]=\"theme$ | guiPush\"\n\t\t\t\t\t[width]=\"180\">\n\t\t</gui-select>\n\t</div>\n\n\t<div class=\"gui-structure-schema-manager-select gui-flex gui-flex-col \">\n\n\t\t<span class=\"gui-mb-4 gui-text-xs\">\n\t\t\t{{'themeManagerModalRowColoring' | guiTranslate}}\n\t\t</span>\n\n\t\t<gui-select (optionChanged)=\"toggleRowColoring($event)\"\n\t\t\t\t\t[options]=\"coloring\"\n\t\t\t\t\t[selected]=\"rowColoring$ | guiPush\"\n\t\t\t\t\t[width]=\"180\">\n\t\t</gui-select>\n\t</div>\n\n\t<ol class=\"gui-structure-ordered-list gui-mx-10 gui-p-0 gui-my-4 gui-list-none gui-overflow-auto\">\n\n\t\t<li (click)=\"toggleVerticalGrid(verticalGrid)\"\n\t\t\t*guiLet=\"verticalGrid$; let verticalGrid\"\n\t\t\tclass=\"gui-px-13 gui-py-6 gui-cursor-pointer\">\n\n\t\t\t<gui-checkbox [checked]=\"verticalGrid\">\n\t\t\t\t{{'themeManagerModalVerticalGrid' | guiTranslate}}\n\t\t\t</gui-checkbox>\n\n\t\t</li>\n\n\t\t<li (click)=\"toggleHorizontalGrid(horizontalGrid)\"\n\t\t\t*guiLet=\"horizontalGrid$; let horizontalGrid\"\n\t\t\tclass=\"gui-px-13 gui-py-6 gui-cursor-pointer\">\n\n\t\t\t<gui-checkbox [checked]=\"horizontalGrid\">\n\t\t\t\t{{'themeManagerModalHorizontalGrid' | guiTranslate}}\n\t\t\t</gui-checkbox>\n\n\t\t</li>\n\t</ol>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.SchemaReadModelRootId }, { type: i3.SchemaPublisher }, { type: i4.SchemaWarehouse }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNjaGVtYS1tYW5nZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3NjaGVtYS9zcmMvbWFuYWdlci9zdHJ1Y3R1cmUuc2NoZW1hLW1hbmdlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc2NoZW1hL3NyYy9tYW5hZ2VyL3N0cnVjdHVyZS5zY2hlbWEtbWFuZ2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXJILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUdqRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDeEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRS9FLE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7QUFTakUsTUFBTSxPQUFPLDhCQUErQixTQUFRLGNBQWM7SUFjakUsWUFBWSxpQkFBb0MsRUFDN0MsS0FBaUIsRUFDQSxXQUF3QixFQUN4QixxQkFBNEMsRUFDNUMsZUFBZ0MsRUFDaEMsZUFBZ0M7UUFDbkQsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBSmIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENB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QU8sV0FBVyxDQUFDLElBQUksQ0FBQztTQUN6QjtJQUNGLENBQUM7OzRIQXJJVyw4QkFBOEI7Z0hBQTlCLDhCQUE4QixnR0NwQjNDLDRvREFtREE7NEZEL0JhLDhCQUE4QjtrQkFOMUMsU0FBUzsrQkFDQyxtQ0FBbUMsaUJBRTlCLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL3NjaGVtYS5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9nbG9iYWwvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvcm93LWNvbG9yaW5nL3Jvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLXNjaGVtYS1tYW5hZ2VyXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUuc2NoZW1hLW1hbmdlci5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNjaGVtYU1hbmdlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRjb2xvcmluZyA9IHRoaXMuY3JlYXRlQ29sb3JpbmdPcHRpb25zKCk7XG5cblx0dGhlbWVzID0gdGhpcy5jcmVhdGVUaGVtZU9wdGlvbnMoKTtcblxuXHRyb3dDb2xvcmluZyQgPSB0aGlzLnNlbGVjdFJvd0NvbG9yaW5nKCk7XG5cblx0dGhlbWUkID0gdGhpcy5zZWxlY3RUaGVtZSgpO1xuXG5cdHZlcnRpY2FsR3JpZCQgPSB0aGlzLnNjaGVtYVdhcmVob3VzZS5vblZlcnRpY2FsR3JpZCh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cblx0aG9yaXpvbnRhbEdyaWQkID0gdGhpcy5zY2hlbWFXYXJlaG91c2Uub25Ib3Jpem9udGFsR3JpZCh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cblx0Y29uc3RydWN0b3IoY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUHVibGlzaGVyOiBTY2hlbWFQdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hV2FyZWhvdXNlOiBTY2hlbWFXYXJlaG91c2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxSZWYpO1xuXHR9XG5cblx0dG9nZ2xlVGhlbWUodGhlbWU6IEd1aVNlbGVjdE9wdGlvbik6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hUHVibGlzaGVyLnNldFRoZW1lKHRoaXMudG9UaGVtZSh0aGVtZS52YWx1ZSksIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHRvZ2dsZVJvd0NvbG9yaW5nKHNjaGVtYVJvd0NvbG9yaW5nOiBHdWlTZWxlY3RPcHRpb24pOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYVB1Ymxpc2hlci5zZXRSb3dDb2xvcmluZyh0aGlzLnRvUm93Q29sb3Jpbmcoc2NoZW1hUm93Q29sb3JpbmcudmFsdWUpLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHR0b2dnbGVWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5zY2hlbWFQdWJsaXNoZXIuc2V0VmVydGljYWxHcmlkKCF2ZXJ0aWNhbEdyaWQsIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdHRvZ2dsZUhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5zY2hlbWFQdWJsaXNoZXIuc2V0SG9yaXpvbnRhbEdyaWQoIWhvcml6b250YWxHcmlkLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLXNjaGVtYS1tYW5hZ2VyJztcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlQ29sb3JpbmdPcHRpb25zKCk6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj4ge1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyhTY2hlbWFSb3dDb2xvcmluZylcblx0XHRcdFx0XHQgLm1hcCgoa2V5OiBzdHJpbmcpID0+IFNjaGVtYVJvd0NvbG9yaW5nW2tleV0pXG5cdFx0XHRcdFx0IC5maWx0ZXIoKHZhbCkgPT4gIU51bWJlci5pc0ludGVnZXIodmFsKSlcblx0XHRcdFx0XHQgLm1hcCgodmFsdWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdFx0IHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdCB2YWx1ZTogdmFsdWUsXG5cdFx0XHRcdFx0XHRcdCBuYW1lOiB2YWx1ZVxuXHRcdFx0XHRcdFx0IH07XG5cdFx0XHRcdFx0IH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVUaGVtZU9wdGlvbnMoKTogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiB7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKFNjaGVtYVRoZW1lKVxuXHRcdFx0XHRcdCAubWFwKChrZXk6IHN0cmluZykgPT4gU2NoZW1hVGhlbWVba2V5XSlcblx0XHRcdFx0XHQgLmZpbHRlcigodmFsKSA9PiAhTnVtYmVyLmlzSW50ZWdlcih2YWwpKVxuXHRcdFx0XHRcdCAubWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0XHQgcmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0IHZhbHVlOiB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0IG5hbWU6IHZhbHVlXG5cdFx0XHRcdFx0XHQgfTtcblx0XHRcdFx0XHQgfSk7XG5cdH1cblxuXHRwcml2YXRlIHNlbGVjdFJvd0NvbG9yaW5nKCk6IEhlcm1lc09ic2VydmFibGU8R3VpU2VsZWN0T3B0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hV2FyZWhvdXNlXG5cdFx0XHRcdCAgIC5vblJvd0NvbG9yaW5nKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZykgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0ICAgdmFsdWU6IFNjaGVtYVJvd0NvbG9yaW5nW3Jvd0NvbG9yaW5nXSxcblx0XHRcdFx0XHRcdFx0ICAgbmFtZTogU2NoZW1hUm93Q29sb3Jpbmdbcm93Q29sb3JpbmddXG5cdFx0XHRcdFx0XHQgICB9O1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIHNlbGVjdFRoZW1lKCk6IEhlcm1lc09ic2VydmFibGU8R3VpU2VsZWN0T3B0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hV2FyZWhvdXNlXG5cdFx0XHRcdCAgIC5vblRoZW1lKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKHNjaGVtYVRoZW1lOiBTY2hlbWFUaGVtZSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0ICAgdmFsdWU6IFNjaGVtYVRoZW1lW3NjaGVtYVRoZW1lXSxcblx0XHRcdFx0XHRcdFx0ICAgbmFtZTogU2NoZW1hVGhlbWVbc2NoZW1hVGhlbWVdXG5cdFx0XHRcdFx0XHQgICB9O1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIHRvVGhlbWUodGhlbWU6IHN0cmluZyk6IFNjaGVtYVRoZW1lIHtcblx0XHRzd2l0Y2ggKHRoZW1lLnRvTG93ZXJDYXNlKCkpIHtcblxuXHRcdFx0Y2FzZSAnZmFicmljJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRcdFx0Y2FzZSAnbWF0ZXJpYWwnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuTUFURVJJQUw7XG5cblx0XHRcdGNhc2UgJ2dlbmVyaWMnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuR0VORVJJQztcblxuXHRcdFx0Y2FzZSAnbGlnaHQnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuTElHSFQ7XG5cblx0XHRcdGNhc2UgJ2RhcmsnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuREFSSztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkZBQlJJQztcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHRvUm93Q29sb3JpbmcoY29sb3Jpbmc6IHN0cmluZyk6IFJvd0NvbG9yaW5nIHtcblx0XHRzd2l0Y2ggKGNvbG9yaW5nLnRvTG93ZXJDYXNlKCkpIHtcblxuXHRcdFx0Y2FzZSAnbm9uZSc6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5OT05FO1xuXG5cdFx0XHRjYXNlICdvZGQnOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRjYXNlICdldmVuJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLkVWRU47XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5OT05FO1xuXHRcdH1cblx0fVxufVxuIiwiPGRpdiBjbGFzcz1cImd1aS1zY2hlbWEtbWFuYWdlciBndWktZmxleCBndWktZmxleC1jb2xcIj5cblxuXHQ8ZGl2IGNsYXNzPVwiZ3VpLWRpYWxvZy10aXRsZSBndWktbWItOFwiPnt7J3RoZW1lTWFuYWdlck1vZGFsVGl0bGUnIHwgZ3VpVHJhbnNsYXRlfX08L2Rpdj5cblxuXHQ8ZGl2IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zY2hlbWEtbWFuYWdlci1zZWxlY3QgZ3VpLWZsZXggZ3VpLWZsZXgtY29sXCI+XG5cblx0XHQ8c3BhbiBjbGFzcz1cImd1aS1tYi00IGd1aS10ZXh0LXhzXCI+e3sndGhlbWVNYW5hZ2VyTW9kYWxUaGVtZScgfCBndWlUcmFuc2xhdGV9fTwvc3Bhbj5cblxuXHRcdDxndWktc2VsZWN0IChvcHRpb25DaGFuZ2VkKT1cInRvZ2dsZVRoZW1lKCRldmVudClcIlxuXHRcdFx0XHRcdFtvcHRpb25zXT1cInRoZW1lc1wiXG5cdFx0XHRcdFx0W3NlbGVjdGVkXT1cInRoZW1lJCB8IGd1aVB1c2hcIlxuXHRcdFx0XHRcdFt3aWR0aF09XCIxODBcIj5cblx0XHQ8L2d1aS1zZWxlY3Q+XG5cdDwvZGl2PlxuXG5cdDxkaXYgY2xhc3M9XCJndWktc3RydWN0dXJlLXNjaGVtYS1tYW5hZ2VyLXNlbGVjdCBndWktZmxleCBndWktZmxleC1jb2wgXCI+XG5cblx0XHQ8c3BhbiBjbGFzcz1cImd1aS1tYi00IGd1aS10ZXh0LXhzXCI+XG5cdFx0XHR7eyd0aGVtZU1hbmFnZXJNb2RhbFJvd0NvbG9yaW5nJyB8IGd1aVRyYW5zbGF0ZX19XG5cdFx0PC9zcGFuPlxuXG5cdFx0PGd1aS1zZWxlY3QgKG9wdGlvbkNoYW5nZWQpPVwidG9nZ2xlUm93Q29sb3JpbmcoJGV2ZW50KVwiXG5cdFx0XHRcdFx0W29wdGlvbnNdPVwiY29sb3JpbmdcIlxuXHRcdFx0XHRcdFtzZWxlY3RlZF09XCJyb3dDb2xvcmluZyQgfCBndWlQdXNoXCJcblx0XHRcdFx0XHRbd2lkdGhdPVwiMTgwXCI+XG5cdFx0PC9ndWktc2VsZWN0PlxuXHQ8L2Rpdj5cblxuXHQ8b2wgY2xhc3M9XCJndWktc3RydWN0dXJlLW9yZGVyZWQtbGlzdCBndWktbXgtMTAgZ3VpLXAtMCBndWktbXktNCBndWktbGlzdC1ub25lIGd1aS1vdmVyZmxvdy1hdXRvXCI+XG5cblx0XHQ8bGkgKGNsaWNrKT1cInRvZ2dsZVZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQpXCJcblx0XHRcdCpndWlMZXQ9XCJ2ZXJ0aWNhbEdyaWQkOyBsZXQgdmVydGljYWxHcmlkXCJcblx0XHRcdGNsYXNzPVwiZ3VpLXB4LTEzIGd1aS1weS02IGd1aS1jdXJzb3ItcG9pbnRlclwiPlxuXG5cdFx0XHQ8Z3VpLWNoZWNrYm94IFtjaGVja2VkXT1cInZlcnRpY2FsR3JpZFwiPlxuXHRcdFx0XHR7eyd0aGVtZU1hbmFnZXJNb2RhbFZlcnRpY2FsR3JpZCcgfCBndWlUcmFuc2xhdGV9fVxuXHRcdFx0PC9ndWktY2hlY2tib3g+XG5cblx0XHQ8L2xpPlxuXG5cdFx0PGxpIChjbGljayk9XCJ0b2dnbGVIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZClcIlxuXHRcdFx0Kmd1aUxldD1cImhvcml6b250YWxHcmlkJDsgbGV0IGhvcml6b250YWxHcmlkXCJcblx0XHRcdGNsYXNzPVwiZ3VpLXB4LTEzIGd1aS1weS02IGd1aS1jdXJzb3ItcG9pbnRlclwiPlxuXG5cdFx0XHQ8Z3VpLWNoZWNrYm94IFtjaGVja2VkXT1cImhvcml6b250YWxHcmlkXCI+XG5cdFx0XHRcdHt7J3RoZW1lTWFuYWdlck1vZGFsSG9yaXpvbnRhbEdyaWQnIHwgZ3VpVHJhbnNsYXRlfX1cblx0XHRcdDwvZ3VpLWNoZWNrYm94PlxuXG5cdFx0PC9saT5cblx0PC9vbD5cbjwvZGl2PlxuIl19