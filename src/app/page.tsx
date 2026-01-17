"use client";

import Link from "next/link";

type SeatProps = {
  label: string;
  isVIP?: boolean;
  rowIndex: number;
};

function Seat({ label, isVIP = false, rowIndex }: SeatProps) {
  return (
    <div
      className={`
        group relative
        flex items-center justify-center
        w-[110px] h-[72px] px-3 py-2
        bg-white rounded-2xl
        text-center cursor-pointer
        transition-all duration-300 ease-out
        hover:scale-105 hover:-translate-y-1
        ${
          isVIP
            ? "shadow-[0_4px_20px_rgba(49,130,246,0.25)] border-2 border-[#3182f6]"
            : "shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
        }
      `}
      style={{
        animationDelay: `${rowIndex * 100}ms`,
      }}
    >
      {isVIP && (
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#3182f6] rounded-full flex items-center justify-center">
          <svg
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      )}
      <span
        className={`
          whitespace-pre-line leading-tight text-sm font-semibold
          ${isVIP ? "text-[#3182f6]" : "text-gray-700"}
        `}
      >
        {label}
      </span>
    </div>
  );
}

function NavCard({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-12 h-12 bg-[#f2f4f6] rounded-xl flex items-center justify-center text-[#3182f6]">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <svg
        className="w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
}

export default function Home() {
  const seatingData = [
    [
      { label: "52기\n53기" },
      { label: "56기" },
      { label: "55기\n56기,58기" },
    ],
    [
      { label: "V01", isVIP: true },
      { label: "V02", isVIP: true },
      { label: "V03", isVIP: true },
    ],
    [
      { label: "44기\n45기" },
      { label: "V04", isVIP: true },
      { label: "48기\n49기" },
    ],
    [
      { label: "40기\n41기" },
      { label: "42기\n43기" },
      { label: "46기\n47기,51기" },
    ],
    [{ label: "36기\n38기" }, { label: "39기" }, { label: "39기" }],
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-5 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3182f6] to-[#1e6ae1] rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-500/25">
                R
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">ROTC 비즈니스연합회</h1>
                <p className="text-xs text-gray-500">5대·6대 회장 이·취임식</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#e8f3ff] text-[#3182f6] text-xs font-semibold rounded-full">
                2026
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-5 py-6">
        {/* Stage Section */}
        <div className="mb-6">
          <div className="bg-gradient-to-r from-[#3182f6] to-[#1e6ae1] text-white text-center py-4 rounded-2xl font-bold text-lg tracking-wider shadow-lg shadow-blue-500/25">
            <div className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              STAGE
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-md bg-white border border-gray-200 shadow-sm"></div>
            <span className="text-sm text-gray-600">일반석</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-md bg-white border-2 border-[#3182f6] shadow-sm"></div>
            <span className="text-sm text-gray-600">VIP석</span>
          </div>
        </div>

        {/* Seating Chart */}
        <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] mb-6">
          <div className="flex flex-col gap-4">
            {seatingData.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex justify-center gap-3"
                style={{
                  animation: "fadeInUp 0.5s ease-out forwards",
                  animationDelay: `${rowIndex * 100}ms`,
                  opacity: 0,
                }}
              >
                {row.map((seat, seatIndex) => (
                  <Seat
                    key={`${rowIndex}-${seatIndex}`}
                    label={seat.label}
                    isVIP={seat.isVIP}
                    rowIndex={rowIndex}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Row Labels */}
          <div className="flex justify-center mt-6 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              좌석을 탭하여 상세 정보를 확인하세요
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-2xl p-4 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <div className="text-2xl font-bold text-[#3182f6]">15</div>
            <div className="text-xs text-gray-500 mt-1">총 좌석</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <div className="text-2xl font-bold text-[#3182f6]">4</div>
            <div className="text-xs text-gray-500 mt-1">VIP석</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <div className="text-2xl font-bold text-[#3182f6]">5</div>
            <div className="text-xs text-gray-500 mt-1">열</div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-500 px-1">바로가기</h2>
          <NavCard
            href="/calendar"
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
            title="월별 행사 일정"
            description="2026년 연간 행사 캘린더"
          />
          <NavCard
            href="/organization"
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            }
            title="조직도"
            description="26년 임원 조직 구성"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-2xl mx-auto px-5 py-8">
        <div className="text-center text-xs text-gray-400">
          <p>대한민국 ROTC 비즈니스연합회</p>
          <p className="mt-1">© 2026 All rights reserved</p>
        </div>
      </footer>

      {/* CSS Animation */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
