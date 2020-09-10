/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, RendererFactory2 } from '@angular/core';
import { SchemaTheme } from '../../../../schema/domain/theme/schema-theme';
import { SchemaRowColoring } from '../../../../schema/domain/coloring/schema-row-coloring';
import { SchemaWarehouse } from '../../../../schema/domain-api/schema.warehouse';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzcy5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9mZWF0dXJlL3NjaGVtYS9zY2hlbWEtY3NzLWNsYXNzLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFakYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRzNEO0lBQzJDLGlEQUFRO0lBMEJsRCwrQkFBNkIsZ0JBQWtDLEVBQzNDLHlCQUEwQztRQUQ5RCxZQUVDLGlCQUFPLFNBRVA7UUFKNEIsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMzQywrQkFBeUIsR0FBekIseUJBQXlCLENBQWlCO1FBekI3Qyw4QkFBd0IsR0FBRyxtQkFBbUIsQ0FBQztRQUUvQyxnQ0FBMEIsR0FBRyxxQkFBcUIsQ0FBQztRQUVuRCw2QkFBdUIsR0FBRyxZQUFZLENBQUM7UUFFdkMsK0JBQXlCLEdBQUcsY0FBYyxDQUFDO1FBRTNDLDRCQUFzQixHQUFHLFdBQVcsQ0FBQztRQUVyQywyQkFBcUIsR0FBRyxVQUFVLENBQUM7UUFFbkMsOEJBQXdCLEdBQUcsYUFBYSxDQUFDO1FBRXpDLHNCQUFnQixHQUFHLGNBQWMsQ0FBQztRQUVsQyx1QkFBaUIsR0FBRyxlQUFlLENBQUM7UUFJN0MsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFPdkMsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElB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O0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sMkNBQVc7Ozs7O0lBQW5CLFVBQW9CLFlBQW9CO1FBQ3ZDLElBQUksWUFBWSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0YsQ0FBQzs7Z0JBOUtELFVBQVU7Ozs7Z0JBVmlDLGdCQUFnQjtnQkFLbkQsZUFBZTs7SUFxTHhCLDRCQUFDO0NBQUEsQUFoTEQsQ0FDMkMsUUFBUSxHQStLbEQ7U0EvS1kscUJBQXFCOzs7Ozs7SUFFakMseURBQWdFOzs7OztJQUVoRSwyREFBb0U7Ozs7O0lBRXBFLHdEQUF3RDs7Ozs7SUFFeEQsMERBQTREOzs7OztJQUU1RCx1REFBc0Q7Ozs7O0lBRXRELHNEQUFvRDs7Ozs7SUFFcEQseURBQTBEOzs7OztJQUUxRCxpREFBbUQ7Ozs7O0lBRW5ELGtEQUFxRDs7Ozs7SUFFckQseUNBQXFDOzs7OztJQUVyQyx5Q0FBd0M7Ozs7O0lBRXhDLDJDQUErQjs7Ozs7SUFFbkIsaURBQW1EOzs7OztJQUM1RCwwREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3MgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9jc3MtY2xhc3Nlcy9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluL2NvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyIGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgVkVSVElDQUxfR1JJRF9DTEFTU19OQU1FID0gJ2d1aS12ZXJ0aWNhbC1ncmlkJztcblxuXHRwcml2YXRlIHJlYWRvbmx5IEhPUklaT05UQUxfR1JJRF9DTEFTU19OQU1FID0gJ2d1aS1ob3Jpem9udGFsLWdyaWQnO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgVEhFTUVfRkFCUklDX0NMQVNTX05BTUUgPSAnZ3VpLWZhYnJpYyc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBUSEVNRV9NQVRFUklBTF9DTEFTU19OQU1FID0gJ2d1aS1tYXRlcmlhbCc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBUSEVNRV9MSUdIVF9DTEFTU19OQU1FID0gJ2d1aS1saWdodCc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBUSEVNRV9EQVJLX0NMQVNTX05BTUUgPSAnZ3VpLWRhcmsnO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgVEhFTUVfR0VORVJJQ19DTEFTU19OQU1FID0gJ2d1aS1nZW5lcmljJztcblxuXHRwcml2YXRlIHJlYWRvbmx5IFJPV19DT0xPUklOR19PREQgPSAnZ3VpLXJvd3Mtb2RkJztcblxuXHRwcml2YXRlIHJlYWRvbmx5IFJPV19DT0xPUklOR19FVkVOID0gJ2d1aS1yb3dzLWV2ZW4nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMjtcblxuXHRwcml2YXRlIGNzc0NsYXNzOiBTY2hlbWFDc3NDbGFzcyA9IG51bGw7XG5cblx0cHJpdmF0ZSBjc3NIb3N0UmVmOiBFbGVtZW50UmVmO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXJGYWN0b3J5MjogUmVuZGVyZXJGYWN0b3J5Mixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSZXBvc2l0b3J5OiBTY2hlbWFXYXJlaG91c2UpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeTIuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG5cdH1cblxuXHRpbml0KGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogdm9pZCB7XG5cblx0XHR0aGlzLmNzc0hvc3RSZWYgPSBlbGVtZW50UmVmO1xuXG5cdFx0dGhpcy5zY2hlbWFSZWFkTW9kZWxSZXBvc2l0b3J5XG5cdFx0XHQub25Dc3NDbGFzc2VzKHNjaGVtYVJlYWRNb2RlbFJvb3RJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjbGFzc2VzOiBTY2hlbWFDc3NDbGFzcykgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGRpZmYgPSB0aGlzLnVwZGF0ZVN0YXRlKGNsYXNzZXMpO1xuXG5cdFx0XHRcdHRoaXMucmVuZGVyQ3NzQ2xhc3NlcyhkaWZmKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVTdGF0ZShjc3M6IFNjaGVtYUNzc0NsYXNzKTogUGFydGlhbDxTY2hlbWFDc3NDbGFzcz4ge1xuXG5cdFx0aWYgKCF0aGlzLmNzc0NsYXNzKSB7XG5cdFx0XHR0aGlzLmNzc0NsYXNzID0gY3NzO1xuXHRcdFx0cmV0dXJuIHRoaXMuY3NzQ2xhc3M7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0bGV0IGRpZmYgPSB7fTtcblxuXHRcdFx0T2JqZWN0LmtleXModGhpcy5jc3NDbGFzcylcblx0XHRcdFx0ICAuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHQgIGlmIChjc3Nba2V5XSAhPT0gdGhpcy5jc3NDbGFzc1trZXldKSB7XG5cdFx0XHRcdFx0XHQgIGRpZmZba2V5XSA9IGNzc1trZXldO1xuXHRcdFx0XHRcdCAgfVxuXHRcdFx0XHQgIH0pO1xuXG5cdFx0XHR0aGlzLmNzc0NsYXNzID0gY3NzO1xuXG5cdFx0XHRyZXR1cm4gZGlmZjtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbmRlckNzc0NsYXNzZXMoZGlmZjogUGFydGlhbDxTY2hlbWFDc3NDbGFzcz4pOiB2b2lkIHtcblxuXHRcdGlmIChkaWZmLmhhc093blByb3BlcnR5KCd2ZXJ0aWNhbEdyaWQnKSkge1xuXHRcdFx0dGhpcy50b2dnbGVDc3NDbGFzcyhkaWZmLnZlcnRpY2FsR3JpZCwgdGhpcy5WRVJUSUNBTF9HUklEX0NMQVNTX05BTUUpO1xuXHRcdH1cblxuXHRcdGlmIChkaWZmLmhhc093blByb3BlcnR5KCdob3Jpem9udGFsR3JpZCcpKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZUNzc0NsYXNzKGRpZmYuaG9yaXpvbnRhbEdyaWQsIHRoaXMuSE9SSVpPTlRBTF9HUklEX0NMQVNTX05BTUUpO1xuXHRcdH1cblxuXHRcdGlmIChkaWZmLmhhc093blByb3BlcnR5KCd0aGVtZScpKSB7XG5cdFx0XHR0aGlzLnJlbW92ZVRoZW1lQ3NzQ2xhc3NlcygpO1xuXHRcdFx0dGhpcy5hZGRDbGFzcyh0aGlzLnJlc29sdmVUaGVtZUNsYXNzTmFtZShkaWZmLnRoZW1lKSk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpZmYuaGFzT3duUHJvcGVydHkoJ3Jvd0NvbG9yaW5nJykpIHtcblx0XHRcdHRoaXMucmVtb3ZlUm93Q29sb3JpbmdDbGFzc2VzKCk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKHRoaXMucmVzb2x2ZVJvd0NvbG9yaW5nQ2xhc3NOYW1lKGRpZmYucm93Q29sb3JpbmcpKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHRvZ2dsZUNzc0NsYXNzKHRvZ2dsZTogYm9vbGVhbiwgY3NzQ2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAodG9nZ2xlKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKGNzc0NsYXNzTmFtZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoY3NzQ2xhc3NOYW1lKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZVRoZW1lQ3NzQ2xhc3NlcygpOiB2b2lkIHtcblx0XHRPYmplY3Qua2V5cyhTY2hlbWFUaGVtZSlcblx0XHRcdCAgLm1hcCgoa2V5OiBzdHJpbmcpID0+IFNjaGVtYVRoZW1lW2tleV0pXG5cdFx0XHQgIC5tYXAoKHRoZW1lOiBTY2hlbWFUaGVtZSkgPT4gdGhpcy5yZXNvbHZlVGhlbWVDbGFzc05hbWUodGhlbWUpKVxuXHRcdFx0ICAuZmlsdGVyKChjbGFzc05hbWU6IHN0cmluZykgPT4gISFjbGFzc05hbWUpXG5cdFx0XHQgIC5mb3JFYWNoKChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHQgIHRoaXMucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcblx0XHRcdCAgfSk7XG5cdH1cblxuXHRwcml2YXRlIHJlc29sdmVUaGVtZUNsYXNzTmFtZSh0aGVtZTogU2NoZW1hVGhlbWUgfCBzdHJpbmcpOiBzdHJpbmcge1xuXG5cdFx0c3dpdGNoICh0aGVtZSkge1xuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5GQUJSSUM6XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lW1NjaGVtYVRoZW1lLkZBQlJJQ106XG5cdFx0XHRcdHJldHVybiB0aGlzLlRIRU1FX0ZBQlJJQ19DTEFTU19OQU1FO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLk1BVEVSSUFMOlxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZVtTY2hlbWFUaGVtZS5NQVRFUklBTF06XG5cdFx0XHRcdHJldHVybiB0aGlzLlRIRU1FX01BVEVSSUFMX0NMQVNTX05BTUU7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuTElHSFQ6XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lW1NjaGVtYVRoZW1lLkxJR0hUXTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuVEhFTUVfTElHSFRfQ0xBU1NfTkFNRTtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5EQVJLOlxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZVtTY2hlbWFUaGVtZS5EQVJLXTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuVEhFTUVfREFSS19DTEFTU19OQU1FO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkdFTkVSSUM6XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lW1NjaGVtYVRoZW1lLkdFTkVSSUNdOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5USEVNRV9HRU5FUklDX0NMQVNTX05BTUU7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLlRIRU1FX0ZBQlJJQ19DTEFTU19OQU1FO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVzb2x2ZVJvd0NvbG9yaW5nQ2xhc3NOYW1lKGNvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZyB8IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0c3dpdGNoIChjb2xvcmluZykge1xuXHRcdFx0Y2FzZSBTY2hlbWFSb3dDb2xvcmluZy5PREQ6XG5cdFx0XHRjYXNlIFNjaGVtYVJvd0NvbG9yaW5nW1NjaGVtYVJvd0NvbG9yaW5nLk9ERF06XG5cdFx0XHRcdHJldHVybiB0aGlzLlJPV19DT0xPUklOR19PREQ7XG5cblx0XHRcdGNhc2UgU2NoZW1hUm93Q29sb3JpbmcuRVZFTjpcblx0XHRcdGNhc2UgU2NoZW1hUm93Q29sb3JpbmdbU2NoZW1hUm93Q29sb3JpbmcuRVZFTl06XG5cdFx0XHRcdHJldHVybiB0aGlzLlJPV19DT0xPUklOR19FVkVOO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZVJvd0NvbG9yaW5nQ2xhc3NlcygpOiB2b2lkIHtcblx0XHRPYmplY3Qua2V5cyhTY2hlbWFSb3dDb2xvcmluZylcblx0XHRcdCAgLm1hcCgoa2V5OiBzdHJpbmcpID0+IFNjaGVtYVJvd0NvbG9yaW5nW2tleV0pXG5cdFx0XHQgIC5tYXAoKGNvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZykgPT4gdGhpcy5yZXNvbHZlUm93Q29sb3JpbmdDbGFzc05hbWUoY29sb3JpbmcpKVxuXHRcdFx0ICAuZmlsdGVyKChjbGFzc05hbWU6IHN0cmluZykgPT4gISFjbGFzc05hbWUpXG5cdFx0XHQgIC5mb3JFYWNoKChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHQgIHRoaXMucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcblx0XHRcdCAgfSk7XG5cdH1cblxuXHRwcml2YXRlIGFkZENsYXNzKGNzc0NsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKGNzc0NsYXNzTmFtZSkge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmNzc0hvc3RSZWYubmF0aXZlRWxlbWVudCwgY3NzQ2xhc3NOYW1lKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUNsYXNzKGNzc0NsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKGNzc0NsYXNzTmFtZSkge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmNzc0hvc3RSZWYubmF0aXZlRWxlbWVudCwgY3NzQ2xhc3NOYW1lKTtcblx0XHR9XG5cdH1cblxufVxuIl19