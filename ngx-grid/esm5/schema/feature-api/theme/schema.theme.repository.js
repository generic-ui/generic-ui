/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '../../../common/cdk/reactive';
var SchemaThemeRepository = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaThemeRepository, _super);
    function SchemaThemeRepository() {
        var _this = _super.call(this) || this;
        _this.theme = new Map();
        _this.theme$ = new ReplaySubject();
        return _this;
    }
    /**
     * @param {?} theme
     * @param {?} schemaId
     * @return {?}
     */
    SchemaThemeRepository.prototype.setTheme = /**
     * @param {?} theme
     * @param {?} schemaId
     * @return {?}
     */
    function (theme, schemaId) {
        this.next(theme, schemaId);
    };
    /**
     * @param {?} schemaId
     * @return {?}
     */
    SchemaThemeRepository.prototype.on = /**
     * @param {?} schemaId
     * @return {?}
     */
    function (schemaId) {
        return this.theme$
            .asObservable()
            .pipe(this.takeUntil(), map((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.get(schemaId.toString());
        })), distinctUntilChanged());
    };
    /**
     * @private
     * @param {?} theme
     * @param {?} schemaId
     * @return {?}
     */
    SchemaThemeRepository.prototype.next = /**
     * @private
     * @param {?} theme
     * @param {?} schemaId
     * @return {?}
     */
    function (theme, schemaId) {
        this.theme.set(schemaId.toString(), theme);
        this.theme$.next(this.theme);
    };
    SchemaThemeRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaThemeRepository.ctorParameters = function () { return []; };
    return SchemaThemeRepository;
}(Reactive));
export { SchemaThemeRepository };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnRoZW1lLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInNjaGVtYS9mZWF0dXJlLWFwaS90aGVtZS9zY2hlbWEudGhlbWUucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSXhEO0lBQzJDLGlEQUFRO0lBTWxEO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBTk8sV0FBSyxHQUFHLElBQUksR0FBRyxFQUF1QixDQUFDO1FBRXZDLFlBQU0sR0FBRyxJQUFJLGFBQWEsRUFBNEIsQ0FBQzs7SUFJL0QsQ0FBQzs7Ozs7O0lBRUQsd0NBQVE7Ozs7O0lBQVIsVUFBUyxLQUFrQixFQUFFLFFBQWtCO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsa0NBQUU7Ozs7SUFBRixVQUFHLFFBQWtCO1FBRXBCLE9BQU8sSUFBSSxDQUFDLE1BQU07YUFDWixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUNoQixHQUFHOzs7O1FBQUMsVUFBQyxHQUE2QjtZQUNqQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFDLEVBQ0Ysb0JBQW9CLEVBQUUsQ0FDdEIsQ0FBQztJQUNSLENBQUM7Ozs7Ozs7SUFFTyxvQ0FBSTs7Ozs7O0lBQVosVUFBYSxLQUFrQixFQUFFLFFBQWtCO1FBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBL0JELFVBQVU7Ozs7SUFpQ1gsNEJBQUM7Q0FBQSxBQWpDRCxDQUMyQyxRQUFRLEdBZ0NsRDtTQWhDWSxxQkFBcUI7Ozs7OztJQUVqQyxzQ0FBK0M7Ozs7O0lBRS9DLHVDQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hVGhlbWVSZXBvc2l0b3J5IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgdGhlbWUgPSBuZXcgTWFwPHN0cmluZywgU2NoZW1hVGhlbWU+KCk7XG5cblx0cHJpdmF0ZSB0aGVtZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBTY2hlbWFUaGVtZT4+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHNldFRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSwgc2NoZW1hSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0dGhpcy5uZXh0KHRoZW1lLCBzY2hlbWFJZCk7XG5cdH1cblxuXHRvbihzY2hlbWFJZDogU2NoZW1hSWQpOiBPYnNlcnZhYmxlPFNjaGVtYVRoZW1lPiB7XG5cblx0XHRyZXR1cm4gdGhpcy50aGVtZSRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIHRoaXMudGFrZVVudGlsKCksXG5cdFx0XHRcdFx0ICAgbWFwKChtYXA6IE1hcDxzdHJpbmcsIFNjaGVtYVRoZW1lPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoc2NoZW1hSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBuZXh0KHRoZW1lOiBTY2hlbWFUaGVtZSwgc2NoZW1hSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0dGhpcy50aGVtZS5zZXQoc2NoZW1hSWQudG9TdHJpbmcoKSwgdGhlbWUpO1xuXHRcdHRoaXMudGhlbWUkLm5leHQodGhpcy50aGVtZSk7XG5cdH1cblxufVxuIl19