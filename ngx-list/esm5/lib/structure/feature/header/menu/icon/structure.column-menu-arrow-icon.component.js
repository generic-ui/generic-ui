/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
/** @type {?} */
export var selector = 'gui-structure-column-menu-arrow-icon';
var StructureColumnMenuArrowIconComponent = /** @class */ (function () {
    function StructureColumnMenuArrowIconComponent() {
        this.rotateDeg = 90;
    }
    StructureColumnMenuArrowIconComponent.decorators = [
        { type: Component, args: [{
                    selector: selector,
                    template: "\n\t\t<div [style.transform]=\"'rotate(' + rotateDeg + 'deg)'\"\n\t\t\t [class.gui-structure-column-menu-sort-icon]=\"sort\">\n\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 10.04 11.72\">\n\t\t\t\t<line class=\"cls-1\" x1=\"5.02\" y1=\"2.15\" x2=\"5.02\" y2=\"10.97\"/>\n\t\t\t\t<line class=\"cls-1\" x1=\"5.02\" y1=\"0.75\" x2=\"9.29\" y2=\"5.02\"/>\n\t\t\t\t<line class=\"cls-1\" x1=\"5.02\" y1=\"0.75\" x2=\"0.75\" y2=\"5.02\"/>\n\t\t\t</svg>\n\t\t</div>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class]': "\"" + selector + "\""
                    }
                }] }
    ];
    StructureColumnMenuArrowIconComponent.propDecorators = {
        rotateDeg: [{ type: Input }],
        sort: [{ type: Input }]
    };
    return StructureColumnMenuArrowIconComponent;
}());
export { StructureColumnMenuArrowIconComponent };
if (false) {
    /** @type {?} */
    StructureColumnMenuArrowIconComponent.prototype.rotateDeg;
    /** @type {?} */
    StructureColumnMenuArrowIconComponent.prototype.sort;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWFycm93LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvaGVhZGVyL21lbnUvaWNvbi9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtYXJyb3ctaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUU3RixNQUFNLEtBQU8sUUFBUSxHQUFHLHNDQUFzQztBQUU5RDtJQUFBO1FBb0JDLGNBQVMsR0FBVyxFQUFFLENBQUM7SUFJeEIsQ0FBQzs7Z0JBeEJBLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFLCtkQVNUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFO3dCQUNMLFNBQVMsRUFBRSxPQUFJLFFBQVEsT0FBRztxQkFDMUI7aUJBQ0Q7Ozs0QkFFQyxLQUFLO3VCQUdMLEtBQUs7O0lBRVAsNENBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQU5ZLHFDQUFxQzs7O0lBQ2pELDBEQUN1Qjs7SUFFdkIscURBQ2MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdG9yID0gJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvcjogc2VsZWN0b3IsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBbc3R5bGUudHJhbnNmb3JtXT1cIidyb3RhdGUoJyArIHJvdGF0ZURlZyArICdkZWcpJ1wiXG5cdFx0XHQgW2NsYXNzLmd1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtc29ydC1pY29uXT1cInNvcnRcIj5cblx0XHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAuMDQgMTEuNzJcIj5cblx0XHRcdFx0PGxpbmUgY2xhc3M9XCJjbHMtMVwiIHgxPVwiNS4wMlwiIHkxPVwiMi4xNVwiIHgyPVwiNS4wMlwiIHkyPVwiMTAuOTdcIi8+XG5cdFx0XHRcdDxsaW5lIGNsYXNzPVwiY2xzLTFcIiB4MT1cIjUuMDJcIiB5MT1cIjAuNzVcIiB4Mj1cIjkuMjlcIiB5Mj1cIjUuMDJcIi8+XG5cdFx0XHRcdDxsaW5lIGNsYXNzPVwiY2xzLTFcIiB4MT1cIjUuMDJcIiB5MT1cIjAuNzVcIiB4Mj1cIjAuNzVcIiB5Mj1cIjUuMDJcIi8+XG5cdFx0XHQ8L3N2Zz5cblx0XHQ8L2Rpdj5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6IGBcIiR7c2VsZWN0b3J9XCJgXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWVudUFycm93SWNvbkNvbXBvbmVudCB7XG5cdEBJbnB1dCgpXG5cdHJvdGF0ZURlZzogbnVtYmVyID0gOTA7XG5cblx0QElucHV0KClcblx0c29ydDogYm9vbGVhbjtcbn1cbiJdfQ==