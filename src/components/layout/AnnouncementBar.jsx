import { useCartProgress } from '../../hooks/useCartProgress';
import { formatPrice } from '../../utils/helpers';

const AnnouncementBar = () => {
    const { cartTotal, progress, message, remaining } = useCartProgress();

    if (cartTotal === 0) {
        return null; // Don't show if cart is empty
    }

    return (
        <div className="bg-gray-100 py-3 px-4">
            <div className="container-custom">
                <div className="flex flex-col space-y-2">
                    {/* Progress Message */}
                    <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{message}</span>
                        {remaining > 0 && (
                            <span className="text-accent-pink font-semibold">
                                {formatPrice(remaining)} to go!
                            </span>
                        )}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-accent-pink to-accent-cyan h-full transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementBar;
