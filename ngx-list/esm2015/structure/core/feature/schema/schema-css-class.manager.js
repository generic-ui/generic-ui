/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, RendererFactory2 } from '@angular/core';
import { SchemaTheme } from '../../../../schema/domain/theme/schema-theme';
import { SchemaRowColoring } from '../../../../schema/domain/coloring/schema-row-coloring';
import { SchemaWarehouse } from '../../../../schema/domain-api/schema.warehouse';
import { Reactive } from '../../../../common/cdk/reactive';
export class SchemaCssClassManager extends Reactive {
    /**
     * @param {?} rendererFactory2
     * @param {?} schemaReadModelRepository
     */
    constructor(rendererFactory2, schemaReadModelRepository) {
        super();
        this.rendererFactory2 = rendererFactory2;
        this.schemaReadModelRepository = schemaReadModelRepository;
        this.VERTICAL_GRID_CLASS_NAME = 'gui-vertical-grid';
        this.HORIZONTAL_GRID_CLASS_NAME = 'gui-horizontal-grid';
        this.THEME_FABRIC_CLASS_NAME = 'gui-fabric';
        this.THEME_MATERIAL_CLASS_NAME = 'gui-material';
        this.THEME_LIGHT_CLASS_NAME = 'gui-light';
        this.THEME_DARK_CLASS_NAME = 'gui-dark';
        this.THEME_GENERIC_CLASS_NAME = 'gui-generic';
        this.ROW_COLORING_ODD = 'gui-rows-odd';
        this.ROW_COLORING_EVEN = 'gui-rows-even';
        this.cssClass = null;
        this.renderer = this.rendererFactory2.createRenderer(null, null);
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
            let diff = {};
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
                return this.ROW_COLORING_ODD;
            case SchemaRowColoring.EVEN:
            case SchemaRowColoring[SchemaRowColoring.EVEN]:
                return this.ROW_COLORING_EVEN;
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
            this.renderer.addClass(this.cssHostRef.nativeElement, cssClassName);
        }
    }
    /**
     * @private
     * @param {?} cssClassName
     * @return {?}
     */
    removeClass(cssClassName) {
        if (cssClassName) {
            this.renderer.removeClass(this.cssHostRef.nativeElement, cssClassName);
        }
    }
}
SchemaCssClassManager.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaCssClassManager.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: SchemaWarehouse }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzcy5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9mZWF0dXJlL3NjaGVtYS9zY2hlbWEtY3NzLWNsYXNzLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUVqRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJM0QsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFFBQVE7Ozs7O0lBMEJsRCxZQUE2QixnQkFBa0MsRUFDM0MseUJBQTBDO1FBQzdELEtBQUssRUFBRSxDQUFDO1FBRm9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDM0MsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUFpQjtRQXpCN0MsNkJBQXdCLEdBQUcsbUJBQW1CLENBQUM7UUFFL0MsK0JBQTBCLEdBQUcscUJBQXFCLENBQUM7UUFFbkQsNEJBQXVCLEdBQUcsWUFBWSxDQUFDO1FBRXZDLDhCQUF5QixHQUFHLGNBQWMsQ0FBQztRQUUzQywyQkFBc0IsR0FBRyxXQUFXLENBQUM7UUFFckMsMEJBQXFCLEdBQUcsVUFBVSxDQUFDO1FBRW5DLDZCQUF3QixHQUFHLGFBQWEsQ0FBQztRQUV6QyxxQkFBZ0IsR0FBRyxjQUFjLENBQUM7UUFFbEMsc0JBQWlCLEdBQUcsZUFBZSxDQUFDO1FBSTdDLGFBQVEsR0FBbUIsSUFBSSxDQUFDO1FBT3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixD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QUFZLENBQUMsQ0FBQztTQUN2RTtJQUNGLENBQUM7OztZQTlLRCxVQUFVOzs7O1lBVmlDLGdCQUFnQjtZQUtuRCxlQUFlOzs7Ozs7O0lBUXZCLHlEQUFnRTs7Ozs7SUFFaEUsMkRBQW9FOzs7OztJQUVwRSx3REFBd0Q7Ozs7O0lBRXhELDBEQUE0RDs7Ozs7SUFFNUQsdURBQXNEOzs7OztJQUV0RCxzREFBb0Q7Ozs7O0lBRXBELHlEQUEwRDs7Ozs7SUFFMUQsaURBQW1EOzs7OztJQUVuRCxrREFBcUQ7Ozs7O0lBRXJELHlDQUFxQzs7Ozs7SUFFckMseUNBQXdDOzs7OztJQUV4QywyQ0FBK0I7Ozs7O0lBRW5CLGlEQUFtRDs7Ozs7SUFDNUQsMERBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvY3NzLWNsYXNzZXMvc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi9jb2xvcmluZy9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYUNzc0NsYXNzTWFuYWdlciBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IFZFUlRJQ0FMX0dSSURfQ0xBU1NfTkFNRSA9ICdndWktdmVydGljYWwtZ3JpZCc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBIT1JJWk9OVEFMX0dSSURfQ0xBU1NfTkFNRSA9ICdndWktaG9yaXpvbnRhbC1ncmlkJztcblxuXHRwcml2YXRlIHJlYWRvbmx5IFRIRU1FX0ZBQlJJQ19DTEFTU19OQU1FID0gJ2d1aS1mYWJyaWMnO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgVEhFTUVfTUFURVJJQUxfQ0xBU1NfTkFNRSA9ICdndWktbWF0ZXJpYWwnO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgVEhFTUVfTElHSFRfQ0xBU1NfTkFNRSA9ICdndWktbGlnaHQnO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgVEhFTUVfREFSS19DTEFTU19OQU1FID0gJ2d1aS1kYXJrJztcblxuXHRwcml2YXRlIHJlYWRvbmx5IFRIRU1FX0dFTkVSSUNfQ0xBU1NfTkFNRSA9ICdndWktZ2VuZXJpYyc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBST1dfQ09MT1JJTkdfT0REID0gJ2d1aS1yb3dzLW9kZCc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBST1dfQ09MT1JJTkdfRVZFTiA9ICdndWktcm93cy1ldmVuJztcblxuXHRwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjI7XG5cblx0cHJpdmF0ZSBjc3NDbGFzczogU2NoZW1hQ3NzQ2xhc3MgPSBudWxsO1xuXG5cdHByaXZhdGUgY3NzSG9zdFJlZjogRWxlbWVudFJlZjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyRmFjdG9yeTI6IFJlbmRlcmVyRmFjdG9yeTIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUmVwb3NpdG9yeTogU2NoZW1hV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkyLmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuXHR9XG5cblx0aW5pdChlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy5jc3NIb3N0UmVmID0gZWxlbWVudFJlZjtcblxuXHRcdHRoaXMuc2NoZW1hUmVhZE1vZGVsUmVwb3NpdG9yeVxuXHRcdFx0Lm9uQ3NzQ2xhc3NlcyhzY2hlbWFSZWFkTW9kZWxSb290SWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY2xhc3NlczogU2NoZW1hQ3NzQ2xhc3MpID0+IHtcblxuXHRcdFx0XHRjb25zdCBkaWZmID0gdGhpcy51cGRhdGVTdGF0ZShjbGFzc2VzKTtcblxuXHRcdFx0XHR0aGlzLnJlbmRlckNzc0NsYXNzZXMoZGlmZik7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlU3RhdGUoY3NzOiBTY2hlbWFDc3NDbGFzcyk6IFBhcnRpYWw8U2NoZW1hQ3NzQ2xhc3M+IHtcblxuXHRcdGlmICghdGhpcy5jc3NDbGFzcykge1xuXHRcdFx0dGhpcy5jc3NDbGFzcyA9IGNzcztcblx0XHRcdHJldHVybiB0aGlzLmNzc0NsYXNzO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGxldCBkaWZmID0ge307XG5cblx0XHRcdE9iamVjdC5rZXlzKHRoaXMuY3NzQ2xhc3MpXG5cdFx0XHRcdCAgLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0ICBpZiAoY3NzW2tleV0gIT09IHRoaXMuY3NzQ2xhc3Nba2V5XSkge1xuXHRcdFx0XHRcdFx0ICBkaWZmW2tleV0gPSBjc3Nba2V5XTtcblx0XHRcdFx0XHQgIH1cblx0XHRcdFx0ICB9KTtcblxuXHRcdFx0dGhpcy5jc3NDbGFzcyA9IGNzcztcblxuXHRcdFx0cmV0dXJuIGRpZmY7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZW5kZXJDc3NDbGFzc2VzKGRpZmY6IFBhcnRpYWw8U2NoZW1hQ3NzQ2xhc3M+KTogdm9pZCB7XG5cblx0XHRpZiAoZGlmZi5oYXNPd25Qcm9wZXJ0eSgndmVydGljYWxHcmlkJykpIHtcblx0XHRcdHRoaXMudG9nZ2xlQ3NzQ2xhc3MoZGlmZi52ZXJ0aWNhbEdyaWQsIHRoaXMuVkVSVElDQUxfR1JJRF9DTEFTU19OQU1FKTtcblx0XHR9XG5cblx0XHRpZiAoZGlmZi5oYXNPd25Qcm9wZXJ0eSgnaG9yaXpvbnRhbEdyaWQnKSkge1xuXHRcdFx0dGhpcy50b2dnbGVDc3NDbGFzcyhkaWZmLmhvcml6b250YWxHcmlkLCB0aGlzLkhPUklaT05UQUxfR1JJRF9DTEFTU19OQU1FKTtcblx0XHR9XG5cblx0XHRpZiAoZGlmZi5oYXNPd25Qcm9wZXJ0eSgndGhlbWUnKSkge1xuXHRcdFx0dGhpcy5yZW1vdmVUaGVtZUNzc0NsYXNzZXMoKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3ModGhpcy5yZXNvbHZlVGhlbWVDbGFzc05hbWUoZGlmZi50aGVtZSkpO1xuXHRcdH1cblxuXHRcdGlmIChkaWZmLmhhc093blByb3BlcnR5KCdyb3dDb2xvcmluZycpKSB7XG5cdFx0XHR0aGlzLnJlbW92ZVJvd0NvbG9yaW5nQ2xhc3NlcygpO1xuXHRcdFx0dGhpcy5hZGRDbGFzcyh0aGlzLnJlc29sdmVSb3dDb2xvcmluZ0NsYXNzTmFtZShkaWZmLnJvd0NvbG9yaW5nKSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB0b2dnbGVDc3NDbGFzcyh0b2dnbGU6IGJvb2xlYW4sIGNzc0NsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHRvZ2dsZSkge1xuXHRcdFx0dGhpcy5hZGRDbGFzcyhjc3NDbGFzc05hbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKGNzc0NsYXNzTmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVUaGVtZUNzc0NsYXNzZXMoKTogdm9pZCB7XG5cdFx0T2JqZWN0LmtleXMoU2NoZW1hVGhlbWUpXG5cdFx0XHQgIC5tYXAoKGtleTogc3RyaW5nKSA9PiBTY2hlbWFUaGVtZVtrZXldKVxuXHRcdFx0ICAubWFwKCh0aGVtZTogU2NoZW1hVGhlbWUpID0+IHRoaXMucmVzb2x2ZVRoZW1lQ2xhc3NOYW1lKHRoZW1lKSlcblx0XHRcdCAgLmZpbHRlcigoY2xhc3NOYW1lOiBzdHJpbmcpID0+ICEhY2xhc3NOYW1lKVxuXHRcdFx0ICAuZm9yRWFjaCgoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0ICB0aGlzLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG5cdFx0XHQgIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlVGhlbWVDbGFzc05hbWUodGhlbWU6IFNjaGVtYVRoZW1lIHwgc3RyaW5nKTogc3RyaW5nIHtcblxuXHRcdHN3aXRjaCAodGhlbWUpIHtcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuRkFCUklDOlxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZVtTY2hlbWFUaGVtZS5GQUJSSUNdOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5USEVNRV9GQUJSSUNfQ0xBU1NfTkFNRTtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5NQVRFUklBTDpcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWVbU2NoZW1hVGhlbWUuTUFURVJJQUxdOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5USEVNRV9NQVRFUklBTF9DTEFTU19OQU1FO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkxJR0hUOlxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZVtTY2hlbWFUaGVtZS5MSUdIVF06XG5cdFx0XHRcdHJldHVybiB0aGlzLlRIRU1FX0xJR0hUX0NMQVNTX05BTUU7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuREFSSzpcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWVbU2NoZW1hVGhlbWUuREFSS106XG5cdFx0XHRcdHJldHVybiB0aGlzLlRIRU1FX0RBUktfQ0xBU1NfTkFNRTtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5HRU5FUklDOlxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZVtTY2hlbWFUaGVtZS5HRU5FUklDXTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuVEhFTUVfR0VORVJJQ19DTEFTU19OQU1FO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5USEVNRV9GQUJSSUNfQ0xBU1NfTkFNRTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlc29sdmVSb3dDb2xvcmluZ0NsYXNzTmFtZShjb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcgfCBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdHN3aXRjaCAoY29sb3JpbmcpIHtcblx0XHRcdGNhc2UgU2NoZW1hUm93Q29sb3JpbmcuT0REOlxuXHRcdFx0Y2FzZSBTY2hlbWFSb3dDb2xvcmluZ1tTY2hlbWFSb3dDb2xvcmluZy5PRERdOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5ST1dfQ09MT1JJTkdfT0REO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVJvd0NvbG9yaW5nLkVWRU46XG5cdFx0XHRjYXNlIFNjaGVtYVJvd0NvbG9yaW5nW1NjaGVtYVJvd0NvbG9yaW5nLkVWRU5dOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5ST1dfQ09MT1JJTkdfRVZFTjtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVSb3dDb2xvcmluZ0NsYXNzZXMoKTogdm9pZCB7XG5cdFx0T2JqZWN0LmtleXMoU2NoZW1hUm93Q29sb3JpbmcpXG5cdFx0XHQgIC5tYXAoKGtleTogc3RyaW5nKSA9PiBTY2hlbWFSb3dDb2xvcmluZ1trZXldKVxuXHRcdFx0ICAubWFwKChjb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcpID0+IHRoaXMucmVzb2x2ZVJvd0NvbG9yaW5nQ2xhc3NOYW1lKGNvbG9yaW5nKSlcblx0XHRcdCAgLmZpbHRlcigoY2xhc3NOYW1lOiBzdHJpbmcpID0+ICEhY2xhc3NOYW1lKVxuXHRcdFx0ICAuZm9yRWFjaCgoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0ICB0aGlzLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG5cdFx0XHQgIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGRDbGFzcyhjc3NDbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChjc3NDbGFzc05hbWUpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jc3NIb3N0UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzTmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVDbGFzcyhjc3NDbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChjc3NDbGFzc05hbWUpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5jc3NIb3N0UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzTmFtZSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==