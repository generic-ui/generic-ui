import { __decorate } from "tslib";
import { ReadModelObject } from '@generic-ui/hermes';
let Paging = class Paging {
    constructor(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, isNextDisabled, isPrevDisabled, start, end, sourceSize) {
        this.enabled = enabled;
        this.page = page;
        this.pageSize = pageSize;
        this.pageSizes = pageSizes;
        this.pagerTop = pagerTop;
        this.pagerBottom = pagerBottom;
        this.isNextDisabled = isNextDisabled;
        this.isPrevDisabled = isPrevDisabled;
        this.start = start;
        this.end = end;
        this.sourceSize = sourceSize;
    }
    isEnabled() {
        return this.enabled;
    }
    getPage() {
        return this.page;
    }
    getPageSize() {
        return this.pageSize;
    }
    getPageSizes() {
        return this.pageSizes;
    }
    isPagerTop() {
        return this.pagerTop;
    }
    isPagerBottom() {
        return this.pagerBottom;
    }
    isNextPageDisabled() {
        return this.isNextDisabled;
    }
    isPrevPageDisabled() {
        return this.isPrevDisabled;
    }
    getStart() {
        return this.start;
    }
    getEnd() {
        return this.end;
    }
    getSourceSize() {
        return this.sourceSize;
    }
    calculateVisiblePages(currentPage, numberOfVisiblePages, page) {
        return currentPage - numberOfVisiblePages < page && page < currentPage + numberOfVisiblePages;
    }
    sample(source) {
        let start = this.getStart();
        if (start !== 0) {
            start -= 1;
        }
        return source.slice(start, this.getEnd());
    }
    // TODO
    compare(target) {
        return JSON.stringify(this) === JSON.stringify(target);
    }
};
Paging = __decorate([
    ReadModelObject
], Paging);
export { Paging };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvcGFnaW5nL2NvcmUvYXBpL3JlYWQvcGFnaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHckQsSUFBYSxNQUFNLEdBQW5CLE1BQWEsTUFBTTtJQUVsQixZQUE2QixPQUFnQixFQUN6QixJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsU0FBd0IsRUFDeEIsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsY0FBdUIsRUFDdkIsY0FBdUIsRUFDdkIsS0FBYSxFQUNiLEdBQVcsRUFDWCxVQUFrQjtRQVZULFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQ3BCLG1CQUFjLEdBQWQsY0FBYyxDQUFTO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFTO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUN0QyxDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRUQsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDO0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDO0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDO0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDO0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDO0lBRUQscUJBQXFCLENBQUMsV0FBbUIsRUFBRSxvQkFBNEIsRUFBRSxJQUFZO1FBQ3BGLE9BQU8sV0FBVyxHQUFHLG9CQUFvQixHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsV0FBVyxHQUFHLG9CQUFvQixDQUFDO0lBQy9GLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBa0I7UUFFeEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTVCLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNoQixLQUFLLElBQUksQ0FBQyxDQUFDO1NBQ1g7UUFFRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxPQUFPO0lBQ1AsT0FBTyxDQUFDLE1BQWM7UUFDckIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUVELENBQUE7QUEvRVksTUFBTTtJQURsQixlQUFlO0dBQ0gsTUFBTSxDQStFbEI7U0EvRVksTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWRNb2RlbE9iamVjdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbkBSZWFkTW9kZWxPYmplY3RcbmV4cG9ydCBjbGFzcyBQYWdpbmcge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlOiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnZVNpemU6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlU2l6ZXM6IEFycmF5PG51bWJlcj4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnZXJUb3A6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnZXJCb3R0b206IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaXNOZXh0RGlzYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaXNQcmV2RGlzYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RhcnQ6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbmQ6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VTaXplOiBudW1iZXIpIHtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0Z2V0UGFnZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2U7XG5cdH1cblxuXHRnZXRQYWdlU2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTaXplO1xuXHR9XG5cblx0Z2V0UGFnZVNpemVzKCk6IEFycmF5PG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTaXplcztcblx0fVxuXG5cdGlzUGFnZXJUb3AoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZXJUb3A7XG5cdH1cblxuXHRpc1BhZ2VyQm90dG9tKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VyQm90dG9tO1xuXHR9XG5cblx0aXNOZXh0UGFnZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlzTmV4dERpc2FibGVkO1xuXHR9XG5cblx0aXNQcmV2UGFnZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlzUHJldkRpc2FibGVkO1xuXHR9XG5cblx0Z2V0U3RhcnQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFydDtcblx0fVxuXG5cdGdldEVuZCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmVuZDtcblx0fVxuXG5cdGdldFNvdXJjZVNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplO1xuXHR9XG5cblx0Y2FsY3VsYXRlVmlzaWJsZVBhZ2VzKGN1cnJlbnRQYWdlOiBudW1iZXIsIG51bWJlck9mVmlzaWJsZVBhZ2VzOiBudW1iZXIsIHBhZ2U6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjdXJyZW50UGFnZSAtIG51bWJlck9mVmlzaWJsZVBhZ2VzIDwgcGFnZSAmJiBwYWdlIDwgY3VycmVudFBhZ2UgKyBudW1iZXJPZlZpc2libGVQYWdlcztcblx0fVxuXG5cdHNhbXBsZShzb3VyY2U6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcblxuXHRcdGxldCBzdGFydCA9IHRoaXMuZ2V0U3RhcnQoKTtcblxuXHRcdGlmIChzdGFydCAhPT0gMCkge1xuXHRcdFx0c3RhcnQgLT0gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc291cmNlLnNsaWNlKHN0YXJ0LCB0aGlzLmdldEVuZCgpKTtcblx0fVxuXG5cdC8vIFRPRE9cblx0Y29tcGFyZSh0YXJnZXQ6IFBhZ2luZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKSA9PT0gSlNPTi5zdHJpbmdpZnkodGFyZ2V0KTtcblx0fVxuXG59XG4iXX0=