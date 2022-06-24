import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export class ColumnQueryComponent {
}
ColumnQueryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ColumnQueryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ColumnQueryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: ColumnQueryComponent, selector: "gui-column[header]", inputs: { header: "header" }, queries: [{ propertyName: "cellTemplate", first: true, predicate: TemplateRef, descendants: true, read: TemplateRef }], ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ColumnQueryComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'gui-column[header]',
                    template: ''
                }]
        }], propDecorators: { cellTemplate: [{
                type: ContentChild,
                args: [TemplateRef, { read: TemplateRef, static: false }]
            }], header: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXF1ZXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9jb21wb3NpdGlvbi9jb2x1bW4vY29sdW1uLXF1ZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU81RSxNQUFNLE9BQU8sb0JBQW9COztrSEFBcEIsb0JBQW9CO3NHQUFwQixvQkFBb0Isa0lBRWxCLFdBQVcsMkJBQVUsV0FBVyw2QkFKcEMsRUFBRTs0RkFFQSxvQkFBb0I7a0JBSmhDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLEVBQUU7aUJBQ1o7OEJBSVMsWUFBWTtzQkFEcEIsWUFBWTt1QkFBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBSS9ELE1BQU07c0JBREwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktY29sdW1uW2hlYWRlcl0nLFxuXHR0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgQ29sdW1uUXVlcnlDb21wb25lbnQge1xuXG5cdEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogZmFsc2UgfSlcblx0cmVhZG9ubHkgY2VsbFRlbXBsYXRlPzogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRASW5wdXQoKVxuXHRoZWFkZXI6IHN0cmluZztcblxuXHRoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxufVxuIl19