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
var StructureSchemaMangerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSchemaMangerComponent, _super);
    function StructureSchemaMangerComponent(changeDetectorRef, elRef, schemaReadModelRootId, schemaCommandService, schemaReadModelService) {
        var _this = _super.call(this, changeDetectorRef, elRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.schemaReadModelRootId = schemaReadModelRootId;
        _this.schemaCommandService = schemaCommandService;
        _this.schemaReadModelService = schemaReadModelService;
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
        this.schemaReadModelService
            .onRowColoring(this.schemaReadModelRootId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowColoring
         * @return {?}
         */
        function (rowColoring) {
            _this.selectedRowColoring = {
                value: SchemaRowColoring[rowColoring],
                name: SchemaRowColoring[rowColoring]
            };
            _this.changeDetectorRef.detectChanges();
        }));
        this.schemaReadModelService
            .onTheme(this.schemaReadModelRootId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} schemaTheme
         * @return {?}
         */
        function (schemaTheme) {
            _this.selectedTheme = {
                value: SchemaTheme[schemaTheme],
                name: SchemaTheme[schemaTheme]
            };
            _this.changeDetectorRef.detectChanges();
        }));
        this.schemaReadModelService
            .onVerticalGrid(this.schemaReadModelRootId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} verticalGrid
         * @return {?}
         */
        function (verticalGrid) {
            _this.verticalGrid = verticalGrid;
            _this.changeDetectorRef.detectChanges();
        }));
        this.schemaReadModelService
            .onHorizontalGrid(this.schemaReadModelRootId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} horizontalGrid
         * @return {?}
         */
        function (horizontalGrid) {
            _this.horizontalGrid = horizontalGrid;
            _this.changeDetectorRef.detectChanges();
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
        this.schemaCommandService.setTheme(this.toTheme(theme.value), this.schemaReadModelRootId);
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
        this.schemaCommandService.setRowColoring(this.toRowColoring(schemaRowColoring.value), this.schemaReadModelRootId);
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
        this.schemaCommandService.setVerticalGrid(verticalGrid, this.schemaReadModelRootId);
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
        this.schemaCommandService.setHorizontalGrid(horizontalGrid, this.schemaReadModelRootId);
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
    StructureSchemaMangerComponent.prototype.schemaReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    StructureSchemaMangerComponent.prototype.schemaCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureSchemaMangerComponent.prototype.schemaReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNjaGVtYS1tYW5nZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL3N0cnVjdHVyZS5zY2hlbWEtbWFuZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUcvRTtJQU1vRCwwREFBYztJQThCakUsd0NBQTZCLGlCQUFvQyxFQUM5RCxLQUFpQixFQUNBLHFCQUE0QyxFQUM1QyxvQkFBMEMsRUFDMUMsc0JBQXVDO1FBSjNELFlBS0Msa0JBQU0saUJBQWlCLEVBQUUsS0FBSyxDQUFDLFNBQy9CO1FBTjRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0MsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QywwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBaUI7UUFoQzNELGNBQVEsR0FBMkIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzthQUNyRCxHQUFHOzs7O1FBQUMsVUFBQyxHQUFXLElBQUssT0FBQSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsRUFBdEIsQ0FBc0IsRUFBQzthQUM1QyxNQUFNOzs7O1FBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQXRCLENBQXNCLEVBQUM7YUFDdkMsR0FBRzs7OztRQUFDLFVBQUMsS0FBYTtZQUNsQixPQUFPO2dCQUNOLEtBQUssRUFBRSxLQUFLO2dCQUNaLElBQUksRUFBRSxLQUFLO2FBQ1gsQ0FBQztRQUNILENBQUMsRUFBQyxDQUFDO1FBRWQsWUFBTSxHQUEyQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUM1QyxHQUFHOzs7O1FBQUMsVUFBQyxHQUFXLElBQUssT0FBQSxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLEVBQUM7YUFDdEMsTUFBTTs7OztRQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUF0QixDQUFzQixFQUFDO2FBQ3ZDLEdBQUc7Ozs7UUFBQyxVQUFDLEtBQWE7WUFDbEIsT0FBTztnQkFDTixLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsS0FBSzthQUNYLENBQUM7UUFDSCxDQUFDLEVBQUMsQ0FBQzs7SUFnQmYsQ0FBQzs7OztJQUVELGlEQUFROzs7SUFBUjtRQUFBLGlCQStDQztRQTdDQSxJQUFJLENBQUMsc0JBQXNCO2FBQ3pCLGFBQWEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7YUFDekMsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxXQUE4QjtZQUN6QyxLQUFJLENBQUMsbUJBQW1CLEdBQUc7Z0JBQzFCLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7Z0JBQ3JDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7YUFDcEMsQ0FBQztZQUNGLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxzQkFBc0I7YUFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQzthQUNuQyxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLFdBQXdCO1lBQ25DLEtBQUksQ0FBQyxhQUFhLEdBQUc7Z0JBQ3BCLEtBQUssRUFBRSxXQUFXLENBQUMsV0FBVyxDQUFDO2dCQUMvQixJQUFJLEVBQUUsV0FBVyxDQUFDLFdBQVcsQ0FBQzthQUM5QixDQUFDO1lBQ0YsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHNCQUFzQjthQUN6QixjQUFjLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO2FBQzFDLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsWUFBcUI7WUFDaEMsS0FBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7WUFDakMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHNCQUFzQjthQUN6QixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7YUFDNUMsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxjQUF1QjtZQUNsQyxLQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztZQUNyQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELG9EQUFXOzs7O0lBQVgsVUFBWSxLQUFzQjtRQUNqQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzNGLENBQUM7Ozs7O0lBRUQsMERBQWlCOzs7O0lBQWpCLFVBQWtCLGlCQUFrQztRQUNuRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbkgsQ0FBQzs7Ozs7SUFFRCwyREFBa0I7Ozs7SUFBbEIsVUFBbUIsWUFBcUI7UUFDdkMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDckYsQ0FBQzs7Ozs7SUFFRCw2REFBb0I7Ozs7SUFBcEIsVUFBcUIsY0FBdUI7UUFDM0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN6RixDQUFDOzs7Ozs7SUFFTyxnREFBTzs7Ozs7SUFBZixVQUFnQixLQUFhO1FBQzVCLFFBQVEsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBRTVCLEtBQUssUUFBUTtnQkFDWixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFFM0IsS0FBSyxVQUFVO2dCQUNkLE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUU3QixLQUFLLFNBQVM7Z0JBQ2IsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDO1lBRTVCLEtBQUssT0FBTztnQkFDWCxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFFMUIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QjtnQkFDQyxNQUFNO1NBQ1A7SUFDRixDQUFDOzs7Ozs7SUFFTyxzREFBYTs7Ozs7SUFBckIsVUFBc0IsUUFBZ0I7UUFDckMsUUFBUSxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFFL0IsS0FBSyxNQUFNO2dCQUNWLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QixLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDO1lBRXhCLEtBQUssTUFBTTtnQkFDVixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekI7Z0JBQ0MsTUFBTTtTQUNQO0lBQ0YsQ0FBQzs7Ozs7SUFFUyx3REFBZTs7OztJQUF6QjtRQUNDLE9BQU8sOEJBQThCLENBQUM7SUFDdkMsQ0FBQzs7Z0JBdkpELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbUNBQW1DO29CQUM3QyxpeUNBQXVEO29CQUN2RCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7O2dCQWpCaUMsaUJBQWlCO2dCQUFhLFVBQVU7Z0JBT2pFLHFCQUFxQjtnQkFEckIsb0JBQW9CO2dCQUhwQixlQUFlOztJQWlLeEIscUNBQUM7Q0FBQSxBQXhKRCxDQU1vRCxjQUFjLEdBa0pqRTtTQWxKWSw4QkFBOEI7OztJQUUxQyxrREFRYzs7SUFFZCxnREFRZTs7SUFFZiw2REFBcUM7O0lBRXJDLHVEQUErQjs7SUFFL0Isc0RBQXNCOztJQUV0Qix3REFBd0I7Ozs7O0lBRVosMkRBQXFEOzs7OztJQUU5RCwrREFBNkQ7Ozs7O0lBQzdELDhEQUEyRDs7Ozs7SUFDM0QsZ0VBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9yb3ctY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3Jvdy1jb2xvcmluZy9yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLXNjaGVtYS1tYW5hZ2VyXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUuc2NoZW1hLW1hbmdlci5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNjaGVtYU1hbmdlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb2xvcmluZzogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiA9IE9iamVjdC5rZXlzKFNjaGVtYVJvd0NvbG9yaW5nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAubWFwKChrZXk6IHN0cmluZykgPT4gU2NoZW1hUm93Q29sb3Jpbmdba2V5XSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLmZpbHRlcigodmFsKSA9PiAhTnVtYmVyLmlzSW50ZWdlcih2YWwpKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAubWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgcmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlOiB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IG5hbWU6IHZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgfTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgfSk7XG5cblx0dGhlbWVzOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+ID0gT2JqZWN0LmtleXMoU2NoZW1hVGhlbWUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC5tYXAoKGtleTogc3RyaW5nKSA9PiBTY2hlbWFUaGVtZVtrZXldKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICAuZmlsdGVyKCh2YWwpID0+ICFOdW1iZXIuaXNJbnRlZ2VyKHZhbCkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICByZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgdmFsdWU6IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgbmFtZTogdmFsdWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9KTtcblxuXHRzZWxlY3RlZFJvd0NvbG9yaW5nOiBHdWlTZWxlY3RPcHRpb247XG5cblx0c2VsZWN0ZWRUaGVtZTogR3VpU2VsZWN0T3B0aW9uO1xuXG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hQ29tbWFuZFNlcnZpY2U6IFNjaGVtYUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFNlcnZpY2U6IFNjaGVtYVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc2NoZW1hUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uUm93Q29sb3JpbmcodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dDb2xvcmluZyA9IHtcblx0XHRcdFx0XHR2YWx1ZTogU2NoZW1hUm93Q29sb3Jpbmdbcm93Q29sb3JpbmddLFxuXHRcdFx0XHRcdG5hbWU6IFNjaGVtYVJvd0NvbG9yaW5nW3Jvd0NvbG9yaW5nXVxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zY2hlbWFSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25UaGVtZSh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzY2hlbWFUaGVtZTogU2NoZW1hVGhlbWUpID0+IHtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFRoZW1lID0ge1xuXHRcdFx0XHRcdHZhbHVlOiBTY2hlbWFUaGVtZVtzY2hlbWFUaGVtZV0sXG5cdFx0XHRcdFx0bmFtZTogU2NoZW1hVGhlbWVbc2NoZW1hVGhlbWVdXG5cdFx0XHRcdH07XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblZlcnRpY2FsR3JpZCh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbEdyaWQgPSB2ZXJ0aWNhbEdyaWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkhvcml6b250YWxHcmlkKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGhvcml6b250YWxHcmlkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbEdyaWQgPSBob3Jpem9udGFsR3JpZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRvZ2dsZVRoZW1lKHRoZW1lOiBHdWlTZWxlY3RPcHRpb24pOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRTZXJ2aWNlLnNldFRoZW1lKHRoaXMudG9UaGVtZSh0aGVtZS52YWx1ZSksIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdHRvZ2dsZVJvd0NvbG9yaW5nKHNjaGVtYVJvd0NvbG9yaW5nOiBHdWlTZWxlY3RPcHRpb24pOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRTZXJ2aWNlLnNldFJvd0NvbG9yaW5nKHRoaXMudG9Sb3dDb2xvcmluZyhzY2hlbWFSb3dDb2xvcmluZy52YWx1ZSksIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdHRvZ2dsZVZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRTZXJ2aWNlLnNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQsIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdHRvZ2dsZUhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFDb21tYW5kU2VydmljZS5zZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZCwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b1RoZW1lKHRoZW1lOiBzdHJpbmcpOiBTY2hlbWFUaGVtZSB7XG5cdFx0c3dpdGNoICh0aGVtZS50b0xvd2VyQ2FzZSgpKSB7XG5cblx0XHRcdGNhc2UgJ2ZhYnJpYyc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5GQUJSSUM7XG5cblx0XHRcdGNhc2UgJ21hdGVyaWFsJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLk1BVEVSSUFMO1xuXG5cdFx0XHRjYXNlICdnZW5lcmljJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkdFTkVSSUM7XG5cblx0XHRcdGNhc2UgJ2xpZ2h0Jzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkxJR0hUO1xuXG5cdFx0XHRjYXNlICdkYXJrJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkRBUks7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdG9Sb3dDb2xvcmluZyhjb2xvcmluZzogc3RyaW5nKTogUm93Q29sb3Jpbmcge1xuXHRcdHN3aXRjaCAoY29sb3JpbmcudG9Mb3dlckNhc2UoKSkge1xuXG5cdFx0XHRjYXNlICdub25lJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk5PTkU7XG5cblx0XHRcdGNhc2UgJ29kZCc6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5PREQ7XG5cblx0XHRcdGNhc2UgJ2V2ZW4nOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1zY2hlbWEtbWFuYWdlcic7XG5cdH1cbn1cbiJdfQ==