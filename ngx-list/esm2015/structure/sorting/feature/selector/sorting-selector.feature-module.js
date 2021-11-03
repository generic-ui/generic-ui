import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricSelectModule } from '@generic-ui/fabric';
import { SortingSelectorComponent } from './sorting-selector.component';
export class SortingSelectorFeatureModule {
}
SortingSelectorFeatureModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FabricSelectModule
                ],
                declarations: [
                    SortingSelectorComponent
                ],
                exports: [
                    SortingSelectorComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy1zZWxlY3Rvci5mZWF0dXJlLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3NvcnRpbmcvZmVhdHVyZS9zZWxlY3Rvci9zb3J0aW5nLXNlbGVjdG9yLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBY3hFLE1BQU0sT0FBTyw0QkFBNEI7OztZQVp4QyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osa0JBQWtCO2lCQUNsQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2Isd0JBQXdCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Isd0JBQXdCO2lCQUN4QjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY1NlbGVjdE1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFNvcnRpbmdTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vc29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY1NlbGVjdE1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTb3J0aW5nU2VsZWN0b3JDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFNvcnRpbmdTZWxlY3RvckNvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRpbmdTZWxlY3RvckZlYXR1cmVNb2R1bGUge1xufVxuIl19