/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '@generic-ui/hermes';
export class ListViewSelectorRepository extends Reactive {
    constructor() {
        super();
        this.selectorEnabled = new Map();
        this.selectorEnabled$ = new ReplaySubject();
    }
    /**
     * @param {?} selectorEnabled
     * @param {?} listViewId
     * @return {?}
     */
    setMode(selectorEnabled, listViewId) {
        this.next(selectorEnabled, listViewId);
    }
    /**
     * @param {?} listViewId
     * @return {?}
     */
    on(listViewId) {
        return this.selectorEnabled$
            .asObservable()
            .pipe(this.takeUntil(), map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(listViewId.toString());
        })), distinctUntilChanged());
    }
    /**
     * @private
     * @param {?} enabled
     * @param {?} listViewId
     * @return {?}
     */
    next(enabled, listViewId) {
        this.selectorEnabled.set(listViewId.toString(), enabled);
        this.selectorEnabled$.next(this.selectorEnabled);
    }
}
ListViewSelectorRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ListViewSelectorRepository.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewSelectorRepository.prototype.selectorEnabled;
    /**
     * @type {?}
     * @private
     */
    ListViewSelectorRepository.prototype.selectorEnabled$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LnNlbGVjdG9yLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2NvcmUvYXBpL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LnNlbGVjdG9yLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTTlDLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxRQUFRO0lBTXZEO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFMRCxvQkFBZSxHQUFHLElBQUksR0FBRyxFQUFtQixDQUFDO1FBRTdDLHFCQUFnQixHQUFHLElBQUksYUFBYSxFQUF3QixDQUFDO0lBSXJFLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxlQUF3QixFQUFFLFVBQXNCO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsRUFBRSxDQUFDLFVBQXNCO1FBRXhCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQjthQUN0QixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUNoQixHQUFHOzs7O1FBQUMsQ0FBQyxHQUF5QixFQUFFLEVBQUU7WUFDakMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOzs7Ozs7O0lBRU8sSUFBSSxDQUFDLE9BQWdCLEVBQUUsVUFBc0I7UUFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7OztZQS9CRCxVQUFVOzs7Ozs7Ozs7SUFHVixxREFBcUQ7Ozs7O0lBRXJELHNEQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9saXN0LXZpZXcuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIHNlbGVjdG9yRW5hYmxlZCA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xuXG5cdHByaXZhdGUgc2VsZWN0b3JFbmFibGVkJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIGJvb2xlYW4+PigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzZXRNb2RlKHNlbGVjdG9yRW5hYmxlZDogYm9vbGVhbiwgbGlzdFZpZXdJZDogTGlzdFZpZXdJZCk6IHZvaWQge1xuXHRcdHRoaXMubmV4dChzZWxlY3RvckVuYWJsZWQsIGxpc3RWaWV3SWQpO1xuXHR9XG5cblx0b24obGlzdFZpZXdJZDogTGlzdFZpZXdJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0b3JFbmFibGVkJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGhpcy50YWtlVW50aWwoKSxcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogTWFwPHN0cmluZywgYm9vbGVhbj4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KGxpc3RWaWV3SWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBuZXh0KGVuYWJsZWQ6IGJvb2xlYW4sIGxpc3RWaWV3SWQ6IExpc3RWaWV3SWQpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdG9yRW5hYmxlZC5zZXQobGlzdFZpZXdJZC50b1N0cmluZygpLCBlbmFibGVkKTtcblx0XHR0aGlzLnNlbGVjdG9yRW5hYmxlZCQubmV4dCh0aGlzLnNlbGVjdG9yRW5hYmxlZCk7XG5cdH1cblxufVxuIl19