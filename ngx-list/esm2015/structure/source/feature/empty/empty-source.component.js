import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
import { ifChanged } from '../../../../common/cdk/component/check.input';
export class EmptySourceComponent extends PureComponent {
    constructor(elRef) {
        super(elRef);
        this.addClassToHost('gui-py-23');
        this.addClassToHost('gui-px-6');
    }
    ngOnChanges(changes) {
        ifChanged(changes.items, () => {
            if (this.items.length === 0) {
                this.removeClassFromHost('gui-hidden');
                this.addClassToHost('gui-block');
            }
            else {
                this.removeClassFromHost('gui-block');
                this.addClassToHost('gui-hidden');
            }
        });
    }
    getSelectorName() {
        return 'gui-empty-source';
    }
}
EmptySourceComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-empty-source][items]',
                template: "<ng-container *ngIf=\"items.length === 0\">\n\t{{'sourceEmpty' | guiTranslate}}\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
EmptySourceComponent.ctorParameters = () => [
    { type: ElementRef }
];
EmptySourceComponent.propDecorators = {
    items: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktc291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3NvdXJjZS9mZWF0dXJlL2VtcHR5L2VtcHR5LXNvdXJjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUVoRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFTekUsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGFBQWE7SUFLdEQsWUFBWSxLQUFpQjtRQUM1QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUF3QztRQUVuRCxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7WUFDN0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNqQztpQkFBTTtnQkFDTixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbEM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sa0JBQWtCLENBQUM7SUFDM0IsQ0FBQzs7O1lBaENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsOEJBQThCO2dCQUN4Qyw4R0FBNEM7Z0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7O1lBWjRDLFVBQVU7OztvQkFlckQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IGlmQ2hhbmdlZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2NoZWNrLmlucHV0JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWVtcHR5LXNvdXJjZV1baXRlbXNdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2VtcHR5LXNvdXJjZS5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEVtcHR5U291cmNlQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0aXRlbXM6IEFycmF5PGFueT47XG5cblx0Y29uc3RydWN0b3IoZWxSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbFJlZik7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLXB5LTIzJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLXB4LTYnKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxFbXB0eVNvdXJjZUNvbXBvbmVudD4pIHtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLml0ZW1zLCAoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5pdGVtcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzc0Zyb21Ib3N0KCdndWktaGlkZGVuJyk7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1ibG9jaycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzc0Zyb21Ib3N0KCdndWktYmxvY2snKTtcblx0XHRcdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWhpZGRlbicpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWVtcHR5LXNvdXJjZSc7XG5cdH1cbn1cbiJdfQ==