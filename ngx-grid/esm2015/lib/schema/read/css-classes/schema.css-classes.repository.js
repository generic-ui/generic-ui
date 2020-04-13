/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reactive } from '../../../../common/cdk/reactive';
export class SchemaCssClassesRepository extends Reactive {
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
        }))
        // distinctUntilChanged()
        );
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
SchemaCssClassesRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaCssClassesRepository.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmNzcy1jbGFzc2VzLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvcmVhZC9jc3MtY2xhc3Nlcy9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFLM0QsTUFBTSxPQUFPLDBCQUEyQixTQUFRLFFBQVE7SUFNdkQ7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQUxELFVBQUssR0FBRyxJQUFJLEdBQUcsRUFBMEIsQ0FBQztRQUUxQyxXQUFNLEdBQUcsSUFBSSxhQUFhLEVBQStCLENBQUM7SUFJbEUsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQXFCLEVBQUUsUUFBa0I7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxFQUFFLENBQUMsUUFBa0I7UUFFcEIsT0FBTyxJQUFJLENBQUMsTUFBTTthQUNaLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLEVBQ2hCLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQWdDLEVBQUUsRUFBRTtZQUN4QyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFDO1FBQ0YseUJBQXlCO1NBQ3pCLENBQUM7SUFDUixDQUFDOzs7Ozs7O0lBRU8sSUFBSSxDQUFDLEtBQXFCLEVBQUUsUUFBa0I7UUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUEvQkQsVUFBVTs7Ozs7Ozs7O0lBR1YsMkNBQWtEOzs7OztJQUVsRCw0Q0FBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3MgfSBmcm9tICcuLi9zY2hlbWEtY3NzLWNsYXNzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSB0aGVtZSA9IG5ldyBNYXA8c3RyaW5nLCBTY2hlbWFDc3NDbGFzcz4oKTtcblxuXHRwcml2YXRlIHRoZW1lJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIFNjaGVtYUNzc0NsYXNzPj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c2V0VGhlbWUodGhlbWU6IFNjaGVtYUNzc0NsYXNzLCBzY2hlbWFJZDogU2NoZW1hSWQpOiB2b2lkIHtcblx0XHR0aGlzLm5leHQodGhlbWUsIHNjaGVtYUlkKTtcblx0fVxuXG5cdG9uKHNjaGVtYUlkOiBTY2hlbWFJZCk6IE9ic2VydmFibGU8U2NoZW1hQ3NzQ2xhc3M+IHtcblxuXHRcdHJldHVybiB0aGlzLnRoZW1lJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGhpcy50YWtlVW50aWwoKSxcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogTWFwPHN0cmluZywgU2NoZW1hQ3NzQ2xhc3M+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmdldChzY2hlbWFJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHRcdCAgIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgbmV4dCh0aGVtZTogU2NoZW1hQ3NzQ2xhc3MsIHNjaGVtYUlkOiBTY2hlbWFJZCk6IHZvaWQge1xuXHRcdHRoaXMudGhlbWUuc2V0KHNjaGVtYUlkLnRvU3RyaW5nKCksIHRoZW1lKTtcblx0XHR0aGlzLnRoZW1lJC5uZXh0KHRoaXMudGhlbWUpO1xuXHR9XG5cbn1cbiJdfQ==