/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SchemaTheme } from '../../../../schema/core/api/theme/schema-theme';
import { SchemaRowColoring } from '../../../../schema/core/api/row-coloring/schema-row-coloring';
import { SchemaWarehouse } from '../../../../schema/core/api/schema.warehouse';
import { Reactive } from '../../../../common/cdk/reactive/reactive';
import { ClassModifier } from '../../../../common/cdk/dom/class/class-modifier';
export class SchemaCssClassManager extends Reactive {
    /**
     * @param {?} schemaReadModelRepository
     */
    constructor(schemaReadModelRepository) {
        super();
        this.schemaReadModelRepository = schemaReadModelRepository;
        this.cssClass = null;
        this.classModifier = new ClassModifier();
    }
    /**
     * @param {?} elementRef
     * @param {?} schemaReadModelRootId
     * @return {?}
     */
    init(elementRef, schemaReadModelRootId) {
        this.cssHostRef = elementRef;
        this.schemaReadModelRepository
            .onCssClasses(schemaReadModelRootId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} classes
         * @return {?}
         */
        (classes) => {
            /** @type {?} */
            const diff = this.updateState(classes);
            this.renderCssClasses(diff);
        }));
    }
    /**
     * @private
     * @param {?} css
     * @return {?}
     */
    updateState(css) {
        if (!this.cssClass) {
            this.cssClass = css;
            return this.cssClass;
        }
        else {
            /** @type {?} */
            const diff = {};
            Object.keys(this.cssClass)
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                if (css[key] !== this.cssClass[key]) {
                    diff[key] = css[key];
                }
            }));
            this.cssClass = css;
            return diff;
        }
    }
    /**
     * @private
     * @param {?} diff
     * @return {?}
     */
    renderCssClasses(diff) {
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
    }
    /**
     * @private
     * @param {?} toggle
     * @param {?} cssClassName
     * @return {?}
     */
    toggleCssClass(toggle, cssClassName) {
        if (toggle) {
            this.addClass(cssClassName);
        }
        else {
            this.removeClass(cssClassName);
        }
    }
    /**
     * @private
     * @return {?}
     */
    removeThemeCssClasses() {
        Object.keys(SchemaTheme)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        (key) => SchemaTheme[key]))
            .map((/**
         * @param {?} theme
         * @return {?}
         */
        (theme) => this.resolveThemeClassName(theme)))
            .filter((/**
         * @param {?} className
         * @return {?}
         */
        (className) => !!className))
            .forEach((/**
         * @param {?} className
         * @return {?}
         */
        (className) => {
            this.removeClass(className);
        }));
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    resolveThemeClassName(theme) {
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
    }
    /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    resolveRowColoringClassName(coloring) {
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
    }
    /**
     * @private
     * @return {?}
     */
    removeRowColoringClasses() {
        Object.keys(SchemaRowColoring)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        (key) => SchemaRowColoring[key]))
            .map((/**
         * @param {?} coloring
         * @return {?}
         */
        (coloring) => this.resolveRowColoringClassName(coloring)))
            .filter((/**
         * @param {?} className
         * @return {?}
         */
        (className) => !!className))
            .forEach((/**
         * @param {?} className
         * @return {?}
         */
        (className) => {
            this.removeClass(className);
        }));
    }
    /**
     * @private
     * @param {?} cssClassName
     * @return {?}
     */
    addClass(cssClassName) {
        if (cssClassName) {
            this.classModifier.getElement(this.cssHostRef.nativeElement).add(cssClassName);
        }
    }
    /**
     * @private
     * @param {?} cssClassName
     * @return {?}
     */
    removeClass(cssClassName) {
        if (cssClassName) {
            this.classModifier.getElement(this.cssHostRef.nativeElement).remove(cssClassName);
        }
    }
}
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
SchemaCssClassManager.ctorParameters = () => [
    { type: SchemaWarehouse }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzcy5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3NjaGVtYS9zY2hlbWEtY3NzLWNsYXNzLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBSWhGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxRQUFROzs7O0lBMEJsRCxZQUE2Qix5QkFBMEM7UUFDdEUsS0FBSyxFQUFFLENBQUM7UUFEb0IsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUFpQjtRQUovRCxhQUFRLEdBQW1CLElBQUksQ0FBQztRQU12QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxDQUFDLFVBQXNCLEVBQUUscUJBQTRDO1FBRXhFLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBRTdCLElBQUksQ0FBQyx5QkFBeUI7YUFDNUIsWUFBWSxDQUFDLHFCQUFxQixDQUFDO2FBQ25DLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsT0FBdUIsRUFBRSxFQUFFOztrQkFFaEMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1lBRXRD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O0FBRWxDLHVDQUFpQixHQUFHLGVBQWUsQ0FBQzs7WUFuQjVELFVBQVU7Ozs7WUFORixlQUFlOzs7Ozs7O0lBU3ZCLCtDQUF1RTs7Ozs7SUFFdkUsaURBQTJFOzs7OztJQUUzRSw4Q0FBK0Q7Ozs7O0lBRS9ELGdEQUFtRTs7Ozs7SUFFbkUsNkNBQTZEOzs7OztJQUU3RCw0Q0FBMkQ7Ozs7O0lBRTNELCtDQUFpRTs7Ozs7SUFFakUsdUNBQTBEOzs7OztJQUUxRCx3Q0FBNEQ7Ozs7O0lBRTVELDhDQUE4Qzs7Ozs7SUFFOUMseUNBQXdDOzs7OztJQUV4QywyQ0FBK0I7Ozs7O0lBRW5CLDBEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3MgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvY3NzLWNsYXNzZXMvc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlL3JlYWN0aXZlJztcbmltcG9ydCB7IENsYXNzTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2RvbS9jbGFzcy9jbGFzcy1tb2RpZmllcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYUNzc0NsYXNzTWFuYWdlciBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBWRVJUSUNBTF9HUklEX0NMQVNTX05BTUUgPSAnZ3VpLXZlcnRpY2FsLWdyaWQnO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEhPUklaT05UQUxfR1JJRF9DTEFTU19OQU1FID0gJ2d1aS1ob3Jpem9udGFsLWdyaWQnO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRIRU1FX0ZBQlJJQ19DTEFTU19OQU1FID0gJ2d1aS1mYWJyaWMnO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRIRU1FX01BVEVSSUFMX0NMQVNTX05BTUUgPSAnZ3VpLW1hdGVyaWFsJztcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBUSEVNRV9MSUdIVF9DTEFTU19OQU1FID0gJ2d1aS1saWdodCc7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEhFTUVfREFSS19DTEFTU19OQU1FID0gJ2d1aS1kYXJrJztcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBUSEVNRV9HRU5FUklDX0NMQVNTX05BTUUgPSAnZ3VpLWdlbmVyaWMnO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFJPV19DT0xPUklOR19PREQgPSAnZ3VpLXJvd3Mtb2RkJztcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBST1dfQ09MT1JJTkdfRVZFTiA9ICdndWktcm93cy1ldmVuJztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNsYXNzTW9kaWZpZXI6IENsYXNzTW9kaWZpZXI7XG5cblx0cHJpdmF0ZSBjc3NDbGFzczogU2NoZW1hQ3NzQ2xhc3MgPSBudWxsO1xuXG5cdHByaXZhdGUgY3NzSG9zdFJlZjogRWxlbWVudFJlZjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJlcG9zaXRvcnk6IFNjaGVtYVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5jbGFzc01vZGlmaWVyID0gbmV3IENsYXNzTW9kaWZpZXIoKTtcblx0fVxuXG5cdGluaXQoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiB2b2lkIHtcblxuXHRcdHRoaXMuY3NzSG9zdFJlZiA9IGVsZW1lbnRSZWY7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFJlcG9zaXRvcnlcblx0XHRcdC5vbkNzc0NsYXNzZXMoc2NoZW1hUmVhZE1vZGVsUm9vdElkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNsYXNzZXM6IFNjaGVtYUNzc0NsYXNzKSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgZGlmZiA9IHRoaXMudXBkYXRlU3RhdGUoY2xhc3Nlcyk7XG5cblx0XHRcdFx0dGhpcy5yZW5kZXJDc3NDbGFzc2VzKGRpZmYpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHVwZGF0ZVN0YXRlKGNzczogU2NoZW1hQ3NzQ2xhc3MpOiBQYXJ0aWFsPFNjaGVtYUNzc0NsYXNzPiB7XG5cblx0XHRpZiAoIXRoaXMuY3NzQ2xhc3MpIHtcblx0XHRcdHRoaXMuY3NzQ2xhc3MgPSBjc3M7XG5cdFx0XHRyZXR1cm4gdGhpcy5jc3NDbGFzcztcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zdCBkaWZmID0ge307XG5cblx0XHRcdE9iamVjdC5rZXlzKHRoaXMuY3NzQ2xhc3MpXG5cdFx0XHRcdCAgLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0ICBpZiAoY3NzW2tleV0gIT09IHRoaXMuY3NzQ2xhc3Nba2V5XSkge1xuXHRcdFx0XHRcdFx0ICBkaWZmW2tleV0gPSBjc3Nba2V5XTtcblx0XHRcdFx0XHQgIH1cblx0XHRcdFx0ICB9KTtcblxuXHRcdFx0dGhpcy5jc3NDbGFzcyA9IGNzcztcblxuXHRcdFx0cmV0dXJuIGRpZmY7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZW5kZXJDc3NDbGFzc2VzKGRpZmY6IFBhcnRpYWw8U2NoZW1hQ3NzQ2xhc3M+KTogdm9pZCB7XG5cblx0XHRpZiAoZGlmZi5oYXNPd25Qcm9wZXJ0eSgndmVydGljYWxHcmlkJykpIHtcblx0XHRcdHRoaXMudG9nZ2xlQ3NzQ2xhc3MoZGlmZi52ZXJ0aWNhbEdyaWQsIFNjaGVtYUNzc0NsYXNzTWFuYWdlci5WRVJUSUNBTF9HUklEX0NMQVNTX05BTUUpO1xuXHRcdH1cblxuXHRcdGlmIChkaWZmLmhhc093blByb3BlcnR5KCdob3Jpem9udGFsR3JpZCcpKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZUNzc0NsYXNzKGRpZmYuaG9yaXpvbnRhbEdyaWQsIFNjaGVtYUNzc0NsYXNzTWFuYWdlci5IT1JJWk9OVEFMX0dSSURfQ0xBU1NfTkFNRSk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpZmYuaGFzT3duUHJvcGVydHkoJ3RoZW1lJykpIHtcblx0XHRcdHRoaXMucmVtb3ZlVGhlbWVDc3NDbGFzc2VzKCk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKHRoaXMucmVzb2x2ZVRoZW1lQ2xhc3NOYW1lKGRpZmYudGhlbWUpKTtcblx0XHR9XG5cblx0XHRpZiAoZGlmZi5oYXNPd25Qcm9wZXJ0eSgncm93Q29sb3JpbmcnKSkge1xuXHRcdFx0dGhpcy5yZW1vdmVSb3dDb2xvcmluZ0NsYXNzZXMoKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3ModGhpcy5yZXNvbHZlUm93Q29sb3JpbmdDbGFzc05hbWUoZGlmZi5yb3dDb2xvcmluZykpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdG9nZ2xlQ3NzQ2xhc3ModG9nZ2xlOiBib29sZWFuLCBjc3NDbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmICh0b2dnbGUpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoY3NzQ2xhc3NOYW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcyhjc3NDbGFzc05hbWUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlVGhlbWVDc3NDbGFzc2VzKCk6IHZvaWQge1xuXHRcdE9iamVjdC5rZXlzKFNjaGVtYVRoZW1lKVxuXHRcdFx0ICAubWFwKChrZXk6IHN0cmluZykgPT4gU2NoZW1hVGhlbWVba2V5XSlcblx0XHRcdCAgLm1hcCgodGhlbWU6IFNjaGVtYVRoZW1lKSA9PiB0aGlzLnJlc29sdmVUaGVtZUNsYXNzTmFtZSh0aGVtZSkpXG5cdFx0XHQgIC5maWx0ZXIoKGNsYXNzTmFtZTogc3RyaW5nKSA9PiAhIWNsYXNzTmFtZSlcblx0XHRcdCAgLmZvckVhY2goKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdCAgdGhpcy5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuXHRcdFx0ICB9KTtcblx0fVxuXG5cdHByaXZhdGUgcmVzb2x2ZVRoZW1lQ2xhc3NOYW1lKHRoZW1lOiBTY2hlbWFUaGVtZSB8IHN0cmluZyk6IHN0cmluZyB7XG5cblx0XHRzd2l0Y2ggKHRoZW1lKSB7XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkZBQlJJQzpcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWVbU2NoZW1hVGhlbWUuRkFCUklDXTpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYUNzc0NsYXNzTWFuYWdlci5USEVNRV9GQUJSSUNfQ0xBU1NfTkFNRTtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5NQVRFUklBTDpcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWVbU2NoZW1hVGhlbWUuTUFURVJJQUxdOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyLlRIRU1FX01BVEVSSUFMX0NMQVNTX05BTUU7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuTElHSFQ6XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lW1NjaGVtYVRoZW1lLkxJR0hUXTpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYUNzc0NsYXNzTWFuYWdlci5USEVNRV9MSUdIVF9DTEFTU19OQU1FO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkRBUks6XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lW1NjaGVtYVRoZW1lLkRBUktdOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyLlRIRU1FX0RBUktfQ0xBU1NfTkFNRTtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5HRU5FUklDOlxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZVtTY2hlbWFUaGVtZS5HRU5FUklDXTpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYUNzc0NsYXNzTWFuYWdlci5USEVNRV9HRU5FUklDX0NMQVNTX05BTUU7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFDc3NDbGFzc01hbmFnZXIuVEhFTUVfRkFCUklDX0NMQVNTX05BTUU7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlUm93Q29sb3JpbmdDbGFzc05hbWUoY29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nIHwgc3RyaW5nKTogc3RyaW5nIHtcblx0XHRzd2l0Y2ggKGNvbG9yaW5nKSB7XG5cdFx0XHRjYXNlIFNjaGVtYVJvd0NvbG9yaW5nLk9ERDpcblx0XHRcdGNhc2UgU2NoZW1hUm93Q29sb3JpbmdbU2NoZW1hUm93Q29sb3JpbmcuT0REXTpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYUNzc0NsYXNzTWFuYWdlci5ST1dfQ09MT1JJTkdfT0REO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVJvd0NvbG9yaW5nLkVWRU46XG5cdFx0XHRjYXNlIFNjaGVtYVJvd0NvbG9yaW5nW1NjaGVtYVJvd0NvbG9yaW5nLkVWRU5dOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyLlJPV19DT0xPUklOR19FVkVOO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZVJvd0NvbG9yaW5nQ2xhc3NlcygpOiB2b2lkIHtcblx0XHRPYmplY3Qua2V5cyhTY2hlbWFSb3dDb2xvcmluZylcblx0XHRcdCAgLm1hcCgoa2V5OiBzdHJpbmcpID0+IFNjaGVtYVJvd0NvbG9yaW5nW2tleV0pXG5cdFx0XHQgIC5tYXAoKGNvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZykgPT4gdGhpcy5yZXNvbHZlUm93Q29sb3JpbmdDbGFzc05hbWUoY29sb3JpbmcpKVxuXHRcdFx0ICAuZmlsdGVyKChjbGFzc05hbWU6IHN0cmluZykgPT4gISFjbGFzc05hbWUpXG5cdFx0XHQgIC5mb3JFYWNoKChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHQgIHRoaXMucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcblx0XHRcdCAgfSk7XG5cdH1cblxuXHRwcml2YXRlIGFkZENsYXNzKGNzc0NsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKGNzc0NsYXNzTmFtZSkge1xuXHRcdFx0dGhpcy5jbGFzc01vZGlmaWVyLmdldEVsZW1lbnQodGhpcy5jc3NIb3N0UmVmLm5hdGl2ZUVsZW1lbnQpLmFkZChjc3NDbGFzc05hbWUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlQ2xhc3MoY3NzQ2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoY3NzQ2xhc3NOYW1lKSB7XG5cdFx0XHR0aGlzLmNsYXNzTW9kaWZpZXIuZ2V0RWxlbWVudCh0aGlzLmNzc0hvc3RSZWYubmF0aXZlRWxlbWVudCkucmVtb3ZlKGNzc0NsYXNzTmFtZSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==