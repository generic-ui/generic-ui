/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '@generic-ui/hermes';
var FieldMatchers = /** @class */ (function () {
    function FieldMatchers(matcher, sortMatcher, searchMatcher) {
        this.matcher = matcher;
        this.sortMatcher = sortMatcher;
        this.searchMatcher = searchMatcher;
    }
    /**
     * @return {?}
     */
    FieldMatchers.prototype.getMatcher = /**
     * @return {?}
     */
    function () {
        return Optional.of(this.matcher);
    };
    /**
     * @return {?}
     */
    FieldMatchers.prototype.getSortMatcher = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var matcher;
        if (this.sortMatcher) {
            matcher = this.sortMatcher;
        }
        if (this.matcher) {
            matcher = this.matcher;
        }
        return Optional.of(matcher);
    };
    /**
     * @return {?}
     */
    FieldMatchers.prototype.getSearchMatcher = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var matcher;
        if (this.searchMatcher) {
            matcher = this.searchMatcher;
        }
        if (this.matcher) {
            matcher = this.matcher;
        }
        return Optional.of(matcher);
    };
    return FieldMatchers;
}());
export { FieldMatchers };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldMatchers.prototype.matcher;
    /**
     * @type {?}
     * @private
     */
    FieldMatchers.prototype.sortMatcher;
    /**
     * @type {?}
     * @private
     */
    FieldMatchers.prototype.searchMatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubWF0Y2hlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL21hdGNoZXIvZmllbGQubWF0Y2hlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUk5QztJQUVDLHVCQUE2QixPQUEwQixFQUNuQyxXQUE4QixFQUM5QixhQUFnQztRQUZ2QixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUNuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQW1CO0lBQ3BELENBQUM7Ozs7SUFFRCxrQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxzQ0FBYzs7O0lBQWQ7O1lBRUssT0FBTztRQUVYLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMzQjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2QjtRQUVELE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsd0NBQWdCOzs7SUFBaEI7O1lBRUssT0FBTztRQUVYLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QixPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUM3QjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2QjtRQUVELE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDOzs7Ozs7O0lBdENZLGdDQUEyQzs7Ozs7SUFDcEQsb0NBQStDOzs7OztJQUMvQyxzQ0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpZWxkTWF0Y2hlclR5cGUgfSBmcm9tICcuL2ZpZWxkLm1hdGNoZXIudHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBGaWVsZE1hdGNoZXJzIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG1hdGNoZXI/OiBGaWVsZE1hdGNoZXJUeXBlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvcnRNYXRjaGVyPzogRmllbGRNYXRjaGVyVHlwZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hNYXRjaGVyPzogRmllbGRNYXRjaGVyVHlwZSkgeyAvLyBUT0RPXG5cdH1cblxuXHRnZXRNYXRjaGVyKCk6IE9wdGlvbmFsPEZpZWxkTWF0Y2hlclR5cGU+IHtcblx0XHRyZXR1cm4gT3B0aW9uYWwub2YodGhpcy5tYXRjaGVyKTtcblx0fVxuXG5cdGdldFNvcnRNYXRjaGVyKCk6IE9wdGlvbmFsPEZpZWxkTWF0Y2hlclR5cGU+IHtcblxuXHRcdGxldCBtYXRjaGVyO1xuXG5cdFx0aWYgKHRoaXMuc29ydE1hdGNoZXIpIHtcblx0XHRcdG1hdGNoZXIgPSB0aGlzLnNvcnRNYXRjaGVyO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm1hdGNoZXIpIHtcblx0XHRcdG1hdGNoZXIgPSB0aGlzLm1hdGNoZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKG1hdGNoZXIpO1xuXHR9XG5cblx0Z2V0U2VhcmNoTWF0Y2hlcigpOiBPcHRpb25hbDxGaWVsZE1hdGNoZXJUeXBlPiB7XG5cblx0XHRsZXQgbWF0Y2hlcjtcblxuXHRcdGlmICh0aGlzLnNlYXJjaE1hdGNoZXIpIHtcblx0XHRcdG1hdGNoZXIgPSB0aGlzLnNlYXJjaE1hdGNoZXI7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMubWF0Y2hlcikge1xuXHRcdFx0bWF0Y2hlciA9IHRoaXMubWF0Y2hlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gT3B0aW9uYWwub2YobWF0Y2hlcik7XG5cdH1cbn1cbiJdfQ==