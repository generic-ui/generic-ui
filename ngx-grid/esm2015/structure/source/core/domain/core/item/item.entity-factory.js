import { Injectable } from '@angular/core';
import { ItemEntity } from './item.entity';
import { OriginItemEntity } from '../../origin/origin-item-entity';
import * as i0 from "@angular/core";
export class ItemEntityFactory {
    create(source) {
        if (Array.isArray(source)) {
            return this.createEntities(source);
        }
        else {
            return this.createEntity(source);
        }
    }
    createEntities(source) {
        return source.map((source) => this.createEntity(source));
    }
    createEntity(originItem) {
        if (originItem instanceof OriginItemEntity) {
            return new ItemEntity(originItem.sourceItem, originItem.getPosition(), originItem.getId().toString(), originItem.getVersion());
        }
        else {
            return new ItemEntity(originItem, 0);
        }
    }
}
ItemEntityFactory.ɵfac = function ItemEntityFactory_Factory(t) { return new (t || ItemEntityFactory)(); };
ItemEntityFactory.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ItemEntityFactory, factory: ItemEntityFactory.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ItemEntityFactory, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5lbnRpdHktZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL3NvdXJjZS9jb3JlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHktZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBR25FLE1BQU0sT0FBTyxpQkFBaUI7SUFJN0IsTUFBTSxDQUFDLE1BQVc7UUFFakIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO0lBQ0YsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFrQjtRQUNoQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU8sWUFBWSxDQUFDLFVBQWtDO1FBRXRELElBQUksVUFBVSxZQUFZLGdCQUFnQixFQUFFO1lBQzNDLE9BQU8sSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQy9IO2FBQU07WUFDTixPQUFPLElBQUksVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNGLENBQUM7O2tGQXhCVyxpQkFBaUI7dUVBQWpCLGlCQUFpQixXQUFqQixpQkFBaUI7dUZBQWpCLGlCQUFpQjtjQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJdGVtRW50aXR5RmFjdG9yeSB7XG5cblx0Y3JlYXRlKHNvdXJjZTogYW55KTogSXRlbUVudGl0eTtcblx0Y3JlYXRlKHNvdXJjZTogQXJyYXk8YW55Pik6IEFycmF5PEl0ZW1FbnRpdHk+O1xuXHRjcmVhdGUoc291cmNlOiBhbnkpOiBhbnkge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoc291cmNlKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRW50aXRpZXMoc291cmNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRW50aXR5KHNvdXJjZSk7XG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlRW50aXRpZXMoc291cmNlOiBBcnJheTxhbnk+KTogQXJyYXk8SXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiBzb3VyY2UubWFwKChzb3VyY2U6IGFueSkgPT4gdGhpcy5jcmVhdGVFbnRpdHkoc291cmNlKSk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUVudGl0eShvcmlnaW5JdGVtOiBPcmlnaW5JdGVtRW50aXR5IHwgYW55KTogSXRlbUVudGl0eSB7XG5cblx0XHRpZiAob3JpZ2luSXRlbSBpbnN0YW5jZW9mIE9yaWdpbkl0ZW1FbnRpdHkpIHtcblx0XHRcdHJldHVybiBuZXcgSXRlbUVudGl0eShvcmlnaW5JdGVtLnNvdXJjZUl0ZW0sIG9yaWdpbkl0ZW0uZ2V0UG9zaXRpb24oKSwgb3JpZ2luSXRlbS5nZXRJZCgpLnRvU3RyaW5nKCksIG9yaWdpbkl0ZW0uZ2V0VmVyc2lvbigpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG5ldyBJdGVtRW50aXR5KG9yaWdpbkl0ZW0sIDApO1xuXHRcdH1cblx0fVxufVxuIl19