import { NgModule } from '@angular/core';
import { CssClassModifier } from './css-class.modifier';
import { CoreContainer } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
CoreContainer.provide(CssClassModifier);
export function provideCssClassModifier() {
    return CoreContainer.resolve(CssClassModifier);
}
export class CssClassModule {
}
CssClassModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: CssClassModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CssClassModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: CssClassModule });
CssClassModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: CssClassModule, providers: [
        { provide: CssClassModifier, useFactory: provideCssClassModifier }
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: CssClassModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        { provide: CssClassModifier, useFactory: provideCssClassModifier }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzLWNsYXNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvY29tbW9uL3NyYy9jc3MtY2xhc3MvY3NzLWNsYXNzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFbkQsYUFBYSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXhDLE1BQU0sVUFBVSx1QkFBdUI7SUFDdEMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDaEQsQ0FBQztBQU9ELE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWM7NEdBQWQsY0FBYyxhQUpmO1FBQ1YsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFO0tBQ2xFOzJGQUVXLGNBQWM7a0JBTDFCLFFBQVE7bUJBQUM7b0JBQ1QsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRTtxQkFDbEU7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDc3NDbGFzc01vZGlmaWVyIH0gZnJvbSAnLi9jc3MtY2xhc3MubW9kaWZpZXInO1xuaW1wb3J0IHsgQ29yZUNvbnRhaW5lciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbkNvcmVDb250YWluZXIucHJvdmlkZShDc3NDbGFzc01vZGlmaWVyKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDc3NDbGFzc01vZGlmaWVyKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKENzc0NsYXNzTW9kaWZpZXIpO1xufVxuXG5ATmdNb2R1bGUoe1xuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IENzc0NsYXNzTW9kaWZpZXIsIHVzZUZhY3Rvcnk6IHByb3ZpZGVDc3NDbGFzc01vZGlmaWVyIH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBDc3NDbGFzc01vZHVsZSB7XG59XG4iXX0=