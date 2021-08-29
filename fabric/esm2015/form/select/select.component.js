/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Output, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SelectOptionsGeometryService } from './options/select-options-geometry.service';
import { FabricSelectedOptionsRepository } from './selected-option.repository';
import { SelectOptionModalService } from './select-option-modal.service';
import { FabricReactive } from '../../common/fabric-reactive';
export class FabricSelectComponent extends FabricReactive {
    /**
     * @param {?} selectService
     * @param {?} selectOptionsGeometryService
     * @param {?} selectOptionModalService
     * @param {?} changeDetectorRef
     * @param {?} platformId
     * @param {?} elementRef
     * @param {?} renderer
     */
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
    /**
     * @param {?} changes
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.selectService
            .onSelectedOption()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} selectedOption
         * @return {?}
         */
        (selectedOption) => {
            this.emitSelectedOption(selectedOption);
            this.selectedOption = selectedOption;
            this.containerText = selectedOption.value;
            this.doNotEmitValues = false;
            this.changeDetectorRef.detectChanges();
        }));
        this.selectOptionsGeometryService
            .onSelectOptionsCords()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} cords
         * @return {?}
         */
        (cords) => {
            if (cords.getCanOpenUpward()) {
                this.openUpward();
            }
            else {
                this.openDownward();
            }
        }));
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
            this.open(this.options, this.width);
            this.toggleOptions(!this.opened);
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
        this.opened = opened;
        this.maintainOptionsListPosition();
        if (!this.opened) {
            this.closeOptions();
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    isOptionSelected(option) {
        return this.selectedOption && option.name === this.selectedOption.name;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    getOptionValue(option) {
        if (option) {
            return option.value ? option.value : option.name;
        }
    }
    /**
     * @private
     * @param {?} options
     * @param {?} width
     * @return {?}
     */
    open(options, width) {
        this.closeSelect();
        this.selectOptionModalService.open(options, width);
        this.selectOptionsGeometryService.nextCords(this.containerRef);
    }
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    tryToSelect(option) {
        /** @type {?} */
        const canSelect = this.selectedOption ? option.name !== this.selectedOption.name : true;
        if (canSelect) {
            this.doNotEmitValues = true;
            this.selectService.next(option);
            this.selectedOption = option;
            this.containerText = this.getOptionValue(option);
        }
    }
    /**
     * @private
     * @return {?}
     */
    maintainOptionsListPosition() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.opened) {
                this.scrollListenerFn = this.renderer.listen('window', 'scroll', (/**
                 * @return {?}
                 */
                () => {
                    this.selectOptionsGeometryService.nextCords(this.containerRef);
                }));
            }
            else {
                if (this.scrollListenerFn) {
                    this.scrollListenerFn();
                }
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    closeSelect() {
        this.selectOptionModalService.closeOptions();
    }
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    emitSelectedOption(option) {
        if (!this.doNotEmitValues) {
            if (!this.isOptionSelected(option)) {
                this.optionChanged.emit(option);
            }
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
            this.closeSelect();
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
FabricSelectComponent.ctorParameters = () => [
    { type: FabricSelectedOptionsRepository },
    { type: SelectOptionsGeometryService },
    { type: SelectOptionModalService },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef },
    { type: Renderer2 }
];
FabricSelectComponent.propDecorators = {
    containerRef: [{ type: ViewChild, args: ['container', { static: false },] }],
    options: [{ type: Input }],
    placeholder: [{ type: Input }],
    selected: [{ type: Input }],
    width: [{ type: Input }],
    disabled: [{ type: Input }],
    optionChanged: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUvRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFzQjlELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxjQUFjOzs7Ozs7Ozs7O0lBaUN4RCxZQUE2QixhQUE4QyxFQUN2RCw0QkFBMEQsRUFDMUQsd0JBQWtELEVBQ2xELGlCQUFvQyxFQUNmLFVBQWUsRUFDcEMsVUFBc0IsRUFDdEIsUUFBbUI7UUFDdEMsS0FBSyxFQUFFLENBQUM7UUFQb0Isa0JBQWEsR0FBYixhQUFhLENBQWlDO1FBQ3ZELGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDMUQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ2YsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNwQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFqQ3ZDLFlBQU8sR0FBMkIsRUFBRSxDQUFDO1FBR3JDLGdCQUFXLEdBQVcsS0FBSyxDQUFDO1FBTTVCLFVBQUssR0FBVyxHQUFHLENBQUM7UUFHcEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUcxQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBUTVDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRWpDLFdBQU0sR0FBWSxLQUFLLENBQUM7SUFVaEMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDakMsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN0QztRQUVELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Q7SUFDRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxhQUFhO2FBQ2hCLGdCQUFnQixFQUFFO2FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLENBQUMsY0FBK0IsRUFBRSxFQUFFO1lBQzlDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztZQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7WUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLDRCQUE0QjthQUMvQixvQkFBb0IsRUFBRTthQUN0QixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQXlCLEVBQUUsRUFBRTtZQUV4QyxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO2dCQUM3QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbEI7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3BCO1FBQ0YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxLQUFVO1FBRW5CLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN2QztJQUNGLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQVU7UUFDdEIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNGLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE1BQWU7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3BCO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxNQUF1QjtRQUN2QyxPQUFPLElBQUksQ0FBQyxjQUFjLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxNQUF1QjtRQUNyQyxJQUFJLE1BQU0sRUFBRTtZQUNYLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNqRDtJQUNGLENBQUM7Ozs7Ozs7SUFFTyxJQUFJLENBQUMsT0FBK0IsRUFBRSxLQUFhO1FBQzFELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsNEJBQTRCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsTUFBdUI7O2NBQ3BDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBRXZGLElBQUksU0FBUyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO0lBQ0YsQ0FBQzs7Ozs7SUFFTywyQkFBMkI7UUFDbEMsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNoQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVE7OztnQkFBRSxHQUFHLEVBQUU7b0JBQ3JFLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNoRSxDQUFDLEVBQUMsQ0FBQzthQUNIO2lCQUFNO2dCQUNOLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUMxQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDeEI7YUFDRDtTQUNEO0lBQ0YsQ0FBQzs7Ozs7SUFFTyxXQUFXO1FBQ2xCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxNQUF1QjtRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNoQztTQUNEO0lBQ0YsQ0FBQzs7Ozs7SUFFTyxZQUFZO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFTyxVQUFVO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFTyxZQUFZOztjQUNiLHFCQUFxQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUM7UUFFcEcsSUFBSSxxQkFBcUIsRUFBRTtZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25CO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsS0FBVTtRQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFTyxtQkFBbUIsQ0FBQyxLQUFVO1FBQ3JDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7OztJQUVPLFFBQVEsQ0FBQyxTQUFpQjtRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsU0FBaUI7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7O1lBdk5ELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsWUFBWTtnQkFDdEIscVZBQXNDO2dCQU90QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDTCxvQkFBb0IsRUFBRSxNQUFNO2lCQUM1QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsK0JBQStCO29CQUMvQiw0QkFBNEI7b0JBQzVCLHdCQUF3QjtpQkFDeEI7O2FBQ0Q7Ozs7WUF4QlEsK0JBQStCO1lBRC9CLDRCQUE0QjtZQUc1Qix3QkFBd0I7WUFwQmhDLGlCQUFpQjs0Q0FnRmIsTUFBTSxTQUFDLFdBQVc7WUE5RXRCLFVBQVU7WUFRVixTQUFTOzs7MkJBbUNSLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3NCQUd4QyxLQUFLOzBCQUdMLEtBQUs7dUJBR0wsS0FBSztvQkFHTCxLQUFLO3VCQUdMLEtBQUs7NEJBR0wsTUFBTTs7OztJQWxCUCw2Q0FDeUI7O0lBRXpCLHdDQUNxQzs7SUFFckMsNENBQzRCOztJQUU1Qix5Q0FDMEI7O0lBRTFCLHNDQUNvQjs7SUFFcEIseUNBQzBCOztJQUUxQiw4Q0FDb0Q7O0lBRXBELCtDQUFnQzs7SUFFaEMsOENBQXNCOzs7OztJQUV0QixpREFBcUM7Ozs7O0lBRXJDLGdEQUF5Qzs7Ozs7SUFFekMsdUNBQWdDOzs7OztJQUVwQiw4Q0FBK0Q7Ozs7O0lBQ3hFLDZEQUEyRTs7Ozs7SUFDM0UseURBQW1FOzs7OztJQUNuRSxrREFBcUQ7Ozs7O0lBQ3JELDJDQUFxRDs7Ozs7SUFDckQsMkNBQXVDOzs7OztJQUN2Qyx5Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0RXZlbnRFbWl0dGVyLFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPbkNoYW5nZXMsXG5cdE9uSW5pdCxcblx0T3V0cHV0LFxuXHRQTEFURk9STV9JRCxcblx0UmVuZGVyZXIyLFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnLi9zZWxlY3Qtb3B0aW9uJztcbmltcG9ydCB7IFNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2UgfSBmcm9tICcuL29wdGlvbnMvc2VsZWN0LW9wdGlvbnMtZ2VvbWV0cnkuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNTZWxlY3RlZE9wdGlvbnNSZXBvc2l0b3J5IH0gZnJvbSAnLi9zZWxlY3RlZC1vcHRpb24ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb25zQ29yZHMgfSBmcm9tICcuL29wdGlvbnMvc2VsZWN0LW9wdGlvbnMuY29yZHMnO1xuaW1wb3J0IHsgU2VsZWN0T3B0aW9uTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9zZWxlY3Qtb3B0aW9uLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljUmVhY3RpdmUgfSBmcm9tICcuLi8uLi9jb21tb24vZmFicmljLXJlYWN0aXZlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXNlbGVjdCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9zZWxlY3Qubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9zZWxlY3QubWF0ZXJpYWwubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9zZWxlY3QuZGFyay5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3NlbGVjdC5saWdodC5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1zZWxlY3RdJzogJ3RydWUnXG5cdH0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEZhYnJpY1NlbGVjdGVkT3B0aW9uc1JlcG9zaXRvcnksXG5cdFx0U2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZSxcblx0XHRTZWxlY3RPcHRpb25Nb2RhbFNlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuXHRAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0Y29udGFpbmVyUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBJbnB1dCgpXG5cdG9wdGlvbnM6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj4gPSBbXTtcblxuXHRASW5wdXQoKVxuXHRwbGFjZWhvbGRlcjogc3RyaW5nID0gJy4uLic7XG5cblx0QElucHV0KClcblx0c2VsZWN0ZWQ6IEd1aVNlbGVjdE9wdGlvbjtcblxuXHRASW5wdXQoKVxuXHR3aWR0aDogbnVtYmVyID0gMTAwO1xuXG5cdEBJbnB1dCgpXG5cdGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0QE91dHB1dCgpXG5cdG9wdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEd1aVNlbGVjdE9wdGlvbj4oKTtcblxuXHRzZWxlY3RlZE9wdGlvbjogR3VpU2VsZWN0T3B0aW9uO1xuXG5cdGNvbnRhaW5lclRleHQ6IHN0cmluZztcblxuXHRwcml2YXRlIHNjcm9sbExpc3RlbmVyRm46ICgpID0+IHZvaWQ7XG5cblx0cHJpdmF0ZSBkb05vdEVtaXRWYWx1ZXM6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIG9wZW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0U2VydmljZTogRmFicmljU2VsZWN0ZWRPcHRpb25zUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlOiBTZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlbGVjdE9wdGlvbk1vZGFsU2VydmljZTogU2VsZWN0T3B0aW9uTW9kYWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybUlkOiBhbnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcy5wbGFjZWhvbGRlcikge1xuXHRcdFx0dGhpcy5jb250YWluZXJUZXh0ID0gdGhpcy5wbGFjZWhvbGRlcjtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5zZWxlY3RlZCkge1xuXHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWQpIHtcblx0XHRcdFx0dGhpcy50cnlUb1NlbGVjdCh0aGlzLnNlbGVjdGVkKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdFNlcnZpY2Vcblx0XHRcdC5vblNlbGVjdGVkT3B0aW9uKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzZWxlY3RlZE9wdGlvbjogR3VpU2VsZWN0T3B0aW9uKSA9PiB7XG5cdFx0XHRcdHRoaXMuZW1pdFNlbGVjdGVkT3B0aW9uKHNlbGVjdGVkT3B0aW9uKTtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZE9wdGlvbiA9IHNlbGVjdGVkT3B0aW9uO1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lclRleHQgPSBzZWxlY3RlZE9wdGlvbi52YWx1ZTtcblx0XHRcdFx0dGhpcy5kb05vdEVtaXRWYWx1ZXMgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZVxuXHRcdFx0Lm9uU2VsZWN0T3B0aW9uc0NvcmRzKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb3JkczogU2VsZWN0T3B0aW9uc0NvcmRzKSA9PiB7XG5cblx0XHRcdFx0aWYgKGNvcmRzLmdldENhbk9wZW5VcHdhcmQoKSkge1xuXHRcdFx0XHRcdHRoaXMub3BlblVwd2FyZCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMub3BlbkRvd253YXJkKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0dHJ5VG9PcGVuKGV2ZW50OiBhbnkpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLmlzQ29udGFpbmVyRGlzYWJsZWQoZXZlbnQpKSB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vcGVuKHRoaXMub3B0aW9ucywgdGhpcy53aWR0aCk7XG5cdFx0XHR0aGlzLnRvZ2dsZU9wdGlvbnMoIXRoaXMub3BlbmVkKTtcblx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdH1cblx0fVxuXG5cdGNsaWNrT3V0c2lkZShldmVudDogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNDb250YWluZXJDbGlja2VkKGV2ZW50KSkge1xuXHRcdFx0dGhpcy50b2dnbGVPcHRpb25zKGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHR0b2dnbGVPcHRpb25zKG9wZW5lZDogYm9vbGVhbikge1xuXHRcdHRoaXMub3BlbmVkID0gb3BlbmVkO1xuXHRcdHRoaXMubWFpbnRhaW5PcHRpb25zTGlzdFBvc2l0aW9uKCk7XG5cdFx0aWYgKCF0aGlzLm9wZW5lZCkge1xuXHRcdFx0dGhpcy5jbG9zZU9wdGlvbnMoKTtcblx0XHR9XG5cdH1cblxuXHRpc09wdGlvblNlbGVjdGVkKG9wdGlvbjogR3VpU2VsZWN0T3B0aW9uKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRPcHRpb24gJiYgb3B0aW9uLm5hbWUgPT09IHRoaXMuc2VsZWN0ZWRPcHRpb24ubmFtZTtcblx0fVxuXG5cdGdldE9wdGlvblZhbHVlKG9wdGlvbjogR3VpU2VsZWN0T3B0aW9uKTogc3RyaW5nIHtcblx0XHRpZiAob3B0aW9uKSB7XG5cdFx0XHRyZXR1cm4gb3B0aW9uLnZhbHVlID8gb3B0aW9uLnZhbHVlIDogb3B0aW9uLm5hbWU7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvcGVuKG9wdGlvbnM6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj4sIHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNsb3NlU2VsZWN0KCk7XG5cdFx0dGhpcy5zZWxlY3RPcHRpb25Nb2RhbFNlcnZpY2Uub3BlbihvcHRpb25zLCB3aWR0aCk7XG5cdFx0dGhpcy5zZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlLm5leHRDb3Jkcyh0aGlzLmNvbnRhaW5lclJlZik7XG5cdH1cblxuXHRwcml2YXRlIHRyeVRvU2VsZWN0KG9wdGlvbjogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cdFx0Y29uc3QgY2FuU2VsZWN0ID0gdGhpcy5zZWxlY3RlZE9wdGlvbiA/IG9wdGlvbi5uYW1lICE9PSB0aGlzLnNlbGVjdGVkT3B0aW9uLm5hbWUgOiB0cnVlO1xuXG5cdFx0aWYgKGNhblNlbGVjdCkge1xuXHRcdFx0dGhpcy5kb05vdEVtaXRWYWx1ZXMgPSB0cnVlO1xuXHRcdFx0dGhpcy5zZWxlY3RTZXJ2aWNlLm5leHQob3B0aW9uKTtcblx0XHRcdHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBvcHRpb247XG5cdFx0XHR0aGlzLmNvbnRhaW5lclRleHQgPSB0aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbik7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBtYWludGFpbk9wdGlvbnNMaXN0UG9zaXRpb24oKTogdm9pZCB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGlmICh0aGlzLm9wZW5lZCkge1xuXHRcdFx0XHR0aGlzLnNjcm9sbExpc3RlbmVyRm4gPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Njcm9sbCcsICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2UubmV4dENvcmRzKHRoaXMuY29udGFpbmVyUmVmKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodGhpcy5zY3JvbGxMaXN0ZW5lckZuKSB7XG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxMaXN0ZW5lckZuKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNsb3NlU2VsZWN0KCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0T3B0aW9uTW9kYWxTZXJ2aWNlLmNsb3NlT3B0aW9ucygpO1xuXHR9XG5cblx0cHJpdmF0ZSBlbWl0U2VsZWN0ZWRPcHRpb24ob3B0aW9uOiBHdWlTZWxlY3RPcHRpb24pOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuZG9Ob3RFbWl0VmFsdWVzKSB7XG5cdFx0XHRpZiAoIXRoaXMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24pKSB7XG5cdFx0XHRcdHRoaXMub3B0aW9uQ2hhbmdlZC5lbWl0KG9wdGlvbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvcGVuRG93bndhcmQoKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRDbGFzcygnZ3VpLW9wdGlvbnMtb3BlbmVkJyk7XG5cdFx0dGhpcy5hZGRDbGFzcygnZ3VpLWRvd253YXJkJyk7XG5cdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLXVwd2FyZCcpO1xuXHR9XG5cblx0cHJpdmF0ZSBvcGVuVXB3YXJkKCk6IHZvaWQge1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1vcHRpb25zLW9wZW5lZCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS11cHdhcmQnKTtcblx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktZG93bndhcmQnKTtcblx0fVxuXG5cdHByaXZhdGUgY2xvc2VPcHRpb25zKCk6IHZvaWQge1xuXHRcdGNvbnN0IG9wdGlvbnNFbEhhc09wZW5DbGFzcyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZ3VpLW9wdGlvbnMtb3BlbmVkJyk7XG5cblx0XHRpZiAob3B0aW9uc0VsSGFzT3BlbkNsYXNzKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktb3B0aW9ucy1vcGVuZWQnKTtcblx0XHRcdHRoaXMuY2xvc2VTZWxlY3QoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzQ29udGFpbmVyQ2xpY2tlZChldmVudDogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckRpc2FibGVkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ3VpLWRpc2FibGVkJyk7XG5cdH1cblxuXHRwcml2YXRlIGFkZENsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuXHR9XG59XG4iXX0=