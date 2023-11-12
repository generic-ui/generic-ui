import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export class ColumnQueryComponent {
    cellTemplate;
    header;
    headerTemplate;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ColumnQueryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: ColumnQueryComponent, selector: "gui-column[header]", inputs: { header: "header" }, queries: [{ propertyName: "cellTemplate", first: true, predicate: TemplateRef, descendants: true, read: TemplateRef }], ngImport: i0, template: '', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ColumnQueryComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXF1ZXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9jb21wb3NpdGlvbi9zcmMvY29sdW1uL2NvbHVtbi1xdWVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPNUUsTUFBTSxPQUFPLG9CQUFvQjtJQUd2QixZQUFZLENBQW9CO0lBR3pDLE1BQU0sQ0FBUztJQUVmLGNBQWMsQ0FBbUI7dUdBUnJCLG9CQUFvQjsyRkFBcEIsb0JBQW9CLGtJQUVsQixXQUFXLDJCQUFVLFdBQVcsNkJBSnBDLEVBQUU7OzJGQUVBLG9CQUFvQjtrQkFKaEMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsRUFBRTtpQkFDWjs4QkFJUyxZQUFZO3NCQURwQixZQUFZO3VCQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFJL0QsTUFBTTtzQkFETCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1jb2x1bW5baGVhZGVyXScsXG5cdHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBDb2x1bW5RdWVyeUNvbXBvbmVudCB7XG5cblx0QENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZiwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiBmYWxzZSB9KVxuXHRyZWFkb25seSBjZWxsVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBJbnB1dCgpXG5cdGhlYWRlcjogc3RyaW5nO1xuXG5cdGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG59XG4iXX0=