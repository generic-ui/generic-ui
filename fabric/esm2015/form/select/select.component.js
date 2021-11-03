import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SelectOptionsGeometryService } from './options/select-options-geometry.service';
import { FabricSelectedOptionsRepository } from './selected-option.repository';
import { SelectOptionModalService } from './select-option-modal.service';
import { FabricReactive } from '../../common/fabric-reactive';
import * as i0 from "@angular/core";
import * as i1 from "./selected-option.repository";
import * as i2 from "./options/select-options-geometry.service";
import * as i3 from "./select-option-modal.service";
const _c0 = ["container"];
export class FabricSelectComponent extends FabricReactive {
    constructor(selectService, selectOptionsGeometryService, selectOptionModalService, changeDetectorRef, platformId, elementRef, renderer) {
        super();
        this.selectService = selectService;
        this.selectOptionsGeometryService = selectOptionsGeometryService;
        this.selectOptionModalService = selectOptionModalService;
        this.changeDetectorRef = changeDetectorRef;
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.options = [];
        this.placeholder = '...';
        this.width = 100;
        this.disabled = false;
        this.optionChanged = new EventEmitter();
        this.doNotEmitValues = false;
        this.opened = false;
    }
    ngOnChanges(changes) {
        if (changes.placeholder) {
            this.containerText = this.placeholder;
        }
        if (changes.selected) {
            if (this.selected) {
                this.tryToSelect(this.selected);
            }
        }
    }
    ngOnInit() {
        this.selectService
            .onSelectedOption()
            .pipe(this.takeUntil())
            .subscribe((selectedOption) => {
            this.emitSelectedOption(selectedOption);
            this.selectedOption = selectedOption;
            this.containerText = selectedOption.value;
            this.doNotEmitValues = false;
            this.changeDetectorRef.detectChanges();
        });
        this.selectOptionsGeometryService
            .onSelectOptionsCords()
            .pipe(this.takeUntil())
            .subscribe((cords) => {
            if (cords.getCanOpenUpward()) {
                this.openUpward();
            }
            else {
                this.openDownward();
            }
        });
    }
    tryToOpen(event) {
        if (this.isContainerDisabled(event)) {
            event.stopPropagation();
        }
        else {
            this.open(this.options, this.width);
            this.toggleOptions(!this.opened);
            this.changeDetectorRef.detectChanges();
        }
    }
    clickOutside(event) {
        if (this.isContainerClicked(event)) {
            this.toggleOptions(false);
        }
    }
    toggleOptions(opened) {
        this.opened = opened;
        this.maintainOptionsListPosition();
        if (!this.opened) {
            this.closeOptions();
        }
    }
    isOptionSelected(option) {
        return this.selectedOption && option.name === this.selectedOption.name;
    }
    getOptionValue(option) {
        if (option) {
            return option.value ? option.value : option.name;
        }
        return '';
    }
    open(options, width) {
        this.closeSelect();
        this.selectOptionModalService.open(options, width);
        this.selectOptionsGeometryService.nextCords(this.containerRef);
    }
    tryToSelect(option) {
        const canSelect = this.selectedOption ? option.name !== this.selectedOption.name : true;
        if (canSelect) {
            this.doNotEmitValues = true;
            this.selectService.next(option);
            this.selectedOption = option;
            this.containerText = this.getOptionValue(option);
        }
    }
    maintainOptionsListPosition() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.opened) {
                this.scrollListenerFn = this.renderer.listen('window', 'scroll', () => {
                    this.selectOptionsGeometryService.nextCords(this.containerRef);
                });
            }
            else {
                if (this.scrollListenerFn) {
                    this.scrollListenerFn();
                }
            }
        }
    }
    closeSelect() {
        this.selectOptionModalService.closeOptions();
    }
    emitSelectedOption(option) {
        if (!this.doNotEmitValues) {
            if (!this.isOptionSelected(option)) {
                this.optionChanged.emit(option);
            }
        }
    }
    openDownward() {
        this.addClass('gui-options-opened');
        this.addClass('gui-downward');
        this.removeClass('gui-upward');
    }
    openUpward() {
        this.addClass('gui-options-opened');
        this.addClass('gui-upward');
        this.removeClass('gui-downward');
    }
    closeOptions() {
        const optionsElHasOpenClass = this.elementRef.nativeElement.classList.contains('gui-options-opened');
        if (optionsElHasOpenClass) {
            this.removeClass('gui-options-opened');
            this.closeSelect();
        }
    }
    isContainerClicked(event) {
        return !this.elementRef.nativeElement.contains(event.target);
    }
    isContainerDisabled(event) {
        return event.target.classList.contains('gui-disabled');
    }
    addClass(className) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    }
    removeClass(className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    }
}
FabricSelectComponent.ɵfac = function FabricSelectComponent_Factory(t) { return new (t || FabricSelectComponent)(i0.ɵɵdirectiveInject(i1.FabricSelectedOptionsRepository), i0.ɵɵdirectiveInject(i2.SelectOptionsGeometryService), i0.ɵɵdirectiveInject(i3.SelectOptionModalService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
FabricSelectComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricSelectComponent, selectors: [["gui-select"]], viewQuery: function FabricSelectComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.containerRef = _t.first);
    } }, hostVars: 2, hostBindings: function FabricSelectComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-select", true);
    } }, inputs: { options: "options", placeholder: "placeholder", selected: "selected", width: "width", disabled: "disabled" }, outputs: { optionChanged: "optionChanged" }, features: [i0.ɵɵProvidersFeature([
            FabricSelectedOptionsRepository,
            SelectOptionsGeometryService,
            SelectOptionModalService
        ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 5, vars: 5, consts: [[1, "gui-select-container", 3, "click"], ["container", ""], [1, "gui-select-value"], [1, "gui-select-arrow"]], template: function FabricSelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵlistener("click", function FabricSelectComponent_Template_div_click_0_listener($event) { return ctx.tryToOpen($event); })("click", function FabricSelectComponent_Template_div_click_0_listener($event) { return ctx.clickOutside($event); }, false, i0.ɵɵresolveDocument);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "span", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.width, "px");
        i0.ɵɵclassProp("gui-disabled", ctx.disabled);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.containerText, " ");
    } }, styles: [".gui-select .gui-select-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:content-box;color:#333;cursor:pointer;display:inline-block;font:14px Arial;padding:8px 24px 8px 12px;position:relative}.gui-select .gui-select-container:hover{border-color:#999}.gui-select .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:#595959 transparent transparent transparent;height:0;margin:8px;position:absolute;right:5px;top:5px;width:0}.gui-select.gui-options-opened .gui-select-container{border-color:#6fb4e8 #6fb4e8 transparent #6fb4e8;border-radius:4px 4px 0 0;border-width:1px}.gui-select.gui-downward .gui-options-list{border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-top:none;border-width:1px}.gui-select.gui-downward .gui-option{border-color:#e6e6e6;border-style:solid;border-width:1px 0 0 0}.gui-select.gui-upward .gui-select-container{padding:8px 12px 8px 24px;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-value{-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:transparent transparent #595959 transparent;bottom:5px;left:5px;top:auto}.gui-select.gui-upward .gui-options-list{border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-top:none;border-width:1px}.gui-select.gui-upward .gui-option{border-color:#e6e6e6;border-style:solid;border-width:0 0 1px 0;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select .gui-disabled{color:#ccc;pointer-events:none}.gui-select .gui-disabled .gui-select-arrow{border-color:#cccccc transparent transparent transparent}.gui-select .initAnimationDisabled.gui-options-list{display:none}.gui-options-list{background:#fff;border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-width:0 1px 1px 1px;overflow:hidden;padding:0;position:absolute;z-index:1000}.gui-options-list .gui-option{box-sizing:content-box;cursor:pointer;font-size:14px;list-style-type:none;padding:8px 24px 8px 12px}.gui-options-list .gui-option:hover{background:#dcdcdc}.gui-options-list .gui-option-selected{background:#e6e6e6;font-weight:bold}.gui-options-list.gui-upward{-webkit-animation:loadUpward .2s forwards;animation:loadUpward .2s forwards;border-bottom:none;border-color:#6fb4e8;border-radius:4px 4px 0 0;border-style:solid;border-width:1px}@-webkit-keyframes loadUpward{0%{transform:translateY(50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}@keyframes loadUpward{0%{transform:translateY(50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}.gui-options-list.gui-downward{-webkit-animation:loadDownward .2s forwards;animation:loadDownward .2s forwards;border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-width:0 1px 1px 1px}@-webkit-keyframes loadDownward{0%{transform:translateY(-50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}@keyframes loadDownward{0%{transform:translateY(-50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}\n", ".gui-material .gui-select .gui-select-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-options-list .gui-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-select .gui-select-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-select .gui-select-container:hover{border-color:#ce93d8}.gui-dark .gui-select .gui-select-container .gui-select-arrow{border-color:#ce93d8 transparent transparent transparent}.gui-dark .gui-select.gui-options-opened .gui-select-container{border-color:#ce93d8}.gui-dark .gui-select.gui-upward .gui-select-container .gui-select-arrow{border-color:transparent transparent #ce93d8 transparent}.gui-dark .gui-select .gui-disabled{opacity:.36}.gui-dark .gui-options-list{border-color:#ce93d8}.gui-dark .gui-options-list .gui-option{background:#424242;border-color:#757575;color:#bdbdbd}.gui-dark .gui-options-list .gui-option:hover{background:#616161}.gui-dark .gui-options-list .gui-option-selected{background:#757575}\n", ".gui-light .gui-select .gui-select-container{background:#fff;color:#333;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-light .gui-options-list .gui-option:hover{background:#f6f6f5}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricSelectComponent, [{
        type: Component,
        args: [{
                selector: 'gui-select',
                templateUrl: './select.component.html',
                styleUrls: [
                    './select.ngx.scss',
                    './themes/select.material.ngx.scss',
                    './themes/select.dark.ngx.scss',
                    './themes/select.light.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-select]': 'true'
                },
                providers: [
                    FabricSelectedOptionsRepository,
                    SelectOptionsGeometryService,
                    SelectOptionModalService
                ]
            }]
    }], function () { return [{ type: i1.FabricSelectedOptionsRepository }, { type: i2.SelectOptionsGeometryService }, { type: i3.SelectOptionModalService }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { containerRef: [{
            type: ViewChild,
            args: ['container', { static: false }]
        }], options: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], selected: [{
            type: Input
        }], width: [{
            type: Input
        }], disabled: [{
            type: Input
        }], optionChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2Zvcm0vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxNQUFNLEVBQ04sV0FBVyxFQUdYLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDekYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7QUFzQjlELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxjQUFjO0lBaUN4RCxZQUE2QixhQUE4QyxFQUN2RCw0QkFBMEQsRUFDMUQsd0JBQWtELEVBQ2xELGlCQUFvQyxFQUNmLFVBQWUsRUFDcEMsVUFBc0IsRUFDdEIsUUFBbUI7UUFDdEMsS0FBSyxFQUFFLENBQUM7UUFQb0Isa0JBQWEsR0FBYixhQUFhLENBQWlDO1FBQ3ZELGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDMUQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ2YsZUFBVSxHQUFWLFVBQVUs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QUFtQztvQkFDbkMsK0JBQStCO29CQUMvQixnQ0FBZ0M7aUJBQ2hDO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNMLG9CQUFvQixFQUFFLE1BQU07aUJBQzVCO2dCQUNELFNBQVMsRUFBRTtvQkFDViwrQkFBK0I7b0JBQy9CLDRCQUE0QjtvQkFDNUIsd0JBQXdCO2lCQUN4QjthQUNEOztzQkFzQ0ksTUFBTTt1QkFBQyxXQUFXO3lFQWxDdEIsWUFBWTtrQkFEWCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFJekMsT0FBTztrQkFETixLQUFLO1lBSU4sV0FBVztrQkFEVixLQUFLO1lBSU4sUUFBUTtrQkFEUCxLQUFLO1lBSU4sS0FBSztrQkFESixLQUFLO1lBSU4sUUFBUTtrQkFEUCxLQUFLO1lBSU4sYUFBYTtrQkFEWixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T25DaGFuZ2VzLFxuXHRPbkluaXQsXG5cdE91dHB1dCxcblx0UExBVEZPUk1fSUQsXG5cdFJlbmRlcmVyMixcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEd1aVNlbGVjdE9wdGlvbiB9IGZyb20gJy4vc2VsZWN0LW9wdGlvbic7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlIH0gZnJvbSAnLi9vcHRpb25zL3NlbGVjdC1vcHRpb25zLWdlb21ldHJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljU2VsZWN0ZWRPcHRpb25zUmVwb3NpdG9yeSB9IGZyb20gJy4vc2VsZWN0ZWQtb3B0aW9uLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VsZWN0T3B0aW9uc0NvcmRzIH0gZnJvbSAnLi9vcHRpb25zL3NlbGVjdC1vcHRpb25zLmNvcmRzJztcbmltcG9ydCB7IFNlbGVjdE9wdGlvbk1vZGFsU2VydmljZSB9IGZyb20gJy4vc2VsZWN0LW9wdGlvbi1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY1JlYWN0aXZlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zZWxlY3QnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc2VsZWN0Lm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvc2VsZWN0Lm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvc2VsZWN0LmRhcmsubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9zZWxlY3QubGlnaHQubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktc2VsZWN0XSc6ICd0cnVlJ1xuXHR9LFxuXHRwcm92aWRlcnM6IFtcblx0XHRGYWJyaWNTZWxlY3RlZE9wdGlvbnNSZXBvc2l0b3J5LFxuXHRcdFNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2UsXG5cdFx0U2VsZWN0T3B0aW9uTW9kYWxTZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgRmFicmljUmVhY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cblx0QFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGNvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHRvcHRpb25zOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+ID0gW107XG5cblx0QElucHV0KClcblx0cGxhY2Vob2xkZXI6IHN0cmluZyA9ICcuLi4nO1xuXG5cdEBJbnB1dCgpXG5cdHNlbGVjdGVkOiBHdWlTZWxlY3RPcHRpb247XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlciA9IDEwMDtcblxuXHRASW5wdXQoKVxuXHRkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBPdXRwdXQoKVxuXHRvcHRpb25DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxHdWlTZWxlY3RPcHRpb24+KCk7XG5cblx0c2VsZWN0ZWRPcHRpb246IEd1aVNlbGVjdE9wdGlvbjtcblxuXHRjb250YWluZXJUZXh0OiBzdHJpbmc7XG5cblx0cHJpdmF0ZSBzY3JvbGxMaXN0ZW5lckZuOiAoKSA9PiB2b2lkO1xuXG5cdHByaXZhdGUgZG9Ob3RFbWl0VmFsdWVzOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBvcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNlbGVjdFNlcnZpY2U6IEZhYnJpY1NlbGVjdGVkT3B0aW9uc1JlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZTogU2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWxlY3RPcHRpb25Nb2RhbFNlcnZpY2U6IFNlbGVjdE9wdGlvbk1vZGFsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKGNoYW5nZXMucGxhY2Vob2xkZXIpIHtcblx0XHRcdHRoaXMuY29udGFpbmVyVGV4dCA9IHRoaXMucGxhY2Vob2xkZXI7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuc2VsZWN0ZWQpIHtcblx0XHRcdGlmICh0aGlzLnNlbGVjdGVkKSB7XG5cdFx0XHRcdHRoaXMudHJ5VG9TZWxlY3QodGhpcy5zZWxlY3RlZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RTZXJ2aWNlXG5cdFx0XHQub25TZWxlY3RlZE9wdGlvbigpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoc2VsZWN0ZWRPcHRpb246IEd1aVNlbGVjdE9wdGlvbikgPT4ge1xuXHRcdFx0XHR0aGlzLmVtaXRTZWxlY3RlZE9wdGlvbihzZWxlY3RlZE9wdGlvbik7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3RlZE9wdGlvbjtcblx0XHRcdFx0dGhpcy5jb250YWluZXJUZXh0ID0gc2VsZWN0ZWRPcHRpb24udmFsdWU7XG5cdFx0XHRcdHRoaXMuZG9Ob3RFbWl0VmFsdWVzID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2Vcblx0XHRcdC5vblNlbGVjdE9wdGlvbnNDb3JkcygpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29yZHM6IFNlbGVjdE9wdGlvbnNDb3JkcykgPT4ge1xuXG5cdFx0XHRcdGlmIChjb3Jkcy5nZXRDYW5PcGVuVXB3YXJkKCkpIHtcblx0XHRcdFx0XHR0aGlzLm9wZW5VcHdhcmQoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLm9wZW5Eb3dud2FyZCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRyeVRvT3BlbihldmVudDogYW55KTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5pc0NvbnRhaW5lckRpc2FibGVkKGV2ZW50KSkge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3Blbih0aGlzLm9wdGlvbnMsIHRoaXMud2lkdGgpO1xuXHRcdFx0dGhpcy50b2dnbGVPcHRpb25zKCF0aGlzLm9wZW5lZCk7XG5cdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHR9XG5cdH1cblxuXHRjbGlja091dHNpZGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQ29udGFpbmVyQ2xpY2tlZChldmVudCkpIHtcblx0XHRcdHRoaXMudG9nZ2xlT3B0aW9ucyhmYWxzZSk7XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlT3B0aW9ucyhvcGVuZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLm9wZW5lZCA9IG9wZW5lZDtcblx0XHR0aGlzLm1haW50YWluT3B0aW9uc0xpc3RQb3NpdGlvbigpO1xuXHRcdGlmICghdGhpcy5vcGVuZWQpIHtcblx0XHRcdHRoaXMuY2xvc2VPcHRpb25zKCk7XG5cdFx0fVxuXHR9XG5cblx0aXNPcHRpb25TZWxlY3RlZChvcHRpb246IEd1aVNlbGVjdE9wdGlvbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkT3B0aW9uICYmIG9wdGlvbi5uYW1lID09PSB0aGlzLnNlbGVjdGVkT3B0aW9uLm5hbWU7XG5cdH1cblxuXHRnZXRPcHRpb25WYWx1ZShvcHRpb246IEd1aVNlbGVjdE9wdGlvbik6IHN0cmluZyB7XG5cdFx0aWYgKG9wdGlvbikge1xuXHRcdFx0cmV0dXJuIG9wdGlvbi52YWx1ZSA/IG9wdGlvbi52YWx1ZSA6IG9wdGlvbi5uYW1lO1xuXHRcdH1cblxuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHByaXZhdGUgb3BlbihvcHRpb25zOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+LCB3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jbG9zZVNlbGVjdCgpO1xuXHRcdHRoaXMuc2VsZWN0T3B0aW9uTW9kYWxTZXJ2aWNlLm9wZW4ob3B0aW9ucywgd2lkdGgpO1xuXHRcdHRoaXMuc2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZS5uZXh0Q29yZHModGhpcy5jb250YWluZXJSZWYpO1xuXHR9XG5cblx0cHJpdmF0ZSB0cnlUb1NlbGVjdChvcHRpb246IEd1aVNlbGVjdE9wdGlvbik6IHZvaWQge1xuXHRcdGNvbnN0IGNhblNlbGVjdCA9IHRoaXMuc2VsZWN0ZWRPcHRpb24gPyBvcHRpb24ubmFtZSAhPT0gdGhpcy5zZWxlY3RlZE9wdGlvbi5uYW1lIDogdHJ1ZTtcblxuXHRcdGlmIChjYW5TZWxlY3QpIHtcblx0XHRcdHRoaXMuZG9Ob3RFbWl0VmFsdWVzID0gdHJ1ZTtcblx0XHRcdHRoaXMuc2VsZWN0U2VydmljZS5uZXh0KG9wdGlvbik7XG5cdFx0XHR0aGlzLnNlbGVjdGVkT3B0aW9uID0gb3B0aW9uO1xuXHRcdFx0dGhpcy5jb250YWluZXJUZXh0ID0gdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgbWFpbnRhaW5PcHRpb25zTGlzdFBvc2l0aW9uKCk6IHZvaWQge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRpZiAodGhpcy5vcGVuZWQpIHtcblx0XHRcdFx0dGhpcy5zY3JvbGxMaXN0ZW5lckZuID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdzY3JvbGwnLCAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlLm5leHRDb3Jkcyh0aGlzLmNvbnRhaW5lclJlZik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHRoaXMuc2Nyb2xsTGlzdGVuZXJGbikge1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsTGlzdGVuZXJGbigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjbG9zZVNlbGVjdCgpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdE9wdGlvbk1vZGFsU2VydmljZS5jbG9zZU9wdGlvbnMoKTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdFNlbGVjdGVkT3B0aW9uKG9wdGlvbjogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmRvTm90RW1pdFZhbHVlcykge1xuXHRcdFx0aWYgKCF0aGlzLmlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSkge1xuXHRcdFx0XHR0aGlzLm9wdGlvbkNoYW5nZWQuZW1pdChvcHRpb24pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgb3BlbkRvd253YXJkKCk6IHZvaWQge1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1vcHRpb25zLW9wZW5lZCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1kb3dud2FyZCcpO1xuXHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS11cHdhcmQnKTtcblx0fVxuXG5cdHByaXZhdGUgb3BlblVwd2FyZCgpOiB2b2lkIHtcblx0XHR0aGlzLmFkZENsYXNzKCdndWktb3B0aW9ucy1vcGVuZWQnKTtcblx0XHR0aGlzLmFkZENsYXNzKCdndWktdXB3YXJkJyk7XG5cdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLWRvd253YXJkJyk7XG5cdH1cblxuXHRwcml2YXRlIGNsb3NlT3B0aW9ucygpOiB2b2lkIHtcblx0XHRjb25zdCBvcHRpb25zRWxIYXNPcGVuQ2xhc3MgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2d1aS1vcHRpb25zLW9wZW5lZCcpO1xuXG5cdFx0aWYgKG9wdGlvbnNFbEhhc09wZW5DbGFzcykge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLW9wdGlvbnMtb3BlbmVkJyk7XG5cdFx0XHR0aGlzLmNsb3NlU2VsZWN0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcblx0fVxuXG5cdHByaXZhdGUgaXNDb250YWluZXJEaXNhYmxlZChldmVudDogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2d1aS1kaXNhYmxlZCcpO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGRDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcblx0fVxufVxuIiwiPGRpdiAjY29udGFpbmVyXG5cdCAoY2xpY2spPVwidHJ5VG9PcGVuKCRldmVudClcIlxuXHQgKGRvY3VtZW50OmNsaWNrKT1cImNsaWNrT3V0c2lkZSgkZXZlbnQpXCJcblx0IFtjbGFzcy5ndWktZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuXHQgW3N0eWxlLndpZHRoLnB4XT1cIndpZHRoXCJcblx0IGNsYXNzPVwiZ3VpLXNlbGVjdC1jb250YWluZXJcIj5cblxuXHQ8ZGl2IGNsYXNzPVwiZ3VpLXNlbGVjdC12YWx1ZVwiPlxuXHRcdHt7Y29udGFpbmVyVGV4dH19XG5cdDwvZGl2PlxuXG5cdDxzcGFuIGNsYXNzPVwiZ3VpLXNlbGVjdC1hcnJvd1wiPjwvc3Bhbj5cblxuPC9kaXY+XG4iXX0=