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
            .selectCssClasses(structureId)
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
            .selectCssClasses(structureId)
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
            .selectColumnHeader(structureId)
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
            .selectColumnHeader(structureId)
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
    { type: SchemaQueryService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9hcHAvc2NoZW1hL3NjaGVtYS1jb21tYW5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFRckUsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFJaEMsWUFBb0IsZ0JBQWtDLEVBQzNDLGtCQUFzQztRQUQ3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzNDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFIekMsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBSTNDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzdCLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxNQUFjLEVBQUUsY0FBMkIsaUJBQWlCO1FBQ3JFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxNQUFjLEVBQUUsY0FBMkIs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QyxFQUM1RSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDNUI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM3QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsY0FBMkIsaUJBQWlCO1FBQzlELElBQUksQ0FBQyxrQkFBa0I7YUFDckIsa0JBQWtCLENBQUMsV0FBVyxDQUFDO2FBQy9CLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxZQUFnQyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUUsRUFBQyxFQUMvRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDNUI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBbEdELFVBQVU7Ozs7WUFWRixnQkFBZ0I7WUFDaEIsa0JBQWtCOzs7Ozs7O0lBWTFCLDRDQUEyQzs7Ozs7SUFFL0IsZ0RBQTBDOzs7OztJQUNuRCxrREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNjaGVtYURpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hL2NvbW1hbmQvc2NoZW1hLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2NoZW1hUXVlcnlTZXJ2aWNlIH0gZnJvbSAnLi9zY2hlbWEtcXVlcnkuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgZ2xvYmFsU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vZ2xvYmFsLXN0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS9xdWVyeS9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYUNvbHVtbkhlYWRlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvcXVlcnkvc2NoZW1hLWNvbHVtbi1oZWFkZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFDb21tYW5kU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2NoZW1hRGlzcGF0Y2hlcjogU2NoZW1hRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSBzY2hlbWFRdWVyeVNlcnZpY2U6IFNjaGVtYVF1ZXJ5U2VydmljZSkge1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKClcblx0fVxuXG5cdHNldFNjaGVtYShoZWlnaHQ6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuc2V0U2NoZW1hKHN0cnVjdHVyZUlkLCBoZWlnaHQpO1xuXHR9XG5cblx0c2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5zZXRTY2hlbWEoc3RydWN0dXJlSWQsIGhlaWdodCk7XG5cdH1cblxuXHRjaGFuZ2VWZXJ0aWNhbEdyaWQoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuY2hhbmdlVmVydGljYWxHcmlkKHN0cnVjdHVyZUlkLCBlbmFibGVkKTtcblx0fVxuXG5cdGNoYW5nZUhvcml6b250YWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLmNoYW5nZUhvcml6b250YWxHcmlkKHN0cnVjdHVyZUlkLCBlbmFibGVkKTtcblx0fVxuXG5cdHNldFRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuc2V0VGhlbWUoc3RydWN0dXJlSWQsIHRoZW1lKTtcblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKGNvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuc2V0Um93Q29sb3Jpbmcoc3RydWN0dXJlSWQsIGNvbG9yaW5nKTtcblx0fVxuXG5cdGNoYW5nZVRvcEhlYWRlcihlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5jaGFuZ2VUb3BIZWFkZXIoc3RydWN0dXJlSWQsIGVuYWJsZWQpO1xuXHR9XG5cblx0Y2hhbmdlQm90dG9tSGVhZGVyKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLmNoYW5nZUJvdHRvbUhlYWRlcihzdHJ1Y3R1cmVJZCwgZW5hYmxlZCk7XG5cdH1cblxuXHR0b2dnbGVWZXJ0aWNhbEdyaWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYVF1ZXJ5U2VydmljZVxuXHRcdFx0LnNlbGVjdENzc0NsYXNzZXMoc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0bWFwKChjc3M6IFNjaGVtYUNzc0NsYXNzKSA9PiBjc3MudmVydGljYWxHcmlkKSxcblx0XHRcdFx0ZmlsdGVyKChncmlkOiBib29sZWFuKSA9PiBncmlkICE9PSB1bmRlZmluZWQpLFxuXHRcdFx0XHR0YWtlKDEpLFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChncmlkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2hhbmdlVmVydGljYWxHcmlkKCFncmlkLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRvZ2dsZUhvcml6b250YWxHcmlkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFRdWVyeVNlcnZpY2Vcblx0XHRcdC5zZWxlY3RDc3NDbGFzc2VzKHN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdG1hcCgoY3NzOiBTY2hlbWFDc3NDbGFzcykgPT4gY3NzLmhvcml6b250YWxHcmlkKSxcblx0XHRcdFx0ZmlsdGVyKChncmlkOiBib29sZWFuKSA9PiBncmlkICE9PSB1bmRlZmluZWQpLFxuXHRcdFx0XHR0YWtlKDEpLFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChncmlkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2hhbmdlSG9yaXpvbnRhbEdyaWQoIWdyaWQsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0dG9nZ2xlVG9wSGVhZGVyKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFRdWVyeVNlcnZpY2Vcblx0XHRcdC5zZWxlY3RDb2x1bW5IZWFkZXIoc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0bWFwKChjb2x1bW5IZWFkZXI6IFNjaGVtYUNvbHVtbkhlYWRlcikgPT4gY29sdW1uSGVhZGVyLmlzVG9wSGVhZGVyRW5hYmxlZCgpKSxcblx0XHRcdFx0dGFrZSgxKSxcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmNoYW5nZVRvcEhlYWRlcighZW5hYmxlZCwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR0b2dnbGVCb3R0b21IZWFkZXIoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYVF1ZXJ5U2VydmljZVxuXHRcdFx0LnNlbGVjdENvbHVtbkhlYWRlcihzdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRtYXAoKGNvbHVtbkhlYWRlcjogU2NoZW1hQ29sdW1uSGVhZGVyKSA9PiBjb2x1bW5IZWFkZXIuaXNCb3R0b21IZWFkZXJFbmFibGVkKCkpLFxuXHRcdFx0XHR0YWtlKDEpLFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2hhbmdlQm90dG9tSGVhZGVyKCFlbmFibGVkLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9KTtcblx0fVxuXG59XG4iXX0=