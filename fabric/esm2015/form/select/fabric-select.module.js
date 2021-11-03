import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricSelectComponent } from './select.component';
import { FabricSelectOptionsComponent } from './options/select-options.component';
export class FabricSelectModule {
}
FabricSelectModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    FabricSelectComponent,
                    FabricSelectOptionsComponent
                ],
                exports: [
                    FabricSelectComponent
                ],
                entryComponents: [
                    FabricSelectOptionsComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXNlbGVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9zZWxlY3QvZmFicmljLXNlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFrQmxGLE1BQU0sT0FBTyxrQkFBa0I7OztZQWY5QixRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLHFCQUFxQjtvQkFDckIsNEJBQTRCO2lCQUM1QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IscUJBQXFCO2lCQUNyQjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2hCLDRCQUE0QjtpQkFDNUI7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljU2VsZWN0T3B0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vb3B0aW9ucy9zZWxlY3Qtb3B0aW9ucy5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0RmFicmljU2VsZWN0Q29tcG9uZW50LFxuXHRcdEZhYnJpY1NlbGVjdE9wdGlvbnNDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEZhYnJpY1NlbGVjdENvbXBvbmVudFxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRGYWJyaWNTZWxlY3RPcHRpb25zQ29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljU2VsZWN0TW9kdWxlIHtcbn1cbiJdfQ==