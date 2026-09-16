(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AISection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AISection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const suggestions = [
    "What's your development process like?",
    "What tools and technologies do you use?",
    "Do you have any projects related to fintech?",
    "What inspires your work?"
];
function AISection() {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmit = async (text)=>{
        if (!text.trim()) return;
        setIsLoading(true);
        setResponse(null);
        setError(null);
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: text
                })
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || 'Failed to fetch response');
            }
            setResponse(data.reply);
        } catch (err) {
            setError(err.message || 'Something went wrong. Please try again.');
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "animate-fade-in delay-300 mobile-col mobile-gap-6 mobile-p-6",
        style: {
            backgroundColor: 'var(--chip-bg)',
            borderRadius: '24px',
            padding: '3rem',
            marginBottom: '6rem',
            display: 'flex',
            gap: '4rem',
            alignItems: 'flex-start'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobile-w-full",
                style: {
                    flex: '1',
                    minWidth: '300px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl mb-4",
                        children: "Ask Ayan's AI"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AISection.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-secondary",
                        style: {
                            lineHeight: '1.6',
                            maxWidth: '300px'
                        },
                        children: "Get quick answers about my work, process, tools or ideas. Try an example below or ask anything."
                    }, void 0, false, {
                        fileName: "[project]/src/components/AISection.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AISection.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobile-w-full",
                style: {
                    flex: '2',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "ai-search-form",
                        onSubmit: (e)=>{
                            e.preventDefault();
                            handleSubmit(query);
                        },
                        style: {
                            display: 'flex',
                            backgroundColor: 'var(--input-bg)',
                            border: '1px solid var(--input-border)',
                            borderRadius: '100px',
                            padding: '0.5rem 0.5rem 0.5rem 1.5rem',
                            alignItems: 'center',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ai-search-icon",
                                style: {
                                    color: '#0066FF',
                                    fontSize: '1.2rem',
                                    marginRight: '1rem',
                                    flexShrink: 0
                                },
                                children: "✨"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AISection.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "ai-search-input",
                                type: "text",
                                placeholder: "Ask a question about my work...",
                                value: query,
                                onChange: (e_0)=>setQuery(e_0.target.value),
                                disabled: isLoading,
                                style: {
                                    flex: '1',
                                    minWidth: 0,
                                    border: 'none',
                                    outline: 'none',
                                    fontSize: '1rem',
                                    color: 'var(--text-color)',
                                    background: 'transparent',
                                    opacity: isLoading ? 0.5 : 1,
                                    textOverflow: 'ellipsis'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/AISection.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "ai-search-btn",
                                type: "submit",
                                disabled: isLoading || !query.trim(),
                                style: {
                                    backgroundColor: 'var(--text-color)',
                                    color: 'var(--bg-color)',
                                    width: '40px',
                                    height: '40px',
                                    flexShrink: 0,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginLeft: '1rem',
                                    opacity: isLoading || !query.trim() ? 0.5 : 1,
                                    cursor: isLoading || !query.trim() ? 'default' : 'pointer',
                                    transition: 'opacity 0.2s'
                                },
                                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '16px',
                                        height: '16px',
                                        border: '2px solid var(--bg-color)',
                                        borderTopColor: 'transparent',
                                        borderRadius: '50%',
                                        animation: 'spin 1s linear infinite'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AISection.tsx",
                                    lineNumber: 108,
                                    columnNumber: 26
                                }, this) : '→'
                            }, void 0, false, {
                                fileName: "[project]/src/components/AISection.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AISection.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
          @keyframes spin { to { transform: rotate(360deg); } }
          @media (max-width: 768px) {
            .ai-search-form {
              padding: 0.5rem 0.5rem 0.5rem 1rem !important;
            }
            .ai-search-icon {
              margin-right: 0.5rem !important;
            }
            .ai-search-input {
              font-size: 0.85rem !important;
            }
            .ai-search-btn {
              margin-left: 0.5rem !important;
            }
          }
        `
                    }, void 0, false, {
                        fileName: "[project]/src/components/AISection.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    !response && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.75rem'
                        },
                        children: suggestions.map((suggestion, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setQuery(suggestion);
                                    handleSubmit(suggestion);
                                },
                                disabled: isLoading,
                                style: {
                                    backgroundColor: 'var(--bg-color)',
                                    border: '1px solid var(--border-color)',
                                    padding: '0.75rem 1.25rem',
                                    borderRadius: '100px',
                                    fontSize: '0.85rem',
                                    color: 'var(--secondary-text)',
                                    transition: 'border-color 0.2s',
                                    cursor: isLoading ? 'default' : 'pointer',
                                    opacity: isLoading ? 0.5 : 1
                                },
                                onMouseOver: (e_1)=>{
                                    if (!isLoading) e_1.currentTarget.style.borderColor = 'var(--text-color)';
                                },
                                onMouseOut: (e_2)=>{
                                    if (!isLoading) e_2.currentTarget.style.borderColor = 'var(--border-color)';
                                },
                                children: suggestion
                            }, index, false, {
                                fileName: "[project]/src/components/AISection.tsx",
                                lineNumber: 142,
                                columnNumber: 53
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AISection.tsx",
                        lineNumber: 137,
                        columnNumber: 33
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '1.5rem',
                            backgroundColor: 'rgba(255, 0, 0, 0.05)',
                            borderRadius: '16px',
                            color: 'red',
                            fontSize: '0.9rem',
                            border: '1px solid rgba(255,0,0,0.1)'
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/AISection.tsx",
                        lineNumber: 164,
                        columnNumber: 19
                    }, this),
                    response && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '1.5rem 2rem',
                            backgroundColor: 'var(--bg-color)',
                            borderRadius: '16px',
                            border: '1px solid var(--border-color)',
                            fontSize: '1rem',
                            lineHeight: '1.7',
                            color: 'var(--text-color)',
                            animation: 'fadeIn 0.5s ease-out',
                            whiteSpace: 'pre-wrap'
                        },
                        children: response
                    }, void 0, false, {
                        fileName: "[project]/src/components/AISection.tsx",
                        lineNumber: 175,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AISection.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AISection.tsx",
        lineNumber: 36,
        columnNumber: 10
    }, this);
}
_s(AISection, "efbB1yCmcLM3RWTQpYCb//HUhR0=");
_c = AISection;
var _c;
__turbopack_context__.k.register(_c, "AISection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Contact() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(48);
    if ($[0] !== "a12eb83af52973f3b9e6c819f4524314750482804922da8b4f1bed6cfb3c42f4") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a12eb83af52973f3b9e6c819f4524314750482804922da8b4f1bed6cfb3c42f4";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            name: "",
            email: "",
            message: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] !== formData.email || $[3] !== formData.message || $[4] !== formData.name) {
        t1 = ({
            "Contact[handleSubmit]": (e)=>{
                e.preventDefault();
                const text = `Hi Ayan, I would like to contact you.\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
                const url = `https://wa.me/916393358683?text=${encodeURIComponent(text)}`;
                window.open(url, "_blank");
            }
        })["Contact[handleSubmit]"];
        $[2] = formData.email;
        $[3] = formData.message;
        $[4] = formData.name;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const handleSubmit = t1;
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Contact[handleChange]": (e_0)=>{
                setFormData({
                    "Contact[handleChange > setFormData()]": (prev)=>({
                            ...prev,
                            [e_0.target.name]: e_0.target.value
                        })
                }["Contact[handleChange > setFormData()]"]);
            }
        })["Contact[handleChange]"];
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const handleChange = t2;
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            marginBottom: "6rem",
            paddingTop: "4rem",
            paddingBottom: "4rem",
            borderTop: "1px solid var(--border-color)"
        };
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "4rem"
        };
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            flex: "1",
            minWidth: "300px"
        };
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-5xl mb-4",
            children: "Got an idea? Let's chat."
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[9] = t5;
        $[10] = t6;
    } else {
        t5 = $[9];
        t6 = $[10];
    }
    let t7;
    let t8;
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-secondary mb-8",
            style: {
                lineHeight: "1.6"
            },
            children: "Whether you have a project in mind, need some help with your current stack, or just want to say hi, my inbox is always open. Drop me a message and I'll get back to you!"
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        t8 = {
            backgroundColor: "var(--chip-bg)",
            padding: "2rem",
            borderRadius: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem"
        };
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-secondary tracking-widest uppercase font-semibold block mb-1",
            children: "Email"
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[11] = t7;
        $[12] = t8;
        $[13] = t9;
    } else {
        t7 = $[11];
        t8 = $[12];
        t9 = $[13];
    }
    let t10;
    let t11;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "mailto:ayanpratap5@gmail.com",
                    className: "text-lg hover:text-secondary transition-colors",
                    style: {
                        fontWeight: 500
                    },
                    children: "ayanpratap5@gmail.com"
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 126,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-secondary tracking-widest uppercase font-semibold block mb-1",
            children: "Phone"
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t11;
    } else {
        t10 = $[14];
        t11 = $[15];
    }
    let t12;
    let t13;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "tel:+916393358683",
                    className: "text-lg hover:text-secondary transition-colors",
                    style: {
                        fontWeight: 500
                    },
                    children: "+91 6393358683"
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 139,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        t13 = {
            display: "flex",
            gap: "1rem",
            marginTop: "1rem"
        };
        $[16] = t12;
        $[17] = t13;
    } else {
        t12 = $[16];
        t13 = $[17];
    }
    let t14;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            padding: "0.85rem",
            backgroundColor: "var(--input-bg)",
            border: "1px solid var(--border-color)",
            borderRadius: "50%",
            color: "var(--text-color)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        };
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://github.com/AyanPrt43",
            target: "_blank",
            rel: "noopener noreferrer",
            style: t14,
            className: "hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 171,
                    columnNumber: 243
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Contact.tsx",
                lineNumber: 171,
                columnNumber: 175
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            padding: "0.85rem",
            backgroundColor: "var(--input-bg)",
            border: "1px solid var(--border-color)",
            borderRadius: "50%",
            color: "#0A66C2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        };
        $[20] = t16;
    } else {
        t16 = $[20];
    }
    let t17;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://www.linkedin.com/in/ayan-pratap",
            target: "_blank",
            rel: "noopener noreferrer",
            style: t16,
            className: "hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 194,
                    columnNumber: 254
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Contact.tsx",
                lineNumber: 194,
                columnNumber: 186
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[21] = t17;
    } else {
        t17 = $[21];
    }
    let t18;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            padding: "0.85rem",
            backgroundColor: "var(--input-bg)",
            border: "1px solid var(--border-color)",
            borderRadius: "50%",
            color: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        };
        $[22] = t18;
    } else {
        t18 = $[22];
    }
    let t19;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mobile-w-full",
            style: t5,
            children: [
                t6,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t8,
                    children: [
                        t10,
                        t12,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: t13,
                            children: [
                                t15,
                                t17,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://wa.me/916393358683",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: t18,
                                    className: "hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "22",
                                        height: "22",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 217,
                                            columnNumber: 344
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 217,
                                        columnNumber: 276
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Contact.tsx",
                                    lineNumber: 217,
                                    columnNumber: 114
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Contact.tsx",
                            lineNumber: 217,
                            columnNumber: 87
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 217,
                    columnNumber: 61
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[23] = t19;
    } else {
        t19 = $[23];
    }
    let t20;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            flex: "1.2",
            minWidth: "300px"
        };
        $[24] = t20;
    } else {
        t20 = $[24];
    }
    let t21;
    let t22;
    let t23;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = {
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem"
        };
        t22 = {
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
        };
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "name",
            className: "text-sm font-semibold",
            children: "Name"
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[25] = t21;
        $[26] = t22;
        $[27] = t23;
    } else {
        t21 = $[25];
        t22 = $[26];
        t23 = $[27];
    }
    let t24;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = {
            padding: "1rem",
            borderRadius: "12px",
            border: "1px solid var(--border-color)",
            backgroundColor: "var(--input-bg)",
            color: "var(--text-color)",
            fontSize: "1rem",
            outline: "none",
            transition: "border-color 0.2s",
            fontFamily: "inherit"
        };
        $[28] = t24;
    } else {
        t24 = $[28];
    }
    let t25;
    if ($[29] !== formData.name) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t22,
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    id: "name",
                    name: "name",
                    value: formData.name,
                    onChange: handleChange,
                    required: true,
                    placeholder: "Your name",
                    style: t24,
                    onFocus: _ContactInputOnFocus,
                    onBlur: _ContactInputOnBlur
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 274,
                    columnNumber: 33
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[29] = formData.name;
        $[30] = t25;
    } else {
        t25 = $[30];
    }
    let t26;
    let t27;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = {
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
        };
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "text-sm font-semibold",
            children: "Email"
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[31] = t26;
        $[32] = t27;
    } else {
        t26 = $[31];
        t27 = $[32];
    }
    let t28;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = {
            padding: "1rem",
            borderRadius: "12px",
            border: "1px solid var(--border-color)",
            backgroundColor: "var(--input-bg)",
            color: "var(--text-color)",
            fontSize: "1rem",
            outline: "none",
            transition: "border-color 0.2s",
            fontFamily: "inherit"
        };
        $[33] = t28;
    } else {
        t28 = $[33];
    }
    let t29;
    if ($[34] !== formData.email) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t26,
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    id: "email",
                    name: "email",
                    value: formData.email,
                    onChange: handleChange,
                    required: true,
                    placeholder: "your.email@example.com",
                    style: t28,
                    onFocus: _ContactInputOnFocus2,
                    onBlur: _ContactInputOnBlur2
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 314,
                    columnNumber: 33
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 314,
            columnNumber: 11
        }, this);
        $[34] = formData.email;
        $[35] = t29;
    } else {
        t29 = $[35];
    }
    let t30;
    let t31;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = {
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
        };
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "message",
            className: "text-sm font-semibold",
            children: "Message"
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[36] = t30;
        $[37] = t31;
    } else {
        t30 = $[36];
        t31 = $[37];
    }
    let t32;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = {
            padding: "1rem",
            borderRadius: "12px",
            border: "1px solid var(--border-color)",
            backgroundColor: "var(--input-bg)",
            color: "var(--text-color)",
            fontSize: "1rem",
            outline: "none",
            resize: "vertical",
            transition: "border-color 0.2s",
            fontFamily: "inherit"
        };
        $[38] = t32;
    } else {
        t32 = $[38];
    }
    let t33;
    if ($[39] !== formData.message) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t30,
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    id: "message",
                    name: "message",
                    value: formData.message,
                    onChange: handleChange,
                    required: true,
                    placeholder: "How can I help you?",
                    rows: 5,
                    style: t32,
                    onFocus: _ContactTextareaOnFocus,
                    onBlur: _ContactTextareaOnBlur
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 355,
                    columnNumber: 33
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 355,
            columnNumber: 11
        }, this);
        $[39] = formData.message;
        $[40] = t33;
    } else {
        t33 = $[40];
    }
    let t34;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = {
            padding: "1rem 2rem",
            backgroundColor: "var(--text-color)",
            color: "var(--bg-color)",
            borderRadius: "100px",
            fontSize: "1rem",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            cursor: "pointer",
            transition: "opacity 0.2s",
            fontFamily: "inherit",
            border: "none",
            marginTop: "0.5rem"
        };
        $[41] = t34;
    } else {
        t34 = $[41];
    }
    let t35;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            style: t34,
            onMouseOver: _ContactButtonOnMouseOver,
            onMouseOut: _ContactButtonOnMouseOut,
            children: [
                "Send Message",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "→"
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 386,
                    columnNumber: 135
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 386,
            columnNumber: 11
        }, this);
        $[42] = t35;
    } else {
        t35 = $[42];
    }
    let t36;
    if ($[43] !== handleSubmit || $[44] !== t25 || $[45] !== t29 || $[46] !== t33) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "contact",
            className: "animate-fade-in delay-300",
            style: t3,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobile-col mobile-gap-8",
                style: t4,
                children: [
                    t19,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-w-full",
                        style: t20,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            style: t21,
                            children: [
                                t25,
                                t29,
                                t33,
                                t35
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Contact.tsx",
                            lineNumber: 393,
                            columnNumber: 182
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Contact.tsx",
                        lineNumber: 393,
                        columnNumber: 139
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Contact.tsx",
                lineNumber: 393,
                columnNumber: 82
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, this);
        $[43] = handleSubmit;
        $[44] = t25;
        $[45] = t29;
        $[46] = t33;
        $[47] = t36;
    } else {
        t36 = $[47];
    }
    return t36;
}
_s(Contact, "AVhEfndA4vGEUeeFDmvQFHKomrk=");
_c = Contact;
function _ContactButtonOnMouseOut(e_8) {
    return e_8.currentTarget.style.opacity = "1";
}
function _ContactButtonOnMouseOver(e_7) {
    return e_7.currentTarget.style.opacity = "0.8";
}
function _ContactTextareaOnBlur(e_6) {
    return e_6.target.style.borderColor = "var(--border-color)";
}
function _ContactTextareaOnFocus(e_5) {
    return e_5.target.style.borderColor = "var(--text-color)";
}
function _ContactInputOnBlur2(e_4) {
    return e_4.target.style.borderColor = "var(--border-color)";
}
function _ContactInputOnFocus2(e_3) {
    return e_3.target.style.borderColor = "var(--text-color)";
}
function _ContactInputOnBlur(e_2) {
    return e_2.target.style.borderColor = "var(--border-color)";
}
function _ContactInputOnFocus(e_1) {
    return e_1.target.style.borderColor = "var(--text-color)";
}
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ProjectCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    if ($[0] !== "22d224119e8787ae01f1a01c6b768599641c32b2d01dfda4ef11123e60fac3a6") {
        for(let $i = 0; $i < 56; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "22d224119e8787ae01f1a01c6b768599641c32b2d01dfda4ef11123e60fac3a6";
    }
    const { title, description, tags, imageSrc, githubLink, liveLink } = t0;
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hoverTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ProjectCard[useEffect()]": ()=>{
                setMounted(true);
            }
        })["ProjectCard[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] !== liveLink) {
        t3 = ({
            "ProjectCard[handleMouseEnter]": ()=>{
                if (!liveLink) {
                    return;
                }
                setIsHovered(true);
                hoverTimeoutRef.current = setTimeout({
                    "ProjectCard[handleMouseEnter > setTimeout()]": ()=>{
                        setIsModalOpen(true);
                        setIsHovered(false);
                    }
                }["ProjectCard[handleMouseEnter > setTimeout()]"], 800);
            }
        })["ProjectCard[handleMouseEnter]"];
        $[3] = liveLink;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleMouseEnter = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "ProjectCard[handleMouseLeave]": ()=>{
                setIsHovered(false);
                if (hoverTimeoutRef.current) {
                    clearTimeout(hoverTimeoutRef.current);
                }
            }
        })["ProjectCard[handleMouseLeave]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const handleMouseLeave = t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem"
        };
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const t6 = liveLink ? "pointer" : "default";
    const t7 = isHovered ? "scale(1.08)" : "scale(1)";
    const t8 = isHovered ? "transform 0.8s cubic-bezier(0, 0.9, 0.1, 1)" : "transform 0.3s ease-out";
    let t9;
    if ($[7] !== t6 || $[8] !== t7 || $[9] !== t8) {
        t9 = {
            position: "relative",
            width: "100%",
            aspectRatio: "16/10",
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: "var(--chip-bg)",
            cursor: t6,
            transform: t7,
            transition: t8
        };
        $[7] = t6;
        $[8] = t7;
        $[9] = t8;
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] !== liveLink) {
        t10 = ({
            "ProjectCard[<div>.onClick]": ()=>{
                if (hoverTimeoutRef.current) {
                    clearTimeout(hoverTimeoutRef.current);
                }
                if (liveLink) {
                    setIsModalOpen(true);
                    setIsHovered(false);
                }
            }
        })["ProjectCard[<div>.onClick]"];
        $[11] = liveLink;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            objectFit: "cover",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
        };
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] !== imageSrc || $[15] !== title) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: imageSrc,
            alt: title,
            fill: true,
            style: t11,
            className: "group-hover:scale-105 grayscale group-hover:grayscale-0"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[14] = imageSrc;
        $[15] = title;
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] !== handleMouseEnter || $[18] !== t10 || $[19] !== t12 || $[20] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t9,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            onClick: t10,
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[17] = handleMouseEnter;
        $[18] = t10;
        $[19] = t12;
        $[20] = t9;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem"
        };
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== title) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-medium tracking-tight mb-2",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[23] = title;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            lineHeight: "1.6"
        };
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] !== description) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-secondary",
            style: t16,
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[26] = description;
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    let t18;
    if ($[28] !== t15 || $[29] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t15,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[28] = t15;
        $[29] = t17;
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    let t19;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            alignItems: "center"
        };
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] !== tags) {
        let t21;
        if ($[34] !== tags.length) {
            t21 = ({
                "ProjectCard[tags.map()]": (tag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "0.75rem",
                            color: "var(--secondary-text)",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em"
                        },
                        children: [
                            tag,
                            i < tags.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    margin: "0 0.5rem",
                                    opacity: 0.5
                                },
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectCard.tsx",
                                lineNumber: 237,
                                columnNumber: 41
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/ProjectCard.tsx",
                        lineNumber: 232,
                        columnNumber: 48
                    }, this)
            })["ProjectCard[tags.map()]"];
            $[34] = tags.length;
            $[35] = t21;
        } else {
            t21 = $[35];
        }
        t20 = tags.map(t21);
        $[32] = tags;
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    let t21;
    if ($[36] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t19,
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[36] = t20;
        $[37] = t21;
    } else {
        t21 = $[37];
    }
    let t22;
    if ($[38] !== githubLink || $[39] !== liveLink) {
        t22 = (githubLink || liveLink) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                gap: "1.5rem",
                marginTop: "0.5rem"
            },
            children: [
                githubLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: githubLink,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-sm font-medium hover:text-secondary transition-colors",
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        borderBottom: "1px solid currentColor",
                        paddingBottom: "2px"
                    },
                    children: "GitHub"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard.tsx",
                    lineNumber: 267,
                    columnNumber: 23
                }, this),
                liveLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: liveLink,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-sm font-medium hover:text-secondary transition-colors",
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        borderBottom: "1px solid currentColor",
                        paddingBottom: "2px"
                    },
                    children: "Live Demo"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard.tsx",
                    lineNumber: 273,
                    columnNumber: 34
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 263,
            columnNumber: 39
        }, this);
        $[38] = githubLink;
        $[39] = liveLink;
        $[40] = t22;
    } else {
        t22 = $[40];
    }
    let t23;
    if ($[41] !== t18 || $[42] !== t21 || $[43] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t14,
            children: [
                t18,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[41] = t18;
        $[42] = t21;
        $[43] = t22;
        $[44] = t23;
    } else {
        t23 = $[44];
    }
    let t24;
    if ($[45] !== t13 || $[46] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t5,
            className: "group",
            children: [
                t13,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[45] = t13;
        $[46] = t23;
        $[47] = t24;
    } else {
        t24 = $[47];
    }
    let t25;
    if ($[48] !== isModalOpen || $[49] !== liveLink || $[50] !== mounted || $[51] !== title) {
        t25 = isModalOpen && liveLink && mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                backdropFilter: "blur(8px)",
                zIndex: 99999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "2rem",
                animation: "modalFadeIn 0.3s ease-out forwards"
            },
            onClick: {
                "ProjectCard[<div>.onClick]": ()=>setIsModalOpen(false)
            }["ProjectCard[<div>.onClick]"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: "\n            @keyframes modalFadeIn {\n              from { opacity: 0; transform: scale(0.95); }\n              to { opacity: 1; transform: scale(1); }\n            }\n          "
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard.tsx",
                    lineNumber: 323,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "100%",
                        maxWidth: "1200px",
                        height: "85vh",
                        backgroundColor: "var(--bg-color)",
                        borderRadius: "16px",
                        overflow: "hidden",
                        position: "relative",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        flexDirection: "column"
                    },
                    onClick: _ProjectCardDivOnClick,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "1rem 1.5rem",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                borderBottom: "1px solid var(--border-color)",
                                backgroundColor: "var(--bg-color)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectCard.tsx",
                                            lineNumber: 345,
                                            columnNumber: 14
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-secondary bg-[var(--chip-bg)] px-2 py-1 rounded-full uppercase tracking-wider",
                                            children: "Live Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectCard.tsx",
                                            lineNumber: 345,
                                            columnNumber: 58
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectCard.tsx",
                                    lineNumber: 341,
                                    columnNumber: 12
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "1rem",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: liveLink,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-sm font-medium hover:text-secondary transition-colors",
                                            children: "Open in new tab ↗"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectCard.tsx",
                                            lineNumber: 349,
                                            columnNumber: 14
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "ProjectCard[<button>.onClick]": ()=>setIsModalOpen(false)
                                            }["ProjectCard[<button>.onClick]"],
                                            style: {
                                                width: "32px",
                                                height: "32px",
                                                borderRadius: "50%",
                                                backgroundColor: "var(--chip-bg)",
                                                color: "var(--text-color)",
                                                border: "none",
                                                cursor: "pointer",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                fontSize: "1rem",
                                                transition: "opacity 0.2s"
                                            },
                                            onMouseOver: _ProjectCardButtonOnMouseOver,
                                            onMouseOut: _ProjectCardButtonOnMouseOut,
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectCard.tsx",
                                            lineNumber: 349,
                                            columnNumber: 167
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectCard.tsx",
                                    lineNumber: 345,
                                    columnNumber: 192
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectCard.tsx",
                            lineNumber: 334,
                            columnNumber: 43
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                position: "relative",
                                backgroundColor: "#fff"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: liveLink,
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    border: "none"
                                },
                                title: `Live Preview of ${title}`,
                                loading: "lazy",
                                sandbox: "allow-scripts allow-same-origin allow-forms allow-popups"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectCard.tsx",
                                lineNumber: 368,
                                columnNumber: 12
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard.tsx",
                            lineNumber: 364,
                            columnNumber: 124
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectCard.tsx",
                    lineNumber: 323,
                    columnNumber: 237
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 307,
            columnNumber: 62
        }, this), document.body);
        $[48] = isModalOpen;
        $[49] = liveLink;
        $[50] = mounted;
        $[51] = title;
        $[52] = t25;
    } else {
        t25 = $[52];
    }
    let t26;
    if ($[53] !== t24 || $[54] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 383,
            columnNumber: 11
        }, this);
        $[53] = t24;
        $[54] = t25;
        $[55] = t26;
    } else {
        t26 = $[55];
    }
    return t26;
}
_s(ProjectCard, "a59VmTepMSf8wZC6vqSbqc3beGM=");
_c = ProjectCard;
function _ProjectCardButtonOnMouseOut(e_1) {
    return e_1.currentTarget.style.opacity = "1";
}
function _ProjectCardButtonOnMouseOver(e_0) {
    return e_0.currentTarget.style.opacity = "0.7";
}
function _ProjectCardDivOnClick(e) {
    return e.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ThemeToggle() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "dfc486eee3460aa6c0620f4a13c853ca4bd994dfc91d3655269dbfca8e5403b3") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dfc486eee3460aa6c0620f4a13c853ca4bd994dfc91d3655269dbfca8e5403b3";
    }
    const { resolvedTheme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ThemeToggle[useEffect()]": ()=>setMounted(true)
        })["ThemeToggle[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (!mounted) {
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 32,
                    height: 32
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ThemeToggle.tsx",
                lineNumber: 36,
                columnNumber: 12
            }, this);
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        return t2;
    }
    let t2;
    if ($[4] !== resolvedTheme || $[5] !== setTheme) {
        t2 = ({
            "ThemeToggle[<button>.onClick]": ()=>setTheme(resolvedTheme === "dark" ? "light" : "dark")
        })["ThemeToggle[<button>.onClick]"];
        $[4] = resolvedTheme;
        $[5] = setTheme;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            background: "transparent",
            border: "none",
            padding: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "var(--text-color)",
            transition: "opacity 0.2s",
            opacity: 0.7
        };
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== resolvedTheme) {
        t4 = resolvedTheme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "5"
                }, void 0, false, {
                    fileName: "[project]/src/components/ThemeToggle.tsx",
                    lineNumber: 77,
                    columnNumber: 180
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "1",
                    x2: "12",
                    y2: "3"
                }, void 0, false, {
                    fileName: "[project]/src/components/ThemeToggle.tsx",
                    lineNumber: 77,
                    columnNumber: 212
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "21",
                    x2: "12",
                    y2: "23"
                }, void 0, false, {
                    fileName: "[project]/src/components/ThemeToggle.tsx",
                    lineNumber: 77,
                    columnNumber: 250
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "4.22",
                    y1: "4.22",
                    x2: "5.64",
                    y2: "5.64"
                }, void 0, false, {
                    fileName: "[project]/src/components/ThemeToggle.tsx",
                    lineNumber: 77,
                    columnNumber: 290
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "18.36",
                    y1: "18.36",
                    x2: "19.78",
                    y2: "19.78"
                }, void 0, false, {
                    fileName: "[project]/src/components/ThemeToggle.tsx",
                    lineNumber: 77,
                    columnNumber: 338
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "1",
                    y1: "12",
                    x2: "3",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/src/components/ThemeToggle.tsx",
                    lineNumber: 77,
                    columnNumber: 390
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "21",
                    y1: "12",
                    x2: "23",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/src/components/ThemeToggle.tsx",
                    lineNumber: 77,
                    columnNumber: 428
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "4.22",
                    y1: "19.78",
                    x2: "5.64",
                    y2: "18.36"
                }, void 0, false, {
                    fileName: "[project]/src/components/ThemeToggle.tsx",
                    lineNumber: 77,
                    columnNumber: 468
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "18.36",
                    y1: "5.64",
                    x2: "19.78",
                    y2: "4.22"
                }, void 0, false, {
                    fileName: "[project]/src/components/ThemeToggle.tsx",
                    lineNumber: 77,
                    columnNumber: 518
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ThemeToggle.tsx",
            lineNumber: 77,
            columnNumber: 37
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 12.79A9 9 1 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            }, void 0, false, {
                fileName: "[project]/src/components/ThemeToggle.tsx",
                lineNumber: 77,
                columnNumber: 720
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ThemeToggle.tsx",
            lineNumber: 77,
            columnNumber: 577
        }, this);
        $[8] = resolvedTheme;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t2 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t2,
            style: t3,
            onMouseOver: _ThemeToggleButtonOnMouseOver,
            onMouseOut: _ThemeToggleButtonOnMouseOut,
            "aria-label": "Toggle Dark Mode",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/ThemeToggle.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[10] = t2;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    return t5;
}
_s(ThemeToggle, "b1Q7oOBxBU62ucwZcZgel2Hl7S4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
function _ThemeToggleButtonOnMouseOut(e_0) {
    return e_0.currentTarget.style.opacity = "0.7";
}
function _ThemeToggleButtonOnMouseOver(e) {
    return e.currentTarget.style.opacity = "1";
}
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_1ixs4b3._.js.map