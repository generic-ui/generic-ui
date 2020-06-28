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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubWF0Y2hlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9kb21haW4vY29yZS9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJOUMsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQUV6QixZQUE2QixPQUEwQixFQUNuQyxXQUE4QixFQUM5QixhQUFnQztRQUZ2QixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUNuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQW1CO0lBQ3BELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsY0FBYzs7WUFFVCxPQUFPO1FBRVgsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZCO1FBRUQsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxnQkFBZ0I7O1lBRVgsT0FBTztRQUVYLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QixPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUM3QjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2QjtRQUVELE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0Q7Ozs7OztJQXRDWSxnQ0FBMkM7Ozs7O0lBQ3BELG9DQUErQzs7Ozs7SUFDL0Msc0NBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJUeXBlIH0gZnJvbSAnLi9maWVsZC5tYXRjaGVyLnR5cGUnO1xuXG5leHBvcnQgY2xhc3MgRmllbGRNYXRjaGVycyB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtYXRjaGVyPzogRmllbGRNYXRjaGVyVHlwZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0TWF0Y2hlcj86IEZpZWxkTWF0Y2hlclR5cGUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoTWF0Y2hlcj86IEZpZWxkTWF0Y2hlclR5cGUpIHsgLy8gVE9ET1xuXHR9XG5cblx0Z2V0TWF0Y2hlcigpOiBPcHRpb25hbDxGaWVsZE1hdGNoZXJUeXBlPiB7XG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMubWF0Y2hlcik7XG5cdH1cblxuXHRnZXRTb3J0TWF0Y2hlcigpOiBPcHRpb25hbDxGaWVsZE1hdGNoZXJUeXBlPiB7XG5cblx0XHRsZXQgbWF0Y2hlcjtcblxuXHRcdGlmICh0aGlzLnNvcnRNYXRjaGVyKSB7XG5cdFx0XHRtYXRjaGVyID0gdGhpcy5zb3J0TWF0Y2hlcjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5tYXRjaGVyKSB7XG5cdFx0XHRtYXRjaGVyID0gdGhpcy5tYXRjaGVyO1xuXHRcdH1cblxuXHRcdHJldHVybiBPcHRpb25hbC5vZihtYXRjaGVyKTtcblx0fVxuXG5cdGdldFNlYXJjaE1hdGNoZXIoKTogT3B0aW9uYWw8RmllbGRNYXRjaGVyVHlwZT4ge1xuXG5cdFx0bGV0IG1hdGNoZXI7XG5cblx0XHRpZiAodGhpcy5zZWFyY2hNYXRjaGVyKSB7XG5cdFx0XHRtYXRjaGVyID0gdGhpcy5zZWFyY2hNYXRjaGVyO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm1hdGNoZXIpIHtcblx0XHRcdG1hdGNoZXIgPSB0aGlzLm1hdGNoZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKG1hdGNoZXIpO1xuXHR9XG59XG4iXX0=