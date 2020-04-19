/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reactive } from '../../../../common/cdk/reactive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmNzcy1jbGFzc2VzLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvZmVhdHVyZS1hcGkvY3NzLWNsYXNzZXMvc2NoZW1hLmNzcy1jbGFzc2VzLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3JDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUkzRDtJQUNnRCxzREFBUTtJQU12RDtRQUFBLFlBQ0MsaUJBQU8sU0FDUDtRQU5PLFdBQUssR0FBRyxJQUFJLEdBQUcsRUFBMEIsQ0FBQztRQUUxQyxZQUFNLEdBQUcsSUFBSSxhQUFhLEVBQStCLENBQUM7O0lBSWxFLENBQUM7Ozs7OztJQUVELDZDQUFROzs7OztJQUFSLFVBQVMsS0FBcUIsRUFBRSxRQUFrQjtRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELHVDQUFFOzs7O0lBQUYsVUFBRyxRQUFrQjtRQUVwQixPQUFPLElBQUksQ0FBQyxNQUFNO2FBQ1osWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFDaEIsR0FBRzs7OztRQUFDLFVBQUMsR0FBZ0M7WUFDcEMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFBQztRQUNGLHlCQUF5QjtTQUN6QixDQUFDO0lBQ1IsQ0FBQzs7Ozs7OztJQUVPLHlDQUFJOzs7Ozs7SUFBWixVQUFhLEtBQXFCLEVBQUUsUUFBa0I7UUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkEvQkQsVUFBVTs7OztJQWlDWCxpQ0FBQztDQUFBLEFBakNELENBQ2dELFFBQVEsR0FnQ3ZEO1NBaENZLDBCQUEwQjs7Ozs7O0lBRXRDLDJDQUFrRDs7Ozs7SUFFbEQsNENBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzIH0gZnJvbSAnLi9zY2hlbWEtY3NzLWNsYXNzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSB0aGVtZSA9IG5ldyBNYXA8c3RyaW5nLCBTY2hlbWFDc3NDbGFzcz4oKTtcblxuXHRwcml2YXRlIHRoZW1lJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIFNjaGVtYUNzc0NsYXNzPj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c2V0VGhlbWUodGhlbWU6IFNjaGVtYUNzc0NsYXNzLCBzY2hlbWFJZDogU2NoZW1hSWQpOiB2b2lkIHtcblx0XHR0aGlzLm5leHQodGhlbWUsIHNjaGVtYUlkKTtcblx0fVxuXG5cdG9uKHNjaGVtYUlkOiBTY2hlbWFJZCk6IE9ic2VydmFibGU8U2NoZW1hQ3NzQ2xhc3M+IHtcblxuXHRcdHJldHVybiB0aGlzLnRoZW1lJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGhpcy50YWtlVW50aWwoKSxcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogTWFwPHN0cmluZywgU2NoZW1hQ3NzQ2xhc3M+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmdldChzY2hlbWFJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHRcdCAgIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgbmV4dCh0aGVtZTogU2NoZW1hQ3NzQ2xhc3MsIHNjaGVtYUlkOiBTY2hlbWFJZCk6IHZvaWQge1xuXHRcdHRoaXMudGhlbWUuc2V0KHNjaGVtYUlkLnRvU3RyaW5nKCksIHRoZW1lKTtcblx0XHR0aGlzLnRoZW1lJC5uZXh0KHRoaXMudGhlbWUpO1xuXHR9XG5cbn1cbiJdfQ==