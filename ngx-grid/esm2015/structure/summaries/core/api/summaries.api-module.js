/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { SummariesCommandInvoker } from './summaries.command-invoker';
import { SummariesEventRepository } from './summaries.event-repository';
import { SummariesDomainModule } from '../domain/summaries.domain-module';
import { SummariesEnabledArchive } from '../domain/enabled/summaries-enabled-archive.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9hcGkvc3VtbWFyaWVzLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQTBCbEcsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFNBQVM7OztZQXZCaEQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLHFCQUFxQjtpQkFDckI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWO3dCQUNDLE9BQU8sRUFBRSx1QkFBdUI7d0JBQ2hDLFFBQVEsRUFBRSw2QkFBNkI7cUJBQ3ZDO29CQUNEO3dCQUNDLE9BQU8sRUFBRSx3QkFBd0I7d0JBQ2pDLFFBQVEsRUFBRSw4QkFBOEI7cUJBQ3hDO29CQUNEO3dCQUNDLE9BQU8sRUFBRSxrQkFBa0I7d0JBQzNCLFFBQVEsRUFBRSx3QkFBd0I7cUJBQ2xDO29CQUNELHVCQUF1QjtpQkFDdkI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQXBpTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3VtbWFyaWVzQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL3N1bW1hcmllcy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3VtbWFyaWVzRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9zdW1tYXJpZXMuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vc3VtbWFyaWVzLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4vZW5hYmxlZC9zdW1tYXJpZXMtZW5hYmxlZC1hcmNoaXZlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3VtbWFyaWVzV2FyZWhvdXNlIH0gZnJvbSAnLi9zdW1tYXJpZXMud2FyZWhvdXNlJztcbmltcG9ydCB7IFN1bW1hcmllc0RvbWFpbldhcmVob3VzZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3N1bW1hcmllcy5kb21haW4td2FyZWhvdXNlJztcbmltcG9ydCB7IFN1bW1hcmllc0RvbWFpbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vZG9tYWluL3N1bW1hcmllcy5kb21haW4tY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN1bW1hcmllc0RvbWFpbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3N1bW1hcmllcy5kb21haW4tZXZlbnQtcmVwb3NpdG9yeSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRTdW1tYXJpZXNEb21haW5Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogU3VtbWFyaWVzQ29tbWFuZEludm9rZXIsXG5cdFx0XHR1c2VDbGFzczogU3VtbWFyaWVzRG9tYWluQ29tbWFuZEludm9rZXJcblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFN1bW1hcmllc0V2ZW50UmVwb3NpdG9yeSxcblx0XHRcdHVzZUNsYXNzOiBTdW1tYXJpZXNEb21haW5FdmVudFJlcG9zaXRvcnlcblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFN1bW1hcmllc1dhcmVob3VzZSxcblx0XHRcdHVzZUNsYXNzOiBTdW1tYXJpZXNEb21haW5XYXJlaG91c2Vcblx0XHR9LFxuXHRcdFN1bW1hcmllc0VuYWJsZWRBcmNoaXZlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFN1bW1hcmllc0FwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG59XG4iXX0=