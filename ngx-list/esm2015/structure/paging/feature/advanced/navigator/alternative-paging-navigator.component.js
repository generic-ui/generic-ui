import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PagingCommandInvoker } from '../../../core/api/paging.command-invoker';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { StructureId } from '../../../../core/api/structure.id';
export class AlternativePagingNavigatorComponent extends PureComponent {
    constructor(elRef, structureId, pagingCommandInvoker) {
        super(elRef);
        this.structureId = structureId;
        this.pagingCommandInvoker = pagingCommandInvoker;
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
    firstPage() {
        this.pagingCommandInvoker.goToPage(1, this.paging.getPage(), this.structureId);
    }
    lastPage() {
        const numberOfPages = Math.ceil(this.sourceSize / this.paging.getPageSize());
        this.pagingCommandInvoker.goToPage(numberOfPages, this.paging.getPage(), this.structureId);
    }
    getSelectorName() {
        return 'gui-paging-alternative-navigator';
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
AlternativePagingNavigatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-paging-alternative-navigator][paging][sourceSize]',
                template: "<button (click)=\"firstPage()\"\n\t\t[disabled]=\"prevDisabled\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 11.081 10.661\" width=\"11.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<g transform=\"translate(-522.98 669.601) rotate(180)\">\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t\t  stroke-width=\"1.5\" transform=\"translate(-533.75 659.25)\"/>\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\"\n\t\t\t\t  stroke-linejoin=\"round\" stroke-width=\"1.5\" transform=\"translate(-528.75 659.25)\"/>\n\t\t</g>\n\t</svg>\n</button>\n\n<button (click)=\"prevPage()\"\n\t\t[disabled]=\"prevDisabled\"\n\t\tclass=\"gui-paging-navigator-prev\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 6.081 10.661\" width=\"6.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t  stroke-width=\"1.5\" transform=\"translate(5.77 10.351) rotate(180)\"/>\n\t</svg>\n</button>\n\n<ng-content></ng-content>\n\n<button (click)=\"nextPage()\"\n\t\t[disabled]=\"nextDisabled\"\n\t\tclass=\"gui-paging-navigator-next\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 6.081 10.661\" width=\"6.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t  stroke-width=\"1.5\" transform=\"translate(0.311 0.311)\"/>\n\t</svg>\n</button>\n\n<button (click)=\"lastPage()\"\n\t\t[disabled]=\"nextDisabled\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 11.081 10.661\" width=\"11.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<g transform=\"translate(534.061 -658.939)\">\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t\t  stroke-width=\"1.5\" transform=\"translate(-533.75 659.25)\"/>\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\"\n\t\t\t\t  stroke-linejoin=\"round\" stroke-width=\"1.5\" transform=\"translate(-528.75 659.25)\"/>\n\t\t</g>\n\t</svg>\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
AlternativePagingNavigatorComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: StructureId },
    { type: PagingCommandInvoker }
];
AlternativePagingNavigatorComponent.propDecorators = {
    paging: [{ type: Input }],
    sourceSize: [{ type: Input }],
    nextPageChanged: [{ type: Output }],
    prevPageChanged: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx0ZXJuYXRpdmUtcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9hZHZhbmNlZC9uYXZpZ2F0b3IvYWx0ZXJuYXRpdmUtcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQVNoRSxNQUFNLE9BQU8sbUNBQW9DLFNBQVEsYUFBYTtJQWtCckUsWUFBWSxLQUFpQixFQUNULFdBQXdCLEVBQ3hCLG9CQUEwQztRQUM3RCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFGTSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBWDlELG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdyQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFckMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsaUJBQVksR0FBWSxLQUFLLENBQUM7SUFNOUIsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELFNBQVM7UUFDUixJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsUUFBUTtRQUNQLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxrQ0FBa0MsQ0FBQztJQUMzQyxDQUFDO0lBRU8sYUFBYTtRQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNqQixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRU8sYUFBYTtRQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDckMsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDdEQsQ0FBQzs7O1lBeEVELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsMkRBQTJEO2dCQUNyRSx5cUVBQTREO2dCQUM1RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7OztZQWI0QyxVQUFVO1lBSzlDLFdBQVc7WUFGWCxvQkFBb0I7OztxQkFhM0IsS0FBSzt5QkFHTCxLQUFLOzhCQUdMLE1BQU07OEJBR04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9yZWFkL3BhZ2luZyc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3BhZ2luZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXBhZ2luZy1hbHRlcm5hdGl2ZS1uYXZpZ2F0b3JdW3BhZ2luZ11bc291cmNlU2l6ZV0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vYWx0ZXJuYXRpdmUtcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEFsdGVybmF0aXZlUGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBQYWdpbmc7XG5cblx0QElucHV0KClcblx0c291cmNlU2l6ZTogbnVtYmVyO1xuXG5cdEBPdXRwdXQoKVxuXHRuZXh0UGFnZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHByZXZQYWdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwcmV2RGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRuZXh0RGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcihlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nQ29tbWFuZEludm9rZXI6IFBhZ2luZ0NvbW1hbmRJbnZva2VyKSB7XG5cdFx0c3VwZXIoZWxSZWYpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGVQcmV2KCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVOZXh0KCk7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLnByZXZQYWdlQ2hhbmdlZC5lbWl0KCk7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLm5leHRQYWdlQ2hhbmdlZC5lbWl0KCk7XG5cdH1cblxuXHRmaXJzdFBhZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kSW52b2tlci5nb1RvUGFnZSgxLCB0aGlzLnBhZ2luZy5nZXRQYWdlKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0bGFzdFBhZ2UoKTogdm9pZCB7XG5cdFx0Y29uc3QgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnNvdXJjZVNpemUgLyB0aGlzLnBhZ2luZy5nZXRQYWdlU2l6ZSgpKTtcblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRJbnZva2VyLmdvVG9QYWdlKG51bWJlck9mUGFnZXMsIHRoaXMucGFnaW5nLmdldFBhZ2UoKSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktcGFnaW5nLWFsdGVybmF0aXZlLW5hdmlnYXRvcic7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVByZXYoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMucGFnaW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5wcmV2RGlzYWJsZWQgPSB0aGlzLnBhZ2luZy5pc1ByZXZQYWdlRGlzYWJsZWQoKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlTmV4dCgpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5wYWdpbmcgJiYgIXRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubmV4dERpc2FibGVkID0gdGhpcy5wYWdpbmcuaXNOZXh0UGFnZURpc2FibGVkKCk7XG5cdH1cblxufVxuIl19