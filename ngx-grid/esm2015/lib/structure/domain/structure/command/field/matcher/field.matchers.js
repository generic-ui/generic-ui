/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '@generic-ui/hermes';
export class FieldMatchers {
    /**
     * @param {?=} matcher
     * @param {?=} sortMatcher
     * @param {?=} searchMatcher
     */
    constructor(matcher, sortMatcher, searchMatcher) {
        this.matcher = matcher;
        this.sortMatcher = sortMatcher;
        this.searchMatcher = searchMatcher;
    }
    /**
     * @return {?}
     */
    getMatcher() {
        return Optional.of(this.matcher);
    }
    /**
     * @return {?}
     */
    getSortMatcher() {
        /** @type {?} */
        let matcher;
        if (this.sortMatcher) {
            matcher = this.sortMatcher;
        }
        if (this.matcher) {
            matcher = this.matcher;
        }
        return Optional.of(matcher);
    }
    /**
     * @return {?}
     */
    getSearchMatcher() {
        /** @type {?} */
        let matcher;
        if (this.searchMatcher) {
            matcher = this.searchMatcher;
        }
        if (this.matcher) {
            matcher = this.matcher;
        }
        return Optional.of(matcher);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubWF0Y2hlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL21hdGNoZXIvZmllbGQubWF0Y2hlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUk5QyxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBRXpCLFlBQTZCLE9BQTBCLEVBQ25DLFdBQThCLEVBQzlCLGFBQWdDO1FBRnZCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQ25DLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7SUFDcEQsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxjQUFjOztZQUVULE9BQU87UUFFWCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDM0I7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkI7UUFFRCxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELGdCQUFnQjs7WUFFWCxPQUFPO1FBRVgsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZCO1FBRUQsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRDs7Ozs7O0lBdENZLGdDQUEyQzs7Ozs7SUFDcEQsb0NBQStDOzs7OztJQUMvQyxzQ0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpZWxkTWF0Y2hlclR5cGUgfSBmcm9tICcuL2ZpZWxkLm1hdGNoZXIudHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBGaWVsZE1hdGNoZXJzIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG1hdGNoZXI/OiBGaWVsZE1hdGNoZXJUeXBlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvcnRNYXRjaGVyPzogRmllbGRNYXRjaGVyVHlwZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hNYXRjaGVyPzogRmllbGRNYXRjaGVyVHlwZSkgeyAvLyBUT0RPXG5cdH1cblxuXHRnZXRNYXRjaGVyKCk6IE9wdGlvbmFsPEZpZWxkTWF0Y2hlclR5cGU+IHtcblx0XHRyZXR1cm4gT3B0aW9uYWwub2YodGhpcy5tYXRjaGVyKTtcblx0fVxuXG5cdGdldFNvcnRNYXRjaGVyKCk6IE9wdGlvbmFsPEZpZWxkTWF0Y2hlclR5cGU+IHtcblxuXHRcdGxldCBtYXRjaGVyO1xuXG5cdFx0aWYgKHRoaXMuc29ydE1hdGNoZXIpIHtcblx0XHRcdG1hdGNoZXIgPSB0aGlzLnNvcnRNYXRjaGVyO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm1hdGNoZXIpIHtcblx0XHRcdG1hdGNoZXIgPSB0aGlzLm1hdGNoZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKG1hdGNoZXIpO1xuXHR9XG5cblx0Z2V0U2VhcmNoTWF0Y2hlcigpOiBPcHRpb25hbDxGaWVsZE1hdGNoZXJUeXBlPiB7XG5cblx0XHRsZXQgbWF0Y2hlcjtcblxuXHRcdGlmICh0aGlzLnNlYXJjaE1hdGNoZXIpIHtcblx0XHRcdG1hdGNoZXIgPSB0aGlzLnNlYXJjaE1hdGNoZXI7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMubWF0Y2hlcikge1xuXHRcdFx0bWF0Y2hlciA9IHRoaXMubWF0Y2hlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gT3B0aW9uYWwub2YobWF0Y2hlcik7XG5cdH1cbn1cbiJdfQ==