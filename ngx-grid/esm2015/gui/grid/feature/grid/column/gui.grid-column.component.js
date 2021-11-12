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
    matcher: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQtY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2NvbHVtbi9ndWkuZ3JpZC1jb2x1bW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFpQjVFLE1BQU0sT0FBTyxzQkFBc0I7OztZQUpsQyxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLEVBQUU7YUFDWjs7OzBCQUdDLFlBQVksU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO21CQUcxQyxLQUFLO29CQUdMLEtBQUs7bUJBR0wsS0FBSzttQkFHTCxLQUFLO3FCQUdMLEtBQUs7b0JBR0wsS0FBSztzQkFHTCxLQUFLO29CQUdMLEtBQUs7d0JBR0wsS0FBSztzQkFHTCxLQUFLOzBCQUdMLEtBQUs7d0JBR0wsS0FBSztzQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0RmllbGRBY2Nlc3Nvcixcblx0R3VpQ2VsbFZpZXcsXG5cdEd1aUNvbHVtbixcblx0R3VpQ29sdW1uQWxpZ24sXG5cdEd1aUNvbHVtbkNlbGxFZGl0aW5nLFxuXHRHdWlDb2x1bW5Tb3J0aW5nLFxuXHRHdWlDb2x1bW5TdW1tYXJpZXMsXG5cdEd1aURhdGFUeXBlLFxuXHRWaWV3VGVtcGxhdGVGdW5jdGlvblxufSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWdyaWQtY29sdW1uJyxcblx0dGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIEd1aUdyaWRDb2x1bW5Db21wb25lbnQgaW1wbGVtZW50cyBHdWlDb2x1bW4ge1xuXG5cdEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0pXG5cdHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBJbnB1dCgpXG5cdG5hbWU/OiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0ZmllbGQ/OiBzdHJpbmcgfCBGaWVsZEFjY2Vzc29yO1xuXG5cdEBJbnB1dCgpXG5cdHR5cGU/OiBzdHJpbmcgfCBHdWlEYXRhVHlwZTtcblxuXHRASW5wdXQoKVxuXHR2aWV3Pzogc3RyaW5nIHwgR3VpQ2VsbFZpZXcgfCBWaWV3VGVtcGxhdGVGdW5jdGlvbjtcblxuXHRASW5wdXQoKVxuXHRoZWFkZXI/OiBzdHJpbmcgfCBWaWV3VGVtcGxhdGVGdW5jdGlvbjtcblxuXHRASW5wdXQoKVxuXHR3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRhbGlnbj86IHN0cmluZyB8IEd1aUNvbHVtbkFsaWduO1xuXG5cdEBJbnB1dCgpXG5cdHN1bW1hcmllcz86IEd1aUNvbHVtblN1bW1hcmllcztcblxuXHRASW5wdXQoKVxuXHRzb3J0aW5nPzogYm9vbGVhbiB8IEd1aUNvbHVtblNvcnRpbmc7XG5cblx0QElucHV0KClcblx0Y2VsbEVkaXRpbmc/OiBib29sZWFuIHwgR3VpQ29sdW1uQ2VsbEVkaXRpbmc7XG5cblx0QElucHV0KClcblx0Zm9ybWF0dGVyPzogKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4gYW55O1xuXG5cdEBJbnB1dCgpXG5cdG1hdGNoZXI/OiAoaXRlbTogYW55KSA9PiBhbnk7XG5cbn1cbiJdfQ==