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
                    styles: [".gui-select .gui-select-container{box-sizing:content-box;background:#fefdfc;border-radius:4px;cursor:pointer;color:#333;display:inline-block;font:14px Arial;padding:8px 24px 8px 12px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #d6d6d6}.gui-select .gui-select-container:hover{border-color:#999}.gui-select .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:#595959 transparent transparent;position:absolute;top:5px;right:5px;margin:8px;width:0;height:0}.gui-select .gui-select-container .gui-options{background:inherit;left:-1px;margin:8px 0 0;overflow:hidden;padding:0;position:absolute;z-index:2;-webkit-animation:.1s forwards close;animation:.1s forwards close}.gui-select .gui-select-container .gui-options .gui-option{box-sizing:content-box;padding:8px 24px 8px 12px;list-style-type:none}.gui-select .gui-select-container .gui-options .gui-option:hover{background:#dcdcdc}.gui-select.gui-options-opened .gui-select-container{border-color:#6fb4e8;border-radius:4px 4px 0 0}.gui-select.gui-options-opened .gui-options{-webkit-animation:.2s forwards load;animation:.2s forwards load}.gui-select.gui-downward .gui-options{border-color:#6fb4e8;border-style:solid;border-width:1px;border-top:none;border-radius:0 0 4px 4px}.gui-select.gui-downward .gui-option{border-style:solid;border-width:1px 0 0;border-color:#e6e6e6}.gui-select.gui-upward .gui-select-container{padding:8px 12px 8px 24px;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-value{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:transparent transparent #595959;top:auto;left:5px;bottom:5px}.gui-select.gui-upward .gui-options{border-color:#6fb4e8;border-style:solid;border-width:1px;border-top:none;border-radius:0 0 4px 4px}.gui-select.gui-upward .gui-option{border-style:solid;border-width:0 0 1px;border-color:#e6e6e6;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select .gui-selected-option{background:#e6e6e6;font-weight:700}.gui-select .gui-disabled{color:#ccc;pointer-events:none}.gui-select .gui-disabled .gui-select-arrow{border-color:#ccc transparent transparent}.gui-select .initAnimationDisabled.gui-options{display:none}@-webkit-keyframes load{0%{-webkit-transform:translateY(-50%) scaleY(0);transform:translateY(-50%) scaleY(0)}100%{-webkit-transform:translateY(0) scaleY(1);transform:translateY(0) scaleY(1)}}@keyframes load{0%{-webkit-transform:translateY(-50%) scaleY(0);transform:translateY(-50%) scaleY(0)}100%{-webkit-transform:translateY(0) scaleY(1);transform:translateY(0) scaleY(1)}}@-webkit-keyframes close{0%{-webkit-transform:translateY(0) scaleY(1);transform:translateY(0) scaleY(1)}100%{-webkit-transform:translateY(-50%) scaleY(0);transform:translateY(-50%) scaleY(0)}}@keyframes close{0%{-webkit-transform:translateY(0) scaleY(1);transform:translateY(0) scaleY(1)}100%{-webkit-transform:translateY(-50%) scaleY(0);transform:translateY(-50%) scaleY(0)}}", ".gui-material .gui-select .gui-select-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-select .gui-select-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-select .gui-select-container:hover{border-color:#ce93d8}.gui-dark .gui-select .gui-select-container .gui-select-arrow{border-color:#ce93d8 transparent transparent}.gui-dark .gui-select .gui-select-container .gui-options{border-color:#ce93d8}.gui-dark .gui-select .gui-select-container .gui-options .gui-option{border-color:#757575}.gui-dark .gui-select .gui-select-container .gui-options .gui-option:hover{background:#616161}.gui-dark .gui-select.gui-options-opened .gui-select-container{border-color:#ce93d8}.gui-dark .gui-select.gui-upward .gui-select-container .gui-select-arrow{border-color:transparent transparent #ce93d8}.gui-dark .gui-select .gui-selected-option{background:#757575}.gui-dark .gui-select .gui-disabled{opacity:.36}", ".gui-light .gui-select .gui-select-container{font-family:Roboto,\"Helvetica Neue\",sans-serif;background:#fff;color:#333}.gui-light .gui-select .gui-select-container .gui-options .gui-option:hover{background:#f6f6f5}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vbW9kYWxzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNkLE1BQU0sRUFDTixXQUFXLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQ7SUE4REMsK0JBQXlDLFVBQWUsRUFDN0MsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsaUJBQW9DO1FBSE4sZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUM3QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQWxDL0MsWUFBTyxHQUFrQixFQUFFLENBQUM7UUFTNUIsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUdwQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUkzQywwQkFBcUIsR0FBWSxJQUFJLENBQUM7UUFROUIsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUViLCtCQUEwQixHQUFHLHFCQUFxQixDQUFDO1FBTW5FLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBM0NELHdDQUFROzs7SUFEUjtRQUVDLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FB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LENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNyRSxDQUFDOztnQkE1TUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxZQUFZO29CQUN0QixreUJBQW9DO29CQU9wQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLElBQUksRUFBRTt3QkFDTCxvQkFBb0IsRUFBRSxNQUFNO3FCQUM1Qjs7aUJBQ0Q7Ozs7Z0RBZ0RhLE1BQU0sU0FBQyxXQUFXO2dCQTdFL0IsVUFBVTtnQkFNVixTQUFTO2dCQVJULGlCQUFpQjs7O2dDQWtDaEIsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7K0JBR3pDLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzJCQUd4QyxZQUFZLFNBQUMsZUFBZTswQkFPNUIsS0FBSzs4QkFHTCxLQUFLOzJCQUdMLEtBQUs7d0JBR0wsS0FBSzsyQkFHTCxLQUFLO2dDQUdMLE1BQU07O0lBZ0tSLDRCQUFDO0NBQUEsQUE3TUQsSUE2TUM7U0E5TFkscUJBQXFCOzs7SUFFakMsOENBQzBCOztJQUUxQiw2Q0FDeUI7O0lBU3pCLHdDQUM0Qjs7SUFFNUIsNENBQ29COztJQUVwQix5Q0FDaUI7O0lBRWpCLHNDQUNvQjs7SUFFcEIseUNBQzBCOztJQUUxQiw4Q0FDMkM7O0lBRTNDLCtDQUF1Qjs7SUFFdkIsc0RBQXNDOztJQUV0QywyQ0FBbUI7Ozs7O0lBRW5CLGdEQUFpQzs7Ozs7SUFFakMsOENBQStCOzs7OztJQUUvQixxQ0FBOEI7Ozs7O0lBRTlCLDJEQUFvRTs7Ozs7SUFFeEQsMkNBQTRDOzs7OztJQUNyRCwyQ0FBOEI7Ozs7O0lBQzlCLHlDQUEyQjs7Ozs7SUFDM0Isa0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0SG9zdExpc3RlbmVyLFxuXHRJbnB1dCxcblx0T25DaGFuZ2VzLFxuXHRPdXRwdXQsXG5cdFJlbmRlcmVyMixcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvbixcbiAgICBJbmplY3QsXG4gICAgUExBVEZPUk1fSURcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zZWxlY3QnLFxuXHR0ZW1wbGF0ZVVybDogYHNlbGVjdC5jb21wb25lbnQuaHRtbGAsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3NlbGVjdC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3NlbGVjdC5tYXRlcmlhbC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3NlbGVjdC5kYXJrLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvc2VsZWN0LmxpZ2h0Lm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXNlbGVjdF0nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBWaWV3Q2hpbGQoJ29wdGlvbmxpc3QnLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0b3B0aW9uTGlzdFJlZjogRWxlbWVudFJlZjtcblxuXHRAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0Y29udGFpbmVyUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuXHRvblJlc2l6ZSgpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy53aW5kb3dTaXplID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdH1cblx0fVxuXG5cdEBJbnB1dCgpXG5cdG9wdGlvbnM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuXHRASW5wdXQoKVxuXHRwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHNlbGVjdGVkOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlciA9IDEwMDtcblxuXHRASW5wdXQoKVxuXHRkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBPdXRwdXQoKVxuXHRvcHRpb25DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cblx0c2VsZWN0ZWRPcHRpb246IHN0cmluZztcblxuXHRpbml0QW5pbWF0aW9uRGlzYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHdpbmRvd1NpemU6IG51bWJlcjtcblxuXHRwcml2YXRlIGNhbk9wZW5Eb3dud2FyZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIGNhbk9wZW5VcHdhcmQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSBvcGVuOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBTRUxFQ1RFRF9PUFRJT05fQ0xBU1NfTkFNRSA9ICdndWktc2VsZWN0ZWQtb3B0aW9uJztcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0dGhpcy5vblJlc2l6ZSgpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKGNoYW5nZXMucGxhY2Vob2xkZXIpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB0aGlzLnBsYWNlaG9sZGVyO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5wbGFjZWhvbGRlciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkT3B0aW9uID0gJy4uLic7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuc2VsZWN0ZWQpIHtcblx0XHRcdHRoaXMudHJ5VG9TZWxlY3QodGhpcy5zZWxlY3RlZCk7XG5cdFx0fVxuXHR9XG5cblx0Y2FsY3VsYXRlRGlyZWN0aW9uKCk6IHZvaWQge1xuXHRcdGNvbnN0IGNvbnRhaW5lckVsID0gdGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudCxcblx0XHRcdGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lckVsLm9mZnNldEhlaWdodCxcblx0XHRcdHJlY3RCb3R0b20gPSBjb250YWluZXJFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20sXG5cdFx0XHRvcHRpb25zSGVpZ2h0ID0gY29udGFpbmVySGVpZ2h0ICogdGhpcy5vcHRpb25zLmxlbmd0aCxcblx0XHRcdGF2YWlsYWJsZUJvdHRvbVNwYWNlID0gdGhpcy53aW5kb3dTaXplIC0gcmVjdEJvdHRvbSAtIG9wdGlvbnNIZWlnaHQsXG5cdFx0XHRhdmFpbGFibGVUb3BTcGFjZSA9IHJlY3RCb3R0b20gLSBvcHRpb25zSGVpZ2h0IC0gY29udGFpbmVySGVpZ2h0O1xuXG5cdFx0dGhpcy5jYW5PcGVuVXB3YXJkID0gYXZhaWxhYmxlVG9wU3BhY2UgPiAwO1xuXHRcdHRoaXMuY2FuT3BlbkRvd253YXJkID0gYXZhaWxhYmxlQm90dG9tU3BhY2UgPiAwO1xuXHR9XG5cblx0dHJ5VG9PcGVuKGV2ZW50OiBhbnkpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLmlzQ29udGFpbmVyRGlzYWJsZWQoZXZlbnQpKSB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy50b2dnbGVPcHRpb25zKCF0aGlzLm9wZW4pO1xuXHRcdFx0dGhpcy5pbml0QW5pbWF0aW9uRGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdH1cblx0fVxuXG5cdGNsaWNrT3V0c2lkZShldmVudDogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNDb250YWluZXJDbGlja2VkKGV2ZW50KSkge1xuXHRcdFx0dGhpcy50b2dnbGVPcHRpb25zKGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHR0b2dnbGVPcHRpb25zKG9wZW5lZDogYm9vbGVhbikge1xuXHRcdHRoaXMub3BlbiA9IG9wZW5lZDtcblxuXHRcdGlmICh0aGlzLm9wZW4pIHtcblx0XHRcdHRoaXMub3Blbk9wdGlvbnMoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jbG9zZU9wdGlvbnMoKTtcblx0XHR9XG5cdH1cblxuXHRpc09wdGlvblNlbGVjdGVkKG9wdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG9wdGlvbiA9PT0gdGhpcy5zZWxlY3RlZE9wdGlvbjtcblx0fVxuXG5cdG9uU2VsZWN0KG9wdGlvbjogc3RyaW5nLCBvcHRpb25JbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5lbWl0U2VsZWN0ZWRPcHRpb24ob3B0aW9uKTtcblx0XHR0aGlzLnNlbGVjdGVkT3B0aW9uID0gb3B0aW9uO1xuXHRcdHRoaXMucmVtb3ZlU2VsZWN0ZWRPcHRpb24oKTtcblx0XHR0aGlzLnNldFNlbGVjdGVkT3B0aW9uKG9wdGlvbkluZGV4KTtcblx0fVxuXG5cdHRyeVRvU2VsZWN0KG9wdGlvbjogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5pbmRleE9mKG9wdGlvbikgIT09IC0xKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkT3B0aW9uID0gb3B0aW9uO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZW1pdFNlbGVjdGVkT3B0aW9uKG9wdGlvbjogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSkge1xuXHRcdFx0dGhpcy5vcHRpb25DaGFuZ2VkLmVtaXQob3B0aW9uKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9wZW5PcHRpb25zKCk6IHZvaWQge1xuXHRcdHRoaXMuY2FsY3VsYXRlRGlyZWN0aW9uKCk7XG5cblx0XHRpZiAodGhpcy5jYW5PcGVuRG93bndhcmQgfHwgIXRoaXMuY2FuT3BlblVwd2FyZCkge1xuXHRcdFx0dGhpcy5vcGVuRG93bndhcmQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vcGVuVXB3YXJkKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvcGVuRG93bndhcmQoKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRDbGFzcygnZ3VpLW9wdGlvbnMtb3BlbmVkJyk7XG5cdFx0dGhpcy5hZGRDbGFzcygnZ3VpLWRvd253YXJkJyk7XG5cdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLXVwd2FyZCcpO1xuXHR9XG5cblx0cHJpdmF0ZSBvcGVuVXB3YXJkKCk6IHZvaWQge1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1vcHRpb25zLW9wZW5lZCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS11cHdhcmQnKTtcblx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktZG93bndhcmQnKTtcblx0fVxuXG5cdHByaXZhdGUgY2xvc2VPcHRpb25zKCk6IHZvaWQge1xuXHRcdGNvbnN0IG9wdGlvbnNFbEhhc09wZW5DbGFzcyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZ3VpLW9wdGlvbnMtb3BlbmVkJyk7XG5cblx0XHRpZiAob3B0aW9uc0VsSGFzT3BlbkNsYXNzKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktb3B0aW9ucy1vcGVuZWQnKTtcblx0XHR9XG5cblx0XHRpZiAoIW9wdGlvbnNFbEhhc09wZW5DbGFzcykge1xuXHRcdFx0dGhpcy5pbml0QW5pbWF0aW9uRGlzYWJsZWQgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNDb250YWluZXJDbGlja2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG5cdH1cblxuXHRwcml2YXRlIGlzQ29udGFpbmVyRGlzYWJsZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdndWktZGlzYWJsZWQnKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0U2VsZWN0ZWRPcHRpb24ob3B0aW9uSW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdGNvbnN0IG9wdGlvbkVsID0gdGhpcy5vcHRpb25MaXN0UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtb3B0aW9uLWluZGV4PVwiJyArIG9wdGlvbkluZGV4LCAnXCJdJyk7XG5cdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyhvcHRpb25FbCwgdGhpcy5TRUxFQ1RFRF9PUFRJT05fQ0xBU1NfTkFNRSk7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZVNlbGVjdGVkT3B0aW9uKCk6IHZvaWQge1xuXHRcdGNvbnN0IHNlbGVjdGVkT3B0aW9uRWwgPSB0aGlzLm9wdGlvbkxpc3RSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuU0VMRUNURURfT1BUSU9OX0NMQVNTX05BTUUpO1xuXHRcdGlmIChzZWxlY3RlZE9wdGlvbkVsKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHNlbGVjdGVkT3B0aW9uRWwsIHRoaXMuU0VMRUNURURfT1BUSU9OX0NMQVNTX05BTUUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYWRkQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdH1cbn1cbiJdfQ==