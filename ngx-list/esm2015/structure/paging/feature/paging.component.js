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
        this.subscribe(this.pagingDisplayModeArchive.on(), (mode) => {
            this.alternativeDisplay = mode === PagingDisplayMode.ADVANCED;
        });
        this.subscribe(this.pagingWarehouse.onPaging(this.structureId), (paging) => {
            this.paging = paging;
            this.calculatePagingVisibility();
        });
        this.subscribe(this.sourceWarehouse.onOriginSize(this.structureId), (size) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBJLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUcvRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRTVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQWExRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxjQUFjO0lBa0JsRCxZQUE2QixLQUFpQixFQUMxQixpQkFBb0MsRUFDcEMsZ0JBQWtDLEVBQ2xDLFdBQXdCLEVBQ3hCLGVBQWdDLEVBQ2hDLG9CQUEwQyxFQUMxQyxlQUFnQyxFQUNoQyx3QkFB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LENBQUM7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDckIsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDO0lBRU8seUJBQXlCO1FBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUM1RCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNwRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7O1lBaEhELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxrOENBQXNDO2dCQUt0QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3JDOzs7WUEzQitELFVBQVU7WUFBeEMsaUJBQWlCO1lBWTFDLGdCQUFnQjtZQUdoQixXQUFXO1lBVlgsZUFBZTtZQUNmLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2Ysd0JBQXdCOzs7dUJBc0IvQixLQUFLO3NCQUdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQYWdpbmdNb2RlbCB9IGZyb20gJy4uL2NvcmUvYXBpL3BhZ2luZy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuLi9jb3JlL2FwaS9wYWdpbmcud2FyZWhvdXNlJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vY29yZS9hcGkvcGFnaW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUgfSBmcm9tICcuL21vZGUvcGFnaW5nLWRpc3BsYXktbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BsYXlNb2RlIH0gZnJvbSAnLi9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUnO1xuaW1wb3J0IHsgUGFnaW5nUG9zaXRpb24gfSBmcm9tICcuL3BhZ2luZy1wb3NpdGlvbic7XG5pbXBvcnQgeyBTdHJlYW1DbG9zZXIgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlL3N0cmVhbS1jbG9zZXInO1xuaW1wb3J0IHsgQ3NzQ2xhc3NNb2RpZmllciB9IGZyb20gJy4uLy4uL2NvbW1vbi9jc3MtY2xhc3MvY3NzLWNsYXNzLm1vZGlmaWVyJztcbmltcG9ydCB7IENzc0NsYXNzIH0gZnJvbSAnLi4vLi4vY29tbW9uL2Nzcy1jbGFzcy9jc3MtY2xhc3MnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1wYWdpbmddW3Bvc2l0aW9uXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9wYWdpbmcuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9zdHlsZS9wYWdpbmcubmd4LnNjc3MnLFxuXHRcdCcuL3N0eWxlL3RoZW1lL2dlbmVyaWMucGFnaW5nLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmdDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0cG9zaXRpb246IFBhZ2luZ1Bvc2l0aW9uO1xuXG5cdEBJbnB1dCgpXG5cdG1pbmltYWw6IGJvb2xlYW47XG5cblx0c291cmNlU2l6ZTogbnVtYmVyO1xuXG5cdHBhZ2luZzogUGFnaW5nTW9kZWw7XG5cblx0YWx0ZXJuYXRpdmVEaXNwbGF5OiBib29sZWFuID0gZmFsc2U7XG5cblx0aXNQYWdpbmdWaXNpYmxlID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBsb2NhbFN0cmVhbUNsb3NlciA9IG5ldyBTdHJlYW1DbG9zZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjc3NDbGFzc01vZGlmaWVyOiBDc3NDbGFzc01vZGlmaWVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdXYXJlaG91c2U6IFBhZ2luZ1dhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdDb21tYW5kSW52b2tlcjogUGFnaW5nQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlOiBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxSZWYpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1mbGV4Jyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWp1c3RpZnktZW5kJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWl0ZW1zLWNlbnRlcicpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1wLTQnKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxQYWdpbmdDb21wb25lbnQ+KSB7XG5cblx0XHRpZiAoY2hhbmdlcy5wb3NpdGlvbikge1xuXG5cdFx0XHRpZiAodGhpcy5wb3NpdGlvbiA9PT0gUGFnaW5nUG9zaXRpb24uQk9UVE9NKSB7XG5cdFx0XHRcdHRoaXMuY3NzQ2xhc3NNb2RpZmllci5yZW1vdmUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBDc3NDbGFzcy5QQUdJTkdfVE9QX0NMQVNTX05BTUUpO1xuXHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIuYWRkKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgQ3NzQ2xhc3MuUEFHSU5HX0JPVFRPTV9DTEFTU19OQU1FKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3NzQ2xhc3NNb2RpZmllci5yZW1vdmUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBDc3NDbGFzcy5QQUdJTkdfQk9UVE9NX0NMQVNTX05BTUUpO1xuXHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIuYWRkKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgQ3NzQ2xhc3MuUEFHSU5HX1RPUF9DTEFTU19OQU1FKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5wYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUub24oKSxcblx0XHRcdChtb2RlOiBQYWdpbmdEaXNwbGF5TW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmFsdGVybmF0aXZlRGlzcGxheSA9IG1vZGUgPT09IFBhZ2luZ0Rpc3BsYXlNb2RlLkFEVkFOQ0VEO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMucGFnaW5nV2FyZWhvdXNlLm9uUGFnaW5nKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHBhZ2luZzogUGFnaW5nTW9kZWwpID0+IHtcblx0XHRcdFx0dGhpcy5wYWdpbmcgPSBwYWdpbmc7XG5cdFx0XHRcdHRoaXMuY2FsY3VsYXRlUGFnaW5nVmlzaWJpbGl0eSgpO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMuc291cmNlV2FyZWhvdXNlLm9uT3JpZ2luU2l6ZSh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChzaXplOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zb3VyY2VTaXplID0gc2l6ZTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5sb2NhbFN0cmVhbUNsb3Nlci51bnN1YnNjcmliZSgpO1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kSW52b2tlci5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5zb3VyY2VTaXplKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kSW52b2tlci5uZXh0UGFnZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZEludm9rZXIucHJldlBhZ2UodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktcGFnaW5nJztcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlUGFnaW5nVmlzaWJpbGl0eSgpOiB2b2lkIHtcblx0XHR0aGlzLmlzUGFnaW5nVmlzaWJsZSA9IHRoaXMucGFnaW5nICYmIHRoaXMucGFnaW5nLmlzRW5hYmxlZCgpICYmXG5cdFx0XHQoKCh0aGlzLnBvc2l0aW9uID09PSBQYWdpbmdQb3NpdGlvbi5UT1ApICYmIHRoaXMucGFnaW5nLmlzUGFnZXJUb3AoKSkgfHxcblx0XHRcdFx0KCh0aGlzLnBvc2l0aW9uID09PSBQYWdpbmdQb3NpdGlvbi5CT1RUT00pICYmIHRoaXMucGFnaW5nLmlzUGFnZXJCb3R0b20oKSkpO1xuXHR9XG5cbn1cbiJdfQ==