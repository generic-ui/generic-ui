import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../../../../../common/cdk/component/icon-component';
export class StructureColumnManagerIconComponent extends IconComponent {
    constructor(elementRef, changeDetectorRef) {
        super(elementRef, changeDetectorRef);
    }
    getSelectorName() {
        return 'gui-structure-column-manager-icon';
    }
}
StructureColumnManagerIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-column-manager-icon]',
                template: `
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.32 10.31">
			<line class="cls-1" x1="9.57" y1="3.65" x2="0.75" y2="3.65"/>
			<line class="cls-2" x1="9.57" y1="0.75" x2="0.75" y2="0.75"/>
			<line class="cls-2" x1="0.75" y1="9.56" x2="0.75" y2="0.88"/>
			<line class="cls-1" x1="3.69" y1="9.65" x2="3.69" y2="3.89"/>
			<line class="cls-1" x1="6.63" y1="9.56" x2="6.63" y2="3.89"/>
			<line class="cls-2" x1="9.57" y1="9.56" x2="9.57" y2="0.88"/>
		</svg>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
StructureColumnManagerIconComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2NvbHVtbi1tYW5hZ2VyL2ljb24vc3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQWtCbkYsTUFBTSxPQUFPLG1DQUFvQyxTQUFRLGFBQWE7SUFFckUsWUFBWSxVQUFzQixFQUMvQixpQkFBb0M7UUFDdEMsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sbUNBQW1DLENBQUM7SUFDNUMsQ0FBQzs7O1lBeEJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsd0NBQXdDO2dCQUNsRCxRQUFRLEVBQUU7Ozs7Ozs7OztFQVNUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7O1lBbEIrRCxVQUFVO1lBQXhDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2ljb24tY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWFuYWdlci1pY29uXScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PHN2ZyBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAuMzIgMTAuMzFcIj5cblx0XHRcdDxsaW5lIGNsYXNzPVwiY2xzLTFcIiB4MT1cIjkuNTdcIiB5MT1cIjMuNjVcIiB4Mj1cIjAuNzVcIiB5Mj1cIjMuNjVcIi8+XG5cdFx0XHQ8bGluZSBjbGFzcz1cImNscy0yXCIgeDE9XCI5LjU3XCIgeTE9XCIwLjc1XCIgeDI9XCIwLjc1XCIgeTI9XCIwLjc1XCIvPlxuXHRcdFx0PGxpbmUgY2xhc3M9XCJjbHMtMlwiIHgxPVwiMC43NVwiIHkxPVwiOS41NlwiIHgyPVwiMC43NVwiIHkyPVwiMC44OFwiLz5cblx0XHRcdDxsaW5lIGNsYXNzPVwiY2xzLTFcIiB4MT1cIjMuNjlcIiB5MT1cIjkuNjVcIiB4Mj1cIjMuNjlcIiB5Mj1cIjMuODlcIi8+XG5cdFx0XHQ8bGluZSBjbGFzcz1cImNscy0xXCIgeDE9XCI2LjYzXCIgeTE9XCI5LjU2XCIgeDI9XCI2LjYzXCIgeTI9XCIzLjg5XCIvPlxuXHRcdFx0PGxpbmUgY2xhc3M9XCJjbHMtMlwiIHgxPVwiOS41N1wiIHkxPVwiOS41NlwiIHgyPVwiOS41N1wiIHkyPVwiMC44OFwiLz5cblx0XHQ8L3N2Zz5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWFuYWdlckljb25Db21wb25lbnQgZXh0ZW5kcyBJY29uQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZik7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWNvbHVtbi1tYW5hZ2VyLWljb24nO1xuXHR9XG59XG4iXX0=