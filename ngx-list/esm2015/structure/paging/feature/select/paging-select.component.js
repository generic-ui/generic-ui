import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
import { ifChanged } from '../../../../common/cdk/component/check.input';
export class PagingSelectComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.pageSizeChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        ifChanged(changes.paging, () => {
            if (this.paging) {
                this.selectPageSizes = this.getSelectPageSizes();
                this.selectPageSize = this.getSelectPageSize(this.paging.getPageSize());
            }
        });
    }
    changePageSize(pageSize) {
        this.pageSizeChanged.emit(+pageSize.value);
    }
    getSelectorName() {
        return 'gui-paging-select';
    }
    getSelectPageSizes() {
        const selectPageSizes = [], pageSizes = this.paging.getPageSizes();
        pageSizes.forEach((pageSize) => {
            const selectOption = this.getSelectPageSize(pageSize);
            selectPageSizes.push(selectOption);
        });
        return selectPageSizes;
    }
    getSelectPageSize(pageSize) {
        return { name: pageSize.toString(), value: pageSize.toString() };
    }
}
PagingSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-paging-select][paging]',
                template: "<span class=\"gui-inline-block gui-mr-5\">\n\t{{ 'pagingItemsPerPage' | guiTranslate }}\n</span>\n\n<gui-select (optionChanged)=\"changePageSize($event)\"\n\t\t\t[options]=\"selectPageSizes\"\n\t\t\t[selected]=\"selectPageSize\"\n\t\t\t[width]=\"25\">\n</gui-select>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
PagingSelectComponent.ctorParameters = () => [
    { type: ElementRef }
];
PagingSelectComponent.propDecorators = {
    paging: [{ type: Input }],
    pageSizeChanged: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9zZWxlY3QvcGFnaW5nLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJMUksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRWhGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQVN6RSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsYUFBYTtJQVl2RCxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQVBuQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFRckMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUF5QztRQUVwRCxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNoQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7YUFDeEU7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxjQUFjLENBQUMsUUFBeUI7UUFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxtQkFBbUIsQ0FBQztJQUM1QixDQUFDO0lBRU8sa0JBQWtCO1FBQ3pCLE1BQU0sZUFBZSxHQUEyQixFQUFFLEVBQ2pELFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXhDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFnQixFQUFFLEVBQUU7WUFDdEMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLGVBQWUsQ0FBQztJQUN4QixDQUFDO0lBRU8saUJBQWlCLENBQUMsUUFBZ0I7UUFDekMsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO0lBQ2xFLENBQUM7OztZQXRERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsd1JBQTZDO2dCQUM3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7OztZQWQ0QyxVQUFVOzs7cUJBaUJyRCxLQUFLOzhCQUdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nTW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9wYWdpbmcubW9kZWwnO1xuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IGlmQ2hhbmdlZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2NoZWNrLmlucHV0JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXBhZ2luZy1zZWxlY3RdW3BhZ2luZ10nLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luZ1NlbGVjdENvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogUGFnaW5nTW9kZWw7XG5cblx0QE91dHB1dCgpXG5cdHBhZ2VTaXplQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRzZWxlY3RQYWdlU2l6ZXM6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj47XG5cblx0c2VsZWN0UGFnZVNpemU6IEd1aVNlbGVjdE9wdGlvbjtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8UGFnaW5nU2VsZWN0Q29tcG9uZW50Pikge1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMucGFnaW5nLCAoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5wYWdpbmcpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RQYWdlU2l6ZXMgPSB0aGlzLmdldFNlbGVjdFBhZ2VTaXplcygpO1xuXHRcdFx0XHR0aGlzLnNlbGVjdFBhZ2VTaXplID0gdGhpcy5nZXRTZWxlY3RQYWdlU2l6ZSh0aGlzLnBhZ2luZy5nZXRQYWdlU2l6ZSgpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBHdWlTZWxlY3RPcHRpb24pOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VTaXplQ2hhbmdlZC5lbWl0KCtwYWdlU2l6ZS52YWx1ZSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktcGFnaW5nLXNlbGVjdCc7XG5cdH1cblxuXHRwcml2YXRlIGdldFNlbGVjdFBhZ2VTaXplcygpOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+IHtcblx0XHRjb25zdCBzZWxlY3RQYWdlU2l6ZXM6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj4gPSBbXSxcblx0XHRcdHBhZ2VTaXplcyA9IHRoaXMucGFnaW5nLmdldFBhZ2VTaXplcygpO1xuXG5cdFx0cGFnZVNpemVzLmZvckVhY2goKHBhZ2VTaXplOiBudW1iZXIpID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdE9wdGlvbiA9IHRoaXMuZ2V0U2VsZWN0UGFnZVNpemUocGFnZVNpemUpO1xuXHRcdFx0c2VsZWN0UGFnZVNpemVzLnB1c2goc2VsZWN0T3B0aW9uKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBzZWxlY3RQYWdlU2l6ZXM7XG5cdH1cblxuXHRwcml2YXRlIGdldFNlbGVjdFBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiBHdWlTZWxlY3RPcHRpb24ge1xuXHRcdHJldHVybiB7IG5hbWU6IHBhZ2VTaXplLnRvU3RyaW5nKCksIHZhbHVlOiBwYWdlU2l6ZS50b1N0cmluZygpIH07XG5cdH1cblxufVxuIl19