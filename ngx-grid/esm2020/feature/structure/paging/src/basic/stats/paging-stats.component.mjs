import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/component/src/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../../l10n/src/translation.pipe";
export class PagingStatsComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.addClassToHost('gui-mx-6');
    }
    ngOnChanges() {
        this.calculate();
    }
    calculate() {
        if (this.paging) {
            this.firstItemIndex = this.paging.getStart();
            this.lastItemIndex = this.paging.getEnd();
            this.sourceSize = this.paging.getSourceSize();
        }
    }
    isSourceNotEmpty() {
        return this.sourceSize > 0;
    }
    getSelectorName() {
        return 'gui-paging-stats';
    }
}
PagingStatsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PagingStatsComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
PagingStatsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PagingStatsComponent, selector: "div[gui-paging-stats][paging]", inputs: { paging: "paging" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\t<span class=\"gui-paging-source-stats\">\n\t\t<span>{{firstItemIndex}}</span>\n\t\t-\n\t\t<span>{{lastItemIndex}}</span>\n\t</span>\n\t<span>\n\t\t{{ 'pagingOf' | guiTranslate }}\n\t</span>\n\t<span class=\"gui-paging-source-size\">\n\t\t{{sourceSize}}\n\t</span>\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-paging-source-stats gui-paging-no-items\">\n\t\t{{'pagingNoItems' | guiTranslate}}\n\t</span>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i2.TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PagingStatsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-paging-stats][paging]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\t<span class=\"gui-paging-source-stats\">\n\t\t<span>{{firstItemIndex}}</span>\n\t\t-\n\t\t<span>{{lastItemIndex}}</span>\n\t</span>\n\t<span>\n\t\t{{ 'pagingOf' | guiTranslate }}\n\t</span>\n\t<span class=\"gui-paging-source-size\">\n\t\t{{sourceSize}}\n\t</span>\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-paging-source-stats gui-paging-no-items\">\n\t\t{{'pagingNoItems' | guiTranslate}}\n\t</span>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { paging: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXN0YXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvcGFnaW5nL3NyYy9iYXNpYy9zdGF0cy9wYWdpbmctc3RhdHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9wYWdpbmcvc3JjL2Jhc2ljL3N0YXRzL3BhZ2luZy1zdGF0cy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7QUFVbkYsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGFBQWE7SUFXdEQsWUFBWSxVQUFzQjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsU0FBUztRQUNSLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUM5QztJQUNGLENBQUM7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sa0JBQWtCLENBQUM7SUFDM0IsQ0FBQzs7a0hBbENXLG9CQUFvQjtzR0FBcEIsb0JBQW9CLCtJQ1pqQyx5ZkFtQkE7NEZEUGEsb0JBQW9CO2tCQU5oQyxTQUFTOytCQUNDLCtCQUErQixtQkFFeEIsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTtpR0FLckMsTUFBTTtzQkFETCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL3B1cmUtY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luZ01vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvcGFnaW5nL3NyYy9hcGkvbW9kZWwvcGFnaW5nLm1vZGVsJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXBhZ2luZy1zdGF0c11bcGFnaW5nXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9wYWdpbmctc3RhdHMuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmdTdGF0c0NvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogUGFnaW5nTW9kZWw7XG5cblx0c291cmNlU2l6ZTogbnVtYmVyO1xuXG5cdGZpcnN0SXRlbUluZGV4OiBudW1iZXI7XG5cblx0bGFzdEl0ZW1JbmRleDogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktbXgtNicpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGUoKTtcblx0fVxuXG5cdGNhbGN1bGF0ZSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5wYWdpbmcpIHtcblx0XHRcdHRoaXMuZmlyc3RJdGVtSW5kZXggPSB0aGlzLnBhZ2luZy5nZXRTdGFydCgpO1xuXHRcdFx0dGhpcy5sYXN0SXRlbUluZGV4ID0gdGhpcy5wYWdpbmcuZ2V0RW5kKCk7XG5cdFx0XHR0aGlzLnNvdXJjZVNpemUgPSB0aGlzLnBhZ2luZy5nZXRTb3VyY2VTaXplKCk7XG5cdFx0fVxuXHR9XG5cblx0aXNTb3VyY2VOb3RFbXB0eSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplID4gMDtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1wYWdpbmctc3RhdHMnO1xuXHR9XG5cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJpc1NvdXJjZU5vdEVtcHR5KCk7IGVsc2Ugbm9Tb3VyY2U7XCI+XG5cdDxzcGFuIGNsYXNzPVwiZ3VpLXBhZ2luZy1zb3VyY2Utc3RhdHNcIj5cblx0XHQ8c3Bhbj57e2ZpcnN0SXRlbUluZGV4fX08L3NwYW4+XG5cdFx0LVxuXHRcdDxzcGFuPnt7bGFzdEl0ZW1JbmRleH19PC9zcGFuPlxuXHQ8L3NwYW4+XG5cdDxzcGFuPlxuXHRcdHt7ICdwYWdpbmdPZicgfCBndWlUcmFuc2xhdGUgfX1cblx0PC9zcGFuPlxuXHQ8c3BhbiBjbGFzcz1cImd1aS1wYWdpbmctc291cmNlLXNpemVcIj5cblx0XHR7e3NvdXJjZVNpemV9fVxuXHQ8L3NwYW4+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNub1NvdXJjZT5cblx0PHNwYW4gY2xhc3M9XCJndWktcGFnaW5nLXNvdXJjZS1zdGF0cyBndWktcGFnaW5nLW5vLWl0ZW1zXCI+XG5cdFx0e3sncGFnaW5nTm9JdGVtcycgfCBndWlUcmFuc2xhdGV9fVxuXHQ8L3NwYW4+XG48L25nLXRlbXBsYXRlPlxuIl19