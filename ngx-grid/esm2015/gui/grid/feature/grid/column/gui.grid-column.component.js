import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
export class GuiGridColumnComponent {
}
GuiGridColumnComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-grid-column',
                template: ''
            },] }
];
GuiGridColumnComponent.propDecorators = {
    templateRef: [{ type: ContentChild, args: [TemplateRef, { static: true },] }],
    name: [{ type: Input }],
    field: [{ type: Input }],
    type: [{ type: Input }],
    view: [{ type: Input }],
    header: [{ type: Input }],
    width: [{ type: Input }],
    enabled: [{ type: Input }],
    align: [{ type: Input }],
    summaries: [{ type: Input }],
    sorting: [{ type: Input }],
    cellEditing: [{ type: Input }],
    formatter: [{ type: Input }],
    matcher: [{ type: Input }],
    cssClasses: [{ type: Input }],
    styles: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQtY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2NvbHVtbi9ndWkuZ3JpZC1jb2x1bW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFpQjVFLE1BQU0sT0FBTyxzQkFBc0I7OztZQUpsQyxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLEVBQUU7YUFDWjs7OzBCQUdDLFlBQVksU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO21CQUcxQyxLQUFLO29CQUdMLEtBQUs7bUJBR0wsS0FBSzttQkFHTCxLQUFLO3FCQUdMLEtBQUs7b0JBR0wsS0FBSztzQkFHTCxLQUFLO29CQUdMLEtBQUs7d0JBR0wsS0FBSztzQkFHTCxLQUFLOzBCQUdMLEtBQUs7d0JBR0wsS0FBSztzQkFHTCxLQUFLO3lCQUdMLEtBQUs7cUJBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdEZpZWxkQWNjZXNzb3IsXG5cdEd1aUNlbGxWaWV3LFxuXHRHdWlDb2x1bW4sXG5cdEd1aUNvbHVtbkFsaWduLFxuXHRHdWlDb2x1bW5DZWxsRWRpdGluZyxcblx0R3VpQ29sdW1uU29ydGluZyxcblx0R3VpQ29sdW1uU3VtbWFyaWVzLFxuXHRHdWlEYXRhVHlwZSxcblx0Vmlld1RlbXBsYXRlRnVuY3Rpb25cbn0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1ncmlkLWNvbHVtbicsXG5cdHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBHdWlHcmlkQ29sdW1uQ29tcG9uZW50IGltcGxlbWVudHMgR3VpQ29sdW1uIHtcblxuXHRAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHR0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRASW5wdXQoKVxuXHRuYW1lPzogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGZpZWxkPzogc3RyaW5nIHwgRmllbGRBY2Nlc3NvcjtcblxuXHRASW5wdXQoKVxuXHR0eXBlPzogc3RyaW5nIHwgR3VpRGF0YVR5cGU7XG5cblx0QElucHV0KClcblx0dmlldz86IHN0cmluZyB8IEd1aUNlbGxWaWV3IHwgVmlld1RlbXBsYXRlRnVuY3Rpb247XG5cblx0QElucHV0KClcblx0aGVhZGVyPzogc3RyaW5nIHwgVmlld1RlbXBsYXRlRnVuY3Rpb247XG5cblx0QElucHV0KClcblx0d2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG5cblx0QElucHV0KClcblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0YWxpZ24/OiBzdHJpbmcgfCBHdWlDb2x1bW5BbGlnbjtcblxuXHRASW5wdXQoKVxuXHRzdW1tYXJpZXM/OiBHdWlDb2x1bW5TdW1tYXJpZXM7XG5cblx0QElucHV0KClcblx0c29ydGluZz86IGJvb2xlYW4gfCBHdWlDb2x1bW5Tb3J0aW5nO1xuXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nPzogYm9vbGVhbiB8IEd1aUNvbHVtbkNlbGxFZGl0aW5nO1xuXG5cdEBJbnB1dCgpXG5cdGZvcm1hdHRlcj86IChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IGFueTtcblxuXHRASW5wdXQoKVxuXHRtYXRjaGVyPzogKGl0ZW06IGFueSkgPT4gYW55O1xuXG5cdEBJbnB1dCgpXG5cdGNzc0NsYXNzZXM/OiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0c3R5bGVzPzogc3RyaW5nO1xuXG59XG4iXX0=