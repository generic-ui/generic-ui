/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, RendererFactory2 } from '@angular/core';
import { SchemaTheme } from '../../../../schema/core/api/schema-theme';
import { SchemaRowColoring } from '../../../../schema/core/api/schema-row-coloring';
import { SchemaWarehouse } from '../../../../schema/core/api/schema.warehouse';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzcy5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3NjaGVtYS9zY2hlbWEtY3NzLWNsYXNzLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJM0QsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFFBQVE7Ozs7O0lBMEJsRCxZQUE2QixnQkFBa0MsRUFDM0MseUJBQTBDO1FBQzdELEtBQUssRUFBRSxDQUFDO1FBRm9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDM0MsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUFpQjtRQXpCN0MsNkJBQXdCLEdBQUcsbUJBQW1CLENBQUM7UUFFL0MsK0JBQTBCLEdBQUcscUJBQXFCLENBQUM7UUFFbkQsNEJBQXVCLEdBQUcsWUFBWSxDQUFDO1FBRXZDLDhCQUF5QixHQUFHLGNBQWMsQ0FBQztRQUUzQywyQkFBc0IsR0FBRyxXQUFXLENBQUM7UUFFckMsMEJBQXFCLEdBQUcsVUFBVSxDQUFDO1FBRW5DLDZCQUF3QixHQUFHLGFBQWEsQ0FBQztRQUV6QyxxQkFBZ0IsR0FBRyxjQUFjLENBQUM7UUFFbEMsc0JBQWlCLEdBQUcsZUFBZSxDQUFDO1FBSTdDLGFBQVEsR0FBbUIsSUFBSSxDQUFDO1FBT3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixD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QUFZLENBQUMsQ0FBQztTQUN2RTtJQUNGLENBQUM7OztZQTlLRCxVQUFVOzs7O1lBVmlDLGdCQUFnQjtZQUtuRCxlQUFlOzs7Ozs7O0lBUXZCLHlEQUFnRTs7Ozs7SUFFaEUsMkRBQW9FOzs7OztJQUVwRSx3REFBd0Q7Ozs7O0lBRXhELDBEQUE0RDs7Ozs7SUFFNUQsdURBQXNEOzs7OztJQUV0RCxzREFBb0Q7Ozs7O0lBRXBELHlEQUEwRDs7Ozs7SUFFMUQsaURBQW1EOzs7OztJQUVuRCxrREFBcUQ7Ozs7O0lBRXJELHlDQUFxQzs7Ozs7SUFFckMseUNBQXdDOzs7OztJQUV4QywyQ0FBK0I7Ozs7O0lBRW5CLGlEQUFtRDs7Ozs7SUFDNUQsMERBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL2Nzcy1jbGFzc2VzL3NjaGVtYS1jc3MtY2xhc3MnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvZG9tYWluLXJlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFDc3NDbGFzc01hbmFnZXIgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBWRVJUSUNBTF9HUklEX0NMQVNTX05BTUUgPSAnZ3VpLXZlcnRpY2FsLWdyaWQnO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgSE9SSVpPTlRBTF9HUklEX0NMQVNTX05BTUUgPSAnZ3VpLWhvcml6b250YWwtZ3JpZCc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBUSEVNRV9GQUJSSUNfQ0xBU1NfTkFNRSA9ICdndWktZmFicmljJztcblxuXHRwcml2YXRlIHJlYWRvbmx5IFRIRU1FX01BVEVSSUFMX0NMQVNTX05BTUUgPSAnZ3VpLW1hdGVyaWFsJztcblxuXHRwcml2YXRlIHJlYWRvbmx5IFRIRU1FX0xJR0hUX0NMQVNTX05BTUUgPSAnZ3VpLWxpZ2h0JztcblxuXHRwcml2YXRlIHJlYWRvbmx5IFRIRU1FX0RBUktfQ0xBU1NfTkFNRSA9ICdndWktZGFyayc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBUSEVNRV9HRU5FUklDX0NMQVNTX05BTUUgPSAnZ3VpLWdlbmVyaWMnO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgUk9XX0NPTE9SSU5HX09ERCA9ICdndWktcm93cy1vZGQnO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgUk9XX0NPTE9SSU5HX0VWRU4gPSAnZ3VpLXJvd3MtZXZlbic7XG5cblx0cHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyO1xuXG5cdHByaXZhdGUgY3NzQ2xhc3M6IFNjaGVtYUNzc0NsYXNzID0gbnVsbDtcblxuXHRwcml2YXRlIGNzc0hvc3RSZWY6IEVsZW1lbnRSZWY7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByZW5kZXJlckZhY3RvcnkyOiBSZW5kZXJlckZhY3RvcnkyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJlcG9zaXRvcnk6IFNjaGVtYVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5Mi5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcblx0fVxuXG5cdGluaXQoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiB2b2lkIHtcblxuXHRcdHRoaXMuY3NzSG9zdFJlZiA9IGVsZW1lbnRSZWY7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFJlcG9zaXRvcnlcblx0XHRcdC5vbkNzc0NsYXNzZXMoc2NoZW1hUmVhZE1vZGVsUm9vdElkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNsYXNzZXM6IFNjaGVtYUNzc0NsYXNzKSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgZGlmZiA9IHRoaXMudXBkYXRlU3RhdGUoY2xhc3Nlcyk7XG5cblx0XHRcdFx0dGhpcy5yZW5kZXJDc3NDbGFzc2VzKGRpZmYpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHVwZGF0ZVN0YXRlKGNzczogU2NoZW1hQ3NzQ2xhc3MpOiBQYXJ0aWFsPFNjaGVtYUNzc0NsYXNzPiB7XG5cblx0XHRpZiAoIXRoaXMuY3NzQ2xhc3MpIHtcblx0XHRcdHRoaXMuY3NzQ2xhc3MgPSBjc3M7XG5cdFx0XHRyZXR1cm4gdGhpcy5jc3NDbGFzcztcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRsZXQgZGlmZiA9IHt9O1xuXG5cdFx0XHRPYmplY3Qua2V5cyh0aGlzLmNzc0NsYXNzKVxuXHRcdFx0XHQgIC5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdCAgaWYgKGNzc1trZXldICE9PSB0aGlzLmNzc0NsYXNzW2tleV0pIHtcblx0XHRcdFx0XHRcdCAgZGlmZltrZXldID0gY3NzW2tleV07XG5cdFx0XHRcdFx0ICB9XG5cdFx0XHRcdCAgfSk7XG5cblx0XHRcdHRoaXMuY3NzQ2xhc3MgPSBjc3M7XG5cblx0XHRcdHJldHVybiBkaWZmO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVuZGVyQ3NzQ2xhc3NlcyhkaWZmOiBQYXJ0aWFsPFNjaGVtYUNzc0NsYXNzPik6IHZvaWQge1xuXG5cdFx0aWYgKGRpZmYuaGFzT3duUHJvcGVydHkoJ3ZlcnRpY2FsR3JpZCcpKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZUNzc0NsYXNzKGRpZmYudmVydGljYWxHcmlkLCB0aGlzLlZFUlRJQ0FMX0dSSURfQ0xBU1NfTkFNRSk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpZmYuaGFzT3duUHJvcGVydHkoJ2hvcml6b250YWxHcmlkJykpIHtcblx0XHRcdHRoaXMudG9nZ2xlQ3NzQ2xhc3MoZGlmZi5ob3Jpem9udGFsR3JpZCwgdGhpcy5IT1JJWk9OVEFMX0dSSURfQ0xBU1NfTkFNRSk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpZmYuaGFzT3duUHJvcGVydHkoJ3RoZW1lJykpIHtcblx0XHRcdHRoaXMucmVtb3ZlVGhlbWVDc3NDbGFzc2VzKCk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKHRoaXMucmVzb2x2ZVRoZW1lQ2xhc3NOYW1lKGRpZmYudGhlbWUpKTtcblx0XHR9XG5cblx0XHRpZiAoZGlmZi5oYXNPd25Qcm9wZXJ0eSgncm93Q29sb3JpbmcnKSkge1xuXHRcdFx0dGhpcy5yZW1vdmVSb3dDb2xvcmluZ0NsYXNzZXMoKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3ModGhpcy5yZXNvbHZlUm93Q29sb3JpbmdDbGFzc05hbWUoZGlmZi5yb3dDb2xvcmluZykpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdG9nZ2xlQ3NzQ2xhc3ModG9nZ2xlOiBib29sZWFuLCBjc3NDbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmICh0b2dnbGUpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoY3NzQ2xhc3NOYW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcyhjc3NDbGFzc05hbWUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlVGhlbWVDc3NDbGFzc2VzKCk6IHZvaWQge1xuXHRcdE9iamVjdC5rZXlzKFNjaGVtYVRoZW1lKVxuXHRcdFx0ICAubWFwKChrZXk6IHN0cmluZykgPT4gU2NoZW1hVGhlbWVba2V5XSlcblx0XHRcdCAgLm1hcCgodGhlbWU6IFNjaGVtYVRoZW1lKSA9PiB0aGlzLnJlc29sdmVUaGVtZUNsYXNzTmFtZSh0aGVtZSkpXG5cdFx0XHQgIC5maWx0ZXIoKGNsYXNzTmFtZTogc3RyaW5nKSA9PiAhIWNsYXNzTmFtZSlcblx0XHRcdCAgLmZvckVhY2goKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdCAgdGhpcy5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuXHRcdFx0ICB9KTtcblx0fVxuXG5cdHByaXZhdGUgcmVzb2x2ZVRoZW1lQ2xhc3NOYW1lKHRoZW1lOiBTY2hlbWFUaGVtZSB8IHN0cmluZyk6IHN0cmluZyB7XG5cblx0XHRzd2l0Y2ggKHRoZW1lKSB7XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkZBQlJJQzpcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWVbU2NoZW1hVGhlbWUuRkFCUklDXTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuVEhFTUVfRkFCUklDX0NMQVNTX05BTUU7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuTUFURVJJQUw6XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lW1NjaGVtYVRoZW1lLk1BVEVSSUFMXTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuVEhFTUVfTUFURVJJQUxfQ0xBU1NfTkFNRTtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5MSUdIVDpcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWVbU2NoZW1hVGhlbWUuTElHSFRdOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5USEVNRV9MSUdIVF9DTEFTU19OQU1FO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkRBUks6XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lW1NjaGVtYVRoZW1lLkRBUktdOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5USEVNRV9EQVJLX0NMQVNTX05BTUU7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuR0VORVJJQzpcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWVbU2NoZW1hVGhlbWUuR0VORVJJQ106XG5cdFx0XHRcdHJldHVybiB0aGlzLlRIRU1FX0dFTkVSSUNfQ0xBU1NfTkFNRTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuVEhFTUVfRkFCUklDX0NMQVNTX05BTUU7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlUm93Q29sb3JpbmdDbGFzc05hbWUoY29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nIHwgc3RyaW5nKTogc3RyaW5nIHtcblx0XHRzd2l0Y2ggKGNvbG9yaW5nKSB7XG5cdFx0XHRjYXNlIFNjaGVtYVJvd0NvbG9yaW5nLk9ERDpcblx0XHRcdGNhc2UgU2NoZW1hUm93Q29sb3JpbmdbU2NoZW1hUm93Q29sb3JpbmcuT0REXTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuUk9XX0NPTE9SSU5HX09ERDtcblxuXHRcdFx0Y2FzZSBTY2hlbWFSb3dDb2xvcmluZy5FVkVOOlxuXHRcdFx0Y2FzZSBTY2hlbWFSb3dDb2xvcmluZ1tTY2hlbWFSb3dDb2xvcmluZy5FVkVOXTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuUk9XX0NPTE9SSU5HX0VWRU47XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlUm93Q29sb3JpbmdDbGFzc2VzKCk6IHZvaWQge1xuXHRcdE9iamVjdC5rZXlzKFNjaGVtYVJvd0NvbG9yaW5nKVxuXHRcdFx0ICAubWFwKChrZXk6IHN0cmluZykgPT4gU2NoZW1hUm93Q29sb3Jpbmdba2V5XSlcblx0XHRcdCAgLm1hcCgoY29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKSA9PiB0aGlzLnJlc29sdmVSb3dDb2xvcmluZ0NsYXNzTmFtZShjb2xvcmluZykpXG5cdFx0XHQgIC5maWx0ZXIoKGNsYXNzTmFtZTogc3RyaW5nKSA9PiAhIWNsYXNzTmFtZSlcblx0XHRcdCAgLmZvckVhY2goKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdCAgdGhpcy5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuXHRcdFx0ICB9KTtcblx0fVxuXG5cdHByaXZhdGUgYWRkQ2xhc3MoY3NzQ2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoY3NzQ2xhc3NOYW1lKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuY3NzSG9zdFJlZi5uYXRpdmVFbGVtZW50LCBjc3NDbGFzc05hbWUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlQ2xhc3MoY3NzQ2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoY3NzQ2xhc3NOYW1lKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuY3NzSG9zdFJlZi5uYXRpdmVFbGVtZW50LCBjc3NDbGFzc05hbWUpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=