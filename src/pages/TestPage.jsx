import { Link } from "react-router-dom";
import { useHealthCheck } from "@hooks/queries/useHealthCheck";
import { useEffect } from "react";

export default function TestPage() {
  const { data: healthStatus, isLoading, error, refetch, isSuccess } = useHealthCheck();

  useEffect(() => {
    if (isSuccess && healthStatus) {
      console.log("Health check successful:", healthStatus);
    }
  }, [isSuccess, healthStatus]);

  useEffect(() => {
    if (error) {
      console.error("Health check error:", error);
    }
  }, [error]);

  const checkHealth = () => {
    refetch();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* 헤더 */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">FastAPI 백엔드 연결 테스트</h1>
          <p className="mt-2 text-sm text-gray-600">백엔드 서버: http://0.0.0.0:8001</p>
        </div>

        {/* 메인 링크 */}
        <div className="mt-6 text-center">
          <Link to="/" className="text-blue-600 hover:text-blue-500 text-sm font-medium">
            ← 메인 페이지로 돌아가기
          </Link>
        </div>

        {/* Health Check 섹션 */}
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Health Check 테스트</h2>

          <div className="space-y-4">
            {/* 버튼 */}
            <div>
              <button
                onClick={checkHealth}
                disabled={isLoading}
                className="w-full sm:w-auto px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "확인 중..." : "Health Check 실행"}
              </button>
            </div>

            {/* 결과 표시 */}
            {healthStatus && (
              <div className="bg-green-50 border border-green-200 rounded-md p-4">
                <h3 className="text-sm font-medium text-green-800">✅ 연결 성공!</h3>
                <div className="mt-2 text-sm text-green-700">
                  <pre className="whitespace-pre-wrap font-mono text-xs">{JSON.stringify(healthStatus, null, 2)}</pre>
                </div>
              </div>
            )}

            {/* 에러 표시 */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <h3 className="text-sm font-medium text-red-800">❌ 연결 실패</h3>
                <p className="mt-2 text-sm text-red-700">{error.message || "Health check failed"}</p>
                <p className="mt-2 text-xs text-red-600">백엔드 서버가 실행 중인지 확인해주세요.</p>
              </div>
            )}
          </div>
        </div>

        {/* API 정보 */}
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">API 엔드포인트 정보</h2>

          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b">
              <span className="text-sm font-medium text-gray-500">Health Check:</span>
              <span className="text-sm text-gray-900 font-mono">GET /health</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-sm font-medium text-gray-500">회원가입:</span>
              <span className="text-sm text-gray-900 font-mono">POST /users</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-sm font-medium text-gray-500">로그인:</span>
              <span className="text-sm text-gray-900 font-mono">POST /login</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-sm font-medium text-gray-500">토큰 갱신:</span>
              <span className="text-sm text-gray-900 font-mono">POST /token/refresh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
