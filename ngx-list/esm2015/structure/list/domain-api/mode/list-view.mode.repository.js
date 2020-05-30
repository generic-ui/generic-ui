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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3Lm1vZGUucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZG9tYWluLWFwaS9tb2RlL2xpc3Qtdmlldy5tb2RlLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBTTNELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxRQUFRO0lBTW5EO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFMRCxTQUFJLEdBQUcsSUFBSSxHQUFHLEVBQXdCLENBQUM7UUFFdkMsVUFBSyxHQUFHLElBQUksYUFBYSxFQUE2QixDQUFDO0lBSS9ELENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxJQUFrQixFQUFFLFVBQXNCO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsRUFBRSxDQUFDLFVBQXNCO1FBRXhCLE9BQU8sSUFBSSxDQUFDLEtBQUs7YUFDWCxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUNoQixHQUFHOzs7O1FBQUMsQ0FBQyxHQUE4QixFQUFFLEVBQUU7WUFDdEMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOzs7Ozs7O0lBRU8sSUFBSSxDQUFDLElBQWtCLEVBQUUsVUFBc0I7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUEvQkQsVUFBVTs7Ozs7Ozs7O0lBR1Ysc0NBQStDOzs7OztJQUUvQyx1Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9saXN0LXZpZXcuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld01vZGVSZXBvc2l0b3J5IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgbW9kZSA9IG5ldyBNYXA8c3RyaW5nLCBMaXN0Vmlld01vZGU+KCk7XG5cblx0cHJpdmF0ZSBtb2RlJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIExpc3RWaWV3TW9kZT4+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHNldE1vZGUobW9kZTogTGlzdFZpZXdNb2RlLCBsaXN0Vmlld0lkOiBMaXN0Vmlld0lkKTogdm9pZCB7XG5cdFx0dGhpcy5uZXh0KG1vZGUsIGxpc3RWaWV3SWQpO1xuXHR9XG5cblx0b24obGlzdFZpZXdJZDogTGlzdFZpZXdJZCk6IE9ic2VydmFibGU8TGlzdFZpZXdNb2RlPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5tb2RlJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGhpcy50YWtlVW50aWwoKSxcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogTWFwPHN0cmluZywgTGlzdFZpZXdNb2RlPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQobGlzdFZpZXdJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIG5leHQobW9kZTogTGlzdFZpZXdNb2RlLCBsaXN0Vmlld0lkOiBMaXN0Vmlld0lkKTogdm9pZCB7XG5cdFx0dGhpcy5tb2RlLnNldChsaXN0Vmlld0lkLnRvU3RyaW5nKCksIG1vZGUpO1xuXHRcdHRoaXMubW9kZSQubmV4dCh0aGlzLm1vZGUpO1xuXHR9XG5cbn1cbiJdfQ==