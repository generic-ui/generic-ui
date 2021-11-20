import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { SummariesCommandInvoker } from './summaries.command-invoker';
import { SummariesEventRepository } from './summaries.event-repository';
import { SummariesDomainModule } from '../domain/summaries.domain-module';
import { SummariesEnabledArchive } from '../domain-read/enabled/summaries-enabled-archive.service';
import { SummariesWarehouse } from './summaries.warehouse';
import { SummariesDomainWarehouse } from '../domain-read/summaries.domain-warehouse';
import { SummariesDomainCommandInvoker } from '../domain/summaries.domain-command-invoker';
import { SummariesDomainEventRepository } from '../domain-read/summaries.domain-event-repository';
export class SummariesApiModule extends ApiModule {
}
SummariesApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SummariesDomainModule
                ],
                providers: [
                    {
                        provide: SummariesCommandInvoker,
                        useClass: SummariesDomainCommandInvoker
                    },
                    {
                        provide: SummariesEventRepository,
                        useClass: SummariesDomainEventRepository
                    },
                    {
                        provide: SummariesWarehouse,
                        useClass: SummariesDomainWarehouse
                    },
                    SummariesEnabledArchive
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9hcGkvc3VtbWFyaWVzLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBMEJsRyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsU0FBUzs7O1lBdkJoRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1oscUJBQXFCO2lCQUNyQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Y7d0JBQ0MsT0FBTyxFQUFFLHVCQUF1Qjt3QkFDaEMsUUFBUSxFQUFFLDZCQUE2QjtxQkFDdkM7b0JBQ0Q7d0JBQ0MsT0FBTyxFQUFFLHdCQUF3Qjt3QkFDakMsUUFBUSxFQUFFLDhCQUE4QjtxQkFDeEM7b0JBQ0Q7d0JBQ0MsT0FBTyxFQUFFLGtCQUFrQjt3QkFDM0IsUUFBUSxFQUFFLHdCQUF3QjtxQkFDbEM7b0JBQ0QsdUJBQXVCO2lCQUN2QjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdW1tYXJpZXNDb21tYW5kSW52b2tlciB9IGZyb20gJy4vc3VtbWFyaWVzLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdW1tYXJpZXNFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuL3N1bW1hcmllcy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN1bW1hcmllc0RvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9zdW1tYXJpZXMuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2VuYWJsZWQvc3VtbWFyaWVzLWVuYWJsZWQtYXJjaGl2ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFN1bW1hcmllc1dhcmVob3VzZSB9IGZyb20gJy4vc3VtbWFyaWVzLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNEb21haW5XYXJlaG91c2UgfSBmcm9tICcuLi9kb21haW4tcmVhZC9zdW1tYXJpZXMuZG9tYWluLXdhcmVob3VzZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNEb21haW5Db21tYW5kSW52b2tlciB9IGZyb20gJy4uL2RvbWFpbi9zdW1tYXJpZXMuZG9tYWluLWNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdW1tYXJpZXNEb21haW5FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC9zdW1tYXJpZXMuZG9tYWluLWV2ZW50LXJlcG9zaXRvcnknO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0U3VtbWFyaWVzRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFN1bW1hcmllc0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0dXNlQ2xhc3M6IFN1bW1hcmllc0RvbWFpbkNvbW1hbmRJbnZva2VyXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBTdW1tYXJpZXNFdmVudFJlcG9zaXRvcnksXG5cdFx0XHR1c2VDbGFzczogU3VtbWFyaWVzRG9tYWluRXZlbnRSZXBvc2l0b3J5XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBTdW1tYXJpZXNXYXJlaG91c2UsXG5cdFx0XHR1c2VDbGFzczogU3VtbWFyaWVzRG9tYWluV2FyZWhvdXNlXG5cdFx0fSxcblx0XHRTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTdW1tYXJpZXNBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xufVxuIl19