import { GuiPaging } from '../../core/api/gui.grid.public-api';
import { PagingConfig } from '../../../../../core/structure/paging/src/api/config/paging-config';
export declare class GuiGridPagingConverter {
    convert(guiPaging: GuiPaging): PagingConfig;
    private convertDisplay;
    private convertString;
    private convertEnum;
}
