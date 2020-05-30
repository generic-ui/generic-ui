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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubWF0Y2hlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9kb21haW4vbWF0Y2hlci9maWVsZC5tYXRjaGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSTlDLE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFFekIsWUFBNkIsT0FBMEIsRUFDbkMsV0FBOEIsRUFDOUIsYUFBZ0M7UUFGdkIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDbkMsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtJQUNwRCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELGNBQWM7O1lBRVQsT0FBTztRQUVYLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMzQjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2QjtRQUVELE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsZ0JBQWdCOztZQUVYLE9BQU87UUFFWCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDN0I7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkI7UUFFRCxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNEOzs7Ozs7SUF0Q1ksZ0NBQTJDOzs7OztJQUNwRCxvQ0FBK0M7Ozs7O0lBQy9DLHNDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmllbGRNYXRjaGVyVHlwZSB9IGZyb20gJy4vZmllbGQubWF0Y2hlci50eXBlJztcblxuZXhwb3J0IGNsYXNzIEZpZWxkTWF0Y2hlcnMge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbWF0Y2hlcj86IEZpZWxkTWF0Y2hlclR5cGUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc29ydE1hdGNoZXI/OiBGaWVsZE1hdGNoZXJUeXBlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaE1hdGNoZXI/OiBGaWVsZE1hdGNoZXJUeXBlKSB7IC8vIFRPRE9cblx0fVxuXG5cdGdldE1hdGNoZXIoKTogT3B0aW9uYWw8RmllbGRNYXRjaGVyVHlwZT4ge1xuXHRcdHJldHVybiBPcHRpb25hbC5vZih0aGlzLm1hdGNoZXIpO1xuXHR9XG5cblx0Z2V0U29ydE1hdGNoZXIoKTogT3B0aW9uYWw8RmllbGRNYXRjaGVyVHlwZT4ge1xuXG5cdFx0bGV0IG1hdGNoZXI7XG5cblx0XHRpZiAodGhpcy5zb3J0TWF0Y2hlcikge1xuXHRcdFx0bWF0Y2hlciA9IHRoaXMuc29ydE1hdGNoZXI7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMubWF0Y2hlcikge1xuXHRcdFx0bWF0Y2hlciA9IHRoaXMubWF0Y2hlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gT3B0aW9uYWwub2YobWF0Y2hlcik7XG5cdH1cblxuXHRnZXRTZWFyY2hNYXRjaGVyKCk6IE9wdGlvbmFsPEZpZWxkTWF0Y2hlclR5cGU+IHtcblxuXHRcdGxldCBtYXRjaGVyO1xuXG5cdFx0aWYgKHRoaXMuc2VhcmNoTWF0Y2hlcikge1xuXHRcdFx0bWF0Y2hlciA9IHRoaXMuc2VhcmNoTWF0Y2hlcjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5tYXRjaGVyKSB7XG5cdFx0XHRtYXRjaGVyID0gdGhpcy5tYXRjaGVyO1xuXHRcdH1cblxuXHRcdHJldHVybiBPcHRpb25hbC5vZihtYXRjaGVyKTtcblx0fVxufVxuIl19