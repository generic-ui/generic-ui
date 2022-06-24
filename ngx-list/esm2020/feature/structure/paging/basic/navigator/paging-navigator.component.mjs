import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
import * as i2 from "../../../../l10n/translation.pipe";
export class PagingNavigatorComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.nextPageChanged = new EventEmitter();
        this.prevPageChanged = new EventEmitter();
        this.prevDisabled = false;
        this.nextDisabled = false;
    }
    ngOnChanges() {
        this.calculatePrev();
        this.calculateNext();
    }
    prevPage() {
        this.prevPageChanged.emit();
    }
    nextPage() {
        this.nextPageChanged.emit();
    }
    getSelectorName() {
        return 'gui-paging-navigator';
    }
    calculatePrev() {
        if (!this.paging) {
            return;
        }
        this.prevDisabled = this.paging.isPrevPageDisabled();
    }
    calculateNext() {
        if (!this.paging && !this.sourceSize) {
            return;
        }
        this.nextDisabled = this.paging.isNextPageDisabled();
    }
}
PagingNavigatorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PagingNavigatorComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
PagingNavigatorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PagingNavigatorComponent, selector: "div[gui-paging-navigator][paging]", inputs: { paging: "paging", sourceSize: "sourceSize" }, outputs: { nextPageChanged: "nextPageChanged", prevPageChanged: "prevPageChanged" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<gui-button-group>\n\t<button (click)=\"prevPage()\"\n\t\t\t[disabled]=\"prevDisabled\"\n\t\t\tclass=\"gui-paging-navigator-prev gui-mr-5\"\n\t\t\tgui-button>\n\t\t{{ 'pagingPrevPage' | guiTranslate }}\n\t</button>\n\n\t<button (click)=\"nextPage()\"\n\t\t\t[disabled]=\"nextDisabled\"\n\t\t\tclass=\"gui-paging-navigator-next gui-mr-0\"\n\t\t\tgui-button>\n\t\t{{ 'pagingNextPage' | guiTranslate }}\n\t</button>\n</gui-button-group>\n", components: [{ type: i1.FabricButtonGroupComponent, selector: "gui-button-group" }, { type: i1.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }], pipes: { "guiTranslate": i2.TranslationPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PagingNavigatorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-paging-navigator][paging]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<gui-button-group>\n\t<button (click)=\"prevPage()\"\n\t\t\t[disabled]=\"prevDisabled\"\n\t\t\tclass=\"gui-paging-navigator-prev gui-mr-5\"\n\t\t\tgui-button>\n\t\t{{ 'pagingPrevPage' | guiTranslate }}\n\t</button>\n\n\t<button (click)=\"nextPage()\"\n\t\t\t[disabled]=\"nextDisabled\"\n\t\t\tclass=\"gui-paging-navigator-next gui-mr-0\"\n\t\t\tgui-button>\n\t\t{{ 'pagingNextPage' | guiTranslate }}\n\t</button>\n</gui-button-group>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { paging: [{
                type: Input
            }], sourceSize: [{
                type: Input
            }], nextPageChanged: [{
                type: Output
            }], prevPageChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3BhZ2luZy9iYXNpYy9uYXZpZ2F0b3IvcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3BhZ2luZy9iYXNpYy9uYXZpZ2F0b3IvcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7OztBQVNoRixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsYUFBYTtJQWtCMUQsWUFBWSxVQUFzQjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFWbkIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3JDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5QixpQkFBWSxHQUFZLEtBQUssQ0FBQztJQUk5QixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7SUFFTyxhQUFhO1FBRXBCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFTyxhQUFhO1FBRXBCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNyQyxPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN0RCxDQUFDOztzSEF2RFcsd0JBQXdCOzBHQUF4Qix3QkFBd0Isa1FDWnJDLHFiQWVBOzRGREhhLHdCQUF3QjtrQkFOcEMsU0FBUzsrQkFDQyxtQ0FBbUMsbUJBRTVCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7aUdBS3JDLE1BQU07c0JBREwsS0FBSztnQkFJTixVQUFVO3NCQURULEtBQUs7Z0JBSU4sZUFBZTtzQkFEZCxNQUFNO2dCQUlQLGVBQWU7c0JBRGQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmdNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9hcGkvbW9kZWwvcGFnaW5nLm1vZGVsJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1wYWdpbmctbmF2aWdhdG9yXVtwYWdpbmddJyxcblx0dGVtcGxhdGVVcmw6ICcuL3BhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRwYWdpbmc6IFBhZ2luZ01vZGVsO1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZVNpemU/OiBudW1iZXI7XG5cblx0QE91dHB1dCgpXG5cdG5leHRQYWdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0cHJldlBhZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHByZXZEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdG5leHREaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdHRoaXMuY2FsY3VsYXRlUHJldigpO1xuXHRcdHRoaXMuY2FsY3VsYXRlTmV4dCgpO1xuXHR9XG5cblx0cHJldlBhZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5wcmV2UGFnZUNoYW5nZWQuZW1pdCgpO1xuXHR9XG5cblx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5uZXh0UGFnZUNoYW5nZWQuZW1pdCgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXBhZ2luZy1uYXZpZ2F0b3InO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVQcmV2KCk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnBhZ2luZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMucHJldkRpc2FibGVkID0gdGhpcy5wYWdpbmcuaXNQcmV2UGFnZURpc2FibGVkKCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZU5leHQoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMucGFnaW5nICYmICF0aGlzLnNvdXJjZVNpemUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLm5leHREaXNhYmxlZCA9IHRoaXMucGFnaW5nLmlzTmV4dFBhZ2VEaXNhYmxlZCgpO1xuXHR9XG5cbn1cbiIsIjxndWktYnV0dG9uLWdyb3VwPlxuXHQ8YnV0dG9uIChjbGljayk9XCJwcmV2UGFnZSgpXCJcblx0XHRcdFtkaXNhYmxlZF09XCJwcmV2RGlzYWJsZWRcIlxuXHRcdFx0Y2xhc3M9XCJndWktcGFnaW5nLW5hdmlnYXRvci1wcmV2IGd1aS1tci01XCJcblx0XHRcdGd1aS1idXR0b24+XG5cdFx0e3sgJ3BhZ2luZ1ByZXZQYWdlJyB8IGd1aVRyYW5zbGF0ZSB9fVxuXHQ8L2J1dHRvbj5cblxuXHQ8YnV0dG9uIChjbGljayk9XCJuZXh0UGFnZSgpXCJcblx0XHRcdFtkaXNhYmxlZF09XCJuZXh0RGlzYWJsZWRcIlxuXHRcdFx0Y2xhc3M9XCJndWktcGFnaW5nLW5hdmlnYXRvci1uZXh0IGd1aS1tci0wXCJcblx0XHRcdGd1aS1idXR0b24+XG5cdFx0e3sgJ3BhZ2luZ05leHRQYWdlJyB8IGd1aVRyYW5zbGF0ZSB9fVxuXHQ8L2J1dHRvbj5cbjwvZ3VpLWJ1dHRvbi1ncm91cD5cbiJdfQ==