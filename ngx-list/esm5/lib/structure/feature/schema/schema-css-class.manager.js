/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, RendererFactory2 } from '@angular/core';
import { SchemaTheme } from '../../../../schema/domain/theme/schema-theme';
import { SchemaRowColoring } from '../../../../schema/domain/coloring/schema-row-coloring';
import { SchemaWarehouse } from '../../../../schema/feature-api/schema.warehouse';
import { Reactive } from '../../../../common/cdk/reactive';
var SchemaCssClassManager = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaCssClassManager, _super);
    function SchemaCssClassManager(rendererFactory2, schemaReadModelRepository) {
        var _this = _super.call(this) || this;
        _this.rendererFactory2 = rendererFactory2;
        _this.schemaReadModelRepository = schemaReadModelRepository;
        _this.VERTICAL_GRID_CLASS_NAME = 'gui-vertical-grid';
        _this.HORIZONTAL_GRID_CLASS_NAME = 'gui-horizontal-grid';
        _this.THEME_FABRIC_CLASS_NAME = 'gui-fabric';
        _this.THEME_MATERIAL_CLASS_NAME = 'gui-material';
        _this.THEME_LIGHT_CLASS_NAME = 'gui-light';
        _this.THEME_DARK_CLASS_NAME = 'gui-dark';
        _this.THEME_GENERIC_CLASS_NAME = 'gui-generic';
        _this.ROW_COLORING_ODD = 'gui-rows-odd';
        _this.ROW_COLORING_EVEN = 'gui-rows-even';
        _this.cssClass = null;
        _this.renderer = _this.rendererFactory2.createRenderer(null, null);
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
            this.toggleCssClass(diff.verticalGrid, this.VERTICAL_GRID_CLASS_NAME);
        }
        if (diff.hasOwnProperty('horizontalGrid')) {
            this.toggleCssClass(diff.horizontalGrid, this.HORIZONTAL_GRID_CLASS_NAME);
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
                return this.THEME_FABRIC_CLASS_NAME;
            case SchemaTheme.MATERIAL:
            case SchemaTheme[SchemaTheme.MATERIAL]:
                return this.THEME_MATERIAL_CLASS_NAME;
            case SchemaTheme.LIGHT:
            case SchemaTheme[SchemaTheme.LIGHT]:
                return this.THEME_LIGHT_CLASS_NAME;
            case SchemaTheme.DARK:
            case SchemaTheme[SchemaTheme.DARK]:
                return this.THEME_DARK_CLASS_NAME;
            case SchemaTheme.GENERIC:
            case SchemaTheme[SchemaTheme.GENERIC]:
                return this.THEME_GENERIC_CLASS_NAME;
            default:
                return this.THEME_FABRIC_CLASS_NAME;
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
                return this.ROW_COLORING_ODD;
            case SchemaRowColoring.EVEN:
            case SchemaRowColoring[SchemaRowColoring.EVEN]:
                return this.ROW_COLORING_EVEN;
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
            this.renderer.addClass(this.cssHostRef.nativeElement, cssClassName);
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
            this.renderer.removeClass(this.cssHostRef.nativeElement, cssClassName);
        }
    };
    SchemaCssClassManager.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaCssClassManager.ctorParameters = function () { return [
        { type: RendererFactory2 },
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
    SchemaCssClassManager.prototype.VERTICAL_GRID_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.HORIZONTAL_GRID_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.THEME_FABRIC_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.THEME_MATERIAL_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.THEME_LIGHT_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.THEME_DARK_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.THEME_GENERIC_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.ROW_COLORING_ODD;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.ROW_COLORING_EVEN;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.renderer;
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
    SchemaCssClassManager.prototype.rendererFactory2;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.schemaReadModelRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzcy5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvc2NoZW1hL3NjaGVtYS1jc3MtY2xhc3MubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUVsRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHM0Q7SUFDMkMsaURBQVE7SUEwQmxELCtCQUE2QixnQkFBa0MsRUFDM0MseUJBQTBDO1FBRDlELFlBRUMsaUJBQU8sU0FFUDtRQUo0QixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzNDLCtCQUF5QixHQUF6Qix5QkFBeUIsQ0FBaUI7UUF6QjdDLDhCQUF3QixHQUFHLG1CQUFtQixDQUFDO1FBRS9DLGdDQUEwQixHQUFHLHFCQUFxQixDQUFDO1FBRW5ELDZCQUF1QixHQUFHLFlBQVksQ0FBQztRQUV2QywrQkFBeUIsR0FBRyxjQUFjLENBQUM7UUFFM0MsNEJBQXNCLEdBQUcsV0FBVyxDQUFDO1FBRXJDLDJCQUFxQixHQUFHLFVBQVUsQ0FBQztRQUVuQyw4QkFBd0IsR0FBRyxhQUFhLENBQUM7UUFFekMsc0JBQWdCLEdBQUcsY0FBYyxDQUFDO1FBRWxDLHVCQUFpQixHQUFHLGVBQWUsQ0FBQztRQUk3QyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQU92QyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFB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SUFDRixDQUFDOzs7Ozs7SUFFTywyQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsWUFBb0I7UUFDdkMsSUFBSSxZQUFZLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDdkU7SUFDRixDQUFDOztnQkE5S0QsVUFBVTs7OztnQkFWaUMsZ0JBQWdCO2dCQUtuRCxlQUFlOztJQXFMeEIsNEJBQUM7Q0FBQSxBQWhMRCxDQUMyQyxRQUFRLEdBK0tsRDtTQS9LWSxxQkFBcUI7Ozs7OztJQUVqQyx5REFBZ0U7Ozs7O0lBRWhFLDJEQUFvRTs7Ozs7SUFFcEUsd0RBQXdEOzs7OztJQUV4RCwwREFBNEQ7Ozs7O0lBRTVELHVEQUFzRDs7Ozs7SUFFdEQsc0RBQW9EOzs7OztJQUVwRCx5REFBMEQ7Ozs7O0lBRTFELGlEQUFtRDs7Ozs7SUFFbkQsa0RBQXFEOzs7OztJQUVyRCx5Q0FBcUM7Ozs7O0lBRXJDLHlDQUF3Qzs7Ozs7SUFFeEMsMkNBQStCOzs7OztJQUVuQixpREFBbUQ7Ozs7O0lBQzVELDBEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9mZWF0dXJlLWFwaS9jc3MtY2xhc3Nlcy9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluL2NvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2ZlYXR1cmUtYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2ZlYXR1cmUtYXBpL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFDc3NDbGFzc01hbmFnZXIgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBWRVJUSUNBTF9HUklEX0NMQVNTX05BTUUgPSAnZ3VpLXZlcnRpY2FsLWdyaWQnO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgSE9SSVpPTlRBTF9HUklEX0NMQVNTX05BTUUgPSAnZ3VpLWhvcml6b250YWwtZ3JpZCc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBUSEVNRV9GQUJSSUNfQ0xBU1NfTkFNRSA9ICdndWktZmFicmljJztcblxuXHRwcml2YXRlIHJlYWRvbmx5IFRIRU1FX01BVEVSSUFMX0NMQVNTX05BTUUgPSAnZ3VpLW1hdGVyaWFsJztcblxuXHRwcml2YXRlIHJlYWRvbmx5IFRIRU1FX0xJR0hUX0NMQVNTX05BTUUgPSAnZ3VpLWxpZ2h0JztcblxuXHRwcml2YXRlIHJlYWRvbmx5IFRIRU1FX0RBUktfQ0xBU1NfTkFNRSA9ICdndWktZGFyayc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBUSEVNRV9HRU5FUklDX0NMQVNTX05BTUUgPSAnZ3VpLWdlbmVyaWMnO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgUk9XX0NPTE9SSU5HX09ERCA9ICdndWktcm93cy1vZGQnO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgUk9XX0NPTE9SSU5HX0VWRU4gPSAnZ3VpLXJvd3MtZXZlbic7XG5cblx0cHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyO1xuXG5cdHByaXZhdGUgY3NzQ2xhc3M6IFNjaGVtYUNzc0NsYXNzID0gbnVsbDtcblxuXHRwcml2YXRlIGNzc0hvc3RSZWY6IEVsZW1lbnRSZWY7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByZW5kZXJlckZhY3RvcnkyOiBSZW5kZXJlckZhY3RvcnkyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJlcG9zaXRvcnk6IFNjaGVtYVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5Mi5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcblx0fVxuXG5cdGluaXQoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiB2b2lkIHtcblxuXHRcdHRoaXMuY3NzSG9zdFJlZiA9IGVsZW1lbnRSZWY7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFJlcG9zaXRvcnlcblx0XHRcdC5vbkNzc0NsYXNzZXMoc2NoZW1hUmVhZE1vZGVsUm9vdElkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNsYXNzZXM6IFNjaGVtYUNzc0NsYXNzKSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgZGlmZiA9IHRoaXMudXBkYXRlU3RhdGUoY2xhc3Nlcyk7XG5cblx0XHRcdFx0dGhpcy5yZW5kZXJDc3NDbGFzc2VzKGRpZmYpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHVwZGF0ZVN0YXRlKGNzczogU2NoZW1hQ3NzQ2xhc3MpOiBQYXJ0aWFsPFNjaGVtYUNzc0NsYXNzPiB7XG5cblx0XHRpZiAoIXRoaXMuY3NzQ2xhc3MpIHtcblx0XHRcdHRoaXMuY3NzQ2xhc3MgPSBjc3M7XG5cdFx0XHRyZXR1cm4gdGhpcy5jc3NDbGFzcztcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRsZXQgZGlmZiA9IHt9O1xuXG5cdFx0XHRPYmplY3Qua2V5cyh0aGlzLmNzc0NsYXNzKVxuXHRcdFx0XHQgIC5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdCAgaWYgKGNzc1trZXldICE9PSB0aGlzLmNzc0NsYXNzW2tleV0pIHtcblx0XHRcdFx0XHRcdCAgZGlmZltrZXldID0gY3NzW2tleV07XG5cdFx0XHRcdFx0ICB9XG5cdFx0XHRcdCAgfSk7XG5cblx0XHRcdHRoaXMuY3NzQ2xhc3MgPSBjc3M7XG5cblx0XHRcdHJldHVybiBkaWZmO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVuZGVyQ3NzQ2xhc3NlcyhkaWZmOiBQYXJ0aWFsPFNjaGVtYUNzc0NsYXNzPik6IHZvaWQge1xuXG5cdFx0aWYgKGRpZmYuaGFzT3duUHJvcGVydHkoJ3ZlcnRpY2FsR3JpZCcpKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZUNzc0NsYXNzKGRpZmYudmVydGljYWxHcmlkLCB0aGlzLlZFUlRJQ0FMX0dSSURfQ0xBU1NfTkFNRSk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpZmYuaGFzT3duUHJvcGVydHkoJ2hvcml6b250YWxHcmlkJykpIHtcblx0XHRcdHRoaXMudG9nZ2xlQ3NzQ2xhc3MoZGlmZi5ob3Jpem9udGFsR3JpZCwgdGhpcy5IT1JJWk9OVEFMX0dSSURfQ0xBU1NfTkFNRSk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpZmYuaGFzT3duUHJvcGVydHkoJ3RoZW1lJykpIHtcblx0XHRcdHRoaXMucmVtb3ZlVGhlbWVDc3NDbGFzc2VzKCk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKHRoaXMucmVzb2x2ZVRoZW1lQ2xhc3NOYW1lKGRpZmYudGhlbWUpKTtcblx0XHR9XG5cblx0XHRpZiAoZGlmZi5oYXNPd25Qcm9wZXJ0eSgncm93Q29sb3JpbmcnKSkge1xuXHRcdFx0dGhpcy5yZW1vdmVSb3dDb2xvcmluZ0NsYXNzZXMoKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3ModGhpcy5yZXNvbHZlUm93Q29sb3JpbmdDbGFzc05hbWUoZGlmZi5yb3dDb2xvcmluZykpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdG9nZ2xlQ3NzQ2xhc3ModG9nZ2xlOiBib29sZWFuLCBjc3NDbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmICh0b2dnbGUpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoY3NzQ2xhc3NOYW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcyhjc3NDbGFzc05hbWUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlVGhlbWVDc3NDbGFzc2VzKCk6IHZvaWQge1xuXHRcdE9iamVjdC5rZXlzKFNjaGVtYVRoZW1lKVxuXHRcdFx0ICAubWFwKChrZXk6IHN0cmluZykgPT4gU2NoZW1hVGhlbWVba2V5XSlcblx0XHRcdCAgLm1hcCgodGhlbWU6IFNjaGVtYVRoZW1lKSA9PiB0aGlzLnJlc29sdmVUaGVtZUNsYXNzTmFtZSh0aGVtZSkpXG5cdFx0XHQgIC5maWx0ZXIoKGNsYXNzTmFtZTogc3RyaW5nKSA9PiAhIWNsYXNzTmFtZSlcblx0XHRcdCAgLmZvckVhY2goKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdCAgdGhpcy5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuXHRcdFx0ICB9KTtcblx0fVxuXG5cdHByaXZhdGUgcmVzb2x2ZVRoZW1lQ2xhc3NOYW1lKHRoZW1lOiBTY2hlbWFUaGVtZSB8IHN0cmluZyk6IHN0cmluZyB7XG5cblx0XHRzd2l0Y2ggKHRoZW1lKSB7XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkZBQlJJQzpcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWVbU2NoZW1hVGhlbWUuRkFCUklDXTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuVEhFTUVfRkFCUklDX0NMQVNTX05BTUU7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuTUFURVJJQUw6XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lW1NjaGVtYVRoZW1lLk1BVEVSSUFMXTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuVEhFTUVfTUFURVJJQUxfQ0xBU1NfTkFNRTtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5MSUdIVDpcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWVbU2NoZW1hVGhlbWUuTElHSFRdOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5USEVNRV9MSUdIVF9DTEFTU19OQU1FO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkRBUks6XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lW1NjaGVtYVRoZW1lLkRBUktdOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5USEVNRV9EQVJLX0NMQVNTX05BTUU7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuR0VORVJJQzpcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWVbU2NoZW1hVGhlbWUuR0VORVJJQ106XG5cdFx0XHRcdHJldHVybiB0aGlzLlRIRU1FX0dFTkVSSUNfQ0xBU1NfTkFNRTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuVEhFTUVfRkFCUklDX0NMQVNTX05BTUU7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlUm93Q29sb3JpbmdDbGFzc05hbWUoY29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nIHwgc3RyaW5nKTogc3RyaW5nIHtcblx0XHRzd2l0Y2ggKGNvbG9yaW5nKSB7XG5cdFx0XHRjYXNlIFNjaGVtYVJvd0NvbG9yaW5nLk9ERDpcblx0XHRcdGNhc2UgU2NoZW1hUm93Q29sb3JpbmdbU2NoZW1hUm93Q29sb3JpbmcuT0REXTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuUk9XX0NPTE9SSU5HX09ERDtcblxuXHRcdFx0Y2FzZSBTY2hlbWFSb3dDb2xvcmluZy5FVkVOOlxuXHRcdFx0Y2FzZSBTY2hlbWFSb3dDb2xvcmluZ1tTY2hlbWFSb3dDb2xvcmluZy5FVkVOXTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuUk9XX0NPTE9SSU5HX0VWRU47XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlUm93Q29sb3JpbmdDbGFzc2VzKCk6IHZvaWQge1xuXHRcdE9iamVjdC5rZXlzKFNjaGVtYVJvd0NvbG9yaW5nKVxuXHRcdFx0ICAubWFwKChrZXk6IHN0cmluZykgPT4gU2NoZW1hUm93Q29sb3Jpbmdba2V5XSlcblx0XHRcdCAgLm1hcCgoY29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKSA9PiB0aGlzLnJlc29sdmVSb3dDb2xvcmluZ0NsYXNzTmFtZShjb2xvcmluZykpXG5cdFx0XHQgIC5maWx0ZXIoKGNsYXNzTmFtZTogc3RyaW5nKSA9PiAhIWNsYXNzTmFtZSlcblx0XHRcdCAgLmZvckVhY2goKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdCAgdGhpcy5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuXHRcdFx0ICB9KTtcblx0fVxuXG5cdHByaXZhdGUgYWRkQ2xhc3MoY3NzQ2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoY3NzQ2xhc3NOYW1lKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuY3NzSG9zdFJlZi5uYXRpdmVFbGVtZW50LCBjc3NDbGFzc05hbWUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlQ2xhc3MoY3NzQ2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoY3NzQ2xhc3NOYW1lKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuY3NzSG9zdFJlZi5uYXRpdmVFbGVtZW50LCBjc3NDbGFzc05hbWUpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=