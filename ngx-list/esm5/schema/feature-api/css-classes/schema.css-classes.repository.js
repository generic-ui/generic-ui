/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reactive } from '../../../common/cdk/reactive';
var SchemaCssClassesRepository = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaCssClassesRepository, _super);
    function SchemaCssClassesRepository() {
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
    SchemaCssClassesRepository.prototype.setTheme = /**
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
    SchemaCssClassesRepository.prototype.on = /**
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
        }))
        // distinctUntilChanged()
        );
    };
    /**
     * @private
     * @param {?} theme
     * @param {?} schemaId
     * @return {?}
     */
    SchemaCssClassesRepository.prototype.next = /**
     * @private
     * @param {?} theme
     * @param {?} schemaId
     * @return {?}
     */
    function (theme, schemaId) {
        this.theme.set(schemaId.toString(), theme);
        this.theme$.next(this.theme);
    };
    SchemaCssClassesRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaCssClassesRepository.ctorParameters = function () { return []; };
    return SchemaCssClassesRepository;
}(Reactive));
export { SchemaCssClassesRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassesRepository.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassesRepository.prototype.theme$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmNzcy1jbGFzc2VzLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInNjaGVtYS9mZWF0dXJlLWFwaS9jc3MtY2xhc3Nlcy9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSXhEO0lBQ2dELHNEQUFRO0lBTXZEO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBTk8sV0FBSyxHQUFHLElBQUksR0FBRyxFQUEwQixDQUFDO1FBRTFDLFlBQU0sR0FBRyxJQUFJLGFBQWEsRUFBK0IsQ0FBQzs7SUFJbEUsQ0FBQzs7Ozs7O0lBRUQsNkNBQVE7Ozs7O0lBQVIsVUFBUyxLQUFxQixFQUFFLFFBQWtCO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsdUNBQUU7Ozs7SUFBRixVQUFHLFFBQWtCO1FBRXBCLE9BQU8sSUFBSSxDQUFDLE1BQU07YUFDWixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUNoQixHQUFHOzs7O1FBQUMsVUFBQyxHQUFnQztZQUNwQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFDO1FBQ0YseUJBQXlCO1NBQ3pCLENBQUM7SUFDUixDQUFDOzs7Ozs7O0lBRU8seUNBQUk7Ozs7OztJQUFaLFVBQWEsS0FBcUIsRUFBRSxRQUFrQjtRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQS9CRCxVQUFVOzs7O0lBaUNYLGlDQUFDO0NBQUEsQUFqQ0QsQ0FDZ0QsUUFBUSxHQWdDdkQ7U0FoQ1ksMEJBQTBCOzs7Ozs7SUFFdEMsMkNBQWtEOzs7OztJQUVsRCw0Q0FBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3MgfSBmcm9tICcuL3NjaGVtYS1jc3MtY2xhc3MnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIHRoZW1lID0gbmV3IE1hcDxzdHJpbmcsIFNjaGVtYUNzc0NsYXNzPigpO1xuXG5cdHByaXZhdGUgdGhlbWUkID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgU2NoZW1hQ3NzQ2xhc3M+PigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzZXRUaGVtZSh0aGVtZTogU2NoZW1hQ3NzQ2xhc3MsIHNjaGVtYUlkOiBTY2hlbWFJZCk6IHZvaWQge1xuXHRcdHRoaXMubmV4dCh0aGVtZSwgc2NoZW1hSWQpO1xuXHR9XG5cblx0b24oc2NoZW1hSWQ6IFNjaGVtYUlkKTogT2JzZXJ2YWJsZTxTY2hlbWFDc3NDbGFzcz4ge1xuXG5cdFx0cmV0dXJuIHRoaXMudGhlbWUkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICB0aGlzLnRha2VVbnRpbCgpLFxuXHRcdFx0XHRcdCAgIG1hcCgobWFwOiBNYXA8c3RyaW5nLCBTY2hlbWFDc3NDbGFzcz4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KHNjaGVtYUlkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdFx0ICAgLy8gZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBuZXh0KHRoZW1lOiBTY2hlbWFDc3NDbGFzcywgc2NoZW1hSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0dGhpcy50aGVtZS5zZXQoc2NoZW1hSWQudG9TdHJpbmcoKSwgdGhlbWUpO1xuXHRcdHRoaXMudGhlbWUkLm5leHQodGhpcy50aGVtZSk7XG5cdH1cblxufVxuIl19