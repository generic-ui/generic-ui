import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Inject, Input, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GeometryService } from './geometry.service';
import { Placement } from './placement';
import { FabricReactive } from '../../common/fabric-reactive';
import { Direction } from '../../common/icons/arrow-icon/direction';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./geometry.service";
import * as i2 from "@angular/common";
import * as i3 from "../../common/icons/arrow-icon/fabric-arrow-icon.component";
export class FabricDropdownComponent extends FabricReactive {
    platformId;
    elementRef;
    renderer;
    changeDetectorRef;
    geometryService;
    dropdownMenuRef;
    containerRef;
    onResize() {
        if (isPlatformBrowser(this.platformId)) {
            this.windowSize = window.innerHeight;
        }
    }
    disabled = false;
    dropdownText = 'Dropdown';
    isArrowEnabled = true;
    placement;
    width = 120;
    showOnHover = false;
    containerWidth = 0;
    containerHeight = 0;
    windowSize = 0;
    horizontalPosition = 0;
    bottomPosition = 0;
    topPosition = 0;
    arrowDirection = Direction.BOTTOM;
    canOpenDownward = false;
    canOpenUpward = false;
    open = false;
    topBorderWidth = 1;
    constructor(platformId, elementRef, renderer, changeDetectorRef, geometryService) {
        super();
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.geometryService = geometryService;
        this.onResize();
    }
    ngOnChanges(changes) {
        if (changes['placement']) {
            this.changePlacement();
        }
    }
    ngOnInit() {
        this.geometryService
            .watchGeometry()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((geometry) => {
            this.containerHeight = geometry.getContainerHeight();
            this.containerWidth = geometry.getContainerWidth();
            this.canOpenUpward = geometry.canOpenUpward();
            this.canOpenDownward = geometry.canOpenDownward();
        });
    }
    tryToOpen(event) {
        if (this.isContainerDisabled(event)) {
            event.stopPropagation();
        }
        else {
            this.openMenu(!this.open);
            this.changeDetectorRef.detectChanges();
        }
    }
    tryToOpenOnHover() {
        if (this.showOnHover) {
            this.openMenu(!this.open);
            this.changeDetectorRef.detectChanges();
        }
    }
    hideOnHover() {
        if (this.showOnHover) {
            this.hideItems();
            this.open = false;
        }
    }
    clickOutside(event) {
        if (this.isContainerClicked(event)) {
            this.openMenu(false);
        }
    }
    isDirectionLeft() {
        return this.isArrowEnabled && this.arrowDirection === Direction.LEFT;
    }
    openMenu(opened) {
        this.open = opened;
        if (this.open) {
            this.showItems();
        }
        else {
            this.hideItems();
        }
    }
    showItems() {
        if (this.containerRef && this.dropdownMenuRef) {
            this.addClass(this.elementRef.nativeElement, 'gui-menu-opened');
            this.geometryService.changeGeometry(this.containerRef, this.dropdownMenuRef, this.windowSize);
            if (this.canOpenDownward || !this.canOpenUpward) {
                this.openDownward();
            }
            else {
                this.openUpward();
            }
            if (this.placement === Placement.Right) {
                this.openRight();
            }
            if (this.placement === Placement.Left) {
                this.openLeft();
            }
        }
    }
    openDownward() {
        this.topPosition = null;
        this.bottomPosition = this.containerHeight;
    }
    openUpward() {
        this.bottomPosition = null;
        this.topPosition = this.containerHeight;
    }
    openRight() {
        this.bottomPosition = -this.topBorderWidth;
        this.topPosition = null;
        this.horizontalPosition = this.containerWidth;
    }
    openLeft() {
        this.bottomPosition = -this.topBorderWidth;
        this.topPosition = null;
        this.horizontalPosition = -(this.containerWidth + 1);
    }
    changePlacement() {
        if (!this.dropdownMenuRef) {
            return;
        }
        switch (this.placement) {
            case Placement.Right: {
                this.removeClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-left');
                this.addClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-right');
                this.arrowDirection = Direction.RIGHT;
                break;
            }
            case Placement.Left: {
                this.removeClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-right');
                this.addClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-left');
                this.arrowDirection = Direction.LEFT;
                break;
            }
            default:
                break;
        }
    }
    hideItems() {
        const itemsElHasOpenClass = this.elementRef.nativeElement.classList.contains('gui-menu-opened');
        if (itemsElHasOpenClass) {
            this.removeClass(this.elementRef.nativeElement, 'gui-menu-opened');
        }
    }
    isContainerClicked(event) {
        return !this.elementRef.nativeElement.contains(event.target);
    }
    isContainerDisabled(event) {
        return event.target.classList.contains('gui-disabled');
    }
    addClass(element, name) {
        this.renderer.addClass(element, name);
    }
    removeClass(element, name) {
        this.renderer.removeClass(element, name);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDropdownComponent, deps: [{ token: PLATFORM_ID }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }, { token: i1.GeometryService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: FabricDropdownComponent, selector: "gui-dropdown", inputs: { disabled: "disabled", dropdownText: "dropdownText", isArrowEnabled: "isArrowEnabled", placement: "placement", width: "width", showOnHover: "showOnHover" }, host: { listeners: { "window:resize": "onResize()" }, properties: { "class.gui-dropdown": "true" } }, providers: [
            GeometryService
        ], viewQueries: [{ propertyName: "dropdownMenuRef", first: true, predicate: ["dropdownMenu"], descendants: true, read: ElementRef, static: true }, { propertyName: "containerRef", first: true, predicate: ["container"], descendants: true, read: ElementRef, static: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div #container\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t (mouseenter)=\"tryToOpenOnHover()\"\n\t (mouseleave)=\"hideOnHover()\"\n\t [class.gui-arrow-left]=\"isDirectionLeft()\"\n\t [class.gui-disabled]=\"disabled\"\n\t [style.width.px]=\"width\"\n\t class=\"gui-dropdown-container\">\n\n\t<div class=\"gui-dropdown-text\">{{dropdownText}}</div>\n\n\t<div *ngIf=\"isArrowEnabled\"\n\t\t [class.gui-dropdown-arrow]=\"isArrowEnabled\">\n\t\t<gui-arrow-icon [direction]=\"arrowDirection\"></gui-arrow-icon>\n\t</div>\n\n\t<div #dropdownMenu\n\t\t [style.bottom.px]=\"topPosition\"\n\t\t [style.left.px]=\"horizontalPosition\"\n\t\t [style.top.px]=\"bottomPosition\"\n\t\t class=\"gui-dropdown-menu\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n", styles: [".gui-dropdown .gui-dropdown-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:border-box;color:#333;cursor:pointer;display:inline-block;font:14px Arial;padding:8px 12px;position:relative;width:auto}.gui-dropdown .gui-dropdown-container:hover{border-color:#999}.gui-dropdown .gui-dropdown-container:hover .gui-arrow-icon svg path{stroke:#464646}.gui-dropdown .gui-dropdown-container .gui-dropdown-arrow{cursor:pointer;position:absolute;right:12px;top:8px}.gui-dropdown .gui-dropdown-container .gui-dropdown-right.gui-dropdown-menu,.gui-dropdown .gui-dropdown-container .gui-dropdown-left.gui-dropdown-menu{margin:0}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu{background:inherit;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:border-box;display:none;left:-1px;overflow:hidden;position:absolute;width:inherit;z-index:2}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{list-style-type:none;padding:8px 12px;width:inherit}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#cccccc}.gui-dropdown .gui-dropdown-container.gui-arrow-left{padding:8px 12px 8px 32px}.gui-dropdown .gui-dropdown-container.gui-arrow-left .gui-dropdown-arrow{left:12px;right:initial}.gui-dropdown.gui-menu-opened .gui-dropdown-container{border-color:#999}.gui-dropdown.gui-menu-opened .gui-dropdown-menu{display:block}.gui-dropdown .gui-disabled{color:#ccc;pointer-events:none}\n", ".gui-material .gui-dropdown .gui-dropdown-container{font-family:Roboto,Helvetica Neue,sans-serif}\n", ".gui-dark .gui-dropdown .gui-dropdown-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-dropdown .gui-dropdown-container:hover{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container:hover .gui-dropdown-arrow svg path{stroke:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu{border-color:#616161}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{border-top-color:#757575}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#616161}.gui-dark .gui-dropdown.gui-options-opened .gui-dropdown-container{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-disabled{opacity:.36}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.FabricArrowIconComponent, selector: "gui-arrow-icon", inputs: ["direction"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-dropdown', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-dropdown]': 'true'
                    }, providers: [
                        GeometryService
                    ], template: "<div #container\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t (mouseenter)=\"tryToOpenOnHover()\"\n\t (mouseleave)=\"hideOnHover()\"\n\t [class.gui-arrow-left]=\"isDirectionLeft()\"\n\t [class.gui-disabled]=\"disabled\"\n\t [style.width.px]=\"width\"\n\t class=\"gui-dropdown-container\">\n\n\t<div class=\"gui-dropdown-text\">{{dropdownText}}</div>\n\n\t<div *ngIf=\"isArrowEnabled\"\n\t\t [class.gui-dropdown-arrow]=\"isArrowEnabled\">\n\t\t<gui-arrow-icon [direction]=\"arrowDirection\"></gui-arrow-icon>\n\t</div>\n\n\t<div #dropdownMenu\n\t\t [style.bottom.px]=\"topPosition\"\n\t\t [style.left.px]=\"horizontalPosition\"\n\t\t [style.top.px]=\"bottomPosition\"\n\t\t class=\"gui-dropdown-menu\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n", styles: [".gui-dropdown .gui-dropdown-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:border-box;color:#333;cursor:pointer;display:inline-block;font:14px Arial;padding:8px 12px;position:relative;width:auto}.gui-dropdown .gui-dropdown-container:hover{border-color:#999}.gui-dropdown .gui-dropdown-container:hover .gui-arrow-icon svg path{stroke:#464646}.gui-dropdown .gui-dropdown-container .gui-dropdown-arrow{cursor:pointer;position:absolute;right:12px;top:8px}.gui-dropdown .gui-dropdown-container .gui-dropdown-right.gui-dropdown-menu,.gui-dropdown .gui-dropdown-container .gui-dropdown-left.gui-dropdown-menu{margin:0}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu{background:inherit;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:border-box;display:none;left:-1px;overflow:hidden;position:absolute;width:inherit;z-index:2}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{list-style-type:none;padding:8px 12px;width:inherit}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#cccccc}.gui-dropdown .gui-dropdown-container.gui-arrow-left{padding:8px 12px 8px 32px}.gui-dropdown .gui-dropdown-container.gui-arrow-left .gui-dropdown-arrow{left:12px;right:initial}.gui-dropdown.gui-menu-opened .gui-dropdown-container{border-color:#999}.gui-dropdown.gui-menu-opened .gui-dropdown-menu{display:block}.gui-dropdown .gui-disabled{color:#ccc;pointer-events:none}\n", ".gui-material .gui-dropdown .gui-dropdown-container{font-family:Roboto,Helvetica Neue,sans-serif}\n", ".gui-dark .gui-dropdown .gui-dropdown-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-dropdown .gui-dropdown-container:hover{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container:hover .gui-dropdown-arrow svg path{stroke:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu{border-color:#616161}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{border-top-color:#757575}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#616161}.gui-dark .gui-dropdown.gui-options-opened .gui-dropdown-container{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-disabled{opacity:.36}\n"] }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i1.GeometryService }], propDecorators: { dropdownMenuRef: [{
                type: ViewChild,
                args: ['dropdownMenu', { read: ElementRef, static: true }]
            }], containerRef: [{
                type: ViewChild,
                args: ['container', { read: ElementRef, static: true }]
            }], onResize: [{
                type: HostListener,
                args: ['window:resize']
            }], disabled: [{
                type: Input
            }], dropdownText: [{
                type: Input
            }], isArrowEnabled: [{
                type: Input
            }], placement: [{
                type: Input
            }], width: [{
                type: Input
            }], showOnHover: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL25hdmlnYXRpb24vZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL25hdmlnYXRpb24vZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUdMLFdBQVcsRUFHWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQW9CM0MsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGNBQWM7SUF1RFI7SUFDOUI7SUFDQTtJQUNBO0lBQ0E7SUF4RFgsZUFBZSxDQUFjO0lBRzdCLFlBQVksQ0FBYztJQUduQyxRQUFRO1FBQ1AsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1NBQ3JDO0lBQ0YsQ0FBQztJQUdELFFBQVEsR0FBWSxLQUFLLENB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RkNqRDNDLHd4QkF5QkE7OzJGRG1CYSx1QkFBdUI7a0JBakJuQyxTQUFTOytCQUNDLGNBQWMsbUJBT1AsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxRQUMvQjt3QkFDTCxzQkFBc0IsRUFBRSxNQUFNO3FCQUM5QixhQUNVO3dCQUNWLGVBQWU7cUJBQ2Y7OzBCQXlEWSxNQUFNOzJCQUFDLFdBQVc7d0pBcER0QixlQUFlO3NCQUR2QixTQUFTO3VCQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFJcEQsWUFBWTtzQkFEcEIsU0FBUzt1QkFBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBSTFELFFBQVE7c0JBRFAsWUFBWTt1QkFBQyxlQUFlO2dCQVE3QixRQUFRO3NCQURQLEtBQUs7Z0JBSU4sWUFBWTtzQkFEWCxLQUFLO2dCQUlOLGNBQWM7c0JBRGIsS0FBSztnQkFJTixTQUFTO3NCQURSLEtBQUs7Z0JBSU4sS0FBSztzQkFESixLQUFLO2dCQUlOLFdBQVc7c0JBRFYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRIb3N0TGlzdGVuZXIsXG5cdEluamVjdCxcblx0SW5wdXQsXG5cdE9uQ2hhbmdlcyxcblx0T25Jbml0LFxuXHRQTEFURk9STV9JRCxcblx0UmVuZGVyZXIyLFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBHZW9tZXRyeVNlcnZpY2UgfSBmcm9tICcuL2dlb21ldHJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5JztcblxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSAnLi9wbGFjZW1lbnQnO1xuaW1wb3J0IHsgRmFicmljUmVhY3RpdmUgfSBmcm9tICcuLi8uLi9jb21tb24vZmFicmljLXJlYWN0aXZlJztcbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL2NvbW1vbi9pY29ucy9hcnJvdy1pY29uL2RpcmVjdGlvbic7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRyb3Bkb3duJyxcblx0dGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZHJvcGRvd24uY29tcG9uZW50LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9kcm9wZG93bi5jb21wb25lbnQubWF0ZXJpYWwuc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2Ryb3Bkb3duLmNvbXBvbmVudC5kYXJrLnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktZHJvcGRvd25dJzogJ3RydWUnXG5cdH0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEdlb21ldHJ5U2VydmljZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0Ryb3Bkb3duQ29tcG9uZW50IGV4dGVuZHMgRmFicmljUmVhY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0QFZpZXdDaGlsZCgnZHJvcGRvd25NZW51JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSlcblx0cmVhZG9ubHkgZHJvcGRvd25NZW51UmVmPzogRWxlbWVudFJlZjtcblxuXHRAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRyZWFkb25seSBjb250YWluZXJSZWY/OiBFbGVtZW50UmVmO1xuXG5cdEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuXHRvblJlc2l6ZSgpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy53aW5kb3dTaXplID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdH1cblx0fVxuXG5cdEBJbnB1dCgpXG5cdGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0ZHJvcGRvd25UZXh0OiBzdHJpbmcgPSAnRHJvcGRvd24nO1xuXG5cdEBJbnB1dCgpXG5cdGlzQXJyb3dFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRASW5wdXQoKVxuXHRwbGFjZW1lbnQ/OiBQbGFjZW1lbnQ7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlciA9IDEyMDtcblxuXHRASW5wdXQoKVxuXHRzaG93T25Ib3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnRhaW5lcldpZHRoOiBudW1iZXIgPSAwO1xuXG5cdGNvbnRhaW5lckhlaWdodDogbnVtYmVyID0gMDtcblxuXHR3aW5kb3dTaXplOiBudW1iZXIgPSAwO1xuXG5cdGhvcml6b250YWxQb3NpdGlvbjogbnVtYmVyID0gMDtcblxuXHRib3R0b21Qb3NpdGlvbjogbnVtYmVyIHwgbnVsbCA9IDA7XG5cblx0dG9wUG9zaXRpb246IG51bWJlciB8IG51bGwgPSAwO1xuXG5cdGFycm93RGlyZWN0aW9uOiBEaXJlY3Rpb24gPSBEaXJlY3Rpb24uQk9UVE9NO1xuXG5cdHByaXZhdGUgY2FuT3BlbkRvd253YXJkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBjYW5PcGVuVXB3YXJkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBvcGVuOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSB0b3BCb3JkZXJXaWR0aDogbnVtYmVyID0gMTtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGdlb21ldHJ5U2VydmljZTogR2VvbWV0cnlTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm9uUmVzaXplKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0aWYgKGNoYW5nZXNbJ3BsYWNlbWVudCddKSB7XG5cdFx0XHR0aGlzLmNoYW5nZVBsYWNlbWVudCgpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuZ2VvbWV0cnlTZXJ2aWNlXG5cdFx0XHQud2F0Y2hHZW9tZXRyeSgpXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuXHRcdFx0LnN1YnNjcmliZSgoZ2VvbWV0cnk6IEdlb21ldHJ5KSA9PiB7XG5cdFx0XHRcdHRoaXMuY29udGFpbmVySGVpZ2h0ID0gZ2VvbWV0cnkuZ2V0Q29udGFpbmVySGVpZ2h0KCk7XG5cdFx0XHRcdHRoaXMuY29udGFpbmVyV2lkdGggPSBnZW9tZXRyeS5nZXRDb250YWluZXJXaWR0aCgpO1xuXHRcdFx0XHR0aGlzLmNhbk9wZW5VcHdhcmQgPSBnZW9tZXRyeS5jYW5PcGVuVXB3YXJkKCk7XG5cdFx0XHRcdHRoaXMuY2FuT3BlbkRvd253YXJkID0gZ2VvbWV0cnkuY2FuT3BlbkRvd253YXJkKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRyeVRvT3BlbihldmVudDogYW55KTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5pc0NvbnRhaW5lckRpc2FibGVkKGV2ZW50KSkge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3Blbk1lbnUoIXRoaXMub3Blbik7XG5cdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHR9XG5cdH1cblxuXHR0cnlUb09wZW5PbkhvdmVyKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnNob3dPbkhvdmVyKSB7XG5cdFx0XHR0aGlzLm9wZW5NZW51KCF0aGlzLm9wZW4pO1xuXHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0fVxuXHR9XG5cblx0aGlkZU9uSG92ZXIoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc2hvd09uSG92ZXIpIHtcblx0XHRcdHRoaXMuaGlkZUl0ZW1zKCk7XG5cdFx0XHR0aGlzLm9wZW4gPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRjbGlja091dHNpZGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQ29udGFpbmVyQ2xpY2tlZChldmVudCkpIHtcblx0XHRcdHRoaXMub3Blbk1lbnUoZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdGlzRGlyZWN0aW9uTGVmdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pc0Fycm93RW5hYmxlZCAmJiB0aGlzLmFycm93RGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTEVGVDtcblx0fVxuXG5cdHByaXZhdGUgb3Blbk1lbnUob3BlbmVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5vcGVuID0gb3BlbmVkO1xuXG5cdFx0aWYgKHRoaXMub3Blbikge1xuXHRcdFx0dGhpcy5zaG93SXRlbXMoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5oaWRlSXRlbXMoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNob3dJdGVtcygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jb250YWluZXJSZWYgJiYgdGhpcy5kcm9wZG93bk1lbnVSZWYpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktbWVudS1vcGVuZWQnKTtcblx0XHRcdHRoaXMuZ2VvbWV0cnlTZXJ2aWNlLmNoYW5nZUdlb21ldHJ5KHRoaXMuY29udGFpbmVyUmVmLCB0aGlzLmRyb3Bkb3duTWVudVJlZiwgdGhpcy53aW5kb3dTaXplKTtcblxuXHRcdFx0aWYgKHRoaXMuY2FuT3BlbkRvd253YXJkIHx8ICF0aGlzLmNhbk9wZW5VcHdhcmQpIHtcblx0XHRcdFx0dGhpcy5vcGVuRG93bndhcmQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMub3BlblVwd2FyZCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5wbGFjZW1lbnQgPT09IFBsYWNlbWVudC5SaWdodCkge1xuXHRcdFx0XHR0aGlzLm9wZW5SaWdodCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5wbGFjZW1lbnQgPT09IFBsYWNlbWVudC5MZWZ0KSB7XG5cdFx0XHRcdHRoaXMub3BlbkxlZnQoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9wZW5Eb3dud2FyZCgpOiB2b2lkIHtcblx0XHR0aGlzLnRvcFBvc2l0aW9uID0gbnVsbDtcblx0XHR0aGlzLmJvdHRvbVBvc2l0aW9uID0gdGhpcy5jb250YWluZXJIZWlnaHQ7XG5cdH1cblxuXHRwcml2YXRlIG9wZW5VcHdhcmQoKTogdm9pZCB7XG5cdFx0dGhpcy5ib3R0b21Qb3NpdGlvbiA9IG51bGw7XG5cdFx0dGhpcy50b3BQb3NpdGlvbiA9IHRoaXMuY29udGFpbmVySGVpZ2h0O1xuXHR9XG5cblx0cHJpdmF0ZSBvcGVuUmlnaHQoKTogdm9pZCB7XG5cdFx0dGhpcy5ib3R0b21Qb3NpdGlvbiA9IC10aGlzLnRvcEJvcmRlcldpZHRoO1xuXHRcdHRoaXMudG9wUG9zaXRpb24gPSBudWxsO1xuXHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gdGhpcy5jb250YWluZXJXaWR0aDtcblx0fVxuXG5cdHByaXZhdGUgb3BlbkxlZnQoKTogdm9pZCB7XG5cdFx0dGhpcy5ib3R0b21Qb3NpdGlvbiA9IC10aGlzLnRvcEJvcmRlcldpZHRoO1xuXHRcdHRoaXMudG9wUG9zaXRpb24gPSBudWxsO1xuXHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gLSh0aGlzLmNvbnRhaW5lcldpZHRoICsgMSk7XG5cdH1cblxuXHRwcml2YXRlIGNoYW5nZVBsYWNlbWVudCgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuZHJvcGRvd25NZW51UmVmKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c3dpdGNoICh0aGlzLnBsYWNlbWVudCkge1xuXG5cdFx0XHRjYXNlIFBsYWNlbWVudC5SaWdodDoge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKHRoaXMuZHJvcGRvd25NZW51UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktZHJvcGRvd24tbGVmdCcpO1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzKHRoaXMuZHJvcGRvd25NZW51UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktZHJvcGRvd24tcmlnaHQnKTtcblx0XHRcdFx0dGhpcy5hcnJvd0RpcmVjdGlvbiA9IERpcmVjdGlvbi5SSUdIVDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgUGxhY2VtZW50LkxlZnQ6IHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcyh0aGlzLmRyb3Bkb3duTWVudVJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWRyb3Bkb3duLXJpZ2h0Jyk7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3ModGhpcy5kcm9wZG93bk1lbnVSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kcm9wZG93bi1sZWZ0Jyk7XG5cdFx0XHRcdHRoaXMuYXJyb3dEaXJlY3Rpb24gPSBEaXJlY3Rpb24uTEVGVDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaGlkZUl0ZW1zKCk6IHZvaWQge1xuXHRcdGNvbnN0IGl0ZW1zRWxIYXNPcGVuQ2xhc3MgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2d1aS1tZW51LW9wZW5lZCcpO1xuXG5cdFx0aWYgKGl0ZW1zRWxIYXNPcGVuQ2xhc3MpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktbWVudS1vcGVuZWQnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzQ29udGFpbmVyQ2xpY2tlZChldmVudDogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckRpc2FibGVkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ3VpLWRpc2FibGVkJyk7XG5cdH1cblxuXHRwcml2YXRlIGFkZENsYXNzKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgbmFtZSk7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUNsYXNzKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgbmFtZSk7XG5cdH1cbn1cbiIsIjxkaXYgI2NvbnRhaW5lclxuXHQgKGNsaWNrKT1cInRyeVRvT3BlbigkZXZlbnQpXCJcblx0IChkb2N1bWVudDpjbGljayk9XCJjbGlja091dHNpZGUoJGV2ZW50KVwiXG5cdCAobW91c2VlbnRlcik9XCJ0cnlUb09wZW5PbkhvdmVyKClcIlxuXHQgKG1vdXNlbGVhdmUpPVwiaGlkZU9uSG92ZXIoKVwiXG5cdCBbY2xhc3MuZ3VpLWFycm93LWxlZnRdPVwiaXNEaXJlY3Rpb25MZWZ0KClcIlxuXHQgW2NsYXNzLmd1aS1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5cdCBbc3R5bGUud2lkdGgucHhdPVwid2lkdGhcIlxuXHQgY2xhc3M9XCJndWktZHJvcGRvd24tY29udGFpbmVyXCI+XG5cblx0PGRpdiBjbGFzcz1cImd1aS1kcm9wZG93bi10ZXh0XCI+e3tkcm9wZG93blRleHR9fTwvZGl2PlxuXG5cdDxkaXYgKm5nSWY9XCJpc0Fycm93RW5hYmxlZFwiXG5cdFx0IFtjbGFzcy5ndWktZHJvcGRvd24tYXJyb3ddPVwiaXNBcnJvd0VuYWJsZWRcIj5cblx0XHQ8Z3VpLWFycm93LWljb24gW2RpcmVjdGlvbl09XCJhcnJvd0RpcmVjdGlvblwiPjwvZ3VpLWFycm93LWljb24+XG5cdDwvZGl2PlxuXG5cdDxkaXYgI2Ryb3Bkb3duTWVudVxuXHRcdCBbc3R5bGUuYm90dG9tLnB4XT1cInRvcFBvc2l0aW9uXCJcblx0XHQgW3N0eWxlLmxlZnQucHhdPVwiaG9yaXpvbnRhbFBvc2l0aW9uXCJcblx0XHQgW3N0eWxlLnRvcC5weF09XCJib3R0b21Qb3NpdGlvblwiXG5cdFx0IGNsYXNzPVwiZ3VpLWRyb3Bkb3duLW1lbnVcIj5cblx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdDwvZGl2PlxuPC9kaXY+XG4iXX0=