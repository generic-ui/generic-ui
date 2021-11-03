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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvcGFnaW5nL2NvcmUvYXBpL3JlYWQvcGFnaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7SUFHeEMsTUFBTSxTQUFOLE1BQU07SUFFbEIsWUFBNkIsT0FBZ0IsRUFDekIsSUFBWSxFQUNaLFFBQWdCLEVBQ2hCLFNBQXdCLEVBQ3hCLFFBQWlCLEVBQ2pCLFdBQW9CLEVBQ3BCLGNBQXVCLEVBQ3ZCLGNBQXVCLEVBQ3ZCLEtBQWEsRUFDYixHQUFXLEVBQ1gsVUFBa0I7UUFWVCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ3pCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBUztRQUNwQixtQkFBYyxHQUFkLGNBQWMsQ0FBUztRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBUztRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLGVBQVUsR0FBVixVQUFVLENBQVE7SUFDdEMsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQztJQUVELGtCQUFrQjtRQUNqQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQztJQUVELGtCQUFrQjtRQUNqQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVELE1BQU07UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztJQUVELHFCQUFxQixDQUFDLFdBQW1CLEVBQUUsb0JBQTRCLEVBQUUsSUFBWTtRQUNwRixPQUFPLFdBQVcsR0FBRyxvQkFBb0IsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQztJQUMvRixDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQWtCO1FBRXhCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU1QixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDaEIsS0FBSyxJQUFJLENBQUMsQ0FBQztTQUNYO1FBRUQsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsT0FBTztJQUNQLE9BQU8sQ0FBQyxNQUFjO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FFRCxDQUFBO0FBL0VZLE1BQU07SUFEbEIsZUFBZTtHQUNILE1BQU0sQ0ErRWxCO1NBL0VZLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkTW9kZWxPYmplY3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5AUmVhZE1vZGVsT2JqZWN0XG5leHBvcnQgY2xhc3MgUGFnaW5nIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnZTogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2VTaXplOiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnZVNpemVzOiBBcnJheTxudW1iZXI+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2VyVG9wOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2VyQm90dG9tOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGlzTmV4dERpc2FibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGlzUHJldkRpc2FibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0YXJ0OiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZW5kOiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlU2l6ZTogbnVtYmVyKSB7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdGdldFBhZ2UoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlO1xuXHR9XG5cblx0Z2V0UGFnZVNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2l6ZTtcblx0fVxuXG5cdGdldFBhZ2VTaXplcygpOiBBcnJheTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2l6ZXM7XG5cdH1cblxuXHRpc1BhZ2VyVG9wKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VyVG9wO1xuXHR9XG5cblx0aXNQYWdlckJvdHRvbSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlckJvdHRvbTtcblx0fVxuXG5cdGlzTmV4dFBhZ2VEaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pc05leHREaXNhYmxlZDtcblx0fVxuXG5cdGlzUHJldlBhZ2VEaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pc1ByZXZEaXNhYmxlZDtcblx0fVxuXG5cdGdldFN0YXJ0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhcnQ7XG5cdH1cblxuXHRnZXRFbmQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5lbmQ7XG5cdH1cblxuXHRnZXRTb3VyY2VTaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlU2l6ZTtcblx0fVxuXG5cdGNhbGN1bGF0ZVZpc2libGVQYWdlcyhjdXJyZW50UGFnZTogbnVtYmVyLCBudW1iZXJPZlZpc2libGVQYWdlczogbnVtYmVyLCBwYWdlOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gY3VycmVudFBhZ2UgLSBudW1iZXJPZlZpc2libGVQYWdlcyA8IHBhZ2UgJiYgcGFnZSA8IGN1cnJlbnRQYWdlICsgbnVtYmVyT2ZWaXNpYmxlUGFnZXM7XG5cdH1cblxuXHRzYW1wbGUoc291cmNlOiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XG5cblx0XHRsZXQgc3RhcnQgPSB0aGlzLmdldFN0YXJ0KCk7XG5cblx0XHRpZiAoc3RhcnQgIT09IDApIHtcblx0XHRcdHN0YXJ0IC09IDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNvdXJjZS5zbGljZShzdGFydCwgdGhpcy5nZXRFbmQoKSk7XG5cdH1cblxuXHQvLyBUT0RPXG5cdGNvbXBhcmUodGFyZ2V0OiBQYWdpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcykgPT09IEpTT04uc3RyaW5naWZ5KHRhcmdldCk7XG5cdH1cblxufVxuIl19