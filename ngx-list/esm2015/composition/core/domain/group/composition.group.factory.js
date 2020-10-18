/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '@generic-ui/hermes';
import { Group } from '../../api/group/group';
import { GroupId } from '../../api/group/group.id';
export class CompositionGroupFactory {
    /**
     * @param {?} config
     * @return {?}
     */
    create(config) {
        return new Group(new GroupId(RandomStringGenerator.generate()), config.header, config.width);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZ3JvdXAuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4vZ3JvdXAvY29tcG9zaXRpb24uZ3JvdXAuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUduRCxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUVuQyxNQUFNLENBQUMsTUFBVztRQUNqQixPQUFPLElBQUksS0FBSyxDQUNmLElBQUksT0FBTyxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQzdDLE1BQU0sQ0FBQyxNQUFNLEVBQ2IsTUFBTSxDQUFDLEtBQUssQ0FDWixDQUFDO0lBQ0gsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi9hcGkvZ3JvdXAvZ3JvdXAnO1xuaW1wb3J0IHsgR3JvdXBJZCB9IGZyb20gJy4uLy4uL2FwaS9ncm91cC9ncm91cC5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uR3JvdXBGYWN0b3J5IHtcblxuXHRjcmVhdGUoY29uZmlnOiBhbnkpOiBHcm91cCB7XG5cdFx0cmV0dXJuIG5ldyBHcm91cChcblx0XHRcdG5ldyBHcm91cElkKFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpKSxcblx0XHRcdGNvbmZpZy5oZWFkZXIsXG5cdFx0XHRjb25maWcud2lkdGhcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==