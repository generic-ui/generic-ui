/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { FieldUiArchive } from './read/field.ui-archive';
import { FieldUiConverter } from './read/field.ui-converter';
import { FieldUiRepository } from './read/field.ui-repository';
import { FieldDomainModule } from '../domain/field.domain-module';
import { FieldCommandDispatcher } from './field.command-dispatcher';
export class FieldApiModule extends ApiModule {
}
FieldApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FieldDomainModule
                ],
                providers: [
                    FieldCommandDispatcher,
                    FieldUiArchive,
                    FieldUiConverter,
                    FieldUiRepository
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuYXBpLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi1hcGkvZmllbGQuYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQWlCcEUsTUFBTSxPQUFPLGNBQWUsU0FBUSxTQUFTOzs7WUFmNUMsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGlCQUFpQjtpQkFDakI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLHNCQUFzQjtvQkFFdEIsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtpQkFDakI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQXBpTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmllbGRVaUFyY2hpdmUgfSBmcm9tICcuL3JlYWQvZmllbGQudWktYXJjaGl2ZSc7XG5pbXBvcnQgeyBGaWVsZFVpQ29udmVydGVyIH0gZnJvbSAnLi9yZWFkL2ZpZWxkLnVpLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBGaWVsZFVpUmVwb3NpdG9yeSB9IGZyb20gJy4vcmVhZC9maWVsZC51aS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZpZWxkRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL2ZpZWxkLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgRmllbGRDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vZmllbGQuY29tbWFuZC1kaXNwYXRjaGVyJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGaWVsZERvbWFpbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRGaWVsZENvbW1hbmREaXNwYXRjaGVyLFxuXG5cdFx0RmllbGRVaUFyY2hpdmUsXG5cdFx0RmllbGRVaUNvbnZlcnRlcixcblx0XHRGaWVsZFVpUmVwb3NpdG9yeVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBGaWVsZEFwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG5cblxufVxuIl19