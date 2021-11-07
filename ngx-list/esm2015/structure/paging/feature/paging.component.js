import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import { PagingWarehouse } from '../core/api/paging.warehouse';
import { PagingCommandInvoker } from '../core/api/paging.command-invoker';
import { SourceWarehouse } from '../../source/core/api/source.warehouse';
import { PagingDisplayModeArchive } from './mode/paging-display-mode.archive';
import { PagingDisplayMode } from './mode/paging-display-mode';
import { PagingPosition } from './paging-position';
import { StreamCloser } from '../../../common/cdk/reactive/stream-closer';
import { CssClassModifier } from '../../common/css-class/css-class.modifier';
import { CssClass } from '../../common/css-class/css-class';
import { StructureId } from '../../core/api/structure.id';
export class PagingComponent extends SmartComponent {
    constructor(elRef, changeDetectorRef, cssClassModifier, structureId, pagingWarehouse, pagingCommandInvoker, sourceWarehouse, pagingDisplayModeArchive) {
        super(changeDetectorRef, elRef);
        this.elRef = elRef;
        this.changeDetectorRef = changeDetectorRef;
        this.cssClassModifier = cssClassModifier;
        this.structureId = structureId;
        this.pagingWarehouse = pagingWarehouse;
        this.pagingCommandInvoker = pagingCommandInvoker;
        this.sourceWarehouse = sourceWarehouse;
        this.pagingDisplayModeArchive = pagingDisplayModeArchive;
        this.alternativeDisplay = false;
        this.isPagingVisible = false;
        this.localStreamCloser = new StreamCloser();
        this.addClassToHost('gui-flex');
        this.addClassToHost('gui-justify-end');
        this.addClassToHost('gui-items-center');
        this.addClassToHost('gui-p-4');
    }
    ngOnChanges(changes) {
        if (changes.position) {
            if (this.position === PagingPosition.BOTTOM) {
                this.cssClassModifier.remove(this.elRef.nativeElement, CssClass.PAGING_TOP_CLASS_NAME);
                this.cssClassModifier.add(this.elRef.nativeElement, CssClass.PAGING_BOTTOM_CLASS_NAME);
            }
            else {
                this.cssClassModifier.remove(this.elRef.nativeElement, CssClass.PAGING_BOTTOM_CLASS_NAME);
                this.cssClassModifier.add(this.elRef.nativeElement, CssClass.PAGING_TOP_CLASS_NAME);
            }
        }
    }
    ngOnInit() {
        this.hermesSubscribe(this.pagingDisplayModeArchive.on(), (mode) => {
            this.alternativeDisplay = mode === PagingDisplayMode.ADVANCED;
        });
        this.hermesSubscribe(this.pagingWarehouse.onPaging(this.structureId), (paging) => {
            this.paging = paging;
            this.calculatePagingVisibility();
        });
        this.hermesSubscribe(this.sourceWarehouse.onOriginSize(this.structureId), (size) => {
            this.sourceSize = size;
        });
    }
    ngOnDestroy() {
        this.localStreamCloser.unsubscribe();
        super.ngOnDestroy();
    }
    changePageSize(pageSize) {
        this.pagingCommandInvoker.changePageSize(pageSize, this.structureId);
    }
    nextPage() {
        if (!this.sourceSize) {
            return;
        }
        this.pagingCommandInvoker.nextPage(this.structureId);
    }
    prevPage() {
        this.pagingCommandInvoker.prevPage(this.structureId);
    }
    getSelectorName() {
        return 'gui-paging';
    }
    calculatePagingVisibility() {
        this.isPagingVisible = this.paging && this.paging.isEnabled() &&
            (((this.position === PagingPosition.TOP) && this.paging.isPagerTop()) ||
                ((this.position === PagingPosition.BOTTOM) && this.paging.isPagerBottom()));
    }
}
PagingComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-paging][position]',
                template: "<ng-container *ngIf=\"isPagingVisible && !alternativeDisplay\">\n\n\t<ng-container *ngIf=\"!minimal; else minimalTemplate\">\n\n\t\t<div (pageSizeChanged)=\"changePageSize($event)\"\n\t\t\t [paging]=\"paging\"\n\t\t\t gui-paging-select>\n\t\t</div>\n\n\t\t<div [paging]=\"paging\"\n\t\t\t gui-paging-stats>\n\t\t</div>\n\n\t\t<div (nextPageChanged)=\"nextPage()\"\n\t\t\t (prevPageChanged)=\"prevPage()\"\n\t\t\t [paging]=\"paging\"\n\t\t\t [sourceSize]=\"sourceSize\"\n\t\t\t gui-paging-navigator>\n\t\t</div>\n\n\t</ng-container>\n\n\t<ng-template #minimalTemplate>\n\n\t\t<div [paging]=\"paging\"\n\t\t\t gui-paging-stats>\n\t\t</div>\n\n\t\t<div (nextPageChanged)=\"nextPage()\"\n\t\t\t (prevPageChanged)=\"prevPage()\"\n\t\t\t [paging]=\"paging\"\n\t\t\t [sourceSize]=\"sourceSize\"\n\t\t\t gui-paging-navigator>\n\t\t</div>\n\n\t</ng-template>\n\n</ng-container>\n\n<ng-container *ngIf=\"isPagingVisible && alternativeDisplay\">\n\n\t<div (pageSizeChanged)=\"changePageSize($event)\"\n\t\t [paging]=\"paging\"\n\t\t gui-paging-select>\n\t</div>\n\n\t<div (nextPageChanged)=\"nextPage()\"\n\t\t (prevPageChanged)=\"prevPage()\"\n\t\t [paging]=\"paging\"\n\t\t [sourceSize]=\"sourceSize\"\n\t\t class=\"gui-flex gui-p-0\"\n\t\t gui-paging-alternative-navigator>\n\n\t\t<div [paging]=\"paging\"\n\t\t\t [sourceSize]=\"sourceSize\"\n\t\t\t class=\"gui-flex gui-justify-center\"\n\t\t\t gui-paging-alternative-pages>\n\t\t</div>\n\n\t</div>\n\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-paging-alternative-navigator .gui-button{-ms-flex-line-pack:center;align-content:center;background:transparent;display:-ms-flexbox;display:flex;font-size:14px;line-height:21px;margin:0 2px;padding:0}.gui-paging-alternative-navigator .gui-button svg{-ms-flex-item-align:center;align-self:center;height:12px;margin:-1px 2px 0;width:auto}.gui-paging-alternative-navigator .gui-button svg path{stroke:#ccc;transition:stroke .3s ease-in-out}.gui-paging-alternative-navigator .gui-button:hover{background:transparent}.gui-paging-alternative-navigator .gui-button:hover svg path{stroke:#333}.gui-paging-alternative-navigator .gui-button:disabled svg{opacity:.4}.gui-paging-alternative-navigator .gui-material .gui-button{padding:2px 16px}.gui-paging-alternative-pages{line-height:21px}.gui-paging-alternative-pages .gui-paging-page{display:none}.gui-paging-alternative-pages .gui-paging-visible-page .gui-paging-page{display:block;font-family:Arial,serif}.gui-paging-alternative-pages .gui-paging-visible-page.gui-paging-active-page{color:#333}.gui-paging-alternative-pages .gui-paging-visible-page.gui-paging-active-page .gui-paging-page{font-weight:bold}.gui-paging-bottom{border-top:1px solid;border-top-color:inherit}.gui-paging-top{border-bottom:1px solid;border-bottom-color:inherit}\n", ".gui-generic .gui-paging{border-color:rgba(34,36,38,.102);font-size:14px}.gui-generic .gui-paging *{border-color:rgba(34,36,38,.102);font-size:14px}\n"]
            },] }
];
PagingComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: CssClassModifier },
    { type: StructureId },
    { type: PagingWarehouse },
    { type: PagingCommandInvoker },
    { type: SourceWarehouse },
    { type: PagingDisplayModeArchive }
];
PagingComponent.propDecorators = {
    position: [{ type: Input }],
    minimal: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBJLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUcvRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRTVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQWExRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxjQUFjO0lBa0JsRCxZQUE2QixLQUFpQixFQUMxQixpQkFBb0MsRUFDcEMsZ0JBQWtDLEVBQ2xDLFdBQXdCLEVBQ3hCLGVBQWdDLEVBQ2hDLG9CQUEwQyxFQUMxQyxlQUFnQyxFQUNoQyx3QkFB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dEUsQ0FBQztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNyQixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7SUFFTyx5QkFBeUI7UUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQzVELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3BFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7WUFoSEQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLGs4Q0FBc0M7Z0JBS3RDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDckM7OztZQTNCK0QsVUFBVTtZQUF4QyxpQkFBaUI7WUFZMUMsZ0JBQWdCO1lBR2hCLFdBQVc7WUFWWCxlQUFlO1lBQ2Ysb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZix3QkFBd0I7Ozt1QkFzQi9CLEtBQUs7c0JBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uL2NvcmUvYXBpL3JlYWQvcGFnaW5nJztcbmltcG9ydCB7IFBhZ2luZ1dhcmVob3VzZSB9IGZyb20gJy4uL2NvcmUvYXBpL3BhZ2luZy53YXJlaG91c2UnO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSB9IGZyb20gJy4vbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGUgfSBmcm9tICcuL21vZGUvcGFnaW5nLWRpc3BsYXktbW9kZSc7XG5pbXBvcnQgeyBQYWdpbmdQb3NpdGlvbiB9IGZyb20gJy4vcGFnaW5nLXBvc2l0aW9uJztcbmltcG9ydCB7IFN0cmVhbUNsb3NlciB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUvc3RyZWFtLWNsb3Nlcic7XG5pbXBvcnQgeyBDc3NDbGFzc01vZGlmaWVyIH0gZnJvbSAnLi4vLi4vY29tbW9uL2Nzcy1jbGFzcy9jc3MtY2xhc3MubW9kaWZpZXInO1xuaW1wb3J0IHsgQ3NzQ2xhc3MgfSBmcm9tICcuLi8uLi9jb21tb24vY3NzLWNsYXNzL2Nzcy1jbGFzcyc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXBhZ2luZ11bcG9zaXRpb25dJyxcblx0dGVtcGxhdGVVcmw6ICcuL3BhZ2luZy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3N0eWxlL3BhZ2luZy5uZ3guc2NzcycsXG5cdFx0Jy4vc3R5bGUvdGhlbWUvZ2VuZXJpYy5wYWdpbmcubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luZ0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRwb3NpdGlvbjogUGFnaW5nUG9zaXRpb247XG5cblx0QElucHV0KClcblx0bWluaW1hbDogYm9vbGVhbjtcblxuXHRzb3VyY2VTaXplOiBudW1iZXI7XG5cblx0cGFnaW5nOiBQYWdpbmc7XG5cblx0YWx0ZXJuYXRpdmVEaXNwbGF5OiBib29sZWFuID0gZmFsc2U7XG5cblx0aXNQYWdpbmdWaXNpYmxlID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBsb2NhbFN0cmVhbUNsb3NlciA9IG5ldyBTdHJlYW1DbG9zZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjc3NDbGFzc01vZGlmaWVyOiBDc3NDbGFzc01vZGlmaWVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdXYXJlaG91c2U6IFBhZ2luZ1dhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdDb21tYW5kSW52b2tlcjogUGFnaW5nQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlOiBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxSZWYpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1mbGV4Jyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWp1c3RpZnktZW5kJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWl0ZW1zLWNlbnRlcicpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1wLTQnKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxQYWdpbmdDb21wb25lbnQ+KSB7XG5cblx0XHRpZiAoY2hhbmdlcy5wb3NpdGlvbikge1xuXG5cdFx0XHRpZiAodGhpcy5wb3NpdGlvbiA9PT0gUGFnaW5nUG9zaXRpb24uQk9UVE9NKSB7XG5cdFx0XHRcdHRoaXMuY3NzQ2xhc3NNb2RpZmllci5yZW1vdmUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBDc3NDbGFzcy5QQUdJTkdfVE9QX0NMQVNTX05BTUUpO1xuXHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIuYWRkKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgQ3NzQ2xhc3MuUEFHSU5HX0JPVFRPTV9DTEFTU19OQU1FKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3NzQ2xhc3NNb2RpZmllci5yZW1vdmUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBDc3NDbGFzcy5QQUdJTkdfQk9UVE9NX0NMQVNTX05BTUUpO1xuXHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIuYWRkKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgQ3NzQ2xhc3MuUEFHSU5HX1RPUF9DTEFTU19OQU1FKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5wYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUub24oKSxcblx0XHRcdChtb2RlOiBQYWdpbmdEaXNwbGF5TW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmFsdGVybmF0aXZlRGlzcGxheSA9IG1vZGUgPT09IFBhZ2luZ0Rpc3BsYXlNb2RlLkFEVkFOQ0VEO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMucGFnaW5nV2FyZWhvdXNlLm9uUGFnaW5nKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHBhZ2luZzogUGFnaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMucGFnaW5nID0gcGFnaW5nO1xuXHRcdFx0XHR0aGlzLmNhbGN1bGF0ZVBhZ2luZ1Zpc2liaWxpdHkoKTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnNvdXJjZVdhcmVob3VzZS5vbk9yaWdpblNpemUodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoc2l6ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc291cmNlU2l6ZSA9IHNpemU7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMubG9jYWxTdHJlYW1DbG9zZXIudW5zdWJzY3JpYmUoKTtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcikge1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZEludm9rZXIuY2hhbmdlUGFnZVNpemUocGFnZVNpemUsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMucGFnaW5nQ29tbWFuZEludm9rZXIubmV4dFBhZ2UodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRJbnZva2VyLnByZXZQYWdlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXBhZ2luZyc7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVBhZ2luZ1Zpc2liaWxpdHkoKTogdm9pZCB7XG5cdFx0dGhpcy5pc1BhZ2luZ1Zpc2libGUgPSB0aGlzLnBhZ2luZyAmJiB0aGlzLnBhZ2luZy5pc0VuYWJsZWQoKSAmJlxuXHRcdFx0KCgodGhpcy5wb3NpdGlvbiA9PT0gUGFnaW5nUG9zaXRpb24uVE9QKSAmJiB0aGlzLnBhZ2luZy5pc1BhZ2VyVG9wKCkpIHx8XG5cdFx0XHRcdCgodGhpcy5wb3NpdGlvbiA9PT0gUGFnaW5nUG9zaXRpb24uQk9UVE9NKSAmJiB0aGlzLnBhZ2luZy5pc1BhZ2VyQm90dG9tKCkpKTtcblx0fVxuXG59XG4iXX0=