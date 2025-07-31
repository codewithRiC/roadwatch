// API configuration and base URL
export const API_CONFIG = {
    baseURL: '/project/roadwatch/api', // Use full path with PRE_URL
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
    useDemoMode: false, // Always use real backend data
};

// API endpoints
export const API_ENDPOINTS = {
    potholes: '/potholes/',
    potholeDetail: (id: number) => `/potholes/${id}/`,
    potholesInArea: '/potholes/in_area/',
    potholesStats: '/potholes/stats/',
    updateStatus: (id: number) => `/potholes/${id}/update_status/`,
} as const;
