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
export class SchemaCommandService {
    /**
     * @param {?} schemaDispatcher
     * @param {?} schemaQueryService
     */
    constructor(schemaDispatcher, schemaQueryService) {
        this.schemaDispatcher = schemaDispatcher;
        this.schemaQueryService = schemaQueryService;
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    setSchema(height, structureId = globalStructureId) {
        this.schemaDispatcher.setSchema(structureId, height);
    }
    /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    setHeight(height, structureId = globalStructureId) {
        this.schemaDispatcher.setSchema(structureId, height);
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    changeVerticalGrid(enabled, structureId = globalStructureId) {
        this.schemaDispatcher.changeVerticalGrid(structureId, enabled);
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    changeHorizontalGrid(enabled, structureId = globalStructureId) {
        this.schemaDispatcher.changeHorizontalGrid(structureId, enabled);
    }
    /**
     * @param {?} theme
     * @param {?=} structureId
     * @return {?}
     */
    setTheme(theme, structureId = globalStructureId) {
        this.schemaDispatcher.setTheme(structureId, theme);
    }
    /**
     * @param {?} coloring
     * @param {?=} structureId
     * @return {?}
     */
    setRowColoring(coloring, structureId = globalStructureId) {
        this.schemaDispatcher.setRowColoring(structureId, coloring);
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    changeTopHeader(enabled, structureId = globalStructureId) {
        this.schemaDispatcher.changeTopHeader(structureId, enabled);
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    changeBottomHeader(enabled, structureId = globalStructureId) {
        this.schemaDispatcher.changeBottomHeader(structureId, enabled);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    toggleVerticalGrid(structureId = globalStructureId) {
        this.schemaQueryService
            .onCssClasses(structureId)
            .pipe(map((/**
         * @param {?} css
         * @return {?}
         */
        (css) => css.verticalGrid)), filter((/**
         * @param {?} grid
         * @return {?}
         */
        (grid) => grid !== undefined)), take(1), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} grid
         * @return {?}
         */
        (grid) => {
            this.changeVerticalGrid(!grid, structureId);
        }));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    toggleHorizontalGrid(structureId = globalStructureId) {
        this.schemaQueryService
            .onCssClasses(structureId)
            .pipe(map((/**
         * @param {?} css
         * @return {?}
         */
        (css) => css.horizontalGrid)), filter((/**
         * @param {?} grid
         * @return {?}
         */
        (grid) => grid !== undefined)), take(1), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} grid
         * @return {?}
         */
        (grid) => {
            this.changeHorizontalGrid(!grid, structureId);
        }));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    toggleTopHeader(structureId = globalStructureId) {
        this.schemaQueryService
            .onColumnHeader(structureId)
            .pipe(map((/**
         * @param {?} columnHeader
         * @return {?}
         */
        (columnHeader) => columnHeader.isTopHeaderEnabled())), take(1), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.changeTopHeader(!enabled, structureId);
        }));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    toggleBottomHeader(structureId = globalStructureId) {
        this.schemaQueryService
            .onColumnHeader(structureId)
            .pipe(map((/**
         * @param {?} columnHeader
         * @return {?}
         */
        (columnHeader) => columnHeader.isBottomHeaderEnabled())), take(1), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.changeBottomHeader(!enabled, structureId);
        }));
    }
}
SchemaCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaCommandService.ctorParameters = () => [
    { type: SchemaDispatcher },
    { type: SchemaReadModelService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc2NoZW1hL3NjaGVtYS1jb21tYW5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFRckUsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFJaEMsWUFBb0IsZ0JBQWtDLEVBQzNDLGtCQUEwQztRQURqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzNDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBd0I7UUFIN0MsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBSTNDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzdCLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxNQUFjLEVBQUUsY0FBMkIsaUJBQWlCO1FBQ3JFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxNQUFjLEVBQUUsY0FB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QUM1RSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDNUI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM3QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsY0FBMkIsaUJBQWlCO1FBQzlELElBQUksQ0FBQyxrQkFBa0I7YUFDckIsY0FBYyxDQUFDLFdBQVcsQ0FBQzthQUMzQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsWUFBZ0MsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLEVBQUMsRUFDL0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQzVCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsT0FBZ0IsRUFBRSxFQUFFO1lBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNoRCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQWxHRCxVQUFVOzs7O1lBVkYsZ0JBQWdCO1lBQ2hCLHNCQUFzQjs7Ozs7OztJQVk5Qiw0Q0FBMkM7Ozs7O0lBRS9CLGdEQUEwQzs7Ozs7SUFDbkQsa0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTY2hlbWFEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS9jb21tYW5kL3NjaGVtYS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuL3NjaGVtYS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IGdsb2JhbFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2dsb2JhbC1zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvcmVhZC9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYUNvbHVtbkhlYWRlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvcmVhZC9zY2hlbWEtY29sdW1uLWhlYWRlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYUNvbW1hbmRTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzY2hlbWFEaXNwYXRjaGVyOiBTY2hlbWFEaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHNjaGVtYVF1ZXJ5U2VydmljZTogU2NoZW1hUmVhZE1vZGVsU2VydmljZSkge1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKClcblx0fVxuXG5cdHNldFNjaGVtYShoZWlnaHQ6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuc2V0U2NoZW1hKHN0cnVjdHVyZUlkLCBoZWlnaHQpO1xuXHR9XG5cblx0c2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5zZXRTY2hlbWEoc3RydWN0dXJlSWQsIGhlaWdodCk7XG5cdH1cblxuXHRjaGFuZ2VWZXJ0aWNhbEdyaWQoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuY2hhbmdlVmVydGljYWxHcmlkKHN0cnVjdHVyZUlkLCBlbmFibGVkKTtcblx0fVxuXG5cdGNoYW5nZUhvcml6b250YWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLmNoYW5nZUhvcml6b250YWxHcmlkKHN0cnVjdHVyZUlkLCBlbmFibGVkKTtcblx0fVxuXG5cdHNldFRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuc2V0VGhlbWUoc3RydWN0dXJlSWQsIHRoZW1lKTtcblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKGNvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuc2V0Um93Q29sb3Jpbmcoc3RydWN0dXJlSWQsIGNvbG9yaW5nKTtcblx0fVxuXG5cdGNoYW5nZVRvcEhlYWRlcihlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5jaGFuZ2VUb3BIZWFkZXIoc3RydWN0dXJlSWQsIGVuYWJsZWQpO1xuXHR9XG5cblx0Y2hhbmdlQm90dG9tSGVhZGVyKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLmNoYW5nZUJvdHRvbUhlYWRlcihzdHJ1Y3R1cmVJZCwgZW5hYmxlZCk7XG5cdH1cblxuXHR0b2dnbGVWZXJ0aWNhbEdyaWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYVF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uQ3NzQ2xhc3NlcyhzdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRtYXAoKGNzczogU2NoZW1hQ3NzQ2xhc3MpID0+IGNzcy52ZXJ0aWNhbEdyaWQpLFxuXHRcdFx0XHRmaWx0ZXIoKGdyaWQ6IGJvb2xlYW4pID0+IGdyaWQgIT09IHVuZGVmaW5lZCksXG5cdFx0XHRcdHRha2UoMSksXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGdyaWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5jaGFuZ2VWZXJ0aWNhbEdyaWQoIWdyaWQsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0dG9nZ2xlSG9yaXpvbnRhbEdyaWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYVF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uQ3NzQ2xhc3NlcyhzdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRtYXAoKGNzczogU2NoZW1hQ3NzQ2xhc3MpID0+IGNzcy5ob3Jpem9udGFsR3JpZCksXG5cdFx0XHRcdGZpbHRlcigoZ3JpZDogYm9vbGVhbikgPT4gZ3JpZCAhPT0gdW5kZWZpbmVkKSxcblx0XHRcdFx0dGFrZSgxKSxcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZ3JpZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmNoYW5nZUhvcml6b250YWxHcmlkKCFncmlkLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRvZ2dsZVRvcEhlYWRlcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hUXVlcnlTZXJ2aWNlXG5cdFx0XHQub25Db2x1bW5IZWFkZXIoc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0bWFwKChjb2x1bW5IZWFkZXI6IFNjaGVtYUNvbHVtbkhlYWRlcikgPT4gY29sdW1uSGVhZGVyLmlzVG9wSGVhZGVyRW5hYmxlZCgpKSxcblx0XHRcdFx0dGFrZSgxKSxcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmNoYW5nZVRvcEhlYWRlcighZW5hYmxlZCwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR0b2dnbGVCb3R0b21IZWFkZXIoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYVF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uQ29sdW1uSGVhZGVyKHN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdG1hcCgoY29sdW1uSGVhZGVyOiBTY2hlbWFDb2x1bW5IZWFkZXIpID0+IGNvbHVtbkhlYWRlci5pc0JvdHRvbUhlYWRlckVuYWJsZWQoKSksXG5cdFx0XHRcdHRha2UoMSksXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5jaGFuZ2VCb3R0b21IZWFkZXIoIWVuYWJsZWQsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==