/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Output, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SelectOptionsGeometryService } from './options/select-options-geometry.service';
import { FabricSelectedOptionsRepository } from './selected-option.repository';
import { SelectOptionModalService } from './select-option-modal.service';
import { FabricReactive } from '../../common/fabric-reactive';
var FabricSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabricSelectComponent, _super);
    function FabricSelectComponent(selectService, selectOptionsGeometryService, selectOptionModalService, changeDetectorRef, platformId, elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.selectService = selectService;
        _this.selectOptionsGeometryService = selectOptionsGeometryService;
        _this.selectOptionModalService = selectOptionModalService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.platformId = platformId;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.options = [];
        _this.placeholder = '...';
        _this.width = 100;
        _this.disabled = false;
        _this.optionChanged = new EventEmitter();
        _this.doNotEmitValues = false;
        _this.opened = false;
        return _this;
    }
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
            this.containerText = this.placeholder;
        }
        if (changes.selected) {
            if (this.selected) {
                this.tryToSelect(this.selected);
            }
        }
    };
    /**
     * @return {?}
     */
    FabricSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectService
            .onSelectedOption()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} selectedOption
         * @return {?}
         */
        function (selectedOption) {
            _this.emitSelectedOption(selectedOption);
            _this.selectedOption = selectedOption;
            _this.containerText = selectedOption.value;
            _this.doNotEmitValues = false;
            _this.changeDetectorRef.detectChanges();
        }));
        this.selectOptionsGeometryService
            .onSelectOptionsCords()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} cords
         * @return {?}
         */
        function (cords) {
            if (cords.getCanOpenUpward()) {
                _this.openUpward();
            }
            else {
                _this.openDownward();
            }
        }));
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
            this.open(this.options, this.width);
            this.toggleOptions(!this.opened);
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
        this.opened = opened;
        this.maintainOptionsListPosition();
        if (!this.opened) {
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
        return this.selectedOption && option.name === this.selectedOption.name;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    FabricSelectComponent.prototype.getOptionValue = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (option) {
            return option.value ? option.value : option.name;
        }
    };
    /**
     * @private
     * @param {?} options
     * @param {?} width
     * @return {?}
     */
    FabricSelectComponent.prototype.open = /**
     * @private
     * @param {?} options
     * @param {?} width
     * @return {?}
     */
    function (options, width) {
        this.closeSelect();
        this.selectOptionModalService.open(options, width);
        this.selectOptionsGeometryService.nextCords(this.containerRef);
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    FabricSelectComponent.prototype.tryToSelect = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        /** @type {?} */
        var canSelect = this.selectedOption ? option.name !== this.selectedOption.name : true;
        if (canSelect) {
            this.doNotEmitValues = true;
            this.selectService.next(option);
            this.selectedOption = option;
            this.containerText = this.getOptionValue(option);
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricSelectComponent.prototype.maintainOptionsListPosition = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            if (this.opened) {
                this.scrollListenerFn = this.renderer.listen('window', 'scroll', (/**
                 * @return {?}
                 */
                function () {
                    _this.selectOptionsGeometryService.nextCords(_this.containerRef);
                }));
            }
            else {
                if (this.scrollListenerFn) {
                    this.scrollListenerFn();
                }
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricSelectComponent.prototype.closeSelect = /**
     * @private
     * @return {?}
     */
    function () {
        this.selectOptionModalService.closeOptions();
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
        if (!this.doNotEmitValues) {
            if (!this.isOptionSelected(option)) {
                this.optionChanged.emit(option);
            }
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
            this.closeSelect();
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
                    template: "<div #container\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t [class.gui-disabled]=\"disabled\"\n\t [style.width.px]=\"width\"\n\t class=\"gui-select-container\">\n\n\t<div class=\"gui-select-value\">\n\t\t{{containerText}}\n\t</div>\n\n\t<span class=\"gui-select-arrow\"></span>\n\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-select]': 'true'
                    },
                    providers: [
                        FabricSelectedOptionsRepository,
                        SelectOptionsGeometryService,
                        SelectOptionModalService
                    ],
                    styles: [".gui-select .gui-select-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-radius:4px;box-sizing:content-box;color:#333;cursor:pointer;display:inline-block;font:14px Arial;padding:8px 24px 8px 12px;position:relative;border:1px solid #d6d6d6}.gui-select .gui-select-container:hover{border-color:#999}.gui-select .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:#595959 transparent transparent;height:0;margin:8px;position:absolute;right:5px;top:5px;width:0}.gui-select.gui-options-opened .gui-select-container{border-color:#6fb4e8 #6fb4e8 transparent;border-radius:4px 4px 0 0;border-width:1px}.gui-select.gui-downward .gui-options-list{border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-top:none;border-width:1px}.gui-select.gui-downward .gui-option{border-color:#e6e6e6;border-style:solid;border-width:1px 0 0}.gui-select.gui-upward .gui-select-container{padding:8px 12px 8px 24px;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-value{-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:transparent transparent #595959;bottom:5px;left:5px;top:auto}.gui-select.gui-upward .gui-options-list{border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-top:none;border-width:1px}.gui-select.gui-upward .gui-option{border-color:#e6e6e6;border-style:solid;border-width:0 0 1px;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select .gui-disabled{color:#ccc;pointer-events:none}.gui-select .gui-disabled .gui-select-arrow{border-color:#ccc transparent transparent}.gui-select .initAnimationDisabled.gui-options-list{display:none}.gui-options-list{background:#fff;border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-width:0 1px 1px;overflow:hidden;padding:0;position:absolute;z-index:1000}.gui-options-list .gui-option{box-sizing:content-box;cursor:pointer;font-size:14px;list-style-type:none;padding:8px 24px 8px 12px}.gui-options-list .gui-option:hover{background:#dcdcdc}.gui-options-list .gui-option-selected{background:#e6e6e6;font-weight:700}.gui-options-list.gui-upward{-webkit-animation:.2s forwards loadUpward;animation:.2s forwards loadUpward;border-radius:4px 4px 0 0;border:1px solid #6fb4e8}@-webkit-keyframes loadUpward{0%{transform:translateY(50%) scaleY(0)}100%{transform:translateY(0) scaleY(1)}}@keyframes loadUpward{0%{transform:translateY(50%) scaleY(0)}100%{transform:translateY(0) scaleY(1)}}.gui-options-list.gui-downward{-webkit-animation:.2s forwards loadDownward;animation:.2s forwards loadDownward;border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-width:0 1px 1px}@-webkit-keyframes loadDownward{0%{transform:translateY(-50%) scaleY(0)}100%{transform:translateY(0) scaleY(1)}}@keyframes loadDownward{0%{transform:translateY(-50%) scaleY(0)}100%{transform:translateY(0) scaleY(1)}}", ".gui-material .gui-options-list .gui-option,.gui-material .gui-select .gui-select-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-select .gui-select-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-select .gui-select-container:hover{border-color:#ce93d8}.gui-dark .gui-select .gui-select-container .gui-select-arrow{border-color:#ce93d8 transparent transparent}.gui-dark .gui-select.gui-options-opened .gui-select-container{border-color:#ce93d8}.gui-dark .gui-select.gui-upward .gui-select-container .gui-select-arrow{border-color:transparent transparent #ce93d8}.gui-dark .gui-select .gui-disabled{opacity:.36}.gui-dark .gui-options-list{border-color:#ce93d8}.gui-dark .gui-options-list .gui-option{background:#424242;border-color:#757575;color:#bdbdbd}.gui-dark .gui-options-list .gui-option:hover{background:#616161}.gui-dark .gui-options-list .gui-option-selected{background:#757575}", ".gui-light .gui-select .gui-select-container{background:#fff;color:#333;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-light .gui-options-list .gui-option:hover{background:#f6f6f5}"]
                }] }
    ];
    /** @nocollapse */
    FabricSelectComponent.ctorParameters = function () { return [
        { type: FabricSelectedOptionsRepository },
        { type: SelectOptionsGeometryService },
        { type: SelectOptionModalService },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricSelectComponent.propDecorators = {
        containerRef: [{ type: ViewChild, args: ['container', { static: false },] }],
        options: [{ type: Input }],
        placeholder: [{ type: Input }],
        selected: [{ type: Input }],
        width: [{ type: Input }],
        disabled: [{ type: Input }],
        optionChanged: [{ type: Output }]
    };
    return FabricSelectComponent;
}(FabricReactive));
export { FabricSelectComponent };
if (false) {
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
    FabricSelectComponent.prototype.containerText;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.scrollListenerFn;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.doNotEmitValues;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.opened;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.selectService;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.selectOptionsGeometryService;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.selectOptionModalService;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.changeDetectorRef;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDekYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTlEO0lBb0IyQyxpREFBYztJQWlDeEQsK0JBQTZCLGFBQThDLEVBQ3ZELDRCQUEwRCxFQUMxRCx3QkFBa0QsRUFDbEQsaUJBQW9DLEVBQ2YsVUFBZSxFQUNwQyxVQUFzQixFQUN0QixRQUFtQjtRQU52QyxZQU9DLGlCQUFPLFNBQ1A7UUFSNEIsbUJBQWEsR0FBYixhQUFhLENBQWlDO1FBQ3ZELGtDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDMUQsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCx1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ2YsZ0JBQVUsR0FBVixVQUFVLENBQUs7UUFDcEMsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQWpDdkMsYUFBTyxHQUEyQixFQUFFLENB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O3FCQUN4Qjs7aUJBQ0Q7Ozs7Z0JBeEJRLCtCQUErQjtnQkFEL0IsNEJBQTRCO2dCQUc1Qix3QkFBd0I7Z0JBcEJoQyxpQkFBaUI7Z0RBZ0ZiLE1BQU0sU0FBQyxXQUFXO2dCQTlFdEIsVUFBVTtnQkFRVixTQUFTOzs7K0JBbUNSLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzBCQUd4QyxLQUFLOzhCQUdMLEtBQUs7MkJBR0wsS0FBSzt3QkFHTCxLQUFLOzJCQUdMLEtBQUs7Z0NBR0wsTUFBTTs7SUFnTFIsNEJBQUM7Q0FBQSxBQXhORCxDQW9CMkMsY0FBYyxHQW9NeEQ7U0FwTVkscUJBQXFCOzs7SUFFakMsNkNBQ3lCOztJQUV6Qix3Q0FDcUM7O0lBRXJDLDRDQUM0Qjs7SUFFNUIseUNBQzBCOztJQUUxQixzQ0FDb0I7O0lBRXBCLHlDQUMwQjs7SUFFMUIsOENBQ29EOztJQUVwRCwrQ0FBZ0M7O0lBRWhDLDhDQUFzQjs7Ozs7SUFFdEIsaURBQXFDOzs7OztJQUVyQyxnREFBeUM7Ozs7O0lBRXpDLHVDQUFnQzs7Ozs7SUFFcEIsOENBQStEOzs7OztJQUN4RSw2REFBMkU7Ozs7O0lBQzNFLHlEQUFtRTs7Ozs7SUFDbkUsa0RBQXFEOzs7OztJQUNyRCwyQ0FBcUQ7Ozs7O0lBQ3JELDJDQUF1Qzs7Ozs7SUFDdkMseUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T25DaGFuZ2VzLFxuXHRPbkluaXQsXG5cdE91dHB1dCxcblx0UExBVEZPUk1fSUQsXG5cdFJlbmRlcmVyMixcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEd1aVNlbGVjdE9wdGlvbiB9IGZyb20gJy4vc2VsZWN0LW9wdGlvbic7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlIH0gZnJvbSAnLi9vcHRpb25zL3NlbGVjdC1vcHRpb25zLWdlb21ldHJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljU2VsZWN0ZWRPcHRpb25zUmVwb3NpdG9yeSB9IGZyb20gJy4vc2VsZWN0ZWQtb3B0aW9uLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VsZWN0T3B0aW9uc0NvcmRzIH0gZnJvbSAnLi9vcHRpb25zL3NlbGVjdC1vcHRpb25zLmNvcmRzJztcbmltcG9ydCB7IFNlbGVjdE9wdGlvbk1vZGFsU2VydmljZSB9IGZyb20gJy4vc2VsZWN0LW9wdGlvbi1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY1JlYWN0aXZlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zZWxlY3QnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc2VsZWN0Lm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvc2VsZWN0Lm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvc2VsZWN0LmRhcmsubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9zZWxlY3QubGlnaHQubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktc2VsZWN0XSc6ICd0cnVlJ1xuXHR9LFxuXHRwcm92aWRlcnM6IFtcblx0XHRGYWJyaWNTZWxlY3RlZE9wdGlvbnNSZXBvc2l0b3J5LFxuXHRcdFNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2UsXG5cdFx0U2VsZWN0T3B0aW9uTW9kYWxTZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgRmFicmljUmVhY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cblx0QFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGNvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHRvcHRpb25zOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+ID0gW107XG5cblx0QElucHV0KClcblx0cGxhY2Vob2xkZXI6IHN0cmluZyA9ICcuLi4nO1xuXG5cdEBJbnB1dCgpXG5cdHNlbGVjdGVkOiBHdWlTZWxlY3RPcHRpb247XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlciA9IDEwMDtcblxuXHRASW5wdXQoKVxuXHRkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBPdXRwdXQoKVxuXHRvcHRpb25DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxHdWlTZWxlY3RPcHRpb24+KCk7XG5cblx0c2VsZWN0ZWRPcHRpb246IEd1aVNlbGVjdE9wdGlvbjtcblxuXHRjb250YWluZXJUZXh0OiBzdHJpbmc7XG5cblx0cHJpdmF0ZSBzY3JvbGxMaXN0ZW5lckZuOiAoKSA9PiB2b2lkO1xuXG5cdHByaXZhdGUgZG9Ob3RFbWl0VmFsdWVzOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBvcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNlbGVjdFNlcnZpY2U6IEZhYnJpY1NlbGVjdGVkT3B0aW9uc1JlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZTogU2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWxlY3RPcHRpb25Nb2RhbFNlcnZpY2U6IFNlbGVjdE9wdGlvbk1vZGFsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKGNoYW5nZXMucGxhY2Vob2xkZXIpIHtcblx0XHRcdHRoaXMuY29udGFpbmVyVGV4dCA9IHRoaXMucGxhY2Vob2xkZXI7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuc2VsZWN0ZWQpIHtcblx0XHRcdGlmICh0aGlzLnNlbGVjdGVkKSB7XG5cdFx0XHRcdHRoaXMudHJ5VG9TZWxlY3QodGhpcy5zZWxlY3RlZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RTZXJ2aWNlXG5cdFx0XHQub25TZWxlY3RlZE9wdGlvbigpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoc2VsZWN0ZWRPcHRpb246IEd1aVNlbGVjdE9wdGlvbikgPT4ge1xuXHRcdFx0XHR0aGlzLmVtaXRTZWxlY3RlZE9wdGlvbihzZWxlY3RlZE9wdGlvbik7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3RlZE9wdGlvbjtcblx0XHRcdFx0dGhpcy5jb250YWluZXJUZXh0ID0gc2VsZWN0ZWRPcHRpb24udmFsdWU7XG5cdFx0XHRcdHRoaXMuZG9Ob3RFbWl0VmFsdWVzID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2Vcblx0XHRcdC5vblNlbGVjdE9wdGlvbnNDb3JkcygpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29yZHM6IFNlbGVjdE9wdGlvbnNDb3JkcykgPT4ge1xuXG5cdFx0XHRcdGlmIChjb3Jkcy5nZXRDYW5PcGVuVXB3YXJkKCkpIHtcblx0XHRcdFx0XHR0aGlzLm9wZW5VcHdhcmQoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLm9wZW5Eb3dud2FyZCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRyeVRvT3BlbihldmVudDogYW55KTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5pc0NvbnRhaW5lckRpc2FibGVkKGV2ZW50KSkge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3Blbih0aGlzLm9wdGlvbnMsIHRoaXMud2lkdGgpO1xuXHRcdFx0dGhpcy50b2dnbGVPcHRpb25zKCF0aGlzLm9wZW5lZCk7XG5cdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHR9XG5cdH1cblxuXHRjbGlja091dHNpZGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQ29udGFpbmVyQ2xpY2tlZChldmVudCkpIHtcblx0XHRcdHRoaXMudG9nZ2xlT3B0aW9ucyhmYWxzZSk7XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlT3B0aW9ucyhvcGVuZWQ6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm9wZW5lZCA9IG9wZW5lZDtcblx0XHR0aGlzLm1haW50YWluT3B0aW9uc0xpc3RQb3NpdGlvbigpO1xuXHRcdGlmICghdGhpcy5vcGVuZWQpIHtcblx0XHRcdHRoaXMuY2xvc2VPcHRpb25zKCk7XG5cdFx0fVxuXHR9XG5cblx0aXNPcHRpb25TZWxlY3RlZChvcHRpb246IEd1aVNlbGVjdE9wdGlvbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkT3B0aW9uICYmIG9wdGlvbi5uYW1lID09PSB0aGlzLnNlbGVjdGVkT3B0aW9uLm5hbWU7XG5cdH1cblxuXHRnZXRPcHRpb25WYWx1ZShvcHRpb246IEd1aVNlbGVjdE9wdGlvbik6IHN0cmluZyB7XG5cdFx0aWYgKG9wdGlvbikge1xuXHRcdFx0cmV0dXJuIG9wdGlvbi52YWx1ZSA/IG9wdGlvbi52YWx1ZSA6IG9wdGlvbi5uYW1lO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgb3BlbihvcHRpb25zOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+LCB3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jbG9zZVNlbGVjdCgpO1xuXHRcdHRoaXMuc2VsZWN0T3B0aW9uTW9kYWxTZXJ2aWNlLm9wZW4ob3B0aW9ucywgd2lkdGgpO1xuXHRcdHRoaXMuc2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZS5uZXh0Q29yZHModGhpcy5jb250YWluZXJSZWYpO1xuXHR9XG5cblx0cHJpdmF0ZSB0cnlUb1NlbGVjdChvcHRpb246IEd1aVNlbGVjdE9wdGlvbik6IHZvaWQge1xuXHRcdGNvbnN0IGNhblNlbGVjdCA9IHRoaXMuc2VsZWN0ZWRPcHRpb24gPyBvcHRpb24ubmFtZSAhPT0gdGhpcy5zZWxlY3RlZE9wdGlvbi5uYW1lIDogdHJ1ZTtcblxuXHRcdGlmIChjYW5TZWxlY3QpIHtcblx0XHRcdHRoaXMuZG9Ob3RFbWl0VmFsdWVzID0gdHJ1ZTtcblx0XHRcdHRoaXMuc2VsZWN0U2VydmljZS5uZXh0KG9wdGlvbik7XG5cdFx0XHR0aGlzLnNlbGVjdGVkT3B0aW9uID0gb3B0aW9uO1xuXHRcdFx0dGhpcy5jb250YWluZXJUZXh0ID0gdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgbWFpbnRhaW5PcHRpb25zTGlzdFBvc2l0aW9uKCk6IHZvaWQge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRpZiAodGhpcy5vcGVuZWQpIHtcblx0XHRcdFx0dGhpcy5zY3JvbGxMaXN0ZW5lckZuID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdzY3JvbGwnLCAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlLm5leHRDb3Jkcyh0aGlzLmNvbnRhaW5lclJlZik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHRoaXMuc2Nyb2xsTGlzdGVuZXJGbikge1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsTGlzdGVuZXJGbigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjbG9zZVNlbGVjdCgpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdE9wdGlvbk1vZGFsU2VydmljZS5jbG9zZU9wdGlvbnMoKTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdFNlbGVjdGVkT3B0aW9uKG9wdGlvbjogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmRvTm90RW1pdFZhbHVlcykge1xuXHRcdFx0aWYgKCF0aGlzLmlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSkge1xuXHRcdFx0XHR0aGlzLm9wdGlvbkNoYW5nZWQuZW1pdChvcHRpb24pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgb3BlbkRvd253YXJkKCk6IHZvaWQge1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1vcHRpb25zLW9wZW5lZCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1kb3dud2FyZCcpO1xuXHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS11cHdhcmQnKTtcblx0fVxuXG5cdHByaXZhdGUgb3BlblVwd2FyZCgpOiB2b2lkIHtcblx0XHR0aGlzLmFkZENsYXNzKCdndWktb3B0aW9ucy1vcGVuZWQnKTtcblx0XHR0aGlzLmFkZENsYXNzKCdndWktdXB3YXJkJyk7XG5cdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLWRvd253YXJkJyk7XG5cdH1cblxuXHRwcml2YXRlIGNsb3NlT3B0aW9ucygpOiB2b2lkIHtcblx0XHRjb25zdCBvcHRpb25zRWxIYXNPcGVuQ2xhc3MgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2d1aS1vcHRpb25zLW9wZW5lZCcpO1xuXG5cdFx0aWYgKG9wdGlvbnNFbEhhc09wZW5DbGFzcykge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLW9wdGlvbnMtb3BlbmVkJyk7XG5cdFx0XHR0aGlzLmNsb3NlU2VsZWN0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcblx0fVxuXG5cdHByaXZhdGUgaXNDb250YWluZXJEaXNhYmxlZChldmVudDogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2d1aS1kaXNhYmxlZCcpO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGRDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcblx0fVxufVxuIl19