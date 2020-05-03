/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '../../../../common/cdk/reactive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnRoZW1lLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvZmVhdHVyZS1hcGkvdGhlbWUvc2NoZW1hLnRoZW1lLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUkzRDtJQUMyQyxpREFBUTtJQU1sRDtRQUFBLFlBQ0MsaUJBQU8sU0FDUDtRQU5PLFdBQUssR0FBRyxJQUFJLEdBQUcsRUFBdUIsQ0FBQztRQUV2QyxZQUFNLEdBQUcsSUFBSSxhQUFhLEVBQTRCLENBQUM7O0lBSS9ELENBQUM7Ozs7OztJQUVELHdDQUFROzs7OztJQUFSLFVBQVMsS0FBa0IsRUFBRSxRQUFrQjtRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELGtDQUFFOzs7O0lBQUYsVUFBRyxRQUFrQjtRQUVwQixPQUFPLElBQUksQ0FBQyxNQUFNO2FBQ1osWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFDaEIsR0FBRzs7OztRQUFDLFVBQUMsR0FBNkI7WUFDakMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOzs7Ozs7O0lBRU8sb0NBQUk7Ozs7OztJQUFaLFVBQWEsS0FBa0IsRUFBRSxRQUFrQjtRQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQS9CRCxVQUFVOzs7O0lBaUNYLDRCQUFDO0NBQUEsQUFqQ0QsQ0FDMkMsUUFBUSxHQWdDbEQ7U0FoQ1kscUJBQXFCOzs7Ozs7SUFFakMsc0NBQStDOzs7OztJQUUvQyx1Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYVRoZW1lUmVwb3NpdG9yeSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIHRoZW1lID0gbmV3IE1hcDxzdHJpbmcsIFNjaGVtYVRoZW1lPigpO1xuXG5cdHByaXZhdGUgdGhlbWUkID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgU2NoZW1hVGhlbWU+PigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzZXRUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUsIHNjaGVtYUlkOiBTY2hlbWFJZCk6IHZvaWQge1xuXHRcdHRoaXMubmV4dCh0aGVtZSwgc2NoZW1hSWQpO1xuXHR9XG5cblx0b24oc2NoZW1hSWQ6IFNjaGVtYUlkKTogT2JzZXJ2YWJsZTxTY2hlbWFUaGVtZT4ge1xuXG5cdFx0cmV0dXJuIHRoaXMudGhlbWUkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICB0aGlzLnRha2VVbnRpbCgpLFxuXHRcdFx0XHRcdCAgIG1hcCgobWFwOiBNYXA8c3RyaW5nLCBTY2hlbWFUaGVtZT4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KHNjaGVtYUlkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgbmV4dCh0aGVtZTogU2NoZW1hVGhlbWUsIHNjaGVtYUlkOiBTY2hlbWFJZCk6IHZvaWQge1xuXHRcdHRoaXMudGhlbWUuc2V0KHNjaGVtYUlkLnRvU3RyaW5nKCksIHRoZW1lKTtcblx0XHR0aGlzLnRoZW1lJC5uZXh0KHRoaXMudGhlbWUpO1xuXHR9XG5cbn1cbiJdfQ==