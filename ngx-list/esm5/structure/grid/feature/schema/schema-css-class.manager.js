/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SchemaTheme } from '../../../../schema/core/api/theme/schema-theme';
import { SchemaRowColoring } from '../../../../schema/core/api/row-coloring/schema-row-coloring';
import { SchemaWarehouse } from '../../../../schema/core/api/schema.warehouse';
import { Reactive } from '../../../../common/cdk/reactive/reactive';
import { ClassModifier } from '../../../../common/cdk/dom/class/class-modifier';
var SchemaCssClassManager = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaCssClassManager, _super);
    function SchemaCssClassManager(schemaReadModelRepository) {
        var _this = _super.call(this) || this;
        _this.schemaReadModelRepository = schemaReadModelRepository;
        _this.cssClass = null;
        _this.classModifier = new ClassModifier();
        return _this;
    }
    /**
     * @param {?} elementRef
     * @param {?} schemaReadModelRootId
     * @return {?}
     */
    SchemaCssClassManager.prototype.init = /**
     * @param {?} elementRef
     * @param {?} schemaReadModelRootId
     * @return {?}
     */
    function (elementRef, schemaReadModelRootId) {
        var _this = this;
        this.cssHostRef = elementRef;
        this.schemaReadModelRepository
            .onCssClasses(schemaReadModelRootId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} classes
         * @return {?}
         */
        function (classes) {
            /** @type {?} */
            var diff = _this.updateState(classes);
            _this.renderCssClasses(diff);
        }));
    };
    /**
     * @private
     * @param {?} css
     * @return {?}
     */
    SchemaCssClassManager.prototype.updateState = /**
     * @private
     * @param {?} css
     * @return {?}
     */
    function (css) {
        var _this = this;
        if (!this.cssClass) {
            this.cssClass = css;
            return this.cssClass;
        }
        else {
            /** @type {?} */
            var diff_1 = {};
            Object.keys(this.cssClass)
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                if (css[key] !== _this.cssClass[key]) {
                    diff_1[key] = css[key];
                }
            }));
            this.cssClass = css;
            return diff_1;
        }
    };
    /**
     * @private
     * @param {?} diff
     * @return {?}
     */
    SchemaCssClassManager.prototype.renderCssClasses = /**
     * @private
     * @param {?} diff
     * @return {?}
     */
    function (diff) {
        if (diff.hasOwnProperty('verticalGrid')) {
            this.toggleCssClass(diff.verticalGrid, SchemaCssClassManager.VERTICAL_GRID_CLASS_NAME);
        }
        if (diff.hasOwnProperty('horizontalGrid')) {
            this.toggleCssClass(diff.horizontalGrid, SchemaCssClassManager.HORIZONTAL_GRID_CLASS_NAME);
        }
        if (diff.hasOwnProperty('theme')) {
            this.removeThemeCssClasses();
            this.addClass(this.resolveThemeClassName(diff.theme));
        }
        if (diff.hasOwnProperty('rowColoring')) {
            this.removeRowColoringClasses();
            this.addClass(this.resolveRowColoringClassName(diff.rowColoring));
        }
    };
    /**
     * @private
     * @param {?} toggle
     * @param {?} cssClassName
     * @return {?}
     */
    SchemaCssClassManager.prototype.toggleCssClass = /**
     * @private
     * @param {?} toggle
     * @param {?} cssClassName
     * @return {?}
     */
    function (toggle, cssClassName) {
        if (toggle) {
            this.addClass(cssClassName);
        }
        else {
            this.removeClass(cssClassName);
        }
    };
    /**
     * @private
     * @return {?}
     */
    SchemaCssClassManager.prototype.removeThemeCssClasses = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(SchemaTheme)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return SchemaTheme[key]; }))
            .map((/**
         * @param {?} theme
         * @return {?}
         */
        function (theme) { return _this.resolveThemeClassName(theme); }))
            .filter((/**
         * @param {?} className
         * @return {?}
         */
        function (className) { return !!className; }))
            .forEach((/**
         * @param {?} className
         * @return {?}
         */
        function (className) {
            _this.removeClass(className);
        }));
    };
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    SchemaCssClassManager.prototype.resolveThemeClassName = /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        switch (theme) {
            case SchemaTheme.FABRIC:
            case SchemaTheme[SchemaTheme.FABRIC]:
                return SchemaCssClassManager.THEME_FABRIC_CLASS_NAME;
            case SchemaTheme.MATERIAL:
            case SchemaTheme[SchemaTheme.MATERIAL]:
                return SchemaCssClassManager.THEME_MATERIAL_CLASS_NAME;
            case SchemaTheme.LIGHT:
            case SchemaTheme[SchemaTheme.LIGHT]:
                return SchemaCssClassManager.THEME_LIGHT_CLASS_NAME;
            case SchemaTheme.DARK:
            case SchemaTheme[SchemaTheme.DARK]:
                return SchemaCssClassManager.THEME_DARK_CLASS_NAME;
            case SchemaTheme.GENERIC:
            case SchemaTheme[SchemaTheme.GENERIC]:
                return SchemaCssClassManager.THEME_GENERIC_CLASS_NAME;
            default:
                return SchemaCssClassManager.THEME_FABRIC_CLASS_NAME;
        }
    };
    /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    SchemaCssClassManager.prototype.resolveRowColoringClassName = /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    function (coloring) {
        switch (coloring) {
            case SchemaRowColoring.ODD:
            case SchemaRowColoring[SchemaRowColoring.ODD]:
                return SchemaCssClassManager.ROW_COLORING_ODD;
            case SchemaRowColoring.EVEN:
            case SchemaRowColoring[SchemaRowColoring.EVEN]:
                return SchemaCssClassManager.ROW_COLORING_EVEN;
            default:
                return null;
        }
    };
    /**
     * @private
     * @return {?}
     */
    SchemaCssClassManager.prototype.removeRowColoringClasses = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(SchemaRowColoring)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return SchemaRowColoring[key]; }))
            .map((/**
         * @param {?} coloring
         * @return {?}
         */
        function (coloring) { return _this.resolveRowColoringClassName(coloring); }))
            .filter((/**
         * @param {?} className
         * @return {?}
         */
        function (className) { return !!className; }))
            .forEach((/**
         * @param {?} className
         * @return {?}
         */
        function (className) {
            _this.removeClass(className);
        }));
    };
    /**
     * @private
     * @param {?} cssClassName
     * @return {?}
     */
    SchemaCssClassManager.prototype.addClass = /**
     * @private
     * @param {?} cssClassName
     * @return {?}
     */
    function (cssClassName) {
        if (cssClassName) {
            this.classModifier.getElement(this.cssHostRef.nativeElement).add(cssClassName);
        }
    };
    /**
     * @private
     * @param {?} cssClassName
     * @return {?}
     */
    SchemaCssClassManager.prototype.removeClass = /**
     * @private
     * @param {?} cssClassName
     * @return {?}
     */
    function (cssClassName) {
        if (cssClassName) {
            this.classModifier.getElement(this.cssHostRef.nativeElement).remove(cssClassName);
        }
    };
    SchemaCssClassManager.VERTICAL_GRID_CLASS_NAME = 'gui-vertical-grid';
    SchemaCssClassManager.HORIZONTAL_GRID_CLASS_NAME = 'gui-horizontal-grid';
    SchemaCssClassManager.THEME_FABRIC_CLASS_NAME = 'gui-fabric';
    SchemaCssClassManager.THEME_MATERIAL_CLASS_NAME = 'gui-material';
    SchemaCssClassManager.THEME_LIGHT_CLASS_NAME = 'gui-light';
    SchemaCssClassManager.THEME_DARK_CLASS_NAME = 'gui-dark';
    SchemaCssClassManager.THEME_GENERIC_CLASS_NAME = 'gui-generic';
    SchemaCssClassManager.ROW_COLORING_ODD = 'gui-rows-odd';
    SchemaCssClassManager.ROW_COLORING_EVEN = 'gui-rows-even';
    SchemaCssClassManager.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaCssClassManager.ctorParameters = function () { return [
        { type: SchemaWarehouse }
    ]; };
    return SchemaCssClassManager;
}(Reactive));
export { SchemaCssClassManager };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.VERTICAL_GRID_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.HORIZONTAL_GRID_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.THEME_FABRIC_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.THEME_MATERIAL_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.THEME_LIGHT_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.THEME_DARK_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.THEME_GENERIC_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.ROW_COLORING_ODD;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.ROW_COLORING_EVEN;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.classModifier;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.cssClass;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.cssHostRef;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.schemaReadModelRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzcy5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3NjaGVtYS9zY2hlbWEtY3NzLWNsYXNzLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM3RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFL0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUdoRjtJQUMyQyxpREFBUTtJQTBCbEQsK0JBQTZCLHlCQUEwQztRQUF2RSxZQUNDLGlCQUFPLFNBRVA7UUFINEIsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUFpQjtRQUovRCxjQUFRLEdBQW1CLElBQUksQ0FBQztRQU12QyxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7O0lBQzFDLENBQUM7Ozs7OztJQUVELG9DQUFJOzs7OztJQUFKLFVBQUssVUFBc0IsRUFBRSxxQkFBNEM7UUFBekUsaUJBZUM7UUFiQSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUU3QixJQUFJLENBQUMseUJBQXlCO2FBQzVCLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQzthQUNuQyxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQXVCOztnQkFFNUIsSUFBSSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1lBRXRDLEtB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RXZDLCtDQUF5QixHQUFHLGNBQWMsQ0FBQztJQUUzQyw0Q0FBc0IsR0FBRyxXQUFXLENBQUM7SUFFckMsMkNBQXFCLEdBQUcsVUFBVSxDQUFDO0lBRW5DLDhDQUF3QixHQUFHLGFBQWEsQ0FBQztJQUV6QyxzQ0FBZ0IsR0FBRyxjQUFjLENBQUM7SUFFbEMsdUNBQWlCLEdBQUcsZUFBZSxDQUFDOztnQkFuQjVELFVBQVU7Ozs7Z0JBTkYsZUFBZTs7SUFxTHhCLDRCQUFDO0NBQUEsQUEvS0QsQ0FDMkMsUUFBUSxHQThLbEQ7U0E5S1kscUJBQXFCOzs7Ozs7SUFFakMsK0NBQXVFOzs7OztJQUV2RSxpREFBMkU7Ozs7O0lBRTNFLDhDQUErRDs7Ozs7SUFFL0QsZ0RBQW1FOzs7OztJQUVuRSw2Q0FBNkQ7Ozs7O0lBRTdELDRDQUEyRDs7Ozs7SUFFM0QsK0NBQWlFOzs7OztJQUVqRSx1Q0FBMEQ7Ozs7O0lBRTFELHdDQUE0RDs7Ozs7SUFFNUQsOENBQThDOzs7OztJQUU5Qyx5Q0FBd0M7Ozs7O0lBRXhDLDJDQUErQjs7Ozs7SUFFbkIsMERBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9jc3MtY2xhc3Nlcy9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9yb3ctY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUvcmVhY3RpdmUnO1xuaW1wb3J0IHsgQ2xhc3NNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZG9tL2NsYXNzL2NsYXNzLW1vZGlmaWVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyIGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFZFUlRJQ0FMX0dSSURfQ0xBU1NfTkFNRSA9ICdndWktdmVydGljYWwtZ3JpZCc7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgSE9SSVpPTlRBTF9HUklEX0NMQVNTX05BTUUgPSAnZ3VpLWhvcml6b250YWwtZ3JpZCc7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEhFTUVfRkFCUklDX0NMQVNTX05BTUUgPSAnZ3VpLWZhYnJpYyc7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEhFTUVfTUFURVJJQUxfQ0xBU1NfTkFNRSA9ICdndWktbWF0ZXJpYWwnO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRIRU1FX0xJR0hUX0NMQVNTX05BTUUgPSAnZ3VpLWxpZ2h0JztcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBUSEVNRV9EQVJLX0NMQVNTX05BTUUgPSAnZ3VpLWRhcmsnO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRIRU1FX0dFTkVSSUNfQ0xBU1NfTkFNRSA9ICdndWktZ2VuZXJpYyc7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUk9XX0NPTE9SSU5HX09ERCA9ICdndWktcm93cy1vZGQnO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFJPV19DT0xPUklOR19FVkVOID0gJ2d1aS1yb3dzLWV2ZW4nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY2xhc3NNb2RpZmllcjogQ2xhc3NNb2RpZmllcjtcblxuXHRwcml2YXRlIGNzc0NsYXNzOiBTY2hlbWFDc3NDbGFzcyA9IG51bGw7XG5cblx0cHJpdmF0ZSBjc3NIb3N0UmVmOiBFbGVtZW50UmVmO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUmVwb3NpdG9yeTogU2NoZW1hV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmNsYXNzTW9kaWZpZXIgPSBuZXcgQ2xhc3NNb2RpZmllcigpO1xuXHR9XG5cblx0aW5pdChlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy5jc3NIb3N0UmVmID0gZWxlbWVudFJlZjtcblxuXHRcdHRoaXMuc2NoZW1hUmVhZE1vZGVsUmVwb3NpdG9yeVxuXHRcdFx0Lm9uQ3NzQ2xhc3NlcyhzY2hlbWFSZWFkTW9kZWxSb290SWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY2xhc3NlczogU2NoZW1hQ3NzQ2xhc3MpID0+IHtcblxuXHRcdFx0XHRjb25zdCBkaWZmID0gdGhpcy51cGRhdGVTdGF0ZShjbGFzc2VzKTtcblxuXHRcdFx0XHR0aGlzLnJlbmRlckNzc0NsYXNzZXMoZGlmZik7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlU3RhdGUoY3NzOiBTY2hlbWFDc3NDbGFzcyk6IFBhcnRpYWw8U2NoZW1hQ3NzQ2xhc3M+IHtcblxuXHRcdGlmICghdGhpcy5jc3NDbGFzcykge1xuXHRcdFx0dGhpcy5jc3NDbGFzcyA9IGNzcztcblx0XHRcdHJldHVybiB0aGlzLmNzc0NsYXNzO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnN0IGRpZmYgPSB7fTtcblxuXHRcdFx0T2JqZWN0LmtleXModGhpcy5jc3NDbGFzcylcblx0XHRcdFx0ICAuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHQgIGlmIChjc3Nba2V5XSAhPT0gdGhpcy5jc3NDbGFzc1trZXldKSB7XG5cdFx0XHRcdFx0XHQgIGRpZmZba2V5XSA9IGNzc1trZXldO1xuXHRcdFx0XHRcdCAgfVxuXHRcdFx0XHQgIH0pO1xuXG5cdFx0XHR0aGlzLmNzc0NsYXNzID0gY3NzO1xuXG5cdFx0XHRyZXR1cm4gZGlmZjtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbmRlckNzc0NsYXNzZXMoZGlmZjogUGFydGlhbDxTY2hlbWFDc3NDbGFzcz4pOiB2b2lkIHtcblxuXHRcdGlmIChkaWZmLmhhc093blByb3BlcnR5KCd2ZXJ0aWNhbEdyaWQnKSkge1xuXHRcdFx0dGhpcy50b2dnbGVDc3NDbGFzcyhkaWZmLnZlcnRpY2FsR3JpZCwgU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyLlZFUlRJQ0FMX0dSSURfQ0xBU1NfTkFNRSk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpZmYuaGFzT3duUHJvcGVydHkoJ2hvcml6b250YWxHcmlkJykpIHtcblx0XHRcdHRoaXMudG9nZ2xlQ3NzQ2xhc3MoZGlmZi5ob3Jpem9udGFsR3JpZCwgU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyLkhPUklaT05UQUxfR1JJRF9DTEFTU19OQU1FKTtcblx0XHR9XG5cblx0XHRpZiAoZGlmZi5oYXNPd25Qcm9wZXJ0eSgndGhlbWUnKSkge1xuXHRcdFx0dGhpcy5yZW1vdmVUaGVtZUNzc0NsYXNzZXMoKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3ModGhpcy5yZXNvbHZlVGhlbWVDbGFzc05hbWUoZGlmZi50aGVtZSkpO1xuXHRcdH1cblxuXHRcdGlmIChkaWZmLmhhc093blByb3BlcnR5KCdyb3dDb2xvcmluZycpKSB7XG5cdFx0XHR0aGlzLnJlbW92ZVJvd0NvbG9yaW5nQ2xhc3NlcygpO1xuXHRcdFx0dGhpcy5hZGRDbGFzcyh0aGlzLnJlc29sdmVSb3dDb2xvcmluZ0NsYXNzTmFtZShkaWZmLnJvd0NvbG9yaW5nKSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB0b2dnbGVDc3NDbGFzcyh0b2dnbGU6IGJvb2xlYW4sIGNzc0NsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHRvZ2dsZSkge1xuXHRcdFx0dGhpcy5hZGRDbGFzcyhjc3NDbGFzc05hbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKGNzc0NsYXNzTmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVUaGVtZUNzc0NsYXNzZXMoKTogdm9pZCB7XG5cdFx0T2JqZWN0LmtleXMoU2NoZW1hVGhlbWUpXG5cdFx0XHQgIC5tYXAoKGtleTogc3RyaW5nKSA9PiBTY2hlbWFUaGVtZVtrZXldKVxuXHRcdFx0ICAubWFwKCh0aGVtZTogU2NoZW1hVGhlbWUpID0+IHRoaXMucmVzb2x2ZVRoZW1lQ2xhc3NOYW1lKHRoZW1lKSlcblx0XHRcdCAgLmZpbHRlcigoY2xhc3NOYW1lOiBzdHJpbmcpID0+ICEhY2xhc3NOYW1lKVxuXHRcdFx0ICAuZm9yRWFjaCgoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0ICB0aGlzLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG5cdFx0XHQgIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlVGhlbWVDbGFzc05hbWUodGhlbWU6IFNjaGVtYVRoZW1lIHwgc3RyaW5nKTogc3RyaW5nIHtcblxuXHRcdHN3aXRjaCAodGhlbWUpIHtcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuRkFCUklDOlxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZVtTY2hlbWFUaGVtZS5GQUJSSUNdOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyLlRIRU1FX0ZBQlJJQ19DTEFTU19OQU1FO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLk1BVEVSSUFMOlxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZVtTY2hlbWFUaGVtZS5NQVRFUklBTF06XG5cdFx0XHRcdHJldHVybiBTY2hlbWFDc3NDbGFzc01hbmFnZXIuVEhFTUVfTUFURVJJQUxfQ0xBU1NfTkFNRTtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5MSUdIVDpcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWVbU2NoZW1hVGhlbWUuTElHSFRdOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyLlRIRU1FX0xJR0hUX0NMQVNTX05BTUU7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuREFSSzpcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWVbU2NoZW1hVGhlbWUuREFSS106XG5cdFx0XHRcdHJldHVybiBTY2hlbWFDc3NDbGFzc01hbmFnZXIuVEhFTUVfREFSS19DTEFTU19OQU1FO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkdFTkVSSUM6XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lW1NjaGVtYVRoZW1lLkdFTkVSSUNdOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyLlRIRU1FX0dFTkVSSUNfQ0xBU1NfTkFNRTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYUNzc0NsYXNzTWFuYWdlci5USEVNRV9GQUJSSUNfQ0xBU1NfTkFNRTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlc29sdmVSb3dDb2xvcmluZ0NsYXNzTmFtZShjb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcgfCBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdHN3aXRjaCAoY29sb3JpbmcpIHtcblx0XHRcdGNhc2UgU2NoZW1hUm93Q29sb3JpbmcuT0REOlxuXHRcdFx0Y2FzZSBTY2hlbWFSb3dDb2xvcmluZ1tTY2hlbWFSb3dDb2xvcmluZy5PRERdOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyLlJPV19DT0xPUklOR19PREQ7XG5cblx0XHRcdGNhc2UgU2NoZW1hUm93Q29sb3JpbmcuRVZFTjpcblx0XHRcdGNhc2UgU2NoZW1hUm93Q29sb3JpbmdbU2NoZW1hUm93Q29sb3JpbmcuRVZFTl06XG5cdFx0XHRcdHJldHVybiBTY2hlbWFDc3NDbGFzc01hbmFnZXIuUk9XX0NPTE9SSU5HX0VWRU47XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlUm93Q29sb3JpbmdDbGFzc2VzKCk6IHZvaWQge1xuXHRcdE9iamVjdC5rZXlzKFNjaGVtYVJvd0NvbG9yaW5nKVxuXHRcdFx0ICAubWFwKChrZXk6IHN0cmluZykgPT4gU2NoZW1hUm93Q29sb3Jpbmdba2V5XSlcblx0XHRcdCAgLm1hcCgoY29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKSA9PiB0aGlzLnJlc29sdmVSb3dDb2xvcmluZ0NsYXNzTmFtZShjb2xvcmluZykpXG5cdFx0XHQgIC5maWx0ZXIoKGNsYXNzTmFtZTogc3RyaW5nKSA9PiAhIWNsYXNzTmFtZSlcblx0XHRcdCAgLmZvckVhY2goKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdCAgdGhpcy5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuXHRcdFx0ICB9KTtcblx0fVxuXG5cdHByaXZhdGUgYWRkQ2xhc3MoY3NzQ2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoY3NzQ2xhc3NOYW1lKSB7XG5cdFx0XHR0aGlzLmNsYXNzTW9kaWZpZXIuZ2V0RWxlbWVudCh0aGlzLmNzc0hvc3RSZWYubmF0aXZlRWxlbWVudCkuYWRkKGNzc0NsYXNzTmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVDbGFzcyhjc3NDbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChjc3NDbGFzc05hbWUpIHtcblx0XHRcdHRoaXMuY2xhc3NNb2RpZmllci5nZXRFbGVtZW50KHRoaXMuY3NzSG9zdFJlZi5uYXRpdmVFbGVtZW50KS5yZW1vdmUoY3NzQ2xhc3NOYW1lKTtcblx0XHR9XG5cdH1cblxufVxuIl19