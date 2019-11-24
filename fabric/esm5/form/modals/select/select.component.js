/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
var FabricSelectComponent = /** @class */ (function () {
    function FabricSelectComponent(elementRef, renderer, changeDetectorRef) {
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
        this.windowSize = window.innerHeight;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vbW9kYWxzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQTREQywrQkFBb0IsVUFBc0IsRUFDL0IsUUFBbUIsRUFDbkIsaUJBQW9DO1FBRjNCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBakMvQyxZQUFPLEdBQWtCLEVBQUUsQ0FBQztRQVM1QixVQUFLLEdBQVcsR0FBRyxDQUFDO1FBR3BCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBSTNDLDBCQUFxQixHQUFZLElBQUksQ0FBQztRQVE5QixTQUFJLEdBQVksS0FBSyxDQUFDO1FBRWIsK0JBQTBCLEdBQUcscUJBQXFCLENBQUM7UUFLbkUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUF4Q0Qsd0NBQVE7OztJQURSO1FBRUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBd0NELDJDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUVqQyxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3ZDO2FBQU0sSUFBSSxJQUFJLENB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QUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLElBQUksRUFBRTt3QkFDTCxvQkFBb0IsRUFBRSxNQUFNO3FCQUM1Qjs7aUJBQ0Q7Ozs7Z0JBMUJBLFVBQVU7Z0JBTVYsU0FBUztnQkFSVCxpQkFBaUI7OztnQ0ErQmhCLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOytCQUd6QyxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTsyQkFHeEMsWUFBWSxTQUFDLGVBQWU7MEJBSzVCLEtBQUs7OEJBR0wsS0FBSzsyQkFHTCxLQUFLO3dCQUdMLEtBQUs7MkJBR0wsS0FBSztnQ0FHTCxNQUFNOztJQStKUiw0QkFBQztDQUFBLEFBMU1ELElBME1DO1NBM0xZLHFCQUFxQjs7O0lBRWpDLDhDQUMwQjs7SUFFMUIsNkNBQ3lCOztJQU96Qix3Q0FDNEI7O0lBRTVCLDRDQUNvQjs7SUFFcEIseUNBQ2lCOztJQUVqQixzQ0FDb0I7O0lBRXBCLHlDQUMwQjs7SUFFMUIsOENBQzJDOztJQUUzQywrQ0FBdUI7O0lBRXZCLHNEQUFzQzs7SUFFdEMsMkNBQW1COzs7OztJQUVuQixnREFBaUM7Ozs7O0lBRWpDLDhDQUErQjs7Ozs7SUFFL0IscUNBQThCOzs7OztJQUU5QiwyREFBb0U7Ozs7O0lBRXhELDJDQUE4Qjs7Ozs7SUFDdkMseUNBQTJCOzs7OztJQUMzQixrREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0RXZlbnRFbWl0dGVyLFxuXHRIb3N0TGlzdGVuZXIsXG5cdElucHV0LFxuXHRPbkNoYW5nZXMsXG5cdE91dHB1dCxcblx0UmVuZGVyZXIyLFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc2VsZWN0Jyxcblx0dGVtcGxhdGVVcmw6IGBzZWxlY3QuY29tcG9uZW50Lmh0bWxgLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9zZWxlY3Qubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9zZWxlY3QubWF0ZXJpYWwubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9zZWxlY3QuZGFyay5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3NlbGVjdC5saWdodC5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1zZWxlY3RdJzogJ3RydWUnXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRAVmlld0NoaWxkKCdvcHRpb25saXN0JywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdG9wdGlvbkxpc3RSZWY6IEVsZW1lbnRSZWY7XG5cblx0QFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGNvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXHRASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcblx0b25SZXNpemUoKSB7XG5cdFx0dGhpcy53aW5kb3dTaXplID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHR9XG5cblx0QElucHV0KClcblx0b3B0aW9uczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0c2VsZWN0ZWQ6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHR3aWR0aDogbnVtYmVyID0gMTAwO1xuXG5cdEBJbnB1dCgpXG5cdGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0QE91dHB1dCgpXG5cdG9wdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXHRzZWxlY3RlZE9wdGlvbjogc3RyaW5nO1xuXG5cdGluaXRBbmltYXRpb25EaXNhYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0d2luZG93U2l6ZTogbnVtYmVyO1xuXG5cdHByaXZhdGUgY2FuT3BlbkRvd253YXJkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgY2FuT3BlblVwd2FyZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIG9wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IFNFTEVDVEVEX09QVElPTl9DTEFTU19OQU1FID0gJ2d1aS1zZWxlY3RlZC1vcHRpb24nO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXHRcdHRoaXMub25SZXNpemUoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChjaGFuZ2VzLnBsYWNlaG9sZGVyKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5wbGFjZWhvbGRlcjtcblx0XHR9IGVsc2UgaWYgKHRoaXMucGxhY2Vob2xkZXIgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zZWxlY3RlZE9wdGlvbiA9ICcuLi4nO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnNlbGVjdGVkKSB7XG5cdFx0XHR0aGlzLnRyeVRvU2VsZWN0KHRoaXMuc2VsZWN0ZWQpO1xuXHRcdH1cblx0fVxuXG5cdGNhbGN1bGF0ZURpcmVjdGlvbigpOiB2b2lkIHtcblx0XHRjb25zdCBjb250YWluZXJFbCA9IHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQsXG5cdFx0XHRjb250YWluZXJIZWlnaHQgPSBjb250YWluZXJFbC5vZmZzZXRIZWlnaHQsXG5cdFx0XHRyZWN0Qm90dG9tID0gY29udGFpbmVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tLFxuXHRcdFx0b3B0aW9uc0hlaWdodCA9IGNvbnRhaW5lckhlaWdodCAqIHRoaXMub3B0aW9ucy5sZW5ndGgsXG5cdFx0XHRhdmFpbGFibGVCb3R0b21TcGFjZSA9IHRoaXMud2luZG93U2l6ZSAtIHJlY3RCb3R0b20gLSBvcHRpb25zSGVpZ2h0LFxuXHRcdFx0YXZhaWxhYmxlVG9wU3BhY2UgPSByZWN0Qm90dG9tIC0gb3B0aW9uc0hlaWdodCAtIGNvbnRhaW5lckhlaWdodDtcblxuXHRcdHRoaXMuY2FuT3BlblVwd2FyZCA9IGF2YWlsYWJsZVRvcFNwYWNlID4gMDtcblx0XHR0aGlzLmNhbk9wZW5Eb3dud2FyZCA9IGF2YWlsYWJsZUJvdHRvbVNwYWNlID4gMDtcblx0fVxuXG5cdHRyeVRvT3BlbihldmVudDogYW55KTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5pc0NvbnRhaW5lckRpc2FibGVkKGV2ZW50KSkge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudG9nZ2xlT3B0aW9ucyghdGhpcy5vcGVuKTtcblx0XHRcdHRoaXMuaW5pdEFuaW1hdGlvbkRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHR9XG5cdH1cblxuXHRjbGlja091dHNpZGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQ29udGFpbmVyQ2xpY2tlZChldmVudCkpIHtcblx0XHRcdHRoaXMudG9nZ2xlT3B0aW9ucyhmYWxzZSk7XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlT3B0aW9ucyhvcGVuZWQ6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm9wZW4gPSBvcGVuZWQ7XG5cblx0XHRpZiAodGhpcy5vcGVuKSB7XG5cdFx0XHR0aGlzLm9wZW5PcHRpb25zKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2xvc2VPcHRpb25zKCk7XG5cdFx0fVxuXHR9XG5cblx0aXNPcHRpb25TZWxlY3RlZChvcHRpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvcHRpb24gPT09IHRoaXMuc2VsZWN0ZWRPcHRpb247XG5cdH1cblxuXHRvblNlbGVjdChvcHRpb246IHN0cmluZywgb3B0aW9uSW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuZW1pdFNlbGVjdGVkT3B0aW9uKG9wdGlvbik7XG5cdFx0dGhpcy5zZWxlY3RlZE9wdGlvbiA9IG9wdGlvbjtcblx0XHR0aGlzLnJlbW92ZVNlbGVjdGVkT3B0aW9uKCk7XG5cdFx0dGhpcy5zZXRTZWxlY3RlZE9wdGlvbihvcHRpb25JbmRleCk7XG5cdH1cblxuXHR0cnlUb1NlbGVjdChvcHRpb246IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm9wdGlvbnMuaW5kZXhPZihvcHRpb24pICE9PSAtMSkge1xuXHRcdFx0dGhpcy5zZWxlY3RlZE9wdGlvbiA9IG9wdGlvbjtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGVtaXRTZWxlY3RlZE9wdGlvbihvcHRpb246IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5pc09wdGlvblNlbGVjdGVkKG9wdGlvbikpIHtcblx0XHRcdHRoaXMub3B0aW9uQ2hhbmdlZC5lbWl0KG9wdGlvbik7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvcGVuT3B0aW9ucygpOiB2b2lkIHtcblx0XHR0aGlzLmNhbGN1bGF0ZURpcmVjdGlvbigpO1xuXG5cdFx0aWYgKHRoaXMuY2FuT3BlbkRvd253YXJkIHx8ICF0aGlzLmNhbk9wZW5VcHdhcmQpIHtcblx0XHRcdHRoaXMub3BlbkRvd253YXJkKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3BlblVwd2FyZCgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgb3BlbkRvd253YXJkKCk6IHZvaWQge1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1vcHRpb25zLW9wZW5lZCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1kb3dud2FyZCcpO1xuXHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS11cHdhcmQnKTtcblx0fVxuXG5cdHByaXZhdGUgb3BlblVwd2FyZCgpOiB2b2lkIHtcblx0XHR0aGlzLmFkZENsYXNzKCdndWktb3B0aW9ucy1vcGVuZWQnKTtcblx0XHR0aGlzLmFkZENsYXNzKCdndWktdXB3YXJkJyk7XG5cdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLWRvd253YXJkJyk7XG5cdH1cblxuXHRwcml2YXRlIGNsb3NlT3B0aW9ucygpOiB2b2lkIHtcblx0XHRjb25zdCBvcHRpb25zRWxIYXNPcGVuQ2xhc3MgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2d1aS1vcHRpb25zLW9wZW5lZCcpO1xuXG5cdFx0aWYgKG9wdGlvbnNFbEhhc09wZW5DbGFzcykge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLW9wdGlvbnMtb3BlbmVkJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCFvcHRpb25zRWxIYXNPcGVuQ2xhc3MpIHtcblx0XHRcdHRoaXMuaW5pdEFuaW1hdGlvbkRpc2FibGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzQ29udGFpbmVyQ2xpY2tlZChldmVudDogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckRpc2FibGVkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ3VpLWRpc2FibGVkJyk7XG5cdH1cblxuXHRwcml2YXRlIHNldFNlbGVjdGVkT3B0aW9uKG9wdGlvbkluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHRjb25zdCBvcHRpb25FbCA9IHRoaXMub3B0aW9uTGlzdFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW9wdGlvbi1pbmRleD1cIicgKyBvcHRpb25JbmRleCwgJ1wiXScpO1xuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Mob3B0aW9uRWwsIHRoaXMuU0VMRUNURURfT1BUSU9OX0NMQVNTX05BTUUpO1xuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVTZWxlY3RlZE9wdGlvbigpOiB2b2lkIHtcblx0XHRjb25zdCBzZWxlY3RlZE9wdGlvbkVsID0gdGhpcy5vcHRpb25MaXN0UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLlNFTEVDVEVEX09QVElPTl9DTEFTU19OQU1FKTtcblx0XHRpZiAoc2VsZWN0ZWRPcHRpb25FbCkge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhzZWxlY3RlZE9wdGlvbkVsLCB0aGlzLlNFTEVDVEVEX09QVElPTl9DTEFTU19OQU1FKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkZENsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuXHR9XG59XG4iXX0=