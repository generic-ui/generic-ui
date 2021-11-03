import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Output, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SelectOptionsGeometryService } from './options/select-options-geometry.service';
import { FabricSelectedOptionsRepository } from './selected-option.repository';
import { SelectOptionModalService } from './select-option-modal.service';
import { FabricReactive } from '../../common/fabric-reactive';
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
                styles: [".gui-select .gui-select-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:content-box;color:#333;cursor:pointer;display:inline-block;font:14px Arial;padding:8px 24px 8px 12px;position:relative}.gui-select .gui-select-container:hover{border-color:#999}.gui-select .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:#595959 transparent transparent transparent;height:0;margin:8px;position:absolute;right:5px;top:5px;width:0}.gui-select.gui-options-opened .gui-select-container{border-color:#6fb4e8 #6fb4e8 transparent #6fb4e8;border-radius:4px 4px 0 0;border-width:1px}.gui-select.gui-downward .gui-options-list{border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-top:none;border-width:1px}.gui-select.gui-downward .gui-option{border-color:#e6e6e6;border-style:solid;border-width:1px 0 0 0}.gui-select.gui-upward .gui-select-container{padding:8px 12px 8px 24px;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-value{-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:transparent transparent #595959 transparent;bottom:5px;left:5px;top:auto}.gui-select.gui-upward .gui-options-list{border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-top:none;border-width:1px}.gui-select.gui-upward .gui-option{border-color:#e6e6e6;border-style:solid;border-width:0 0 1px 0;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select .gui-disabled{color:#ccc;pointer-events:none}.gui-select .gui-disabled .gui-select-arrow{border-color:#cccccc transparent transparent transparent}.gui-select .initAnimationDisabled.gui-options-list{display:none}.gui-options-list{background:#fff;border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-width:0 1px 1px 1px;overflow:hidden;padding:0;position:absolute;z-index:1000}.gui-options-list .gui-option{box-sizing:content-box;cursor:pointer;font-size:14px;list-style-type:none;padding:8px 24px 8px 12px}.gui-options-list .gui-option:hover{background:#dcdcdc}.gui-options-list .gui-option-selected{background:#e6e6e6;font-weight:bold}.gui-options-list.gui-upward{-webkit-animation:loadUpward .2s forwards;animation:loadUpward .2s forwards;border-bottom:none;border-color:#6fb4e8;border-radius:4px 4px 0 0;border-style:solid;border-width:1px}@-webkit-keyframes loadUpward{0%{transform:translateY(50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}@keyframes loadUpward{0%{transform:translateY(50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}.gui-options-list.gui-downward{-webkit-animation:loadDownward .2s forwards;animation:loadDownward .2s forwards;border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-width:0 1px 1px 1px}@-webkit-keyframes loadDownward{0%{transform:translateY(-50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}@keyframes loadDownward{0%{transform:translateY(-50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}\n", ".gui-material .gui-select .gui-select-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-options-list .gui-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-select .gui-select-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-select .gui-select-container:hover{border-color:#ce93d8}.gui-dark .gui-select .gui-select-container .gui-select-arrow{border-color:#ce93d8 transparent transparent transparent}.gui-dark .gui-select.gui-options-opened .gui-select-container{border-color:#ce93d8}.gui-dark .gui-select.gui-upward .gui-select-container .gui-select-arrow{border-color:transparent transparent #ce93d8 transparent}.gui-dark .gui-select .gui-disabled{opacity:.36}.gui-dark .gui-options-list{border-color:#ce93d8}.gui-dark .gui-options-list .gui-option{background:#424242;border-color:#757575;color:#bdbdbd}.gui-dark .gui-options-list .gui-option:hover{background:#616161}.gui-dark .gui-options-list .gui-option-selected{background:#757575}\n", ".gui-light .gui-select .gui-select-container{background:#fff;color:#333;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-light .gui-options-list .gui-option:hover{background:#f6f6f5}\n"]
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUvRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFzQjlELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxjQUFjO0lBaUN4RCxZQUE2QixhQUE4QyxFQUN2RCw0QkFBMEQsRUFDMUQsd0JBQWtELEVBQ2xELGlCQUFvQyxFQUNmLFVBQWUsRUFDcEMsVUFBc0IsRUFDdEIsUUFBbUI7UUFDdEMsS0FBSyxFQUFFLENBQUM7UUFQb0Isa0JBQWEsR0FBYixhQUFhLENBQWlDO1FBQ3ZELGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDMUQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ2YsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNwQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFqQ3ZDLFlBQU8sR0FBMkIsRUFBRSxDQUFDO1FBR3JDLGdCQUFXLEdBQVcsS0FBSyxDQUFDO1FBTTVCLFVBQUssR0FBVyxHQUFHLENBQUM7UUFHcEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUcxQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBUTVDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRWpDLFdBQU0sR0FBWSxLQUFLLENBQUM7SUFVaEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNqQyxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3RDO1FBRUQsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDaEM7U0FDRDtJQUNGLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGFBQWE7YUFDaEIsZ0JBQWdCLEVBQUU7YUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTLENBQUMsQ0FBQyxjQUErQixFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQztZQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLENBQUMsNEJBQTRCO2FBQy9CLG9CQUFvQixFQUFFO2FBQ3RCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUyxDQUFDLENBQUMsS0FBeUIsRUFBRSxFQUFFO1lBRXhDLElBQUksS0FBSyxDQUFDLGdCQUFnQixFQUFFLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNsQjtpQkFBTTtnQkFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDcEI7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBVTtRQUVuQixJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7YUFBTTtZQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdkM7SUFDRixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVU7UUFDdEIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNGLENBQUM7SUFFRCxhQUFhLENBQUMsTUFBZTtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNqQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDcEI7SUFDRixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsTUFBdUI7UUFDdkMsT0FBTyxJQUFJLENBQUMsY0FBYyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7SUFDeEUsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUF1QjtRQUNyQyxJQUFJLE1BQU0sRUFBRTtZQUNYLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNqRDtRQUVELE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVPLElBQUksQ0FBQyxPQUErQixFQUFFLEtBQWE7UUFDMUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTyxXQUFXLENBQUMsTUFBdUI7UUFDMUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRXhGLElBQUksU0FBUyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO0lBQ0YsQ0FBQztJQUVPLDJCQUEyQjtRQUNsQyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtvQkFDckUsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2hFLENBQUMsQ0FBQyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ04sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2lCQUN4QjthQUNEO1NBQ0Q7SUFDRixDQUFDO0lBRU8sV0FBVztRQUNsQixJQUFJLENBQUMsd0JBQXdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVPLGtCQUFrQixDQUFDLE1BQXVCO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Q7SUFDRixDQUFDO0lBRU8sWUFBWTtRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTyxVQUFVO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVPLFlBQVk7UUFDbkIsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFckcsSUFBSSxxQkFBcUIsRUFBRTtZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25CO0lBQ0YsQ0FBQztJQUVPLGtCQUFrQixDQUFDLEtBQVU7UUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVPLG1CQUFtQixDQUFDLEtBQVU7UUFDckMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVPLFFBQVEsQ0FBQyxTQUFpQjtRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU8sV0FBVyxDQUFDLFNBQWlCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7OztZQXpORCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLHFWQUFzQztnQkFPdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0wsb0JBQW9CLEVBQUUsTUFBTTtpQkFDNUI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLCtCQUErQjtvQkFDL0IsNEJBQTRCO29CQUM1Qix3QkFBd0I7aUJBQ3hCOzthQUNEOzs7WUF4QlEsK0JBQStCO1lBRC9CLDRCQUE0QjtZQUc1Qix3QkFBd0I7WUFwQmhDLGlCQUFpQjs0Q0FnRmIsTUFBTSxTQUFDLFdBQVc7WUE5RXRCLFVBQVU7WUFRVixTQUFTOzs7MkJBbUNSLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3NCQUd4QyxLQUFLOzBCQUdMLEtBQUs7dUJBR0wsS0FBSztvQkFHTCxLQUFLO3VCQUdMLEtBQUs7NEJBR0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRFdmVudEVtaXR0ZXIsXG5cdEluamVjdCxcblx0SW5wdXQsXG5cdE9uQ2hhbmdlcyxcblx0T25Jbml0LFxuXHRPdXRwdXQsXG5cdFBMQVRGT1JNX0lELFxuXHRSZW5kZXJlcjIsXG5cdFNpbXBsZUNoYW5nZXMsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBHdWlTZWxlY3RPcHRpb24gfSBmcm9tICcuL3NlbGVjdC1vcHRpb24nO1xuaW1wb3J0IHsgU2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZSB9IGZyb20gJy4vb3B0aW9ucy9zZWxlY3Qtb3B0aW9ucy1nZW9tZXRyeS5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY1NlbGVjdGVkT3B0aW9uc1JlcG9zaXRvcnkgfSBmcm9tICcuL3NlbGVjdGVkLW9wdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlbGVjdE9wdGlvbnNDb3JkcyB9IGZyb20gJy4vb3B0aW9ucy9zZWxlY3Qtb3B0aW9ucy5jb3Jkcyc7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb25Nb2RhbFNlcnZpY2UgfSBmcm9tICcuL3NlbGVjdC1vcHRpb24tbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9mYWJyaWMtcmVhY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc2VsZWN0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3NlbGVjdC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3NlbGVjdC5tYXRlcmlhbC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3NlbGVjdC5kYXJrLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvc2VsZWN0LmxpZ2h0Lm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXNlbGVjdF0nOiAndHJ1ZSdcblx0fSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmFicmljU2VsZWN0ZWRPcHRpb25zUmVwb3NpdG9yeSxcblx0XHRTZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlLFxuXHRcdFNlbGVjdE9wdGlvbk1vZGFsU2VydmljZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1NlbGVjdENvbXBvbmVudCBleHRlbmRzIEZhYnJpY1JlYWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG5cdEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRjb250YWluZXJSZWY6IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0b3B0aW9uczogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnLi4uJztcblxuXHRASW5wdXQoKVxuXHRzZWxlY3RlZDogR3VpU2VsZWN0T3B0aW9uO1xuXG5cdEBJbnB1dCgpXG5cdHdpZHRoOiBudW1iZXIgPSAxMDA7XG5cblx0QElucHV0KClcblx0ZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRAT3V0cHV0KClcblx0b3B0aW9uQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8R3VpU2VsZWN0T3B0aW9uPigpO1xuXG5cdHNlbGVjdGVkT3B0aW9uOiBHdWlTZWxlY3RPcHRpb247XG5cblx0Y29udGFpbmVyVGV4dDogc3RyaW5nO1xuXG5cdHByaXZhdGUgc2Nyb2xsTGlzdGVuZXJGbjogKCkgPT4gdm9pZDtcblxuXHRwcml2YXRlIGRvTm90RW1pdFZhbHVlczogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgb3BlbmVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzZWxlY3RTZXJ2aWNlOiBGYWJyaWNTZWxlY3RlZE9wdGlvbnNSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2U6IFNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0T3B0aW9uTW9kYWxTZXJ2aWNlOiBTZWxlY3RPcHRpb25Nb2RhbFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzLnBsYWNlaG9sZGVyKSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lclRleHQgPSB0aGlzLnBsYWNlaG9sZGVyO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnNlbGVjdGVkKSB7XG5cdFx0XHRpZiAodGhpcy5zZWxlY3RlZCkge1xuXHRcdFx0XHR0aGlzLnRyeVRvU2VsZWN0KHRoaXMuc2VsZWN0ZWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0U2VydmljZVxuXHRcdFx0Lm9uU2VsZWN0ZWRPcHRpb24oKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHNlbGVjdGVkT3B0aW9uOiBHdWlTZWxlY3RPcHRpb24pID0+IHtcblx0XHRcdFx0dGhpcy5lbWl0U2VsZWN0ZWRPcHRpb24oc2VsZWN0ZWRPcHRpb24pO1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkT3B0aW9uID0gc2VsZWN0ZWRPcHRpb247XG5cdFx0XHRcdHRoaXMuY29udGFpbmVyVGV4dCA9IHNlbGVjdGVkT3B0aW9uLnZhbHVlO1xuXHRcdFx0XHR0aGlzLmRvTm90RW1pdFZhbHVlcyA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlXG5cdFx0XHQub25TZWxlY3RPcHRpb25zQ29yZHMoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvcmRzOiBTZWxlY3RPcHRpb25zQ29yZHMpID0+IHtcblxuXHRcdFx0XHRpZiAoY29yZHMuZ2V0Q2FuT3BlblVwd2FyZCgpKSB7XG5cdFx0XHRcdFx0dGhpcy5vcGVuVXB3YXJkKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5vcGVuRG93bndhcmQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHR0cnlUb09wZW4oZXZlbnQ6IGFueSk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaXNDb250YWluZXJEaXNhYmxlZChldmVudCkpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wZW4odGhpcy5vcHRpb25zLCB0aGlzLndpZHRoKTtcblx0XHRcdHRoaXMudG9nZ2xlT3B0aW9ucyghdGhpcy5vcGVuZWQpO1xuXHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xpY2tPdXRzaWRlKGV2ZW50OiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZU9wdGlvbnMoZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZU9wdGlvbnMob3BlbmVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5vcGVuZWQgPSBvcGVuZWQ7XG5cdFx0dGhpcy5tYWludGFpbk9wdGlvbnNMaXN0UG9zaXRpb24oKTtcblx0XHRpZiAoIXRoaXMub3BlbmVkKSB7XG5cdFx0XHR0aGlzLmNsb3NlT3B0aW9ucygpO1xuXHRcdH1cblx0fVxuXG5cdGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uOiBHdWlTZWxlY3RPcHRpb24pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbiAmJiBvcHRpb24ubmFtZSA9PT0gdGhpcy5zZWxlY3RlZE9wdGlvbi5uYW1lO1xuXHR9XG5cblx0Z2V0T3B0aW9uVmFsdWUob3B0aW9uOiBHdWlTZWxlY3RPcHRpb24pOiBzdHJpbmcge1xuXHRcdGlmIChvcHRpb24pIHtcblx0XHRcdHJldHVybiBvcHRpb24udmFsdWUgPyBvcHRpb24udmFsdWUgOiBvcHRpb24ubmFtZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRwcml2YXRlIG9wZW4ob3B0aW9uczogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiwgd2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY2xvc2VTZWxlY3QoKTtcblx0XHR0aGlzLnNlbGVjdE9wdGlvbk1vZGFsU2VydmljZS5vcGVuKG9wdGlvbnMsIHdpZHRoKTtcblx0XHR0aGlzLnNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2UubmV4dENvcmRzKHRoaXMuY29udGFpbmVyUmVmKTtcblx0fVxuXG5cdHByaXZhdGUgdHJ5VG9TZWxlY3Qob3B0aW9uOiBHdWlTZWxlY3RPcHRpb24pOiB2b2lkIHtcblx0XHRjb25zdCBjYW5TZWxlY3QgPSB0aGlzLnNlbGVjdGVkT3B0aW9uID8gb3B0aW9uLm5hbWUgIT09IHRoaXMuc2VsZWN0ZWRPcHRpb24ubmFtZSA6IHRydWU7XG5cblx0XHRpZiAoY2FuU2VsZWN0KSB7XG5cdFx0XHR0aGlzLmRvTm90RW1pdFZhbHVlcyA9IHRydWU7XG5cdFx0XHR0aGlzLnNlbGVjdFNlcnZpY2UubmV4dChvcHRpb24pO1xuXHRcdFx0dGhpcy5zZWxlY3RlZE9wdGlvbiA9IG9wdGlvbjtcblx0XHRcdHRoaXMuY29udGFpbmVyVGV4dCA9IHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG1haW50YWluT3B0aW9uc0xpc3RQb3NpdGlvbigpOiB2b2lkIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0aWYgKHRoaXMub3BlbmVkKSB7XG5cdFx0XHRcdHRoaXMuc2Nyb2xsTGlzdGVuZXJGbiA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAnc2Nyb2xsJywgKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZS5uZXh0Q29yZHModGhpcy5jb250YWluZXJSZWYpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh0aGlzLnNjcm9sbExpc3RlbmVyRm4pIHtcblx0XHRcdFx0XHR0aGlzLnNjcm9sbExpc3RlbmVyRm4oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2xvc2VTZWxlY3QoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RPcHRpb25Nb2RhbFNlcnZpY2UuY2xvc2VPcHRpb25zKCk7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRTZWxlY3RlZE9wdGlvbihvcHRpb246IEd1aVNlbGVjdE9wdGlvbik6IHZvaWQge1xuXHRcdGlmICghdGhpcy5kb05vdEVtaXRWYWx1ZXMpIHtcblx0XHRcdGlmICghdGhpcy5pc09wdGlvblNlbGVjdGVkKG9wdGlvbikpIHtcblx0XHRcdFx0dGhpcy5vcHRpb25DaGFuZ2VkLmVtaXQob3B0aW9uKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9wZW5Eb3dud2FyZCgpOiB2b2lkIHtcblx0XHR0aGlzLmFkZENsYXNzKCdndWktb3B0aW9ucy1vcGVuZWQnKTtcblx0XHR0aGlzLmFkZENsYXNzKCdndWktZG93bndhcmQnKTtcblx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktdXB3YXJkJyk7XG5cdH1cblxuXHRwcml2YXRlIG9wZW5VcHdhcmQoKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRDbGFzcygnZ3VpLW9wdGlvbnMtb3BlbmVkJyk7XG5cdFx0dGhpcy5hZGRDbGFzcygnZ3VpLXVwd2FyZCcpO1xuXHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1kb3dud2FyZCcpO1xuXHR9XG5cblx0cHJpdmF0ZSBjbG9zZU9wdGlvbnMoKTogdm9pZCB7XG5cdFx0Y29uc3Qgb3B0aW9uc0VsSGFzT3BlbkNsYXNzID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdndWktb3B0aW9ucy1vcGVuZWQnKTtcblxuXHRcdGlmIChvcHRpb25zRWxIYXNPcGVuQ2xhc3MpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1vcHRpb25zLW9wZW5lZCcpO1xuXHRcdFx0dGhpcy5jbG9zZVNlbGVjdCgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNDb250YWluZXJDbGlja2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG5cdH1cblxuXHRwcml2YXRlIGlzQ29udGFpbmVyRGlzYWJsZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdndWktZGlzYWJsZWQnKTtcblx0fVxuXG5cdHByaXZhdGUgYWRkQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdH1cbn1cbiJdfQ==