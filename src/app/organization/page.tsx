"use client";

import Link from "next/link";

type Member = {
  role: string;
  name: string;
  gen: string;
  phone: string;
};

type DepartmentData = {
  title: string;
  members: Member[];
  color: string;
  bgColor: string;
};

function PhoneLink({ phone, className = "" }: { phone: string; className?: string }) {
  return (
    <a
      href={`tel:${phone}`}
      className={`inline-flex items-center gap-1 text-[#3182f6] hover:underline ${className}`}
    >
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <span className="text-xs">{phone}</span>
    </a>
  );
}

function MemberCard({
  title,
  members,
  color,
  bgColor,
}: DepartmentData) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1">
      <div
        className="py-3 px-4 flex items-center gap-3"
        style={{ backgroundColor: bgColor }}
      >
        <span className="font-bold" style={{ color }}>
          {title}
        </span>
      </div>
      <div className="p-4">
        <ul className="space-y-3">
          {members.map((member, idx) => (
            <li key={idx} className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: color }}
                />
                <span className="font-medium">{member.role}</span>
                <span className="text-gray-500">#{member.gen} {member.name}</span>
              </div>
              <div className="pl-3.5">
                <PhoneLink phone={member.phone} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function OrganizationPage() {
  const executives = {
    president: { name: "옥광일", gen: "39", phone: "010-3109-2636" },
    seniorVP1: { name: "이기원", gen: "40", phone: "010-8455-3785" },
    seniorVP2: { name: "한승환", gen: "42", phone: "010-9999-7089" },
    secretary: { name: "최영재", gen: "44", phone: "010-8697-4763" },
    viceSecretary: { name: "김승균", gen: "46", phone: "010-8372-1076" },
  };

  const departments: DepartmentData[] = [
    {
      title: "재정",
      members: [
        { role: "부회장", name: "김종만", gen: "42", phone: "010-9353-4876" },
        { role: "위원장", name: "정은빈", gen: "56", phone: "010-7750-6190" },
      ],
      color: "#3182f6",
      bgColor: "#e8f3ff",
    },
    {
      title: "사무",
      members: [
        { role: "부회장", name: "정택범", gen: "47", phone: "010-7307-5505" },
        { role: "위원장", name: "최희철", gen: "49", phone: "010-3491-0114" },
        { role: "위원장", name: "김태형", gen: "55", phone: "010-4735-4605" },
      ],
      color: "#00c471",
      bgColor: "#e6f9f1",
    },
    {
      title: "홍보",
      members: [
        { role: "부회장", name: "박철우", gen: "42", phone: "010-2010-3503" },
        { role: "위원장", name: "심민기", gen: "49", phone: "010-9892-5926" },
        { role: "위원장", name: "김종대", gen: "51", phone: "010-7470-0406" },
        { role: "위원장", name: "심재형", gen: "56", phone: "010-7791-6041" },
      ],
      color: "#f97316",
      bgColor: "#fff4ed",
    },
    {
      title: "사업",
      members: [
        { role: "부회장", name: "신영진", gen: "43", phone: "010-7936-4616" },
        { role: "위원장", name: "박영훈", gen: "43", phone: "010-3187-4053" },
        { role: "위원장", name: "김대한", gen: "50", phone: "010-2838-9029" },
        { role: "위원장", name: "김재현", gen: "52", phone: "010-7731-1288" },
        { role: "위원장", name: "이국호", gen: "53", phone: "010-5461-9038" },
      ],
      color: "#8b5cf6",
      bgColor: "#f3f0ff",
    },
    {
      title: "청년",
      members: [
        { role: "부회장", name: "하주형", gen: "44", phone: "010-4738-2636" },
        { role: "위원장", name: "김호수", gen: "48", phone: "010-6745-5569" },
        { role: "위원장", name: "이용권", gen: "49", phone: "010-2318-2348" },
        { role: "위원장", name: "최재현", gen: "55", phone: "010-7155-6452" },
        { role: "위원장", name: "여준호", gen: "57", phone: "010-3765-4467" },
      ],
      color: "#ec4899",
      bgColor: "#fdf2f8",
    },
    {
      title: "여성위원회",
      members: [
        { role: "위원장", name: "이정은", gen: "56", phone: "010-4447-3546" },
        { role: "위원장", name: "오현아", gen: "58", phone: "010-8993-5515" },
      ],
      color: "#06b6d4",
      bgColor: "#ecfeff",
    },
  ];

  const subOrgs = [
    { title: "알비연FC", role: "회장", name: "김호수", gen: "48", phone: "010-6745-5569", color: "#3182f6" },
    { title: "알비연GF", role: "회장", name: "최인욱", gen: "38", phone: "010-8506-2768", color: "#00c471" },
    { title: "영 알비연", role: "회장", name: "김종대", gen: "51", phone: "010-7470-0406", color: "#f97316" },
    { title: "알비연봉사단", role: "사무총장", name: "한광길", gen: "45", phone: "010-7411-1001", color: "#8b5cf6" },
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-5 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/calendar"
              className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="text-sm font-medium">행사</span>
            </Link>
            <h1 className="text-lg font-bold text-gray-900">조직도</h1>
            <Link
              href="/"
              className="flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors"
            >
              <span className="text-sm font-medium">홈</span>
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-5 py-6">
        {/* Title Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8f3ff] rounded-full mb-3">
            <svg
              className="w-4 h-4 text-[#3182f6]"
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
            <span className="text-sm font-semibold text-[#3182f6]">2026</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">임원 조직도</h2>
          <p className="text-gray-500 mt-1">대한민국ROTC 비즈니스연합회</p>
        </div>

        {/* 회장 */}
        <div className="flex justify-center mb-6">
          <a
            href={`tel:${executives.president.phone}`}
            className="bg-gradient-to-r from-[#3182f6] to-[#1e6ae1] text-white rounded-2xl px-8 py-5 text-center shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all"
          >
            <div className="text-sm opacity-80 mb-1">회장</div>
            <div className="text-xl font-bold">#{executives.president.gen} {executives.president.name}</div>
            <div className="flex items-center justify-center gap-1 mt-2 text-sm opacity-90">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {executives.president.phone}
            </div>
          </a>
        </div>

        {/* 연결선 */}
        <div className="flex justify-center mb-6">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* 임원진 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] text-center">
            <div className="w-10 h-10 bg-[#e8f3ff] rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-[#3182f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <div className="text-xs text-gray-500">역대회장단</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] text-center">
            <div className="w-10 h-10 bg-[#fef3c7] rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-xs text-gray-500">감사</div>
            <div className="text-sm font-medium text-gray-900">#38 유재현</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] text-center">
            <div className="w-10 h-10 bg-[#f3f0ff] rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-[#8b5cf6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-xs text-gray-500">고문단</div>
            <div className="text-sm font-medium text-gray-900">#38 장문익</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] text-center">
            <div className="w-10 h-10 bg-[#e6f9f1] rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-[#00c471]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="text-xs text-gray-500">자문단</div>
            <div className="text-sm font-medium text-gray-900">#39 정성호</div>
          </div>
        </div>

        {/* 집행부 */}
        <div className="bg-white rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] mb-6">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3182f6] to-[#1e6ae1] rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-gray-900">집행위원회</div>
              <div className="text-xs text-gray-500">Executive Committee</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-[#f7f8fa] rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#3182f6] rounded-lg flex items-center justify-center text-white text-xs font-bold">수</div>
                  <span className="text-sm font-medium text-gray-700">수석 부회장</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pl-11">
                <a href={`tel:${executives.seniorVP1.phone}`} className="flex items-center gap-2 text-sm hover:bg-white px-2 py-1 rounded-lg transition-colors">
                  <span className="text-gray-900">#{executives.seniorVP1.gen} {executives.seniorVP1.name}</span>
                  <span className="text-[#3182f6] text-xs flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {executives.seniorVP1.phone}
                  </span>
                </a>
                <a href={`tel:${executives.seniorVP2.phone}`} className="flex items-center gap-2 text-sm hover:bg-white px-2 py-1 rounded-lg transition-colors">
                  <span className="text-gray-900">#{executives.seniorVP2.gen} {executives.seniorVP2.name}</span>
                  <span className="text-[#3182f6] text-xs flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {executives.seniorVP2.phone}
                  </span>
                </a>
              </div>
            </div>
            <a href={`tel:${executives.secretary.phone}`} className="flex items-center justify-between p-3 bg-[#f7f8fa] rounded-xl hover:bg-[#f0f1f3] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1e6ae1] rounded-lg flex items-center justify-center text-white text-xs font-bold">총</div>
                <span className="text-sm font-medium text-gray-700">사무총장</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-900">#{executives.secretary.gen} {executives.secretary.name}</span>
                <span className="text-[#3182f6] text-xs flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {executives.secretary.phone}
                </span>
              </div>
            </a>
            <a href={`tel:${executives.viceSecretary.phone}`} className="flex items-center justify-between p-3 bg-[#f7f8fa] rounded-xl hover:bg-[#f0f1f3] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#4a90d9] rounded-lg flex items-center justify-center text-white text-xs font-bold">부</div>
                <span className="text-sm font-medium text-gray-700">사무부총장</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-900">#{executives.viceSecretary.gen} {executives.viceSecretary.name}</span>
                <span className="text-[#3182f6] text-xs flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {executives.viceSecretary.phone}
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* 위원회 */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">선거관리위원회</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <span className="text-sm font-medium">징계위원회</span>
            </div>
          </div>
        </div>

        {/* 부서 섹션 */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-500 px-1 mb-4">부서</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {departments.map((dept, idx) => (
              <MemberCard
                key={idx}
                title={dept.title}
                members={dept.members}
                color={dept.color}
                bgColor={dept.bgColor}
              />
            ))}
          </div>
        </div>

        {/* 산하조직 섹션 */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-500 px-1 mb-4">산하조직</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {subOrgs.map((org, idx) => (
              <a
                key={idx}
                href={`tel:${org.phone}`}
                className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: org.color }}
                  >
                    {org.title.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 text-sm">{org.title}</div>
                    <div className="text-xs text-gray-500">{org.role} #{org.gen} {org.name}</div>
                    <div className="text-xs text-[#3182f6] flex items-center gap-1 mt-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {org.phone}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-2xl p-4 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <div className="text-2xl font-bold text-[#3182f6]">6</div>
            <div className="text-xs text-gray-500 mt-1">부서</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <div className="text-2xl font-bold text-[#00c471]">4</div>
            <div className="text-xs text-gray-500 mt-1">산하조직</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <div className="text-2xl font-bold text-[#8b5cf6]">30+</div>
            <div className="text-xs text-gray-500 mt-1">임원</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-5 py-8">
        <div className="text-center text-xs text-gray-400">
          <p>대한민국 ROTC 비즈니스연합회</p>
          <p className="mt-1">© 2026 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
