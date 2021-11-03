import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["header", ""];
export class ColumnQueryComponent {
}
ColumnQueryComponent.ɵfac = function ColumnQueryComponent_Factory(t) { return new (t || ColumnQueryComponent)(); };
ColumnQueryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ColumnQueryComponent, selectors: [["gui-column", "header", ""]], contentQueries: function ColumnQueryComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, TemplateRef, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cellTemplate = _t.first);
    } }, inputs: { header: "header" }, attrs: _c0, decls: 0, vars: 0, template: function ColumnQueryComponent_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ColumnQueryComponent, [{
        type: Component,
        args: [{
                selector: 'gui-column[header]',
                template: ''
            }]
    }], null, { cellTemplate: [{
            type: ContentChild,
            args: [TemplateRef, { static: false }]
        }], header: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXF1ZXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29tcG9zaXRpb24vZmVhdHVyZS9jb2x1bW4vY29sdW1uLXF1ZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPNUUsTUFBTSxPQUFPLG9CQUFvQjs7d0ZBQXBCLG9CQUFvQjt1RUFBcEIsb0JBQW9CO29DQUVsQixXQUFXOzs7Ozt1RkFGYixvQkFBb0I7Y0FKaEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxFQUFFO2FBQ1o7Z0JBSUEsWUFBWTtrQkFEWCxZQUFZO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFNNUMsTUFBTTtrQkFETCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1jb2x1bW5baGVhZGVyXScsXG5cdHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBDb2x1bW5RdWVyeUNvbXBvbmVudCB7XG5cblx0QENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGNlbGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRASW5wdXQoKVxuXHRoZWFkZXI6IHN0cmluZztcblxufVxuIl19