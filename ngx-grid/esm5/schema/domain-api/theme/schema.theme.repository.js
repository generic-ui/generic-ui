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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnRoZW1lLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInNjaGVtYS9kb21haW4tYXBpL3RoZW1lL3NjaGVtYS50aGVtZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJeEQ7SUFDMkMsaURBQVE7SUFNbEQ7UUFBQSxZQUNDLGlCQUFPLFNBQ1A7UUFOTyxXQUFLLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7UUFFdkMsWUFBTSxHQUFHLElBQUksYUFBYSxFQUE0QixDQUFDOztJQUkvRCxDQUFDOzs7Ozs7SUFFRCx3Q0FBUTs7Ozs7SUFBUixVQUFTLEtBQWtCLEVBQUUsUUFBa0I7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxrQ0FBRTs7OztJQUFGLFVBQUcsUUFBa0I7UUFFcEIsT0FBTyxJQUFJLENBQUMsTUFBTTthQUNaLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLEVBQ2hCLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQTZCO1lBQ2pDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUMsRUFDRixvQkFBb0IsRUFBRSxDQUN0QixDQUFDO0lBQ1IsQ0FBQzs7Ozs7OztJQUVPLG9DQUFJOzs7Ozs7SUFBWixVQUFhLEtBQWtCLEVBQUUsUUFBa0I7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkEvQkQsVUFBVTs7OztJQWlDWCw0QkFBQztDQUFBLEFBakNELENBQzJDLFFBQVEsR0FnQ2xEO1NBaENZLHFCQUFxQjs7Ozs7O0lBRWpDLHNDQUErQzs7Ozs7SUFFL0MsdUNBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSB0aGVtZSA9IG5ldyBNYXA8c3RyaW5nLCBTY2hlbWFUaGVtZT4oKTtcblxuXHRwcml2YXRlIHRoZW1lJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIFNjaGVtYVRoZW1lPj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c2V0VGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lLCBzY2hlbWFJZDogU2NoZW1hSWQpOiB2b2lkIHtcblx0XHR0aGlzLm5leHQodGhlbWUsIHNjaGVtYUlkKTtcblx0fVxuXG5cdG9uKHNjaGVtYUlkOiBTY2hlbWFJZCk6IE9ic2VydmFibGU8U2NoZW1hVGhlbWU+IHtcblxuXHRcdHJldHVybiB0aGlzLnRoZW1lJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGhpcy50YWtlVW50aWwoKSxcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogTWFwPHN0cmluZywgU2NoZW1hVGhlbWU+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmdldChzY2hlbWFJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIG5leHQodGhlbWU6IFNjaGVtYVRoZW1lLCBzY2hlbWFJZDogU2NoZW1hSWQpOiB2b2lkIHtcblx0XHR0aGlzLnRoZW1lLnNldChzY2hlbWFJZC50b1N0cmluZygpLCB0aGVtZSk7XG5cdFx0dGhpcy50aGVtZSQubmV4dCh0aGlzLnRoZW1lKTtcblx0fVxuXG59XG4iXX0=