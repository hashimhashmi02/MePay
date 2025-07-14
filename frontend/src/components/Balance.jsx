export const Balance = ({ value }) => {
    return (
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-lg">💰</span>
                    </div>
                    <div>
                        <div className="text-sm font-medium opacity-90">Available Balance</div>
                        <div className="text-2xl font-bold">
                            ₹{value}
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-xs opacity-75">Updated</div>
                    <div className="text-sm font-medium">Just now</div>
                </div>
            </div>
        </div>
    );
}