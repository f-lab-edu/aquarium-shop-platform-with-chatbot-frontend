import apiClient from "../client";

// Health check API
export const healthApi = {
  checkHealth: async () => {
    try {
      const response = await apiClient.get("/health");
      return response.data;
    } catch (error) {
      console.error("Health check failed:", error);
      throw error;
    }
  },
};

export default healthApi;
