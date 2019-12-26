/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map, take, takeUntil } from 'rxjs/operators';
import { SchemaDispatcher } from '../../domain/schema/command/schema.dispatcher';
import { SchemaReadModelService } from './schema-read-model.service';
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
            .onCssClasses(structureId)
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
            .onCssClasses(structureId)
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
            .onColumnHeader(structureId)
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
            .onColumnHeader(structureId)
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
        { type: SchemaReadModelService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc2NoZW1hL3NjaGVtYS1jb21tYW5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFPckU7SUFLQyw4QkFBb0IsZ0JBQWtDLEVBQzNDLGtCQUEwQztRQURqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzNDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBd0I7UUFIN0MsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBSTNDLENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDN0IsQ0FBQzs7Ozs7O0lBRUQsd0NBQVM7Ozs7O0lBQVQsVUFBVSxNQUFjLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDckUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBRUQsd0NBQVM7Ozs7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LENBQUM7SUFDTCxDQUFDOztnQkFsR0QsVUFBVTs7OztnQkFWRixnQkFBZ0I7Z0JBQ2hCLHNCQUFzQjs7SUE2Ry9CLDJCQUFDO0NBQUEsQUFwR0QsSUFvR0M7U0FuR1ksb0JBQW9COzs7Ozs7SUFFaEMsNENBQTJDOzs7OztJQUUvQixnREFBMEM7Ozs7O0lBQ25ELGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU2NoZW1hRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvY29tbWFuZC9zY2hlbWEuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi9zY2hlbWEtcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9nbG9iYWwtc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3MgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hL3JlYWQvc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFDb2x1bW5IZWFkZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hL3JlYWQvc2NoZW1hLWNvbHVtbi1oZWFkZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFDb21tYW5kU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2NoZW1hRGlzcGF0Y2hlcjogU2NoZW1hRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSBzY2hlbWFRdWVyeVNlcnZpY2U6IFNjaGVtYVJlYWRNb2RlbFNlcnZpY2UpIHtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpXG5cdH1cblxuXHRzZXRTY2hlbWEoaGVpZ2h0OiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFNjaGVtYShzdHJ1Y3R1cmVJZCwgaGVpZ2h0KTtcblx0fVxuXG5cdHNldEhlaWdodChoZWlnaHQ6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuc2V0U2NoZW1hKHN0cnVjdHVyZUlkLCBoZWlnaHQpO1xuXHR9XG5cblx0Y2hhbmdlVmVydGljYWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLmNoYW5nZVZlcnRpY2FsR3JpZChzdHJ1Y3R1cmVJZCwgZW5hYmxlZCk7XG5cdH1cblxuXHRjaGFuZ2VIb3Jpem9udGFsR3JpZChlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5jaGFuZ2VIb3Jpem9udGFsR3JpZChzdHJ1Y3R1cmVJZCwgZW5hYmxlZCk7XG5cdH1cblxuXHRzZXRUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFRoZW1lKHN0cnVjdHVyZUlkLCB0aGVtZSk7XG5cdH1cblxuXHRzZXRSb3dDb2xvcmluZyhjb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFJvd0NvbG9yaW5nKHN0cnVjdHVyZUlkLCBjb2xvcmluZyk7XG5cdH1cblxuXHRjaGFuZ2VUb3BIZWFkZXIoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuY2hhbmdlVG9wSGVhZGVyKHN0cnVjdHVyZUlkLCBlbmFibGVkKTtcblx0fVxuXG5cdGNoYW5nZUJvdHRvbUhlYWRlcihlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5jaGFuZ2VCb3R0b21IZWFkZXIoc3RydWN0dXJlSWQsIGVuYWJsZWQpO1xuXHR9XG5cblx0dG9nZ2xlVmVydGljYWxHcmlkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFRdWVyeVNlcnZpY2Vcblx0XHRcdC5vbkNzc0NsYXNzZXMoc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0bWFwKChjc3M6IFNjaGVtYUNzc0NsYXNzKSA9PiBjc3MudmVydGljYWxHcmlkKSxcblx0XHRcdFx0ZmlsdGVyKChncmlkOiBib29sZWFuKSA9PiBncmlkICE9PSB1bmRlZmluZWQpLFxuXHRcdFx0XHR0YWtlKDEpLFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChncmlkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2hhbmdlVmVydGljYWxHcmlkKCFncmlkLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRvZ2dsZUhvcml6b250YWxHcmlkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFRdWVyeVNlcnZpY2Vcblx0XHRcdC5vbkNzc0NsYXNzZXMoc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0bWFwKChjc3M6IFNjaGVtYUNzc0NsYXNzKSA9PiBjc3MuaG9yaXpvbnRhbEdyaWQpLFxuXHRcdFx0XHRmaWx0ZXIoKGdyaWQ6IGJvb2xlYW4pID0+IGdyaWQgIT09IHVuZGVmaW5lZCksXG5cdFx0XHRcdHRha2UoMSksXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGdyaWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5jaGFuZ2VIb3Jpem9udGFsR3JpZCghZ3JpZCwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR0b2dnbGVUb3BIZWFkZXIoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYVF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uQ29sdW1uSGVhZGVyKHN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdG1hcCgoY29sdW1uSGVhZGVyOiBTY2hlbWFDb2x1bW5IZWFkZXIpID0+IGNvbHVtbkhlYWRlci5pc1RvcEhlYWRlckVuYWJsZWQoKSksXG5cdFx0XHRcdHRha2UoMSksXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5jaGFuZ2VUb3BIZWFkZXIoIWVuYWJsZWQsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0dG9nZ2xlQm90dG9tSGVhZGVyKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFRdWVyeVNlcnZpY2Vcblx0XHRcdC5vbkNvbHVtbkhlYWRlcihzdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRtYXAoKGNvbHVtbkhlYWRlcjogU2NoZW1hQ29sdW1uSGVhZGVyKSA9PiBjb2x1bW5IZWFkZXIuaXNCb3R0b21IZWFkZXJFbmFibGVkKCkpLFxuXHRcdFx0XHR0YWtlKDEpLFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2hhbmdlQm90dG9tSGVhZGVyKCFlbmFibGVkLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9KTtcblx0fVxuXG59XG4iXX0=