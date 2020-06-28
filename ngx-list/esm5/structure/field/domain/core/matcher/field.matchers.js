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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubWF0Y2hlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9kb21haW4vY29yZS9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJOUM7SUFFQyx1QkFBNkIsT0FBMEIsRUFDbkMsV0FBOEIsRUFDOUIsYUFBZ0M7UUFGdkIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDbkMsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtJQUNwRCxDQUFDOzs7O0lBRUQsa0NBQVU7OztJQUFWO1FBQ0MsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsc0NBQWM7OztJQUFkOztZQUVLLE9BQU87UUFFWCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDM0I7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkI7UUFFRCxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELHdDQUFnQjs7O0lBQWhCOztZQUVLLE9BQU87UUFFWCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDN0I7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkI7UUFFRCxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNGLG9CQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQzs7Ozs7OztJQXRDWSxnQ0FBMkM7Ozs7O0lBQ3BELG9DQUErQzs7Ozs7SUFDL0Msc0NBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJUeXBlIH0gZnJvbSAnLi9maWVsZC5tYXRjaGVyLnR5cGUnO1xuXG5leHBvcnQgY2xhc3MgRmllbGRNYXRjaGVycyB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtYXRjaGVyPzogRmllbGRNYXRjaGVyVHlwZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0TWF0Y2hlcj86IEZpZWxkTWF0Y2hlclR5cGUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoTWF0Y2hlcj86IEZpZWxkTWF0Y2hlclR5cGUpIHsgLy8gVE9ET1xuXHR9XG5cblx0Z2V0TWF0Y2hlcigpOiBPcHRpb25hbDxGaWVsZE1hdGNoZXJUeXBlPiB7XG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMubWF0Y2hlcik7XG5cdH1cblxuXHRnZXRTb3J0TWF0Y2hlcigpOiBPcHRpb25hbDxGaWVsZE1hdGNoZXJUeXBlPiB7XG5cblx0XHRsZXQgbWF0Y2hlcjtcblxuXHRcdGlmICh0aGlzLnNvcnRNYXRjaGVyKSB7XG5cdFx0XHRtYXRjaGVyID0gdGhpcy5zb3J0TWF0Y2hlcjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5tYXRjaGVyKSB7XG5cdFx0XHRtYXRjaGVyID0gdGhpcy5tYXRjaGVyO1xuXHRcdH1cblxuXHRcdHJldHVybiBPcHRpb25hbC5vZihtYXRjaGVyKTtcblx0fVxuXG5cdGdldFNlYXJjaE1hdGNoZXIoKTogT3B0aW9uYWw8RmllbGRNYXRjaGVyVHlwZT4ge1xuXG5cdFx0bGV0IG1hdGNoZXI7XG5cblx0XHRpZiAodGhpcy5zZWFyY2hNYXRjaGVyKSB7XG5cdFx0XHRtYXRjaGVyID0gdGhpcy5zZWFyY2hNYXRjaGVyO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm1hdGNoZXIpIHtcblx0XHRcdG1hdGNoZXIgPSB0aGlzLm1hdGNoZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKG1hdGNoZXIpO1xuXHR9XG59XG4iXX0=