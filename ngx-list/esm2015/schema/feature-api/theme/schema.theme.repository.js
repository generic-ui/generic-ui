/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '../../../common/cdk/reactive';
export class SchemaThemeRepository extends Reactive {
    constructor() {
        super();
        this.theme = new Map();
        this.theme$ = new ReplaySubject();
    }
    /**
     * @param {?} theme
     * @param {?} schemaId
     * @return {?}
     */
    setTheme(theme, schemaId) {
        this.next(theme, schemaId);
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    on(schemaId) {
        return this.theme$
            .asObservable()
            .pipe(this.takeUntil(), map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(schemaId.toString());
        })), distinctUntilChanged());
    }
    /**
     * @private
     * @param {?} theme
     * @param {?} schemaId
     * @return {?}
     */
    next(theme, schemaId) {
        this.theme.set(schemaId.toString(), theme);
        this.theme$.next(this.theme);
    }
}
SchemaThemeRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaThemeRepository.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaThemeRepository.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    SchemaThemeRepository.prototype.theme$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnRoZW1lLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInNjaGVtYS9mZWF0dXJlLWFwaS90aGVtZS9zY2hlbWEudGhlbWUucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFLeEQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFFBQVE7SUFNbEQ7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQUxELFVBQUssR0FBRyxJQUFJLEdBQUcsRUFBdUIsQ0FBQztRQUV2QyxXQUFNLEdBQUcsSUFBSSxhQUFhLEVBQTRCLENBQUM7SUFJL0QsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWtCLEVBQUUsUUFBa0I7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxFQUFFLENBQUMsUUFBa0I7UUFFcEIsT0FBTyxJQUFJLENBQUMsTUFBTTthQUNaLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLEVBQ2hCLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQTZCLEVBQUUsRUFBRTtZQUNyQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFDLEVBQ0Ysb0JBQW9CLEVBQUUsQ0FDdEIsQ0FBQztJQUNSLENBQUM7Ozs7Ozs7SUFFTyxJQUFJLENBQUMsS0FBa0IsRUFBRSxRQUFrQjtRQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQS9CRCxVQUFVOzs7Ozs7Ozs7SUFHVixzQ0FBK0M7Ozs7O0lBRS9DLHVDQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hVGhlbWVSZXBvc2l0b3J5IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgdGhlbWUgPSBuZXcgTWFwPHN0cmluZywgU2NoZW1hVGhlbWU+KCk7XG5cblx0cHJpdmF0ZSB0aGVtZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBTY2hlbWFUaGVtZT4+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHNldFRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSwgc2NoZW1hSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0dGhpcy5uZXh0KHRoZW1lLCBzY2hlbWFJZCk7XG5cdH1cblxuXHRvbihzY2hlbWFJZDogU2NoZW1hSWQpOiBPYnNlcnZhYmxlPFNjaGVtYVRoZW1lPiB7XG5cblx0XHRyZXR1cm4gdGhpcy50aGVtZSRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIHRoaXMudGFrZVVudGlsKCksXG5cdFx0XHRcdFx0ICAgbWFwKChtYXA6IE1hcDxzdHJpbmcsIFNjaGVtYVRoZW1lPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoc2NoZW1hSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBuZXh0KHRoZW1lOiBTY2hlbWFUaGVtZSwgc2NoZW1hSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0dGhpcy50aGVtZS5zZXQoc2NoZW1hSWQudG9TdHJpbmcoKSwgdGhlbWUpO1xuXHRcdHRoaXMudGhlbWUkLm5leHQodGhpcy50aGVtZSk7XG5cdH1cblxufVxuIl19