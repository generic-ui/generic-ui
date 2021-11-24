import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { StaticComponent } from '../../../../../../common/cdk/component/static-component';
export class StructureInfoModalComponent extends StaticComponent {
    constructor(elementRef, changeDetectorRef) {
        super(elementRef, changeDetectorRef);
    }
    getSelectorName() {
        return 'gui-info-dialog';
    }
}
StructureInfoModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-info-dialog]',
                template: "<div class=\"gui-structure-info-modal gui-flex gui-flex-col gui-p-0 gui-text-lg gui-w-full\">\n\n\t<p class=\"gui-dialog-title gui-text-3xl gui-mb-8 gui-font-bold\">\n\t\tGeneric UI Grid\n\t</p>\n\n\n\t<p class=\"gui-text-xl gui-mb-18 gui-font-bold\">\n\t\tver. 0.16.4\n\t</p>\n\n\t<p class=\"gui-quote gui-text-2xl gui-italic gui-font-light\">\n\t\t\"The best way to success is to help others succeed.\"\n\t</p>\n\n\t<br/>\n\n\t<section class=\"gui-m-0 gui-px-0 gui-pt-10 gui-pb-6\">\n\t\t<p class=\"gui-font-bold\">Links:</p>\n\t\t<ul class=\"gui-m-0 gui-pl-9 gui-list-none\">\n\n\t\t\t<li>\n\t\t\t\t<a class=\"gui-mb-6 gui-no-underline gui-leading-6\" href=\"https://generic-ui.com/\">Website</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a class=\"gui-mb-6 gui-no-underline gui-leading-6\" href=\"https://generic-ui.com/guide/\">Documentation</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a class=\"gui-mb-6 gui-no-underline gui-leading-6\" href=\"https://github.com/generic-ui/generic-ui/tree/master/ngx-grid\">Github</a>\n\t\t\t</li>\n\t\t</ul>\n\n\t\t<br/>\n\n\t\t<p class=\"gui-font-bold\">Feedback:</p>\n\t\t<ul class=\"gui-m-0 gui-pl-9 gui-list-none\">\n\n\t\t\t<li>\n\t\t\t\t<a class=\"gui-mb-6 gui-no-underline gui-leading-6\" href=\"https://github.com/generic-ui/generic-ui/issues\">Report a bug</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a class=\"gui-mb-6 gui-no-underline gui-leading-6\" href=\"https://github.com/generic-ui/generic-ui/issues\">Suggest an idea</a>\n\t\t\t</li>\n\n\t\t</ul>\n\t</section>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
StructureInfoModalComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWluZm8tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3BhbmVsL2luZm8vaW5mby1tb2RhbC9zdHJ1Y3R1cmUtaW5mby1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBUTFGLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxlQUFlO0lBRS9ELFlBQVksVUFBc0IsRUFDL0IsaUJBQW9DO1FBQ3RDLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7OztZQWZELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxvL0NBQW9EO2dCQUNwRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7OztZQVQrRCxVQUFVO1lBQXhDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdGF0aWNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zdGF0aWMtY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1pbmZvLWRpYWxvZ10nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLWluZm8tbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbmZvTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBTdGF0aWNDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1pbmZvLWRpYWxvZyc7XG5cdH1cbn1cbiJdfQ==