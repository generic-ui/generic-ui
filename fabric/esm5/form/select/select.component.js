/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, ViewChild, ViewEncapsulation, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
var FabricSelectComponent = /** @class */ (function () {
    function FabricSelectComponent(platformId, elementRef, renderer, changeDetectorRef) {
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
    FabricSelectComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            this.windowSize = window.innerHeight;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricSelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.placeholder) {
            this.selectedOption = this.placeholder;
        }
        else if (this.placeholder === undefined) {
            this.selectedOption = '...';
        }
        if (changes.selected) {
            this.tryToSelect(this.selected);
        }
    };
    /**
     * @return {?}
     */
    FabricSelectComponent.prototype.calculateDirection = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var containerEl = this.containerRef.nativeElement;
        /** @type {?} */
        var containerHeight = containerEl.offsetHeight;
        /** @type {?} */
        var rectBottom = containerEl.getBoundingClientRect().bottom;
        /** @type {?} */
        var optionsHeight = containerHeight * this.options.length;
        /** @type {?} */
        var availableBottomSpace = this.windowSize - rectBottom - optionsHeight;
        /** @type {?} */
        var availableTopSpace = rectBottom - optionsHeight - containerHeight;
        this.canOpenUpward = availableTopSpace > 0;
        this.canOpenDownward = availableBottomSpace > 0;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FabricSelectComponent.prototype.tryToOpen = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isContainerDisabled(event)) {
            event.stopPropagation();
        }
        else {
            this.toggleOptions(!this.open);
            this.initAnimationDisabled = false;
            this.changeDetectorRef.detectChanges();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FabricSelectComponent.prototype.clickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isContainerClicked(event)) {
            this.toggleOptions(false);
        }
    };
    /**
     * @param {?} opened
     * @return {?}
     */
    FabricSelectComponent.prototype.toggleOptions = /**
     * @param {?} opened
     * @return {?}
     */
    function (opened) {
        this.open = opened;
        if (this.open) {
            this.openOptions();
        }
        else {
            this.closeOptions();
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    FabricSelectComponent.prototype.isOptionSelected = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return option === this.selectedOption;
    };
    /**
     * @param {?} option
     * @param {?} optionIndex
     * @return {?}
     */
    FabricSelectComponent.prototype.onSelect = /**
     * @param {?} option
     * @param {?} optionIndex
     * @return {?}
     */
    function (option, optionIndex) {
        this.emitSelectedOption(option);
        this.selectedOption = option;
        this.removeSelectedOption();
        this.setSelectedOption(optionIndex);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    FabricSelectComponent.prototype.tryToSelect = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (this.options.indexOf(option) !== -1) {
            this.selectedOption = option;
        }
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    FabricSelectComponent.prototype.emitSelectedOption = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (!this.isOptionSelected(option)) {
            this.optionChanged.emit(option);
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricSelectComponent.prototype.openOptions = /**
     * @private
     * @return {?}
     */
    function () {
        this.calculateDirection();
        if (this.canOpenDownward || !this.canOpenUpward) {
            this.openDownward();
        }
        else {
            this.openUpward();
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricSelectComponent.prototype.openDownward = /**
     * @private
     * @return {?}
     */
    function () {
        this.addClass('gui-options-opened');
        this.addClass('gui-downward');
        this.removeClass('gui-upward');
    };
    /**
     * @private
     * @return {?}
     */
    FabricSelectComponent.prototype.openUpward = /**
     * @private
     * @return {?}
     */
    function () {
        this.addClass('gui-options-opened');
        this.addClass('gui-upward');
        this.removeClass('gui-downward');
    };
    /**
     * @private
     * @return {?}
     */
    FabricSelectComponent.prototype.closeOptions = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var optionsElHasOpenClass = this.elementRef.nativeElement.classList.contains('gui-options-opened');
        if (optionsElHasOpenClass) {
            this.removeClass('gui-options-opened');
        }
        if (!optionsElHasOpenClass) {
            this.initAnimationDisabled = true;
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    FabricSelectComponent.prototype.isContainerClicked = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return !this.elementRef.nativeElement.contains(event.target);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    FabricSelectComponent.prototype.isContainerDisabled = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.target.classList.contains('gui-disabled');
    };
    /**
     * @private
     * @param {?} optionIndex
     * @return {?}
     */
    FabricSelectComponent.prototype.setSelectedOption = /**
     * @private
     * @param {?} optionIndex
     * @return {?}
     */
    function (optionIndex) {
        /** @type {?} */
        var optionEl = this.optionListRef.nativeElement.querySelector('[data-option-index="' + optionIndex, '"]');
        this.renderer.addClass(optionEl, this.SELECTED_OPTION_CLASS_NAME);
    };
    /**
     * @private
     * @return {?}
     */
    FabricSelectComponent.prototype.removeSelectedOption = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectedOptionEl = this.optionListRef.nativeElement.querySelector('.' + this.SELECTED_OPTION_CLASS_NAME);
        if (selectedOptionEl) {
            this.renderer.removeClass(selectedOptionEl, this.SELECTED_OPTION_CLASS_NAME);
        }
    };
    /**
     * @private
     * @param {?} className
     * @return {?}
     */
    FabricSelectComponent.prototype.addClass = /**
     * @private
     * @param {?} className
     * @return {?}
     */
    function (className) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    };
    /**
     * @private
     * @param {?} className
     * @return {?}
     */
    FabricSelectComponent.prototype.removeClass = /**
     * @private
     * @param {?} className
     * @return {?}
     */
    function (className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    };
    FabricSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-select',
                    template: "<div #container\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t [style.width.px]=\"width\"\n\t [ngClass]=\"{'gui-disabled': disabled}\"\n\t class=\"gui-select-container\">\n\n\t<div class=\"gui-select-value\">\n\t\t{{selectedOption}}\n\t</div>\n\n\t<span class=\"gui-select-arrow\"></span>\n\n\t<div #optionlist\n\t\t [ngClass]=\"{initAnimationDisabled: initAnimationDisabled}\"\n\t\t class=\"gui-options\">\n\n\t\t<div *ngFor=\"let option of options; let optionIndex=index\"\n\t\t\t (click)=\"onSelect(option, optionIndex)\"\n\t\t\t [style.width.px]=\"width\"\n\t\t\t [class.gui-selected-option]=\"isOptionSelected(option)\"\n\t\t\t [attr.data-option-index]=\"optionIndex\"\n\t\t\t class=\"gui-option\">\n\t\t\t{{option}}\n\t\t</div>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-select]': 'true'
                    },
                    styles: [".gui-select .gui-select-container{box-sizing:content-box;background:#fff;border-radius:4px;cursor:pointer;color:#333;display:inline-block;font:14px Arial;padding:8px 24px 8px 12px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #d6d6d6}.gui-select .gui-select-container:hover{border-color:#999}.gui-select .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:#595959 transparent transparent;position:absolute;top:5px;right:5px;margin:8px;width:0;height:0}.gui-select .gui-select-container .gui-options{background:inherit;left:-1px;margin:8px 0 0;overflow:hidden;padding:0;position:absolute;z-index:2;-webkit-animation:.1s forwards close;animation:.1s forwards close}.gui-select .gui-select-container .gui-options .gui-option{box-sizing:content-box;padding:8px 24px 8px 12px;list-style-type:none}.gui-select .gui-select-container .gui-options .gui-option:hover{background:#dcdcdc}.gui-select.gui-options-opened .gui-select-container{border-color:#6fb4e8;border-radius:4px 4px 0 0}.gui-select.gui-options-opened .gui-options{-webkit-animation:.2s forwards load;animation:.2s forwards load}.gui-select.gui-downward .gui-options{border-color:#6fb4e8;border-style:solid;border-width:1px;border-top:none;border-radius:0 0 4px 4px}.gui-select.gui-downward .gui-option{border-style:solid;border-width:1px 0 0;border-color:#e6e6e6}.gui-select.gui-upward .gui-select-container{padding:8px 12px 8px 24px;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-value{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:transparent transparent #595959;top:auto;left:5px;bottom:5px}.gui-select.gui-upward .gui-options{border-color:#6fb4e8;border-style:solid;border-width:1px;border-top:none;border-radius:0 0 4px 4px}.gui-select.gui-upward .gui-option{border-style:solid;border-width:0 0 1px;border-color:#e6e6e6;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select .gui-selected-option{background:#e6e6e6;font-weight:700}.gui-select .gui-disabled{color:#ccc;pointer-events:none}.gui-select .gui-disabled .gui-select-arrow{border-color:#ccc transparent transparent}.gui-select .initAnimationDisabled.gui-options{display:none}@-webkit-keyframes load{0%{-webkit-transform:translateY(-50%) scaleY(0);transform:translateY(-50%) scaleY(0)}100%{-webkit-transform:translateY(0) scaleY(1);transform:translateY(0) scaleY(1)}}@keyframes load{0%{-webkit-transform:translateY(-50%) scaleY(0);transform:translateY(-50%) scaleY(0)}100%{-webkit-transform:translateY(0) scaleY(1);transform:translateY(0) scaleY(1)}}@-webkit-keyframes close{0%{-webkit-transform:translateY(0) scaleY(1);transform:translateY(0) scaleY(1)}100%{-webkit-transform:translateY(-50%) scaleY(0);transform:translateY(-50%) scaleY(0)}}@keyframes close{0%{-webkit-transform:translateY(0) scaleY(1);transform:translateY(0) scaleY(1)}100%{-webkit-transform:translateY(-50%) scaleY(0);transform:translateY(-50%) scaleY(0)}}", ".gui-material .gui-select .gui-select-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-select .gui-select-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-select .gui-select-container:hover{border-color:#ce93d8}.gui-dark .gui-select .gui-select-container .gui-select-arrow{border-color:#ce93d8 transparent transparent}.gui-dark .gui-select .gui-select-container .gui-options{border-color:#ce93d8}.gui-dark .gui-select .gui-select-container .gui-options .gui-option{border-color:#757575}.gui-dark .gui-select .gui-select-container .gui-options .gui-option:hover{background:#616161}.gui-dark .gui-select.gui-options-opened .gui-select-container{border-color:#ce93d8}.gui-dark .gui-select.gui-upward .gui-select-container .gui-select-arrow{border-color:transparent transparent #ce93d8}.gui-dark .gui-select .gui-selected-option{background:#757575}.gui-dark .gui-select .gui-disabled{opacity:.36}", ".gui-light .gui-select .gui-select-container{font-family:Roboto,\"Helvetica Neue\",sans-serif;background:#fff;color:#333}.gui-light .gui-select .gui-select-container .gui-options .gui-option:hover{background:#f6f6f5}"]
                }] }
    ];
    /** @nocollapse */
    FabricSelectComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
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
    return FabricSelectComponent;
}());
export { FabricSelectComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFFVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2QsTUFBTSxFQUNOLFdBQVcsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRDtJQThEQywrQkFBeUMsVUFBZSxFQUM3QyxVQUFzQixFQUN0QixRQUFtQixFQUNuQixpQkFBb0M7UUFITixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQzdDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBbEMvQyxZQUFPLEdBQWtCLEVBQUUsQ0FBQztRQVM1QixVQUFLLEdBQVcsR0FBRyxDQUFDO1FBR3BCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBSTNDLDBCQUFxQixHQUFZLElBQUksQ0FBQztRQVE5QixTQUFJLEdBQVksS0FBSyxDQUFDO1FBRWIsK0JBQTBCLEdBQUcscUJBQXFCLENBQUM7UUFNbkUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUEzQ0Qsd0NBQVE7OztJQURSO1FBRUMsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1NBQ3JD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QUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7O2dCQTVNRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLGt5QkFBb0M7b0JBT3BDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFO3dCQUNMLG9CQUFvQixFQUFFLE1BQU07cUJBQzVCOztpQkFDRDs7OztnREFnRGEsTUFBTSxTQUFDLFdBQVc7Z0JBN0UvQixVQUFVO2dCQU1WLFNBQVM7Z0JBUlQsaUJBQWlCOzs7Z0NBa0NoQixTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTsrQkFHekMsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7MkJBR3hDLFlBQVksU0FBQyxlQUFlOzBCQU81QixLQUFLOzhCQUdMLEtBQUs7MkJBR0wsS0FBSzt3QkFHTCxLQUFLOzJCQUdMLEtBQUs7Z0NBR0wsTUFBTTs7SUFnS1IsNEJBQUM7Q0FBQSxBQTdNRCxJQTZNQztTQTlMWSxxQkFBcUI7OztJQUVqQyw4Q0FDMEI7O0lBRTFCLDZDQUN5Qjs7SUFTekIsd0NBQzRCOztJQUU1Qiw0Q0FDb0I7O0lBRXBCLHlDQUNpQjs7SUFFakIsc0NBQ29COztJQUVwQix5Q0FDMEI7O0lBRTFCLDhDQUMyQzs7SUFFM0MsK0NBQXVCOztJQUV2QixzREFBc0M7O0lBRXRDLDJDQUFtQjs7Ozs7SUFFbkIsZ0RBQWlDOzs7OztJQUVqQyw4Q0FBK0I7Ozs7O0lBRS9CLHFDQUE4Qjs7Ozs7SUFFOUIsMkRBQW9FOzs7OztJQUV4RCwyQ0FBNEM7Ozs7O0lBQ3JELDJDQUE4Qjs7Ozs7SUFDOUIseUNBQTJCOzs7OztJQUMzQixrREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0RXZlbnRFbWl0dGVyLFxuXHRIb3N0TGlzdGVuZXIsXG5cdElucHV0LFxuXHRPbkNoYW5nZXMsXG5cdE91dHB1dCxcblx0UmVuZGVyZXIyLFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uLFxuICAgIEluamVjdCxcbiAgICBQTEFURk9STV9JRFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXNlbGVjdCcsXG5cdHRlbXBsYXRlVXJsOiBgc2VsZWN0LmNvbXBvbmVudC5odG1sYCxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc2VsZWN0Lm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvc2VsZWN0Lm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvc2VsZWN0LmRhcmsubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9zZWxlY3QubGlnaHQubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktc2VsZWN0XSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1NlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QFZpZXdDaGlsZCgnb3B0aW9ubGlzdCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRvcHRpb25MaXN0UmVmOiBFbGVtZW50UmVmO1xuXG5cdEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRjb250YWluZXJSZWY6IEVsZW1lbnRSZWY7XG5cblx0QEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG5cdG9uUmVzaXplKCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0aGlzLndpbmRvd1NpemUgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0fVxuXHR9XG5cblx0QElucHV0KClcblx0b3B0aW9uczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0c2VsZWN0ZWQ6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHR3aWR0aDogbnVtYmVyID0gMTAwO1xuXG5cdEBJbnB1dCgpXG5cdGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0QE91dHB1dCgpXG5cdG9wdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXHRzZWxlY3RlZE9wdGlvbjogc3RyaW5nO1xuXG5cdGluaXRBbmltYXRpb25EaXNhYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0d2luZG93U2l6ZTogbnVtYmVyO1xuXG5cdHByaXZhdGUgY2FuT3BlbkRvd253YXJkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgY2FuT3BlblVwd2FyZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIG9wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IFNFTEVDVEVEX09QVElPTl9DTEFTU19OQU1FID0gJ2d1aS1zZWxlY3RlZC1vcHRpb24nO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblx0XHR0aGlzLm9uUmVzaXplKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHRpZiAoY2hhbmdlcy5wbGFjZWhvbGRlcikge1xuXHRcdFx0dGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMucGxhY2Vob2xkZXI7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnBsYWNlaG9sZGVyID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRPcHRpb24gPSAnLi4uJztcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5zZWxlY3RlZCkge1xuXHRcdFx0dGhpcy50cnlUb1NlbGVjdCh0aGlzLnNlbGVjdGVkKTtcblx0XHR9XG5cdH1cblxuXHRjYWxjdWxhdGVEaXJlY3Rpb24oKTogdm9pZCB7XG5cdFx0Y29uc3QgY29udGFpbmVyRWwgPSB0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LFxuXHRcdFx0Y29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyRWwub2Zmc2V0SGVpZ2h0LFxuXHRcdFx0cmVjdEJvdHRvbSA9IGNvbnRhaW5lckVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSxcblx0XHRcdG9wdGlvbnNIZWlnaHQgPSBjb250YWluZXJIZWlnaHQgKiB0aGlzLm9wdGlvbnMubGVuZ3RoLFxuXHRcdFx0YXZhaWxhYmxlQm90dG9tU3BhY2UgPSB0aGlzLndpbmRvd1NpemUgLSByZWN0Qm90dG9tIC0gb3B0aW9uc0hlaWdodCxcblx0XHRcdGF2YWlsYWJsZVRvcFNwYWNlID0gcmVjdEJvdHRvbSAtIG9wdGlvbnNIZWlnaHQgLSBjb250YWluZXJIZWlnaHQ7XG5cblx0XHR0aGlzLmNhbk9wZW5VcHdhcmQgPSBhdmFpbGFibGVUb3BTcGFjZSA+IDA7XG5cdFx0dGhpcy5jYW5PcGVuRG93bndhcmQgPSBhdmFpbGFibGVCb3R0b21TcGFjZSA+IDA7XG5cdH1cblxuXHR0cnlUb09wZW4oZXZlbnQ6IGFueSk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaXNDb250YWluZXJEaXNhYmxlZChldmVudCkpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnRvZ2dsZU9wdGlvbnMoIXRoaXMub3Blbik7XG5cdFx0XHR0aGlzLmluaXRBbmltYXRpb25EaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xpY2tPdXRzaWRlKGV2ZW50OiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZU9wdGlvbnMoZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZU9wdGlvbnMob3BlbmVkOiBib29sZWFuKSB7XG5cdFx0dGhpcy5vcGVuID0gb3BlbmVkO1xuXG5cdFx0aWYgKHRoaXMub3Blbikge1xuXHRcdFx0dGhpcy5vcGVuT3B0aW9ucygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNsb3NlT3B0aW9ucygpO1xuXHRcdH1cblx0fVxuXG5cdGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3B0aW9uID09PSB0aGlzLnNlbGVjdGVkT3B0aW9uO1xuXHR9XG5cblx0b25TZWxlY3Qob3B0aW9uOiBzdHJpbmcsIG9wdGlvbkluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmVtaXRTZWxlY3RlZE9wdGlvbihvcHRpb24pO1xuXHRcdHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBvcHRpb247XG5cdFx0dGhpcy5yZW1vdmVTZWxlY3RlZE9wdGlvbigpO1xuXHRcdHRoaXMuc2V0U2VsZWN0ZWRPcHRpb24ob3B0aW9uSW5kZXgpO1xuXHR9XG5cblx0dHJ5VG9TZWxlY3Qob3B0aW9uOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5vcHRpb25zLmluZGV4T2Yob3B0aW9uKSAhPT0gLTEpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBvcHRpb247XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBlbWl0U2VsZWN0ZWRPcHRpb24ob3B0aW9uOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24pKSB7XG5cdFx0XHR0aGlzLm9wdGlvbkNoYW5nZWQuZW1pdChvcHRpb24pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgb3Blbk9wdGlvbnMoKTogdm9pZCB7XG5cdFx0dGhpcy5jYWxjdWxhdGVEaXJlY3Rpb24oKTtcblxuXHRcdGlmICh0aGlzLmNhbk9wZW5Eb3dud2FyZCB8fCAhdGhpcy5jYW5PcGVuVXB3YXJkKSB7XG5cdFx0XHR0aGlzLm9wZW5Eb3dud2FyZCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wZW5VcHdhcmQoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9wZW5Eb3dud2FyZCgpOiB2b2lkIHtcblx0XHR0aGlzLmFkZENsYXNzKCdndWktb3B0aW9ucy1vcGVuZWQnKTtcblx0XHR0aGlzLmFkZENsYXNzKCdndWktZG93bndhcmQnKTtcblx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktdXB3YXJkJyk7XG5cdH1cblxuXHRwcml2YXRlIG9wZW5VcHdhcmQoKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRDbGFzcygnZ3VpLW9wdGlvbnMtb3BlbmVkJyk7XG5cdFx0dGhpcy5hZGRDbGFzcygnZ3VpLXVwd2FyZCcpO1xuXHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1kb3dud2FyZCcpO1xuXHR9XG5cblx0cHJpdmF0ZSBjbG9zZU9wdGlvbnMoKTogdm9pZCB7XG5cdFx0Y29uc3Qgb3B0aW9uc0VsSGFzT3BlbkNsYXNzID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdndWktb3B0aW9ucy1vcGVuZWQnKTtcblxuXHRcdGlmIChvcHRpb25zRWxIYXNPcGVuQ2xhc3MpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1vcHRpb25zLW9wZW5lZCcpO1xuXHRcdH1cblxuXHRcdGlmICghb3B0aW9uc0VsSGFzT3BlbkNsYXNzKSB7XG5cdFx0XHR0aGlzLmluaXRBbmltYXRpb25EaXNhYmxlZCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcblx0fVxuXG5cdHByaXZhdGUgaXNDb250YWluZXJEaXNhYmxlZChldmVudDogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2d1aS1kaXNhYmxlZCcpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRTZWxlY3RlZE9wdGlvbihvcHRpb25JbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0Y29uc3Qgb3B0aW9uRWwgPSB0aGlzLm9wdGlvbkxpc3RSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1vcHRpb24taW5kZXg9XCInICsgb3B0aW9uSW5kZXgsICdcIl0nKTtcblx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG9wdGlvbkVsLCB0aGlzLlNFTEVDVEVEX09QVElPTl9DTEFTU19OQU1FKTtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlU2VsZWN0ZWRPcHRpb24oKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRPcHRpb25FbCA9IHRoaXMub3B0aW9uTGlzdFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5TRUxFQ1RFRF9PUFRJT05fQ0xBU1NfTkFNRSk7XG5cdFx0aWYgKHNlbGVjdGVkT3B0aW9uRWwpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Moc2VsZWN0ZWRPcHRpb25FbCwgdGhpcy5TRUxFQ1RFRF9PUFRJT05fQ0xBU1NfTkFNRSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcblx0fVxufVxuIl19