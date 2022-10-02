export const Button = ({ text, onClick }) => {
    return (
        <>
            <button
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all bg-gradient-to-r from-[#8456EC] to-[#E87BF8] hover:from-[#E87BF8] hover:to-[#8456EC]`}
                onClick={onClick}
            >
                {text}
            </button>
        </>
    )
}