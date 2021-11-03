import { ChangeDetectionStrategy, Component, forwardRef, Inject, ViewEncapsulation } from '@angular/core';
import { FabricNotificationService } from './fabric-notification.service';
import { themeToken } from '../../themes/theme.token';
import { FabricNotificationPosition } from './fabric-notification-position';
import { FabricThemedComponent } from '../../common/modal/fabric-themed-component';
import * as i0 from "@angular/core";
import * as i1 from "../../themes/fabric-modal-theme.service";
import * as i2 from "@angular/common";
import * as i3 from "./fabric-notifications-container.component";
import * as i4 from "../../themes/theme";
import * as i5 from "./fabric-notification.service";
function FabricNotificationsOverlayComponent_gui_notifications_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "gui-notifications-container", 1);
    i0.ɵɵlistener("onNotificationClose", function FabricNotificationsOverlayComponent_gui_notifications_container_0_Template_gui_notifications_container_onNotificationClose_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.removeNotification($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("notifications", ctx_r0.notificationsTopRight)("position", ctx_r0.FabricNotificationPosition.TOP_RIGHT);
} }
function FabricNotificationsOverlayComponent_gui_notifications_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "gui-notifications-container", 1);
    i0.ɵɵlistener("onNotificationClose", function FabricNotificationsOverlayComponent_gui_notifications_container_1_Template_gui_notifications_container_onNotificationClose_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.removeNotification($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("notifications", ctx_r1.notificationsTopLeft)("position", ctx_r1.FabricNotificationPosition.TOP_LEFT);
} }
function FabricNotificationsOverlayComponent_gui_notifications_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "gui-notifications-container", 1);
    i0.ɵɵlistener("onNotificationClose", function FabricNotificationsOverlayComponent_gui_notifications_container_2_Template_gui_notifications_container_onNotificationClose_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.removeNotification($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("notifications", ctx_r2.notificationsBottomRight)("position", ctx_r2.FabricNotificationPosition.BOTTOM_RIGHT);
} }
function FabricNotificationsOverlayComponent_gui_notifications_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "gui-notifications-container", 1);
    i0.ɵɵlistener("onNotificationClose", function FabricNotificationsOverlayComponent_gui_notifications_container_3_Template_gui_notifications_container_onNotificationClose_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.removeNotification($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("notifications", ctx_r3.notificationsBottomLeft)("position", ctx_r3.FabricNotificationPosition.BOTTOM_LEFT);
} }
export class FabricNotificationsOverlayComponent extends FabricThemedComponent {
    constructor(changeDetectorRef, componentFactoryResolver, elRef, renderer, themeService, theme, notificationsService) {
        super(elRef, renderer, themeService);
        this.changeDetectorRef = changeDetectorRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.elRef = elRef;
        this.notificationsService = notificationsService;
        this.notificationsTopRight = [];
        this.notificationsTopLeft = [];
        this.notificationsBottomRight = [];
        this.notificationsBottomLeft = [];
        this.FabricNotificationPosition = FabricNotificationPosition;
    }
    removeNotification(selectedNotification) {
        switch (selectedNotification.position) {
            case FabricNotificationPosition.TOP_RIGHT:
                this.notificationsTopRight = this.notificationsTopRight
                    .filter((notification) => notification.index !== selectedNotification.index);
                break;
            case FabricNotificationPosition.TOP_LEFT:
                this.notificationsTopLeft = this.notificationsTopLeft
                    .filter((notification) => notification.index !== selectedNotification.index);
                break;
            case FabricNotificationPosition.BOTTOM_RIGHT:
                this.notificationsBottomRight = this.notificationsBottomRight
                    .filter((notification) => notification.index !== selectedNotification.index);
                break;
            case FabricNotificationPosition.BOTTOM_LEFT:
                this.notificationsBottomLeft = this.notificationsBottomLeft
                    .filter((notification) => notification.index !== selectedNotification.index);
                break;
            default:
                break;
        }
        this.detectChanges();
        this.checkNotificationsLength();
    }
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    checkNotificationsLength() {
        if (this.notificationsTopRight.length === 0
            && this.notificationsTopLeft.length === 0
            && this.notificationsBottomRight.length === 0
            && this.notificationsBottomLeft.length === 0) {
            this.notificationsService.close();
        }
    }
    isContainerNotEmpty(container) {
        return container && container.length > 0;
    }
}
FabricNotificationsOverlayComponent.ɵfac = function FabricNotificationsOverlayComponent_Factory(t) { return new (t || FabricNotificationsOverlayComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.FabricModalThemeService), i0.ɵɵdirectiveInject(themeToken), i0.ɵɵdirectiveInject(forwardRef(() => FabricNotificationService))); };
FabricNotificationsOverlayComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricNotificationsOverlayComponent, selectors: [["ng-component"]], hostVars: 2, hostBindings: function FabricNotificationsOverlayComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-notifications-overlay", true);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 4, consts: [[3, "notifications", "position", "onNotificationClose", 4, "ngIf"], [3, "notifications", "position", "onNotificationClose"]], template: function FabricNotificationsOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FabricNotificationsOverlayComponent_gui_notifications_container_0_Template, 1, 2, "gui-notifications-container", 0);
        i0.ɵɵtemplate(1, FabricNotificationsOverlayComponent_gui_notifications_container_1_Template, 1, 2, "gui-notifications-container", 0);
        i0.ɵɵtemplate(2, FabricNotificationsOverlayComponent_gui_notifications_container_2_Template, 1, 2, "gui-notifications-container", 0);
        i0.ɵɵtemplate(3, FabricNotificationsOverlayComponent_gui_notifications_container_3_Template, 1, 2, "gui-notifications-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isContainerNotEmpty(ctx.notificationsTopRight));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isContainerNotEmpty(ctx.notificationsTopLeft));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isContainerNotEmpty(ctx.notificationsBottomRight));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isContainerNotEmpty(ctx.notificationsBottomLeft));
    } }, directives: [i2.NgIf, i3.FabricNotificationsContainerComponent], styles: [".gui-notifications-overlay{-ms-flex-align:center;align-items:center;font-family:Arial;-ms-flex-pack:center;justify-content:center;max-width:400px;position:fixed;z-index:1000}.gui-notifications-overlay gui-notifications-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:fixed}.gui-notifications-overlay gui-notifications-container.gui-notifications-top-left{left:0;top:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-top-right{right:0;top:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-bottom-left{bottom:0;left:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-bottom-right{bottom:0;right:0}.gui-notifications-overlay .gui-notification{background:#fff;box-shadow:0 3px 6px -4px rgba(0,0,0,.122),0 6px 16px rgba(0,0,0,.078),0 9px 28px 8px rgba(0,0,0,.051);display:block;margin:16px;padding:32px;position:relative}.gui-notifications-overlay .gui-notification.gui-notification-right-side{-webkit-animation:loadNotificationRightSide .1s forwards;animation:loadNotificationRightSide .1s forwards}.gui-notifications-overlay .gui-notification.gui-notification-left-side{-webkit-animation:loadNotificationLeftSide .1s forwards;animation:loadNotificationLeftSide .1s forwards}@-webkit-keyframes loadNotificationRightSide{0%{transform:translate(50%)}to{transform:translate(0)}}@keyframes loadNotificationRightSide{0%{transform:translate(50%)}to{transform:translate(0)}}@-webkit-keyframes loadNotificationLeftSide{0%{transform:translate(-50%)}to{transform:translate(0)}}@keyframes loadNotificationLeftSide{0%{transform:translate(-50%)}to{transform:translate(0)}}.gui-notifications-overlay .gui-notification.gui-notification-active.gui-notification-right-side{-webkit-animation:closeNotificationRightSide .2s forwards;animation:closeNotificationRightSide .2s forwards}@-webkit-keyframes closeNotificationRightSide{0%{transform:translate(0)}to{transform:translate(100%)}}@keyframes closeNotificationRightSide{0%{transform:translate(0)}to{transform:translate(100%)}}.gui-notifications-overlay .gui-notification.gui-notification-active.gui-notification-left-side{-webkit-animation:closeNotificationLeftSide .2s forwards;animation:closeNotificationLeftSide .2s forwards}@-webkit-keyframes closeNotificationLeftSide{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes closeNotificationLeftSide{0%{transform:translate(0)}to{transform:translate(-100%)}}\n", ".gui-dark .gui-notification{background:#424242}\n", ".gui-material .gui-notification{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricNotificationsOverlayComponent, [{
        type: Component,
        args: [{
                templateUrl: 'fabric-notifications-overlay.component.html',
                styleUrls: [
                    './fabric-notification.ngx.scss',
                    './themes/fabric-notification.dark.ngx.scss',
                    './themes/fabric-notification.material.ngx.scss'
                ],
                host: {
                    '[class.gui-notifications-overlay]': 'true'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ComponentFactoryResolver }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.FabricModalThemeService }, { type: i4.Theme, decorators: [{
                type: Inject,
                args: [themeToken]
            }] }, { type: i5.FabricNotificationService, decorators: [{
                type: Inject,
                args: [forwardRef(() => FabricNotificationService)]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbnMtb3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvbm90aWZpY2F0aW9uL2ZhYnJpYy1ub3RpZmljYXRpb25zLW92ZXJsYXkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL25vdGlmaWNhdGlvbi9mYWJyaWMtbm90aWZpY2F0aW9ucy1vdmVybGF5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFFdkIsU0FBUyxFQUdULFVBQVUsRUFDVixNQUFNLEVBRU4saUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7Ozs7O0lDakJuRixzREFHMEQ7SUFIN0Isb1NBQWtEO0lBR3JCLGlCQUE4Qjs7O0lBRGhGLDREQUF1Qyx5REFBQTs7OztJQUcvQyxzREFHeUQ7SUFINUIsb1NBQWtEO0lBR3RCLGlCQUE4Qjs7O0lBRC9FLDJEQUFzQyx3REFBQTs7OztJQUc5QyxzREFHNkQ7SUFIaEMsb1NBQWtEO0lBR2xCLGlCQUE4Qjs7O0lBRG5GLCtEQUEwQyw0REFBQTs7OztJQUdsRCxzREFHNEQ7SUFIL0IsdVNBQWtEO0lBR25CLGlCQUE4Qjs7O0lBRGxGLDhEQUF5QywyREFBQTs7QURpQmpELE1BQU0sT0FBTyxtQ0FBb0MsU0FBUSxxQkFBcUI7SUFZN0Us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RTNGLG9JQUcwRjs7UUFqQmpGLHlFQUFnRDtRQUtoRCxlQUErQztRQUEvQyx3RUFBK0M7UUFLL0MsZUFBbUQ7UUFBbkQsNEVBQW1EO1FBS25ELGVBQWtEO1FBQWxELDJFQUFrRDs7dUZEa0I5QyxtQ0FBbUM7Y0FiL0MsU0FBUztlQUFDO2dCQUNWLFdBQVcsRUFBRSw2Q0FBNkM7Z0JBQzFELFNBQVMsRUFBRTtvQkFDVixnQ0FBZ0M7b0JBQ2hDLDRDQUE0QztvQkFDNUMsZ0RBQWdEO2lCQUNoRDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0wsbUNBQW1DLEVBQUUsTUFBTTtpQkFDM0M7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOztzQkFrQkksTUFBTTt1QkFBQyxVQUFVOztzQkFDakIsTUFBTTt1QkFBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRFbGVtZW50UmVmLFxuXHRmb3J3YXJkUmVmLFxuXHRJbmplY3QsXG5cdFJlbmRlcmVyMixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyB0aGVtZVRva2VuIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lLnRva2VuJztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbi1wb3NpdGlvbic7XG5pbXBvcnQgeyBGYWJyaWNUaGVtZWRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvZmFicmljLXRoZW1lZC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljTW9kYWxUaGVtZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90aGVtZXMvZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZVVybDogJ2ZhYnJpYy1ub3RpZmljYXRpb25zLW92ZXJsYXkuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9mYWJyaWMtbm90aWZpY2F0aW9uLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZmFicmljLW5vdGlmaWNhdGlvbi5kYXJrLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZmFicmljLW5vdGlmaWNhdGlvbi5tYXRlcmlhbC5uZ3guc2Nzcydcblx0XSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLW5vdGlmaWNhdGlvbnMtb3ZlcmxheV0nOiAndHJ1ZSdcblx0fSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljTm90aWZpY2F0aW9uc092ZXJsYXlDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNUaGVtZWRDb21wb25lbnQge1xuXG5cdG5vdGlmaWNhdGlvbnNUb3BSaWdodDogQXJyYXk8RmFicmljTm90aWZpY2F0aW9uPiA9IFtdO1xuXG5cdG5vdGlmaWNhdGlvbnNUb3BMZWZ0OiBBcnJheTxGYWJyaWNOb3RpZmljYXRpb24+ID0gW107XG5cblx0bm90aWZpY2F0aW9uc0JvdHRvbVJpZ2h0OiBBcnJheTxGYWJyaWNOb3RpZmljYXRpb24+ID0gW107XG5cblx0bm90aWZpY2F0aW9uc0JvdHRvbUxlZnQ6IEFycmF5PEZhYnJpY05vdGlmaWNhdGlvbj4gPSBbXTtcblxuXHRGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbiA9IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRyZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHR0aGVtZVNlcnZpY2U6IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlLFxuXHRcdFx0XHRASW5qZWN0KHRoZW1lVG9rZW4pIHRoZW1lOiBUaGVtZSxcblx0XHRcdFx0QEluamVjdChmb3J3YXJkUmVmKCgpID0+IEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2UpKSBwcml2YXRlIHJlYWRvbmx5IG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBGYWJyaWNOb3RpZmljYXRpb25TZXJ2aWNlKSB7XG5cdFx0c3VwZXIoZWxSZWYsIHJlbmRlcmVyLCB0aGVtZVNlcnZpY2UpO1xuXHR9XG5cblx0cmVtb3ZlTm90aWZpY2F0aW9uKHNlbGVjdGVkTm90aWZpY2F0aW9uOiBGYWJyaWNOb3RpZmljYXRpb24pOiB2b2lkIHtcblxuXHRcdHN3aXRjaCAoc2VsZWN0ZWROb3RpZmljYXRpb24ucG9zaXRpb24pIHtcblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX1JJR0hUOlxuXHRcdFx0XHR0aGlzLm5vdGlmaWNhdGlvbnNUb3BSaWdodCA9IHRoaXMubm90aWZpY2F0aW9uc1RvcFJpZ2h0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLmZpbHRlcigobm90aWZpY2F0aW9uOiBGYWJyaWNOb3RpZmljYXRpb24pID0+IG5vdGlmaWNhdGlvbi5pbmRleCAhPT0gc2VsZWN0ZWROb3RpZmljYXRpb24uaW5kZXgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5UT1BfTEVGVDpcblx0XHRcdFx0dGhpcy5ub3RpZmljYXRpb25zVG9wTGVmdCA9IHRoaXMubm90aWZpY2F0aW9uc1RvcExlZnRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5maWx0ZXIoKG5vdGlmaWNhdGlvbjogRmFicmljTm90aWZpY2F0aW9uKSA9PiBub3RpZmljYXRpb24uaW5kZXggIT09IHNlbGVjdGVkTm90aWZpY2F0aW9uLmluZGV4KTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uQk9UVE9NX1JJR0hUOlxuXHRcdFx0XHR0aGlzLm5vdGlmaWNhdGlvbnNCb3R0b21SaWdodCA9IHRoaXMubm90aWZpY2F0aW9uc0JvdHRvbVJpZ2h0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5maWx0ZXIoKG5vdGlmaWNhdGlvbjogRmFicmljTm90aWZpY2F0aW9uKSA9PiBub3RpZmljYXRpb24uaW5kZXggIT09IHNlbGVjdGVkTm90aWZpY2F0aW9uLmluZGV4KTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uQk9UVE9NX0xFRlQ6XG5cdFx0XHRcdHRoaXMubm90aWZpY2F0aW9uc0JvdHRvbUxlZnQgPSB0aGlzLm5vdGlmaWNhdGlvbnNCb3R0b21MZWZ0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAuZmlsdGVyKChub3RpZmljYXRpb246IEZhYnJpY05vdGlmaWNhdGlvbikgPT4gbm90aWZpY2F0aW9uLmluZGV4ICE9PSBzZWxlY3RlZE5vdGlmaWNhdGlvbi5pbmRleCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0dGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0dGhpcy5jaGVja05vdGlmaWNhdGlvbnNMZW5ndGgoKTtcblx0fVxuXG5cdGRldGVjdENoYW5nZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRjaGVja05vdGlmaWNhdGlvbnNMZW5ndGgoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMubm90aWZpY2F0aW9uc1RvcFJpZ2h0Lmxlbmd0aCA9PT0gMFxuXHRcdFx0JiYgdGhpcy5ub3RpZmljYXRpb25zVG9wTGVmdC5sZW5ndGggPT09IDBcblx0XHRcdCYmIHRoaXMubm90aWZpY2F0aW9uc0JvdHRvbVJpZ2h0Lmxlbmd0aCA9PT0gMFxuXHRcdFx0JiYgdGhpcy5ub3RpZmljYXRpb25zQm90dG9tTGVmdC5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHRpc0NvbnRhaW5lck5vdEVtcHR5KGNvbnRhaW5lcjogQXJyYXk8RmFicmljTm90aWZpY2F0aW9uPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjb250YWluZXIgJiYgY29udGFpbmVyLmxlbmd0aCA+IDA7XG5cdH1cblxufVxuIiwiPGd1aS1ub3RpZmljYXRpb25zLWNvbnRhaW5lciAob25Ob3RpZmljYXRpb25DbG9zZSk9XCJyZW1vdmVOb3RpZmljYXRpb24oJGV2ZW50KVwiXG5cdFx0XHRcdFx0XHRcdCAqbmdJZj1cImlzQ29udGFpbmVyTm90RW1wdHkobm90aWZpY2F0aW9uc1RvcFJpZ2h0KVwiXG5cdFx0XHRcdFx0XHRcdCBbbm90aWZpY2F0aW9uc109XCJub3RpZmljYXRpb25zVG9wUmlnaHRcIlxuXHRcdFx0XHRcdFx0XHQgW3Bvc2l0aW9uXT1cIkZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLlRPUF9SSUdIVFwiPjwvZ3VpLW5vdGlmaWNhdGlvbnMtY29udGFpbmVyPlxuXG48Z3VpLW5vdGlmaWNhdGlvbnMtY29udGFpbmVyIChvbk5vdGlmaWNhdGlvbkNsb3NlKT1cInJlbW92ZU5vdGlmaWNhdGlvbigkZXZlbnQpXCJcblx0XHRcdFx0XHRcdFx0ICpuZ0lmPVwiaXNDb250YWluZXJOb3RFbXB0eShub3RpZmljYXRpb25zVG9wTGVmdClcIlxuXHRcdFx0XHRcdFx0XHQgW25vdGlmaWNhdGlvbnNdPVwibm90aWZpY2F0aW9uc1RvcExlZnRcIlxuXHRcdFx0XHRcdFx0XHQgW3Bvc2l0aW9uXT1cIkZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLlRPUF9MRUZUXCI+PC9ndWktbm90aWZpY2F0aW9ucy1jb250YWluZXI+XG5cbjxndWktbm90aWZpY2F0aW9ucy1jb250YWluZXIgKG9uTm90aWZpY2F0aW9uQ2xvc2UpPVwicmVtb3ZlTm90aWZpY2F0aW9uKCRldmVudClcIlxuXHRcdFx0XHRcdFx0XHQgKm5nSWY9XCJpc0NvbnRhaW5lck5vdEVtcHR5KG5vdGlmaWNhdGlvbnNCb3R0b21SaWdodClcIlxuXHRcdFx0XHRcdFx0XHQgW25vdGlmaWNhdGlvbnNdPVwibm90aWZpY2F0aW9uc0JvdHRvbVJpZ2h0XCJcblx0XHRcdFx0XHRcdFx0IFtwb3NpdGlvbl09XCJGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5CT1RUT01fUklHSFRcIj48L2d1aS1ub3RpZmljYXRpb25zLWNvbnRhaW5lcj5cblxuPGd1aS1ub3RpZmljYXRpb25zLWNvbnRhaW5lciAob25Ob3RpZmljYXRpb25DbG9zZSk9XCJyZW1vdmVOb3RpZmljYXRpb24oJGV2ZW50KVwiXG5cdFx0XHRcdFx0XHRcdCAqbmdJZj1cImlzQ29udGFpbmVyTm90RW1wdHkobm90aWZpY2F0aW9uc0JvdHRvbUxlZnQpXCJcblx0XHRcdFx0XHRcdFx0IFtub3RpZmljYXRpb25zXT1cIm5vdGlmaWNhdGlvbnNCb3R0b21MZWZ0XCJcblx0XHRcdFx0XHRcdFx0IFtwb3NpdGlvbl09XCJGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5CT1RUT01fTEVGVFwiPjwvZ3VpLW5vdGlmaWNhdGlvbnMtY29udGFpbmVyPlxuIl19