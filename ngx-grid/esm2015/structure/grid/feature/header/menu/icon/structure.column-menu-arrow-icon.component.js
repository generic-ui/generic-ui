import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../../common/cdk/component/pure-component';
export class StructureColumnMenuArrowIconComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.rotateDeg = 90;
    }
    getSelectorName() {
        return 'gui-structure-column-menu-arrow-icon';
    }
}
StructureColumnMenuArrowIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-column-menu-arrow-icon]',
                template: `
		<div [style.transform]="'rotate(' + rotateDeg + 'deg)'"
			 [class.gui-structure-column-menu-sort-icon]="sort">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.04 11.72">
				<line class="cls-1" x1="5.02" y1="2.15" x2="5.02" y2="10.97"/>
				<line class="cls-1" x1="5.02" y1="0.75" x2="9.29" y2="5.02"/>
				<line class="cls-1" x1="5.02" y1="0.75" x2="0.75" y2="5.02"/>
			</svg>
		</div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
StructureColumnMenuArrowIconComponent.ctorParameters = () => [
    { type: ElementRef }
];
StructureColumnMenuArrowIconComponent.propDecorators = {
    rotateDeg: [{ type: Input }],
    sort: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWFycm93LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L2ljb24vc3RydWN0dXJlLmNvbHVtbi1tZW51LWFycm93LWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFrQnRGLE1BQU0sT0FBTyxxQ0FBc0MsU0FBUSxhQUFhO0lBUXZFLFlBQVksVUFBc0I7UUFDakMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBTm5CLGNBQVMsR0FBVyxFQUFFLENBQUM7SUFPdkIsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxzQ0FBc0MsQ0FBQztJQUMvQyxDQUFDOzs7WUE3QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSwyQ0FBMkM7Z0JBQ3JELFFBQVEsRUFBRTs7Ozs7Ozs7O0VBU1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7WUFsQjRDLFVBQVU7Ozt3QkFxQnJELEtBQUs7bUJBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uXScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBbc3R5bGUudHJhbnNmb3JtXT1cIidyb3RhdGUoJyArIHJvdGF0ZURlZyArICdkZWcpJ1wiXG5cdFx0XHQgW2NsYXNzLmd1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtc29ydC1pY29uXT1cInNvcnRcIj5cblx0XHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAuMDQgMTEuNzJcIj5cblx0XHRcdFx0PGxpbmUgY2xhc3M9XCJjbHMtMVwiIHgxPVwiNS4wMlwiIHkxPVwiMi4xNVwiIHgyPVwiNS4wMlwiIHkyPVwiMTAuOTdcIi8+XG5cdFx0XHRcdDxsaW5lIGNsYXNzPVwiY2xzLTFcIiB4MT1cIjUuMDJcIiB5MT1cIjAuNzVcIiB4Mj1cIjkuMjlcIiB5Mj1cIjUuMDJcIi8+XG5cdFx0XHRcdDxsaW5lIGNsYXNzPVwiY2xzLTFcIiB4MT1cIjUuMDJcIiB5MT1cIjAuNzVcIiB4Mj1cIjAuNzVcIiB5Mj1cIjUuMDJcIi8+XG5cdFx0XHQ8L3N2Zz5cblx0XHQ8L2Rpdj5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWVudUFycm93SWNvbkNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHJvdGF0ZURlZzogbnVtYmVyID0gOTA7XG5cblx0QElucHV0KClcblx0c29ydDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWFycm93LWljb24nO1xuXHR9XG59XG4iXX0=