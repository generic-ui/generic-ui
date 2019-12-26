/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SchemaReadModelService } from '../../ui-api/schema/schema-read-model.service';
import { SchemaTheme } from '../../domain/schema/schema-theme';
import { SchemaRowColoring } from '../../domain/schema/schema-row-coloring';
export class SchemaCssClassManager {
    /**
     * @param {?} rendererFactory2
     * @param {?} schemaQueryService
     */
    constructor(rendererFactory2, schemaQueryService) {
        this.rendererFactory2 = rendererFactory2;
        this.schemaQueryService = schemaQueryService;
        this.VERTICAL_GRID_CLASS_NAME = 'gui-vertical-grid';
        this.HORIZONTAL_GRID_CLASS_NAME = 'gui-horizontal-grid';
        this.THEME_FABRIC_CLASS_NAME = 'gui-fabric';
        this.THEME_MATERIAL_CLASS_NAME = 'gui-material';
        this.THEME_LIGHT_CLASS_NAME = 'gui-light';
        this.THEME_DARK_CLASS_NAME = 'gui-dark';
        this.ROW_COLORING_ODD = 'gui-rows-odd';
        this.ROW_COLORING_EVEN = 'gui-rows-even';
        this.cssClass = null;
        this.unsubscribe$ = new Subject();
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @param {?} elementRef
     * @param {?} structureId
     * @return {?}
     */
    init(elementRef, structureId) {
        this.cssHostRef = elementRef;
        this.schemaQueryService
            .onCssClasses(structureId)
            .pipe(takeUntil(this.unsubscribe$))
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
    { type: SchemaReadModelService }
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
    SchemaCssClassManager.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.rendererFactory2;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.schemaQueryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzcy5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3NjaGVtYS9zY2hlbWEtY3NzLWNsYXNzLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQXdCLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRXZGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUk1RSxNQUFNLE9BQU8scUJBQXFCOzs7OztJQTBCakMsWUFBb0IsZ0JBQWtDLEVBQzNDLGtCQUEwQztRQURqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzNDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBd0I7UUF6QnBDLDZCQUF3QixHQUFHLG1CQUFtQixDQUFDO1FBRS9DLCtCQUEwQixHQUFHLHFCQUFxQixDQUFDO1FBRW5ELDRCQUF1QixHQUFHLFlBQVksQ0FBQztRQUV2Qyw4QkFBeUIsR0FBRyxjQUFjLENBQUM7UUFFM0MsMkJBQXNCLEdBQUcsV0FBVyxDQUFDO1FBRXJDLDBCQUFxQixHQUFHLFVBQVUsQ0FBQztRQUVuQyxxQkFBZ0IsR0FBRyxjQUFjLENBQUM7UUFFbEMsc0JBQWlCLEdBQUcsZUFBZSxDQUFDO1FBSTdDLGFBQVEsR0FBbUIsSUFBSSxDQUFDO1FBSWhDLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUlwQyxJQUFJLENBQUMsUUFBUSxHQUFHLElB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LFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDdkU7SUFDRixDQUFDOzs7WUEzS0QsVUFBVTs7OztZQVg0QyxnQkFBZ0I7WUFLOUQsc0JBQXNCOzs7Ozs7O0lBUzlCLHlEQUFnRTs7Ozs7SUFFaEUsMkRBQW9FOzs7OztJQUVwRSx3REFBd0Q7Ozs7O0lBRXhELDBEQUE0RDs7Ozs7SUFFNUQsdURBQXNEOzs7OztJQUV0RCxzREFBb0Q7Ozs7O0lBRXBELGlEQUFtRDs7Ozs7SUFFbkQsa0RBQXFEOzs7OztJQUVyRCx5Q0FBcUM7Ozs7O0lBRXJDLHlDQUF3Qzs7Ozs7SUFFeEMsMkNBQStCOzs7OztJQUUvQiw2Q0FBcUM7Ozs7O0lBRXpCLGlEQUEwQzs7Ozs7SUFDbkQsbURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3MgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hL3JlYWQvc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3NjaGVtYS9zY2hlbWEtcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS9zY2hlbWEtcm93LWNvbG9yaW5nJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IFZFUlRJQ0FMX0dSSURfQ0xBU1NfTkFNRSA9ICdndWktdmVydGljYWwtZ3JpZCc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBIT1JJWk9OVEFMX0dSSURfQ0xBU1NfTkFNRSA9ICdndWktaG9yaXpvbnRhbC1ncmlkJztcblxuXHRwcml2YXRlIHJlYWRvbmx5IFRIRU1FX0ZBQlJJQ19DTEFTU19OQU1FID0gJ2d1aS1mYWJyaWMnO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgVEhFTUVfTUFURVJJQUxfQ0xBU1NfTkFNRSA9ICdndWktbWF0ZXJpYWwnO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgVEhFTUVfTElHSFRfQ0xBU1NfTkFNRSA9ICdndWktbGlnaHQnO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgVEhFTUVfREFSS19DTEFTU19OQU1FID0gJ2d1aS1kYXJrJztcblxuXHRwcml2YXRlIHJlYWRvbmx5IFJPV19DT0xPUklOR19PREQgPSAnZ3VpLXJvd3Mtb2RkJztcblxuXHRwcml2YXRlIHJlYWRvbmx5IFJPV19DT0xPUklOR19FVkVOID0gJ2d1aS1yb3dzLWV2ZW4nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMjtcblxuXHRwcml2YXRlIGNzc0NsYXNzOiBTY2hlbWFDc3NDbGFzcyA9IG51bGw7XG5cblx0cHJpdmF0ZSBjc3NIb3N0UmVmOiBFbGVtZW50UmVmO1xuXG5cdHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTI6IFJlbmRlcmVyRmFjdG9yeTIsXG5cdFx0XHRcdHByaXZhdGUgc2NoZW1hUXVlcnlTZXJ2aWNlOiBTY2hlbWFSZWFkTW9kZWxTZXJ2aWNlKSB7XG5cdFx0dGhpcy5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5Mi5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0aW5pdChlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMuY3NzSG9zdFJlZiA9IGVsZW1lbnRSZWY7XG5cblx0XHR0aGlzLnNjaGVtYVF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uQ3NzQ2xhc3NlcyhzdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjbGFzc2VzOiBTY2hlbWFDc3NDbGFzcykgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGRpZmYgPSB0aGlzLnVwZGF0ZVN0YXRlKGNsYXNzZXMpO1xuXG5cdFx0XHRcdHRoaXMucmVuZGVyQ3NzQ2xhc3NlcyhkaWZmKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVTdGF0ZShjc3M6IFNjaGVtYUNzc0NsYXNzKTogUGFydGlhbDxTY2hlbWFDc3NDbGFzcz4ge1xuXG5cdFx0aWYgKCF0aGlzLmNzc0NsYXNzKSB7XG5cdFx0XHR0aGlzLmNzc0NsYXNzID0gY3NzO1xuXHRcdFx0cmV0dXJuIHRoaXMuY3NzQ2xhc3M7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0bGV0IGRpZmYgPSB7fTtcblxuXHRcdFx0T2JqZWN0LmtleXModGhpcy5jc3NDbGFzcylcblx0XHRcdFx0ICAuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHQgIGlmIChjc3Nba2V5XSAhPT0gdGhpcy5jc3NDbGFzc1trZXldKSB7XG5cdFx0XHRcdFx0XHQgIGRpZmZba2V5XSA9IGNzc1trZXldO1xuXHRcdFx0XHRcdCAgfVxuXHRcdFx0XHQgIH0pO1xuXG5cdFx0XHR0aGlzLmNzc0NsYXNzID0gY3NzO1xuXG5cdFx0XHRyZXR1cm4gZGlmZjtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbmRlckNzc0NsYXNzZXMoZGlmZjogUGFydGlhbDxTY2hlbWFDc3NDbGFzcz4pOiB2b2lkIHtcblxuXHRcdGlmIChkaWZmLmhhc093blByb3BlcnR5KCd2ZXJ0aWNhbEdyaWQnKSkge1xuXHRcdFx0dGhpcy50b2dnbGVDc3NDbGFzcyhkaWZmLnZlcnRpY2FsR3JpZCwgdGhpcy5WRVJUSUNBTF9HUklEX0NMQVNTX05BTUUpO1xuXHRcdH1cblxuXHRcdGlmIChkaWZmLmhhc093blByb3BlcnR5KCdob3Jpem9udGFsR3JpZCcpKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZUNzc0NsYXNzKGRpZmYuaG9yaXpvbnRhbEdyaWQsIHRoaXMuSE9SSVpPTlRBTF9HUklEX0NMQVNTX05BTUUpO1xuXHRcdH1cblxuXHRcdGlmIChkaWZmLmhhc093blByb3BlcnR5KCd0aGVtZScpKSB7XG5cdFx0XHR0aGlzLnJlbW92ZVRoZW1lQ3NzQ2xhc3NlcygpO1xuXHRcdFx0dGhpcy5hZGRDbGFzcyh0aGlzLnJlc29sdmVUaGVtZUNsYXNzTmFtZShkaWZmLnRoZW1lKSk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpZmYuaGFzT3duUHJvcGVydHkoJ3Jvd0NvbG9yaW5nJykpIHtcblx0XHRcdHRoaXMucmVtb3ZlUm93Q29sb3JpbmdDbGFzc2VzKCk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKHRoaXMucmVzb2x2ZVJvd0NvbG9yaW5nQ2xhc3NOYW1lKGRpZmYucm93Q29sb3JpbmcpKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHRvZ2dsZUNzc0NsYXNzKHRvZ2dsZTogYm9vbGVhbiwgY3NzQ2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAodG9nZ2xlKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKGNzc0NsYXNzTmFtZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoY3NzQ2xhc3NOYW1lKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZVRoZW1lQ3NzQ2xhc3NlcygpOiB2b2lkIHtcblx0XHRPYmplY3Qua2V5cyhTY2hlbWFUaGVtZSlcblx0XHRcdCAgLm1hcCgoa2V5OiBzdHJpbmcpID0+IFNjaGVtYVRoZW1lW2tleV0pXG5cdFx0XHQgIC5tYXAoKHRoZW1lOiBTY2hlbWFUaGVtZSkgPT4gdGhpcy5yZXNvbHZlVGhlbWVDbGFzc05hbWUodGhlbWUpKVxuXHRcdFx0ICAuZmlsdGVyKChjbGFzc05hbWU6IHN0cmluZykgPT4gISFjbGFzc05hbWUpXG5cdFx0XHQgIC5mb3JFYWNoKChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHQgIHRoaXMucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcblx0XHRcdCAgfSk7XG5cdH1cblxuXHRwcml2YXRlIHJlc29sdmVUaGVtZUNsYXNzTmFtZSh0aGVtZTogU2NoZW1hVGhlbWUgfCBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdHN3aXRjaCAodGhlbWUpIHtcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuRkFCUklDOlxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZVtTY2hlbWFUaGVtZS5GQUJSSUNdOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5USEVNRV9GQUJSSUNfQ0xBU1NfTkFNRTtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5NQVRFUklBTDpcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWVbU2NoZW1hVGhlbWUuTUFURVJJQUxdOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5USEVNRV9NQVRFUklBTF9DTEFTU19OQU1FO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkxJR0hUOlxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZVtTY2hlbWFUaGVtZS5MSUdIVF06XG5cdFx0XHRcdHJldHVybiB0aGlzLlRIRU1FX0xJR0hUX0NMQVNTX05BTUU7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuREFSSzpcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWVbU2NoZW1hVGhlbWUuREFSS106XG5cdFx0XHRcdHJldHVybiB0aGlzLlRIRU1FX0RBUktfQ0xBU1NfTkFNRTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuVEhFTUVfRkFCUklDX0NMQVNTX05BTUU7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlUm93Q29sb3JpbmdDbGFzc05hbWUoY29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nIHwgc3RyaW5nKTogc3RyaW5nIHtcblx0XHRzd2l0Y2ggKGNvbG9yaW5nKSB7XG5cdFx0XHRjYXNlIFNjaGVtYVJvd0NvbG9yaW5nLk9ERDpcblx0XHRcdGNhc2UgU2NoZW1hUm93Q29sb3JpbmdbU2NoZW1hUm93Q29sb3JpbmcuT0REXTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuUk9XX0NPTE9SSU5HX09ERDtcblxuXHRcdFx0Y2FzZSBTY2hlbWFSb3dDb2xvcmluZy5FVkVOOlxuXHRcdFx0Y2FzZSBTY2hlbWFSb3dDb2xvcmluZ1tTY2hlbWFSb3dDb2xvcmluZy5FVkVOXTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuUk9XX0NPTE9SSU5HX0VWRU47XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlUm93Q29sb3JpbmdDbGFzc2VzKCk6IHZvaWQge1xuXHRcdE9iamVjdC5rZXlzKFNjaGVtYVJvd0NvbG9yaW5nKVxuXHRcdFx0ICAubWFwKChrZXk6IHN0cmluZykgPT4gU2NoZW1hUm93Q29sb3Jpbmdba2V5XSlcblx0XHRcdCAgLm1hcCgoY29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKSA9PiB0aGlzLnJlc29sdmVSb3dDb2xvcmluZ0NsYXNzTmFtZShjb2xvcmluZykpXG5cdFx0XHQgIC5maWx0ZXIoKGNsYXNzTmFtZTogc3RyaW5nKSA9PiAhIWNsYXNzTmFtZSlcblx0XHRcdCAgLmZvckVhY2goKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdCAgdGhpcy5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuXHRcdFx0ICB9KTtcblx0fVxuXG5cdHByaXZhdGUgYWRkQ2xhc3MoY3NzQ2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoY3NzQ2xhc3NOYW1lKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuY3NzSG9zdFJlZi5uYXRpdmVFbGVtZW50LCBjc3NDbGFzc05hbWUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlQ2xhc3MoY3NzQ2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoY3NzQ2xhc3NOYW1lKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuY3NzSG9zdFJlZi5uYXRpdmVFbGVtZW50LCBjc3NDbGFzc05hbWUpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=