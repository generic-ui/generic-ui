import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../../../../../common/cdk/component/icon-component';
export class FilterIconComponent extends IconComponent {
    constructor(elementRef, changeDetectorRef) {
        super(elementRef, changeDetectorRef);
    }
    getSelectorName() {
        return 'gui-filter-icon';
    }
}
FilterIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-filter-icon]',
                template: `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.32 7.23">
			<line class="cls-1" x1="9.57" y1="0.75" x2="0.75" y2="0.75"/>
			<line class="cls-1" x1="8.14" y1="3.62" x2="2.18" y2="3.62"/>
			<line class="cls-1" x1="6.71" y1="6.48" x2="3.62" y2="6.48"/>
		</svg>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
FilterIconComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9pY29uL2ZpbHRlci1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFjbkYsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGFBQWE7SUFFckQsWUFBWSxVQUFzQixFQUMvQixpQkFBb0M7UUFDdEMsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8saUJBQWlCLENBQUM7SUFDMUIsQ0FBQzs7O1lBckJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7OztFQU1UO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7O1lBZCtELFVBQVU7WUFBeEMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvaWNvbi1jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWZpbHRlci1pY29uXScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMC4zMiA3LjIzXCI+XG5cdFx0XHQ8bGluZSBjbGFzcz1cImNscy0xXCIgeDE9XCI5LjU3XCIgeTE9XCIwLjc1XCIgeDI9XCIwLjc1XCIgeTI9XCIwLjc1XCIvPlxuXHRcdFx0PGxpbmUgY2xhc3M9XCJjbHMtMVwiIHgxPVwiOC4xNFwiIHkxPVwiMy42MlwiIHgyPVwiMi4xOFwiIHkyPVwiMy42MlwiLz5cblx0XHRcdDxsaW5lIGNsYXNzPVwiY2xzLTFcIiB4MT1cIjYuNzFcIiB5MT1cIjYuNDhcIiB4Mj1cIjMuNjJcIiB5Mj1cIjYuNDhcIi8+XG5cdFx0PC9zdmc+XG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckljb25Db21wb25lbnQgZXh0ZW5kcyBJY29uQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZik7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktZmlsdGVyLWljb24nO1xuXHR9XG59XG4iXX0=