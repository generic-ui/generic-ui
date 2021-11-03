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
    matcher: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQtY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2NvbHVtbi9ndWkuZ3JpZC1jb2x1bW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFpQjVFLE1BQU0sT0FBTyxzQkFBc0I7OztZQUpsQyxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLEVBQUU7YUFDWjs7OzBCQUdDLFlBQVksU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO29CQUcxQyxLQUFLO21CQUdMLEtBQUs7bUJBR0wsS0FBSztxQkFHTCxLQUFLO29CQUdMLEtBQUs7c0JBR0wsS0FBSztvQkFHTCxLQUFLO3dCQUdMLEtBQUs7c0JBR0wsS0FBSzswQkFHTCxLQUFLO3dCQUdMLEtBQUs7c0JBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdEZpZWxkQWNjZXNzb3IsXG5cdEd1aUNlbGxWaWV3LFxuXHRHdWlDb2x1bW4sXG5cdEd1aUNvbHVtbkFsaWduLFxuXHRHdWlDb2x1bW5DZWxsRWRpdGluZyxcblx0R3VpQ29sdW1uU29ydGluZyxcblx0R3VpQ29sdW1uU3VtbWFyaWVzLFxuXHRHdWlEYXRhVHlwZSxcblx0Vmlld1RlbXBsYXRlRnVuY3Rpb25cbn0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1ncmlkLWNvbHVtbicsXG5cdHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBHdWlHcmlkQ29sdW1uQ29tcG9uZW50IGltcGxlbWVudHMgR3VpQ29sdW1uIHtcblxuXHRAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHR0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRASW5wdXQoKVxuXHRmaWVsZD86IHN0cmluZyB8IEZpZWxkQWNjZXNzb3I7XG5cblx0QElucHV0KClcblx0dHlwZT86IHN0cmluZyB8IEd1aURhdGFUeXBlO1xuXG5cdEBJbnB1dCgpXG5cdHZpZXc/OiBzdHJpbmcgfCBHdWlDZWxsVmlldyB8IFZpZXdUZW1wbGF0ZUZ1bmN0aW9uO1xuXG5cdEBJbnB1dCgpXG5cdGhlYWRlcj86IHN0cmluZyB8IFZpZXdUZW1wbGF0ZUZ1bmN0aW9uO1xuXG5cdEBJbnB1dCgpXG5cdHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGFsaWduPzogc3RyaW5nIHwgR3VpQ29sdW1uQWxpZ247XG5cblx0QElucHV0KClcblx0c3VtbWFyaWVzPzogR3VpQ29sdW1uU3VtbWFyaWVzO1xuXG5cdEBJbnB1dCgpXG5cdHNvcnRpbmc/OiBib29sZWFuIHwgR3VpQ29sdW1uU29ydGluZztcblxuXHRASW5wdXQoKVxuXHRjZWxsRWRpdGluZz86IGJvb2xlYW4gfCBHdWlDb2x1bW5DZWxsRWRpdGluZztcblxuXHRASW5wdXQoKVxuXHRmb3JtYXR0ZXI/OiAoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiBhbnk7XG5cblx0QElucHV0KClcblx0bWF0Y2hlcj86IChpdGVtOiBhbnkpID0+IGFueTtcblxufVxuIl19