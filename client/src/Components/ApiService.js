const checkWalletAddress = async (walletAddress) => {
	try {
		const response = await Axios.get(
			`http://localhost:4000/checkWalletAddress/${walletAddress}`
		);

		// Assuming the server responds with a property named 'status'
		if (response.data.status === "success") {
			// Handle success case
			return "Wallet address is valid";
		} else {
			// Handle other cases, assuming an error message is sent by the server
			return response.data.message || "An error occurred";
		}
	} catch (error) {
		// Handle network or other errors
		console.error("Error:", error.message);
		return "An error occurred";
	}
};
