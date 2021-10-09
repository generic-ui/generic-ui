/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { FieldReadModelArchive } from './read/field-read-model.archive';
import { FieldUiConverter } from './read/field.ui-converter';
import { FieldDomainModule } from '../domain/field.domain-module';
import { FieldCommandInvoker } from './field.command-invoker';
import { FieldWarehouse } from './field.warehouse';
export class FieldApiModule extends ApiModule {
}
FieldApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FieldDomainModule
                ],
                providers: [
                    FieldCommandInvoker,
                    FieldReadModelArchive,
                    FieldUiConverter,
                    FieldWarehouse
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuYXBpLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2NvcmUvYXBpL2ZpZWxkLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFlbkQsTUFBTSxPQUFPLGNBQWUsU0FBUSxTQUFTOzs7WUFiNUMsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGlCQUFpQjtpQkFDakI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLG1CQUFtQjtvQkFFbkIscUJBQXFCO29CQUNyQixnQkFBZ0I7b0JBQ2hCLGNBQWM7aUJBQ2Q7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZFJlYWRNb2RlbEFyY2hpdmUgfSBmcm9tICcuL3JlYWQvZmllbGQtcmVhZC1tb2RlbC5hcmNoaXZlJztcbmltcG9ydCB7IEZpZWxkVWlDb252ZXJ0ZXIgfSBmcm9tICcuL3JlYWQvZmllbGQudWktY29udmVydGVyJztcbmltcG9ydCB7IEZpZWxkRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL2ZpZWxkLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgRmllbGRDb21tYW5kSW52b2tlciB9IGZyb20gJy4vZmllbGQuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZpZWxkV2FyZWhvdXNlIH0gZnJvbSAnLi9maWVsZC53YXJlaG91c2UnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZpZWxkRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEZpZWxkQ29tbWFuZEludm9rZXIsXG5cblx0XHRGaWVsZFJlYWRNb2RlbEFyY2hpdmUsXG5cdFx0RmllbGRVaUNvbnZlcnRlcixcblx0XHRGaWVsZFdhcmVob3VzZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkQXBpTW9kdWxlIGV4dGVuZHMgQXBpTW9kdWxlIHtcbn1cbiJdfQ==