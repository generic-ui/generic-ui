import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { FieldArchive } from '../domain-read/field.archive';
import { FieldConverter } from '../domain-read/init/field.converter';
import { FieldDomainModule } from '../domain/field.domain-module';
import { FieldCommandInvoker } from './field.command-invoker';
import { FieldWarehouse } from './field.warehouse';
import { FieldDomainWarehouse } from '../domain-read/field.domain-warehouse';
import { FieldDomainCommandInvoker } from '../domain/field.domain-command-invoker';
export class FieldApiModule extends ApiModule {
}
FieldApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FieldDomainModule
                ],
                providers: [
                    {
                        provide: FieldCommandInvoker,
                        useClass: FieldDomainCommandInvoker
                    },
                    FieldArchive,
                    FieldConverter,
                    {
                        provide: FieldWarehouse,
                        useClass: FieldDomainWarehouse
                    }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuYXBpLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2ZpZWxkL2NvcmUvYXBpL2ZpZWxkLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBcUJuRixNQUFNLE9BQU8sY0FBZSxTQUFRLFNBQVM7OztZQW5CNUMsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGlCQUFpQjtpQkFDakI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWO3dCQUNDLE9BQU8sRUFBRSxtQkFBbUI7d0JBQzVCLFFBQVEsRUFBRSx5QkFBeUI7cUJBQ25DO29CQUVELFlBQVk7b0JBQ1osY0FBYztvQkFDZDt3QkFDQyxPQUFPLEVBQUUsY0FBYzt3QkFDdkIsUUFBUSxFQUFFLG9CQUFvQjtxQkFDOUI7aUJBQ0Q7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZEFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4tcmVhZC9maWVsZC5hcmNoaXZlJztcbmltcG9ydCB7IEZpZWxkQ29udmVydGVyIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvaW5pdC9maWVsZC5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgRmllbGREb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vZmllbGQuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBGaWVsZENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9maWVsZC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRmllbGRXYXJlaG91c2UgfSBmcm9tICcuL2ZpZWxkLndhcmVob3VzZSc7XG5pbXBvcnQgeyBGaWVsZERvbWFpbldhcmVob3VzZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2ZpZWxkLmRvbWFpbi13YXJlaG91c2UnO1xuaW1wb3J0IHsgRmllbGREb21haW5Db21tYW5kSW52b2tlciB9IGZyb20gJy4uL2RvbWFpbi9maWVsZC5kb21haW4tY29tbWFuZC1pbnZva2VyJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGaWVsZERvbWFpbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBGaWVsZENvbW1hbmRJbnZva2VyLFxuXHRcdFx0dXNlQ2xhc3M6IEZpZWxkRG9tYWluQ29tbWFuZEludm9rZXJcblx0XHR9LFxuXG5cdFx0RmllbGRBcmNoaXZlLFxuXHRcdEZpZWxkQ29udmVydGVyLFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IEZpZWxkV2FyZWhvdXNlLFxuXHRcdFx0dXNlQ2xhc3M6IEZpZWxkRG9tYWluV2FyZWhvdXNlXG5cdFx0fVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkQXBpTW9kdWxlIGV4dGVuZHMgQXBpTW9kdWxlIHtcbn1cbiJdfQ==