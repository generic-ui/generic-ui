/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '../../../../../common/cdk/reactive/reactive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3Lm1vZGUucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvY29yZS9hcGkvbW9kZS9saXN0LXZpZXcubW9kZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQU12RSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsUUFBUTtJQU1uRDtRQUNDLEtBQUssRUFBRSxDQUFDO1FBTEQsU0FBSSxHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO1FBRXZDLFVBQUssR0FBRyxJQUFJLGFBQWEsRUFBNkIsQ0FBQztJQUkvRCxDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBa0IsRUFBRSxVQUFzQjtRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELEVBQUUsQ0FBQyxVQUFzQjtRQUV4QixPQUFPLElBQUksQ0FBQyxLQUFLO2FBQ1gsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFDaEIsR0FBRzs7OztRQUFDLENBQUMsR0FBOEIsRUFBRSxFQUFFO1lBQ3RDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDLEVBQUMsRUFDRixvQkFBb0IsRUFBRSxDQUN0QixDQUFDO0lBQ1IsQ0FBQzs7Ozs7OztJQUVPLElBQUksQ0FBQyxJQUFrQixFQUFFLFVBQXNCO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7O1lBL0JELFVBQVU7Ozs7Ozs7OztJQUdWLHNDQUErQzs7Ozs7SUFFL0MsdUNBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlL3JlYWN0aXZlJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuLi8uLi9kb21haW4vbGlzdC12aWV3LmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIG1vZGUgPSBuZXcgTWFwPHN0cmluZywgTGlzdFZpZXdNb2RlPigpO1xuXG5cdHByaXZhdGUgbW9kZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBMaXN0Vmlld01vZGU+PigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzZXRNb2RlKG1vZGU6IExpc3RWaWV3TW9kZSwgbGlzdFZpZXdJZDogTGlzdFZpZXdJZCk6IHZvaWQge1xuXHRcdHRoaXMubmV4dChtb2RlLCBsaXN0Vmlld0lkKTtcblx0fVxuXG5cdG9uKGxpc3RWaWV3SWQ6IExpc3RWaWV3SWQpOiBPYnNlcnZhYmxlPExpc3RWaWV3TW9kZT4ge1xuXG5cdFx0cmV0dXJuIHRoaXMubW9kZSRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIHRoaXMudGFrZVVudGlsKCksXG5cdFx0XHRcdFx0ICAgbWFwKChtYXA6IE1hcDxzdHJpbmcsIExpc3RWaWV3TW9kZT4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KGxpc3RWaWV3SWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBuZXh0KG1vZGU6IExpc3RWaWV3TW9kZSwgbGlzdFZpZXdJZDogTGlzdFZpZXdJZCk6IHZvaWQge1xuXHRcdHRoaXMubW9kZS5zZXQobGlzdFZpZXdJZC50b1N0cmluZygpLCBtb2RlKTtcblx0XHR0aGlzLm1vZGUkLm5leHQodGhpcy5tb2RlKTtcblx0fVxuXG59XG4iXX0=