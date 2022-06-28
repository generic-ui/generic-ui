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
CssClassModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: CssClassModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CssClassModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: CssClassModule });
CssClassModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: CssClassModule, providers: [
        { provide: CssClassModifier, useFactory: provideCssClassModifier }
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: CssClassModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        { provide: CssClassModifier, useFactory: provideCssClassModifier }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzLWNsYXNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvY29tbW9uL2Nzcy1jbGFzcy9jc3MtY2xhc3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUVuRCxhQUFhLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFeEMsTUFBTSxVQUFVLHVCQUF1QjtJQUN0QyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBT0QsTUFBTSxPQUFPLGNBQWM7OzJHQUFkLGNBQWM7NEdBQWQsY0FBYzs0R0FBZCxjQUFjLGFBSmY7UUFDVixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUU7S0FDbEU7MkZBRVcsY0FBYztrQkFMMUIsUUFBUTttQkFBQztvQkFDVCxTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFO3FCQUNsRTtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENzc0NsYXNzTW9kaWZpZXIgfSBmcm9tICcuL2Nzcy1jbGFzcy5tb2RpZmllcic7XG5pbXBvcnQgeyBDb3JlQ29udGFpbmVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuQ29yZUNvbnRhaW5lci5wcm92aWRlKENzc0NsYXNzTW9kaWZpZXIpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNzc0NsYXNzTW9kaWZpZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoQ3NzQ2xhc3NNb2RpZmllcik7XG59XG5cbkBOZ01vZHVsZSh7XG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogQ3NzQ2xhc3NNb2RpZmllciwgdXNlRmFjdG9yeTogcHJvdmlkZUNzc0NsYXNzTW9kaWZpZXIgfVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIENzc0NsYXNzTW9kdWxlIHtcbn1cbiJdfQ==