import{_ as s,o as n,c as a,a as l}from"./app.1bea4cfd.js";const A='{"title":"322.\u96F6\u94B1\u5151\u6362","description":"","frontmatter":{"title":"322.\u96F6\u94B1\u5151\u6362"},"headers":[{"level":2,"title":"\u5206\u6790","slug":"\u5206\u6790"},{"level":2,"title":"\u89E3\u9898","slug":"\u89E3\u9898"}],"relativePath":"leetcode/easy/322.\u96F6\u94B1\u5151\u6362.md"}',p={},o=l(`<p><a href="https://leetcode-cn.com/problems/coin-change/" target="_blank" rel="noopener noreferrer">\u539F\u9898\u5730\u5740</a></p><p>\u7ED9\u5B9A\u4E0D\u540C\u9762\u989D\u7684\u786C\u5E01 coins \u548C\u4E00\u4E2A\u603B\u91D1\u989D amount\u3002\u7F16\u5199\u4E00\u4E2A\u51FD\u6570\u6765\u8BA1\u7B97\u53EF\u4EE5\u51D1\u6210\u603B\u91D1\u989D\u6240\u9700\u7684\u6700\u5C11\u7684\u786C\u5E01\u4E2A\u6570\u3002\u5982\u679C\u6CA1\u6709\u4EFB\u4F55\u4E00\u79CD\u786C\u5E01\u7EC4\u5408\u80FD\u7EC4\u6210\u603B\u91D1\u989D\uFF0C\u8FD4\u56DE -1\u3002</p><p>\u793A\u4F8B 1:</p><div class="language-md"><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165: coins = [1, 2, 5], amount = 11</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA: 3 </span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u91CA: 11 = 5 + 5 + 1</span></span>
<span class="line"></span></code></pre></div><p>\u793A\u4F8B 2:</p><div class="language-md"><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165: coins = </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">, amount = 3</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA: -1</span></span>
<span class="line"></span></code></pre></div><p>\u8BF4\u660E: \u4F60\u53EF\u4EE5\u8BA4\u4E3A\u6BCF\u79CD\u786C\u5E01\u7684\u6570\u91CF\u662F\u65E0\u9650\u7684\u3002</p><h2 id="\u5206\u6790" tabindex="-1">\u5206\u6790 <a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a></h2><p>\u62FF\u793A\u4F8B1\u7684\u5206\u6790\uFF1A</p><div class="language-md"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- \u7528f(x)\u8868\u793A\u6BCF\u4E2Aamount\u5BF9\u5E94\u7684\u6700\u5C0F\u786C\u5E01\u6570 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> = 0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- f[1]\u53EA\u6709\u4E00\u79CD\u53EF\u80FD\u3002 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> = 1 - 1 = 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- f[2]\u6709\u4E24\u79CD\u53EF\u80FD\uFF0C f[2] = 2-1-1 = 2 or f[2] = 2 - 2 = 1\uFF0C\u53D6\u6700\u5C0F\u5C31\u662Ff[2] = 1 --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- \u516C\u5F0F\u5C31\u51FA\u6765\u4E86 f[n] = Math.min(f[n - coins[1]] + 1, f[n - coins[2]] + 1, ...) --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> = Math.min(f[2 - 1] + 1, f[2 - 2] + 1) = 1</span></span>
<span class="line"></span></code></pre></div><h2 id="\u89E3\u9898" tabindex="-1">\u89E3\u9898 <a class="header-anchor" href="#\u89E3\u9898" aria-hidden="true">#</a></h2><p>\u52A8\u6001\u89C4\u5212\u7684\u96BE\u70B9\u5C31\u662F\u90A3\u4E2A\u516C\u5F0F\uFF0C\u53EA\u8981\u516C\u5F0F\u51FA\u6765\u4E86\uFF0C\u9898\u5C31\u597D\u89E3\u4E86\uFF0C\u4E0A\u9762\u6211\u4EEC\u5DF2\u7ECF\u63A8\u5BFC\u51FA\u4E86\u516C\u5F0F\uFF0C\u4E0B\u9762\u76F4\u63A5\u516C\u5E03\u7B54\u6848</p><div class="language-js"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">number[]</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">coins</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">number</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">amount</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">number</span><span style="color:#89DDFF;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> coinChange </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">coins</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> amount</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u5B9A\u4E49\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5B58\u653E0-amount\u6BCF\u4E00\u4E2A\u5BF9\u5E94\u7684\u6700\u5C0F\u786C\u5E01\u6570</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">f</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u5DF2\u77E5f[0] = 0</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">f</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u8FD9\u91CCf[0]\u5DF2\u6709\u503C\uFF0C\u9ED8\u8BA4i\u4ECE1\u5F00\u59CB</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">amount</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u9ED8\u8BA4\u7ED9f[i]\u6700\u5927\u503C\uFF0C\u8FD9\u6837\u5728\u540E\u9762Math.min\u5C31\u80FD\u786E\u4FDD\u88AB\u66F4\u5C0F\u7684\u503C\u66F4\u65B0</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">f</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">Infinity;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">coins</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">coins</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u52A8\u6001\u66F4\u65B0\u6BCF\u4E00\u5C42</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">f</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">min</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">f</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">f</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">coins</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">]] </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// f[amount]\u4E3A\u65E0\u7A77\u5927\uFF0C\u8BF4\u660E\u6CA1\u6709\u6EE1\u8DB3\u6761\u4EF6\u7684\u786C\u5E01\u6570\uFF0C\u8FD4\u56DE-1</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">f</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">amount</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">Infinity</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">f</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">amount</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6267\u884C\u7528\u65F6\uFF1A116 ms, \u5728\u6240\u6709 JavaScript \u63D0\u4EA4\u4E2D\u51FB\u8D25\u4E8685.00%\u7684\u7528\u6237</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5185\u5B58\u6D88\u8017\uFF1A42.4 MB, \u5728\u6240\u6709 JavaScript \u63D0\u4EA4\u4E2D\u51FB\u8D25\u4E8640.12%\u7684\u7528\u6237</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(ac) a\u662F\u91D1\u989D\uFF0Cc\u662Fcoins\u957F\u5EA6</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO(n) n\u662Famount\u7684\u503C</span></span>
<span class="line"></span></code></pre></div>`,13),t=[o];function e(c,r,y,F,i,D){return n(),a("div",null,t)}var f=s(p,[["render",e]]);export{A as __pageData,f as default};
