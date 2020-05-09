/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Inject, Input, Output, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
export class FabricSelectComponent {
    /**
     * @param {?} platformId
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} changeDetectorRef
     */
    constructor(platformId, elementRef, renderer, changeDetectorRef) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.options = [];
        this.width = 100;
        this.disabled = false;
        this.optionChanged = new EventEmitter();
        this.initAnimationDisabled = true;
        this.open = false;
        this.SELECTED_OPTION_CLASS_NAME = 'gui-selected-option';
        this.onResize();
    }
    /**
     * @return {?}
     */
    onResize() {
        if (isPlatformBrowser(this.platformId)) {
            this.windowSize = window.innerHeight;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.placeholder) {
            this.selectedOption = this.placeholder;
        }
        else if (this.placeholder === undefined) {
            this.selectedOption = '...';
        }
        if (changes.selected) {
            this.tryToSelect(this.selected);
        }
    }
    /**
     * @return {?}
     */
    calculateDirection() {
        /** @type {?} */
        const containerEl = this.containerRef.nativeElement;
        /** @type {?} */
        const containerHeight = containerEl.offsetHeight;
        /** @type {?} */
        const rectBottom = containerEl.getBoundingClientRect().bottom;
        /** @type {?} */
        const optionsHeight = containerHeight * this.options.length;
        /** @type {?} */
        const availableBottomSpace = this.windowSize - rectBottom - optionsHeight;
        /** @type {?} */
        const availableTopSpace = rectBottom - optionsHeight - containerHeight;
        this.canOpenUpward = availableTopSpace > 0;
        this.canOpenDownward = availableBottomSpace > 0;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    tryToOpen(event) {
        if (this.isContainerDisabled(event)) {
            event.stopPropagation();
        }
        else {
            this.toggleOptions(!this.open);
            this.initAnimationDisabled = false;
            this.changeDetectorRef.detectChanges();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickOutside(event) {
        if (this.isContainerClicked(event)) {
            this.toggleOptions(false);
        }
    }
    /**
     * @param {?} opened
     * @return {?}
     */
    toggleOptions(opened) {
        this.open = opened;
        if (this.open) {
            this.openOptions();
        }
        else {
            this.closeOptions();
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    isOptionSelected(option) {
        return option === this.selectedOption;
    }
    /**
     * @param {?} option
     * @param {?} optionIndex
     * @return {?}
     */
    onSelect(option, optionIndex) {
        this.emitSelectedOption(option);
        this.selectedOption = option;
        this.removeSelectedOption();
        this.setSelectedOption(optionIndex);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    tryToSelect(option) {
        if (this.options.indexOf(option) !== -1) {
            this.selectedOption = option;
        }
    }
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    emitSelectedOption(option) {
        if (!this.isOptionSelected(option)) {
            this.optionChanged.emit(option);
        }
    }
    /**
     * @private
     * @return {?}
     */
    openOptions() {
        this.calculateDirection();
        if (this.canOpenDownward || !this.canOpenUpward) {
            this.openDownward();
        }
        else {
            this.openUpward();
        }
    }
    /**
     * @private
     * @return {?}
     */
    openDownward() {
        this.addClass('gui-options-opened');
        this.addClass('gui-downward');
        this.removeClass('gui-upward');
    }
    /**
     * @private
     * @return {?}
     */
    openUpward() {
        this.addClass('gui-options-opened');
        this.addClass('gui-upward');
        this.removeClass('gui-downward');
    }
    /**
     * @private
     * @return {?}
     */
    closeOptions() {
        /** @type {?} */
        const optionsElHasOpenClass = this.elementRef.nativeElement.classList.contains('gui-options-opened');
        if (optionsElHasOpenClass) {
            this.removeClass('gui-options-opened');
        }
        if (!optionsElHasOpenClass) {
            this.initAnimationDisabled = true;
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    isContainerClicked(event) {
        return !this.elementRef.nativeElement.contains(event.target);
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    isContainerDisabled(event) {
        return event.target.classList.contains('gui-disabled');
    }
    /**
     * @private
     * @param {?} optionIndex
     * @return {?}
     */
    setSelectedOption(optionIndex) {
        /** @type {?} */
        const optionEl = this.optionListRef.nativeElement.querySelector('[data-option-index="' + optionIndex, '"]');
        this.renderer.addClass(optionEl, this.SELECTED_OPTION_CLASS_NAME);
    }
    /**
     * @private
     * @return {?}
     */
    removeSelectedOption() {
        /** @type {?} */
        const selectedOptionEl = this.optionListRef.nativeElement.querySelector('.' + this.SELECTED_OPTION_CLASS_NAME);
        if (selectedOptionEl) {
            this.renderer.removeClass(selectedOptionEl, this.SELECTED_OPTION_CLASS_NAME);
        }
    }
    /**
     * @private
     * @param {?} className
     * @return {?}
     */
    addClass(className) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    }
    /**
     * @private
     * @param {?} className
     * @return {?}
     */
    removeClass(className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    }
}
FabricSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-select',
                template: "<div #container\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t [ngClass]=\"{'gui-disabled': disabled}\"\n\t [style.width.px]=\"width\"\n\t class=\"gui-select-container\">\n\n\t<div class=\"gui-select-value\">\n\t\t{{selectedOption}}\n\t</div>\n\n\t<span class=\"gui-select-arrow\"></span>\n\n\t<div #optionlist\n\t\t [ngClass]=\"{initAnimationDisabled: initAnimationDisabled}\"\n\t\t class=\"gui-options\">\n\n\t\t<div (click)=\"onSelect(option, optionIndex)\"\n\t\t\t *ngFor=\"let option of options; let optionIndex=index\"\n\t\t\t [attr.data-option-index]=\"optionIndex\"\n\t\t\t [class.gui-selected-option]=\"isOptionSelected(option)\"\n\t\t\t [style.width.px]=\"width\"\n\t\t\t class=\"gui-option\">\n\t\t\t{{option}}\n\t\t</div>\n\t</div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-select]': 'true'
                },
                styles: [".gui-select .gui-select-container{box-sizing:content-box;background:#fff;border-radius:4px;cursor:pointer;color:#333;display:inline-block;font:14px Arial;padding:8px 24px 8px 12px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #d6d6d6}.gui-select .gui-select-container:hover{border-color:#999}.gui-select .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:#595959 transparent transparent;position:absolute;top:5px;right:5px;margin:8px;width:0;height:0}.gui-select .gui-select-container .gui-options{background:inherit;left:-1px;margin:8px 0 0;overflow:hidden;padding:0;position:absolute;z-index:2;-webkit-animation:.1s forwards close;animation:.1s forwards close}.gui-select .gui-select-container .gui-options .gui-option{box-sizing:content-box;padding:8px 24px 8px 12px;list-style-type:none}.gui-select .gui-select-container .gui-options .gui-option:hover{background:#dcdcdc}.gui-select.gui-options-opened .gui-select-container{border-color:#6fb4e8;border-radius:4px 4px 0 0}.gui-select.gui-options-opened .gui-options{-webkit-animation:.2s forwards load;animation:.2s forwards load}.gui-select.gui-downward .gui-options{border-color:#6fb4e8;border-style:solid;border-width:1px;border-top:none;border-radius:0 0 4px 4px}.gui-select.gui-downward .gui-option{border-style:solid;border-width:1px 0 0;border-color:#e6e6e6}.gui-select.gui-upward .gui-select-container{padding:8px 12px 8px 24px;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-value{-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:transparent transparent #595959;top:auto;left:5px;bottom:5px}.gui-select.gui-upward .gui-options{border-color:#6fb4e8;border-style:solid;border-width:1px;border-top:none;border-radius:0 0 4px 4px}.gui-select.gui-upward .gui-option{border-style:solid;border-width:0 0 1px;border-color:#e6e6e6;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select .gui-selected-option{background:#e6e6e6;font-weight:700}.gui-select .gui-disabled{color:#ccc;pointer-events:none}.gui-select .gui-disabled .gui-select-arrow{border-color:#ccc transparent transparent}.gui-select .initAnimationDisabled.gui-options{display:none}@-webkit-keyframes load{0%{transform:translateY(-50%) scaleY(0)}100%{transform:translateY(0) scaleY(1)}}@keyframes load{0%{transform:translateY(-50%) scaleY(0)}100%{transform:translateY(0) scaleY(1)}}@-webkit-keyframes close{0%{transform:translateY(0) scaleY(1)}100%{transform:translateY(-50%) scaleY(0)}}@keyframes close{0%{transform:translateY(0) scaleY(1)}100%{transform:translateY(-50%) scaleY(0)}}", ".gui-material .gui-select .gui-select-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-select .gui-select-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-select .gui-select-container:hover{border-color:#ce93d8}.gui-dark .gui-select .gui-select-container .gui-select-arrow{border-color:#ce93d8 transparent transparent}.gui-dark .gui-select .gui-select-container .gui-options{border-color:#ce93d8}.gui-dark .gui-select .gui-select-container .gui-options .gui-option{border-color:#757575}.gui-dark .gui-select .gui-select-container .gui-options .gui-option:hover{background:#616161}.gui-dark .gui-select.gui-options-opened .gui-select-container{border-color:#ce93d8}.gui-dark .gui-select.gui-upward .gui-select-container .gui-select-arrow{border-color:transparent transparent #ce93d8}.gui-dark .gui-select .gui-selected-option{background:#757575}.gui-dark .gui-select .gui-disabled{opacity:.36}", ".gui-light .gui-select .gui-select-container{font-family:Roboto,\"Helvetica Neue\",sans-serif;background:#fff;color:#333}.gui-light .gui-select .gui-select-container .gui-options .gui-option:hover{background:#f6f6f5}"]
            }] }
];
/** @nocollapse */
FabricSelectComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
FabricSelectComponent.propDecorators = {
    optionListRef: [{ type: ViewChild, args: ['optionlist', { static: false },] }],
    containerRef: [{ type: ViewChild, args: ['container', { static: false },] }],
    onResize: [{ type: HostListener, args: ['window:resize',] }],
    options: [{ type: Input }],
    placeholder: [{ type: Input }],
    selected: [{ type: Input }],
    width: [{ type: Input }],
    disabled: [{ type: Input }],
    optionChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FabricSelectComponent.prototype.optionListRef;
    /** @type {?} */
    FabricSelectComponent.prototype.containerRef;
    /** @type {?} */
    FabricSelectComponent.prototype.options;
    /** @type {?} */
    FabricSelectComponent.prototype.placeholder;
    /** @type {?} */
    FabricSelectComponent.prototype.selected;
    /** @type {?} */
    FabricSelectComponent.prototype.width;
    /** @type {?} */
    FabricSelectComponent.prototype.disabled;
    /** @type {?} */
    FabricSelectComponent.prototype.optionChanged;
    /** @type {?} */
    FabricSelectComponent.prototype.selectedOption;
    /** @type {?} */
    FabricSelectComponent.prototype.initAnimationDisabled;
    /** @type {?} */
    FabricSelectComponent.prototype.windowSize;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.canOpenDownward;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.canOpenUpward;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.open;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.SELECTED_OPTION_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUVMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFpQnBELE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7SUErQ2pDLFlBQXlDLFVBQWUsRUFDN0MsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsaUJBQW9DO1FBSE4sZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUM3QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQWxDL0MsWUFBTyxHQUFrQixFQUFFLENBQUM7UUFTNUIsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUdwQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUkzQywwQkFBcUIsR0FBWSxJQUFJLENBQUM7UUFROUIsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUViLCtCQUEwQixHQUFHLHFCQUFxQixDQUFDO1FBTW5FLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBM0NELFFBQVE7UUFDUCxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FB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QUNyQyxJQUFJLEVBQUU7b0JBQ0wsb0JBQW9CLEVBQUUsTUFBTTtpQkFDNUI7O2FBQ0Q7Ozs7NENBZ0RhLE1BQU0sU0FBQyxXQUFXO1lBN0UvQixVQUFVO1lBUVYsU0FBUztZQVZULGlCQUFpQjs7OzRCQWtDaEIsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7MkJBR3pDLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3VCQUd4QyxZQUFZLFNBQUMsZUFBZTtzQkFPNUIsS0FBSzswQkFHTCxLQUFLO3VCQUdMLEtBQUs7b0JBR0wsS0FBSzt1QkFHTCxLQUFLOzRCQUdMLE1BQU07Ozs7SUE1QlAsOENBQzBCOztJQUUxQiw2Q0FDeUI7O0lBU3pCLHdDQUM0Qjs7SUFFNUIsNENBQ29COztJQUVwQix5Q0FDaUI7O0lBRWpCLHNDQUNvQjs7SUFFcEIseUNBQzBCOztJQUUxQiw4Q0FDMkM7O0lBRTNDLCtDQUF1Qjs7SUFFdkIsc0RBQXNDOztJQUV0QywyQ0FBbUI7Ozs7O0lBRW5CLGdEQUFpQzs7Ozs7SUFFakMsOENBQStCOzs7OztJQUUvQixxQ0FBOEI7Ozs7O0lBRTlCLDJEQUFvRTs7Ozs7SUFFeEQsMkNBQTRDOzs7OztJQUNyRCwyQ0FBOEI7Ozs7O0lBQzlCLHlDQUEyQjs7Ozs7SUFDM0Isa0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0SG9zdExpc3RlbmVyLFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPbkNoYW5nZXMsXG5cdE91dHB1dCxcblx0UExBVEZPUk1fSUQsXG5cdFJlbmRlcmVyMixcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXNlbGVjdCcsXG5cdHRlbXBsYXRlVXJsOiBgc2VsZWN0LmNvbXBvbmVudC5odG1sYCxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc2VsZWN0Lm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvc2VsZWN0Lm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvc2VsZWN0LmRhcmsubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9zZWxlY3QubGlnaHQubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktc2VsZWN0XSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1NlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QFZpZXdDaGlsZCgnb3B0aW9ubGlzdCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRvcHRpb25MaXN0UmVmOiBFbGVtZW50UmVmO1xuXG5cdEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRjb250YWluZXJSZWY6IEVsZW1lbnRSZWY7XG5cblx0QEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG5cdG9uUmVzaXplKCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0aGlzLndpbmRvd1NpemUgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0fVxuXHR9XG5cblx0QElucHV0KClcblx0b3B0aW9uczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0c2VsZWN0ZWQ6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHR3aWR0aDogbnVtYmVyID0gMTAwO1xuXG5cdEBJbnB1dCgpXG5cdGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0QE91dHB1dCgpXG5cdG9wdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXHRzZWxlY3RlZE9wdGlvbjogc3RyaW5nO1xuXG5cdGluaXRBbmltYXRpb25EaXNhYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0d2luZG93U2l6ZTogbnVtYmVyO1xuXG5cdHByaXZhdGUgY2FuT3BlbkRvd253YXJkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgY2FuT3BlblVwd2FyZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIG9wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IFNFTEVDVEVEX09QVElPTl9DTEFTU19OQU1FID0gJ2d1aS1zZWxlY3RlZC1vcHRpb24nO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblx0XHR0aGlzLm9uUmVzaXplKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHRpZiAoY2hhbmdlcy5wbGFjZWhvbGRlcikge1xuXHRcdFx0dGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMucGxhY2Vob2xkZXI7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnBsYWNlaG9sZGVyID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRPcHRpb24gPSAnLi4uJztcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5zZWxlY3RlZCkge1xuXHRcdFx0dGhpcy50cnlUb1NlbGVjdCh0aGlzLnNlbGVjdGVkKTtcblx0XHR9XG5cdH1cblxuXHRjYWxjdWxhdGVEaXJlY3Rpb24oKTogdm9pZCB7XG5cdFx0Y29uc3QgY29udGFpbmVyRWwgPSB0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LFxuXHRcdFx0Y29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyRWwub2Zmc2V0SGVpZ2h0LFxuXHRcdFx0cmVjdEJvdHRvbSA9IGNvbnRhaW5lckVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSxcblx0XHRcdG9wdGlvbnNIZWlnaHQgPSBjb250YWluZXJIZWlnaHQgKiB0aGlzLm9wdGlvbnMubGVuZ3RoLFxuXHRcdFx0YXZhaWxhYmxlQm90dG9tU3BhY2UgPSB0aGlzLndpbmRvd1NpemUgLSByZWN0Qm90dG9tIC0gb3B0aW9uc0hlaWdodCxcblx0XHRcdGF2YWlsYWJsZVRvcFNwYWNlID0gcmVjdEJvdHRvbSAtIG9wdGlvbnNIZWlnaHQgLSBjb250YWluZXJIZWlnaHQ7XG5cblx0XHR0aGlzLmNhbk9wZW5VcHdhcmQgPSBhdmFpbGFibGVUb3BTcGFjZSA+IDA7XG5cdFx0dGhpcy5jYW5PcGVuRG93bndhcmQgPSBhdmFpbGFibGVCb3R0b21TcGFjZSA+IDA7XG5cdH1cblxuXHR0cnlUb09wZW4oZXZlbnQ6IGFueSk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaXNDb250YWluZXJEaXNhYmxlZChldmVudCkpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnRvZ2dsZU9wdGlvbnMoIXRoaXMub3Blbik7XG5cdFx0XHR0aGlzLmluaXRBbmltYXRpb25EaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xpY2tPdXRzaWRlKGV2ZW50OiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZU9wdGlvbnMoZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZU9wdGlvbnMob3BlbmVkOiBib29sZWFuKSB7XG5cdFx0dGhpcy5vcGVuID0gb3BlbmVkO1xuXG5cdFx0aWYgKHRoaXMub3Blbikge1xuXHRcdFx0dGhpcy5vcGVuT3B0aW9ucygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNsb3NlT3B0aW9ucygpO1xuXHRcdH1cblx0fVxuXG5cdGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3B0aW9uID09PSB0aGlzLnNlbGVjdGVkT3B0aW9uO1xuXHR9XG5cblx0b25TZWxlY3Qob3B0aW9uOiBzdHJpbmcsIG9wdGlvbkluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmVtaXRTZWxlY3RlZE9wdGlvbihvcHRpb24pO1xuXHRcdHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBvcHRpb247XG5cdFx0dGhpcy5yZW1vdmVTZWxlY3RlZE9wdGlvbigpO1xuXHRcdHRoaXMuc2V0U2VsZWN0ZWRPcHRpb24ob3B0aW9uSW5kZXgpO1xuXHR9XG5cblx0dHJ5VG9TZWxlY3Qob3B0aW9uOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5vcHRpb25zLmluZGV4T2Yob3B0aW9uKSAhPT0gLTEpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBvcHRpb247XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBlbWl0U2VsZWN0ZWRPcHRpb24ob3B0aW9uOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24pKSB7XG5cdFx0XHR0aGlzLm9wdGlvbkNoYW5nZWQuZW1pdChvcHRpb24pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgb3Blbk9wdGlvbnMoKTogdm9pZCB7XG5cdFx0dGhpcy5jYWxjdWxhdGVEaXJlY3Rpb24oKTtcblxuXHRcdGlmICh0aGlzLmNhbk9wZW5Eb3dud2FyZCB8fCAhdGhpcy5jYW5PcGVuVXB3YXJkKSB7XG5cdFx0XHR0aGlzLm9wZW5Eb3dud2FyZCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wZW5VcHdhcmQoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9wZW5Eb3dud2FyZCgpOiB2b2lkIHtcblx0XHR0aGlzLmFkZENsYXNzKCdndWktb3B0aW9ucy1vcGVuZWQnKTtcblx0XHR0aGlzLmFkZENsYXNzKCdndWktZG93bndhcmQnKTtcblx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktdXB3YXJkJyk7XG5cdH1cblxuXHRwcml2YXRlIG9wZW5VcHdhcmQoKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRDbGFzcygnZ3VpLW9wdGlvbnMtb3BlbmVkJyk7XG5cdFx0dGhpcy5hZGRDbGFzcygnZ3VpLXVwd2FyZCcpO1xuXHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1kb3dud2FyZCcpO1xuXHR9XG5cblx0cHJpdmF0ZSBjbG9zZU9wdGlvbnMoKTogdm9pZCB7XG5cdFx0Y29uc3Qgb3B0aW9uc0VsSGFzT3BlbkNsYXNzID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdndWktb3B0aW9ucy1vcGVuZWQnKTtcblxuXHRcdGlmIChvcHRpb25zRWxIYXNPcGVuQ2xhc3MpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1vcHRpb25zLW9wZW5lZCcpO1xuXHRcdH1cblxuXHRcdGlmICghb3B0aW9uc0VsSGFzT3BlbkNsYXNzKSB7XG5cdFx0XHR0aGlzLmluaXRBbmltYXRpb25EaXNhYmxlZCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcblx0fVxuXG5cdHByaXZhdGUgaXNDb250YWluZXJEaXNhYmxlZChldmVudDogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2d1aS1kaXNhYmxlZCcpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRTZWxlY3RlZE9wdGlvbihvcHRpb25JbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0Y29uc3Qgb3B0aW9uRWwgPSB0aGlzLm9wdGlvbkxpc3RSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1vcHRpb24taW5kZXg9XCInICsgb3B0aW9uSW5kZXgsICdcIl0nKTtcblx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG9wdGlvbkVsLCB0aGlzLlNFTEVDVEVEX09QVElPTl9DTEFTU19OQU1FKTtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlU2VsZWN0ZWRPcHRpb24oKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRPcHRpb25FbCA9IHRoaXMub3B0aW9uTGlzdFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5TRUxFQ1RFRF9PUFRJT05fQ0xBU1NfTkFNRSk7XG5cdFx0aWYgKHNlbGVjdGVkT3B0aW9uRWwpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Moc2VsZWN0ZWRPcHRpb25FbCwgdGhpcy5TRUxFQ1RFRF9PUFRJT05fQ0xBU1NfTkFNRSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcblx0fVxufVxuIl19