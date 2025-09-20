import { useQuery } from "@tanstack/react-query";
import healthApi from "@api/services/health";

export const useHealthCheck = () => {
  return useQuery({
    queryKey: ["health"],
    queryFn: healthApi.checkHealth,
    enabled: false, // 버튼 클릭시에만 실행하도록 설정
    retry: false,
  });
};

export default useHealthCheck;
