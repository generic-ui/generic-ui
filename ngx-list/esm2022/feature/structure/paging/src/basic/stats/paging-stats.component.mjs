import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/component/src/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../../l10n/src/translation.pipe";
export class PagingStatsComponent extends PureComponent {
    paging;
    sourceSize;
    firstItemIndex;
    lastItemIndex;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PagingStatsComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PagingStatsComponent, selector: "div[gui-paging-stats][paging]", inputs: { paging: "paging" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\t<span class=\"gui-paging-source-stats\">\n\t\t<span>{{firstItemIndex}}</span>\n\t\t-\n\t\t<span>{{lastItemIndex}}</span>\n\t</span>\n\t<span>\n\t\t{{ 'pagingOf' | guiTranslate }}\n\t</span>\n\t<span class=\"gui-paging-source-size\">\n\t\t{{sourceSize}}\n\t</span>\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-paging-source-stats gui-paging-no-items\">\n\t\t{{'pagingNoItems' | guiTranslate}}\n\t</span>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i2.TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PagingStatsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-paging-stats][paging]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\t<span class=\"gui-paging-source-stats\">\n\t\t<span>{{firstItemIndex}}</span>\n\t\t-\n\t\t<span>{{lastItemIndex}}</span>\n\t</span>\n\t<span>\n\t\t{{ 'pagingOf' | guiTranslate }}\n\t</span>\n\t<span class=\"gui-paging-source-size\">\n\t\t{{sourceSize}}\n\t</span>\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-paging-source-stats gui-paging-no-items\">\n\t\t{{'pagingNoItems' | guiTranslate}}\n\t</span>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { paging: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXN0YXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvcGFnaW5nL3NyYy9iYXNpYy9zdGF0cy9wYWdpbmctc3RhdHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9wYWdpbmcvc3JjL2Jhc2ljL3N0YXRzL3BhZ2luZy1zdGF0cy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7QUFVbkYsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGFBQWE7SUFHdEQsTUFBTSxDQUFjO0lBRXBCLFVBQVUsQ0FBUztJQUVuQixjQUFjLENBQVM7SUFFdkIsYUFBYSxDQUFTO0lBRXRCLFlBQVksVUFBc0I7UUFDakMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFNBQVM7UUFDUixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDOUM7SUFDRixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLGtCQUFrQixDQUFDO0lBQzNCLENBQUM7d0dBbENXLG9CQUFvQjs0RkFBcEIsb0JBQW9CLCtJQ1pqQyx5ZkFtQkE7OzRGRFBhLG9CQUFvQjtrQkFOaEMsU0FBUzsrQkFDQywrQkFBK0IsbUJBRXhCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7aUdBS3JDLE1BQU07c0JBREwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9wdXJlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmdNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvYXBpL21vZGVsL3BhZ2luZy5tb2RlbCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1wYWdpbmctc3RhdHNdW3BhZ2luZ10nLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLXN0YXRzLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nU3RhdHNDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRwYWdpbmc6IFBhZ2luZ01vZGVsO1xuXG5cdHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRmaXJzdEl0ZW1JbmRleDogbnVtYmVyO1xuXG5cdGxhc3RJdGVtSW5kZXg6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLW14LTYnKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdHRoaXMuY2FsY3VsYXRlKCk7XG5cdH1cblxuXHRjYWxjdWxhdGUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMucGFnaW5nKSB7XG5cdFx0XHR0aGlzLmZpcnN0SXRlbUluZGV4ID0gdGhpcy5wYWdpbmcuZ2V0U3RhcnQoKTtcblx0XHRcdHRoaXMubGFzdEl0ZW1JbmRleCA9IHRoaXMucGFnaW5nLmdldEVuZCgpO1xuXHRcdFx0dGhpcy5zb3VyY2VTaXplID0gdGhpcy5wYWdpbmcuZ2V0U291cmNlU2l6ZSgpO1xuXHRcdH1cblx0fVxuXG5cdGlzU291cmNlTm90RW1wdHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlU2l6ZSA+IDA7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktcGFnaW5nLXN0YXRzJztcblx0fVxuXG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiaXNTb3VyY2VOb3RFbXB0eSgpOyBlbHNlIG5vU291cmNlO1wiPlxuXHQ8c3BhbiBjbGFzcz1cImd1aS1wYWdpbmctc291cmNlLXN0YXRzXCI+XG5cdFx0PHNwYW4+e3tmaXJzdEl0ZW1JbmRleH19PC9zcGFuPlxuXHRcdC1cblx0XHQ8c3Bhbj57e2xhc3RJdGVtSW5kZXh9fTwvc3Bhbj5cblx0PC9zcGFuPlxuXHQ8c3Bhbj5cblx0XHR7eyAncGFnaW5nT2YnIHwgZ3VpVHJhbnNsYXRlIH19XG5cdDwvc3Bhbj5cblx0PHNwYW4gY2xhc3M9XCJndWktcGFnaW5nLXNvdXJjZS1zaXplXCI+XG5cdFx0e3tzb3VyY2VTaXplfX1cblx0PC9zcGFuPlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy10ZW1wbGF0ZSAjbm9Tb3VyY2U+XG5cdDxzcGFuIGNsYXNzPVwiZ3VpLXBhZ2luZy1zb3VyY2Utc3RhdHMgZ3VpLXBhZ2luZy1uby1pdGVtc1wiPlxuXHRcdHt7J3BhZ2luZ05vSXRlbXMnIHwgZ3VpVHJhbnNsYXRlfX1cblx0PC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==