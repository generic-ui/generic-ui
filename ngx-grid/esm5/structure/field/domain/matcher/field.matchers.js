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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubWF0Y2hlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9kb21haW4vbWF0Y2hlci9maWVsZC5tYXRjaGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSTlDO0lBRUMsdUJBQTZCLE9BQTBCLEVBQ25DLFdBQThCLEVBQzlCLGFBQWdDO1FBRnZCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQ25DLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7SUFDcEQsQ0FBQzs7OztJQUVELGtDQUFVOzs7SUFBVjtRQUNDLE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELHNDQUFjOzs7SUFBZDs7WUFFSyxPQUFPO1FBRVgsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZCO1FBRUQsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCx3Q0FBZ0I7OztJQUFoQjs7WUFFSyxPQUFPO1FBRVgsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZCO1FBRUQsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRixvQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7Ozs7Ozs7SUF0Q1ksZ0NBQTJDOzs7OztJQUNwRCxvQ0FBK0M7Ozs7O0lBQy9DLHNDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmllbGRNYXRjaGVyVHlwZSB9IGZyb20gJy4vZmllbGQubWF0Y2hlci50eXBlJztcblxuZXhwb3J0IGNsYXNzIEZpZWxkTWF0Y2hlcnMge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbWF0Y2hlcj86IEZpZWxkTWF0Y2hlclR5cGUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc29ydE1hdGNoZXI/OiBGaWVsZE1hdGNoZXJUeXBlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaE1hdGNoZXI/OiBGaWVsZE1hdGNoZXJUeXBlKSB7IC8vIFRPRE9cblx0fVxuXG5cdGdldE1hdGNoZXIoKTogT3B0aW9uYWw8RmllbGRNYXRjaGVyVHlwZT4ge1xuXHRcdHJldHVybiBPcHRpb25hbC5vZih0aGlzLm1hdGNoZXIpO1xuXHR9XG5cblx0Z2V0U29ydE1hdGNoZXIoKTogT3B0aW9uYWw8RmllbGRNYXRjaGVyVHlwZT4ge1xuXG5cdFx0bGV0IG1hdGNoZXI7XG5cblx0XHRpZiAodGhpcy5zb3J0TWF0Y2hlcikge1xuXHRcdFx0bWF0Y2hlciA9IHRoaXMuc29ydE1hdGNoZXI7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMubWF0Y2hlcikge1xuXHRcdFx0bWF0Y2hlciA9IHRoaXMubWF0Y2hlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gT3B0aW9uYWwub2YobWF0Y2hlcik7XG5cdH1cblxuXHRnZXRTZWFyY2hNYXRjaGVyKCk6IE9wdGlvbmFsPEZpZWxkTWF0Y2hlclR5cGU+IHtcblxuXHRcdGxldCBtYXRjaGVyO1xuXG5cdFx0aWYgKHRoaXMuc2VhcmNoTWF0Y2hlcikge1xuXHRcdFx0bWF0Y2hlciA9IHRoaXMuc2VhcmNoTWF0Y2hlcjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5tYXRjaGVyKSB7XG5cdFx0XHRtYXRjaGVyID0gdGhpcy5tYXRjaGVyO1xuXHRcdH1cblxuXHRcdHJldHVybiBPcHRpb25hbC5vZihtYXRjaGVyKTtcblx0fVxufVxuIl19