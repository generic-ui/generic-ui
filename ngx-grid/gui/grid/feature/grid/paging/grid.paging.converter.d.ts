import { GuiPaging } from '../../../domain-api/grid.api';
import { PagingConfig } from '../../../../../structure/paging/domain-api/paging-config';
export declare class GridPagingConverter {
    convert(guiPaging: GuiPaging): PagingConfig;
    private convertDisplay;
    private convertString;
    private convertEnum;
}
