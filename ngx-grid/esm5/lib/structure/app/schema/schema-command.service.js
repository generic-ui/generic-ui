/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map, take, takeUntil } from 'rxjs/operators';
import { SchemaDispatcher } from '../../domain/schema/command/schema.dispatcher';
import { SchemaQueryService } from './schema-query.service';
import { globalStructureId } from '../../domain/global-structure-id';
var SchemaCommandService = /** @class */ (function () {
    function SchemaCommandService(schemaDispatcher, schemaQueryService) {
        this.schemaDispatcher = schemaDispatcher;
        this.schemaQueryService = schemaQueryService;
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    SchemaCommandService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.setSchema = /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    function (height, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaDispatcher.setSchema(structureId, height);
    };
    /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.setHeight = /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    function (height, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaDispatcher.setSchema(structureId, height);
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.changeVerticalGrid = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaDispatcher.changeVerticalGrid(structureId, enabled);
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.changeHorizontalGrid = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaDispatcher.changeHorizontalGrid(structureId, enabled);
    };
    /**
     * @param {?} theme
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.setTheme = /**
     * @param {?} theme
     * @param {?=} structureId
     * @return {?}
     */
    function (theme, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaDispatcher.setTheme(structureId, theme);
    };
    /**
     * @param {?} coloring
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.setRowColoring = /**
     * @param {?} coloring
     * @param {?=} structureId
     * @return {?}
     */
    function (coloring, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaDispatcher.setRowColoring(structureId, coloring);
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.changeTopHeader = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaDispatcher.changeTopHeader(structureId, enabled);
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.changeBottomHeader = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaDispatcher.changeBottomHeader(structureId, enabled);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.toggleVerticalGrid = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaQueryService
            .selectCssClasses(structureId)
            .pipe(map((/**
         * @param {?} css
         * @return {?}
         */
        function (css) { return css.verticalGrid; })), filter((/**
         * @param {?} grid
         * @return {?}
         */
        function (grid) { return grid !== undefined; })), take(1), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} grid
         * @return {?}
         */
        function (grid) {
            _this.changeVerticalGrid(!grid, structureId);
        }));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.toggleHorizontalGrid = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaQueryService
            .selectCssClasses(structureId)
            .pipe(map((/**
         * @param {?} css
         * @return {?}
         */
        function (css) { return css.horizontalGrid; })), filter((/**
         * @param {?} grid
         * @return {?}
         */
        function (grid) { return grid !== undefined; })), take(1), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} grid
         * @return {?}
         */
        function (grid) {
            _this.changeHorizontalGrid(!grid, structureId);
        }));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.toggleTopHeader = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaQueryService
            .selectColumnHeader(structureId)
            .pipe(map((/**
         * @param {?} columnHeader
         * @return {?}
         */
        function (columnHeader) { return columnHeader.isTopHeaderEnabled(); })), take(1), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.changeTopHeader(!enabled, structureId);
        }));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.toggleBottomHeader = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaQueryService
            .selectColumnHeader(structureId)
            .pipe(map((/**
         * @param {?} columnHeader
         * @return {?}
         */
        function (columnHeader) { return columnHeader.isBottomHeaderEnabled(); })), take(1), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.changeBottomHeader(!enabled, structureId);
        }));
    };
    SchemaCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaCommandService.ctorParameters = function () { return [
        { type: SchemaDispatcher },
        { type: SchemaQueryService }
    ]; };
    return SchemaCommandService;
}());
export { SchemaCommandService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaCommandService.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    SchemaCommandService.prototype.schemaDispatcher;
    /**
     * @type {?}
     * @private
     */
    SchemaCommandService.prototype.schemaQueryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9hcHAvc2NoZW1hL3NjaGVtYS1jb21tYW5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFPckU7SUFLQyw4QkFBb0IsZ0JBQWtDLEVBQzNDLGtCQUFzQztRQUQ3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzNDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFIekMsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBSTNDLENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDN0IsQ0FBQzs7Ozs7O0lBRUQsd0NBQVM7Ozs7O0lBQVQsVUFBVSxNQUFjLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDckUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBRUQsd0NBQVM7Ozs7O0lB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LEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWxHRCxVQUFVOzs7O2dCQVZGLGdCQUFnQjtnQkFDaEIsa0JBQWtCOztJQTZHM0IsMkJBQUM7Q0FBQSxBQXBHRCxJQW9HQztTQW5HWSxvQkFBb0I7Ozs7OztJQUVoQyw0Q0FBMkM7Ozs7O0lBRS9CLGdEQUEwQzs7Ozs7SUFDbkQsa0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTY2hlbWFEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS9jb21tYW5kL3NjaGVtYS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNjaGVtYVF1ZXJ5U2VydmljZSB9IGZyb20gJy4vc2NoZW1hLXF1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IGdsb2JhbFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2dsb2JhbC1zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvcXVlcnkvc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFDb2x1bW5IZWFkZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hL3F1ZXJ5L3NjaGVtYS1jb2x1bW4taGVhZGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hQ29tbWFuZFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNjaGVtYURpc3BhdGNoZXI6IFNjaGVtYURpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgc2NoZW1hUXVlcnlTZXJ2aWNlOiBTY2hlbWFRdWVyeVNlcnZpY2UpIHtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpXG5cdH1cblxuXHRzZXRTY2hlbWEoaGVpZ2h0OiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFNjaGVtYShzdHJ1Y3R1cmVJZCwgaGVpZ2h0KTtcblx0fVxuXG5cdHNldEhlaWdodChoZWlnaHQ6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuc2V0U2NoZW1hKHN0cnVjdHVyZUlkLCBoZWlnaHQpO1xuXHR9XG5cblx0Y2hhbmdlVmVydGljYWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLmNoYW5nZVZlcnRpY2FsR3JpZChzdHJ1Y3R1cmVJZCwgZW5hYmxlZCk7XG5cdH1cblxuXHRjaGFuZ2VIb3Jpem9udGFsR3JpZChlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5jaGFuZ2VIb3Jpem9udGFsR3JpZChzdHJ1Y3R1cmVJZCwgZW5hYmxlZCk7XG5cdH1cblxuXHRzZXRUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFRoZW1lKHN0cnVjdHVyZUlkLCB0aGVtZSk7XG5cdH1cblxuXHRzZXRSb3dDb2xvcmluZyhjb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFJvd0NvbG9yaW5nKHN0cnVjdHVyZUlkLCBjb2xvcmluZyk7XG5cdH1cblxuXHRjaGFuZ2VUb3BIZWFkZXIoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuY2hhbmdlVG9wSGVhZGVyKHN0cnVjdHVyZUlkLCBlbmFibGVkKTtcblx0fVxuXG5cdGNoYW5nZUJvdHRvbUhlYWRlcihlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5jaGFuZ2VCb3R0b21IZWFkZXIoc3RydWN0dXJlSWQsIGVuYWJsZWQpO1xuXHR9XG5cblx0dG9nZ2xlVmVydGljYWxHcmlkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFRdWVyeVNlcnZpY2Vcblx0XHRcdC5zZWxlY3RDc3NDbGFzc2VzKHN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdG1hcCgoY3NzOiBTY2hlbWFDc3NDbGFzcykgPT4gY3NzLnZlcnRpY2FsR3JpZCksXG5cdFx0XHRcdGZpbHRlcigoZ3JpZDogYm9vbGVhbikgPT4gZ3JpZCAhPT0gdW5kZWZpbmVkKSxcblx0XHRcdFx0dGFrZSgxKSxcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZ3JpZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmNoYW5nZVZlcnRpY2FsR3JpZCghZ3JpZCwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR0b2dnbGVIb3Jpem9udGFsR3JpZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hUXVlcnlTZXJ2aWNlXG5cdFx0XHQuc2VsZWN0Q3NzQ2xhc3NlcyhzdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRtYXAoKGNzczogU2NoZW1hQ3NzQ2xhc3MpID0+IGNzcy5ob3Jpem9udGFsR3JpZCksXG5cdFx0XHRcdGZpbHRlcigoZ3JpZDogYm9vbGVhbikgPT4gZ3JpZCAhPT0gdW5kZWZpbmVkKSxcblx0XHRcdFx0dGFrZSgxKSxcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZ3JpZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmNoYW5nZUhvcml6b250YWxHcmlkKCFncmlkLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRvZ2dsZVRvcEhlYWRlcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hUXVlcnlTZXJ2aWNlXG5cdFx0XHQuc2VsZWN0Q29sdW1uSGVhZGVyKHN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdG1hcCgoY29sdW1uSGVhZGVyOiBTY2hlbWFDb2x1bW5IZWFkZXIpID0+IGNvbHVtbkhlYWRlci5pc1RvcEhlYWRlckVuYWJsZWQoKSksXG5cdFx0XHRcdHRha2UoMSksXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5jaGFuZ2VUb3BIZWFkZXIoIWVuYWJsZWQsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0dG9nZ2xlQm90dG9tSGVhZGVyKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFRdWVyeVNlcnZpY2Vcblx0XHRcdC5zZWxlY3RDb2x1bW5IZWFkZXIoc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0bWFwKChjb2x1bW5IZWFkZXI6IFNjaGVtYUNvbHVtbkhlYWRlcikgPT4gY29sdW1uSGVhZGVyLmlzQm90dG9tSGVhZGVyRW5hYmxlZCgpKSxcblx0XHRcdFx0dGFrZSgxKSxcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmNoYW5nZUJvdHRvbUhlYWRlcighZW5hYmxlZCwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19