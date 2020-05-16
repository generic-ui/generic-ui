/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '../../../../common/cdk/reactive';
export class ListViewModeRepository extends Reactive {
    constructor() {
        super();
        this.mode = new Map();
        this.mode$ = new ReplaySubject();
    }
    /**
     * @param {?} mode
     * @param {?} listViewId
     * @return {?}
     */
    setMode(mode, listViewId) {
        this.next(mode, listViewId);
    }
    /**
     * @param {?} listViewId
     * @return {?}
     */
    on(listViewId) {
        return this.mode$
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
     * @param {?} mode
     * @param {?} listViewId
     * @return {?}
     */
    next(mode, listViewId) {
        this.mode.set(listViewId.toString(), mode);
        this.mode$.next(this.mode);
    }
}
ListViewModeRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ListViewModeRepository.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewModeRepository.prototype.mode;
    /**
     * @type {?}
     * @private
     */
    ListViewModeRepository.prototype.mode$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3Lm1vZGUucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZG9tYWluLWFwaS9tb2RlL2xpc3Qtdmlldy5tb2RlLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBTzNELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxRQUFRO0lBTW5EO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFMRCxTQUFJLEdBQUcsSUFBSSxHQUFHLEVBQXdCLENBQUM7UUFFdkMsVUFBSyxHQUFHLElBQUksYUFBYSxFQUE2QixDQUFDO0lBSS9ELENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxJQUFrQixFQUFFLFVBQXNCO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsRUFBRSxDQUFDLFVBQXNCO1FBRXhCLE9BQU8sSUFBSSxDQUFDLEtBQUs7YUFDWCxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUNoQixHQUFHOzs7O1FBQUMsQ0FBQyxHQUE4QixFQUFFLEVBQUU7WUFDdEMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOzs7Ozs7O0lBRU8sSUFBSSxDQUFDLElBQWtCLEVBQUUsVUFBc0I7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUEvQkQsVUFBVTs7Ozs7Ozs7O0lBR1Ysc0NBQStDOzs7OztJQUUvQyx1Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9saXN0LXZpZXcuaWQnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3TW9kZVJlcG9zaXRvcnkgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSBtb2RlID0gbmV3IE1hcDxzdHJpbmcsIExpc3RWaWV3TW9kZT4oKTtcblxuXHRwcml2YXRlIG1vZGUkID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgTGlzdFZpZXdNb2RlPj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c2V0TW9kZShtb2RlOiBMaXN0Vmlld01vZGUsIGxpc3RWaWV3SWQ6IExpc3RWaWV3SWQpOiB2b2lkIHtcblx0XHR0aGlzLm5leHQobW9kZSwgbGlzdFZpZXdJZCk7XG5cdH1cblxuXHRvbihsaXN0Vmlld0lkOiBMaXN0Vmlld0lkKTogT2JzZXJ2YWJsZTxMaXN0Vmlld01vZGU+IHtcblxuXHRcdHJldHVybiB0aGlzLm1vZGUkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICB0aGlzLnRha2VVbnRpbCgpLFxuXHRcdFx0XHRcdCAgIG1hcCgobWFwOiBNYXA8c3RyaW5nLCBMaXN0Vmlld01vZGU+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmdldChsaXN0Vmlld0lkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgbmV4dChtb2RlOiBMaXN0Vmlld01vZGUsIGxpc3RWaWV3SWQ6IExpc3RWaWV3SWQpOiB2b2lkIHtcblx0XHR0aGlzLm1vZGUuc2V0KGxpc3RWaWV3SWQudG9TdHJpbmcoKSwgbW9kZSk7XG5cdFx0dGhpcy5tb2RlJC5uZXh0KHRoaXMubW9kZSk7XG5cdH1cblxufVxuIl19