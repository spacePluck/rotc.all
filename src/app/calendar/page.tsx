"use client";

import { useState } from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { ko } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Link from "next/link";

const locales = {
  ko: ko,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

type Event = {
  id: number;
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  color?: string;
};

const monthlyEvents: Event[] = [
  {
    id: 1,
    title: "제5,6대 알비연 회장 이취임식",
    start: new Date(2026, 0, 10),
    end: new Date(2026, 0, 10),
    allDay: true,
    color: "#3182f6",
  },
  {
    id: 2,
    title: "학군교 위문",
    start: new Date(2026, 0, 9),
    end: new Date(2026, 0, 9),
    allDay: true,
    color: "#3182f6",
  },
  {
    id: 3,
    title: "집행부 워크샵 (14~20시)",
    start: new Date(2026, 0, 17),
    end: new Date(2026, 0, 17),
    allDay: true,
    color: "#3182f6",
  },
  {
    id: 4,
    title: "자문단, 고문단, 산하조직 간담회(순회)",
    start: new Date(2026, 1, 15),
    end: new Date(2026, 1, 15),
    allDay: true,
    color: "#00c471",
  },
  {
    id: 5,
    title: "알비연 봉사단 창단식",
    start: new Date(2026, 2, 8),
    end: new Date(2026, 2, 8),
    allDay: true,
    color: "#00c471",
  },
  {
    id: 6,
    title: "세미나(법률, 노무, 세무)",
    start: new Date(2026, 2, 22),
    end: new Date(2026, 2, 22),
    allDay: true,
    color: "#00c471",
  },
  {
    id: 7,
    title: "창단 10주년기념 제2회 체육대회",
    start: new Date(2026, 3, 12),
    end: new Date(2026, 3, 12),
    allDay: true,
    color: "#f97316",
  },
  {
    id: 8,
    title: "봉사활동(꿈나무마을 파란꿈터)",
    start: new Date(2026, 4, 10),
    end: new Date(2026, 4, 10),
    allDay: true,
    color: "#f97316",
  },
  {
    id: 9,
    title: "힐링데이 영화(연극)단체관람",
    start: new Date(2026, 5, 14),
    end: new Date(2026, 5, 14),
    allDay: true,
    color: "#f97316",
  },
  {
    id: 10,
    title: "권역별 간담회(순회)",
    start: new Date(2026, 6, 12),
    end: new Date(2026, 6, 12),
    allDay: true,
    color: "#8b5cf6",
  },
  {
    id: 11,
    title: "세미나(한약, 치과, 수의사)",
    start: new Date(2026, 7, 9),
    end: new Date(2026, 7, 9),
    allDay: true,
    color: "#8b5cf6",
  },
  {
    id: 12,
    title: "김대호, 장문익, 조우재",
    start: new Date(2026, 7, 23),
    end: new Date(2026, 7, 23),
    allDay: true,
    color: "#8b5cf6",
  },
  {
    id: 13,
    title: "알비연 한마음 산행",
    start: new Date(2026, 8, 20),
    end: new Date(2026, 8, 20),
    allDay: true,
    color: "#8b5cf6",
  },
  {
    id: 14,
    title: "제1회 알비연 회장배 골프, 당구대회",
    start: new Date(2026, 9, 18),
    end: new Date(2026, 9, 18),
    allDay: true,
    color: "#ec4899",
  },
  {
    id: 15,
    title: "제1회 알비연 회장배 풋살, 볼링 대회",
    start: new Date(2026, 10, 15),
    end: new Date(2026, 10, 15),
    allDay: true,
    color: "#ec4899",
  },
  {
    id: 16,
    title: "알비연 제1회 스키교실",
    start: new Date(2026, 11, 13),
    end: new Date(2026, 11, 13),
    allDay: true,
    color: "#ec4899",
  },
];

const monthlyData = [
  {
    month: "1월",
    events: [
      "제5,6대 알비연 회장 이취임식 (금)",
      "학군교 위문 1/9(금)",
      "집행부 워크샵 17(토) 14~20시",
    ],
    color: "#3182f6",
    bgColor: "#e8f3ff",
  },
  {
    month: "2월",
    events: ["자문단, 고문단, 산하조직 간담회(순회)"],
    color: "#00c471",
    bgColor: "#e6f9f1",
  },
  {
    month: "3월",
    events: ["알비연 봉사단 창단식", "세미나(법률, 노무, 세무)"],
    color: "#00c471",
    bgColor: "#e6f9f1",
  },
  {
    month: "4월",
    events: ["창단 10주년기념 제2회 체육대회"],
    color: "#f97316",
    bgColor: "#fff4ed",
  },
  {
    month: "5월",
    events: ["봉사활동(꿈나무마을 파란꿈터)"],
    color: "#f97316",
    bgColor: "#fff4ed",
  },
  {
    month: "6월",
    events: ["힐링데이 영화(연극)단체관람"],
    color: "#f97316",
    bgColor: "#fff4ed",
  },
  {
    month: "7월",
    events: ["권역별 간담회(순회)"],
    color: "#8b5cf6",
    bgColor: "#f3f0ff",
  },
  {
    month: "8월",
    events: ["세미나(한약, 치과, 수의사)", "김대호, 장문익, 조우재"],
    color: "#8b5cf6",
    bgColor: "#f3f0ff",
  },
  {
    month: "9월",
    events: ["알비연 한마음 산행"],
    color: "#8b5cf6",
    bgColor: "#f3f0ff",
  },
  {
    month: "10월",
    events: ["제1회 알비연 회장배 골프, 당구대회"],
    color: "#ec4899",
    bgColor: "#fdf2f8",
  },
  {
    month: "11월",
    events: ["제1회 알비연 회장배 풋살, 볼링 대회"],
    color: "#ec4899",
    bgColor: "#fdf2f8",
  },
  {
    month: "12월",
    events: ["알비연 제1회 스키교실"],
    color: "#ec4899",
    bgColor: "#fdf2f8",
  },
];

export default function CalendarPage() {
  const [view, setView] = useState<"calendar" | "grid">("grid");
  const [date, setDate] = useState(new Date(2026, 0, 1));

  const eventStyleGetter = (event: Event) => {
    return {
      style: {
        backgroundColor: event.color || "#3182f6",
        borderRadius: "6px",
        opacity: 0.95,
        color: "white",
        border: "none",
        display: "block",
        fontSize: "12px",
      },
    };
  };

  const messages = {
    today: "오늘",
    previous: "이전",
    next: "다음",
    month: "월",
    week: "주",
    day: "일",
    agenda: "일정",
    date: "날짜",
    time: "시간",
    event: "행사",
    noEventsInRange: "이 기간에 행사가 없습니다.",
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-5 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
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
              <span className="text-sm font-medium">홈</span>
            </Link>
            <h1 className="text-lg font-bold text-gray-900">월별 행사</h1>
            <Link
              href="/organization"
              className="flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors"
            >
              <span className="text-sm font-medium">조직도</span>
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
        <div className="text-center mb-6">
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm font-semibold text-[#3182f6]">2026</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">연간 행사 일정</h2>
          <p className="text-gray-500 mt-1">
            대한민국ROTC 비즈니스연합회
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setView("grid")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                view === "grid"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              월별 보기
            </button>
            <button
              onClick={() => setView("calendar")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                view === "calendar"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              캘린더
            </button>
          </div>
        </div>

        {/* Calendar Styles */}
        <style jsx global>{`
          .rbc-calendar {
            font-family: inherit;
            padding: 16px;
          }
          .rbc-header {
            padding: 12px 8px;
            font-weight: 600;
            font-size: 13px;
            color: #6b7280;
            background-color: #f9fafb;
            border-bottom: 1px solid #f3f4f6 !important;
          }
          .rbc-today {
            background-color: #e8f3ff !important;
          }
          .rbc-event {
            font-size: 11px;
            padding: 3px 6px;
            font-weight: 500;
          }
          .rbc-toolbar {
            padding: 0 0 16px 0;
            gap: 12px;
          }
          .rbc-toolbar button {
            color: #6b7280;
            border: 1px solid #e5e7eb;
            padding: 8px 16px;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s;
          }
          .rbc-toolbar button:hover {
            background-color: #f3f4f6;
            border-color: #d1d5db;
          }
          .rbc-toolbar button.rbc-active {
            background-color: #3182f6;
            color: white;
            border-color: #3182f6;
          }
          .rbc-month-view {
            border: 1px solid #f3f4f6;
            border-radius: 12px;
            overflow: hidden;
          }
          .rbc-date-cell {
            padding: 8px;
            text-align: right;
            font-size: 13px;
            color: #374151;
          }
          .rbc-off-range-bg {
            background-color: #fafafa;
          }
          .rbc-off-range {
            color: #d1d5db;
          }
          .rbc-day-bg + .rbc-day-bg,
          .rbc-month-row + .rbc-month-row {
            border-color: #f3f4f6;
          }
          .rbc-header + .rbc-header {
            border-color: #f3f4f6;
          }
        `}</style>

        {/* Content */}
        {view === "grid" ? (
          /* Monthly Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {monthlyData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="py-3 px-4 flex items-center justify-between"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <span
                    className="text-xl font-bold"
                    style={{ color: item.color }}
                  >
                    {item.month}
                  </span>
                  <span
                    className="text-xs font-medium px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: item.color,
                      color: "white",
                    }}
                  >
                    {item.events.length}건
                  </span>
                </div>
                <div className="p-4">
                  {item.events.length > 0 ? (
                    <ul className="space-y-2">
                      {item.events.map((event, eventIndex) => (
                        <li
                          key={eventIndex}
                          className="flex items-start gap-3"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-sm text-gray-700 leading-relaxed">
                            {event}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-400 text-center py-2">
                      등록된 행사가 없습니다
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Calendar View */
          <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden">
            <Calendar
              localizer={localizer}
              events={monthlyEvents}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 600 }}
              views={[Views.MONTH, Views.AGENDA]}
              defaultView={Views.MONTH}
              date={date}
              onNavigate={(newDate) => setDate(newDate)}
              eventPropGetter={eventStyleGetter}
              messages={messages}
              popup
              culture="ko"
            />
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#e8f3ff] rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#3182f6]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">16</div>
                <div className="text-xs text-gray-500">총 행사</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#e6f9f1] rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#00c471]"
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
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-xs text-gray-500">진행 월</div>
              </div>
            </div>
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
