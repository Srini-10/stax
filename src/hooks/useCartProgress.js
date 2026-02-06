import { useSelector } from 'react-redux';
import { selectCartTotal } from '../store/slices/cartSlice';
import { promotionThresholds } from '../data/promotions';
import { getGiftThresholdStatus } from '../utils/helpers';

export const useCartProgress = () => {
    const cartTotal = useSelector(selectCartTotal);

    const progressStatus = getGiftThresholdStatus(cartTotal, promotionThresholds);

    return {
        cartTotal,
        ...progressStatus
    };
};
