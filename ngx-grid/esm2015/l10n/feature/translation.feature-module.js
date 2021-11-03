import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { TranslationApiModule } from '../core/api/translation.api-module';
import { TranslationPipe } from './translation.pipe';
import { TranslationFacade } from '../core/api/translation.facade';
import { TranslationDomainFacade } from '../core/domain/translation.domain-facade';
export class TranslationFeatureModule extends FeatureModule {
    static forComponent() {
        return [{ provide: TranslationFacade, useClass: TranslationDomainFacade }];
    }
}
TranslationFeatureModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    TranslationApiModule
                ],
                declarations: [
                    TranslationPipe
                ],
                exports: [
                    TranslationPipe
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2wxMG4vZmVhdHVyZS90cmFuc2xhdGlvbi5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBZ0JuRixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsYUFBYTtJQUUxRCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7WUFqQkQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUVaLG9CQUFvQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLGVBQWU7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLGVBQWU7aUJBQ2Y7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFRyYW5zbGF0aW9uQXBpTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9hcGkvdHJhbnNsYXRpb24uYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblBpcGUgfSBmcm9tICcuL3RyYW5zbGF0aW9uLnBpcGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GYWNhZGUgfSBmcm9tICcuLi9jb3JlL2FwaS90cmFuc2xhdGlvbi5mYWNhZGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25Eb21haW5GYWNhZGUgfSBmcm9tICcuLi9jb3JlL2RvbWFpbi90cmFuc2xhdGlvbi5kb21haW4tZmFjYWRlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXG5cdFx0VHJhbnNsYXRpb25BcGlNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0VHJhbnNsYXRpb25QaXBlXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRUcmFuc2xhdGlvblBpcGVcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFt7IHByb3ZpZGU6IFRyYW5zbGF0aW9uRmFjYWRlLCB1c2VDbGFzczogVHJhbnNsYXRpb25Eb21haW5GYWNhZGUgfV07XG5cdH1cblxuXHQvLyBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBhcGlNb2R1bGU6IFRyYW5zbGF0aW9uQXBpTW9kdWxlKSB7XG5cdC8vIFx0c3VwZXIoKTtcblx0Ly8gXHRpZiAoYXBpTW9kdWxlID09PSBudWxsKSB7XG5cdC8vIFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RyYW5zbGF0aW9uQXBpTW9kdWxlIGlzIHJlcXVpcmVkLicpO1xuXHQvLyBcdH1cblx0Ly8gfVxuXG59XG4iXX0=