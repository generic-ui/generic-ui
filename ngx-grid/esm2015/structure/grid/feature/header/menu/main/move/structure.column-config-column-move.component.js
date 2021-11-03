import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../../../common/cdk/component/pure-component';
export class StructureColumnConfigColumnMoveComponent extends PureComponent {
    constructor(elRef) {
        super(elRef);
        this.movedLeft = new EventEmitter();
        this.movedRight = new EventEmitter();
    }
    moveLeft() {
        this.movedLeft.emit();
    }
    moveRight() {
        this.movedRight.emit();
    }
    getSelectorName() {
        return 'gui-structure-column-config-column-move';
    }
}
StructureColumnConfigColumnMoveComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-column-config-column-move][column]',
                template: "<div class=\"gui-header-menu-column-move\">\n\t<div (click)=\"moveLeft()\"\n\t\t class=\"gui-header-menu-column-move-item left\">\n\t\t<div [rotateDeg]=\"-90\" gui-structure-column-menu-arrow-icon></div>\n\t\t{{'headerMenuMainTabMoveLeft' | guiTranslate}}\n\t</div>\n\n\t<div (click)=\"moveRight()\"\n\t\t class=\"gui-header-menu-column-move-item right\">\n\t\t{{'headerMenuMainTabMoveRight' | guiTranslate}}\n\t\t<div gui-structure-column-menu-arrow-icon></div>\n\t</div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
StructureColumnConfigColumnMoveComponent.ctorParameters = () => [
    { type: ElementRef }
];
StructureColumnConfigColumnMoveComponent.propDecorators = {
    column: [{ type: Input }],
    movedLeft: [{ type: Output }],
    movedRight: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLW1vdmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L21haW4vbW92ZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0gsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBUXpGLE1BQU0sT0FBTyx3Q0FBeUMsU0FBUSxhQUFhO0lBVzFFLFlBQVksS0FBaUI7UUFDNUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBTmQsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFHckMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFJdEMsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxTQUFTO1FBQ1IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLHlDQUF5QyxDQUFDO0lBQ2xELENBQUM7OztZQS9CRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHNEQUFzRDtnQkFDaEUsOGVBQW1FO2dCQUNuRSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7OztZQVY0QyxVQUFVOzs7cUJBYXJELEtBQUs7d0JBR0wsTUFBTTt5QkFHTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1tb3ZlXVtjb2x1bW5dJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLWNvbHVtbi1tb3ZlLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uTW92ZUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQ7XG5cblx0QE91dHB1dCgpXG5cdG1vdmVkTGVmdCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRAT3V0cHV0KClcblx0bW92ZWRSaWdodCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRjb25zdHJ1Y3RvcihlbFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsUmVmKTtcblx0fVxuXG5cdG1vdmVMZWZ0KCk6IHZvaWQge1xuXHRcdHRoaXMubW92ZWRMZWZ0LmVtaXQoKTtcblx0fVxuXG5cdG1vdmVSaWdodCgpOiB2b2lkIHtcblx0XHR0aGlzLm1vdmVkUmlnaHQuZW1pdCgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1tb3ZlJztcblx0fVxuXG59XG4iXX0=