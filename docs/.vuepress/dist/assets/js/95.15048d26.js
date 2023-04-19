(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{373:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[s._v("#")]),s._v(" "+s._s(s.$frontmatter.title))]),s._v(" "),t("h2",{attrs:{id:"题目描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),t("p",[s._v("Given an array of unique elements, return all possible subsequences.")]),s._v(" "),t("p",[s._v("A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.")]),s._v(" "),t("p",[s._v("For example:")]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Subsequence"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [] | [1] | [2] | [1, 2]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[s._v("#")]),s._v(" 分析")]),s._v(" "),t("p",[s._v("看着这个题目，不知道同学有没有同感，似曾相识。")]),s._v(" "),t("p",[s._v("其实本质也还是排列组合（第一次做的时候真的蛮痛苦的这几个题目，绝对是分发特性的极致利用）。但是因为这道题目不限制顺序，[1, 2] 和 [2, 1] 认为是同一个，这就是和之前题目最大的不同")]),s._v(" "),t("p",[s._v("在之前的题目中，都是利用分发特性实现遍历，然后和去除了当前元素的剩余元素进行组合，从而得到结果，他们的结果，是考虑顺序的。")]),s._v(" "),t("p",[s._v("这个题的思路，有点类似，对于每一个元素，都只有两种选择，选 or 不选。所以我们只需要遍历一次，每个元素的处理都是选 or 不选，就能得到题目要的结果。")]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 仅仅是演示题目过程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n[1, 2]\n遍历到 1\n选1\n    1 | 遍历到 2\n        选2\n            得到 [1, 2]\n        不选2\n            得到 [1]\n不选1\n    遍历到 2\n        选2 \n            得到 [2]\n        不选2\n            得到 []\n*/")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"题解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[s._v("#")]),s._v(" 题解")]),s._v(" "),t("p",[s._v("有了思路，题解就非常简单了")]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Subsequence"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("infer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("F")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("infer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 选当前元素并递归 | 不选当前元素并递归")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("F")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("Subsequence"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Subsequence"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"知识点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[s._v("#")]),s._v(" 知识点")]),s._v(" "),t("ol",[t("li",[s._v("元组遍历套路")]),s._v(" "),t("li",[s._v("编程思路")])]),s._v(" "),t("p",[s._v("建议 4道题目放一起看看：\n全排列\n"),t("RouterLink",{attrs:{to:"/docs/medium/296-实现全排列.html"}},[s._v("296")]),s._v("\n所有组合\n"),t("RouterLink",{attrs:{to:"/docs/medium/4260-实现所有组合.html"}},[s._v("4260")]),s._v("\n排除了空的所有组合\n"),t("RouterLink",{attrs:{to:"/docs/medium/8767-Combination.html"}},[s._v("8767")]),s._v("\n不考虑顺序的组合\n"),t("RouterLink",{attrs:{to:"/docs//medium/8987-Subsequence.html"}},[s._v("8987")])],1),s._v(" "),t("p",[s._v("数学术语可能不太严谨，大家明白意思即可")])])}),[],!1,null,null,null);t.default=e.exports}}]);