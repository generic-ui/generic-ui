/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SchemaWarehouse } from '../../core/api/schema.warehouse';
import { SchemaRowColoring } from '../../core/api/row-coloring/schema-row-coloring';
import { SchemaTheme } from '../../core/api/theme/schema-theme';
import { SchemaCommandInvoker } from '../../core/api/schema.command-invoker';
import { SchemaReadModelRootId } from '../../core/api/schema.read-model-root-id';
import { RowColoring } from '../../core/api/row-coloring/row-coloring';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import { StructureId } from '../../../structure/core/api/structure.id';
var StructureSchemaMangerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSchemaMangerComponent, _super);
    function StructureSchemaMangerComponent(changeDetectorRef, elRef, structureId, schemaReadModelRootId, schemaCommandInvoker, schemaWarehouse) {
        var _this = _super.call(this, changeDetectorRef, elRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.schemaReadModelRootId = schemaReadModelRootId;
        _this.schemaCommandInvoker = schemaCommandInvoker;
        _this.schemaWarehouse = schemaWarehouse;
        _this.coloring = Object.keys(SchemaRowColoring)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return SchemaRowColoring[key]; }))
            .filter((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return !Number.isInteger(val); }))
            .map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return {
                value: value,
                name: value
            };
        }));
        _this.themes = Object.keys(SchemaTheme)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return SchemaTheme[key]; }))
            .filter((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return !Number.isInteger(val); }))
            .map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return {
                value: value,
                name: value
            };
        }));
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSchemaMangerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.hermesSubscribe(this.schemaWarehouse.onRowColoring(this.schemaReadModelRootId), (/**
         * @param {?} rowColoring
         * @return {?}
         */
        function (rowColoring) {
            _this.selectedRowColoring = {
                value: SchemaRowColoring[rowColoring],
                name: SchemaRowColoring[rowColoring]
            };
        }));
        this.hermesSubscribe(this.schemaWarehouse.onTheme(this.schemaReadModelRootId), (/**
         * @param {?} schemaTheme
         * @return {?}
         */
        function (schemaTheme) {
            _this.selectedTheme = {
                value: SchemaTheme[schemaTheme],
                name: SchemaTheme[schemaTheme]
            };
        }));
        this.hermesSubscribe(this.schemaWarehouse.onVerticalGrid(this.schemaReadModelRootId), (/**
         * @param {?} verticalGrid
         * @return {?}
         */
        function (verticalGrid) {
            _this.verticalGrid = verticalGrid;
        }));
        this.hermesSubscribe(this.schemaWarehouse.onHorizontalGrid(this.schemaReadModelRootId), (/**
         * @param {?} horizontalGrid
         * @return {?}
         */
        function (horizontalGrid) {
            _this.horizontalGrid = horizontalGrid;
        }));
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    StructureSchemaMangerComponent.prototype.toggleTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this.schemaCommandInvoker.setTheme(this.toTheme(theme.value), this.schemaReadModelRootId, this.structureId);
    };
    /**
     * @param {?} schemaRowColoring
     * @return {?}
     */
    StructureSchemaMangerComponent.prototype.toggleRowColoring = /**
     * @param {?} schemaRowColoring
     * @return {?}
     */
    function (schemaRowColoring) {
        this.schemaCommandInvoker.setRowColoring(this.toRowColoring(schemaRowColoring.value), this.schemaReadModelRootId);
    };
    /**
     * @param {?} verticalGrid
     * @return {?}
     */
    StructureSchemaMangerComponent.prototype.toggleVerticalGrid = /**
     * @param {?} verticalGrid
     * @return {?}
     */
    function (verticalGrid) {
        this.schemaCommandInvoker.setVerticalGrid(verticalGrid, this.schemaReadModelRootId);
    };
    /**
     * @param {?} horizontalGrid
     * @return {?}
     */
    StructureSchemaMangerComponent.prototype.toggleHorizontalGrid = /**
     * @param {?} horizontalGrid
     * @return {?}
     */
    function (horizontalGrid) {
        this.schemaCommandInvoker.setHorizontalGrid(horizontalGrid, this.schemaReadModelRootId);
    };
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    StructureSchemaMangerComponent.prototype.toTheme = /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
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
                break;
        }
    };
    /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    StructureSchemaMangerComponent.prototype.toRowColoring = /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    function (coloring) {
        switch (coloring.toLowerCase()) {
            case 'none':
                return RowColoring.NONE;
            case 'odd':
                return RowColoring.ODD;
            case 'even':
                return RowColoring.EVEN;
            default:
                break;
        }
    };
    /**
     * @protected
     * @return {?}
     */
    StructureSchemaMangerComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-structure-schema-manager';
    };
    StructureSchemaMangerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-structure-schema-manager]',
                    template: "<div class=\"gui-schema-manager gui-flex gui-flex-col\">\n\n\t<div class=\"gui-dialog-title\">{{'themeManagerModalTitle' | guiTranslate}}</div>\n\n\t<div class=\"gui-structure-schema-manager-select gui-flex gui-flex-col gui-mb-10\">\n\t\t<span class=\"gui-mb-4\">{{'themeManagerModalTheme' | guiTranslate}}</span>\n\t\t<gui-select (optionChanged)=\"toggleTheme($event)\"\n\t\t\t\t\t[options]=\"themes\"\n\t\t\t\t\t[placeholder]=\"'Select theme'\"\n\t\t\t\t\t[selected]=\"selectedTheme\">\n\t\t</gui-select>\n\t</div>\n\n\t<div class=\"gui-structure-schema-manager-select gui-flex gui-flex-col\">\n\n\t\t<span class=\"gui-mb-4\">\n\t\t\t{{'themeManagerModalRowColoring' | guiTranslate}}\n\t\t</span>\n\n\t\t<gui-select (optionChanged)=\"toggleRowColoring($event)\"\n\t\t\t\t\t[options]=\"coloring\"\n\t\t\t\t\t[selected]=\"selectedRowColoring\">\n\t\t</gui-select>\n\t</div>\n\n\t<gui-checkbox (changed)=\"toggleVerticalGrid($event)\"\n\t\t\t\t  [checked]=\"verticalGrid\"\n\t\t\t\t  class=\"gui-mt-14\">\n\t\t{{'themeManagerModalVerticalGrid' | guiTranslate}}\n\t</gui-checkbox>\n\n\t<gui-checkbox (changed)=\"toggleHorizontalGrid($event)\"\n\t\t\t\t  [checked]=\"horizontalGrid\"\n\t\t\t\t  class=\"gui-mt-10\">\n\t\t{{'themeManagerModalHorizontalGrid' | guiTranslate}}\n\t</gui-checkbox>\n\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StructureSchemaMangerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: StructureId },
        { type: SchemaReadModelRootId },
        { type: SchemaCommandInvoker },
        { type: SchemaWarehouse }
    ]; };
    return StructureSchemaMangerComponent;
}(SmartComponent));
export { StructureSchemaMangerComponent };
if (false) {
    /** @type {?} */
    StructureSchemaMangerComponent.prototype.coloring;
    /** @type {?} */
    StructureSchemaMangerComponent.prototype.themes;
    /** @type {?} */
    StructureSchemaMangerComponent.prototype.selectedRowColoring;
    /** @type {?} */
    StructureSchemaMangerComponent.prototype.selectedTheme;
    /** @type {?} */
    StructureSchemaMangerComponent.prototype.verticalGrid;
    /** @type {?} */
    StructureSchemaMangerComponent.prototype.horizontalGrid;
    /**
     * @type {?}
     * @private
     */
    StructureSchemaMangerComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureSchemaMangerComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureSchemaMangerComponent.prototype.schemaReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    StructureSchemaMangerComponent.prototype.schemaCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    StructureSchemaMangerComponent.prototype.schemaWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNjaGVtYS1tYW5nZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL3N0cnVjdHVyZS5zY2hlbWEtbWFuZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHdkU7SUFNb0QsMERBQWM7SUE4QmpFLHdDQUE2QixpQkFBb0MsRUFDOUQsS0FBaUIsRUFDQSxXQUF3QixFQUN4QixxQkFBNEMsRUFDNUMsb0JBQTBDLEVBQzFDLGVBQWdDO1FBTHBELFlBTUMsa0JBQU0saUJBQWlCLEVBQUUsS0FBSyxDQUFDLFNBQy9CO1FBUDRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0MsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QywwQkFBb0IsR0FBcEIsb0JBQW9C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Uyx3REFBZTs7OztJQUF6QjtRQUNDLE9BQU8sOEJBQThCLENBQUM7SUFDdkMsQ0FBQzs7Z0JBN0lELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbUNBQW1DO29CQUM3QyxpeUNBQXVEO29CQUN2RCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7O2dCQWxCaUMsaUJBQWlCO2dCQUFhLFVBQVU7Z0JBVWpFLFdBQVc7Z0JBSFgscUJBQXFCO2dCQURyQixvQkFBb0I7Z0JBSHBCLGVBQWU7O0lBd0p4QixxQ0FBQztDQUFBLEFBOUlELENBTW9ELGNBQWMsR0F3SWpFO1NBeElZLDhCQUE4Qjs7O0lBRTFDLGtEQVFjOztJQUVkLGdEQVFlOztJQUVmLDZEQUFxQzs7SUFFckMsdURBQStCOztJQUUvQixzREFBc0I7O0lBRXRCLHdEQUF3Qjs7Ozs7SUFFWiwyREFBcUQ7Ozs7O0lBRTlELHFEQUF5Qzs7Ozs7SUFDekMsK0RBQTZEOzs7OztJQUM3RCw4REFBMkQ7Ozs7O0lBQzNELHlEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aVNlbGVjdE9wdGlvbiB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zY2hlbWEud2FyZWhvdXNlJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zY2hlbWEuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9yb3ctY29sb3Jpbmcvcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtc2NoZW1hLW1hbmFnZXJdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5zY2hlbWEtbWFuZ2VyLmNvbXBvbmVudC5odG1sJyxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2NoZW1hTWFuZ2VyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbG9yaW5nOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+ID0gT2JqZWN0LmtleXMoU2NoZW1hUm93Q29sb3JpbmcpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IC5tYXAoKGtleTogc3RyaW5nKSA9PiBTY2hlbWFSb3dDb2xvcmluZ1trZXldKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAuZmlsdGVyKCh2YWwpID0+ICFOdW1iZXIuaXNJbnRlZ2VyKHZhbCkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCByZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgdmFsdWU6IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgbmFtZTogdmFsdWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB9O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB9KTtcblxuXHR0aGVtZXM6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj4gPSBPYmplY3Qua2V5cyhTY2hlbWFUaGVtZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgLm1hcCgoa2V5OiBzdHJpbmcpID0+IFNjaGVtYVRoZW1lW2tleV0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC5maWx0ZXIoKHZhbCkgPT4gIU51bWJlci5pc0ludGVnZXIodmFsKSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgLm1hcCgodmFsdWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB2YWx1ZTogdmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBuYW1lOiB2YWx1ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIH07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIH0pO1xuXG5cdHNlbGVjdGVkUm93Q29sb3Jpbmc6IEd1aVNlbGVjdE9wdGlvbjtcblxuXHRzZWxlY3RlZFRoZW1lOiBHdWlTZWxlY3RPcHRpb247XG5cblx0dmVydGljYWxHcmlkOiBib29sZWFuO1xuXG5cdGhvcml6b250YWxHcmlkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hQ29tbWFuZEludm9rZXI6IFNjaGVtYUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVdhcmVob3VzZTogU2NoZW1hV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsUmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnNjaGVtYVdhcmVob3VzZS5vblJvd0NvbG9yaW5nKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKSxcblx0XHRcdChyb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFJvd0NvbG9yaW5nID0ge1xuXHRcdFx0XHRcdHZhbHVlOiBTY2hlbWFSb3dDb2xvcmluZ1tyb3dDb2xvcmluZ10sXG5cdFx0XHRcdFx0bmFtZTogU2NoZW1hUm93Q29sb3Jpbmdbcm93Q29sb3JpbmddXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zY2hlbWFXYXJlaG91c2Uub25UaGVtZSh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCksXG5cdFx0XHQoc2NoZW1hVGhlbWU6IFNjaGVtYVRoZW1lKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRUaGVtZSA9IHtcblx0XHRcdFx0XHR2YWx1ZTogU2NoZW1hVGhlbWVbc2NoZW1hVGhlbWVdLFxuXHRcdFx0XHRcdG5hbWU6IFNjaGVtYVRoZW1lW3NjaGVtYVRoZW1lXVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc2NoZW1hV2FyZWhvdXNlLm9uVmVydGljYWxHcmlkKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKSxcblx0XHRcdCh2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbEdyaWQgPSB2ZXJ0aWNhbEdyaWQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zY2hlbWFXYXJlaG91c2Uub25Ib3Jpem9udGFsR3JpZCh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCksXG5cdFx0XHQoaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5ob3Jpem9udGFsR3JpZCA9IGhvcml6b250YWxHcmlkO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0fVxuXG5cdHRvZ2dsZVRoZW1lKHRoZW1lOiBHdWlTZWxlY3RPcHRpb24pOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRJbnZva2VyLnNldFRoZW1lKHRoaXMudG9UaGVtZSh0aGVtZS52YWx1ZSksIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHRvZ2dsZVJvd0NvbG9yaW5nKHNjaGVtYVJvd0NvbG9yaW5nOiBHdWlTZWxlY3RPcHRpb24pOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRJbnZva2VyLnNldFJvd0NvbG9yaW5nKHRoaXMudG9Sb3dDb2xvcmluZyhzY2hlbWFSb3dDb2xvcmluZy52YWx1ZSksIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdHRvZ2dsZVZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRJbnZva2VyLnNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQsIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdHRvZ2dsZUhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZCwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b1RoZW1lKHRoZW1lOiBzdHJpbmcpOiBTY2hlbWFUaGVtZSB7XG5cdFx0c3dpdGNoICh0aGVtZS50b0xvd2VyQ2FzZSgpKSB7XG5cblx0XHRcdGNhc2UgJ2ZhYnJpYyc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5GQUJSSUM7XG5cblx0XHRcdGNhc2UgJ21hdGVyaWFsJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLk1BVEVSSUFMO1xuXG5cdFx0XHRjYXNlICdnZW5lcmljJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkdFTkVSSUM7XG5cblx0XHRcdGNhc2UgJ2xpZ2h0Jzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkxJR0hUO1xuXG5cdFx0XHRjYXNlICdkYXJrJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkRBUks7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdG9Sb3dDb2xvcmluZyhjb2xvcmluZzogc3RyaW5nKTogUm93Q29sb3Jpbmcge1xuXHRcdHN3aXRjaCAoY29sb3JpbmcudG9Mb3dlckNhc2UoKSkge1xuXG5cdFx0XHRjYXNlICdub25lJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk5PTkU7XG5cblx0XHRcdGNhc2UgJ29kZCc6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5PREQ7XG5cblx0XHRcdGNhc2UgJ2V2ZW4nOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1zY2hlbWEtbWFuYWdlcic7XG5cdH1cbn1cbiJdfQ==