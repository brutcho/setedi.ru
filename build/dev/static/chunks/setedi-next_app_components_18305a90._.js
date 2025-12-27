(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/setedi-next/app/components/HeroCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/setedi-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/setedi-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/setedi-next/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/setedi-next/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// import videoSrc from "@/public/videos/video.mp4";
const slides = [
    {
        id: 1,
        type: "video",
        content: "/videos/video.mp4",
        text: "SÉTEDI / ЕКАТЕРИНБУРГ",
        position: "right"
    },
    {
        id: 2,
        type: "image",
        content: "/images/banner-2.jpg",
        text: "ТОЧНОСТЬ КАК ФИЛОСОФИЯ",
        position: "left"
    },
    {
        id: 3,
        type: "text",
        content: null,
        text: "MASSAGE IS A SILENT LANGUAGE",
        position: "center"
    }
];
function HeroCarousel() {
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroCarousel.useEffect": ()=>{
            if (isAnimating) return;
            const interval = setInterval({
                "HeroCarousel.useEffect.interval": ()=>{
                    setIsAnimating(true);
                    setCurrentSlide({
                        "HeroCarousel.useEffect.interval": (prev)=>(prev + 1) % slides.length
                    }["HeroCarousel.useEffect.interval"]);
                    // После завершения анимации разрешаем следующее переключение
                    setTimeout({
                        "HeroCarousel.useEffect.interval": ()=>setIsAnimating(false)
                    }["HeroCarousel.useEffect.interval"], 500);
                }
            }["HeroCarousel.useEffect.interval"], slideDuration + animationDuration); // 5.5 секунд = 5 сек просмотр + 0.5 сек анимация
            return ({
                "HeroCarousel.useEffect": ()=>clearInterval(interval)
            })["HeroCarousel.useEffect"];
        }
    }["HeroCarousel.useEffect"], [
        isAnimating
    ]);
    // Увеличь длительность показа слайда
    const slideDuration = 12000; // 5 секунд
    const animationDuration = 500; // 0.5 секунд анимация
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: slides.map((slide, index)=>index === currentSlide && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 0.5
                        },
                        className: "absolute inset-0",
                        children: [
                            slide.type === "video" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                className: "absolute inset-0 w-full h-full object-cover",
                                autoPlay: true,
                                muted: true,
                                loop: true,
                                playsInline: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                    src: slide.content,
                                    type: "video/mp4"
                                }, void 0, false, {
                                    fileName: "[project]/setedi-next/app/components/HeroCarousel.tsx",
                                    lineNumber: 76,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/setedi-next/app/components/HeroCarousel.tsx",
                                lineNumber: 69,
                                columnNumber: 19
                            }, this),
                            slide.type === "image" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 w-full h-full bg-cover bg-center",
                                style: {
                                    backgroundImage: `url(${slide.content})`
                                }
                            }, void 0, false, {
                                fileName: "[project]/setedi-next/app/components/HeroCarousel.tsx",
                                lineNumber: 81,
                                columnNumber: 19
                            }, this),
                            slide.type === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black"
                            }, void 0, false, {
                                fileName: "[project]/setedi-next/app/components/HeroCarousel.tsx",
                                lineNumber: 88,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"
                            }, void 0, false, {
                                fileName: "[project]/setedi-next/app/components/HeroCarousel.tsx",
                                lineNumber: 92,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute inset-0 flex items-center justify-${slide.position} p-4 md:p-12`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        y: 20,
                                        opacity: 0
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.5
                                    },
                                    className: `max-w-[90%] md:max-w-xl ${slide.position === "center" ? "text-center" : ""}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-playfair text-2xl md:text-5xl tracking-wider text-white leading-tight",
                                        children: slide.text
                                    }, void 0, false, {
                                        fileName: "[project]/setedi-next/app/components/HeroCarousel.tsx",
                                        lineNumber: 104,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/setedi-next/app/components/HeroCarousel.tsx",
                                    lineNumber: 98,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/setedi-next/app/components/HeroCarousel.tsx",
                                lineNumber: 95,
                                columnNumber: 17
                            }, this)
                        ]
                    }, slide.id, true, {
                        fileName: "[project]/setedi-next/app/components/HeroCarousel.tsx",
                        lineNumber: 59,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/setedi-next/app/components/HeroCarousel.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3",
                children: slides.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentSlide(idx),
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-2 h-2 rounded-full transition-all ${idx === currentSlide ? "bg-lavender scale-125" : "bg-white/30"}`
                            }, void 0, false, {
                                fileName: "[project]/setedi-next/app/components/HeroCarousel.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs tracking-wider opacity-0 hover:opacity-100 transition-opacity",
                                children: idx + 1
                            }, void 0, false, {
                                fileName: "[project]/setedi-next/app/components/HeroCarousel.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/setedi-next/app/components/HeroCarousel.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/setedi-next/app/components/HeroCarousel.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/setedi-next/app/components/HeroCarousel.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(HeroCarousel, "xlDmHjKk9miiRtAoVUS0dV03qY4=");
_c = HeroCarousel;
var _c;
__turbopack_context__.k.register(_c, "HeroCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/setedi-next/app/components/MastersGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MastersGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/setedi-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/setedi-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/setedi-next/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const masters = [
    {
        id: 1,
        name: "Артём",
        experience: "12 ЛЕТ",
        specialization: [
            "КЛАССИЧЕСКИЙ МАССАЖ",
            "РЕЛАКС ТЕРАПИЯ"
        ],
        image: "/images/team/master1.png"
    },
    {
        id: 2,
        name: "Сергей",
        experience: "8 ЛЕТ",
        specialization: [
            "СПОРТИВНЫЙ МАССАЖ",
            "КРАНИОСАКРАЛЬНАЯ"
        ],
        image: "/images/team/master2.png"
    }
];
function MastersGrid() {
    _s();
    const [hoveredId, setHoveredId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-px bg-gradient-to-r from-transparent to-gray-600"
                            }, void 0, false, {
                                fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-playfair text-4xl tracking-widest",
                                children: "НАШИ МАСТЕРА"
                            }, void 0, false, {
                                fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-px bg-gradient-to-l from-transparent to-gray-600"
                            }, void 0, false, {
                                fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                    children: masters.map((master)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            onMouseEnter: ()=>setHoveredId(master.id),
                            onMouseLeave: ()=>setHoveredId(null),
                            className: "relative aspect-[3/4] bg-gradient-to-b from-[#111] to-[#0a0a0a] overflow-hidden group cursor-pointer",
                            whileHover: {
                                y: -10
                            },
                            transition: {
                                duration: 0.3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: master.image,
                                            alt: master.name,
                                            className: "w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex flex-col px-8 pt-10 z-20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-playfair text-2xl tracking-wider mb-2 text-white",
                                                    children: master.name
                                                }, void 0, false, {
                                                    fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gradient-amber text-sm tracking-widest",
                                                        children: master.experience
                                                    }, void 0, false, {
                                                        fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: master.specialization.map((spec, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-200 text-sm tracking-widest",
                                                            children: spec
                                                        }, idx, false, {
                                                            fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: 20
                                            },
                                            animate: {
                                                opacity: hoveredId === master.id ? 1 : 0,
                                                x: hoveredId === master.id ? 0 : 20
                                            },
                                            className: "mt-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lavender text-sm tracking-widest inline-flex items-center gap-2",
                                                children: "подробнее →"
                                            }, void 0, false, {
                                                fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                hoveredId === master.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    className: "absolute inset-0 border border-lavender/30 border-glow z-30"
                                }, void 0, false, {
                                    fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, master.id, true, {
                            fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/setedi-next/app/components/MastersGrid.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(MastersGrid, "W+Gi/GY1c+T76G87axG09SVXkEc=");
_c = MastersGrid;
var _c;
__turbopack_context__.k.register(_c, "MastersGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/setedi-next/app/components/LocationMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocationMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/setedi-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/setedi-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// app/components/LocationMap.tsx
"use client";
;
function LocationMap() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocationMap.useEffect": ()=>{
            // Загрузка API Яндекс.Карт
            const script = document.createElement("script");
            script.src = "https://api-maps.yandex.ru/2.1/?apikey=c529953b-e5e4-4aee-9a07-bfe1cd426796&lang=ru_RU";
            script.async = true;
            script.onload = ({
                "LocationMap.useEffect": ()=>{
                    window.ymaps.ready(initMap);
                }
            })["LocationMap.useEffect"];
            document.head.appendChild(script);
            return ({
                "LocationMap.useEffect": ()=>{
                    document.head.removeChild(script);
                }
            })["LocationMap.useEffect"];
        }
    }["LocationMap.useEffect"], []);
    const initMap = ()=>{
        const map = new window.ymaps.Map("map", {
            center: [
                56.833211,
                60.643158
            ],
            zoom: 17,
            controls: [
                "zoomControl",
                "fullscreenControl"
            ]
        });
        // Стилизация карты (темная тема)
        map.setType("yandex#darkMap");
        // Кастомный маркер
        const placemark = new window.ymaps.Placemark([
            56.833211,
            60.643158
        ], {
            hintContent: "Sétedi | Массажный салон",
            balloonContent: `
          <div style="padding: 12px; color: white;">
            <strong style="color: #7b52b9;">SÉTEDI</strong><br/>
            Отель Freedom<br/>
            ул. Комвузовская, 21В
          </div>
        `
        }, {
            iconLayout: "default#image",
            iconImageHref: "/images/map-marker.svg",
            iconImageSize: [
                48,
                48
            ],
            iconImageOffset: [
                -24,
                -48
            ]
        });
        map.geoObjects.add(placemark);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 px-6 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black"
            }, void 0, false, {
                fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -inset-1 bg-gradient-to-r from-lavender to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"
                                            }, void 0, false, {
                                                fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative px-8 py-3 bg-black rounded-full border border-lavender/30",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lavender tracking-widest text-sm font-medium",
                                                    children: "ЕКАТЕРИНБУРГ"
                                                }, void 0, false, {
                                                    fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-playfair text-4xl md:text-5xl tracking-wide",
                                    children: [
                                        "КАК НАС",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lavender",
                                            children: "НАЙТИ"
                                        }, void 0, false, {
                                            fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 max-w-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300 text-lg leading-relaxed tracking-wide",
                                            children: "Sétedi расположен в отеле Freedom — месте, где архитектурный минимализм встречается с тишиной. Это не просто адрес, а сознательный выбор удаленности от суеты."
                                        }, void 0, false, {
                                            fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 w-6 h-6 rounded-full bg-lavender/20 flex items-center justify-center flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2 h-2 rounded-full bg-lavender"
                                                            }, void 0, false, {
                                                                fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-white font-medium tracking-wider mb-1",
                                                                    children: "ОТЕЛЬ FREEDOM"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                                                    lineNumber: 107,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 text-sm tracking-wider",
                                                                    children: [
                                                                        "ул. Комвузовская, 21В",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                            fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                                                            lineNumber: 112,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        "Вход отдельный, цокольный этаж"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                                                    lineNumber: 110,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 w-6 h-6 rounded-full bg-lavender/20 flex items-center justify-center flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2 h-2 rounded-full bg-lavender"
                                                            }, void 0, false, {
                                                                fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-white font-medium tracking-wider mb-1",
                                                                    children: "ВРЕМЯ РАБОТЫ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                                                    lineNumber: 123,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 text-sm tracking-wider",
                                                                    children: [
                                                                        "Ежедневно 10:00—22:00",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                            fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                                                            lineNumber: 128,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        "Предварительная запись"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                                                    lineNumber: 126,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://yandex.ru/maps/?pt=60.643158,56.833211&z=17&l=map",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center gap-3 px-6 py-3 border border-lavender/50 rounded-full hover:bg-lavender/10 transition-all group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lavender tracking-widest text-sm",
                                                    children: "ПОСТРОИТЬ МАРШРУТ"
                                                }, void 0, false, {
                                                    fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lavender group-hover:translate-x-1 transition-transform",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border border-lavender/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        src: "https://yandex.ru/map-widget/v1/?ll=60.665784,56.855535&z=17&l=map&pt=60.665784,56.855535,pm2vvl",
                                        width: "100%",
                                        height: "100%",
                                        frameBorder: "0",
                                        allowFullScreen: true,
                                        style: {
                                            border: 0,
                                            filter: "invert(90%) hue-rotate(180deg)"
                                        },
                                        title: "Sétedi на карте"
                                    }, void 0, false, {
                                        fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-lavender/10 to-transparent rounded-full blur-xl"
                                }, void 0, false, {
                                    fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/setedi-next/app/components/LocationMap.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(LocationMap, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = LocationMap;
var _c;
__turbopack_context__.k.register(_c, "LocationMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/setedi-next/app/components/PricesLuxury.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PricesLuxury
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/setedi-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/setedi-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/setedi-next/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// app/components/PricesLuxury.tsx
"use client";
;
;
const priceCategories = [
    {
        id: "massage",
        title: "МАССАЖИ",
        description: "Классические и специализированные техники"
    },
    {
        id: "signature",
        title: "СИГНАТУРНЫЕ ПРОЦЕДУРЫ",
        description: "Уникальные программы Sétedi"
    },
    {
        id: "combo",
        title: "КОМБИНАЦИИ",
        description: "Специальные предложения"
    }
];
const massageServices = [
    {
        name: "КЛАССИЧЕСКИЙ",
        description: "Общий или зональный массаж",
        durations: [
            {
                time: "30 мин",
                price: "2 100 ₽"
            },
            {
                time: "60 мин",
                price: "3 150 ₽",
                popular: true
            },
            {
                time: "90 мин",
                price: "4 500 ₽"
            },
            {
                time: "120 мин",
                price: "5 640 ₽"
            }
        ]
    },
    {
        name: "ЛИМФОДРЕНАЖНЫЙ",
        description: "Коррекция фигуры, работа с отёками",
        durations: [
            {
                time: "60 мин",
                price: "3 500 ₽"
            },
            {
                time: "90 мин",
                price: "4 900 ₽"
            },
            {
                time: "120 мин",
                price: "6 200 ₽"
            }
        ]
    },
    {
        name: "РЕЛАКС",
        description: "С аромамаслами, глубокое расслабление",
        durations: [
            {
                time: "60 мин",
                price: "3 800 ₽",
                popular: true
            },
            {
                time: "90 мин",
                price: "5 200 ₽"
            },
            {
                time: "120 мин",
                price: "6 600 ₽"
            }
        ]
    },
    {
        name: "СПОРТИВНЫЙ",
        description: "Интенсивная проработка мышц",
        durations: [
            {
                time: "60 мин",
                price: "4 000 ₽"
            },
            {
                time: "90 мин",
                price: "5 500 ₽"
            }
        ]
    }
];
const signatureServices = [
    {
        name: "SÉTEDI SIGNATURE",
        description: "Огненный массаж + камни + ароматерапия",
        duration: "120 мин",
        price: "6 700 ₽",
        details: "Полное погружение в релакс",
        popular: true
    },
    {
        name: "СИЛУЭТ",
        description: "Антицеллюлитный + моделирующий + обертывание",
        duration: "80 мин",
        price: "4 900 ₽",
        details: "Курс 5 процедур — 23 275 ₽",
        popular: true
    },
    {
        name: "ТИШИНА ТЕЛА",
        description: "Краниосакральная + звуковая терапия",
        duration: "90 мин",
        price: "5 500 ₽",
        details: "Работа с глубокими блоками"
    }
];
const comboServices = [
    {
        name: "РЕЛАКС + ОБЕРТЫВАНИЕ",
        description: "Полное обновление",
        duration: "120 мин",
        price: "4 900 ₽",
        badge: "Популярно"
    },
    {
        name: "МАССАЖ + ПАРАФИН",
        description: "Для рук и ног",
        duration: "130 мин",
        price: "6 600 ₽",
        badge: "Комфорт"
    },
    {
        name: "ПОЛНЫЙ УХОД",
        description: "Массаж + скраб + обертывание + маски",
        duration: "150 мин",
        price: "7 990 ₽",
        badge: "Премиум",
        featured: true
    }
];
function PricesLuxury() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("massage");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 px-6 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black"
            }, void 0, false, {
                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/4 right-1/4 w-64 h-64 bg-lavender/5 rounded-full blur-3xl"
            }, void 0, false, {
                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "text-center mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-20 h-px bg-gradient-to-r from-transparent to-lavender"
                                    }, void 0, false, {
                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lavender tracking-widest text-sm",
                                        children: "ЦЕНЫ"
                                    }, void 0, false, {
                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-20 h-px bg-gradient-to-l from-transparent to-lavender"
                                    }, void 0, false, {
                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-playfair text-4xl md:text-6xl tracking-wide mb-6",
                                children: [
                                    "ИНВЕСТИЦИЯ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lavender",
                                        children: "В СЕБЯ"
                                    }, void 0, false, {
                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-lg max-w-2xl mx-auto tracking-wide",
                                children: "Каждая процедура — это диалог с телом, проводимый опытными мастерами с использованием премиальной косметики"
                            }, void 0, false, {
                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-4 mb-16",
                        children: priceCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveCategory(category.id),
                                className: `relative px-8 py-3 rounded-full transition-all duration-500 ${activeCategory === category.id ? "text-white" : "text-gray-400 hover:text-white"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative z-10 tracking-widest text-sm",
                                        children: category.title
                                    }, void 0, false, {
                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    activeCategory === category.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layoutId: "activeCategory",
                                        className: "absolute inset-0 bg-gradient-to-r from-lavender/20 to-lavender/10 rounded-full border border-lavender/30"
                                    }, void 0, false, {
                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, category.id, true, {
                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-h-[600px]",
                        children: [
                            activeCategory === "massage" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    duration: 0.5
                                },
                                className: "space-y-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 tracking-widest text-sm",
                                            children: "БЛОК ИЗ 5 ПРОЦЕДУР — СКИДКА 5% | БЛОК ИЗ 10 — СКИДКА 10%"
                                        }, void 0, false, {
                                            fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                                        children: massageServices.map((service, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 30
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: 0.5,
                                                    delay: idx * 0.1
                                                },
                                                className: "bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-gray-800 rounded-2xl p-8 hover:border-lavender/30 transition-all group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-playfair text-xl tracking-wide mb-2",
                                                        children: service.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-400 text-sm mb-6 tracking-wider",
                                                        children: service.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: service.durations.map((duration, dIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-center py-3 border-b border-gray-800 last:border-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-white tracking-wider",
                                                                                children: duration.time
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                                                lineNumber: 216,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            duration.popular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs text-amber tracking-wider",
                                                                                children: "★"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                                                lineNumber: 220,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                                        lineNumber: 215,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-lavender font-medium tracking-wider",
                                                                        children: duration.price
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                                        lineNumber: 225,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, dIdx, true, {
                                                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://n1912623.yclients.com",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "w-full mt-8 py-3 border border-lavender/30 rounded-full text-lavender tracking-widest text-sm hover:bg-lavender/10 transition-colors inline-flex justify-center items-center",
                                                        children: "ЗАПИСАТЬСЯ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this),
                            activeCategory === "signature" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    duration: 0.5
                                },
                                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                                children: signatureServices.map((service, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 30
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay: idx * 0.1
                                        },
                                        className: `relative rounded-2xl overflow-hidden group ${service.popular ? "border border-lavender/30" : "border border-gray-800"}`,
                                        children: [
                                            service.popular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 right-4 z-20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 bg-gradient-to-r from-lavender to-purple-600 text-white text-xs tracking-widest rounded-full",
                                                    children: "ПОПУЛЯРНО"
                                                }, void 0, false, {
                                                    fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                lineNumber: 267,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-8 bg-gradient-to-b from-[#111] to-[#0a0a0a]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-playfair text-2xl tracking-wide mb-3",
                                                        children: service.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-400 text-sm mb-4 tracking-wider",
                                                        children: service.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-400 text-sm tracking-wider",
                                                                        children: "ВРЕМЯ"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                                        lineNumber: 284,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-white tracking-wider",
                                                                        children: service.duration
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                                        lineNumber: 287,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-400 text-sm tracking-wider",
                                                                        children: "СТОИМОСТЬ"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                                        lineNumber: 292,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-lavender text-xl tracking-wider",
                                                                        children: service.price
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                                        lineNumber: 295,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                                lineNumber: 291,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 21
                                                    }, this),
                                                    service.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-300 text-sm mb-6 tracking-wider",
                                                        children: service.details
                                                    }, void 0, false, {
                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://n1912623.yclients.com",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "w-full mt-8 py-3 border border-lavender/30 rounded-full text-lavender tracking-widest text-sm hover:bg-lavender/10 transition-colors inline-flex justify-center items-center",
                                                        children: "ВЫБРАТЬ ПРОЦЕДУРУ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                lineNumber: 274,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                        lineNumber: 255,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this),
                            activeCategory === "combo" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    duration: 0.5
                                },
                                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                                children: comboServices.map((service, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 30
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay: idx * 0.1
                                        },
                                        className: `relative rounded-2xl overflow-hidden group ${service.featured ? "border-2 border-amber/30" : "border border-gray-800"}`,
                                        children: [
                                            service.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 right-4 z-20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-3 py-1 text-white text-xs tracking-widest rounded-full ${service.featured ? "bg-gradient-to-r from-amber to-orange-600" : "bg-gradient-to-r from-lavender to-purple-600"}`,
                                                    children: service.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                lineNumber: 341,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-8 h-full ${service.featured ? "bg-gradient-to-b from-[#1a1a1a] to-[#111]" : "bg-gradient-to-b from-[#111] to-[#0a0a0a]"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-playfair text-2xl tracking-wide mb-3",
                                                        children: service.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-400 text-sm mb-4 tracking-wider",
                                                        children: service.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-400 text-sm tracking-wider",
                                                                        children: "ДЛИТЕЛЬНОСТЬ"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                                        lineNumber: 370,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-white tracking-wider",
                                                                        children: service.duration
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                                        lineNumber: 373,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-400 text-sm tracking-wider",
                                                                        children: "ИТОГОВАЯ ЦЕНА"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                                        lineNumber: 378,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-xl tracking-wider ${service.featured ? "text-amber" : "text-lavender"}`,
                                                                        children: service.price
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                                        lineNumber: 381,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://n1912623.yclients.com",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: `w-full py-3 px-3 rounded-full tracking-widest text-sm transition-all ${service.featured ? "bg-gradient-to-r from-amber/20 to-amber/10 border border-amber/30 text-amber hover:from-amber/30 hover:to-amber/20" : "bg-gradient-to-r from-lavender/20 to-lavender/10 border border-lavender/30 text-lavender hover:from-lavender/30 hover:to-lavender/20"}`,
                                                        children: "ВЫБРАТЬ КОМБО"
                                                    }, void 0, false, {
                                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                                lineNumber: 354,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                        lineNumber: 329,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        className: "mt-20 pt-12 border-t border-gray-800 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm tracking-widest mb-4",
                                children: "КАЖДАЯ ПРОЦЕДУРА НАЧИНАЕТСЯ С ОМОВЕНИЯ НОГ"
                            }, void 0, false, {
                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                lineNumber: 416,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$setedi$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-xs tracking-wider",
                                children: "Все цены указаны за один сеанс. Возможна оплата блоками со скидкой."
                            }, void 0, false, {
                                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                                lineNumber: 419,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/setedi-next/app/components/PricesLuxury.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s(PricesLuxury, "ZXsfIMjMqeNFWOm7UmhDqFGQZAQ=");
_c = PricesLuxury;
var _c;
__turbopack_context__.k.register(_c, "PricesLuxury");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=setedi-next_app_components_18305a90._.js.map