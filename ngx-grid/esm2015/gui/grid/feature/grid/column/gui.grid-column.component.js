import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export class GuiGridColumnComponent {
}
GuiGridColumnComponent.ɵfac = function GuiGridColumnComponent_Factory(t) { return new (t || GuiGridColumnComponent)(); };
GuiGridColumnComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GuiGridColumnComponent, selectors: [["gui-grid-column"]], contentQueries: function GuiGridColumnComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, TemplateRef, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    } }, inputs: { field: "field", type: "type", view: "view", header: "header", width: "width", enabled: "enabled", align: "align", summaries: "summaries", sorting: "sorting", cellEditing: "cellEditing", formatter: "formatter", matcher: "matcher" }, decls: 0, vars: 0, template: function GuiGridColumnComponent_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GuiGridColumnComponent, [{
        type: Component,
        args: [{
                selector: 'gui-grid-column',
                template: ''
            }]
    }], null, { templateRef: [{
            type: ContentChild,
            args: [TemplateRef, { static: true }]
        }], field: [{
            type: Input
        }], type: [{
            type: Input
        }], view: [{
            type: Input
        }], header: [{
            type: Input
        }], width: [{
            type: Input
        }], enabled: [{
            type: Input
        }], align: [{
            type: Input
        }], summaries: [{
            type: Input
        }], sorting: [{
            type: Input
        }], cellEditing: [{
            type: Input
        }], formatter: [{
            type: Input
        }], matcher: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQtY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2NvbHVtbi9ndWkuZ3JpZC1jb2x1bW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBaUI1RSxNQUFNLE9BQU8sc0JBQXNCOzs0RkFBdEIsc0JBQXNCO3lFQUF0QixzQkFBc0I7b0NBRXBCLFdBQVc7Ozs7O3VGQUZiLHNCQUFzQjtjQUpsQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLEVBQUU7YUFDWjtnQkFJQSxXQUFXO2tCQURWLFlBQVk7bUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUkzQyxLQUFLO2tCQURKLEtBQUs7WUFJTixJQUFJO2tCQURILEtBQUs7WUFJTixJQUFJO2tCQURILEtBQUs7WUFJTixNQUFNO2tCQURMLEtBQUs7WUFJTixLQUFLO2tCQURKLEtBQUs7WUFJTixPQUFPO2tCQUROLEtBQUs7WUFJTixLQUFLO2tCQURKLEtBQUs7WUFJTixTQUFTO2tCQURSLEtBQUs7WUFJTixPQUFPO2tCQUROLEtBQUs7WUFJTixXQUFXO2tCQURWLEtBQUs7WUFJTixTQUFTO2tCQURSLEtBQUs7WUFJTixPQUFPO2tCQUROLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRGaWVsZEFjY2Vzc29yLFxuXHRHdWlDZWxsVmlldyxcblx0R3VpQ29sdW1uLFxuXHRHdWlDb2x1bW5BbGlnbixcblx0R3VpQ29sdW1uQ2VsbEVkaXRpbmcsXG5cdEd1aUNvbHVtblNvcnRpbmcsXG5cdEd1aUNvbHVtblN1bW1hcmllcyxcblx0R3VpRGF0YVR5cGUsXG5cdFZpZXdUZW1wbGF0ZUZ1bmN0aW9uXG59IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZ3JpZC1jb2x1bW4nLFxuXHR0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgR3VpR3JpZENvbHVtbkNvbXBvbmVudCBpbXBsZW1lbnRzIEd1aUNvbHVtbiB7XG5cblx0QENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSlcblx0dGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QElucHV0KClcblx0ZmllbGQ/OiBzdHJpbmcgfCBGaWVsZEFjY2Vzc29yO1xuXG5cdEBJbnB1dCgpXG5cdHR5cGU/OiBzdHJpbmcgfCBHdWlEYXRhVHlwZTtcblxuXHRASW5wdXQoKVxuXHR2aWV3Pzogc3RyaW5nIHwgR3VpQ2VsbFZpZXcgfCBWaWV3VGVtcGxhdGVGdW5jdGlvbjtcblxuXHRASW5wdXQoKVxuXHRoZWFkZXI/OiBzdHJpbmcgfCBWaWV3VGVtcGxhdGVGdW5jdGlvbjtcblxuXHRASW5wdXQoKVxuXHR3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRhbGlnbj86IHN0cmluZyB8IEd1aUNvbHVtbkFsaWduO1xuXG5cdEBJbnB1dCgpXG5cdHN1bW1hcmllcz86IEd1aUNvbHVtblN1bW1hcmllcztcblxuXHRASW5wdXQoKVxuXHRzb3J0aW5nPzogYm9vbGVhbiB8IEd1aUNvbHVtblNvcnRpbmc7XG5cblx0QElucHV0KClcblx0Y2VsbEVkaXRpbmc/OiBib29sZWFuIHwgR3VpQ29sdW1uQ2VsbEVkaXRpbmc7XG5cblx0QElucHV0KClcblx0Zm9ybWF0dGVyPzogKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4gYW55O1xuXG5cdEBJbnB1dCgpXG5cdG1hdGNoZXI/OiAoaXRlbTogYW55KSA9PiBhbnk7XG5cbn1cbiJdfQ==